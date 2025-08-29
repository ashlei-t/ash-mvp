import { useContext, useState } from 'react';
import { ReactTyped } from "react-typed"; // React Typed library used to animate dialogue
import { QuizContext } from '../Helpers/Contexts'; 
import '../App.css';

// WELCOME PAGE
export default function MainMenu() {
  const { setGameState, setPokebud } = useContext(QuizContext);
  const [ showChoices, setShowChoices ] = useState(false);
  const [ loading, setLoading ] = useState(false)

  const handleRandomPick = async () => {
    try {
      const response = await fetch('/api/pokemon/random');
      if (response.ok) {
        const data = await response.json();
        setPokebud({
          pokeid: data.id,
          pokename: data.name,
          pokesprite: data.sprite
        });
        setGameState("pokebud");
      }
    } catch (error) {
      console.error("Error fetching random Pokemon:", error);
    }
  };

  const handleAshPick = () => {
    setGameState("selection");
  };

  const handleQuiz = () => {
    setGameState("questions");
  };

  return (
    <>
      <div className="Menu">
          <h1>Welcome!</h1>
          <div className="dialogue">
            {loading ? ""
            : (
              <ReactTyped
                startWhenVisible
                typeSpeed={0}
                backSpeed={0}
                loop={false}
                showCursor={false}
                strings={[`
                    <p>Welcome to the Adopt-a-Pokebud Agency, where we match you with your ideal best bud… assuming, of course, that you're worthy.</p>
                    <p>No pressure.</p>
                    <p>Ready?</p>
                `]}
                onComplete={() => setShowChoices(true)} // Once the dialogue has completed this will run setShowForm
              />
            )}
          </div>

          { showChoices && (
          <>
          <form className="transition-form">
            <button type="button" className="submit" onClick={handleRandomPick}>Pick for me!</button>
            <button type="button" className="submit" onClick={handleAshPick}>Choose like Ash</button>
            <button type="button" className="submit" onClick={handleQuiz}>Take a Quiz</button>
          </form>
          </>
        )}

      </div>
    </>
  );
}

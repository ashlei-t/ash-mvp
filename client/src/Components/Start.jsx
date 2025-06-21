import { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';

// START - Welcome page
export default function Start() {
  const { setGameState  } = useContext(QuizContext);

  return (
    <>
      <div className="Start">
          <h1>ash's pokemon remake</h1>
              <div className="dialogue">
                <img className="bulbasaur" src="https://i.pinimg.com/originals/bf/95/c5/bf95c53a70819967d79c6ce2ff6883bc.gif"></img>
              </div>
            <button type="submit" className="submit" onClick={() => setGameState("menu")}>Start</button>
      </div>
    </>
  );
}

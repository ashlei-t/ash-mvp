import { useContext, useState, useRef } from 'react';
import { ReactTyped } from "react-typed";
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';

export default function MainMenu() {
    const { setGameState, setName } = useContext(QuizContext); // Add setName
    let [name, setLocalName] = useState("");

    const handleChange = event => {
      setLocalName(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (name.trim()) {
          setName(name); // Save the name in context
          setGameState("questions");
      } else {
          alert("um, Ysabella is staring at you. You should probably enter a name.");
      }
    };


    return (
      <div className="Menu">
          <h1>Welcome!</h1>
          <div className="dialogue">
            <ReactTyped
                startWhenVisible
                typeSpeed={40}
                backSpeed={0}
                loop={false}
                showCursor={false}
                strings={[
                    "<p>Oh, hey there—wow, you’re really here. Welcome to the Adopt-a-Pokebud Agency, where we match you with your ideal best bud… assuming, of course, that you’re worthy.</p><p>No pressure.</p><p>Anyway, my name’s Ysabella. What’s your name?</p>"
                ]}
            />
          </div>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={handleChange}
              />
              <button type="submit">Apply to Adopt</button>
          </form>
      </div>
    );
}

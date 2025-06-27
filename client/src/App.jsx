import { useState, useEffect } from 'react';
import { QuizContext } from './Helpers/Contexts';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Matches from './Components/Matches';
import Selection from './Components/Selection';
import Pokebud from './Components/Pokebud';
import Start from './Components/Start';
import Auth from '/Components/auth';
import { supabase } from './supabase-client';
import './App.css';

function App() {
    // Game state === changes the component
    const [gameState, setGameState] = useState("start");

    // User Info states
    const [name, setName] = useState("");
    const [userID, setUserID] = useState();
    const [answers, setAnswers] = useState({});
    const [zodiac,setZodiac] = useState("");
    const [session, setSession] = useState(null);

    // Search criteria to filter pokeAPI
    const [matchingCriteria, setMatchingCriteria] = useState({
      pokemonType: "",
      pokemonHabitat: "",
      pokemonShape: "",
      zodiacType: "",
    });
    const [matches, setMatches] = useState([]);

    // Users selected Pokebud
    const [pokebud, setPokebud] = useState({});

    const fetchSession = async () => {
            const currentSession = await supabase.auth.getSession();
            setSession(currentSession.data.session);
    }

    useEffect(() => {
      fetchSession();

      // listener
      const {data: authListener} = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => {
        authListener.subscription.unsubscribe();
      }
    }, []);

    return (
      <QuizContext.Provider value={{
        answers, setAnswers,
        name, setName,
        gameState, setGameState,
        matchingCriteria, setMatchingCriteria,
        matches, setMatches,
        zodiac, setZodiac,
        pokebud, setPokebud,
        userID, setUserID
          }}>
        <div className="App">
          {gameState === "start" && <Start />}
          {gameState === "menu" && <MainMenu />}
          {gameState === "questions" && <Quiz />}
          {gameState === "result" && <Result />}
          {gameState === "matches" && <Matches />}
          {gameState === "selection" && <Selection />}
          {gameState === "pokebud" && <Pokebud />}
        </div>
        {session && < Auth />}
      </QuizContext.Provider>
    );
}

export default App;

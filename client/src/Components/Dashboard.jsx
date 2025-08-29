import { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import '../App.css';

// Dashboard - Pet Interface
export default function Dashboard() {
  const { user } = useAuth();
  const { setGameState  } = useContext(QuizContext);
  const [ name, setName ] = useState("");
  const [ pokemon, setPokemon ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    fetchUserPokemon();
  }, []);

  // fetch user's pokemon
  const fetchUserPokemon = async () => {
    const { data, error } = await supabase
      .from('user_pokemon')
      .select('*')
      .eq('user_id', user.id);
  };

  return (
    <>
      <div className="Start">
          <h1>Welcome back, {user.name}</h1>
          <h2>Name your pokemon</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="submit" onClick={() => setGameState("menu")}>Save</button>
      </div>
    </>
  );
}

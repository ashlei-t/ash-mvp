import { useContext, useState } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { useAuth } from '../context/AuthContext';
import '../App.css';

// LOGIN - Welcome page
export default function Login() {
  const { signIn } = useAuth();
  const { setGameState  } = useContext(QuizContext);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await signIn(email, password);
    if (error) {
      console.error("Error signing in:", error);
    } else {
      setGameState("dashboard");
    }
  };

  return (
    <>
      <div className="Start">
          <h1>Returning Users</h1>
          <form onSubmit={handleSignIn}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign in</button>
          </form>
          <h1>New Users</h1>
          <button type="submit" className="submit" onClick={() => setGameState("menu")}>Start a new game</button>
      </div>
    </>
  );
}

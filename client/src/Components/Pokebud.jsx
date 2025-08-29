import { useContext, useState } from 'react';
import { ReactTyped } from "react-typed";
import { QuizContext } from '../Helpers/Contexts';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import '../App.css';

// POKEBUD - Save your pokebud to your email address
export default function Pokebud() {
    const { width, height } = useWindowSize()
    const [ loading, setLoading ] = useState(false);
    const { name, pokebud, userID } = useContext(QuizContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ showPokebud, setShowPokebud ] = useState(false);
    const [ savePokebud, setSavePokebud ] = useState(false);

    const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);

    // Saves email address to users table
    async function postEmail(userEmail) {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userEmail
          })
        }
        try {
          setLoading(true);
          const response = await fetch(`/api/users/email/${userID}`, options);
          if (response.ok) {
            await response.json();
            console.log("EMAIL INSERTED")
          } else {
            console.log(response);
            console.log(`Server Error ${response.status} ${response.statusText} ${response}`);
          }
        } catch (e) {
          console.log(`Network Error: ${e.message}`)
        } finally {
          setLoading(false);
        }
      }

    // Saves Pokemon ID and User ID to user_pokemon table
    async function postIDs( buddyId, newUserID ) {
      const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              user_id: newUserID,
              pokemon_id: buddyId
          })
      }
      try {
          setLoading(true);
          const response = await fetch('/api/userpokemon', options);
          if (response.ok) {
            await response.json();
          } else {
            console.log(response);
            console.log(`Server Error ${response.status} ${response.statusText}`);
          }
      } catch (e) {
          console.log(`Network Error: ${e.message}`)
      } finally {
          setLoading(false);
      }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email.trim() && password.trim() && confirmPassword.trim()) {
            await postEmail(email);
            await postIDs(pokebud.pokeid, userID);
            setSavePokebud(true);
            setLoading(true);
            console.log("name", name);
            console.log("pokebud", pokebud.pokeid);
            console.log("userID", userID);
        } else {
            alert("uh oh");
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        }
      };

    return (
      <>
      <Confetti width={width} height={height} />
        <div className="Selection">
          <h1>{`${name}'s Pokebud`}</h1>
          <div className="dialogue">
          { loading ? "" : (
            <ReactTyped
                startWhenVisible
                typeSpeed={0}
                backSpeed={0}
                loop={false}
                showCursor={false}
                strings={[
                    `WOOHOOO! Congratulations! ${capitalize(pokebud.pokename)} is your new buddy!`
                ]}
                onComplete={() => setShowPokebud(true)}
            />
          )}
          {showPokebud && (
            <div className="myBuddy">
                <div key={pokebud.pokeid} className="pokemon-card">
                    <img src={pokebud.pokesprite} alt={pokebud.pokename} />
                </div>
            </div>
          )}
          { savePokebud &&
              <ReactTyped
              startWhenVisible
              typeSpeed={20}
              backSpeed={0}
              loop={false}
              showCursor={false}
              strings={[
                  `<p>POKEBUD SAVED!</p><p>Coming Soon: Interactive dashboard and/or certificate of adoption</p><p>STAY TUNED!</p>`
              ]}
              onComplete={() => setShowPokebud(true)}
          />
          }
          </div>
          { showPokebud && (
          <form className="transition-form" onSubmit={handleSubmit}>
            {/* create an account */}
                <label>Create an account</label>
                <input
                    type="text"
                    placeholder="user email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Create a password</label>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirm password</label>
                <input
                    type="password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Create account & Save my buddy</button>
            </form>
            )}
          </div>
      </>
    );
}

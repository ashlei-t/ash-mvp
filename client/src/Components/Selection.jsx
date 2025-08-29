import { useContext, useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';

// POKEBUD SELECTION - Shows four pokemon to choose from
export default function Selection() {
    const { matches, setGameState, setPokebud } = useContext(QuizContext);
    const [ displayBuddys, setDisplayBuddys ] = useState(false);
    const [ ashStarters, setAshStarters ] = useState([]);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        // If we have matches from the quiz, use those
        if (matches && matches.length > 0) {
            console.log("Using quiz matches:", matches);
            setDisplayBuddys(true);
            return;
        }

        // Otherwise, fetch Ash's starters
        const fetchAshStarters = async () => {
            try {
                setError(null);
                const starters = ['bulbasaur', 'charmander', 'squirtle', 'pikachu'];

                const starterPromises = starters.map(async (name) => {
                    try {
                        const response = await fetch(`/api/pokemon/pokemon-details/${name}`);
                        if (!response.ok) {
                            throw new Error(`Failed to fetch ${name}: ${response.status} ${response.statusText}`);
                        }
                        const data = await response.json();
                        console.log(`Successfully fetched ${name}:`, data);
                        return {
                            id: data.id,
                            name: data.name,
                            sprite: data.sprite
                        };
                    } catch (error) {
                        console.error(`Error fetching ${name}:`, error);
                        throw error;
                    }
                });

                const starterData = await Promise.all(starterPromises);
                console.log("All starter data received:", starterData);

                if (starterData.length === 0) {
                    throw new Error("No starter data received");
                }

                setAshStarters(starterData);
                setDisplayBuddys(true);
            } catch (error) {
                console.error('Error in fetchAshStarters:', error);
                setError(error.message);
            }
        };

        fetchAshStarters();
    }, [matches]);

    const pokebudPick = (id, name, sprite) => {
        console.log("Pokebud picked:", { id, name, sprite });
        setGameState("pokebud");
        setPokebud({pokeid: id, pokename: name, pokesprite: sprite});
    }

    // Debug render
    console.log("Current state:", {
        displayBuddys,
        ashStarters,
        matches,
        hasData: Boolean(matches || ashStarters),
        dataToRender: matches ? matches : ashStarters
    });

    if (error) {
        return (
            <div className="Selection">
                <h1>Error</h1>
                <div className="dialogue">
                    <p>Sorry, there was an error loading the Pokemon: {error}</p>
                    <button onClick={() => window.location.reload()}>Try Again</button>
                </div>
            </div>
        );
    }

    return (
        <div className="Selection">
            <h1>{`YourPokebud Matches`}</h1>
            <div className="dialogue">
                <ReactTyped
                    startWhenVisible
                    typeSpeed={0}
                    backSpeed={0}
                    loop={false}
                    showCursor={false}
                    strings={[
                        matches && matches.length > 0
                            ? `Here are your matches! So which one will you call your best bud for life?`
                            : `Choose your starter Pokemon, just like Ash did!`
                    ]}
                    onComplete={() => setDisplayBuddys(true)}
                />
                { displayBuddys && (
                    <div className="pokemon-matches">
                        {(matches.length > 0 ? matches : ashStarters).map((poke) => {
                            console.log("Rendering Pokemon:", poke);
                            return (
                                <div key={poke.id} className="pokemon-card">
                                    <img
                                        onClick={() => pokebudPick(poke.id, poke.name, poke.sprite)}
                                        src={poke.sprite}
                                        alt={poke.name}
                                        onError={(e) => {
                                            console.error(`Failed to load image for ${poke.name}:`, poke.sprite);
                                            e.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
                                        }}
                                    />
                                    <p className="buddy">{poke.name}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            { displayBuddys && (
                <div className="selectButtons">
                    {(matches.length > 0 ? matches : ashStarters).map((poke) => {
                        console.log("Rendering button for:", poke);
                        return (
                            <div key={poke.id} className="selectbuttons">
                                <button
                                    type="button"
                                    className="option"
                                    onClick={() => pokebudPick(poke.id, poke.name, poke.sprite)}
                                >
                                    {poke.name}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

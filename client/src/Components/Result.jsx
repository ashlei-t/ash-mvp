import { useContext, useEffect, useState } from 'react';
import { ReactTyped } from "react-typed";
import { QuizContext } from '../Helpers/Contexts';
import { getZodiacData } from '../Helpers/Zodiac';
import '../App.css'

// TO DO
// Restart quiz should destroy the name reaction and just show the question

export default function Result() {
  const { setGameState, name, answers, setMatchingCriteria, setZodiac, zodiac } = useContext(QuizContext);
  const [ loading, setLoading ] = useState(false);
  const [ zodiacDescription, setZodiacDescription ] = useState("");

  useEffect(() => {
    // Analyzes birthday to zodiac
    setLoading(true);
    if (!answers.birthday) return;

    const bday = new Date(answers.birthday);
    const month = bday.getMonth() + 1; // Months are 0-indexed
    const day = bday.getDate();
    const zodiacSigns = [
      { sign: "Capricorn", start: [12, 22], end: [1, 19] },
      { sign: "Aquarius", start: [1, 20], end: [2, 18] },
      { sign: "Pisces", start: [2, 19], end: [3, 20] },
      { sign: "Aries", start: [3, 21], end: [4, 19] },
      { sign: "Taurus", start: [4, 20], end: [5, 20] },
      { sign: "Gemini", start: [5, 21], end: [6, 20] },
      { sign: "Cancer", start: [6, 21], end: [7, 22] },
      { sign: "Leo", start: [7, 23], end: [8, 22] },
      { sign: "Virgo", start: [8, 23], end: [9, 22] },
      { sign: "Libra", start: [9, 23], end: [10, 22] },
      { sign: "Scorpio", start: [10, 23], end: [11, 21] },
      { sign: "Sagittarius", start: [11, 22], end: [12, 21] }
    ];
    const foundSign = zodiacSigns.find(({ start, end }) =>
      (month === start[0] && day >= start[1]) || (month === end[0] && day <= end[1])
    );

    if (foundSign) {
      setZodiac(foundSign.sign);
    }

  }, [answers.birthday, setMatchingCriteria, zodiac, setZodiac]);

  useEffect(() => {
    if (zodiac) {
      const { description, pokemonType } = getZodiacData(zodiac) || { description: "Unknown sign" };
      setZodiacDescription(description);
      setLoading(false);
      setMatchingCriteria(zType => ({
        ...zType,
        zodiacType: pokemonType
      }));
    }
  }, [zodiac, answers, setMatchingCriteria, setZodiac]);


  return (
    <>
    { loading ? "loading" : (
        <div className="Result">
          <h1>{`${name}'s`} Results</h1>
          <div className="dialogue">
          {
            zodiacDescription && (
              <ReactTyped
                startWhenVisible
                typeSpeed={20}
                backSpeed={0}
                loop={false}
                showCursor={false}
                strings={[
                  `<p><strong>Birthday:</strong> ${answers.birthday}</p>
                  <p>Wow, you're a ${zodiac}!</p><p>${zodiacDescription}</p>
                  <p><strong>Personality:</strong> ${answers.shape}</p>
                  <p><strong>Habitat:</strong> ${answers.habitat}</p>
                  <p><srong>Approach:</strong> ${answers.type2}</p>`
                ]}
                onComple
              />
            )
          }
        </div>

        <button className="submit" onClick={() => setGameState("matches")}>Continue</button>
        <button className="secondary" onClick={() => setGameState("questions")}>Restart Quiz</button>
      </div>
    )}
    </>
  );
}

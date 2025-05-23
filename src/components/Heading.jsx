import {getFarewellText} from '../utils.js';
import LanguagesList from "../languages.js";
import { useState, useEffect, useRef } from 'react';

export default function Heading({ gameLost, gameWon, wrongCount }) {
  const [farewellMessage, setFarewellMessage] = useState('');
  const prevWrongCountRef = useRef(wrongCount);

  useEffect(() => {
    if (wrongCount === 0) {
      setFarewellMessage('');
    } else if (wrongCount > prevWrongCountRef.current && wrongCount <= LanguagesList.length) {
      const newFarewell = getFarewellText(LanguagesList[wrongCount - 1]);
      setFarewellMessage(newFarewell);
    }
    prevWrongCountRef.current = wrongCount;
  }, [wrongCount]);

  return (
    <section className="header">
      <div>
        <h1>Assembly: Endgame</h1>
        <p className="game-description">
          Guess the word in under 8 attempts to keep the programming world safe from Assembly!
        </p>
      </div>
      <div className="message">
        
        {gameWon && 
            <div className="game-won">
                <h2>You win 🎉</h2>
                <p>Well done!</p>
            </div>
        }

        {gameLost && 
            <div className='game-lost'>
                <h2>Game Over!!</h2>
                <p>You lose, better start learning Assebly</p>
            </div>
        }

        {!gameWon && !gameLost && farewellMessage && (
          <h2 className="farewell-message">{farewellMessage}</h2>
        )}
      </div>
    </section>
  );
}

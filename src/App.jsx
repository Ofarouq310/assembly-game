import './App.css'
import Heading from "./components/Heading.jsx"
import Languages from "./components/Languages.jsx"
import Word from "./components/Word.jsx"
import Keyboard from './components/Keyboard.jsx'
import languageList from './languages.js'
import { randomWord } from './utils.js'
import words from './words.js'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti';

function App() {

  const [guessedLetters, setGuessedLetters] = useState({});

  const [word, setWord] = useState( () => randomWord(words));
  
  const wordLetters = Array.from(word.toUpperCase());
  
  const wrongGuessCount = Object.keys(guessedLetters).filter(letter => !wordLetters.includes(letter)).length;
  
  const gameLost = languageList.length - 1 === wrongGuessCount;   

  const [timeLeft, setTimeLeft] = useState(60);
  
  const [resetCount, setResetCount] = useState(0);
  
  const handleKeyboardClick = (event) => {
    const newLetter = event.currentTarget.innerText.toUpperCase();
    const isCorrect = word.toUpperCase().includes(newLetter)
    setGuessedLetters(prev => ({
      ...prev,
      [newLetter]: isCorrect ? 'correct' : 'wrong'
    }));
  };
  
  const gameWon = wordLetters.every(letter => Object.keys(guessedLetters).includes(letter));
  
  const gameOver = gameWon || gameLost || timeLeft === 0;
  
  const displayWord = Array.from(word, (char, index) => {
    const revealed = char.toUpperCase() in guessedLetters || gameOver;
    return (
      <li key={`${char}-${index}`} className="letter-box">
        <span className={`letter ${revealed ? 'revealed' : 'hidden'}`}>
          {revealed ? char.toUpperCase() : ''}
        </span>
      </li>
    );
  });

  useEffect(() => {
      if (gameOver) return; 
    
      if (timeLeft === 0) {
        setGuessedLetters({});
        return;
      }
    
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    
      return () => clearTimeout(timer);
    }, [timeLeft, gameOver]);
    
  
  const resetGame = () => {
    setGuessedLetters({});
    setWord(randomWord(words));
    setTimeLeft(60);
    setResetCount(prev => prev + 1);
  }

  const attemptsLeft = languageList.length - wrongGuessCount - 1;

  return (
    <>
      <Heading gameWon={gameWon} gameLost={gameLost} wrongCount={wrongGuessCount} />
      <Languages wrongCount={wrongGuessCount} />
      <div className="attempts-timer">
        <span style={{ color: timeLeft >= 10 ? 'white' : '#fc6767' }}>
          Time Left: {timeLeft}s
        </span>
        <span style={{ color: attemptsLeft >= 4 ? 'white' : '#fc6767' }}>
         Attempts Left: {attemptsLeft}
        </span>
      </div>
      <Word word={displayWord} />
      <Keyboard handleClick={handleKeyboardClick} guessedLetters={guessedLetters} gameOver={gameOver} resetGame={resetGame} resetCount={resetCount} />
      {
        gameWon && 
        <Confetti 
          recycle={false}
          numberOfPieces={1000}
        />
      }
    </>
  )
}

export default App;
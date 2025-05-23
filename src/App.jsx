import './App.css'
import Heading from "./components/Heading.jsx"
import Languages from "./components/Languages.jsx"
import Word from "./components/Word.jsx"
import Keyboard from './components/Keyboard.jsx'
import languageList from './languages.js'
import { randomWord } from './utils.js'
import words from './words.js'
import { useState } from 'react'


function App() {

  const [guessedLetters, setGuessedLetters] = useState({});
  const [word, setWord] = useState( () => randomWord(words));
  
  const wordLetters = Array.from(word.toUpperCase());
  
  const wrongGuessCount = Object.keys(guessedLetters).filter(letter => !wordLetters.includes(letter)).length;
  
  const gameLost = languageList.length - 1 === wrongGuessCount;   

  const displayWord = Array.from(word, (char, index) => {
    return <li key={`${char}-${index}`}>
           {char.toUpperCase() in guessedLetters || gameLost ? char.toUpperCase() : " "}
           </li>;
  });

  const handleKeyboardClick = (event) => {
    const newLetter = event.currentTarget.innerText.toUpperCase();
    const isCorrect = word.toUpperCase().includes(newLetter)
    setGuessedLetters(prev => ({
      ...prev,
      [newLetter]: isCorrect ? 'correct' : 'wrong'
    }));
  };


  const gameWon = wordLetters.every(letter => Object.keys(guessedLetters).includes(letter));

  const gameOver = gameWon || gameLost ? true : false;

  const resetGame = () => {
    setGuessedLetters({});
    setWord(randomWord(words));
  }

  return (
    <>
      <Heading gameWon={gameWon} gameLost={gameLost} wrongCount={wrongGuessCount} />
      <Languages wrongCount={wrongGuessCount} />
      <Word word={displayWord} />
      <Keyboard handleClick={handleKeyboardClick} guessedLetters={guessedLetters} gameOver={gameOver} resetGame={resetGame} />
    </>
  )
}

export default App;
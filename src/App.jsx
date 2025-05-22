import './App.css'
import Heading from "./components/Heading.jsx"
import Languages from "./components/Languages.jsx"
import Word from "./components/Word.jsx"
import Keyboard from './components/Keyboard.jsx'
import languageList from './languages.js'
import { useState } from 'react'

function App() {

  const [letterStatus, setLetterStatus] = useState({});

  const [word, setWord] = useState("react");
  
  const displayWord = Array.from(word, (char, index) => {
    return <li key={`${char}-${index}`}>
           {Object.keys(letterStatus).includes(char.toUpperCase()) ? char.toUpperCase() : " "}
           </li>;
  });

  const wordLetters = Array.from(word.toUpperCase());

  const wrongGuessCount = Object.keys(letterStatus).filter(letter => !wordLetters.includes(letter)).length;

  const handleKeyboardClick = (event) => {
    const newLetter = event.currentTarget.innerText.toUpperCase();
    const isCorrect = word.toUpperCase().includes(newLetter)
    setLetterStatus(prev => ({
      ...prev,
      [newLetter]: isCorrect ? 'correct' : 'wrong'
    }));
  };

  const gameLost = () => {
    const lost = languageList.length - 1 === wrongGuessCount;   
    return lost;
  }

  const gameWon = () => {
    const won = wordLetters.every(letter => Object.keys(letterStatus).includes(letter))
    return won;
  }  

  const gameOver = () => gameWon() || gameLost() ? true : false;

  return (
    <>
      <Heading />
      <Languages wrongCount={wrongGuessCount} />
      <Word word={displayWord} />
      <Keyboard handleClick={handleKeyboardClick} letterStatus={letterStatus} gameOver={gameOver} />
    </>
  )
}

export default App;
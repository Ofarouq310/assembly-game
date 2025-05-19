import './App.css'
import Heading from "./components/Heading.jsx"
import Languages from "./components/Languages.jsx"
import Word from "./components/Word.jsx"
import Keyboard from './components/Keyboard.jsx'
import { useState } from 'react'

function App() {

  const [word, setWord] = useState("react");
  const displayWord = Array.from(word, (char) => {
    return <li key={char}>{char.toUpperCase()}</li>;
  });
  
  const [letterStatus, setLetterStatus] = useState({});

  const handleKeyboardClick = (event) => {
    const newLetter = event.currentTarget.innerText.toUpperCase();

    setLetterStatus(prev => ({
      ...prev,
      [newLetter]: word.toUpperCase().includes(newLetter) ? 'correct' : 'wrong'
    }));
  };

  return (
    <>
      <Heading />
      <Languages />
      <Word word={displayWord} />
      <Keyboard handleClick={handleKeyboardClick} letterStatus={letterStatus} />
    </>
  )
}

export default App

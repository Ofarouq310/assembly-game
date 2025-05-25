import BaffleLetter from "./BaffleLetter";

export default function Keyboard(props) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keyboard = alphabet.split("").map((letter) =>
        <button
            onClick={props.handleClick}
            key={letter}
            className={`keys ${props.guessedLetters[letter] || ""}`} 
            disabled={props.guessedLetters[letter] || props.gameOver}
            aria-disabled={!!props.guessedLetters[letter]}
            aria-label={`Letter ${letter}`}
        >
            <BaffleLetter 
                letter={letter} 
                revealDelay={500} 
                resetGame={props.resetCount} 
            />
        </button>
    );
    
    return (
        <section className="keyboard">
            <div>
                {keyboard}
            </div>
            {props.gameOver && (
                <button id="new-game-btn" onClick={props.resetGame}>
                    New Game
                </button>
            )}
        </section>
    );
}

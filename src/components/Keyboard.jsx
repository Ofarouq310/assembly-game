export default function Keyboard(props) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const keyboard = alphabet.split("").map((letter, index) =>
        <button
            onClick={props.handleClick}
            key={index}
            className={`keys ${props.letterStatus[letter.toUpperCase()]}`} 
            disabled={!!props.letterStatus[letter.toUpperCase()] || props.gameOver()}
        >
            {letter.toUpperCase()}
            </button>
    );
    
    return (
        <section className="keyboard">
            <div>
                {keyboard}
            </div>
             {props.gameOver() && <button id="new-game-btn" onClick={props.resetGame}>New Game</button>}
        </section>
    );
}

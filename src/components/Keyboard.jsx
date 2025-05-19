export default function Keyboard(props) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const keyboard = alphabet.split("").map((letter, index) =>
        <button
            onClick={props.handleClick}
            key={index}
            className={props.letterStatus[letter.toUpperCase()]} 
            disabled={!!props.letterStatus[letter.toUpperCase()]}
        >
            {letter.toUpperCase()}
        </button>
    );

    return (
        <section className="keyboard">
            {keyboard}
        </section>
    );
}

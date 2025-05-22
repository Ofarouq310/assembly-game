
export default function Heading({gameLost, gameWon}) {
    
    return (
    <>  
        <section className="header">
            <div>
                <h1>Assembly: Endgame</h1>
                <p className="game-description">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </div>
            <div className="message">
               {gameWon() && <p className="game-won">You win, Well done! 🎉</p>}
               {gameLost() && <p className="game-lost">Game Over!!</p>}
            </div>
        </section>
    </>

    )
}
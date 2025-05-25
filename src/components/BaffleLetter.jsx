import React, { useEffect, useRef } from "react";
import baffle from "baffle";

function BaffleLetter({ letter, revealDelay = 500, resetGame }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const b = baffle(ref.current, {
      characters: "!<>-_\\/[]{}—=+*^?#________",
      speed: 100,
    });

    b.start();

    const revealTimeout = setTimeout(() => {
      b.reveal(500); // Reveal over 500ms
    }, revealDelay);

    return () => {
      clearTimeout(revealTimeout);
      b.stop();
    };
  }, [letter, revealDelay, resetGame]);

  return (
    <span ref={ref} style={{ fontWeight: "bold", fontFamily: "monospace" }}>
      {letter}
    </span>
  );
}

export default BaffleLetter;

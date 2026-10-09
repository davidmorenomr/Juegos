import React, { useState, useEffect } from "react";
import "./App.css";

const NUM_BUBBLES = 5;
const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
const getRandomPosition = () => ({
  x: Math.random() * (window.innerWidth - 50),
  y: Math.random() * (window.innerHeight - 50),
});

const Bubble = ({ letter, position, onPop }) => {
  return (
    <div
      className="bubble"
      style={{ left: position.x, top: position.y }}
    >
      {letter}
    </div>
  );
};

const App = () => {
  const [bubbles, setBubbles] = useState(
    Array.from({ length: NUM_BUBBLES }, (_, id) => ({
      id,
      letter: getRandomLetter(),
      position: getRandomPosition(),
    }))
  );

  useEffect(() => {
    const handleKeyPress = (event) => {
      setBubbles((prevBubbles) =>
        prevBubbles.filter((bubble) => bubble.letter !== event.key.toUpperCase())
      );
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (bubbles.length < NUM_BUBBLES) {
      setTimeout(() => {
        setBubbles((prev) => [
          ...prev,
          {
            id: Math.random(),
            letter: getRandomLetter(),
            position: getRandomPosition(),
          },
        ]);
      }, 1000);
    }
  }, [bubbles]);

  return (
    <div className="bubble-game">
      <h2>Pulsa las teclas de la pantalla</h2>
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          letter={bubble.letter}
          position={bubble.position}
        />
      ))}
    </div>
  );
};

export default App;

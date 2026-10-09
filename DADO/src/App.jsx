import { useState } from "react";
import dado1 from "./assets/1.jpg";
import dado2 from "./assets/2.jpg";
import dado3 from "./assets/3.jpg";
import dado4 from "./assets/4.jpg";
import dado5 from "./assets/5.jpg";
import dado6 from "./assets/6.jpg";
import "./App.css";

const imagenesDado = [dado1, dado2, dado3, dado4, dado5, dado6];

function App() {
  const [dado, setDado] = useState(0); // Estado inicial con índice 0

  const lanzarDado = () => {
    const numeroAleatorio = Math.floor(Math.random() * 6);
    setDado(numeroAleatorio);
  };

  return (
    <div className="dice-game">
      <h1>Juego del Dado</h1>
      <img src={imagenesDado[dado]} alt={`Dado ${dado + 1}`} className="dice-image" />
      <br />
      <button onClick={lanzarDado}>Lanzar Dado</button>
    </div>
  );
}

export default App;

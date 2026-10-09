import { useState } from "react";
import Boton from "./boton";

export default function JuegoBotones() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="juego-botones">
      {[...Array(20)].map((_, i) => (
        <Boton key={i} onClick={() => setModalVisible(true)} />
      ))}

      {modalVisible && (
        <div className="modal">
          <p>¡Conseguiste dar al Boton!</p>
          <button onClick={() => setModalVisible(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}
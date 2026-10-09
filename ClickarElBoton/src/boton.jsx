import { useState, useEffect } from "react";

export default function Boton({ onClick }) {
  const [position, setPosition] = useState({
    x: Math.random() * (window.innerWidth - 100),
    y: Math.random() * (window.innerHeight - 50),
    dx: (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 3),
    dy: (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 3),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let { x, y, dx, dy } = prev;

        if (x + dx <= 0 || x + dx >= window.innerWidth - 100) {
          dx = -dx;
        }
        if (y + dy <= 0 || y + dy >= window.innerHeight - 50) {
          dy = -dy;
        }

        return { x: x + dx, y: y + dy, dx, dy };
      });
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      onClick={onClick}
      className="boton-movil"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
    >
      Clicka
    </button>
  );
}
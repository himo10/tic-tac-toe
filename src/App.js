import React, { useState } from 'react';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(false);
  
  return (
    <div className="board">
      <div className="board-line">
        <div className="square">{xIsNext ? 'x' : '0'}</div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="board-line">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="board-line">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
  );
}

export default App;

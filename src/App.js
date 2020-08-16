import React, { useState } from 'react';
import cross from './assets/cross.svg';
import zero from './assets/zero.svg';

function App() {
  const [squares, setSquares] = useState(new Array(3).fill().map(() => new Array(3).fill("")));
  const [xIsNext, setXIsNext] = useState(true);
  
  const selectSquare = (y, x) => {
    if(squares[y][x]) return;

    const cloneSquares = squares.slice();
    cloneSquares[y][x] = xIsNext ? 'x' : '0';
    setSquares(cloneSquares)

    setXIsNext(!xIsNext);
    
    if(calculateWinner()) {
      alert(`Выиграл ${calculateWinner()}`);
      setSquares(new Array(3).fill().map(() => new Array(3).fill("")));
    }
  }

  const calculateWinner = () => {
    for(let y = 0; y < squares.length; y++) {
      const [a, b, c] = squares[y];
      if(a && (a === b) && (b === c)) {
        return a;
      }
    }

    let indexY= 0;
    let indexX = 0;
    let verticalSquares = [];

    while(indexX <= squares[0].length-1) {
      if(indexY > squares.length-1) {
        const [a, b, c] = verticalSquares;
        if(a && (a === b) && (b === c)) {
          return a;
        }
        verticalSquares = [];
  
        indexY = 0;
        indexX++;
      }
      
      verticalSquares.push(squares[indexY][indexX]);

      indexY++;
    }
    return false
  }

  return (
    <div className="board">
      {squares.map((line, y) => (
        <div className="board-line" key={y}>
          {line.map((square, x) => (
            <div className="square" onClick={() => selectSquare(y, x)} key={x}>
              <img src={square && (square === 'x' ? cross : zero)} alt={square} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

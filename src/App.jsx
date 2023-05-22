import { useState } from 'react';
import Board from './components/Board';
import './styles.scss';
import { calculateWinner } from '../winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMsg = winner
    ? `winner is ${winner}`
    : `Next Player is ${nextPlayer}`;

  const handleSquareClick = positionClicked => {
    if (squares[positionClicked] || winner) {
      return;
    }
    setSquares(currentSquare => {
      return currentSquare.map((squareValue, pos) => {
        if (positionClicked === pos) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h2>{statusMsg}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = {
  display: 'flex'
};

const squareStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white',
  cursor: 'pointer',
};

const boardStyle = {
  backgroundColor: '#eee',
  width: '208px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  border: '3px #eee solid',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const instructionsStyle = {
  marginTop: '5px',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '16px',
};

function Square({ onClick, value, disabled }) {
  return (
    <div
      className="square"
      style={{ ...squareStyle, cursor: disabled ? 'not-allowed' : 'pointer' }}
      onClick={() => !disabled && onClick()}
    >
      {value}
    </div>
  );
}

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("None");
  const [isGameOver, setIsGameOver] = useState(false);

  const checkWinner = () => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setIsGameOver(true);
        return;
      }
    }

    // Check for a tie
    if (board.every((square) => square !== null)) {
      setWinner("Tie");
      setIsGameOver(true);
    }
  };

  const handleClick = (index) => {
    if (board[index] === null && !isGameOver) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      checkWinner();
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner("None");
    setIsGameOver(false);
  };

  useEffect(() => {
    checkWinner();
  }, [board]);

  useEffect(() => {
    if (winner !== "None") {
      setIsGameOver(true);
      setCurrentPlayer(""); // Set currentPlayer to an empty string to prevent further moves
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }, [winner]);
  
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        {isGameOver ? `Winner: ${winner}` : `Next player: ${currentPlayer}`}
      </div>
      {isGameOver && (
        <div style={instructionsStyle}>
          <strong>Game Over!</strong> Click "Reset" to play again.
        </div>
      )}
      <button style={{ margin: '10px 0' }} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={resetBoard}>
        Reset
      </button>
      <div style={boardStyle}>
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row" style={rowStyle}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              return (
                <Square
                  key={index}
                  value={board[index]}
                  onClick={() => handleClick(index)}
                  disabled={isGameOver || board[index] !== null}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);


export default Game;

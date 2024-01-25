import { useDocumentTitle } from '../hooks'
import Game from '../tictactoe';

const TicTacToePage = () => {
  useDocumentTitle("Tic-Tac-Toe");

  return (
    <div>
      <Game />
    </div>
  );
};

export default TicTacToePage;

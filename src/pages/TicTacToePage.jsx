import { useDocumentTitle } from '../hooks'
import Game from '../tictactoe';

const TicTacToePage = () => {
  useDocumentTitle("Tic-Tac-Toe");

  return (
    <>
      <Game />
    </>
  );
};

export default TicTacToePage;

import { useDocumentTitle } from "../hooks";
import Quiz from "../quiz";

const QuizPage = () => {
  useDocumentTitle("Quiz");
  return (
    <div>
        <Quiz />
    </div>
  );
};
export default QuizPage;

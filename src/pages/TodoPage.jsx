import Todo from "./Todo";
import { useDocumentTitle } from "../hooks";

const TodoPage = () => {
  useDocumentTitle("To DO");
  return (
    <div>
        <Todo />
    </div>
  );
};
export default TodoPage;

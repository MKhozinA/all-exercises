import Todo from "../todo/index";
import { useDocumentTitle } from "../hooks";

const TodoPage = () => {
  useDocumentTitle("To Do");
  return (
    <div>
        <Todo />
    </div>
  );
};
export default TodoPage;

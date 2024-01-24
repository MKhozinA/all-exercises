import Todo from "./Todo";
import { useDocumentTitle } from "../hooks";

const TodoPage = () => {
  useDocumentTitle("To DO");
  return (
    <>
      <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">
        <Todo />
      </div>
    </>
  );
};
export default TodoPage;

//Tampilan masih belum rapi dan notifikasi tambah, update, delete masih belum dimunculkan sudah dicoba dan masih error

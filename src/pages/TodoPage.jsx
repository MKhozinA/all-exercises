import Todo from "./Todo";
import { useDocumentTitle } from "../hooks";

const TodoPage = () => {
  useDocumentTitle("To DO");
  return <Todo />;
};

export default TodoPage;

//Tampilan masih belum rapi dan notifikasi tambah, update, delete masih belum dimunculkan sudah dicoba dan masih error
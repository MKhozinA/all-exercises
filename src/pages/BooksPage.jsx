import Books from "../booklist/books";
import { useDocumentTitle } from "../hooks";

const BooksPage = () => {
  useDocumentTitle("Books");
  return (
    <div>
        <Books />
    </div>
  );
};
export default BooksPage;

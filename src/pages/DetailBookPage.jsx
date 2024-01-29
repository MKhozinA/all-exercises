
import BookDetails from "../booklist/detailbook";
import { useDocumentTitle } from "../hooks";

const BookDetailsPage = () => {
  useDocumentTitle("Book Detail");
  return (
    <div>
        <BookDetails />
    </div>
  );
};
export default BookDetailsPage

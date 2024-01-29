import bookData from "@/booklist/books.json";
import { useLocalStorage } from "../hooks";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Books = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  useEffect(() => {
    if (books.length === 0) {
      setBooks(bookData);
    }
  });

  return (
    <div className="bg-slate-100 max-w-2xl mx-auto my-4 p-4 rounded">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Book List</h1>
      <div className="max-w-2xl mx-auto my-4 rounded">
        {books.map((book) => (
          <Link
            key={book.id}
            to={`/books/${book.id}`}
            className="block border border-gray-200 rounded bg-white hover:bg-gray-100 p-2 mb-2"
          >
            {book.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;

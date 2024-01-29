import { capitalCase } from "case-anything";
import { Navigate, useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const books = JSON.parse(localStorage.getItem("books"));
  const { id, query, name } = useParams();
  const queries = new URLSearchParams(window.location.search);

  console.log(id, query, name);

  console.log(queries.get("q"));
  console.log(queries.get("source"));

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <Navigate to="/404" />;
  }

  if (book)
    return (
      <div className="bg-slate-100 max-w-2xl mx-auto my-4 p-4 rounded">
        <Link to="/books" className="block mb-4 text-blue-500 hover:underline">
          &lt; Back to Book List
        </Link>
        <h1 className="text-xl mb-1">{book.title}</h1>

        <div className="mb-1">
          <div className="text-sm font-bold">{capitalCase("author")}</div>
          <div className="text-sm">{book.author}</div>
        </div>

        <div className="mb-1">
          <div className="text-sm font-bold">{capitalCase("year")}</div>
          <div className="text-sm">{book.year}</div>
        </div>

        <div className="mb-1">
          <div className="text-sm font-bold">{capitalCase("synopsis")}</div>
          <div className="text-sm">{book.synopsis}</div>
        </div>

        <div className="mb-1">
          <div className="text-sm font-bold">{capitalCase("genre")}</div>
          <div className="text-sm">{book.genre}</div>
        </div>

        <div className="mb-1">
          <div className="text-sm font-bold">{capitalCase("language")}</div>
          <div className="text-sm">{book.language}</div>
        </div>

        <div className="mb-1">
          <div className="text-sm font-bold">
            {capitalCase("average_rating")}
          </div>
          <div className="text-sm">{book.average_rating}</div>
        </div>

        <div className="mb-1">
          <div className="text-sm font-bold">{capitalCase("reviews")}</div>
          <div className="text-sm">{book.reviews}</div>
        </div>
      </div>
    );
};

export default BookDetails;

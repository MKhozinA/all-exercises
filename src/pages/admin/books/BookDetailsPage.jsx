import { Link, useParams } from 'react-router-dom';
import booksData from './BookData'; // Gunakan data buku yang Anda berikan

const DetailBookPage = () => {
  const { bookId } = useParams();
  const book = booksData.find((book) => book.id === parseInt(bookId));
  console.log('oke')
  if (!book) {
    return <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">Book not found</div>;
  }

  return (
    <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">
        <h1 className="text-3xl font-bold text-center mt-8 mb-4">Detail Buku</h1>
        <Link to="/books" className="block mb-4 text-blue-500 hover:underline">
        &lt; Back to Book List
      </Link>
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2">Title:</td>
            <td className="border px-4 py-2">{book.title}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Author:</td>
            <td className="border px-4 py-2">{book.author || book.authors.join(', ')}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Year:</td>
            <td className="border px-4 py-2">{book.year}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Synopsis:</td>
            <td className="border px-4 py-2">{book.synopsis}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Genre:</td>
            <td className="border px-4 py-2">{book.genre}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Language:</td>
            <td className="border px-4 py-2">{book.language}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Average Rating:</td>
            <td className="border px-4 py-2">{book.average_rating}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Reviews:</td>
            <td className="border px-4 py-2">{book.reviews}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailBookPage;

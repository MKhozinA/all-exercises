import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import booksData from './BookData';

const BooksIndex = () => {
  return (
    <>
      <ol
        className="flex items-center whitespace-nowrap mb-3 bg-gray-100 p-3 rounded"
        aria-label="Breadcrumb"
      >
        <li className="inline-flex items-center">
          <Link
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
            to="/admin"
          >
            Dashboard
          </Link>
          <ChevronRight size={14} />
        </li>
        <li
          className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
          aria-current="page"
        >
          Books
        </li>
      </ol>

      <div className="container mx-auto my-8">
    <h1 className="text-3xl font-bold mb-4">Data Buku</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-r">ID</th>
            <th className="py-2 px-4 border-r">Judul Buku</th>
            <th className="py-2 px-4 border-r">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {booksData.map((book) => (
            <tr key={book.id}>
              <td className="border border-gray-200 px-4 py-2">{book.id}</td>
              <td className="border border-gray-200 px-4 py-2">{book.title}</td>
              <td className="border border-gray-200 px-4 py-2 flex justify-center items-center">
                <Link to={`admin/books/${book.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    </>
  )
}

export default BooksIndex
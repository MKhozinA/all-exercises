import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const UsersIndex = () => {
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
          Users
        </li>
      </ol>

      <div className="container mx-auto my-8">
    <h1 className="text-3xl font-bold mb-4">User Data</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-r">ID</th>
            <th className="py-2 px-4 border-r">Name</th>
            <th className="py-2 px-4 border-r">Email</th>
            <th className="py-2 px-4">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border border-gray-200">1</td>
            <td className="py-2 px-4 border border-gray-200">John Doe</td>
            <td className="py-2 px-4 border border-gray-200">john@example.com</td>
            <td className="py-2 px-4 border border-gray-200">User</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-200">2</td>
            <td className="py-2 px-4 border border-gray-200">Jane Smith</td>
            <td className="py-2 px-4 border border-gray-200">jane@example.com</td>
            <td className="py-2 px-4 border border-gray-200">Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </>
  )
}

export default UsersIndex
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './components/layouts/app/AppLayout'
import AdminLayout from './components/layouts/admin/AdminLayout'
import PlainLayout from './components/layouts/PlainLayout'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Books from './pages/Books'
import NotFound from './pages/errors/NotFound'
import BooksIndex from './pages/admin/books/BooksIndex'
import Dashboard from './pages/admin/Dashboard'
import UsersIndex from './pages/admin/users/UsersIndex'
import Login from './pages/Login'
import DetailBookPage from './pages/admin/books/BookDetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'books',
        Component: Books
      }
    ]
  },

  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { path: '', Component: Dashboard },
      { path: 'books', Component: BooksIndex },
      { path: ':bookId', Component: DetailBookPage },
      { path: 'users', Component: UsersIndex }
    ]
  },

  {
    path: '/login',
    Component: PlainLayout,
    children: [{ path: '', Component: Login }]
  },

  { path: '/404', Component: NotFound },
  { path: '*', Component: NotFound }
])

export default router
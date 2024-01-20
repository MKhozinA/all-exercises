import { Outlet } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks'

import Footer from '../footer/Footer'
import Navbar from './Navbar'

const AppLayout = () => {
  useDocumentTitle('My App')

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
import { Outlet } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks'
import Navbar from './Navbar'
import Footer from '../footer/Footer'

const AppLayout = () => {
  useDocumentTitle('My App')

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <main className="w-full py-5">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default AppLayout
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import { LocaleContext } from '../LocaleContext'

const Navigation = () => {
  const { user, login, logout } = useContext(AuthContext)
  const { locale, toggleLocale } = useContext(LocaleContext)

  const [links] = useState([
    { name: 'Home', path: '/' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ])

  const doLogin = (e) => {
    e.preventDefault()
    login({ name: 'John Doe' })
  }

  const doLogout = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <nav className="bg-slate-100 max-w-2xl mx-auto my-4 p-4 rounded flex content-between">
      <div className="font-bold">App Name </div>
      <div className="block text-right grow">
        {links.map((link) => (
          <div key={link.name} className="inline-block ml-2">
            <Link to={link.path} className="py-1 px-2 hover:bg-slate-200 rounded">
              {link.name}
            </Link>
          </div>
        ))}
        <div className="inline-block ml-2">
          <button onClick={toggleLocale} className="py-1 px-2 hover:bg-slate-200 rounded">
            {locale}
          </button>
        </div>
        <div className="inline-block ml-2">
          {user ? (
            <>
              <a href="#" className="py-1 px-2 hover:bg-slate-200 rounded">
                {user.name}
              </a>
              <a href="#" onClick={doLogout} className="py-1 px-2 hover:bg-slate-200 rounded">
                Logout
              </a>
            </>
          ) : (
            <a href="#" onClick={doLogin} className="py-1 px-2 hover:bg-slate-200 rounded">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation

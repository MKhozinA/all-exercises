import { Link } from 'react-router-dom'

const Navigation = () => {

  const links = [
    { name: 'Home', path: '/'},
    { name: 'About', path: '/about'},
    { name: 'Contact', path: '/contact'},
    { name: 'Calculator', path: '/calculator'},
  ]
  return (
    <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
    aria-label="Global">
      <div className='flex-none text-xl font-semibold dark:text-white'>Ozin</div>
      <div className="flex items-center justify-between">
        {links.map((link) => (
          <div key={link.name} className='font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
            <Link to={link.path} className='py-1 px-2 hover:bg-slate-200 rounded'>
            {link.name}
            </Link>
          </div>
        ))}
      
      </div>
    </nav>
  )
}

export default Navigation

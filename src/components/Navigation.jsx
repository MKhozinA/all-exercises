import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Navigation = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  const [links] = useState([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]);

  const doLogin = (e) => {
    e.preventDefault();
    login({ name: "User" });
    setDropdownVisible(false);
  };

  const doLogout = (e) => {
    e.preventDefault();
    logout();
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="flex flex-wrap justify-between items-center py-4 bg-white text-lg sm:text-sm dark:bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-col sm:flex-row items-center justify-between" aria-label="Global">
        <Link to="/" className="flex-none text-xl font-semibold dark:text-white mb-2 sm:mb-0">Khozin</Link>
        <div className="flex items-center gap-5 mt-5 sm:mt-0 sm:ps-5 sm:flex-nowrap">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${
                location.pathname === link.path ? "border-b-2 border-blue-700" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative ml-auto flex items-center">
            {user ? (
              <>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center font-medium text-blue-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <span className="mr-2">{user.name}</span>
                  <span>&#9662;</span>
                </button>
                {dropdownVisible && (
                  <div className="absolute top-full right-0 bg-white border rounded mt-2 shadow-md">
                    <button
                      onClick={doLogout}
                      className="block py-2 px-4 hover:bg-gray-200 rounded"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <a
                href="#"
                onClick={doLogin}
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Login
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

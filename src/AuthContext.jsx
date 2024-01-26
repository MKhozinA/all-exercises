import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  user: null,
  setUser: () => {},
})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser({ name: 'User' })
  }, [])

  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}
export { AuthContext, AuthProvider }

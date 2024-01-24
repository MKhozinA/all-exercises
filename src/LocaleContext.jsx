import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

const LocaleContext = createContext('id-ID')

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('id-ID')

  const toggleLocale = () => {
    setLocale(locale === 'id-ID' ? 'en-US' : 'id-ID')
  }

  return <LocaleContext.Provider value={{ locale, toggleLocale }}>{children}</LocaleContext.Provider>
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { LocaleContext, LocaleProvider }

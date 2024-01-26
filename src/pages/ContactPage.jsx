import { useContext, useEffect, useState } from 'react'
import { LocaleContext } from '../LocaleContext'
import { useDocumentTitle } from '../hooks'

const ContactPage = () => {
  useDocumentTitle('Contact')
  const { locale, setLocale, toggleLocale } = useContext(LocaleContext)
  const [content, setContent] = useState(locale === 'id-ID' ? 'Kontak' : 'Contact')

  const id =
    'Hubungi kami untuk pertanyaan, umpan balik, atau sekedar sapa. Kami selalu senang mendengar dari Anda.'

  const en =
    "Reach out to us with any questions, feedback, or just to say hello. We're always happy to hear from you."

  useEffect(() => {
    setContent(locale === 'id-ID' ? id : en)
  }, [locale])

  return (
    <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">
      {content}
      <div className="flex mt-4">
        <button
          className={`py-1 px-2 mr-2 ${locale === 'id-ID' ? 'bg-slate-300' : 'bg-slate-100'}`}
          onClick={() => setLocale('id-ID')}
        >
          ID
        </button>
        <button
          className={`py-1 px-2 ${locale === 'en-US' ? 'bg-slate-300' : 'bg-slate-100'}`}
          onClick={() => setLocale('en-US')}
        >
          EN
        </button>

        <div className="inline-block ml-2">
          <button
            onClick={toggleLocale}
            className="py-1 px-2 hover:bg-slate-200 rounded"
          >
            {locale}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

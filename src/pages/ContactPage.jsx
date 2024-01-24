import { useContext, useEffect, useState } from 'react'
import { LocaleContext } from '../LocaleContext'
import { useDocumentTitle } from '../hooks'

const ContactPage = () => {
  useDocumentTitle('Contact')
  const { locale } = useContext(LocaleContext)
  const [content, setContent] = useState(locale === 'id-ID' ? 'Kontak' : 'Contact')

  const id =
    'Hubungi kami untuk pertanyaan, umpan balik, atau sekedar sapa. Kami selalu senang mendengar dari Anda.'

  const en =
    "Reach out to us with any questions, feedback, or just to say hello. We're always happy to hear from you."
  useEffect(() => {
    setContent(locale === 'id-ID' ? id : en)
  }, [locale])

  return <div className="bg-slate-200 max-w-2xl mx-auto my-4 p-4 rounded">{content}</div>
}

export default ContactPage

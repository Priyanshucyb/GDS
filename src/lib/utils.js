import { useEffect } from 'react'
import { site } from '../data/site'
export const waLink = (text = 'Hello Garg Digital Services, I need some help.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
export function useSeo(title, description) {
  useEffect(() => {
    document.title = title
    let m = document.querySelector('meta[name="description"]')
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    m.content = description
  }, [title, description])
}

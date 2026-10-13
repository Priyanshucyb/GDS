import { useState } from 'react'
import { MessageCircle, Phone, MapPin, Clock, Mail, Handshake, Zap, Eye, Headphones, CheckCircle2 } from 'lucide-react'
import Btn from '../components/Btn'
import Reveal from '../components/Reveal'
import FAQ from '../components/FAQ'
import { faqs, services } from '../data/content'
import { site } from '../data/site'
import { waLink, useSeo } from '../lib/utils'

const values = [
  { Icon: Handshake, t: 'Trust', d: 'Honest guidance, with no promises we cannot keep.' },
  { Icon: Zap, t: 'Convenience', d: 'Everyday digital tasks handled in one place.' },
  { Icon: Eye, t: 'Transparency', d: 'Clear about documents, official fees and who decides.' },
  { Icon: Headphones, t: 'Customer support', d: 'Questions answered on WhatsApp before and during your work.' },
]

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 letters).'
  const digits = v.phone.replace(/[\s-]/g, '').replace(/^(\+91|0)/, '')
  if (!/^[6-9]\d{9}$/.test(digits)) e.phone = 'Enter a valid 10-digit Indian mobile number.'
  if (!v.service) e.service = 'Choose the service you need.'
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (at least 10 characters).'
  return e
}

function ContactForm() {
  const [v, setV] = useState({ name: '', phone: '', service: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(null)
  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (err[k]) setErr({ ...err, [k]: undefined }) }
  const submit = (e) => {
    e.preventDefault()
    const found = validate(v)
    setErr(found)
    if (Object.keys(found).length) { document.getElementById(`f-${Object.keys(found)[0]}`)?.focus(); return }
    const url = waLink(`Hello Garg Digital Services,\nName: ${v.name.trim()}\nPhone: ${v.phone.trim()}\nService: ${v.service}\nMessage: ${v.message.trim()}`)
    setSent(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  const F = ({ k, label, children }) => (
    <div>
      <label htmlFor={`f-${k}`} className="mb-1.5 block text-sm font-semibold text-navy-900">{label}</label>
      {children}
      {err[k] && <p id={`e-${k}`} className="mt-1 text-sm text-red-600">{err[k]}</p>}
    </div>
  )
  const a = (k) => ({ id: `f-${k}`, value: v[k], onChange: set(k), 'aria-invalid': !!err[k], 'aria-describedby': err[k] ? `e-${k}` : undefined, className: 'field' })
  return (
    <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <F k="name" label="Your name"><input {...a('name')} autoComplete="name" /></F>
      <F k="phone" label="Phone number"><input {...a('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" /></F>
      <F k="service" label="Service required">
        <select {...a('service')}>
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          <option>Other</option>
        </select>
      </F>
      <F k="message" label="Message"><textarea {...a('message')} rows={4} /></F>
      <p className="text-xs text-slate-500">Privacy: this form sends your details to us through WhatsApp only. Do not enter ID numbers or upload documents here.</p>
      <Btn type="submit" variant="whatsapp" className="w-full"><MessageCircle className="h-4 w-4" aria-hidden /> Send enquiry on WhatsApp</Btn>
      <div role="status" aria-live="polite">
        {sent && (
          <p className="flex gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-900">
            <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
            <span>Your enquiry is ready in WhatsApp. Press send there to deliver it. No data was stored on this website. If WhatsApp did not open, <a className="font-semibold underline" href={sent} target="_blank" rel="noopener noreferrer">open it here</a>.</span>
          </p>
        )}
      </div>
    </form>
  )
}

export default function About() {
  useSeo('About & Contact | Garg Digital Services', `About Garg Digital Services in ${site.city}, plus how to contact us on WhatsApp.`)
  return (
    <>
      <section className="hero-bg text-white">
        <div className="container-x py-14">
          <h1 className="text-4xl font-bold text-white">About & Contact</h1>
          <p className="mt-3 max-w-xl text-slate-200">Digital services in {site.city}, with a customer-first approach.</p>
        </div>
      </section>
      <section className="container-x grid gap-10 py-16 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold">Who we are</h2>
          <p className="mt-4 max-w-prose leading-relaxed">Garg Digital Services is a digital services and cyber cafe business in {site.city}. We help people with online applications, documentation, printing and other everyday digital tasks.</p>
          <p className="mt-4 max-w-prose leading-relaxed">Our mission is simple: make these tasks easier to complete, with clear guidance at every step. We are a private service provider and not a government department.</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map(({ Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.07} className="rounded-2xl bg-royal-50 p-5"><Icon className="h-6 w-6 text-royal" aria-hidden /><h3 className="mt-3 font-semibold">{t}</h3><p className="mt-1 text-sm">{d}</p></Reveal>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold">Contact us</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 text-royal" aria-hidden /><a href={`tel:+${site.whatsapp}`} className="font-semibold text-navy-900">{site.displayPhone}</a></li>
              <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 text-royal" aria-hidden />{site.address || site.city}</li>
              {site.hours && <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 text-royal" aria-hidden />{site.hours}</li>}
              {site.email && <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 text-royal" aria-hidden />{site.email}</li>}
            </ul>
            <Btn href={waLink()} variant="whatsapp" magnetic className="mt-6"><MessageCircle className="h-4 w-4" aria-hidden /> Chat on WhatsApp</Btn>
            {site.mapEmbedUrl && <iframe title="Garg Digital Services location map" src={site.mapEmbedUrl} loading="lazy" className="mt-8 h-64 w-full rounded-2xl border-0" referrerPolicy="no-referrer-when-downgrade" />}
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="container-x max-w-3xl py-16">
        <h2 className="mb-8 text-3xl font-bold">Frequently asked questions</h2>
        <FAQ items={faqs} />
      </section>
    </>
  )
}

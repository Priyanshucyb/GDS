import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock, Mail } from 'lucide-react'
import { site, DISCLAIMER } from '../data/site'
import { waLink } from '../lib/utils'
import Btn from './Btn'

const links = [{ to: '/', label: 'Home' }, { to: '/services', label: 'Services' }, { to: '/about', label: 'About & Contact' }]

export function Logo({ light }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden><rect width="64" height="64" rx="16" fill="#0B2150" /><path d="M40 24a11 11 0 1 0 2 10H33" fill="none" stroke="#22D3EE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <span className={`font-display text-base sm:text-lg font-extrabold tracking-tight leading-none whitespace-nowrap ${light ? 'text-white' : 'text-[#1c1d1a]'}`}>Garg Digital Services</span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{l.label}</NavLink>)}
          <Btn href={waLink()} variant="whatsapp" className="!px-5 !py-2">WhatsApp</Btn>
        </nav>
        <button type="button" className="rounded-lg p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-slate-200 bg-white md:hidden" aria-label="Mobile">
            <div className="container-x flex flex-col gap-1 py-4">
              {links.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className="rounded-lg px-3 py-3 font-semibold text-navy-800 hover:bg-royal-50">{l.label}</NavLink>)}
              <Btn href={waLink()} variant="whatsapp" className="mt-2">Contact Us on WhatsApp</Btn>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">Online applications, documentation and everyday digital services in {site.city}.</p>
        </div>
        <div>
          <h2 className="mb-4 text-base text-white">Quick links</h2>
          <ul className="space-y-2 text-sm">{links.map((l) => <li key={l.to}><Link className="hover:text-white" to={l.to}>{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="mb-4 text-base text-white">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 translate-y-0.5" aria-hidden /><a className="hover:text-white" href={`tel:+${site.whatsapp}`}>{site.displayPhone}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 translate-y-0.5" aria-hidden />{site.address || site.city}</li>
            {site.hours && <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 translate-y-0.5" aria-hidden />{site.hours}</li>}
            {site.email && <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 translate-y-0.5" aria-hidden />{site.email}</li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs leading-relaxed text-slate-400">
          <p>{DISCLAIMER}</p>
          <p className="mt-2">Privacy: we collect only the details you enter in the enquiry form, and send them to us through WhatsApp. Please do not share ID documents on this website.</p>
          <p className="mt-2">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  )
}

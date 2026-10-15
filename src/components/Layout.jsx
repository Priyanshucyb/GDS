import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import { site, DISCLAIMER } from '../data/site'
import { waLink } from '../lib/utils'
import './LayoutFix.css'

const links = [{ to: '/', label: 'Home' }, { to: '/services', label: 'Services' }, { to: '/about', label: 'About & Contact' }]

export function Logo({ light = false }) {
  return <Link to="/" className={`gds-brand ${light ? 'gds-brand-light' : ''}`} aria-label={`${site.name} home`}>
    <span className="gds-brand-mark" aria-hidden="true"><img src="/gds-logo.jpeg" alt="" /></span>
    <span className="gds-brand-copy"><strong>Garg Digital Services</strong><small>Common Services Center</small></span>
  </Link>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return <header className="gds-site-header">
    <div className="gds-header-inner"><Logo />
      <nav className="gds-desktop-nav" aria-label="Main navigation">{links.map(l => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({isActive}) => `gds-nav-link ${isActive ? 'is-active' : ''}`}>{l.label}</NavLink>)}<NavLink to="/services" className="gds-nav-link">Ration Card</NavLink><NavLink to="/services" className="gds-nav-link">Insurance</NavLink><a className="gds-nav-link" href={waLink('Hello, I would like to enquire about travel and rental vehicles.')}>Travel & Rental</a></nav>
      <a className="gds-header-cta" href={waLink()}><MessageCircle size={16}/> WhatsApp Now <ArrowUpRight size={15}/></a>
      <button className="gds-menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    <AnimatePresence>{open && <motion.nav className="gds-mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} aria-label="Mobile navigation">{links.map(l=><NavLink key={l.to} to={l.to} end={l.to==='/'}>{l.label}</NavLink>)}<a href={waLink()}>WhatsApp enquiries</a></motion.nav>}</AnimatePresence>
  </header>
}

export function Footer() {
 return <footer className="gds-site-footer"><div className="gds-footer-main"><div><Logo light/><p>Online applications, documentation and everyday digital services in {site.city}.</p></div><div><h2>Explore</h2>{links.map(l=><Link key={l.to} to={l.to}>{l.label}</Link>)}<Link to="/services">All services</Link></div><div><h2>Contact</h2><a href={`tel:+${site.whatsapp}`}><Phone/>{site.displayPhone}</a><span><MapPin/>{site.address || site.city}</span>{site.hours && <span><Clock/>{site.hours}</span>}{site.email && <a href={`mailto:${site.email}`}><Mail/>{site.email}</a>}<a href={waLink()}><MessageCircle/>WhatsApp us</a></div></div><div className="gds-footer-legal"><p>{DISCLAIMER}</p><p>Please do not share identity documents through this website. Official requirements and fees may vary by service.</p><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span></div></footer>
}

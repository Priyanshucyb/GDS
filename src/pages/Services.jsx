import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, MessageCircle } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import Btn from '../components/Btn'
import { services, categories } from '../data/content'
import { DISCLAIMER } from '../data/site'
import { waLink, useSeo } from '../lib/utils'

export default function Services() {
  useSeo('Services | Garg Digital Services', 'Browse online application, documentation, printing and digital services offered by Garg Digital Services in Rishikesh.')
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')
  const list = useMemo(() => {
    const t = q.trim().toLowerCase()
    return services.filter((s) => (cat === 'all' || s.cat === cat) &&
      (!t || `${s.title} ${s.short} ${categories.find((c) => c.id === s.cat).label}`.toLowerCase().includes(t)))
  }, [q, cat])
  return (
    <>
      <section className="hero-bg text-white">
        <div className="container-x py-14">
          <h1 className="text-4xl font-bold text-white">Our services</h1>
          <p className="mt-3 max-w-xl text-slate-200">Search or filter to find what you need. Every service has its own page with documents and details.</p>
        </div>
      </section>
      <section className="container-x py-10">
        <div className="relative max-w-xl">
          <label htmlFor="svc-search" className="sr-only">Search services</label>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden />
          <input id="svc-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search e.g. PAN, passport, print" className="field !pl-12" />
        </div>
        <div className="-mx-5 mt-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter by category">
          {[{ id: 'all', label: 'All services' }, ...categories].map((c) => (
            <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${cat === c.id ? 'border-royal bg-royal text-white' : 'border-slate-300 bg-white text-navy-800 hover:border-royal'}`}>
              {c.label}
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500" role="status">{list.length} {list.length === 1 ? 'service' : 'services'} found</p>
        <motion.div layout className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">{list.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}</AnimatePresence>
        </motion.div>
        {list.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
            <p className="font-semibold text-navy-900">No matching service</p>
            <p className="mt-1 text-sm">Try a different word, or ask us directly. We may still be able to help.</p>
            <Btn href={waLink(`Hello, I am looking for: ${q || 'a service'}`)} variant="whatsapp" className="mt-5"><MessageCircle className="h-4 w-4" aria-hidden /> Ask on WhatsApp</Btn>
          </div>
        )}
        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-slate-500">{DISCLAIMER}</p>
      </section>
    </>
  )
}

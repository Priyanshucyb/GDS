import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { icons } from '../data/icons'
import { categories } from '../data/content'
import { waLink } from '../lib/utils'
import Btn from './Btn'

export default function ServiceCard({ s, i = 0 }) {
  const Icon = icons[s.icon]
  const cat = categories.find((c) => c.id === s.cat)?.label
  return (
    <motion.article layout initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
      whileHover={{ y: -4 }} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal-50 text-royal"><Icon className="h-6 w-6" aria-hidden /></span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{cat}</span>
      </div>
      <h3 className="text-lg font-semibold"><Link to={`/services/${s.slug}`} className="hover:text-royal">{s.title}</Link></h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed">{s.short}</p>
      <p className="mt-3 text-xs text-slate-500">Eligibility and processing depend on the relevant official authority.</p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Btn href={waLink(`Hello, I want to enquire about: ${s.title}`)} variant="whatsapp" className="!px-4 !py-2.5">
          <MessageCircle className="h-4 w-4" aria-hidden /> Enquire on WhatsApp
        </Btn>
        <Link to={`/services/${s.slug}`} className="text-sm font-semibold text-royal hover:underline">View details</Link>
      </div>
    </motion.article>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { icons } from '../data/icons'
import { categories } from '../data/content'
import { waLink } from '../lib/utils'
import Btn from './Btn'

export default function ServiceCard({ s, i = 0, imageOverride, catalog = false }) {
  const Icon = icons[s.icon]
  const cat = categories.find((c) => c.id === s.cat)?.label || 'Digital services'
  return (
    <motion.article layout initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }}
      viewport={{ once: true, margin: '-35px' }} transition={{ duration: .4, delay: (i % 3) * .06 }}
      whileHover={{ y: -5 }} className={`service-card group flex flex-col overflow-hidden ${catalog ? 'catalog-service-card' : ''}`}>
      <Link to={`/services/${s.slug}`} className="service-card-media relative block h-48 overflow-hidden" aria-label={`View ${s.title}`}>
        {(imageOverride || s.image) ? <img src={imageOverride || s.image} alt={`${s.title}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /> : <div className="service-image-fallback h-full w-full" />}
        <div className="service-image-overlay absolute inset-0" />
        <span className="service-category absolute left-4 top-4">{cat}</span>
        <span className="service-icon-bubble absolute bottom-4 left-4"><Icon className="h-5 w-5" aria-hidden /></span>
        <span className="service-open absolute bottom-4 right-4"><ArrowUpRight className="h-4 w-4" aria-hidden /></span>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug"><Link to={`/services/${s.slug}`} className="transition-colors hover:text-royal">{s.title}</Link></h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.short}</p>
        <div className="service-card-footer mt-5 flex flex-wrap items-center justify-between gap-3">
          <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-royal">Explore service <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
          <Btn href={waLink(`Hello, I want to enquire about: ${s.title}`)} variant="whatsapp" className="!px-3.5 !py-2.5"><MessageCircle className="h-4 w-4" aria-hidden /> Enquire</Btn>
        </div>
      </div>
    </motion.article>
  )
}

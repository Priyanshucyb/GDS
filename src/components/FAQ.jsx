import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((it, i) => (
        <div key={it.q}>
          <h3 className="text-base">
            <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-900">
              {it.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-royal transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div id={`faq-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <p className="max-w-prose px-5 pb-5 leading-relaxed">{it.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

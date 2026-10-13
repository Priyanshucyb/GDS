import { useRef } from 'react'
import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-royal text-white shadow-soft hover:bg-royal-600',
  light: 'bg-white text-navy-900 hover:bg-royal-50',
  ghost: 'border border-white/30 text-white hover:bg-white/10',
  whatsapp: 'bg-[#128C4A] text-white hover:bg-[#0F7A3F]',
  outline: 'border border-royal/30 text-royal hover:bg-royal-50',
}

export default function Btn({ to, href, variant = 'primary', magnetic = false, className = '', children, ...rest }) {
  const ref = useRef(null)
  const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const props = {
    ref,
    className: `relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition duration-200 active:scale-[.97] ${styles[variant]} ${className}`,
    onPointerDown(e) {
      if (reduce()) return
      const el = ref.current, r = el.getBoundingClientRect(), s = Math.max(r.width, r.height)
      const d = document.createElement('span')
      d.className = 'ripple'
      Object.assign(d.style, { width: s + 'px', height: s + 'px', left: e.clientX - r.left - s / 2 + 'px', top: e.clientY - r.top - s / 2 + 'px' })
      el.appendChild(d)
      setTimeout(() => d.remove(), 600)
    },
    onPointerMove(e) {
      if (!magnetic || reduce() || e.pointerType !== 'mouse') return
      const r = ref.current.getBoundingClientRect()
      ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`
    },
    onPointerLeave() { if (ref.current) ref.current.style.transform = '' },
    ...rest,
  }
  if (to) return <Link to={to} {...props}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  return <button {...props}>{children}</button>
}

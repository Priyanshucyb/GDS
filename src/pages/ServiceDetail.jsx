import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, Info, MessageCircle } from 'lucide-react'
import { services, categories, faqs } from '../data/content'
import { icons } from '../data/icons'
import { DISCLAIMER } from '../data/site'
import { waLink, useSeo } from '../lib/utils'
import Btn from '../components/Btn'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import FAQ from '../components/FAQ'
import NotFound from './NotFound'

const steps = ['Message us your requirement on WhatsApp.', 'We confirm the documents and process with you.', 'We guide you through the application on the official portal.']

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  useSeo(s ? `${s.title} | Garg Digital Services` : 'Service not found | Garg Digital Services', s ? s.short : 'This service page does not exist.')
  if (!s) return <NotFound />
  const Icon = icons[s.icon]
  const cat = categories.find((c) => c.id === s.cat).label
  const related = services.filter((x) => x.cat === s.cat && x.slug !== s.slug).concat(services.filter((x) => x.cat !== s.cat)).slice(0, 3)
  return (
    <>
      <section className="hero-bg overflow-hidden text-white">
        <div className="container-x py-9 sm:py-12">
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-slate-300 transition hover:text-white"><ArrowLeft className="h-4 w-4" aria-hidden /> All services</Link>
          <div className="mt-6 grid items-center gap-8 md:grid-cols-[1.1fr_.9fr]">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-700"><Icon className="h-4 w-4" aria-hidden /> {cat}</span>
              <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">{s.title}</h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">{s.short}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Btn href={waLink(`Hello, I want to enquire about: ${s.title}`)} variant="whatsapp"><MessageCircle className="h-4 w-4" aria-hidden /> Get assistance</Btn>
                <Link to="/services" className="inline-flex items-center rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore other services</Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/20 blur-2xl" />
              <div className="relative h-52 overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl sm:h-64">
                {s.image && <img src={s.image} alt={`${s.title} service illustration`} className="h-full w-full object-cover" fetchPriority="high" />}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-navy-900/10" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-orange-300">Garg Digital Services</p><p className="mt-1 text-xl font-bold text-white">Simple. Guided. Convenient.</p></div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/15 text-orange-300 backdrop-blur"><Icon className="h-6 w-6" aria-hidden /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-x grid gap-10 py-12 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-10">
          <Reveal><h2 className="text-xl font-semibold">Overview</h2><p className="mt-3 max-w-prose leading-relaxed">{s.overview}</p></Reveal>
          <Reveal>
            <h2 className="text-xl font-semibold">Documents commonly needed</h2>
            <ul className="mt-3 space-y-2">{s.needs.map((n) => <li key={n} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-royal" aria-hidden />{n}</li>)}</ul>
            <p className="mt-3 text-sm text-slate-500">The exact list is set by the official portal. We confirm it with you before starting.</p>
          </Reveal>
          <Reveal>
            <h2 className="text-xl font-semibold">How we help</h2>
            <ol className="mt-4 space-y-3">{steps.map((t, i) => <li key={t} className="flex items-center gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-royal text-sm font-bold text-white">{i + 1}</span>{t}</li>)}</ol>
          </Reveal>
          <Reveal className="rounded-2xl bg-royal-50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold"><Info className="h-5 w-5 text-royal" aria-hidden /> Good to know</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">{s.know.map((k) => <li key={k}>{k}</li>)}<li>{DISCLAIMER}</li></ul>
          </Reveal>
          <Reveal><h2 className="mb-4 text-xl font-semibold">Common questions</h2><FAQ items={faqs.slice(0, 3)} /></Reveal>
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-soft">
            <h2 className="text-lg font-semibold">Need help with this?</h2>
            <p className="mt-2 text-sm">Message us with your requirement. We will confirm the details and fees with you.</p>
            <Btn href={waLink(`Hello, I want to enquire about: ${s.title}`)} variant="whatsapp" className="mt-5 w-full"><MessageCircle className="h-4 w-4" aria-hidden /> Enquire on WhatsApp</Btn>
          </div>
        </aside>
      </div>
      <section className="container-x pb-20">
        <h2 className="mb-6 text-2xl font-bold">Other services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((r, i) => <ServiceCard key={r.slug} s={r} i={i} />)}</div>
      </section>
    </>
  )
}

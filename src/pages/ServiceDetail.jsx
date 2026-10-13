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
      <section className="hero-bg text-white">
        <div className="container-x py-12">
          <Link to="/services" className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white"><ArrowLeft className="h-4 w-4" aria-hidden /> All services</Link>
          <div className="mt-5 flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400/20 text-cyan-300"><Icon className="h-7 w-7" aria-hidden /></span>
            <div><span className="text-sm text-cyan-200">{cat}</span><h1 className="text-3xl font-bold text-white sm:text-4xl">{s.title}</h1></div>
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

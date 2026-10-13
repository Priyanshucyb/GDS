import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, MessageSquareText, FileStack, HandHelping, Eye, ShieldCheck, Headphones, ListChecks, CreditCard, Printer, Plane } from 'lucide-react'
import Btn from '../components/Btn'
import Reveal from '../components/Reveal'
import FAQ from '../components/FAQ'
import ServiceCard from '../components/ServiceCard'
import { services, faqs } from '../data/content'
import { site } from '../data/site'
import { waLink, useSeo } from '../lib/utils'

const floaters = [
  { Icon: CreditCard, t: 'PAN Card Assistance', s: 'Apply, correct or reprint', cls: 'left-0 top-4', d: 0 },
  { Icon: Printer, t: 'Print, Scan & Copy', s: 'Same-day everyday work', cls: 'right-0 top-28', d: 0.8 },
  { Icon: Plane, t: 'Passport Assistance', s: 'Forms and checklist', cls: 'left-10 bottom-2', d: 1.6 },
]
const why = [
  { Icon: ListChecks, t: 'Clear guidance', d: 'We tell you what documents are needed before you start.' },
  { Icon: Eye, t: 'Transparent process', d: 'Official fees and timelines are explained upfront, with no guaranteed-approval claims.' },
  { Icon: ShieldCheck, t: 'Privacy-minded', d: 'We ask only for what your application needs.' },
  { Icon: Headphones, t: 'Easy to reach', d: 'Ask questions on WhatsApp, anytime, and get a reply when we are available.' },
]
const steps = [
  { Icon: FileStack, t: 'Choose service', d: 'Browse the services list or search for what you need.' },
  { Icon: MessageSquareText, t: 'Share requirements', d: 'Message us on WhatsApp with what you want to do.' },
  { Icon: HandHelping, t: 'Get assistance', d: 'We guide you through documents and the online process.' },
]

export default function Home() {
  useSeo('Garg Digital Services | Online applications & documentation help in Rishikesh', 'Garg Digital Services in Rishikesh helps with online applications, documentation, printing and everyday digital tasks. Enquire on WhatsApp.')
  return (
    <>
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="grid-lines absolute inset-0" aria-hidden />
        <div className="container-x relative grid items-center gap-12 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
              Your Digital Needs. One Trusted Destination.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-5 max-w-lg text-lg leading-relaxed text-slate-200">
              From online applications and documentation to essential digital services, we make everyday tasks simpler, faster and more convenient.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-wrap gap-3">
              <Btn to="/services" variant="light" magnetic>Explore Our Services <ArrowRight className="h-4 w-4" aria-hidden /></Btn>
              <Btn href={waLink()} variant="ghost" magnetic><MessageCircle className="h-4 w-4" aria-hidden /> Contact Us on WhatsApp</Btn>
            </motion.div>
          </div>
          <div className="relative mx-auto hidden h-80 w-full max-w-sm md:block" aria-hidden>
            <div className="absolute inset-6 rounded-full bg-royal/40 blur-3xl" />
            {floaters.map(({ Icon, t, s, cls, d }) => (
              <motion.div key={t} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ opacity: { delay: 0.4 + d / 2 }, scale: { delay: 0.4 + d / 2 }, y: { duration: 5, repeat: Infinity, delay: d, ease: 'easeInOut' } }}
                className={`absolute flex w-64 items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md ${cls}`}>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/20 text-cyan-300"><Icon className="h-5 w-5" /></span>
                <span><span className="block text-sm font-semibold text-white">{t}</span><span className="text-xs text-slate-300">{s}</span></span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal><h2 className="text-3xl font-bold">Popular services</h2><p className="mt-2 max-w-xl">A few of the things people ask us for most. See the full list on the services page.</p></Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
        </div>
        <div className="mt-8"><Btn to="/services" variant="outline">View all services <ArrowRight className="h-4 w-4" aria-hidden /></Btn></div>
      </section>

      <section className="bg-royal-50 py-20">
        <div className="container-x">
          <Reveal><h2 className="text-3xl font-bold">Why choose Garg Digital Services?</h2></Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.07} className="rounded-2xl bg-white p-6 shadow-sm">
                <Icon className="h-7 w-7 text-royal" aria-hidden /><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal><h2 className="text-3xl font-bold">How it works</h2></Reveal>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(({ Icon, t, d }, i) => (
            <Reveal as="li" key={t} delay={i * 0.1} className="relative rounded-2xl border border-slate-200 p-7">
              <span className="absolute -top-4 left-6 grid h-8 w-8 place-items-center rounded-full bg-royal text-sm font-bold text-white">{i + 1}</span>
              <Icon className="h-7 w-7 text-royal" aria-hidden /><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed">{d}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-navy-900 py-20 text-slate-200">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal><h2 className="text-3xl font-bold text-white">A local digital services desk in {site.city}</h2></Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed">Garg Digital Services helps people in {site.city} handle online applications, documents and everyday digital tasks without the confusion.</p>
            <p className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-relaxed">We are a private service provider, not a government department. Final decisions on every application are made by the relevant official authority.</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x max-w-3xl py-20">
        <Reveal><h2 className="mb-8 text-3xl font-bold">Frequently asked questions</h2></Reveal>
        <FAQ items={faqs} />
      </section>

      <section className="container-x pb-20">
        <div className="hero-bg rounded-3xl px-8 py-14 text-center text-white">
          <h2 className="mx-auto max-w-lg text-3xl font-bold text-white">Not sure which service you need?</h2>
          <p className="mx-auto mt-3 max-w-md text-slate-200">Tell us what you are trying to do and we will point you in the right direction.</p>
          <Btn href={waLink()} variant="whatsapp" magnetic className="mt-7"><MessageCircle className="h-4 w-4" aria-hidden /> Chat on WhatsApp</Btn>
        </div>
      </section>
    </>
  )
}

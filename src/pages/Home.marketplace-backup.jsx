import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Check, CheckCircle2, Clock3,
  FileText, MessageCircle, ShieldCheck, Sparkles, MapPin,
  CreditCard, Printer, Plane
} from 'lucide-react'
import Btn from '../components/Btn'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import FAQ from '../components/FAQ'
import { services, faqs } from '../data/content'
import { site } from '../data/site'
import { waLink, useSeo } from '../lib/utils'

const reasons = [
  { n: '01', icon: ShieldCheck, title: 'Clear guidance', text: 'Understand the documents and steps before starting.' },
  { n: '02', icon: FileText, title: 'Organised process', text: 'Get help preparing forms and supporting documents.' },
  { n: '03', icon: MessageCircle, title: 'Human support', text: 'Discuss your requirement directly with our team.' },
]

const steps = [
  { n: '01', title: 'Choose a service', text: 'Find the service that matches your requirement.' },
  { n: '02', title: 'Tell us what you need', text: 'Message us to confirm documents and assistance charges.' },
  { n: '03', title: 'Take the next step', text: 'We guide you through the relevant official process.' },
]

export default function Home() {
  useSeo(
    'Garg Digital Services | Everyday digital assistance',
    'Explore online application assistance, PAN card services, printing, documentation and more with Garg Digital Services.'
  )

  return (
    <div className="gds-editorial">
      <section className="editorial-hero">
        <div className="editorial-hero-inner container-x">
          <motion.div
            className="editorial-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="editorial-eyebrow">
              <span className="editorial-eyebrow-dot" />
              YOUR LOCAL DIGITAL SERVICES DESK
            </div>

            <h1>
              Less hassle.
              <br />
              <span>More done.</span>
            </h1>

            <p className="editorial-lead">
              Everyday digital tasks, made easier.
              From applications and documentation to printing
              and online assistance, get clear guidance in one place.
            </p>

            <div className="editorial-actions">
              <Btn to="/services" variant="primary" className="editorial-primary">
                Explore services <ArrowUpRight size={18} />
              </Btn>
              <Btn href={waLink()} variant="outline" className="editorial-secondary">
                <MessageCircle size={17} /> Talk to our team
              </Btn>
            </div>

            <div className="editorial-proof">
              <span><CheckCircle2 size={16} /> Clear next steps</span>
              <span><MapPin size={16} /> {site.city}</span>
            </div>
          </motion.div>

          <motion.div
            className="editorial-visual"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <div className="editorial-image">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85"
                alt="Documents and paperwork arranged on a desk"
                fetchPriority="high"
              />
              <div className="editorial-image-label">
                <span>GDS / 001</span>
                <span>HELPFUL BY DESIGN</span>
              </div>
            </div>

            <div className="editorial-note">
              <span className="editorial-note-icon"><Sparkles size={19} /></span>
              <div>
                <strong>One place. Many solutions.</strong>
                <small>Practical help for everyday tasks.</small>
              </div>
              <ArrowUpRight className="editorial-note-arrow" size={20} />
            </div>

            <div className="editorial-index">DIGITAL SERVICES · {site.city.toUpperCase()}</div>
          </motion.div>
        </div>

        <div className="editorial-bottom container-x">
          <span>APPLICATIONS / DOCUMENTS / EVERYDAY DIGITAL WORK</span>
          <a href="#popular">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section className="editorial-service-strip" aria-label="Featured services">
        <div className="container-x editorial-strip-inner">
          <span className="strip-label">WHAT WE CAN HELP WITH</span>
          <div><CreditCard size={18} /> PAN card</div>
          <div><FileText size={18} /> Online forms</div>
          <div><Printer size={18} /> Print & scan</div>
          <div><Plane size={18} /> Passport help</div>
        </div>
      </section>

      <section id="popular" className="container-x editorial-section">
        <Reveal>
          <div className="editorial-section-top">
            <div>
              <span className="editorial-kicker">01 — THE SERVICES</span>
              <h2>Small tasks.<br /><span>Made simpler.</span></h2>
            </div>
            <p>
              Find the support you need, understand the process,
              and know what to prepare before getting started.
            </p>
          </div>
        </Reveal>

        <div className="editorial-service-grid">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>

        <div className="editorial-all-services">
          <span>Looking for something else?</span>
          <Btn to="/services" variant="primary" className="editorial-primary">
            View all services <ArrowRight size={17} />
          </Btn>
        </div>
      </section>

      <section className="editorial-why">
        <div className="container-x editorial-why-inner">
          <Reveal>
            <span className="editorial-kicker">02 — WHY GDS</span>
            <h2>Good service starts<br />with <span>clarity.</span></h2>
            <p className="editorial-why-intro">
              Online processes can feel complicated.
              We focus on making the next step easier to understand.
            </p>
          </Reveal>

          <div className="editorial-reasons">
            {reasons.map(({ n, icon: Icon, title, text }) => (
              <Reveal key={n}>
                <article className="editorial-reason">
                  <div className="editorial-reason-top">
                    <span>{n}</span>
                    <Icon size={23} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x editorial-process">
        <Reveal>
          <span className="editorial-kicker">03 — HOW IT WORKS</span>
          <h2>Three steps.<br /><span>No guesswork.</span></h2>
        </Reveal>

        <div className="editorial-steps">
          {steps.map((step) => (
            <article className="editorial-step" key={step.n}>
              <span className="editorial-step-number">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <Check size={19} className="editorial-step-check" />
            </article>
          ))}
        </div>
      </section>

      <section className="container-x editorial-contact">
        <div className="editorial-contact-inner">
          <div>
            <span className="editorial-kicker editorial-kicker-light">04 — LET'S GET STARTED</span>
            <h2>Have something<br />to get done?</h2>
            <p>Tell us what you need. We will help you understand the next step.</p>
          </div>
          <Btn href={waLink()} variant="primary" className="editorial-contact-button">
            <MessageCircle size={18} /> Enquire on WhatsApp <ArrowUpRight size={18} />
          </Btn>
          <span className="editorial-contact-watermark">GDS.</span>
        </div>
      </section>

      {faqs?.length > 0 && (
        <section className="container-x editorial-faq">
          <Reveal>
            <span className="editorial-kicker">GOOD TO KNOW</span>
            <h2>Frequently asked<br /><span>questions.</span></h2>
          </Reveal>
          <div className="editorial-faq-list"><FAQ items={faqs} /></div>
        </section>
      )}
    </div>
  )
}

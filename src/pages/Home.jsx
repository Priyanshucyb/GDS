import { ArrowRight, ArrowUpRight, MessageCircle, CreditCard, Printer, FileText, Search, ShieldCheck } from 'lucide-react'
import Btn from '../components/Btn'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/content'
import { site } from '../data/site'
import { waLink, useSeo } from '../lib/utils'

const shortcuts = [
  { title: 'PAN Card', desc: 'Applications, corrections and reprints', icon: CreditCard },
  { title: 'Print, Scan & Copy', desc: 'Everyday document assistance', icon: Printer },
  { title: 'Online Forms', desc: 'Help with digital applications', icon: FileText },
]

export default function Home() {
  useSeo(
    'Garg Digital Services | Everyday digital assistance',
    'Explore PAN card assistance, online applications, printing and everyday digital services.'
  )

  return (
    <main className="gds-final-home">
      <section className="final-hero">
        <div className="container-x final-hero-grid">
          <div className="final-hero-copy">
            <span className="final-eyebrow"><i /> DIGITAL SERVICES, MADE SIMPLE</span>
            <h1>Your everyday tasks.<br /><span>Made simpler.</span></h1>
            <p>
              From document assistance to online applications,
              find the service you need and get clear guidance on what comes next.
            </p>
            <div className="final-hero-actions">
              <Btn to="/services" variant="primary" className="final-primary">
                Explore services <ArrowRight size={18} />
              </Btn>
              <Btn href={waLink()} variant="outline" className="final-outline">
                <MessageCircle size={17} /> Contact us
              </Btn>
            </div>
            <div className="final-trust-line">
              <span>✓ Clear guidance</span>
              <span>✓ Helpful assistance</span>
            </div>
          </div>

          <div className="final-device-scene">
            <div className="device-orbit device-orbit-one" />
            <div className="device-orbit device-orbit-two" />

            <div className="device-phone">
              <div className="device-phone-top">
                <span className="device-speaker" />
                <span className="device-camera" />
              </div>

              <div className="device-screen">
                <div className="device-screen-heading">
                  <span>Find your service</span>
                  <small>What do you need today?</small>
                </div>

                <a className="device-search" href="/services">
                  <Search size={15} />
                  <span>Search a service...</span>
                </a>

                <div className="device-menu-label">POPULAR SERVICES</div>

                <a className="device-menu-item" href="/services/pan-card">
                  <span className="device-menu-icon device-icon-orange"><CreditCard size={19} /></span>
                  <span className="device-menu-copy">
                    <strong>PAN Card</strong>
                    <small>Apply or make corrections</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>

                <a className="device-menu-item" href="/services">
                  <span className="device-menu-icon device-icon-green"><ShieldCheck size={19} /></span>
                  <span className="device-menu-copy">
                    <strong>Aadhaar Services</strong>
                    <small>Document assistance</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>

                <a className="device-menu-item" href="/services">
                  <span className="device-menu-icon device-icon-yellow"><FileText size={19} /></span>
                  <span className="device-menu-copy">
                    <strong>Government Forms</strong>
                    <small>Application guidance</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>

                <a className="device-menu-item" href="/services">
                  <span className="device-menu-icon device-icon-orange"><Printer size={19} /></span>
                  <span className="device-menu-copy">
                    <strong>Print &amp; Scan</strong>
                    <small>Everyday document work</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>

                <a className="device-all-services" href="/services">
                  Explore all services <ArrowRight size={14} />
                </a>
              </div>

              <div className="device-phone-bottom"><span /></div>
            </div>

            <a className="device-float-card device-float-top" href="/services">
              <span className="device-float-icon"><FileText size={23} /></span>
              <span><strong>Online Applications</strong><small>Get help with forms</small></span>
              <ArrowUpRight size={17} />
            </a>

            <a className="device-float-card device-float-middle" href="/services">
              <span className="device-float-icon device-float-printer"><Printer size={23} /></span>
              <span><strong>Print &amp; Scan</strong><small>Documents made easy</small></span>
              <ArrowUpRight size={17} />
            </a>

            <div className="device-trust-note">
              <span className="device-trust-check">✓</span>
              <span><strong>Simple. Guided. Convenient.</strong><small>Support for everyday digital needs</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x final-services">
        <div className="final-section-heading">
          <div>
            <span className="final-eyebrow">FIND WHAT YOU NEED</span>
            <h2>Popular services</h2>
            <p>A few of the services people ask us for most.</p>
          </div>
          <Btn to="/services" variant="outline" className="final-outline">
            View all services <ArrowRight size={17} />
          </Btn>
        </div>

        <div className="final-shortcuts">
          {shortcuts.map(({ title, desc, icon: Icon }) => (
            <a href="/services" className="final-shortcut" key={title}>
              <span className="final-shortcut-icon"><Icon size={21} /></span>
              <span><strong>{title}</strong><small>{desc}</small></span>
              <ArrowUpRight size={18} className="final-shortcut-arrow" />
            </a>
          ))}
        </div>

        <div className="final-featured-grid">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </section>

      <section className="final-contact">
        <div className="container-x final-contact-inner">
          <div>
            <span className="final-contact-label">NEED A LITTLE HELP?</span>
            <h2>Let's figure out<br />your next step.</h2>
            <p>Message us with your requirement and confirm the applicable process and fees.</p>
          </div>
          <Btn href={waLink()} variant="primary" className="final-contact-button">
            <MessageCircle size={18} /> Enquire on WhatsApp <ArrowUpRight size={18} />
          </Btn>
        </div>
      </section>
    </main>
  )
}

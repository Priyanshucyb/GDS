import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Phone, MessageCircle, CarFront, Waves, Image as ImageIcon } from 'lucide-react'
import './GDSShowcase.css'

const phone = '916396590449'
const displayPhone = '6396590449 / 8218657145'
const email = 'gargdigitalservices@gmail.com'
const address = 'Indra Nagar, Rishikesh, Uttarakhand'
const wa = `https://wa.me/${phone}?text=${encodeURIComponent('Hello Garg Digital Services, I would like to enquire about your services.')}`

const gallery = [
  { title: 'Garg Digital Services', type: 'Our centre', image: '/gds-gallery/service-01.jpg' },
  { title: 'Citizen & document services', type: 'Documents', image: '/gds-gallery/service-02.jpg' },
  { title: 'Digital assistance', type: 'Digital services', image: '/gds-gallery/service-03.jpg' },
  { title: 'Ration card information', type: 'Government services', image: '/gds-gallery/service-04.jpg' },
  { title: 'Print, copy & PVC cards', type: 'Printing', image: '/gds-gallery/service-05.jpg' },
  { title: 'PVC card printing', type: 'Printing', image: '/gds-gallery/service-06.jpg' },
  { title: 'Vehicle insurance', type: 'Insurance', image: '/gds-gallery/service-07.jpg' },
  { title: 'PAN card guidance', type: 'Documents', image: '/gds-gallery/service-08.jpg' },
  { title: 'Pension application', type: 'Online applications', image: '/gds-gallery/service-09.jpg' },
  { title: 'RTE admission information', type: 'Education', image: '/gds-gallery/service-10.jpg' },
  { title: 'Aadhaar banking services', type: 'Banking assistance', image: '/gds-gallery/service-11.jpg' },
  { title: 'Marriage registration information', type: 'Certificates', image: '/gds-gallery/service-12.jpg' },
  { title: 'CSC digital services', type: 'Digital services', image: '/gds-gallery/service-13.jpg' },
  { title: 'Digital payments information', type: 'Banking assistance', image: '/gds-gallery/service-14.jpg' },
  { title: 'Ration card & PVC card', type: 'Documents', image: '/gds-gallery/service-15.jpg' },
  { title: 'Driving licence assistance', type: 'Transport', image: '/gds-gallery/service-16.jpg' },
  { title: 'More citizen services', type: 'Digital services', image: '/gds-gallery/service-17.jpg' },
]

export default function GDSShowcase() {
  const [active, setActive] = useState(0)
  const current = gallery[active]

  return (
    <div className="gds-showcase">
      <section className="gds-travel-grid" aria-label="Travel and rental bookings">
        <article className="gds-travel-card gds-rafting">
          <div className="gds-travel-orb"><Waves size={28} /></div>
          <span className="gds-mini-label">RISHIKESH EXPERIENCES</span>
          <h2>Make room for<br /><em>adventure.</em></h2>
          <p>Ask us about rafting experiences and available booking options in Rishikesh.</p>
          <a href={`${wa}?`} className="gds-showcase-button">
            <MessageCircle size={16} /> Enquire about rafting <ArrowUpRight size={16} />
          </a>
          <span className="gds-travel-number">01 / EXPERIENCES</span>
        </article>

        <article className="gds-travel-card gds-rental">
          <div className="gds-travel-orb"><CarFront size={28} /></div>
          <span className="gds-mini-label">EXPLORE AT YOUR PACE</span>
          <h2>Your route.<br /><em>Your freedom.</em></h2>
          <p>Enquire about rental vehicles for local travel and nearby outings. Confirm availability before booking.</p>
          <a href={`${wa}?`} className="gds-showcase-button">
            <MessageCircle size={16} /> Enquire about rentals <ArrowUpRight size={16} />
          </a>
          <span className="gds-travel-number">02 / RENTALS</span>
        </article>
      </section>

      <section className="gds-gallery-section" aria-label="Garg Digital Services service gallery">
        <div className="gds-gallery-heading">
          <div>
            <span className="gds-gallery-eyebrow">A CLOSER LOOK / 17 VISUALS</span>
            <h2>Services, <em>all in one place.</em></h2>
            <p>Explore the information shared by Garg Digital Services. Select any card to view it larger.</p>
          </div>
          <div className="gds-gallery-controls">
            <button type="button" aria-label="Previous image" onClick={() => setActive((active + gallery.length - 1) % gallery.length)}><ArrowLeft size={17} /></button>
            <span>{String(active + 1).padStart(2, '0')} <i>/</i> {String(gallery.length).padStart(2, '0')}</span>
            <button type="button" aria-label="Next image" onClick={() => setActive((active + 1) % gallery.length)}><ArrowRight size={17} /></button>
          </div>
        </div>

        <div className="gds-gallery-feature">
          <div className="gds-gallery-image-wrap">
            <AnimatePresence mode="wait">
              <motion.img key={current.image} src={current.image} alt={current.title}
                initial={{ opacity: 0, scale: 1.015 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }} transition={{ duration: .22 }} />
            </AnimatePresence>
          </div>
          <div className="gds-gallery-feature-info">
            <span><ImageIcon size={15} /> {current.type}</span>
            <h3>{current.title}</h3>
            <p>For current requirements, documents, eligibility and applicable charges, please contact the centre directly.</p>
            <a href={wa} className="gds-gallery-contact">Ask about this service <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="gds-gallery-thumbs">
          {gallery.map((item, index) => (
            <button type="button" key={item.image} onClick={() => setActive(index)}
              className={index === active ? 'gds-thumb is-active' : 'gds-thumb'}
              aria-label={`View ${item.title}`} aria-pressed={index === active}>
              <img src={item.image} alt="" loading="lazy" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="gds-contact-strip">
        <div className="gds-contact-place">
          <span className="gds-contact-icon"><MapPin size={22} /></span>
          <div><small>VISIT OUR CENTRE</small><h3>Indra Nagar, Rishikesh</h3><p>{address}</p></div>
        </div>
        <div className="gds-contact-details">
          <a href={`tel:+${phone}`}><Phone size={17} /><span>{displayPhone}</span></a>
          <a href={`mailto:${email}`}><span className="gds-mail-symbol">✉</span><span>{email}</span></a>
        </div>
        <a className="gds-contact-cta" href={wa}><MessageCircle size={18} /> Contact to book <ArrowUpRight size={17} /></a>
      </section>
      <p className="gds-showcase-note">Service availability, eligibility, prices and booking details should be confirmed directly with Garg Digital Services before visiting or making a payment.</p>
    </div>
  )
}

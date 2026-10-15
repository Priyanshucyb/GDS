import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, MessageCircle, Zap, ShieldCheck, UserRound, FileText, Grid2X2, FileCheck2, ArrowUpRight } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import Btn from '../components/Btn'
import { services, categories } from '../data/content'
import { DISCLAIMER } from '../data/site'
import { waLink, useSeo } from '../lib/utils'

const catalogImages = {
  // Core service cards: use a visual that matches the actual task.
  'online-form-filling': '/gds-gallery/catalog-government-forms.jpg',
  'pan-card': '/gds-gallery/catalog-pan-card.jpg',
  'aadhaar-assistance': '/gds-gallery/catalog-aadhaar.jpg',
  'passport-assistance': '/gds-gallery/catalog-passport-travel.jpg',
  'print-scan-copy': '/gds-gallery/catalog-printing-copy.jpg',
  'resume-pdf': '/gds-gallery/catalog-resume-pdf.jpg',
  'certificate-assistance': '/gds-gallery/catalog-certificates.jpg',
  'scholarship-forms': '/gds-gallery/catalog-scholarship-exams.jpg',
  'exam-forms': '/gds-gallery/catalog-extra-08.jpg',
  'tender-assistance': '/gds-gallery/catalog-tenders-verification.jpg',
  'registrations': '/gds-gallery/catalog-extra-01.jpg',
  'police-verification': '/gds-gallery/civic-09.jpg',
  'insurance-bill-payment': '/gds-gallery/catalog-extra-06.jpg',
  'voter-id-assistance': '/gds-gallery/catalog-extra-03.jpg',
  'driving-licence-help': '/gds-gallery/catalog-extra-05.jpg',
  'ration-card-assistance': '/gds-gallery/civic-01.jpg',
  'ayushman-card-help': '/gds-gallery/catalog-extra-03.jpg',
  'photo-signature-resize': '/gds-gallery/catalog-extra-07.jpg',
  'train-ticket-guidance': '/gds-gallery/catalog-extra-04.jpg',
  'aadhaar-bank-withdrawal': '/gds-gallery/catalog-extra-03.jpg',
  'mini-atm-cash-withdrawal': '/gds-gallery/catalog-extra-06.jpg',
  'domestic-money-transfer': '/gds-gallery/catalog-extra-06.jpg',
  'bill-payment-assistance': '/gds-gallery/catalog-extra-06.jpg',
  'mobile-dth-recharge': '/gds-gallery/catalog-extra-05.jpg',
  'rte-school-admission': '/gds-gallery/catalog-scholarship-exams.jpg',
  // Certificate cards intentionally get distinct imagery instead of one shared certificate photo.
  'marriage-registration': '/gds-gallery/civic-02.jpg',
  'birth-certificate': '/gds-gallery/civic-03.jpg',
  'death-certificate': '/gds-gallery/civic-04.jpg',
  'income-certificate': '/gds-gallery/civic-05.jpg',
  'caste-certificate': '/gds-gallery/civic-06.jpg',
  'domicile-residence-certificate': '/gds-gallery/civic-07.jpg',
  'survivor-certificate': '/gds-gallery/civic-08.jpg',
  'character-certificate': '/gds-gallery/civic-09.jpg',
  'pension-application': '/gds-gallery/catalog-extra-06.jpg',
  'epf-pf-claim': '/gds-gallery/catalog-extra-06.jpg',
  'e-shram-labour-card': '/gds-gallery/catalog-extra-01.jpg',
  'ayushman-health-card': '/gds-gallery/catalog-extra-03.jpg',
  'driving-licence': '/gds-gallery/catalog-extra-05.jpg',
  'ration-card': '/gds-gallery/civic-01.jpg',
  'pvc-card-printing': '/gds-gallery/catalog-printing-copy.jpg',
  'passport-photo-printing': '/gds-gallery/catalog-extra-07.jpg',
  'photocopy-lamination': '/gds-gallery/catalog-printing-copy.jpg',
  'resume-pdf-services': '/gds-gallery/catalog-resume-pdf.jpg',
  'flight-train-bus-tickets': '/gds-gallery/catalog-passport-travel.jpg',
  'vehicle-insurance': '/gds-gallery/catalog-extra-06.jpg',
  'life-health-insurance': '/gds-gallery/catalog-extra-06.jpg',
  'rent-vehicle-enquiry': '/gds-gallery/rental-suv.jpg',
  'rafting-booking-enquiry': '/gds-gallery/rafting-experience.jpg',
  'job-registration': '/gds-gallery/catalog-resume-pdf.jpg',
  'family-register': '/gds-gallery/civic-08.jpg',
}
const categoryImages = {
  forms: '/gds-gallery/catalog-government-forms.jpg', pan: '/gds-gallery/catalog-pan-card.jpg', aadhaar: '/gds-gallery/catalog-aadhaar.jpg',
  passport: '/gds-gallery/catalog-passport-travel.jpg', print: '/gds-gallery/catalog-printing-copy.jpg', docs: '/gds-gallery/catalog-resume-pdf.jpg',
  certs: '/gds-gallery/catalog-certificates.jpg', scholar: '/gds-gallery/catalog-scholarship-exams.jpg', tender: '/gds-gallery/catalog-tenders-verification.jpg',
  insurance: '/gds-gallery/catalog-extra-06.jpg', travel: '/gds-gallery/catalog-passport-travel.jpg',
}

export default function Services() {
  useSeo('Services | Garg Digital Services', 'Browse online application, documentation, printing and digital services offered by Garg Digital Services in Rishikesh.')
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('all')
  const list = useMemo(() => {
    const t = q.trim().toLowerCase()
    return services.filter((s) => (cat === 'all' || s.cat === cat) &&
      (!t || `${s.title} ${s.short} ${categories.find((c) => c.id === s.cat)?.label || ''}`.toLowerCase().includes(t)))
  }, [q, cat])
  return (
    <div className="services-catalog-v2">
      <section className="catalog-hero">
        <div className="catalog-hero-inner">
          <div className="catalog-hero-copy">
            <span className="catalog-eyebrow"><span /> FIND THE RIGHT SUPPORT</span>
            <h1>Services that make<br /><span>life simpler.</span></h1>
            <p>Browse practical digital assistance for applications, identity documents, printing and more. Choose a service to see its details and next steps.</p>
            <div className="catalog-points">
              <span><Grid2X2 /> {services.length}+ service options</span>
              <span><FileCheck2 /> Simple document checklists</span>
              <span><MessageCircle /> WhatsApp assistance</span>
            </div>
          </div>
          <div className="catalog-hero-art" aria-hidden="true">
            <div className="catalog-doc catalog-doc-gds"><b>GDS</b><small>IDENTITY CARD</small><i /><i /><i /></div>
            <div className="catalog-doc catalog-doc-pan"><b>PAN</b><small>PERMANENT ACCOUNT NUMBER</small><i /><i /><i /></div>
            <div className="catalog-doc catalog-doc-aadhaar"><b>आधार</b><small>GOVERNMENT OF INDIA</small><i /><i /></div>
            <div className="catalog-trust-card">
              <div><span className="trust-icon orange"><Zap /></span><p><b>Fast & Reliable</b><small>Get your work done quickly</small></p></div>
              <div><span className="trust-icon blue"><ShieldCheck /></span><p><b>Trusted CSC Center</b><small>Authorized and secure services</small></p></div>
              <div><span className="trust-icon green"><UserRound /></span><p><b>Local Support</b><small>Walk-in or online assistance</small></p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="catalog-content">
        <div className="catalog-search-row">
          <div className="catalog-search-wrap"><Search aria-hidden /><label htmlFor="svc-search-v2" className="sr-only">Search services</label><input id="svc-search-v2" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search PAN, passport, certificates, printing…" /></div>
          <p><b>Tip:</b> search by service name or category to narrow down the list.</p>
        </div>
        <div className="catalog-filters" role="group" aria-label="Filter by category">
          {[{ id: 'all', label: 'All services' }, ...categories].map((c) => <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)} className={cat === c.id ? 'active' : ''}>{c.label}</button>)}
        </div>
        <div className="catalog-count-row"><p role="status">Showing <b>{list.length}</b> {list.length === 1 ? 'service' : 'services'}</p><span>Select a card to view documents and process</span></div>
        <motion.div layout className="catalog-service-grid">
          <AnimatePresence mode="popLayout">{list.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} catalog imageOverride={catalogImages[s.slug] || categoryImages[s.cat] || s.image} />)}</AnimatePresence>
        </motion.div>
        {list.length === 0 && <div className="catalog-empty"><FileText /><p><b>No matching service</b></p><p>Try a different word, or ask us directly. We may still be able to help.</p><Btn href={waLink(`Hello, I am looking for: ${q || 'a service'}`)} variant="whatsapp" className="mt-4"><MessageCircle className="h-4 w-4" /> Ask on WhatsApp</Btn></div>}
        <p className="catalog-disclaimer">{DISCLAIMER}</p>
      </section>
    </div>
  )
}

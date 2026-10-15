import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, MessageCircle, MapPin, CreditCard, CarFront, Printer, FileText, ShieldCheck, Waves, Laptop, Phone, Mail, ChevronLeft, ChevronRight, Banknote, ReceiptText, Camera, IdCard, GraduationCap, BriefcaseBusiness } from 'lucide-react'
import { services } from '../data/content'
import { site } from '../data/site'
import { waLink, useSeo } from '../lib/utils'
import './GDSReference.css'

const posters = [
 ['Our Services List','/gds-gallery/service-01.jpg'],['RTE Admission','/gds-gallery/service-10.jpg'],
 ['Bank & ATM Services','/gds-gallery/service-11.jpg'],['Marriage Registration','/gds-gallery/service-12.jpg'],
 ['Driving Licence','/gds-gallery/service-16.jpg'],['PVC Card Printing','/gds-gallery/service-06.jpg'],
 ['Ration Card','/gds-gallery/service-15.jpg'],['Digital Services','/gds-gallery/service-13.jpg'],
 ['Aadhaar & PAN','/gds-gallery/service-08.jpg'],['Insurance','/gds-gallery/service-07.jpg'],
 ['Print & Copy','/gds-gallery/service-05.jpg'],['Pension Application','/gds-gallery/service-09.jpg'],
 ['CSC Services','/gds-gallery/service-04.jpg'],['Money Transfer','/gds-gallery/service-14.jpg'],
 ['Rishikesh Services','/gds-gallery/service-03.jpg'],['Citizen Services','/gds-gallery/service-02.jpg'],
 ['Driving Licence Info','/gds-gallery/service-17.jpg']
]
const popular = [
 ['Aadhaar Card','New, update, correction',CreditCard],['Driving Licence','Online application',CarFront],
 ['PAN Card','Apply, link, correction',IdCard],['Passport Photo','Print & photo service',Camera],
 ['Voter ID Card','New & correction',IdCard],['Insurance Services','Vehicle, health, life & more',ShieldCheck],
 ['Ration Card','Apply, update, print',FileText],['DTH / Mobile Recharge','All operators available',ReceiptText]
]
const categories = [
 ['Document Services','Aadhaar, PAN, Voter ID, Ration Card & more',CreditCard,'blue'],
 ['Online Applications','Forms, registrations and digital services',Laptop,'purple'],
 ['Insurance Services','Vehicle, health, life and all types of insurance',ShieldCheck,'pink'],
 ['Rafting Booking','Adventure rafting in Rishikesh – enquire for details',Waves,'green'],
 ['Rental Vehicles','Car, bike and traveller for local & outstation',CarFront,'gold']
]
const lower = [
 ['Aadhaar Banking','Easy cash withdrawal',Banknote],['Money Transfer','Instant money transfer',ArrowRight],
 ['Bill Payments','Electricity, water, mobile, DTH',ReceiptText],['Online Forms','Apply for government schemes',FileText],
 ['Print, Scan & Copy','Colour / B&W print, lamination',Printer],['Photo & Passport','Passport size photos',Camera]
]
const wa = (text) => `${waLink()}${waLink().includes('?') ? '&' : '?'}text=${encodeURIComponent(text)}`

export default function Home(){
 const posterWindowRef = useRef(null)
 const [selectedPoster,setSelectedPoster]=useState(null)
 useSeo('Garg Digital Services | Common Services Centre, Rishikesh','Digital and citizen services, document assistance, online applications, insurance, rafting and rental vehicle enquiries in Indra Nagar, Rishikesh.')
 const move=(direction)=>{
  const viewport=posterWindowRef.current
  if(!viewport) return
  const card=viewport.querySelector('.gref-poster')
  if(!card) return
  const styles=window.getComputedStyle(viewport.querySelector('.gref-poster-track'))
  const gap=parseFloat(styles.columnGap || styles.gap) || 10
  viewport.scrollBy({left:direction*(card.getBoundingClientRect().width+gap),behavior:'smooth'})
 }
 return <div className="gref">
  <section className="gref-hero">
   <div className="gref-scenic"><div className="gref-mountain gref-mountain-a"/><div className="gref-mountain gref-mountain-b"/><div className="gref-river"/></div>
   <div className="gref-hero-grid">
    <motion.div className="gref-copy" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
     <span className="gref-pill"><i/> CSC CENTRE <b>•</b> DIGITAL SERVICES <b>•</b> SINCE 1997</span>
     <h1>Your Everyday Work,<br/><em>Made Easier.</em></h1>
     <p>PAN, Aadhaar, Ration Card, Online Forms, Insurance,<br className="gref-desktop"/> Travel & Rentals — All Services at One Place</p>
     <div className="gref-address"><MapPin size={16}/> Indra Nagar, Rishikesh</div>
     <div className="gref-actions"><a className="gref-primary" href="/services">Explore All Services <ArrowRight size={17}/></a><a className="gref-outline" href={waLink()}><MessageCircle size={17}/> Chat on WhatsApp</a></div>
     <div className="gref-trust"><span><ShieldCheck/> Trusted CSC Center</span><span><CreditCard/> Guided Assistance</span><span><MapPin/> Local Support</span></div>
    </motion.div>
    <div className="gref-doc-art" aria-hidden="true">
     <div className="gref-note">Documents<br/><em>Made Simple!</em><span>↘</span></div>
     <div className="gref-id gref-id-one"><b>GDS</b><span/><span/><small>IDENTITY CARD</small></div>
     <div className="gref-id gref-id-two"><b>PAN</b><span/><span/><small>INCOME TAX</small></div>
     <div className="gref-id gref-id-three"><b>आधार</b><span/><span/><small>GOVERNMENT OF INDIA</small></div>
    </div>
    <div className="gref-popular">
     <div className="gref-popular-head"><h2><span>♨</span> Popular Services</h2><a href="/services">View All <ArrowRight size={13}/></a></div>
     <div className="gref-popular-grid">{popular.map(([title,desc,Icon],i)=><a href="/services" key={title} className="gref-popular-item"><span className={`gref-pop-icon gref-pop-${i}`}><Icon size={17}/></span><span><strong>{title}</strong><small>{desc}</small></span><ChevronRight size={14}/></a>)}</div>
    </div>
    <aside className="gref-stats"><div className="gref-csc">CSC<small>Common Services Center</small></div><div className="gref-since">BY GANPATI GROUP<br/>(SINCE 1997)</div><div><b>🏆</b><span><strong>5000+</strong><small>Happy Customers</small></span></div><div><b>✣</b><span><strong>17+</strong><small>Service Categories</small></span></div><div><b>✓</b><span><strong>100%</strong><small>Trusted & Secure</small></span></div></aside>
   </div>
  </section>

  <section className="gref-festive-wide" aria-label="Diwali vehicle insurance offer">
   <a className="gref-festive-banner" href={wa('Please share details about vehicle insurance services and any current Diwali offer.')}>
    <img src="/gds-gallery/diwali-banner.jpg" alt="Diwali festive special offer from Garg Digital Services" loading="eager" />
    
   </a>
  </section>

  <section className="gref-category-row gref-category-row-four">{categories.filter((_,i)=>i!==3&&i!==4).map(([title,desc,Icon,tint])=><a href="/services" key={title} className={`gref-category gref-${tint}`}><span className="gref-category-icon"><Icon size={23}/></span><span className="gref-category-text"><strong>{title}</strong><small>{desc}</small></span><span className="gref-circle-arrow"><ArrowRight size={15}/></span></a>)}<a href={wa('I would like to enquire about travel and rental services in Rishikesh.')} className="gref-category gref-green gref-travel-category"><span className="gref-category-icon"><CarFront size={23}/></span><span className="gref-category-text"><strong>Travel & Rental</strong><small>Cars, bikes, tempo traveller and more</small></span><span className="gref-circle-arrow"><ArrowRight size={15}/></span></a></section>

  <section className="gref-travel-posters" aria-label="Rafting and rental vehicle services">
   <a className="gref-travel-poster gref-rafting-poster" href={wa('I would like to enquire about rafting packages and availability in Rishikesh.')}>
    <img src="/gds-gallery/rafting-experience.jpg" alt="White water rafting experience in Rishikesh" loading="lazy" />
    <span className="gref-travel-shade"/>
    <span className="gref-travel-content"><small>ADVENTURE IN RISHIKESH</small><strong>RAFTING BOOKING</strong><span>Experience the thrill of rafting in Rishikesh with best prices and safe arrangements.</span><b>Enquire Now <ArrowRight size={17}/></b></span>
    <span className="gref-travel-perks"><span>◆ Best Prices</span><span>✓ Safe & Certified</span><span>♟ Group & Family Packages</span><span>⌖ Local Guides</span></span>
   </a>
   <a className="gref-travel-poster gref-rental-poster" href={wa('I would like to enquire about car, bike and tempo traveller rentals in Rishikesh.')}>
    <img src="/gds-gallery/rental-suv.jpg" alt="Rental vehicle for local and outstation travel in Rishikesh" loading="lazy" />
    <span className="gref-travel-shade"/>
    <span className="gref-travel-content"><small>EXPLORE RISHIKESH & NEARBY</small><strong>RENTAL VEHICLES</strong><span>Car, bike, tempo traveller and more for local travel and outstation trips.</span><b>Enquire Now <ArrowRight size={17}/></b></span>
    <span className="gref-travel-perks"><span>⚙ Well Maintained</span><span>☎ Affordable Pricing</span><span>▣ Wide Range</span><span>⌖ Local & Outstation</span></span>
   </a>
  </section>

  <section className="gref-contact-strip">
   <a className="gref-strip-address" href="https://maps.google.com/?q=Indra+Nagar+Rishikesh"><span>⌖</span><div><small>Our Address</small><strong>Indra Nagar, Rishikesh</strong><em>Garg Digital Services (CSC Center)</em></div></a>
   <a className="gref-strip-phone" href="tel:+916396590449"><span><Phone/></span><div><small>Call Us</small><strong>6396590449<br/>8218657145</strong><em>Mon – Sat · 9:00 AM – 8:00 PM</em></div></a>
   <a className="gref-strip-email" href="mailto:gargdigitalservices@gmail.com"><span><Mail/></span><div><small>Email</small><strong>gargdigitalservices@gmail.com</strong><em>We respond within 24 hours</em></div></a>
   <a className="gref-strip-whatsapp" href={waLink()}><MessageCircle/><div><strong>Chat on WhatsApp</strong><small>Get Instant Support & Enquiry</small></div><b>Chat Now <ArrowRight size={16}/></b></a>
  </section>

  <section className="gref-featured">
   <div className="gref-featured-head"><div><h2><span>✣</span> Our Featured Services</h2><p>All the services you need — all in one place.</p></div><a href="/services">View All Services <ArrowRight size={14}/></a><div className="gref-slide-controls"><button onClick={()=>move(-1)} aria-label="Previous posters"><ChevronLeft/></button><button onClick={()=>move(1)} aria-label="Next posters"><ChevronRight/></button></div></div>
   <div className="gref-poster-window" ref={posterWindowRef}><div className="gref-poster-track">{posters.map(([title,image],i)=><button type="button" onClick={()=>setSelectedPoster({title,image,index:i+1})} className="gref-poster" key={image} aria-label={`View ${title} poster`}><div><img src={image} alt={title} loading="lazy"/></div><small>{i+1}. {title}</small></button>)}</div></div>
  </section>

  <section className="gref-lower-services">{lower.map(([title,desc,Icon])=><a href="/services" key={title}><span><Icon size={20}/></span><div><strong>{title}</strong><small>{desc}</small></div><ArrowUpRight size={14}/></a>)}</section>
  <section className="gref-service-directory"><div><span className="gref-section-kicker">EVERYDAY ASSISTANCE</span><h2>More services, <em>less hassle.</em></h2><p>Browse our service directory or contact us to confirm requirements and applicable fees.</p></div><div className="gref-directory-grid">{services.slice(0,6).map((s,i)=><a href={`/services/${s.slug}`} key={s.slug}><span>0{i+1}</span><strong>{s.title}</strong><small>{s.description}</small><ArrowUpRight size={15}/></a>)}</div></section>
  <section className="gref-bottom"><div><small>NEED HELP WITH A SERVICE?</small><h2>We’ll help you find <em>the next step.</em></h2></div><a href={waLink()}><MessageCircle size={17}/> Contact on WhatsApp <ArrowRight size={15}/></a></section>
  <AnimatePresence>{selectedPoster && <motion.div className="gref-lightbox" role="dialog" aria-modal="true" aria-label={selectedPoster.title} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelectedPoster(null)}><motion.div className="gref-lightbox-panel" initial={{scale:.94,y:12}} animate={{scale:1,y:0}} exit={{scale:.96,y:8}} onClick={e=>e.stopPropagation()}><div className="gref-lightbox-head"><div><small>GARG DIGITAL SERVICES · POSTER {selectedPoster.index} / 17</small><h2>{selectedPoster.title}</h2></div><button type="button" aria-label="Close poster" onClick={()=>setSelectedPoster(null)}>×</button></div><img className="gref-lightbox-image" src={selectedPoster.image} alt={selectedPoster.title}/><div className="gref-lightbox-actions"><button type="button" onClick={()=>setSelectedPoster(null)}>Back to gallery</button><a href={wa(`Please tell me more about ${selectedPoster.title}.`)}><MessageCircle size={16}/> Enquire on WhatsApp</a></div></motion.div></motion.div>}</AnimatePresence>
 </div>
}

import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { Header, Footer } from './components/Layout'
import Home from './pages/Home'

const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))

const Skeleton = () => (
  <div className="container-x space-y-4 py-16" aria-busy="true" aria-label="Loading">
    <div className="skeleton h-10 w-1/2" /><div className="skeleton h-4 w-3/4" />
    <div className="grid gap-4 pt-6 sm:grid-cols-3">{[0, 1, 2].map((i) => <div key={i} className="skeleton h-44" />)}</div>
  </div>
)

export default function App() {
  const location = useLocation()
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="main">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Suspense fallback={<Skeleton />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </MotionConfig>
  )
}

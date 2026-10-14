import Btn from '../components/Btn'
import { useSeo } from '../lib/utils'
export default function NotFound() {
  useSeo('Page not found | Garg Digital Services', 'The page you are looking for does not exist.')
  return (
    <section className="container-x py-28 text-center">
      <p className="font-display text-7xl font-bold text-royal">404</p>
      <h1 className="mt-4 text-3xl font-bold">We can't find that page</h1>
      <p className="mx-auto mt-3 max-w-md">The link may be old or mistyped. Head back home or browse our services.</p>
      <div className="mt-8 flex justify-center gap-3"><Btn to="/">Go to home</Btn><Btn to="/services" variant="outline">Browse services</Btn></div>
    </section>
  )
}

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TrustStats from '@/components/trust-stats'
import About from '@/components/about'
import Products from '@/components/products'
import WhyUs from '@/components/why-us'
import Process from '@/components/process'
import Industries from '@/components/industries'
import Testimonials from '@/components/testimonials'
import InquiryCTA from '@/components/inquiry-cta'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <TrustStats />
      <About />
      <Products />
      <WhyUs />
      <Process />
      <Industries />
      <Testimonials />
      <InquiryCTA />
      <ContactForm />
      <Footer />
    </main>
  )
}

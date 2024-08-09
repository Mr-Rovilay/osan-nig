
import Navbar from '@/components/navbar/navbar'
import HeroSection from './hero-section'
import WhyChooseUs from './why-choose-us'
import ProductsSection from '@/components/productcard/product'
import TestimonialsSection from './testimonials'
import CTASection from './cta-section'
import Footer from '@/components/footer/footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <WhyChooseUs/>
      <ProductsSection/>
      <TestimonialsSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default Home
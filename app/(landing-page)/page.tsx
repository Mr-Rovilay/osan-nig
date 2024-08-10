
import HeroSection from './hero-section'
import WhyChooseUs from './why-choose-us'
import ProductsSection from '@/components/productcard/product'
import TestimonialsSection from './testimonials'
import CTASection from './cta-section'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      <ProductsSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  )
}

export default Home
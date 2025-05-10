import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FeaturedAccommodations from '@/components/FeaturedAccommodations'
import DestinationSection from '@/components/DestinationSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <FeaturedAccommodations />
      <DestinationSection />
      <Footer />
    </main>
  )
} 
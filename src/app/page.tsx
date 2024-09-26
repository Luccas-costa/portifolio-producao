import Hero from 'home/hero'
import Navbar from 'home/navbar'
import Products from 'home/products'
import Testimonials from 'home/testimonials'

import WavesOpacity from '@/assets/waves-opacity'
import CurveAsymmstrical from '@/assets/curve-asymmstrical'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <WavesOpacity />

      <Products />

      <div className="relative">
        <div className="absolute left-0 top-0 w-full" style={{ zIndex: 2 }}>
          <CurveAsymmstrical />
        </div>

        <Testimonials />
      </div>
    </div>
  )
}

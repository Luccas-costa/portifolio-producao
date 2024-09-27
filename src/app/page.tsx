import Hero from 'home/hero'
import Footer from 'home/footer'
import Navbar from 'home/navbar'
import Popular from 'home/popular'
import Products from 'home/products'
import Testimonials from 'home/testimonials'

import Tilt from '@/assets/tilt'
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

      <div className="bg-variant_green2/40 pt-[100px]">
        <div className="h-full w-full bg-[url('/background-tilt.png')] bg-repeat">
          <Tilt color={0} />
          <div className="rotate-180">
            <Tilt color={1} />
          </div>
        </div>
      </div>
      <Popular />
      <Footer />
    </div>
  )
}

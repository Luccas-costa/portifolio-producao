import Hero from 'home/hero'
import Navbar from 'home/navbar'
import Products from 'home/products'
import Testimonials from 'home/testimonials'
import Popular from 'home/popular'

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

      <div className="bg-variant_green2/40 pt-[200px]">
        <div className="h-full w-full bg-[url('/nome-da-imagem.jpg')] bg-repeat">
          <Tilt />
          <div className="rotate-180">
            <Tilt />
          </div>
        </div>
      </div>
      <Popular />
    </div>
  )
}

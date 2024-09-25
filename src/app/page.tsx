import Hero from 'home/hero'
import Navbar from 'home/navbar'
import Comments from 'home/comments'
import Products from 'home/products'
import WavesOpacity from '@/assets/waves-opacity'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <WavesOpacity />

      <Comments />
      <Products />
    </div>
  )
}

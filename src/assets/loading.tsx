import Image from 'next/image'
import Spinner from 'public/assets/Spinner.svg'

interface LoaderProps {
  size: number
}

const Loader = ({ size }: LoaderProps = { size: 50 }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image src={Spinner} alt="loading" width={size} height={size} />
    </div>
  )
}

export default Loader

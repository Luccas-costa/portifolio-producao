// import Benefitis from './benefitis'
import Mission from './mission'

export default function Infos() {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="relative h-full w-[80vw] border border-zinc-400/30 bg-[#1B1B1B] py-[120px] shadow-lg">
        <div className="mb-[115px]">
          <Mission />
        </div>
        {/* <Benefitis /> */}
      </div>
    </div>
  )
}

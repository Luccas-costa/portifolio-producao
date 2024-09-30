'use client'
import { useCoordinates } from '@/hooks/useCoordinates'

export default function Teste005() {
  const [{ lat, lng }, setCoordinates] = useCoordinates()
  return (
    <div>
      <input
        type="number"
        value={lat}
        onChange={(e) => setCoordinates({ lat: e.target.valueAsNumber })}
      />
      <input
        type="number"
        value={lng}
        onChange={(e) => setCoordinates({ lng: e.target.valueAsNumber })}
      />
    </div>
  )
}

'use client'

import { useCoordinates } from '@/hooks/useCoordinates'

export default function Teste004() {
  const [{ lat, lng }] = useCoordinates() // Read-only
  return (
    <div>
      Latitude: {lat}
      Longitude: {lng}
    </div>
  )
}

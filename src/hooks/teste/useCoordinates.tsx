import { useQueryStates, parseAsFloat } from 'nuqs'

export function useCoordinates() {
  return useQueryStates({
    lat: parseAsFloat.withDefault(0),
    lng: parseAsFloat.withDefault(0),
  })
}

import { useQueryStates, parseAsInteger } from 'nuqs'

export function useUrlBags() {
  return useQueryStates({
    idBags: parseAsInteger.withDefault(0),
  })
}

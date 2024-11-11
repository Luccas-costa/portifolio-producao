import { useQueryStates, parseAsInteger, parseAsArrayOf } from 'nuqs'

export function useCart() {
  return useQueryStates({
    idBagsCart: parseAsArrayOf(parseAsInteger).withDefault([]),
  })
}

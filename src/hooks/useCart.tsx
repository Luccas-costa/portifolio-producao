import { useQueryStates, parseAsInteger, parseAsArrayOf } from 'nuqs'

export function useCart() {
  return useQueryStates({
    bagsCart: parseAsArrayOf(parseAsInteger).withDefault([]),
  })
}

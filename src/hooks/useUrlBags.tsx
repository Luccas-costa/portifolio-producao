import { useQueryStates, parseAsInteger } from 'nuqs'

export function useUrlBags() {
  return useQueryStates({
    idBags: parseAsInteger.withDefault(0), // Altere de 0 para null se não for desejável ter um valor padrão
  })
}

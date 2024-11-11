import { useQueryStates, parseAsInteger, parseAsBoolean } from 'nuqs'

export function useUrlBags() {
  return useQueryStates({
    idBags: parseAsInteger.withDefault(0), // Altere de 0 para null se não for desejável ter um valor padrão
    addingToCart: parseAsBoolean.withDefault(false), // Altere de false para null se não for desejável ter um valor padrão
  })
}

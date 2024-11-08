import { useQueryStates, parseAsString } from 'nuqs'

export function useFilters() {
  return useQueryStates({
    id: parseAsString.withDefault('').withOptions({ shallow: false }), // Altere de 0 para null se não for desejável ter um valor padrão
    name: parseAsString.withDefault('').withOptions({ shallow: false }), // Altere de 0 para null se não for desejável ter um valor padrão
    status: parseAsString.withDefault('').withOptions({ shallow: false }), // Altere de 0 para null se não for desejável ter um valor padrão
  })
}

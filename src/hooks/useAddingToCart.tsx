import { useQueryStates, parseAsBoolean } from 'nuqs'

export function useAddingToCart() {
  return useQueryStates({
    addingToCart: parseAsBoolean.withDefault(false), // Altere de false para null se não for desejável ter um valor padrão
  })
}

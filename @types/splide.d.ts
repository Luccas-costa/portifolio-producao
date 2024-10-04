// splide.d.ts
declare module '@splidejs/react-splide' {
  import { ComponentType, HTMLAttributes } from 'react'

  interface SplideOptions {
    type?: 'slide' | 'loop' | 'fade'
    perPage?: number
    perMove?: number
    gap?: string | number
    rewind?: boolean
    pagination?: boolean // Adicionando a propriedade pagination
    arrows?: boolean // Adicionando a propriedade arrows
    breakpoints?: {
      [key: number]: Partial<SplideOptions> // Permite definir opções por breakpoints
    }
    // Adicione outras opções conforme necessário
  }

  interface SplideProps extends HTMLAttributes<HTMLElement> {
    options?: Partial<SplideOptions>
    ariaLabel?: string
  }

  interface SplideSlideProps extends HTMLAttributes<HTMLElement> {}

  export const Splide: ComponentType<SplideProps>
  export const SplideSlide: ComponentType<SplideSlideProps>
}

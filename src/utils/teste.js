// use a script tag or an external JS file
document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  const linhaDoTempo = gsap.timeline({
    scrollTrigger: {
      trigger: '.divPai',
      start: 'top top',
      end: '+=2000',
      pin: true,
      scrub: 2,
      // markers: true
    },
  })

  linhaDoTempo.to('.divGradient', {
    opacity: 0,
    duration: 1,
  })
  linhaDoTempo.from(
    '.divGradient2',
    {
      opacity: 0,
      duration: 1,
    },
    '<',
  )
  linhaDoTempo.to(
    '.tituloHero',
    {
      opacity: 0,
      duration: 1,
    },
    '<',
  )

  const listaCards = document.querySelectorAll('.card')

  listaCards.forEach((card) => {
    linhaDoTempo.from(card, {
      opacity: 0,
      filter: 'blur(30px)',
      y: 30,
      duration: 0.5,
    })
    linhaDoTempo.to(
      card,
      {
        opacity: 0,
        duration: 0.5,
        filter: 'blur(30px)',
        y: 30,
      },
      '+=.5',
    )
  })
  linhaDoTempo.from(
    '.divObrigado',
    {
      opacity: 0,
      duration: 0.5,
    },
    '-=.5',
  )
  linhaDoTempo.to('.divObrigado', {
    scaleX: 1,
    rotateX: 0,
    bottom: 0,
    borderRadius: 0,
    duration: 1,
  })
})

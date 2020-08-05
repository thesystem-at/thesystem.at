export const View = (_, children) =>
  footer({ class: 'Footer' }, [
    h3('Commissioned by:'),

    Link({ title: 'financial support provided by kör', to: 'https://koer.or.at' }, [
      Img({ class: 'koer', src: '/social/koer.jpg', width: '255', height: '100' }),
      Img({ class: 'koer', src: '/social/wien-kultur.jpg', width: '349', height: '100' }),
    ]),

    h3('Support:'),

    Link(
      { to: 'https://usus.wien' },
      Img({
        title: 'yppshop provided by usus.wien',
        src: '/social/usus.png',
        width: '80',
        height: '35',
      }),
    ),

    Link(
      { to: 'https://magic.github.io' },
      Img({
        title: 'made with a few bits of magic',
        src: '/social/magic.png',
        width: '40',
        height: '35',
      }),
    ),

    children,
  ])

export const style = vars => ({
  padding: 0,
  position: 'relative',
  margin: '4em 0 0 2vw',
  width: 'auto',

  a: {
    display: 'inline-block',
  },

  img: {
    margin: '0 2em 0 0',
  },

  '.koer': {
    display: 'block',
    margin: '0 0 1em',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    '.koer': {
      display: 'inherit',
    },
  },
})

export const View = (state, children) =>
  footer({ class: 'Footer' }, [
    h3('Commissioned by:'),

    Link(
      { title: 'financial support provided by kör', to: 'https://koer.or.at' },
      [
        Img({ src: '/social/koer.jpg' }),
        Img({ src: '/social/wien-kultur.jpg' }),
      ],
    ),

    h3('Support:'),

    // Link({ to: 'https://koer.or.at' }, Img({ title: 'funded by kör <3', src: '/social/koer.png' })),

    Link(
      { to: 'https://usus.wien' },
      Img({ title: 'yppshop provided by usus.wien', src: '/social/usus.png' }),
    ),

    Link(
      { to: 'https://magic.github.io' },
      Img({ title: 'made with a few bits of magic', src: '/social/magic.png' }),
    ),

    children,
  ])

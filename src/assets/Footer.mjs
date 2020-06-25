export const View = () =>
  footer({ class: 'Footer' }, [
    Link({ to: 'https://magic.github.io' }, Img({ title: 'made with a few bits of magic', src: '/social/magic.png' })),
    Link({ to: 'https://amwasser.wien' }, Img({ title: 'yppshop provided by usus.wien', src: '/social/usus.png' })),
  ])

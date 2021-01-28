export const View = () => [
  h1('Projects'),

  h2('Artificial Museum'),

  p([
    'The Artificial Museum is our main project.',
    Link({
      to: 'https://artificialmuseum.com',
      text: 'Click here to learn more about the Artificial Museum',
    }),
  ]),

  h2('Exhibitions'),

  h3('2020'),

  h4(Link({ to: '/2020/yppenplatz/', text: 'TheSystem Phase.1' })),
]

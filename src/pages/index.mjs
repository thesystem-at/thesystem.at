export const View = state => [
  VideoContainer({
    ...state,
    message: [
      'On 31.07.2020, 21:30 hours Viennese time (GMT + 1),',
      br(),
      ' this image will turn into a video.',
      br(),
      'The livestream will start at 22:00',
    ],
  }),

  Slogan(state),

  ExhibitionWrapper({
    title: 'The human body…',
    previewImage: '/thesystem-thebody.jpg',
    presents: {
      pre: {
        text: 'Ms. Litto',
        to: 'https://litto.work',
      },
      middle: 'presents',
      post: {
        text: 'Hr. Litto',
        to: 'https://www.instagram.com/hr.litto/',
      },
    },
    date: '11.08. 21:00',
    description: [
      'An AI, sourced from a drawing, tells us what it learned',
      ' about material properties of the human body.',
    ],
  }),

  ExhibitionWrapper({
    title: 'The System: garden',
    previewImage: '/thesystem-garden.png',
    presents: {
      pre: {
        text: 'ibisum',
        to: 'https://primitur.at',
      },
      middle: 'presents',
      post: 'the.system:garden',
    },
    date: '11.08. – 12.08.',
    description: 'cultivating heritage computing for the kids of the future.',
  }),

  div({ class: 'manifest' }, [
    h2('Manifest'),
    p([
      'We are independent artists collectively using technology to transform our world.',
      ' Our system is transformation between universes, physical and virtual.',
      " We don't need space, time is irrelevant, objects stay as useful as the user.",
    ]),
  ]),
]

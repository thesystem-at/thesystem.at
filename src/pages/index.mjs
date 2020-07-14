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
    title: 'The System: garden',
    previewImage: '/preview.jpg',
    presents: {
      pre: {
        text: 'ibisum',
        to: 'https://litto.work',
      },
      post: 'the garden',
      middle: 'presents',
    },
    date: '07.08.',
    description: ['Jay gonna add text here, please'],
  }),

  ExhibitionWrapper({
    title: 'INTRO',
    previewImage: '/preview.jpg',
    presents: {
      pre: {
        text: 'Ms. Litto',
        to: 'https://litto.work',
      },
      post: {
        text: 'Hr. Litto',
        to: 'https://www.instagram.com/hr.litto/',
      },
      middle: 'presents',
    },
    date: '31.07.',
    description: [
      'mutations happen: ',
      "we marry our body's natural resources to technology, ",
      'we merge AI with the human mind. ',
      'Are they distinguishable? ',
      'Are we humans an equal match? ',
      'What kind of reality arises when we look at the moment of intersection?',
    ],
  }),
]

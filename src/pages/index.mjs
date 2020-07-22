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
    date: '31.07.',
    description: [
      `…independent of its size, 
      gender or color is a complex entity in the physical field.`,
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
    date: '29.07 – 04.07 (hours tbd.)',
    description: ['the.system:garden / cultivating heritage computing for the kids of the future.'],
  }),
]

export const View = state => [
  VideoContainer({
    ...state,
    message: [
      'Am 11.07.2020, 22:00 Uhr Wiener Zeit (GMT + 1),',
      br(),
      ' wird dieses Bild sich in ein Video verwandeln.',
      br(),
      'Um 22:00 Uhr wird der Livestream starten.',
    ],
  }),

  Slogan(),

  ExhibitionWrapper({
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
      middle: 'präsentiert',
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

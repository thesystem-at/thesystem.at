export const View = state => [
  VideoContainer({
    ...state,
    message: [
      'On 11.07.2020, 21:30 hours Viennese time (GMT + 1),',
      br(),
      ' this image will turn into a video.',
      br(),
      'The livestream will start at 22:00',
    ],
  }),

  Slogan(state),

  div({ class: 'hr litto' }, [
    Polkadot(),

    PreviewImage(),

    div({ class: 'sections' }, [
      Presents('presents'),
      Location(),
      section({ class: 'description' }, [
        'mutations happen: ',
        "we marry our body's natural resources to technology, ",
        'we merge AI with the human mind. ',
        'Are they distinguishable? ',
        'Are we humans an equal match? ',
        'What kind of reality arises when we look at the moment of intersection?',
      ]),
    ]),
  ]),
]

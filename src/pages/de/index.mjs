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

  div({ class: 'hr litto' }, [
    Polkadot(),

    PreviewImage(),

    div({ class: 'sections' }, [Presents('präsentiert'), Location()]),
  ]),
]

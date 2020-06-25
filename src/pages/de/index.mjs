export const View = () => [
  VideoContainer(),

  h1([p('THE'), p('SYSTEM'), p('INTRO')]),

  div({ class: 'hr litto' }, [
    Polkadot(),

    PreviewImage(),

    div({ class: 'location' }, [
      p({ class: 'date' }, '04.07.2020'),
      p({ class: 'time' }, '22:00'),
      p({ class: 'street' }, 'Yppenplatz 5'),
      p({ class: 'district' }, '1160 Wien'),
    ]),

    div({ class: 'presents' }, [p('Ms. Litto'), p('präsentiert'), p('Hr. Litto')]),
  ]),
]

export const View = state => [
  div({ class: 'PageHeader' }, Slogan({ subTitle: 'Collective' })),

  Phase1(),

  h3('Phase.1 - Manifestation in physical space'),

  p([
    'In August and September of 2020,',
    ' Phase.1 of "TheSystem" manifested itself on the Yppenplatz in Vienna, Austria.',
  ]),
  p([
    '20 artists, representing 6 collectives',
    ' (Sandkasten Syndikat, Villa Schapira, Zirkus Mops, Setzkasten, Dachsbau, Metalab)',
    ' performed and/or exhibited in those two months.',
  ]),
  p([
    'The artists showed paintings,',
    ' multimedia installations, sculptures,',
    ' and audio-visual concepts.',
  ]),

  h5([
    p([
      'Concept and Organisation: ',
      Link({ text: 'Litto / Daniela Weiss', to: 'https://litto.work' }),
    ]),
    p(['Development: ', Link({ text: 'Jascha Ehrenreich', to: 'https://jaeh.at' })]),
  ]),

  TheGarden(),
  HrLitto(),
  HeartbreakHotel(),
  TheWound(),
  SandkastenSyndikat(),
  SystemeUndMenschen(),
  Work(),
  MaxMustermann(),
  Fluesterkonus(),
  Setzkasten(),
  MetzgereiMops(),
]

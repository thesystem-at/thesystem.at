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

  Slogan({ subTitle: 'Yppenplatz 5' }),

  div({ class: 'manifest' }, [p('August 2020')]),

  ExhibitionWrapper({
    title: 'The human body…',
    img: {
      src: '/thesystem-thebody.jpg',
      height: 900,
      width: 1200,
    },
    presents: {
      pre: {
        text: 'Ms. Litto',
        to: 'https://litto.work',
      },
      middle: 'presents Hr. Litto',
      post: '11.08. 21:00 – 22:00',
    },
    description: [
      'An AI, sourced from a drawing, tells us what it learned',
      ' about material properties of the human body.',
    ],
  }),

  ExhibitionWrapper({
    title: 'The System: garden',
    img: {
      src: '/thesystem-garden.png',
      height: 453,
      width: 606,
    },
    presents: {
      pre: {
        text: 'WARBLAYDR',
        to: 'https://soundcloud.com/ibisum/tracks',
      },
      middle: 'performs',
      post: '11.08. 18:00 - 20:30',
    },
    description: 'cultivating heritage computing for the kids of the future.',
  }),

  ExhibitionWrapper({
    title: 'HeartBreakHotel',
    img: {
      src: '/dagmar.jpg',
      height: 1024,
      width: 1017,
    },
    presents: {
      pre: {
        text: 'Dagmar Rohm',
        to: 'http://www.dagmarrohm.at/',
      },
      middle: '',
      post: 'Opening 18:00 / 14.08 – 17.08.',
    },
    description: [
      'Series framing my work for de-colonialism. ',
      'Colour is no available fund for distinguishing anything. ',
      'What is prefered tells a story about the individual person and nothing else. ',
      'Looking after historical perspectives is looking for unfairness. ',
      'This work examines the beginning of Rock‘n Roll, which came out of the rhythm of Black music. ',
      'It‘s Elvis, who won a „game“, because he had the right colour of skin. ',
      'The hidden winner could have been the black people, who still are persecuted by lot‘s of whites, thinking, they‘ve got to fight a war, full of hostility. ',
    ],
  }),

  ExhibitionWrapper({
    title: 'The Wound',
    img: {
      src: '/selina.jpg',
      height: 1200,
      width: 1600,
    },
    presents: {
      pre: {
        text: 'Selina Nowak',
        to: 'http://www.mysoundofmusic.at/',
      },
      middle: 'Installation',
      post: 'Opening 19:00 / 19.08 – 23.08',
    },
    description: [
      p('A wormhole into the future'),
      p('An echo in the empty space'),
      p("A shrine to meditate over what's left"),
      p('After the anthropocene'),
    ],
  }),

  ExhibitionWrapper({
    title: 'System, Struktur & DeFragmentierung',
    img: {
      src: '/sandkasten.jpg',
      height: 1380,
      width: 1080,
    },
    presents: {
      pre: [
        p('System // Markus Liszt'),
        p([
          'Struktur // ',
          Link({
            text: 'Miss Bubblebliss aka Stephanie Krawinkler',
            to: 'http://missbubblebliss.at',
          }),
        ]),
        p(['DeFragmentierung // ', Link({ text: 'elet aka. Je.Jesch', to: 'https://elet.cc/' })]),
      ],
      middle: {
        text: 'Sandkasten Syndikat',
        to: 'https://www.facebook.com/sandkastensyndikat/',
      },

      post: {
        text: 'Opening 20:15 – 22:00 / 26.08 – 30.08 / Closing 20:15',
      },
    },
    description: [
      p([
        'Konstruktion, Scan, Reflektion, Verortung und Zerlegung',
        ' von Körpern und Objekten',
        ' im Raum an analogen und digitalen Schnittstellen.'
      ]),
      p('Zahlenrhythmik mit Seife gespiegelt und in Licht zerlegt. '),
    ],
  }),

  div({ class: 'manifest' }, [p('September 2020'), p('tba')]),

  // manifestoooooo

  div({ class: 'manifest' }, [
    h2('Manifest'),

    h3([
      'We are independent artists collectively using technology to transform our world. ',
      'Our system is transformation between universes, physical and virtual. ',
      "We don't need space, time is irrelevant, objects stay as useful as the user. ",
    ]),

    h5(
      'Involved collectives: Dachsbau, Sandkasten Syndikat, Setzkasten Wien, Zirkus Mops, Villa Schapira ',
    ),
    h5('Concept: Litto / Daniela Weiss, Development: Jascha Ehrenreich, Text: WARBLAYDR'),
  ]),
]

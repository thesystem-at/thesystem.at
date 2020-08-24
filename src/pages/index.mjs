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
    title: 'The Wound',
    img: {
      src: '/selina.jpg',
      height: 1200,
      width: 1600,
    },
    presents: {
      artists: 'Selina Nowak',
      collective: {
        text: 'Zirkus Mops',
        to: 'http://www.mysoundofmusic.at/',
      },
      type: 'Installation',
      date: ['Exhibition', '19.08. - 23.08.', 'Opening', '19.08. 19:00'],
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
      artists: [
        p('System // '),
        p('Markus Liszt'),

        p('Struktur // '),
        p(
          Link({
            text: 'Miss Bubblebliss aka Stephanie Krawinkler',
            to: 'http://missbubblebliss.at',
          }),
        ),

        p('DeFragmentierung // '),
        p(Link({ text: 'elet aka. Je.Jesch', to: 'https://elet.cc/' })),
      ],
      collective: {
        text: 'Sandkasten Syndikat',
        to: 'https://www.facebook.com/sandkastensyndikat/',
      },
      date: [
        'Exhibition',
        '26.08. – 30.08.',
        'Performances',
        'Opening',
        '26.08. 20:15 – 22:00',
        'Closing',
        '30.08. 20:15 – 22:00',
      ],
    },
    description: [
      p([
        'Konstruktion, Scan, Reflektion, Verortung und Zerlegung',
        ' von Körpern und Objekten',
        ' im Raum an analogen und digitalen Schnittstellen.',
      ]),
      p('Zahlenrhythmik mit Seife gespiegelt und in Licht zerlegt. '),
    ],
  }),

  div({ class: 'manifest' }, [p('Week one, September 2020')]),

  ExhibitionWrapper({
      title: 'Systeme & Menschen',
      img: {
        src: '/stizz.jpg',
        height: 1280,
        width: 960,
      },
      presents: {
        artists: {
          text: 'Stefan Stürzer',
          to: 'https://absturz.info',
        },
        collective: 'Villa Schapira',
        date: ['Exhibition', '1.09. - 7.09.', 'Opening', '1.09. 19:30'],
      },
      description: [
        'Wir leben in einer Zeit in der Menschen ', 
        'viel zu oft für die Erhaltung von Systemen arbeitet. ',
        'Systeme die von Menschen erfunden wurden!',
        'Systeme sollten eigentiich für die Menschen existieren und nicht umgekehrt. ',
        'Eine philosophische Auseinandersetzung.',
      ],
    }),


  ExhibitionWrapper({
    title: 'Work',
    img: {
      src: '/work_zirkusMops.jpg',
      height: 1200,
      width: 1028,
    },
    presents: {
      artists: [
        [p(Link({ text: 'Adam Lebesmühlbacher', to: 'http://www.mysoundofmusic.at/' }))],
        [p(Link({ text: 'Marco Otoya', to: 'http://www.mysoundofmusic.at/' }))],
        [p(Link({ text: 'Sebastian Schmid', to: '' }))],
      ],

      collective: 'Zirkus Mops',
      date: ['Exhibition', '3.09', 'Rauminstallation', '3.09 – 7.09'],
    },
    description: [
      'Die Routine, die sich wiederholt, die Monotonie, die im Leben und in der Arbeit ',
      'Automatismus generiert, die aber notwendig in unserem Leben ist. Wie kann uns die ',
      'Angst vor einem Risiko und vor einer Änderung paralysieren? Kann die Routine uns in ',
      'ein Möbelstück verwandeln? Ist die Routine etwas positives oder nicht, oder aber ',
      'könnten wir die Routine ändern oder transformieren? Oder besser nicht?',br(),br(),
    
      'Musik: Nyman: Double Concerto For Saxophone & Cello - Mvt.5',
      'John Harle, Julian Lloyd Webber, Michael Nyman: Philharmonia Orchestra',
    ],
  }),

  div({ class: 'manifest' }, [p('Past Events'), p('')]),

  ExhibitionWrapper({
    title: 'No hair…',
    img: {
      src: '/thesystem-thebody.jpg',
      height: 900,
      width: 1200,
    },
    presents: {
      artists: [
        {
          text: 'Ms. Litto',
          to: 'https://litto.work',
        },
        'presents',
        { to: 'https://www.instagram.com/hr.litto/', text: 'Hr. Litto' },
      ],
      collective: 
        'Villa Schapira',

      date: '11.08. 21:00 – 22:00',
    },
    description: [
      'An AI, sourced from a drawing, tells us what it learned',
      ' about material properties of the human body.',
    ],
  }),

  ExhibitionWrapper({
    title: 'The. System: garden',
    img: {
      src: '/thesystem-garden.png',
      height: 453,
      width: 606,
    },
    presents: {
      artists: {
        text: 'WARBLAYDR',
        to: 'https://soundcloud.com/ibisum/tracks',
      },
      collective: 'Villa Schapira',
      type: 'Live performance',
      date: '11.08. 18:00 - 20:30',
    },
    description: [
      'cultivating heritage computing for the kids of the future.',
      Link({
        text: 'live recordings on soundcloud',
        to: 'https://soundcloud.com/ibisum/tracks',
      }),
    ],
  }),

  ExhibitionWrapper({
    title: 'HeartBreakHotel',
    img: {
      src: '/dagmar.jpg',
      height: 1024,
      width: 1017,
    },
    presents: {
      artists: {
        text: 'Dagmar Rohm',
        to: 'http://www.dagmarrohm.at/',
      },

      collective: 'Dachsbau',
      date: ['Exhibition', '14.08. - 17.08.', 'Opening', '14.08. 18:00'],
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

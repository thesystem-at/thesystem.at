export const View = state => [
  div({ class: 'PageHeader' }, [VideoContainer(state), Slogan({ subTitle: 'Yppenplatz 5' })]),

  div({ class: 'month-title' }, 'September 2020'),

  ExhibitionWrapper({
    title: 'SETZKASTEN X THE SYSTEM',
    img: {
      src: '/thesystem_setzkastenwien.jpg',
      height: 1000,
      width: 667,
    },
    presents: {
      artists: [
        p('Stefan Voglsinger'),
        p('TURBO SUPER, 2061 / Installation'),
        br(),
        p('Patrick K.-H. & bestbefore/Andreas Karaoulanis'),
        p('EuLowGui, 2020 |  Video Screening'),
        br(),
        p('Guillermo Tellechea | Projektion'),
        br(),
        p('chora malik | Performance'),
      ],

      collective: {
        text: 'Setzkasten Wien',
        to: 'https://setzkastenwien.at/',
      },

      date: ['Exhibition', '14.09. – 19.9.'],
    },
    description: [
      'Über die Woche verteilt bespielen KünstlerInnen aus dem Umfeld des Setzkasten',
      ' Wien die Auslage am Yppenplatz 5 mit immersiven Performances, Videoarbeiten',
      ' und Skulpturen. The System wird zum wachsenden Labor und ist transformierende',
      ' Installation und performativer Arbeitsraum zugleich.',
      br(),

      'das Programm wird laufend aktualisiert:',
      p(
        Link({
          text: 'auf Setzkasten Wien',
          to: 'https://setzkastenwien.at/2020/09/01/setzkasten-the-system/',
        }),
      ),
    ],
  }),

  ExhibitionWrapper({
    title: ['fluesterkonus', br(), 'inter.aktion'],
    img: {
      src: '/thesystem-mariakoller-fluesterkonus.jpg',
      height: 1200,
      width: 800,
    },
    presents: {
      artists: 'chora malik',
      collective: {
        text: 'Setzkasten Wien',
        to: 'https://setzkastenwien.at/',
      },
      date: ['Performance', '19.09. 19:00'],
    },
    description: ['reflexionen isolierter stimmen einer schoenen neuen welt', br(), ' ganz nah'],
  }),

  ExhibitionWrapper({
    title: ['WILLKOMMEN IN DER', br(), 'METZGEREI MOPS!'],
    img: {
      src: '/thesystem-zirkusmops-familiemops.jpg',
      height: 640,
      width: 718,
    },
    presents: {
      artists: 'Familie Mops',
      collective: {
        text: 'Zirkus Mops',
        to: 'http://www.mysoundofmusic.at/',
      },
      date: ['Exhibition', '22.09. – 26.09.', 'Opening', '22.09. 19:00'],
    },
    description: [
      'Unser Traditionshaus produziert feinste Fleisch und Wurstwaren nach eigenen Familienrezepten.',
      ' Wir verarbeiten ausschließlich Fleisch von seltenen Wildtierarten.',
      ' Ob saftiger Beinschinken, gut durchzogenes T-Bone Steak oder feinsten Filetspitz –',
      ' genießen Sie exklusive Gaumenfreuden bis zum letzten Bissen.',
      ' Eine besondere Spezialität des Hauses ist unsere berühmte Lemurenwurst,',
      ' die schon Erzherzog Franz Joseph Karl I. Kaiser von Österreich zu schätzen wusste.',
      ' Nur für kurze Zeit am Yppenplatz 5.',
    ],
  }),

  div({ class: 'month-title' }, 'Past Events'),
  //div({ class: 'month-title' }, 'August 2020'),

  ExhibitionWrapper({
    title: 'Max Mustermann',
    img: {
      src: '/thesystem-noemikiss-maxmustermann.jpg',
      height: 1200,
      width: 842,
    },
    presents: {
      artists: {
        text: 'Noémi Kiss',
        to: 'http://www.noemikiss.at/',
      },

      collective: 'Villa Schapira',
      date: ['Exhibition', '09.09. – 13.09.', 'Opening', '09.09. 19:30'],
    },
    description: [
      '"Ez a világ olyan világ, sokat igér, keveset ád…“',
      ' ("Was für eine Welt ist diese Welt, die viel verspricht und wenig hält…“)',
      br(),
      br(),
      ' Erfüllen, sich bewähren, durchhalten aber auch sich durchsetzen, nützlich, tüchtig, brauchbar, fähig und befähigt sein:',
      ' Das ist unsere tägliche Beschäftigung. Immer bestehen und nicht versagen zu dürfen macht müde.',
      ' Im Zwang uns den äußeren Erwartungen anzupassen hoffen wir darauf, dass es uns besser geht. Wir wollen uns  besser fühlen.',
      ' Die Vielfalt um uns herum ist vielversprechend und suggeriert die Möglichkeit der freien Wahl. Doch gibt es überhaupt diese freie Wahl?',
      ' Die Spezialisten der Macht weisen uns mit ihren Empfehlungen im Labyrinth der "freien Wahl" eine einzige Variante als Richtung vor.',
      ' Aus deren Angaben und Anleitungen entstehen dann die Richtlinien, Vorschriften, Instruktionen und Verordnungen.',
    ],
  }),

  ExhibitionWrapper({
    title: '"Work"',
    img: {
      src: '/thesystem-zirkusmops-work.jpg',
      height: 1200,
      width: 1028,
    },
    presents: {
      artists: [
        [p(Link({ text: 'Marco Otoya', to: 'https://culturaespiral.com/marco-otoya/' }))],
        [p(Link({ text: 'Adam Lebesmühlbacher', to: 'http://www.mysoundofmusic.at/' }))],
        [p(Link({ text: 'Sebastian Schmid', to: 'https://zirkusabnormal.at/' }))],
      ],

      collective: 'Villa Schapira',
      date: ['Opening Performance', '3.09 19:00', 'Rauminstallation', '3.09 – 7.09'],
    },
    description: [
      'Die Routine, die sich wiederholt, die Monotonie, die im Leben und in der Arbeit ',
      'Automatismus generiert, die aber notwendig in unserem Leben ist. Wie kann uns die ',
      'Angst vor einem Risiko und vor einer Änderung paralysieren? Kann die Routine uns in ',
      'ein Möbelstück verwandeln? Ist die Routine etwas positives oder nicht, oder aber ',
      'könnten wir die Routine ändern oder transformieren? Oder besser nicht?',
      br(),
      br(),

      p('Musik: Nyman: Double Concerto For Saxophone & Cello - Mvt.5'),
      p('John Harle, Julian Lloyd Webber, Michael Nyman: Philharmonia Orchestra'),
    ],
  }),

  ExhibitionWrapper({
    title: 'Systeme & Menschen',
    img: {
      src: '/thesystem-stizz-systemeundmenschen.jpg',
      height: 1200,
      width: 900,
    },
    presents: {
      artists: {
        text: 'Stefan Stürzer',
        to: 'https://absturz.info',
      },
      collective: 'Villa Schapira',
      date: ['Exhibition', '1.09. – 7.09.', 'Opening', '1.09. 19:30'],
    },
    description: [
      'Wir leben in einer Zeit in der Menschen',
      ' viel zu oft für die Erhaltung von Systemen arbeiten.',
      ' Systeme die von Menschen erfunden wurden!',
      ' Systeme sollten eigentlich für die Menschen existieren und nicht umgekehrt.',
      ' Eine philosophische Auseinandersetzung.',
    ],
  }),

  ExhibitionWrapper({
    title: 'System, Struktur & DeFragmentierung',
    img: {
      src: '/thesystem-sandkasten-syndikat.jpg',
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
        ' von Körpern und Objekten im Raum',
        ' an analogen und digitalen Schnittstellen.',
      ]),
      p('Zahlenrhythmik mit Seife gespiegelt und in Licht zerlegt. '),
    ],
  }),

  ExhibitionWrapper({
    title: 'The Wound',
    img: {
      src: '/thesystem-selinanowak-thewound.jpg',
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
      date: ['Exhibition', '19.08. – 23.08.', 'Opening', '19.08. 19:00'],
    },
    description: [
      p('A wormhole into the future'),
      p('An echo in the empty space'),
      p("A shrine to meditate over what's left"),
      p('After the anthropocene'),
    ],
  }),

  ExhibitionWrapper({
    title: 'HeartBreakHotel',
    img: {
      src: '/thesystem-dagmarrohm-heartbreakhotel.jpg',
      height: 1020,
      width: 1013,
    },
    presents: {
      artists: {
        text: 'Dagmar Rohm',
        to: 'http://www.dagmarrohm.at/',
      },

      collective: 'Dachsbau',
      date: ['Exhibition', '14.08. – 17.08.', 'Opening', '14.08. 18:00'],
    },
    description: [
      'Series framing my work for de-colonialism. ',
      'Colour is no available fund for distinguishing anything. ',
      'What is prefered tells a story about the individual person and nothing else. ',
      'Looking after historical perspectives is looking for unfairness. ',
      'This work examines the beginning of Rock‘n Roll, which came out of the rhythm of Black music. ',
      'It‘s Elvis, who won a „game“, because he had the right colour of skin. ',
      'The hidden winner could have been the black people, who still are persecuted by lot‘s of whites',
      ' thinking, they‘ve got to fight a war, full of hostility.',
    ],
  }),

  ExhibitionWrapper({
    title: 'The. System: garden',
    img: {
      src: '/thesystem-warblaydr-garden.png',
      height: 1362,
      width: 1200,
    },
    presents: {
      artists: [
        p(
          Link({
            text: 'WARBLAYDR',
            to: 'https://soundcloud.com/ibisum/tracks',
          }),
        ),
        p(span(' & ')),
        p(
          Link({
            text: 'meks',
            to: 'https://soundcloud.com/user-945933947',
          }),
        ),
      ],
      collective: 'Villa Schapira',
      type: 'Live performance',
      date: '11.08. 18:00 – 20:30',
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
    title: 'No hair…',
    img: {
      src: '/thesystem-litto-thebody.jpg',
      height: 900,
      width: 1200,
    },
    presents: {
      artists: [
        p(
          Link({
            text: 'Ms. Litto',
            to: 'https://litto.work',
          }),
        ),
        p('presents'),
        p(Link({ to: 'https://www.instagram.com/hr.litto/', text: 'Hr. Litto' })),
      ],
      collective: 'Villa Schapira',

      date: '11.08. 21:00 – 22:00',
    },
    description: [
      'An AI, sourced from a drawing, tells us what it learned',
      ' about material properties of the human body.',
    ],
  }),

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

    h5([
      p(['Concept: ', Link({ text: 'Litto / Daniela Weiss', to: 'https://litto.work' })]),
      p(['Development: ', Link({ text: 'Jascha Ehrenreich', to: 'https://jaeh.at' })]),
      p(['Text: ', Link({ text: 'WARBLAYDR', to: 'https://soundcloud.com/ibisum' })]),
    ]),
  ]),
]

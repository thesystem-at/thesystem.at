export const View = () =>
  ExhibitionWrapper({
    title: 'The Wound',
    img: {
      src: '/thesystem-selinanowak-thewound.jpg',
      height: 1200,
      width: 1600,
    },

    exhibitionImages: [
      {
        src: '/exhibitions/thewound/thesystem-selinanowak-thewound-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/thewound/thesystem-selinanowak-thewound-02.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/thewound/thesystem-selinanowak-thewound-03.jpg',
        height: 800,
        width: 1200,
      },
      {
        src: '/exhibitions/thewound/thesystem-selinanowak-thewound-04.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/thewound/thesystem-selinanowak-thewound-05.jpg',
        height: 800,
        width: 1200,
      },
      {
        src: '/exhibitions/thewound/thesystem-selinanowak-thewound-06.jpg',
        height: 800,
        width: 1200,
      },
    ],

    presents: {
      artists: 'Selina Nowak',
      collective: {
        text: 'Zirkus Mops',
        to: 'http://www.mysoundofmusic.at/',
      },
      type: 'Installation',
      date: '19.08. – 23.08.',
    },
    description: [
      p('A wormhole into the future'),
      p('An echo in the empty space'),
      p("A shrine to meditate over what's left"),
      p('After the anthropocene'),
    ],

    video: 'OviYhQ_Lo2Y',

    photographer: 'Nikolai Haller & TheSystemCollective',
  })
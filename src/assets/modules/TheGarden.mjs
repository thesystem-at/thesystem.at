export const View = () =>
  ExhibitionWrapper({
    title: 'TheSystem: garden',
    img: {
      src: '/thesystem-thegarden.jpg',
      height: 676,
      width: 1200,
    },

    exhibitionImages: [
      {
        src: '/exhibitions/thegarden/thesystem-thegarden-01.jpg',
        height: 900,
        width: 1200,
      },
      {
        src: '/exhibitions/thegarden/thesystem-thegarden-02.jpg',
        height: 676,
        width: 1200,
      },
    ],

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
      'cultivating heritage computing for the kids of the future. ',
      Link({
        text: 'live recordings on soundcloud',
        to: 'https://soundcloud.com/ibisum/tracks',
      }),
    ],

    photographer: 'Sebastian Kreuzer',
  })
export const View = state => [
  div({ class: 'PageHeader' }, [VideoContainer(state), Slogan({ subTitle: 'Collective' })]),

  div({ class: 'manifest' }, [
    p([
      i('TheSystemCollective'),
      ' is a syndicate of independent',
      ' artists, makers, programmers, engineers, philosophers, activists, and scientists,',
      ' collectively using art and technology to transform our world.',
      ' We believe in a literal definition of "open source",',
      ' and convert public spaces into a museum, ready for artists to freely position their art.',
    ]),

    p('Our method is an intermixture of universes, physical, virtual and imaginary.'),

    p(i("We don't need space, time is irrelevant, objects stay as useful as the user.")),

    p([
      'TheSystem is a time space continuum made ',
      b('manifest'),
      ', using technology to make gps-anchored art accessible to everyone, both at home and abroad.',
    ]),

    p([
      'Involved collectives:',
      ' Dachsbau, Sandkasten Syndikat, Setzkasten Wien, Zirkus Mops, Villa Schapira, Metalab.',
    ]),
  ]),
]

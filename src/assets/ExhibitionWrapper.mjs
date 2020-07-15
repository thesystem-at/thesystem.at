export const View = state =>
  div({ class: 'ExhibitionWrapper' }, [
    Polkadot(),

    PreviewImage(state.previewImage),

    div({ class: 'sections' }, [
      h2(state.title),
      Presents(state.presents),
      Location(state.date),
      section({ class: 'description' }, state.description),
    ]),
  ])

export const View = state =>
  section({ class: 'presents' }, [
    state.pre && p(state.pre.to ? Link(state.pre) : state.pre),
    state.middle && p(state.middle.to ? Link(state.middle) : state.middle),
    state.post && p(state.post.to ? Link(state.post) : state.post),
  ])

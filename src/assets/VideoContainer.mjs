export const View = ({ show = false, message }) =>
  div({ class: 'VideoContainer', onclick: actions.toggle }, [
    Img({ src: '/video-poster.jpg', height: 388, width: 621 }),
    show && div({ class: 'message' }, div([message, button('cool.')])),
  ])

export const state = {
  show: false,
}

export const actions = {
  toggle: state => ({
    ...state,
    show: !state.show,
  }),
}

export const global = {
  state: {
    show: true,
  },
  actions: {
    toggle: true,
  },
}

export const propTypes = {
  VideoContainer: [
    { key: 'show', type: 'boolean', required: true },
    { key: 'message', type: 'string', required: true },
  ],
}

export const style = vars => ({
  zIndex: 1,
  position: 'relative',

  img: {
    width: '100%',
    height: 'auto',
    display: 'inline-block',
  },

  '.message': {
    height: '100vh',
    width: '100vw',
    top: 0,
    left: 0,
    position: 'fixed',
    zIndex: 1,

    div: {
      height: 'auto',
      maxWidth: '80vw',
      padding: '2em 1em',
      left: '0',
      top: '5vh',
      position: 'relative',
      backgroundColor: vars.text.dark,
      color: vars.text.light,
      margin: '0 auto',
    },

    button: {
      display: 'block',
    },

    '.light &&': {
      backgroundColor: vars.text.light,
      color: vars.text.dark,
    },
  },
})

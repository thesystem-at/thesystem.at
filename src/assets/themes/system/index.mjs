export const vars = {
  text: {
    dark: '#212121',
    light: '#f0f0f0',
  },

  background: {
    dark: '#f0f0f0',
    light: '#212121',
  },

  neutral: '#212121',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '.Wrapper': {
      width: '100%',
    },

    '.hr.litto': {
      right: 0,
      position: 'relative',
    },

    '.location': {
      clear: 'both',
    },
  }
}

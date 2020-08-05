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

  widths: {
    tablet: '500px',
    laptop: '730px',
    desktop: '940px',
    agency: '1200px',
  },
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    body: {
      fontSize: '18px',
      fontFamily: 'sans-serif',
      overflowX: 'initial',
      lineHeight: 1.2,
    },

    '#Magic': {
      '.icon': {
        width: '1em',
      },
    },

    '.Wrapper': {
      width: '100%',
      maxWidth: 'inherit',
    },

    '.ExhibitionWrapper': {
      position: 'relative',
      width: '100%',
      display: 'inline-block',
    },

    '.sections': {
      display: 'inline-block',
      margin: '0 0 0 1em',

      section: {
        clear: 'both',
        margin: '0 3vw 3em 0',
        width: '33vw',
      },

      '.description, .location': {
        fontSize: '0.8em',
      },
    },

    '.PreviewImage': {
      zIndex: 1,
    },

    '.NoSpy': {
      left: 'auto',
      right: '0.5em',

      '.icon': {
        left: 'auto',
        right: 0,
        width: '1em',
      },

      '.ShowHide': {
        left: 'auto',
        right: 0,
        bottom: '0.5em',
        height: '0.8em',
      },

      '.Container': {
        right: 0,
        left: 'auto',
        fontSize: '0.7em',
      },
    },

    '.manifest': {
      margin: '5em 1em 0',
    },

    [`@media screen and (min-width: ${v.widths.tablet})`]: {
      body: {
        fontSize: '25px',
      },

      '.sections': {
        section: {
          margin: '0 4vw 0 0',
        },
        '.presents, .location': {
          marginBottom: '2em',
        },
        '.description': {
          width: '33vw',
          marginTop: 0,
        },
      },
    },

    [`@media screen and (min-width: ${vars.widths.laptop})`]: {
      '.VideoContainer': {
        width: '50vw',
        height: '28.125vw',
        float: 'right',
        margin: '2vw 2vw 0 0',
        top: 0,
        right: 0,

        img: {
          maxWidth: '100%',
          maxHeight: '100%',
        },
      },

      '.ExhibitionWrapper': {
        clear: 'none',
        margin: '5em 0 0',

        '&:first-child': {
          margin: '-3em 0 0',
        },

        '.Polkadot': {
          left: 0,
        },

        img: {
          margin: '1vw 0 0 2vw',
          float: 'left',
        },

        '.PreviewImage': {
          width: '35vw',
        },
      },

      '.sections': {
        float: 'right',
        width: '40vw',

        section: {
          float: 'left',
          width: '23vw',
          clear: 'none',
        },
      },
    },

    [`@media screen and (min-width: ${vars.widths.desktop})`]: {
      '.sections': {
        width: '40vw',

        section: {
          margin: '0 2em 0 0',
          width: 'auto',
        },
      },
    },
  }
}

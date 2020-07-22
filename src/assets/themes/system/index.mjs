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
        width: '1em'
      },
    },

    '.Page': {
      h1: {
        padding: '2em 0',
        fontWeight: 'bold',
        position: 'relative',
        width: '100%',

        p: {
          fontSize: '1em',
          lineHeight: 1,

          '&:last-child': {
            fontSize: '0.9em',
          },
        },
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
        margin: '0 3vw 3em',
        width: '33vw',
      },

      '.description, .location': {
        fontSize: '0.8em',
      },
    },

    '.Footer': {
      padding: 0,
      position: 'relative',
      margin: '4em 0 0 2vw',
      width: 'auto',

      a: {
        display: 'inline-block',
      },

      img: {
        margin: '0 2em 0 0',
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

      '.Container': {
        right: 0,
        left: 'auto',
        fontSize: '0.7em',
      },
    },

    [`@media screen and (min-width: ${v.widths.tablet})`]: {
      body: {
        fontSize: '25px',
      },

      '.sections': {
        section: {
          margin: '0 4vw 0 0',
          float: 'right',
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

      '.Page': {
        h1: {
          width: 'auto',

          p: {
            fontSize: '3vw',

            // '&:last-child': {
            //   fontSize: '5.5vw',
            // },
          },
        },
      },

      '.sections': {
        float: 'right',
        margin: '7em 0 0',
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
        margin: '7em 0 0',
        width: '40vw',

        section: {
          float: 'left',
          margin: '0 2em 0 0',
          width: 'auto',
        },
      },
    },
  }
}

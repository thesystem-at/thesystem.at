export const View = props =>
  div({ class: 'ExhibitionWrapper' }, [
    div({ class: 'Dots' }, [Polkadot(), PreviewImage(props.img)]),

    div({ class: 'sections' }, [
      h2(props.title),
      Presents(props.presents),
      // props.date && Location(props.date),
      section({ class: 'description' }, props.description),
    ]),
  ])

export const style = vars => ({
  position: 'relative',
  width: '100%',
  display: 'inline-block',
  margin: '0 0 5em',

  '.Dots': {
    position: 'relative',
    display: 'inline-block',
  },

  a: {
    whiteSpace: 'inherit',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    clear: 'none',

    '&:first-child': {
      margin: '-3em 0 0',
    },

    '.Polkadot': {
      left: 0,
    },

    img: {
      margin: '1vw 0 0',
      float: 'left',
    },
  },
})

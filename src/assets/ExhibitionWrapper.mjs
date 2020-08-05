export const View = props =>
  div({ class: 'ExhibitionWrapper' }, [
    Polkadot(),

    PreviewImage(props.img),

    div({ class: 'sections' }, [
      h2(props.title),
      Presents(props.presents),
      Location(props.date),
      section({ class: 'description' }, props.description),
    ]),
  ])

export const style = vars => ({
  position: 'relative',
  width: '100%',
  display: 'inline-block',
  margin: '0 0 5em',

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    clear: 'none',

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
  },
})

export const View = () =>
  div(
    { class: 'Phase1' },
    div([

      div({ class: 'address' }, [
        h2('Phase.1: Source'),
        p('Yppenplatz 5'),
        p('1160 Wien'),
        p('11.08. - 14.10.2020'),
      ]),

      Img({ src: '/auslage.jpg', height: '709', width: '1200' }),
    ])
  )

export const style = vars => ({
  width: '70vw',
  margin: '0 auto',

  '> div': {
    display: 'inline-block',
  },

  h2: {
    paddingTop: 0,
  },

  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    height: 'auto',
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {

    '.address': {
      float: 'left',
      width: '40%',
      minWidth: '300px',
    },
    img: {
      float: 'right',
      width: '60%',
    },
  }
})

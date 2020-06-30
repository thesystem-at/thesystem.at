export const View = (text = 'presents') =>
  section({ class: 'presents' }, [
    p(Link({ to: 'https://litto.work', text: 'Ms. Litto' })),
    p(text),
    p(Link({ to: 'https://www.instagram.com/hr.litto/', text: 'Hr. Litto' })),
  ])

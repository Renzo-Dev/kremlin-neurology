import {
  _ as c,
  c as a,
  a as o,
  F as i,
  g as l,
  r as p,
  o as t,
  h as _,
  w as m,
  b as d,
  t as u,
} from './index-CHZNEVA7.js'
const f = {
    name: 'YearsSection',
    components: {},
    data() {
      return { years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017] }
    },
  },
  x = { class: 'years-section mb-5' },
  b = { class: 'd-flex flex-wrap gap-2' }
function k(y, s, g, h, r, B) {
  const n = p('router-link')
  return (
    t(),
    a('section', x, [
      s[0] ||
        (s[0] = o(
          'h4',
          { class: 'mb-3 text-primary' },
          'Годы проведения:',
          -1
        )),
      o('div', b, [
        (t(!0),
        a(
          i,
          null,
          l(
            r.years,
            e => (
              t(),
              _(
                n,
                {
                  key: e,
                  to: `/scientific_practical/${e}`,
                  class: 'btn btn-outline-primary btn-sm',
                },
                { default: m(() => [d(u(e), 1)]), _: 2 },
                1032,
                ['to']
              )
            )
          ),
          128
        )),
      ]),
    ])
  )
}
const v = c(f, [
  ['render', k],
  ['__scopeId', 'data-v-9a31b4f3'],
])
export { v as Y }

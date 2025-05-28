import { L as n } from './LibraryAccordion-BUC6XRJt.js'
import { l as i, t as c } from './transformCatalogToItems-BSCP5gFr.js'
import {
  _ as d,
  f as l,
  c as s,
  a as e,
  i as _,
  d as m,
  r as p,
  k as b,
  l as y,
  o as a,
} from './index-CHZNEVA7.js'
import './generateFileLink-IFYtl07K.js'
const f = l({
    components: { LibraryAccordion: n },
    setup() {
      const t = b([])
      return (
        y(async () => {
          const o = await i()
          t.value = c(o)
        }),
        { items: t }
      )
    },
  }),
  u = { class: 'container' },
  v = { class: 'library mt-4' },
  h = { class: 'library__content' },
  L = { class: 'library__accordion mb-4 w-100' },
  k = { key: 0, class: 'text-muted text-center' }
function C(t, o, $, g, w, x) {
  const r = p('LibraryAccordion')
  return (
    a(),
    s('div', u, [
      e('div', v, [
        e('div', h, [
          o[0] ||
            (o[0] = e(
              'div',
              { class: 'library__header' },
              [
                e(
                  'h2',
                  { class: 'library__title' },
                  ' Приветная библиотека сайта "Кремлевская неврология" '
                ),
              ],
              -1
            )),
          e('div', L, [
            Object.keys(t.items).length === 0
              ? (a(), s('div', k, ' Каталог пуст. '))
              : _('', !0),
            m(r, { items: t.items }, null, 8, ['items']),
          ]),
        ]),
      ]),
    ])
  )
}
const I = d(f, [
  ['render', C],
  ['__scopeId', 'data-v-370b17a7'],
])
export { I as default }

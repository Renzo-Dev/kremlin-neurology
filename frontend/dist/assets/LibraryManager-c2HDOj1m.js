import {
  _ as U,
  f as j,
  c,
  a as n,
  i as E,
  n as M,
  j as v,
  v as w,
  F as y,
  g,
  k,
  l as q,
  m as x,
  o as u,
  t as m,
} from './index-CHZNEVA7.js'
import { g as F, h as C } from './generateFileLink-IFYtl07K.js'
import { l as $, t as L } from './transformCatalogToItems-BSCP5gFr.js'
const _ = `${window.location.origin}/api/catalog`,
  T = async (t, e = null, a = !1) => {
    try {
      const o = { method: t, credentials: 'include', headers: {} }
      e && (a ? (o.body = e) : (o.body = JSON.stringify(e)))
      const l = await fetch(_, o)
      if (!l.ok) {
        const d = await l.json().catch(() => ({}))
        throw new Error(
          (d == null ? void 0 : d.message) || `HTTP error ${l.status}`
        )
      }
      return await l.json()
    } catch (o) {
      return (
        console.error(`❌ ${t} ${_}`, o),
        alert(o.message || 'Ошибка при выполнении запроса'),
        null
      )
    }
  },
  h = async t => {
    const { title: e, authors: a, file: o } = t
    if (!e || !a || !o) {
      alert('Пожалуйста, заполните все поля')
      return
    }
    const l = new FormData()
    return (
      l.append('title', e),
      l.append('authors', a),
      l.append('file', o),
      (await T('POST', l, !0))
        ? (alert('Успешно добавлен'), !0)
        : (alert('Ошибка при добавлении файла'), !1)
    )
  },
  b = async t => {
    if (await T('DELETE', { fileName: t })) {
      const a = await $()
      return L(a), alert('Файл успешно удален'), !0
    } else return !1
  },
  I = j({
    name: 'LibraryManager',
    methods: {
      handleDownload: C,
      generateFileLink: F,
      uploadFile: h,
      deleteFile: b,
    },
    setup() {
      let t = k([])
      const e = x(),
        a = k({ title: '', authors: '', file: null }),
        o = s => {
          a.value.file = s.target.files[0]
        }
      q(async () => {
        try {
          const s = await $()
          t.value = L(s)
        } catch (s) {
          console.error('Ошибка при загрузке каталога:', s)
        }
      })
      function l(s) {
        if (!s.file) {
          console.error('Файл не выбран')
          return
        }
        if (h(s)) {
          const i = {
              title: s.title,
              authors: s.authors,
              link: s.file.name,
              img: { type: s.file.type, src: s.file.name },
            },
            r = i.title.charAt(0).toUpperCase(),
            p = t.value.findIndex(f => f.letter === r)
          p !== -1
            ? t.value[p].publications.push(i)
            : t.value.push({ letter: r, publications: [i] }),
            (a.value = { title: '', authors: '', file: null })
        } else console.error('Ошибка при загрузке файла:', s.file.name)
      }
      function d(s) {
        b(s)
          ? (t.value = t.value
              .map(i => ({
                ...i,
                publications: i.publications.filter(r => r.link !== s),
              }))
              .filter(i => i.publications.length > 0))
          : console.error('Ошибка при удалении файла:', s)
      }
      return {
        newFile: a,
        onFileChange: o,
        route: e,
        catalog: t,
        handleUpload: l,
        handleDelete: d,
        handleDownload: C,
        generateFileLink: F,
        uploadFile: h,
        deleteFile: b,
      }
    },
  }),
  P = { class: 'container my-5' },
  S = { class: 'card shadow-sm mb-5' },
  V = { class: 'card-body' },
  B = { class: 'mb-3' },
  O = { class: 'mb-3' },
  A = { class: 'mb-3' },
  D = { key: 0, class: 'text-muted text-center' },
  H = { class: 'row g-3' },
  J = { class: 'card h-100 shadow-sm border' },
  N = { class: 'card-body' },
  R = { class: 'card-title' },
  z = { class: 'card-text text-muted' },
  G = { class: 'card-text text-muted' },
  K = { class: 'text-end text-secondary small' },
  Q = { class: 'card-footer d-flex justify-content-between' },
  W = ['onClick'],
  X = ['onClick']
function Y(t, e, a, o, l, d) {
  return (
    u(),
    c('div', P, [
      e[9] ||
        (e[9] = n(
          'h1',
          { class: 'text-center mb-4 display-5' },
          '📚 Управление библиотекой',
          -1
        )),
      n('div', S, [
        e[8] ||
          (e[8] = n(
            'div',
            { class: 'card-header fw-semibold' },
            '➕ Добавить новый файл',
            -1
          )),
        n('div', V, [
          n(
            'form',
            {
              onSubmit:
                e[3] || (e[3] = M(s => t.handleUpload(t.newFile), ['prevent'])),
            },
            [
              n('div', B, [
                e[4] ||
                  (e[4] = n('label', { class: 'form-label' }, 'Название', -1)),
                v(
                  n(
                    'input',
                    {
                      'onUpdate:modelValue':
                        e[0] || (e[0] = s => (t.newFile.title = s)),
                      type: 'text',
                      class: 'form-control',
                      placeholder: 'Введите название',
                      required: '',
                    },
                    null,
                    512
                  ),
                  [[w, t.newFile.title]]
                ),
              ]),
              n('div', O, [
                e[5] ||
                  (e[5] = n('label', { class: 'form-label' }, 'Авторы', -1)),
                v(
                  n(
                    'input',
                    {
                      'onUpdate:modelValue':
                        e[1] || (e[1] = s => (t.newFile.authors = s)),
                      type: 'text',
                      class: 'form-control',
                      placeholder: 'Введите авторов',
                      required: '',
                    },
                    null,
                    512
                  ),
                  [[w, t.newFile.authors]]
                ),
              ]),
              n('div', A, [
                e[6] ||
                  (e[6] = n('label', { class: 'form-label' }, 'Файл', -1)),
                n(
                  'input',
                  {
                    type: 'file',
                    onChange:
                      e[2] ||
                      (e[2] = (...s) => t.onFileChange && t.onFileChange(...s)),
                    class: 'form-control',
                    required: '',
                  },
                  null,
                  32
                ),
              ]),
              e[7] ||
                (e[7] = n(
                  'button',
                  { type: 'submit', class: 'btn btn-primary' },
                  '📥 Загрузить',
                  -1
                )),
            ],
            32
          ),
        ]),
      ]),
      Object.keys(t.catalog).length === 0
        ? (u(), c('div', D, ' Каталог пуст. '))
        : E('', !0),
      (u(!0),
      c(
        y,
        null,
        g(
          t.catalog,
          (s, i) => (
            u(),
            c('div', { key: i }, [
              n('h3', null, m(s.letter), 1),
              n('div', H, [
                (u(!0),
                c(
                  y,
                  null,
                  g(
                    s.publications,
                    (r, p) => (
                      u(),
                      c('div', { key: p, class: 'col-md-6' }, [
                        n('div', J, [
                          n('div', N, [
                            n('h5', R, m(r.title), 1),
                            n('p', z, m(r.authors), 1),
                            n('p', G, m(r.link), 1),
                            n('p', K, ' Тип: ' + m(r.img.type), 1),
                          ]),
                          n('div', Q, [
                            n(
                              'button',
                              {
                                class: 'btn btn-sm btn-outline-primary',
                                onClick: f =>
                                  t.handleDownload(
                                    t.generateFileLink(t.route.path),
                                    r.link
                                  ),
                              },
                              ' 🔗 Скачать ',
                              8,
                              W
                            ),
                            n(
                              'button',
                              {
                                onClick: f => t.handleDelete(r.link),
                                class: 'btn btn-sm btn-outline-danger',
                              },
                              ' 🗑 Удалить ',
                              8,
                              X
                            ),
                          ]),
                        ]),
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ])
          )
        ),
        128
      )),
    ])
  )
}
const se = U(I, [
  ['render', Y],
  ['__scopeId', 'data-v-665d4431'],
])
export { se as default }

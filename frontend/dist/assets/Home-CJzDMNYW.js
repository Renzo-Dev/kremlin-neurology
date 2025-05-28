import {
  _ as i,
  c as e,
  a,
  b as s,
  d,
  w as n,
  r as c,
  e as _,
  o as v,
} from './index-CHZNEVA7.js'
const l = '/assets/fasad-B_IBfPMJ.jpg',
  r = {},
  f = { class: 'content-wrapper' },
  p = { class: 'content-wrapper__context' },
  m = { class: 'content-wrapper__text' },
  u = { class: 'content-wrapper__paragraph' },
  w = { class: 'contact-info' },
  x = { class: 'contact-info__title' }
function k(g, t) {
  const o = c('router-link')
  return (
    v(),
    e('div', f, [
      t[7] ||
        (t[7] = a(
          'h2',
          { class: 'content-wrapper__title' },
          ' Кафедра неврологии ФГБУ ДПО "Центральная государственная медицинская академия" УД Президента РФ ',
          -1
        )),
      a('div', p, [
        t[3] ||
          (t[3] = a(
            'img',
            {
              alt: 'Картинка фасада здания',
              class: 'content-wrapper__image',
              src: l,
              title: 'Фасад здания',
            },
            null,
            -1
          )),
        a('div', m, [
          a('p', u, [
            t[1] ||
              (t[1] = s(
                ' Кафедра неврологии (до 1990 года – клиника неврологии) основана в 1968 году с первого дня образования ЦНИЛ на базе Городской клинической больницы № 51 г. Москвы. Она осуществляет методическое руководство всей неврологической службой ГМУ. Ее первым заведующим (1968-1980г.г.) был профессор Вячеслав Яковлевич Неретин. В настоящее время кафедру возглавляет профессор '
              )),
            d(
              o,
              { to: { name: '' }, class: 'content-wrapper__link' },
              {
                default: n(
                  () => t[0] || (t[0] = [s('Владимир Иванович Шмырев ')])
                ),
                _: 1,
              }
            ),
          ]),
          t[2] ||
            (t[2] = a(
              'p',
              { class: 'content-wrapper__paragraph' },
              ' Сотрудниками кафедры постоянно ведется научная работа, организуются научные и учебные мероприятия. Они входят в состав редакционных коллегий ряда научных журналов, в организационные, научные и методические комитеты конференций, симпозиумов и других мероприятий различного, в том числе и международного уровня. На кафедре работают 13 сотрудников, в том числе 4 доктора и 6 кандидатов медицинских наук: ',
              -1
            )),
        ]),
      ]),
      a('div', w, [
        a('div', x, [
          t[5] || (t[5] = s(' Контактная информация / ')),
          d(
            o,
            { to: { name: 'ContactInfo' }, class: 'contact-info__link' },
            { default: n(() => t[4] || (t[4] = [s('Полная ')])), _: 1 }
          ),
        ]),
        t[6] ||
          (t[6] = _(
            '<div class="contact-container" data-v-d006986f><div class="contact-info__details" data-v-d006986f><div class="contact-info__section" data-v-d006986f><div class="contact-info__label" data-v-d006986f>Телефон</div><div class="contact-info__item" data-v-d006986f>+7 (499) 146-83-35 (ГКБ №51)</div><div class="contact-info__item" data-v-d006986f> +7 (495) 530-00-86 (ЦКБП, учебная комната №4-26) </div><div class="contact-info__item" data-v-d006986f> +7 (495) 530-06-73 (ЦКБП, заведующий кафедрой) </div></div><div class="contact-info__section" data-v-d006986f><div class="contact-info__label" data-v-d006986f>Fax</div><div class="contact-info__item" data-v-d006986f>+7 (499) 149-83-35 (ГКБ №51)</div><div class="contact-info__item" data-v-d006986f>+7 (495) 530-06-73 (ЦКБП)</div></div></div><div class="contact-info__address" data-v-d006986f><div class="contact-info__address-item" data-v-d006986f> Адресс: Москва, ул. Маршала Тимошенко, 19, стр 1а. ФГБУ ДПО &quot;Центральная государственная медицинская академия&quot; УД Президента РФ. Кафедра неврологии </div><div class="contact-info__address-item" data-v-d006986f> Почта: alexvasiliev@mail.ru </div></div></div>',
            1
          )),
      ]),
    ])
  )
}
const N = i(r, [
  ['render', k],
  ['__scopeId', 'data-v-d006986f'],
])
export { N as default }

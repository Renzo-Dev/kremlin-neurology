const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/Home-CJzDMNYW.js',
      'assets/Home-f6Zb_p17.css',
      'assets/ContactInfo-CY4SXVII.js',
      'assets/ContactInfo-BwQEvrET.css',
      'assets/Learning-C-qUiqsF.js',
      'assets/Learning-DyQY7D9p.css',
      'assets/Ordinatura-CsxXec5R.js',
      'assets/specialtyList-Lv6vKuJ6.js',
      'assets/specialtyList-AwYPgLlv.css',
      'assets/Ordinatura-WtHgDxLq.css',
      'assets/Aspirantura-gvKohyj1.js',
      'assets/Aspirantura-B6T559OH.css',
      'assets/Professional_retraining-C0TSxTxA.js',
      'assets/Professional_retraining-DGwychaG.css',
      'assets/Certification_cycles-DauOdQb7.js',
      'assets/Certification_cycles-DQ2Gt_3u.css',
      'assets/Scientific_practical-B1u3BXFb.js',
      'assets/years-section-ma8CUC3C.js',
      'assets/years-section-BWibHG8o.css',
      'assets/Scientific_practical-igYX8iKX.css',
      'assets/2010-DlqcgHEX.js',
      'assets/word-BERleIxC.js',
      'assets/2011-xv2CGIsn.js',
      'assets/2012-DHmJEU8b.js',
      'assets/2013-YhKrEhpI.js',
      'assets/2014-BZhlFYh9.js',
      'assets/2014-BMRGrY-5.css',
      'assets/2015-BFOhNLS7.js',
      'assets/2015-B2-cjaMK.css',
      'assets/2016-BqOVS72Y.js',
      'assets/2016-ClSiZgUV.css',
      'assets/2017-CrTt5H_f.js',
      'assets/2017-CjBoVTj6.css',
      'assets/History-BTqXsz-9.js',
      'assets/History-rhNFuGGo.css',
      'assets/Library-BTG-YU0o.js',
      'assets/LibraryAccordion-BUC6XRJt.js',
      'assets/generateFileLink-IFYtl07K.js',
      'assets/LibraryAccordion-CzWM_fmu.css',
      'assets/Library-DFz7-3KJ.css',
      'assets/PrivateLibrary-C6AICYl_.js',
      'assets/transformCatalogToItems-BSCP5gFr.js',
      'assets/PrivateLibrary-CFfE9eYX.css',
      'assets/LibraryManager-c2HDOj1m.js',
      'assets/LibraryManager-CLF1R9bF.css',
      'assets/YoungNeurologists-Bqb_aJ5C.js',
      'assets/YoungNeurologists-DRBgaEbO.css',
      'assets/Educational-CFQywNbD.js',
      'assets/Educational-D1XBV1m9.css',
      'assets/2017-5PhUNpOA.js',
      'assets/2017-BX5IxXV0.css',
      'assets/GKB51-Cdvg4rL1.js',
      'assets/GKB51-voBW_WSB.css',
    ])
) => i.map(i => d[i])
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s)
  new MutationObserver(s => {
    for (const l of s)
      if (l.type === 'childList')
        for (const a of l.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && i(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(s) {
    const l = {}
    return (
      s.integrity && (l.integrity = s.integrity),
      s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (l.credentials = 'omit')
          : (l.credentials = 'same-origin'),
      l
    )
  }
  function i(s) {
    if (s.ep) return
    s.ep = !0
    const l = n(s)
    fetch(s.href, l)
  }
})()
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function b2(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return n => n in t
}
const De = {},
  fn = [],
  Qt = () => {},
  l4 = () => !1,
  Vi = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  _2 = e => e.startsWith('onUpdate:'),
  st = Object.assign,
  w2 = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  a4 = Object.prototype.hasOwnProperty,
  xe = (e, t) => a4.call(e, t),
  de = Array.isArray,
  un = e => ji(e) === '[object Map]',
  Sa = e => ji(e) === '[object Set]',
  pe = e => typeof e == 'function',
  We = e => typeof e == 'string',
  _1 = e => typeof e == 'symbol',
  Ne = e => e !== null && typeof e == 'object',
  Ea = e => (Ne(e) || pe(e)) && pe(e.then) && pe(e.catch),
  xa = Object.prototype.toString,
  ji = e => xa.call(e),
  o4 = e => ji(e).slice(8, -1),
  Ta = e => ji(e) === '[object Object]',
  y2 = e => We(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Dn = b2(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Hi = e => {
    const t = Object.create(null)
    return n => t[n] || (t[n] = e(n))
  },
  c4 = /-(\w)/g,
  Rt = Hi(e => e.replace(c4, (t, n) => (n ? n.toUpperCase() : ''))),
  d4 = /\B([A-Z])/g,
  G1 = Hi(e => e.replace(d4, '-$1').toLowerCase()),
  Gi = Hi(e => e.charAt(0).toUpperCase() + e.slice(1)),
  Ls = Hi(e => (e ? `on${Gi(e)}` : '')),
  b1 = (e, t) => !Object.is(e, t),
  Si = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Ma = (e, t, n, i = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: i,
      value: n,
    })
  },
  e2 = e => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let zl
const Wi = () =>
  zl ||
  (zl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function S2(e) {
  if (de(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        s = We(i) ? p4(i) : S2(i)
      if (s) for (const l in s) t[l] = s[l]
    }
    return t
  } else if (We(e) || Ne(e)) return e
}
const f4 = /;(?![^(]*\))/g,
  u4 = /:([^]+)/,
  h4 = /\/\*[^]*?\*\//g
function p4(e) {
  const t = {}
  return (
    e
      .replace(h4, '')
      .split(f4)
      .forEach(n => {
        if (n) {
          const i = n.split(u4)
          i.length > 1 && (t[i[0].trim()] = i[1].trim())
        }
      }),
    t
  )
}
function E2(e) {
  let t = ''
  if (We(e)) t = e
  else if (de(e))
    for (let n = 0; n < e.length; n++) {
      const i = E2(e[n])
      i && (t += i + ' ')
    }
  else if (Ne(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const m4 =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  v4 = b2(m4)
function Ca(e) {
  return !!e || e === ''
}
const Pa = e => !!(e && e.__v_isRef === !0),
  Ai = e =>
    We(e)
      ? e
      : e == null
        ? ''
        : de(e) || (Ne(e) && (e.toString === xa || !pe(e.toString)))
          ? Pa(e)
            ? Ai(e.value)
            : JSON.stringify(e, Aa, 2)
          : String(e),
  Aa = (e, t) =>
    Pa(t)
      ? Aa(e, t.value)
      : un(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [i, s], l) => ((n[Ds(i, l) + ' =>'] = s), n),
              {}
            ),
          }
        : Sa(t)
          ? { [`Set(${t.size})`]: [...t.values()].map(n => Ds(n)) }
          : _1(t)
            ? Ds(t)
            : Ne(t) && !de(t) && !Ta(t)
              ? String(t)
              : t,
  Ds = (e, t = '') => {
    var n
    return _1(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let wt
class g4 {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = wt),
      !t && wt && (this.index = (wt.scopes || (wt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = wt
      try {
        return (wt = this), t()
      } finally {
        wt = n
      }
    }
  }
  on() {
    wt = this
  }
  off() {
    wt = this.parent
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, i
      for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop()
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function z4() {
  return wt
}
let $e
const Rs = new WeakSet()
class Oa {
  constructor(t) {
    ;(this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      wt && wt.active && wt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Rs.has(this) && (Rs.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || La(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), bl(this), Da(this)
    const t = $e,
      n = Nt
    ;($e = this), (Nt = !0)
    try {
      return this.fn()
    } finally {
      Ra(this), ($e = t), (Nt = n), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) M2(t)
      ;(this.deps = this.depsTail = void 0),
        bl(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64
      ? Rs.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty()
  }
  runIfDirty() {
    t2(this) && this.run()
  }
  get dirty() {
    return t2(this)
  }
}
let Ia = 0,
  Rn,
  $n
function La(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;(e.next = $n), ($n = e)
    return
  }
  ;(e.next = Rn), (Rn = e)
}
function x2() {
  Ia++
}
function T2() {
  if (--Ia > 0) return
  if ($n) {
    let t = $n
    for ($n = void 0; t; ) {
      const n = t.next
      ;(t.next = void 0), (t.flags &= -9), (t = n)
    }
  }
  let e
  for (; Rn; ) {
    let t = Rn
    for (Rn = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (i) {
          e || (e = i)
        }
      t = n
    }
  }
  if (e) throw e
}
function Da(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t)
}
function Ra(e) {
  let t,
    n = e.depsTail,
    i = n
  for (; i; ) {
    const s = i.prevDep
    i.version === -1 ? (i === n && (n = s), M2(i), b4(i)) : (t = i),
      (i.dep.activeLink = i.prevActiveLink),
      (i.prevActiveLink = void 0),
      (i = s)
  }
  ;(e.deps = t), (e.depsTail = n)
}
function t2(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && ($a(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function $a(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Hn)
  )
    return
  e.globalVersion = Hn
  const t = e.dep
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !t2(e))) {
    e.flags &= -3
    return
  }
  const n = $e,
    i = Nt
  ;($e = e), (Nt = !0)
  try {
    Da(e)
    const s = e.fn(e._value)
    ;(t.version === 0 || b1(s, e._value)) && ((e._value = s), t.version++)
  } catch (s) {
    throw (t.version++, s)
  } finally {
    ;($e = n), (Nt = i), Ra(e), (e.flags &= -3)
  }
}
function M2(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: s } = e
  if (
    (i && ((i.nextSub = s), (e.prevSub = void 0)),
    s && ((s.prevSub = i), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = i), !i && n.computed))
  ) {
    n.computed.flags &= -5
    for (let l = n.computed.deps; l; l = l.nextDep) M2(l, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function b4(e) {
  const { prevDep: t, nextDep: n } = e
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0))
}
let Nt = !0
const ka = []
function w1() {
  ka.push(Nt), (Nt = !1)
}
function y1() {
  const e = ka.pop()
  Nt = e === void 0 ? !0 : e
}
function bl(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = $e
    $e = void 0
    try {
      t()
    } finally {
      $e = n
    }
  }
}
let Hn = 0
class _4 {
  constructor(t, n) {
    ;(this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0)
  }
}
class C2 {
  constructor(t) {
    ;(this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(t) {
    if (!$e || !Nt || $e === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== $e)
      (n = this.activeLink = new _4($e, this)),
        $e.deps
          ? ((n.prevDep = $e.depsTail),
            ($e.depsTail.nextDep = n),
            ($e.depsTail = n))
          : ($e.deps = $e.depsTail = n),
        Ba(n)
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const i = n.nextDep
      ;(i.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = i),
        (n.prevDep = $e.depsTail),
        (n.nextDep = void 0),
        ($e.depsTail.nextDep = n),
        ($e.depsTail = n),
        $e.deps === n && ($e.deps = i)
    }
    return n
  }
  trigger(t) {
    this.version++, Hn++, this.notify(t)
  }
  notify(t) {
    x2()
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify()
    } finally {
      T2()
    }
  }
}
function Ba(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let i = t.deps; i; i = i.nextDep) Ba(i)
    }
    const n = e.dep.subs
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e)
  }
}
const n2 = new WeakMap(),
  F1 = Symbol(''),
  i2 = Symbol(''),
  Gn = Symbol('')
function et(e, t, n) {
  if (Nt && $e) {
    let i = n2.get(e)
    i || n2.set(e, (i = new Map()))
    let s = i.get(n)
    s || (i.set(n, (s = new C2())), (s.map = i), (s.key = n)), s.track()
  }
}
function a1(e, t, n, i, s, l) {
  const a = n2.get(e)
  if (!a) {
    Hn++
    return
  }
  const o = c => {
    c && c.trigger()
  }
  if ((x2(), t === 'clear')) a.forEach(o)
  else {
    const c = de(e),
      u = c && y2(n)
    if (c && n === 'length') {
      const f = Number(i)
      a.forEach((p, v) => {
        ;(v === 'length' || v === Gn || (!_1(v) && v >= f)) && o(p)
      })
    } else
      switch (
        ((n !== void 0 || a.has(void 0)) && o(a.get(n)), u && o(a.get(Gn)), t)
      ) {
        case 'add':
          c ? u && o(a.get('length')) : (o(a.get(F1)), un(e) && o(a.get(i2)))
          break
        case 'delete':
          c || (o(a.get(F1)), un(e) && o(a.get(i2)))
          break
        case 'set':
          un(e) && o(a.get(F1))
          break
      }
  }
  T2()
}
function an(e) {
  const t = Ee(e)
  return t === e ? t : (et(t, 'iterate', Gn), Dt(e) ? t : t.map(tt))
}
function qi(e) {
  return et((e = Ee(e)), 'iterate', Gn), e
}
const w4 = {
  __proto__: null,
  [Symbol.iterator]() {
    return $s(this, Symbol.iterator, tt)
  },
  concat(...e) {
    return an(this).concat(...e.map(t => (de(t) ? an(t) : t)))
  },
  entries() {
    return $s(this, 'entries', e => ((e[1] = tt(e[1])), e))
  },
  every(e, t) {
    return i1(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return i1(this, 'filter', e, t, n => n.map(tt), arguments)
  },
  find(e, t) {
    return i1(this, 'find', e, t, tt, arguments)
  },
  findIndex(e, t) {
    return i1(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return i1(this, 'findLast', e, t, tt, arguments)
  },
  findLastIndex(e, t) {
    return i1(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return i1(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return ks(this, 'includes', e)
  },
  indexOf(...e) {
    return ks(this, 'indexOf', e)
  },
  join(e) {
    return an(this).join(e)
  },
  lastIndexOf(...e) {
    return ks(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return i1(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return An(this, 'pop')
  },
  push(...e) {
    return An(this, 'push', e)
  },
  reduce(e, ...t) {
    return _l(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return _l(this, 'reduceRight', e, t)
  },
  shift() {
    return An(this, 'shift')
  },
  some(e, t) {
    return i1(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return An(this, 'splice', e)
  },
  toReversed() {
    return an(this).toReversed()
  },
  toSorted(e) {
    return an(this).toSorted(e)
  },
  toSpliced(...e) {
    return an(this).toSpliced(...e)
  },
  unshift(...e) {
    return An(this, 'unshift', e)
  },
  values() {
    return $s(this, 'values', tt)
  },
}
function $s(e, t, n) {
  const i = qi(e),
    s = i[t]()
  return (
    i !== e &&
      !Dt(e) &&
      ((s._next = s.next),
      (s.next = () => {
        const l = s._next()
        return l.value && (l.value = n(l.value)), l
      })),
    s
  )
}
const y4 = Array.prototype
function i1(e, t, n, i, s, l) {
  const a = qi(e),
    o = a !== e && !Dt(e),
    c = a[t]
  if (c !== y4[t]) {
    const p = c.apply(e, l)
    return o ? tt(p) : p
  }
  let u = n
  a !== e &&
    (o
      ? (u = function (p, v) {
          return n.call(this, tt(p), v, e)
        })
      : n.length > 2 &&
        (u = function (p, v) {
          return n.call(this, p, v, e)
        }))
  const f = c.call(a, u, i)
  return o && s ? s(f) : f
}
function _l(e, t, n, i) {
  const s = qi(e)
  let l = n
  return (
    s !== e &&
      (Dt(e)
        ? n.length > 3 &&
          (l = function (a, o, c) {
            return n.call(this, a, o, c, e)
          })
        : (l = function (a, o, c) {
            return n.call(this, a, tt(o), c, e)
          })),
    s[t](l, ...i)
  )
}
function ks(e, t, n) {
  const i = Ee(e)
  et(i, 'iterate', Gn)
  const s = i[t](...n)
  return (s === -1 || s === !1) && O2(n[0])
    ? ((n[0] = Ee(n[0])), i[t](...n))
    : s
}
function An(e, t, n = []) {
  w1(), x2()
  const i = Ee(e)[t].apply(e, n)
  return T2(), y1(), i
}
const S4 = b2('__proto__,__v_isRef,__isVue'),
  Na = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(_1)
  )
function E4(e) {
  _1(e) || (e = String(e))
  const t = Ee(this)
  return et(t, 'has', e), t.hasOwnProperty(e)
}
class Fa {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, i) {
    if (n === '__v_skip') return t.__v_skip
    const s = this._isReadonly,
      l = this._isShallow
    if (n === '__v_isReactive') return !s
    if (n === '__v_isReadonly') return s
    if (n === '__v_isShallow') return l
    if (n === '__v_raw')
      return i === (s ? (l ? D4 : Ga) : l ? Ha : ja).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(i)
        ? t
        : void 0
    const a = de(t)
    if (!s) {
      let c
      if (a && (c = w4[n])) return c
      if (n === 'hasOwnProperty') return E4
    }
    const o = Reflect.get(t, n, it(t) ? t : i)
    return (_1(n) ? Na.has(n) : S4(n)) || (s || et(t, 'get', n), l)
      ? o
      : it(o)
        ? a && y2(n)
          ? o
          : o.value
        : Ne(o)
          ? s
            ? qa(o)
            : Ui(o)
          : o
  }
}
class Va extends Fa {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, i, s) {
    let l = t[n]
    if (!this._isShallow) {
      const c = V1(l)
      if (
        (!Dt(i) && !V1(i) && ((l = Ee(l)), (i = Ee(i))),
        !de(t) && it(l) && !it(i))
      )
        return c ? !1 : ((l.value = i), !0)
    }
    const a = de(t) && y2(n) ? Number(n) < t.length : xe(t, n),
      o = Reflect.set(t, n, i, it(t) ? t : s)
    return (
      t === Ee(s) && (a ? b1(i, l) && a1(t, 'set', n, i) : a1(t, 'add', n, i)),
      o
    )
  }
  deleteProperty(t, n) {
    const i = xe(t, n)
    t[n]
    const s = Reflect.deleteProperty(t, n)
    return s && i && a1(t, 'delete', n, void 0), s
  }
  has(t, n) {
    const i = Reflect.has(t, n)
    return (!_1(n) || !Na.has(n)) && et(t, 'has', n), i
  }
  ownKeys(t) {
    return et(t, 'iterate', de(t) ? 'length' : F1), Reflect.ownKeys(t)
  }
}
class x4 extends Fa {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const T4 = new Va(),
  M4 = new x4(),
  C4 = new Va(!0)
const s2 = e => e,
  zi = e => Reflect.getPrototypeOf(e)
function P4(e, t, n) {
  return function (...i) {
    const s = this.__v_raw,
      l = Ee(s),
      a = un(l),
      o = e === 'entries' || (e === Symbol.iterator && a),
      c = e === 'keys' && a,
      u = s[e](...i),
      f = n ? s2 : t ? r2 : tt
    return (
      !t && et(l, 'iterate', c ? i2 : F1),
      {
        next() {
          const { value: p, done: v } = u.next()
          return v
            ? { value: p, done: v }
            : { value: o ? [f(p[0]), f(p[1])] : f(p), done: v }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function bi(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function A4(e, t) {
  const n = {
    get(s) {
      const l = this.__v_raw,
        a = Ee(l),
        o = Ee(s)
      e || (b1(s, o) && et(a, 'get', s), et(a, 'get', o))
      const { has: c } = zi(a),
        u = t ? s2 : e ? r2 : tt
      if (c.call(a, s)) return u(l.get(s))
      if (c.call(a, o)) return u(l.get(o))
      l !== a && l.get(s)
    },
    get size() {
      const s = this.__v_raw
      return !e && et(Ee(s), 'iterate', F1), Reflect.get(s, 'size', s)
    },
    has(s) {
      const l = this.__v_raw,
        a = Ee(l),
        o = Ee(s)
      return (
        e || (b1(s, o) && et(a, 'has', s), et(a, 'has', o)),
        s === o ? l.has(s) : l.has(s) || l.has(o)
      )
    },
    forEach(s, l) {
      const a = this,
        o = a.__v_raw,
        c = Ee(o),
        u = t ? s2 : e ? r2 : tt
      return (
        !e && et(c, 'iterate', F1),
        o.forEach((f, p) => s.call(l, u(f), u(p), a))
      )
    },
  }
  return (
    st(
      n,
      e
        ? {
            add: bi('add'),
            set: bi('set'),
            delete: bi('delete'),
            clear: bi('clear'),
          }
        : {
            add(s) {
              !t && !Dt(s) && !V1(s) && (s = Ee(s))
              const l = Ee(this)
              return (
                zi(l).has.call(l, s) || (l.add(s), a1(l, 'add', s, s)), this
              )
            },
            set(s, l) {
              !t && !Dt(l) && !V1(l) && (l = Ee(l))
              const a = Ee(this),
                { has: o, get: c } = zi(a)
              let u = o.call(a, s)
              u || ((s = Ee(s)), (u = o.call(a, s)))
              const f = c.call(a, s)
              return (
                a.set(s, l),
                u ? b1(l, f) && a1(a, 'set', s, l) : a1(a, 'add', s, l),
                this
              )
            },
            delete(s) {
              const l = Ee(this),
                { has: a, get: o } = zi(l)
              let c = a.call(l, s)
              c || ((s = Ee(s)), (c = a.call(l, s))), o && o.call(l, s)
              const u = l.delete(s)
              return c && a1(l, 'delete', s, void 0), u
            },
            clear() {
              const s = Ee(this),
                l = s.size !== 0,
                a = s.clear()
              return l && a1(s, 'clear', void 0, void 0), a
            },
          }
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach(s => {
      n[s] = P4(s, e, t)
    }),
    n
  )
}
function P2(e, t) {
  const n = A4(e, t)
  return (i, s, l) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
        ? e
        : s === '__v_raw'
          ? i
          : Reflect.get(xe(n, s) && s in i ? n : i, s, l)
}
const O4 = { get: P2(!1, !1) },
  I4 = { get: P2(!1, !0) },
  L4 = { get: P2(!0, !1) }
const ja = new WeakMap(),
  Ha = new WeakMap(),
  Ga = new WeakMap(),
  D4 = new WeakMap()
function R4(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function $4(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : R4(o4(e))
}
function Ui(e) {
  return V1(e) ? e : A2(e, !1, T4, O4, ja)
}
function Wa(e) {
  return A2(e, !1, C4, I4, Ha)
}
function qa(e) {
  return A2(e, !0, M4, L4, Ga)
}
function A2(e, t, n, i, s) {
  if (!Ne(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const l = s.get(e)
  if (l) return l
  const a = $4(e)
  if (a === 0) return e
  const o = new Proxy(e, a === 2 ? i : n)
  return s.set(e, o), o
}
function hn(e) {
  return V1(e) ? hn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function V1(e) {
  return !!(e && e.__v_isReadonly)
}
function Dt(e) {
  return !!(e && e.__v_isShallow)
}
function O2(e) {
  return e ? !!e.__v_raw : !1
}
function Ee(e) {
  const t = e && e.__v_raw
  return t ? Ee(t) : e
}
function k4(e) {
  return (
    !xe(e, '__v_skip') && Object.isExtensible(e) && Ma(e, '__v_skip', !0), e
  )
}
const tt = e => (Ne(e) ? Ui(e) : e),
  r2 = e => (Ne(e) ? qa(e) : e)
function it(e) {
  return e ? e.__v_isRef === !0 : !1
}
function Ge(e) {
  return Ua(e, !1)
}
function B4(e) {
  return Ua(e, !0)
}
function Ua(e, t) {
  return it(e) ? e : new N4(e, t)
}
class N4 {
  constructor(t, n) {
    ;(this.dep = new C2()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : Ee(t)),
      (this._value = n ? t : tt(t)),
      (this.__v_isShallow = n)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      i = this.__v_isShallow || Dt(t) || V1(t)
    ;(t = i ? t : Ee(t)),
      b1(t, n) &&
        ((this._rawValue = t),
        (this._value = i ? t : tt(t)),
        this.dep.trigger())
  }
}
function pn(e) {
  return it(e) ? e.value : e
}
const F4 = {
  get: (e, t, n) => (t === '__v_raw' ? e : pn(Reflect.get(e, t, n))),
  set: (e, t, n, i) => {
    const s = e[t]
    return it(s) && !it(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, i)
  },
}
function Ka(e) {
  return hn(e) ? e : new Proxy(e, F4)
}
class V4 {
  constructor(t, n, i) {
    ;(this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new C2(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Hn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = i)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && $e !== this))
      return La(this, !0), !0
  }
  get value() {
    const t = this.dep.track()
    return $a(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function j4(e, t, n = !1) {
  let i, s
  return pe(e) ? (i = e) : ((i = e.get), (s = e.set)), new V4(i, s, n)
}
const _i = {},
  Oi = new WeakMap()
let B1
function H4(e, t = !1, n = B1) {
  if (n) {
    let i = Oi.get(n)
    i || Oi.set(n, (i = [])), i.push(e)
  }
}
function G4(e, t, n = De) {
  const {
      immediate: i,
      deep: s,
      once: l,
      scheduler: a,
      augmentJob: o,
      call: c,
    } = n,
    u = R => (s ? R : Dt(R) || s === !1 || s === 0 ? o1(R, 1) : o1(R))
  let f,
    p,
    v,
    g,
    y = !1,
    T = !1
  if (
    (it(e)
      ? ((p = () => e.value), (y = Dt(e)))
      : hn(e)
        ? ((p = () => u(e)), (y = !0))
        : de(e)
          ? ((T = !0),
            (y = e.some(R => hn(R) || Dt(R))),
            (p = () =>
              e.map(R => {
                if (it(R)) return R.value
                if (hn(R)) return u(R)
                if (pe(R)) return c ? c(R, 2) : R()
              })))
          : pe(e)
            ? t
              ? (p = c ? () => c(e, 2) : e)
              : (p = () => {
                  if (v) {
                    w1()
                    try {
                      v()
                    } finally {
                      y1()
                    }
                  }
                  const R = B1
                  B1 = f
                  try {
                    return c ? c(e, 3, [g]) : e(g)
                  } finally {
                    B1 = R
                  }
                })
            : (p = Qt),
    t && s)
  ) {
    const R = p,
      N = s === !0 ? 1 / 0 : s
    p = () => o1(R(), N)
  }
  const k = z4(),
    x = () => {
      f.stop(), k && k.active && w2(k.effects, f)
    }
  if (l && t) {
    const R = t
    t = (...N) => {
      R(...N), x()
    }
  }
  let M = T ? new Array(e.length).fill(_i) : _i
  const C = R => {
    if (!(!(f.flags & 1) || (!f.dirty && !R)))
      if (t) {
        const N = f.run()
        if (s || y || (T ? N.some((ie, Q) => b1(ie, M[Q])) : b1(N, M))) {
          v && v()
          const ie = B1
          B1 = f
          try {
            const Q = [N, M === _i ? void 0 : T && M[0] === _i ? [] : M, g]
            c ? c(t, 3, Q) : t(...Q), (M = N)
          } finally {
            B1 = ie
          }
        }
      } else f.run()
  }
  return (
    o && o(C),
    (f = new Oa(p)),
    (f.scheduler = a ? () => a(C, !1) : C),
    (g = R => H4(R, !1, f)),
    (v = f.onStop =
      () => {
        const R = Oi.get(f)
        if (R) {
          if (c) c(R, 4)
          else for (const N of R) N()
          Oi.delete(f)
        }
      }),
    t ? (i ? C(!0) : (M = f.run())) : a ? a(C.bind(null, !0), !0) : f.run(),
    (x.pause = f.pause.bind(f)),
    (x.resume = f.resume.bind(f)),
    (x.stop = x),
    x
  )
}
function o1(e, t = 1 / 0, n) {
  if (t <= 0 || !Ne(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e
  if ((n.add(e), t--, it(e))) o1(e.value, t, n)
  else if (de(e)) for (let i = 0; i < e.length; i++) o1(e[i], t, n)
  else if (Sa(e) || un(e))
    e.forEach(i => {
      o1(i, t, n)
    })
  else if (Ta(e)) {
    for (const i in e) o1(e[i], t, n)
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && o1(e[i], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Xn(e, t, n, i) {
  try {
    return i ? e(...i) : e()
  } catch (s) {
    Ki(s, t, n)
  }
}
function Zt(e, t, n, i) {
  if (pe(e)) {
    const s = Xn(e, t, n, i)
    return (
      s &&
        Ea(s) &&
        s.catch(l => {
          Ki(l, t, n)
        }),
      s
    )
  }
  if (de(e)) {
    const s = []
    for (let l = 0; l < e.length; l++) s.push(Zt(e[l], t, n, i))
    return s
  }
}
function Ki(e, t, n, i = !0) {
  const s = t ? t.vnode : null,
    { errorHandler: l, throwUnhandledErrorInProduction: a } =
      (t && t.appContext.config) || De
  if (t) {
    let o = t.parent
    const c = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; o; ) {
      const f = o.ec
      if (f) {
        for (let p = 0; p < f.length; p++) if (f[p](e, c, u) === !1) return
      }
      o = o.parent
    }
    if (l) {
      w1(), Xn(l, null, 10, [e, c, u]), y1()
      return
    }
  }
  W4(e, n, s, i, a)
}
function W4(e, t, n, i = !0, s = !1) {
  if (s) throw e
  console.error(e)
}
const ut = []
let Yt = -1
const mn = []
let m1 = null,
  on = 0
const Ya = Promise.resolve()
let Ii = null
function I2(e) {
  const t = Ii || Ya
  return e ? t.then(this ? e.bind(this) : e) : t
}
function q4(e) {
  let t = Yt + 1,
    n = ut.length
  for (; t < n; ) {
    const i = (t + n) >>> 1,
      s = ut[i],
      l = Wn(s)
    l < e || (l === e && s.flags & 2) ? (t = i + 1) : (n = i)
  }
  return t
}
function L2(e) {
  if (!(e.flags & 1)) {
    const t = Wn(e),
      n = ut[ut.length - 1]
    !n || (!(e.flags & 2) && t >= Wn(n)) ? ut.push(e) : ut.splice(q4(t), 0, e),
      (e.flags |= 1),
      Xa()
  }
}
function Xa() {
  Ii || (Ii = Ya.then(Ja))
}
function U4(e) {
  de(e)
    ? mn.push(...e)
    : m1 && e.id === -1
      ? m1.splice(on + 1, 0, e)
      : e.flags & 1 || (mn.push(e), (e.flags |= 1)),
    Xa()
}
function wl(e, t, n = Yt + 1) {
  for (; n < ut.length; n++) {
    const i = ut[n]
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid) continue
      ut.splice(n, 1),
        n--,
        i.flags & 4 && (i.flags &= -2),
        i(),
        i.flags & 4 || (i.flags &= -2)
    }
  }
}
function Qa(e) {
  if (mn.length) {
    const t = [...new Set(mn)].sort((n, i) => Wn(n) - Wn(i))
    if (((mn.length = 0), m1)) {
      m1.push(...t)
      return
    }
    for (m1 = t, on = 0; on < m1.length; on++) {
      const n = m1[on]
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2)
    }
    ;(m1 = null), (on = 0)
  }
}
const Wn = e => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Ja(e) {
  try {
    for (Yt = 0; Yt < ut.length; Yt++) {
      const t = ut[Yt]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Xn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; Yt < ut.length; Yt++) {
      const t = ut[Yt]
      t && (t.flags &= -2)
    }
    ;(Yt = -1),
      (ut.length = 0),
      Qa(),
      (Ii = null),
      (ut.length || mn.length) && Ja()
  }
}
let St = null,
  Za = null
function Li(e) {
  const t = St
  return (St = e), (Za = (e && e.type.__scopeId) || null), t
}
function N1(e, t = St, n) {
  if (!t || e._n) return e
  const i = (...s) => {
    i._d && Ol(-1)
    const l = Li(t)
    let a
    try {
      a = e(...s)
    } finally {
      Li(l), i._d && Ol(1)
    }
    return a
  }
  return (i._n = !0), (i._c = !0), (i._d = !0), i
}
function qu(e, t) {
  if (St === null) return e
  const n = Ji(St),
    i = e.dirs || (e.dirs = [])
  for (let s = 0; s < t.length; s++) {
    let [l, a, o, c = De] = t[s]
    l &&
      (pe(l) && (l = { mounted: l, updated: l }),
      l.deep && o1(a),
      i.push({
        dir: l,
        instance: n,
        value: a,
        oldValue: void 0,
        arg: o,
        modifiers: c,
      }))
  }
  return e
}
function $1(e, t, n, i) {
  const s = e.dirs,
    l = t && t.dirs
  for (let a = 0; a < s.length; a++) {
    const o = s[a]
    l && (o.oldValue = l[a].value)
    let c = o.dir[i]
    c && (w1(), Zt(c, n, 8, [e.el, o, e, t]), y1())
  }
}
const K4 = Symbol('_vte'),
  Y4 = e => e.__isTeleport
function D2(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), D2(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
/*! #__NO_SIDE_EFFECTS__ */ function yn(e, t) {
  return pe(e) ? st({ name: e.name }, t, { setup: e }) : e
}
function eo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
function Di(e, t, n, i, s = !1) {
  if (de(e)) {
    e.forEach((y, T) => Di(y, t && (de(t) ? t[T] : t), n, i, s))
    return
  }
  if (kn(i) && !s) {
    i.shapeFlag & 512 &&
      i.type.__asyncResolved &&
      i.component.subTree.component &&
      Di(e, t, n, i.component.subTree)
    return
  }
  const l = i.shapeFlag & 4 ? Ji(i.component) : i.el,
    a = s ? null : l,
    { i: o, r: c } = e,
    u = t && t.r,
    f = o.refs === De ? (o.refs = {}) : o.refs,
    p = o.setupState,
    v = Ee(p),
    g = p === De ? () => !1 : y => xe(v, y)
  if (
    (u != null &&
      u !== c &&
      (We(u)
        ? ((f[u] = null), g(u) && (p[u] = null))
        : it(u) && (u.value = null)),
    pe(c))
  )
    Xn(c, o, 12, [a, f])
  else {
    const y = We(c),
      T = it(c)
    if (y || T) {
      const k = () => {
        if (e.f) {
          const x = y ? (g(c) ? p[c] : f[c]) : c.value
          s
            ? de(x) && w2(x, l)
            : de(x)
              ? x.includes(l) || x.push(l)
              : y
                ? ((f[c] = [l]), g(c) && (p[c] = f[c]))
                : ((c.value = [l]), e.k && (f[e.k] = c.value))
        } else
          y
            ? ((f[c] = a), g(c) && (p[c] = a))
            : T && ((c.value = a), e.k && (f[e.k] = a))
      }
      a ? ((k.id = -1), _t(k, n)) : k()
    }
  }
}
Wi().requestIdleCallback
Wi().cancelIdleCallback
const kn = e => !!e.type.__asyncLoader,
  to = e => e.type.__isKeepAlive
function X4(e, t) {
  no(e, 'a', t)
}
function Q4(e, t) {
  no(e, 'da', t)
}
function no(e, t, n = nt) {
  const i =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return e()
    })
  if ((Yi(t, i, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) to(s.parent.vnode) && J4(i, t, n, s), (s = s.parent)
  }
}
function J4(e, t, n, i) {
  const s = Yi(t, e, i, !0)
  so(() => {
    w2(i[t], s)
  }, n)
}
function Yi(e, t, n = nt, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      l =
        t.__weh ||
        (t.__weh = (...a) => {
          w1()
          const o = Jn(n),
            c = Zt(t, n, e, a)
          return o(), y1(), c
        })
    return i ? s.unshift(l) : s.push(l), l
  }
}
const d1 =
    e =>
    (t, n = nt) => {
      ;(!Un || e === 'sp') && Yi(e, (...i) => t(...i), n)
    },
  Z4 = d1('bm'),
  Qn = d1('m'),
  io = d1('bu'),
  R2 = d1('u'),
  $2 = d1('bum'),
  so = d1('um'),
  e0 = d1('sp'),
  t0 = d1('rtg'),
  n0 = d1('rtc')
function i0(e, t = nt) {
  Yi('ec', e, t)
}
const s0 = 'components'
function Bt(e, t) {
  return l0(s0, e, !0, t) || e
}
const r0 = Symbol.for('v-ndc')
function l0(e, t, n = !0, i = !1) {
  const s = St || nt
  if (s) {
    const l = s.type
    {
      const o = Y0(l, !1)
      if (o && (o === t || o === Rt(t) || o === Gi(Rt(t)))) return l
    }
    const a = yl(s[e] || l[e], t) || yl(s.appContext[e], t)
    return !a && i ? l : a
  }
}
function yl(e, t) {
  return e && (e[t] || e[Rt(t)] || e[Gi(Rt(t))])
}
function a0(e, t, n, i) {
  let s
  const l = n,
    a = de(e)
  if (a || We(e)) {
    const o = a && hn(e)
    let c = !1
    o && ((c = !Dt(e)), (e = qi(e))), (s = new Array(e.length))
    for (let u = 0, f = e.length; u < f; u++)
      s[u] = t(c ? tt(e[u]) : e[u], u, void 0, l)
  } else if (typeof e == 'number') {
    s = new Array(e)
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, l)
  } else if (Ne(e))
    if (e[Symbol.iterator]) s = Array.from(e, (o, c) => t(o, c, void 0, l))
    else {
      const o = Object.keys(e)
      s = new Array(o.length)
      for (let c = 0, u = o.length; c < u; c++) {
        const f = o[c]
        s[c] = t(e[f], f, c, l)
      }
    }
  else s = []
  return s
}
const l2 = e => (e ? (To(e) ? Ji(e) : l2(e.parent)) : null),
  Bn = st(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => l2(e.parent),
    $root: e => l2(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => lo(e),
    $forceUpdate: e =>
      e.f ||
      (e.f = () => {
        L2(e.update)
      }),
    $nextTick: e => e.n || (e.n = I2.bind(e.proxy)),
    $watch: e => C0.bind(e),
  }),
  Bs = (e, t) => e !== De && !e.__isScriptSetup && xe(e, t),
  o0 = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const {
        ctx: n,
        setupState: i,
        data: s,
        props: l,
        accessCache: a,
        type: o,
        appContext: c,
      } = e
      let u
      if (t[0] !== '$') {
        const g = a[t]
        if (g !== void 0)
          switch (g) {
            case 1:
              return i[t]
            case 2:
              return s[t]
            case 4:
              return n[t]
            case 3:
              return l[t]
          }
        else {
          if (Bs(i, t)) return (a[t] = 1), i[t]
          if (s !== De && xe(s, t)) return (a[t] = 2), s[t]
          if ((u = e.propsOptions[0]) && xe(u, t)) return (a[t] = 3), l[t]
          if (n !== De && xe(n, t)) return (a[t] = 4), n[t]
          a2 && (a[t] = 0)
        }
      }
      const f = Bn[t]
      let p, v
      if (f) return t === '$attrs' && et(e.attrs, 'get', ''), f(e)
      if ((p = o.__cssModules) && (p = p[t])) return p
      if (n !== De && xe(n, t)) return (a[t] = 4), n[t]
      if (((v = c.config.globalProperties), xe(v, t))) return v[t]
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: s, ctx: l } = e
      return Bs(s, t)
        ? ((s[t] = n), !0)
        : i !== De && xe(i, t)
          ? ((i[t] = n), !0)
          : xe(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((l[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: i,
          appContext: s,
          propsOptions: l,
        },
      },
      a
    ) {
      let o
      return (
        !!n[a] ||
        (e !== De && xe(e, a)) ||
        Bs(t, a) ||
        ((o = l[0]) && xe(o, a)) ||
        xe(i, a) ||
        xe(Bn, a) ||
        xe(s.config.globalProperties, a)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : xe(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Sl(e) {
  return de(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let a2 = !0
function c0(e) {
  const t = lo(e),
    n = e.proxy,
    i = e.ctx
  ;(a2 = !1), t.beforeCreate && El(t.beforeCreate, e, 'bc')
  const {
    data: s,
    computed: l,
    methods: a,
    watch: o,
    provide: c,
    inject: u,
    created: f,
    beforeMount: p,
    mounted: v,
    beforeUpdate: g,
    updated: y,
    activated: T,
    deactivated: k,
    beforeDestroy: x,
    beforeUnmount: M,
    destroyed: C,
    unmounted: R,
    render: N,
    renderTracked: ie,
    renderTriggered: Q,
    errorCaptured: Y,
    serverPrefetch: F,
    expose: V,
    inheritAttrs: ee,
    components: fe,
    directives: _e,
    filters: Xe,
  } = t
  if ((u && d0(u, i, null), a))
    for (const le in a) {
      const oe = a[le]
      pe(oe) && (i[le] = oe.bind(n))
    }
  if (s) {
    const le = s.call(n, n)
    Ne(le) && (e.data = Ui(le))
  }
  if (((a2 = !0), l))
    for (const le in l) {
      const oe = l[le],
        Fe = pe(oe) ? oe.bind(n, n) : pe(oe.get) ? oe.get.bind(n, n) : Qt,
        I = !pe(oe) && pe(oe.set) ? oe.set.bind(n) : Qt,
        Je = Lt({ get: Fe, set: I })
      Object.defineProperty(i, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Je.value,
        set: qe => (Je.value = qe),
      })
    }
  if (o) for (const le in o) ro(o[le], i, n, le)
  if (c) {
    const le = pe(c) ? c.call(n) : c
    Reflect.ownKeys(le).forEach(oe => {
      gn(oe, le[oe])
    })
  }
  f && El(f, e, 'c')
  function ne(le, oe) {
    de(oe) ? oe.forEach(Fe => le(Fe.bind(n))) : oe && le(oe.bind(n))
  }
  if (
    (ne(Z4, p),
    ne(Qn, v),
    ne(io, g),
    ne(R2, y),
    ne(X4, T),
    ne(Q4, k),
    ne(i0, Y),
    ne(n0, ie),
    ne(t0, Q),
    ne($2, M),
    ne(so, R),
    ne(e0, F),
    de(V))
  )
    if (V.length) {
      const le = e.exposed || (e.exposed = {})
      V.forEach(oe => {
        Object.defineProperty(le, oe, {
          get: () => n[oe],
          set: Fe => (n[oe] = Fe),
        })
      })
    } else e.exposed || (e.exposed = {})
  N && e.render === Qt && (e.render = N),
    ee != null && (e.inheritAttrs = ee),
    fe && (e.components = fe),
    _e && (e.directives = _e),
    F && eo(e)
}
function d0(e, t, n = Qt) {
  de(e) && (e = o2(e))
  for (const i in e) {
    const s = e[i]
    let l
    Ne(s)
      ? 'default' in s
        ? (l = Ft(s.from || i, s.default, !0))
        : (l = Ft(s.from || i))
      : (l = Ft(s)),
      it(l)
        ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: a => (l.value = a),
          })
        : (t[i] = l)
  }
}
function El(e, t, n) {
  Zt(de(e) ? e.map(i => i.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function ro(e, t, n, i) {
  let s = i.includes('.') ? wo(n, i) : () => n[i]
  if (We(e)) {
    const l = t[e]
    pe(l) && Nn(s, l)
  } else if (pe(e)) Nn(s, e.bind(n))
  else if (Ne(e))
    if (de(e)) e.forEach(l => ro(l, t, n, i))
    else {
      const l = pe(e.handler) ? e.handler.bind(n) : t[e.handler]
      pe(l) && Nn(s, l, e)
    }
}
function lo(e) {
  const t = e.type,
    { mixins: n, extends: i } = t,
    {
      mixins: s,
      optionsCache: l,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    o = l.get(t)
  let c
  return (
    o
      ? (c = o)
      : !s.length && !n && !i
        ? (c = t)
        : ((c = {}), s.length && s.forEach(u => Ri(c, u, a, !0)), Ri(c, t, a)),
    Ne(t) && l.set(t, c),
    c
  )
}
function Ri(e, t, n, i = !1) {
  const { mixins: s, extends: l } = t
  l && Ri(e, l, n, !0), s && s.forEach(a => Ri(e, a, n, !0))
  for (const a in t)
    if (!(i && a === 'expose')) {
      const o = f0[a] || (n && n[a])
      e[a] = o ? o(e[a], t[a]) : t[a]
    }
  return e
}
const f0 = {
  data: xl,
  props: Tl,
  emits: Tl,
  methods: Ln,
  computed: Ln,
  beforeCreate: ft,
  created: ft,
  beforeMount: ft,
  mounted: ft,
  beforeUpdate: ft,
  updated: ft,
  beforeDestroy: ft,
  beforeUnmount: ft,
  destroyed: ft,
  unmounted: ft,
  activated: ft,
  deactivated: ft,
  errorCaptured: ft,
  serverPrefetch: ft,
  components: Ln,
  directives: Ln,
  watch: h0,
  provide: xl,
  inject: u0,
}
function xl(e, t) {
  return t
    ? e
      ? function () {
          return st(
            pe(e) ? e.call(this, this) : e,
            pe(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function u0(e, t) {
  return Ln(o2(e), o2(t))
}
function o2(e) {
  if (de(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function ft(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Ln(e, t) {
  return e ? st(Object.create(null), e, t) : t
}
function Tl(e, t) {
  return e
    ? de(e) && de(t)
      ? [...new Set([...e, ...t])]
      : st(Object.create(null), Sl(e), Sl(t ?? {}))
    : t
}
function h0(e, t) {
  if (!e) return t
  if (!t) return e
  const n = st(Object.create(null), e)
  for (const i in t) n[i] = ft(e[i], t[i])
  return n
}
function ao() {
  return {
    app: null,
    config: {
      isNativeTag: l4,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let p0 = 0
function m0(e, t) {
  return function (i, s = null) {
    pe(i) || (i = st({}, i)), s != null && !Ne(s) && (s = null)
    const l = ao(),
      a = new WeakSet(),
      o = []
    let c = !1
    const u = (l.app = {
      _uid: p0++,
      _component: i,
      _props: s,
      _container: null,
      _context: l,
      _instance: null,
      version: Q0,
      get config() {
        return l.config
      },
      set config(f) {},
      use(f, ...p) {
        return (
          a.has(f) ||
            (f && pe(f.install)
              ? (a.add(f), f.install(u, ...p))
              : pe(f) && (a.add(f), f(u, ...p))),
          u
        )
      },
      mixin(f) {
        return l.mixins.includes(f) || l.mixins.push(f), u
      },
      component(f, p) {
        return p ? ((l.components[f] = p), u) : l.components[f]
      },
      directive(f, p) {
        return p ? ((l.directives[f] = p), u) : l.directives[f]
      },
      mount(f, p, v) {
        if (!c) {
          const g = u._ceVNode || ke(i, s)
          return (
            (g.appContext = l),
            v === !0 ? (v = 'svg') : v === !1 && (v = void 0),
            e(g, f, v),
            (c = !0),
            (u._container = f),
            (f.__vue_app__ = u),
            Ji(g.component)
          )
        }
      },
      onUnmount(f) {
        o.push(f)
      },
      unmount() {
        c &&
          (Zt(o, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__)
      },
      provide(f, p) {
        return (l.provides[f] = p), u
      },
      runWithContext(f) {
        const p = vn
        vn = u
        try {
          return f()
        } finally {
          vn = p
        }
      },
    })
    return u
  }
}
let vn = null
function gn(e, t) {
  if (nt) {
    let n = nt.provides
    const i = nt.parent && nt.parent.provides
    i === n && (n = nt.provides = Object.create(i)), (n[e] = t)
  }
}
function Ft(e, t, n = !1) {
  const i = nt || St
  if (i || vn) {
    const s = vn
      ? vn._context.provides
      : i
        ? i.parent == null
          ? i.vnode.appContext && i.vnode.appContext.provides
          : i.parent.provides
        : void 0
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && pe(t) ? t.call(i && i.proxy) : t
  }
}
const oo = {},
  co = () => Object.create(oo),
  fo = e => Object.getPrototypeOf(e) === oo
function v0(e, t, n, i = !1) {
  const s = {},
    l = co()
  ;(e.propsDefaults = Object.create(null)), uo(e, t, s, l)
  for (const a in e.propsOptions[0]) a in s || (s[a] = void 0)
  n ? (e.props = i ? s : Wa(s)) : e.type.props ? (e.props = s) : (e.props = l),
    (e.attrs = l)
}
function g0(e, t, n, i) {
  const {
      props: s,
      attrs: l,
      vnode: { patchFlag: a },
    } = e,
    o = Ee(s),
    [c] = e.propsOptions
  let u = !1
  if ((i || a > 0) && !(a & 16)) {
    if (a & 8) {
      const f = e.vnode.dynamicProps
      for (let p = 0; p < f.length; p++) {
        let v = f[p]
        if (Xi(e.emitsOptions, v)) continue
        const g = t[v]
        if (c)
          if (xe(l, v)) g !== l[v] && ((l[v] = g), (u = !0))
          else {
            const y = Rt(v)
            s[y] = c2(c, o, y, g, e, !1)
          }
        else g !== l[v] && ((l[v] = g), (u = !0))
      }
    }
  } else {
    uo(e, t, s, l) && (u = !0)
    let f
    for (const p in o)
      (!t || (!xe(t, p) && ((f = G1(p)) === p || !xe(t, f)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[f] !== void 0) &&
            (s[p] = c2(c, o, p, void 0, e, !0))
          : delete s[p])
    if (l !== o) for (const p in l) (!t || !xe(t, p)) && (delete l[p], (u = !0))
  }
  u && a1(e.attrs, 'set', '')
}
function uo(e, t, n, i) {
  const [s, l] = e.propsOptions
  let a = !1,
    o
  if (t)
    for (let c in t) {
      if (Dn(c)) continue
      const u = t[c]
      let f
      s && xe(s, (f = Rt(c)))
        ? !l || !l.includes(f)
          ? (n[f] = u)
          : ((o || (o = {}))[f] = u)
        : Xi(e.emitsOptions, c) ||
          ((!(c in i) || u !== i[c]) && ((i[c] = u), (a = !0)))
    }
  if (l) {
    const c = Ee(n),
      u = o || De
    for (let f = 0; f < l.length; f++) {
      const p = l[f]
      n[p] = c2(s, c, p, u[p], e, !xe(u, p))
    }
  }
  return a
}
function c2(e, t, n, i, s, l) {
  const a = e[n]
  if (a != null) {
    const o = xe(a, 'default')
    if (o && i === void 0) {
      const c = a.default
      if (a.type !== Function && !a.skipFactory && pe(c)) {
        const { propsDefaults: u } = s
        if (n in u) i = u[n]
        else {
          const f = Jn(s)
          ;(i = u[n] = c.call(null, t)), f()
        }
      } else i = c
      s.ce && s.ce._setProp(n, i)
    }
    a[0] && (l && !o ? (i = !1) : a[1] && (i === '' || i === G1(n)) && (i = !0))
  }
  return i
}
const z0 = new WeakMap()
function ho(e, t, n = !1) {
  const i = n ? z0 : t.propsCache,
    s = i.get(e)
  if (s) return s
  const l = e.props,
    a = {},
    o = []
  let c = !1
  if (!pe(e)) {
    const f = p => {
      c = !0
      const [v, g] = ho(p, t, !0)
      st(a, v), g && o.push(...g)
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  if (!l && !c) return Ne(e) && i.set(e, fn), fn
  if (de(l))
    for (let f = 0; f < l.length; f++) {
      const p = Rt(l[f])
      Ml(p) && (a[p] = De)
    }
  else if (l)
    for (const f in l) {
      const p = Rt(f)
      if (Ml(p)) {
        const v = l[f],
          g = (a[p] = de(v) || pe(v) ? { type: v } : st({}, v)),
          y = g.type
        let T = !1,
          k = !0
        if (de(y))
          for (let x = 0; x < y.length; ++x) {
            const M = y[x],
              C = pe(M) && M.name
            if (C === 'Boolean') {
              T = !0
              break
            } else C === 'String' && (k = !1)
          }
        else T = pe(y) && y.name === 'Boolean'
        ;(g[0] = T), (g[1] = k), (T || xe(g, 'default')) && o.push(p)
      }
    }
  const u = [a, o]
  return Ne(e) && i.set(e, u), u
}
function Ml(e) {
  return e[0] !== '$' && !Dn(e)
}
const po = e => e[0] === '_' || e === '$stable',
  k2 = e => (de(e) ? e.map(Xt) : [Xt(e)]),
  b0 = (e, t, n) => {
    if (t._n) return t
    const i = N1((...s) => k2(t(...s)), n)
    return (i._c = !1), i
  },
  mo = (e, t, n) => {
    const i = e._ctx
    for (const s in e) {
      if (po(s)) continue
      const l = e[s]
      if (pe(l)) t[s] = b0(s, l, i)
      else if (l != null) {
        const a = k2(l)
        t[s] = () => a
      }
    }
  },
  vo = (e, t) => {
    const n = k2(t)
    e.slots.default = () => n
  },
  go = (e, t, n) => {
    for (const i in t) (n || i !== '_') && (e[i] = t[i])
  },
  _0 = (e, t, n) => {
    const i = (e.slots = co())
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? (go(i, t, n), n && Ma(i, '_', s, !0)) : mo(t, i)
    } else t && vo(e, t)
  },
  w0 = (e, t, n) => {
    const { vnode: i, slots: s } = e
    let l = !0,
      a = De
    if (i.shapeFlag & 32) {
      const o = t._
      o
        ? n && o === 1
          ? (l = !1)
          : go(s, t, n)
        : ((l = !t.$stable), mo(t, s)),
        (a = t)
    } else t && (vo(e, t), (a = { default: 1 }))
    if (l) for (const o in s) !po(o) && a[o] == null && delete s[o]
  },
  _t = R0
function y0(e) {
  return S0(e)
}
function S0(e, t) {
  const n = Wi()
  n.__VUE__ = !0
  const {
      insert: i,
      remove: s,
      patchProp: l,
      createElement: a,
      createText: o,
      createComment: c,
      setText: u,
      setElementText: f,
      parentNode: p,
      nextSibling: v,
      setScopeId: g = Qt,
      insertStaticContent: y,
    } = e,
    T = (
      z,
      b,
      S,
      A = null,
      L = null,
      D = null,
      q = void 0,
      G = null,
      j = !!b.dynamicChildren
    ) => {
      if (z === b) return
      z && !On(z, b) && ((A = O(z)), qe(z, L, D, !0), (z = null)),
        b.patchFlag === -2 && ((j = !1), (b.dynamicChildren = null))
      const { type: B, ref: re, shapeFlag: K } = b
      switch (B) {
        case Qi:
          k(z, b, S, A)
          break
        case j1:
          x(z, b, S, A)
          break
        case Ei:
          z == null && M(b, S, A, q)
          break
        case It:
          fe(z, b, S, A, L, D, q, G, j)
          break
        default:
          K & 1
            ? N(z, b, S, A, L, D, q, G, j)
            : K & 6
              ? _e(z, b, S, A, L, D, q, G, j)
              : (K & 64 || K & 128) && B.process(z, b, S, A, L, D, q, G, j, Z)
      }
      re != null && L && Di(re, z && z.ref, D, b || z, !b)
    },
    k = (z, b, S, A) => {
      if (z == null) i((b.el = o(b.children)), S, A)
      else {
        const L = (b.el = z.el)
        b.children !== z.children && u(L, b.children)
      }
    },
    x = (z, b, S, A) => {
      z == null ? i((b.el = c(b.children || '')), S, A) : (b.el = z.el)
    },
    M = (z, b, S, A) => {
      ;[z.el, z.anchor] = y(z.children, b, S, A, z.el, z.anchor)
    },
    C = ({ el: z, anchor: b }, S, A) => {
      let L
      for (; z && z !== b; ) (L = v(z)), i(z, S, A), (z = L)
      i(b, S, A)
    },
    R = ({ el: z, anchor: b }) => {
      let S
      for (; z && z !== b; ) (S = v(z)), s(z), (z = S)
      s(b)
    },
    N = (z, b, S, A, L, D, q, G, j) => {
      b.type === 'svg' ? (q = 'svg') : b.type === 'math' && (q = 'mathml'),
        z == null ? ie(b, S, A, L, D, q, G, j) : F(z, b, L, D, q, G, j)
    },
    ie = (z, b, S, A, L, D, q, G) => {
      let j, B
      const { props: re, shapeFlag: K, transition: te, dirs: se } = z
      if (
        ((j = z.el = a(z.type, D, re && re.is, re)),
        K & 8
          ? f(j, z.children)
          : K & 16 && Y(z.children, j, null, A, L, Ns(z, D), q, G),
        se && $1(z, null, A, 'created'),
        Q(j, z, z.scopeId, q, A),
        re)
      ) {
        for (const Ae in re)
          Ae !== 'value' && !Dn(Ae) && l(j, Ae, null, re[Ae], D, A)
        'value' in re && l(j, 'value', null, re.value, D),
          (B = re.onVnodeBeforeMount) && Kt(B, A, z)
      }
      se && $1(z, null, A, 'beforeMount')
      const ze = E0(L, te)
      ze && te.beforeEnter(j),
        i(j, b, S),
        ((B = re && re.onVnodeMounted) || ze || se) &&
          _t(() => {
            B && Kt(B, A, z), ze && te.enter(j), se && $1(z, null, A, 'mounted')
          }, L)
    },
    Q = (z, b, S, A, L) => {
      if ((S && g(z, S), A)) for (let D = 0; D < A.length; D++) g(z, A[D])
      if (L) {
        let D = L.subTree
        if (
          b === D ||
          (So(D.type) && (D.ssContent === b || D.ssFallback === b))
        ) {
          const q = L.vnode
          Q(z, q, q.scopeId, q.slotScopeIds, L.parent)
        }
      }
    },
    Y = (z, b, S, A, L, D, q, G, j = 0) => {
      for (let B = j; B < z.length; B++) {
        const re = (z[B] = G ? v1(z[B]) : Xt(z[B]))
        T(null, re, b, S, A, L, D, q, G)
      }
    },
    F = (z, b, S, A, L, D, q) => {
      const G = (b.el = z.el)
      let { patchFlag: j, dynamicChildren: B, dirs: re } = b
      j |= z.patchFlag & 16
      const K = z.props || De,
        te = b.props || De
      let se
      if (
        (S && k1(S, !1),
        (se = te.onVnodeBeforeUpdate) && Kt(se, S, b, z),
        re && $1(b, z, S, 'beforeUpdate'),
        S && k1(S, !0),
        ((K.innerHTML && te.innerHTML == null) ||
          (K.textContent && te.textContent == null)) &&
          f(G, ''),
        B
          ? V(z.dynamicChildren, B, G, S, A, Ns(b, L), D)
          : q || oe(z, b, G, null, S, A, Ns(b, L), D, !1),
        j > 0)
      ) {
        if (j & 16) ee(G, K, te, S, L)
        else if (
          (j & 2 && K.class !== te.class && l(G, 'class', null, te.class, L),
          j & 4 && l(G, 'style', K.style, te.style, L),
          j & 8)
        ) {
          const ze = b.dynamicProps
          for (let Ae = 0; Ae < ze.length; Ae++) {
            const we = ze[Ae],
              Ue = K[we],
              je = te[we]
            ;(je !== Ue || we === 'value') && l(G, we, Ue, je, L, S)
          }
        }
        j & 1 && z.children !== b.children && f(G, b.children)
      } else !q && B == null && ee(G, K, te, S, L)
      ;((se = te.onVnodeUpdated) || re) &&
        _t(() => {
          se && Kt(se, S, b, z), re && $1(b, z, S, 'updated')
        }, A)
    },
    V = (z, b, S, A, L, D, q) => {
      for (let G = 0; G < b.length; G++) {
        const j = z[G],
          B = b[G],
          re =
            j.el && (j.type === It || !On(j, B) || j.shapeFlag & 70)
              ? p(j.el)
              : S
        T(j, B, re, null, A, L, D, q, !0)
      }
    },
    ee = (z, b, S, A, L) => {
      if (b !== S) {
        if (b !== De)
          for (const D in b) !Dn(D) && !(D in S) && l(z, D, b[D], null, L, A)
        for (const D in S) {
          if (Dn(D)) continue
          const q = S[D],
            G = b[D]
          q !== G && D !== 'value' && l(z, D, G, q, L, A)
        }
        'value' in S && l(z, 'value', b.value, S.value, L)
      }
    },
    fe = (z, b, S, A, L, D, q, G, j) => {
      const B = (b.el = z ? z.el : o('')),
        re = (b.anchor = z ? z.anchor : o(''))
      let { patchFlag: K, dynamicChildren: te, slotScopeIds: se } = b
      se && (G = G ? G.concat(se) : se),
        z == null
          ? (i(B, S, A), i(re, S, A), Y(b.children || [], S, re, L, D, q, G, j))
          : K > 0 && K & 64 && te && z.dynamicChildren
            ? (V(z.dynamicChildren, te, S, L, D, q, G),
              (b.key != null || (L && b === L.subTree)) && zo(z, b, !0))
            : oe(z, b, S, re, L, D, q, G, j)
    },
    _e = (z, b, S, A, L, D, q, G, j) => {
      ;(b.slotScopeIds = G),
        z == null
          ? b.shapeFlag & 512
            ? L.ctx.activate(b, S, A, q, j)
            : Xe(b, S, A, L, D, q, j)
          : Ke(z, b, j)
    },
    Xe = (z, b, S, A, L, D, q) => {
      const G = (z.component = G0(z, A, L))
      if ((to(z) && (G.ctx.renderer = Z), W0(G, !1, q), G.asyncDep)) {
        if ((L && L.registerDep(G, ne, q), !z.el)) {
          const j = (G.subTree = ke(j1))
          x(null, j, b, S)
        }
      } else ne(G, z, b, S, L, D, q)
    },
    Ke = (z, b, S) => {
      const A = (b.component = z.component)
      if (L0(z, b, S))
        if (A.asyncDep && !A.asyncResolved) {
          le(A, b, S)
          return
        } else (A.next = b), A.update()
      else (b.el = z.el), (A.vnode = b)
    },
    ne = (z, b, S, A, L, D, q) => {
      const G = () => {
        if (z.isMounted) {
          let { next: K, bu: te, u: se, parent: ze, vnode: Ae } = z
          {
            const rt = bo(z)
            if (rt) {
              K && ((K.el = Ae.el), le(z, K, q)),
                rt.asyncDep.then(() => {
                  z.isUnmounted || G()
                })
              return
            }
          }
          let we = K,
            Ue
          k1(z, !1),
            K ? ((K.el = Ae.el), le(z, K, q)) : (K = Ae),
            te && Si(te),
            (Ue = K.props && K.props.onVnodeBeforeUpdate) && Kt(Ue, ze, K, Ae),
            k1(z, !0)
          const je = Pl(z),
            Qe = z.subTree
          ;(z.subTree = je),
            T(Qe, je, p(Qe.el), O(Qe), z, L, D),
            (K.el = je.el),
            we === null && D0(z, je.el),
            se && _t(se, L),
            (Ue = K.props && K.props.onVnodeUpdated) &&
              _t(() => Kt(Ue, ze, K, Ae), L)
        } else {
          let K
          const { el: te, props: se } = b,
            { bm: ze, m: Ae, parent: we, root: Ue, type: je } = z,
            Qe = kn(b)
          k1(z, !1),
            ze && Si(ze),
            !Qe && (K = se && se.onVnodeBeforeMount) && Kt(K, we, b),
            k1(z, !0)
          {
            Ue.ce && Ue.ce._injectChildStyle(je)
            const rt = (z.subTree = Pl(z))
            T(null, rt, S, A, z, L, D), (b.el = rt.el)
          }
          if ((Ae && _t(Ae, L), !Qe && (K = se && se.onVnodeMounted))) {
            const rt = b
            _t(() => Kt(K, we, rt), L)
          }
          ;(b.shapeFlag & 256 ||
            (we && kn(we.vnode) && we.vnode.shapeFlag & 256)) &&
            z.a &&
            _t(z.a, L),
            (z.isMounted = !0),
            (b = S = A = null)
        }
      }
      z.scope.on()
      const j = (z.effect = new Oa(G))
      z.scope.off()
      const B = (z.update = j.run.bind(j)),
        re = (z.job = j.runIfDirty.bind(j))
      ;(re.i = z), (re.id = z.uid), (j.scheduler = () => L2(re)), k1(z, !0), B()
    },
    le = (z, b, S) => {
      b.component = z
      const A = z.vnode.props
      ;(z.vnode = b),
        (z.next = null),
        g0(z, b.props, A, S),
        w0(z, b.children, S),
        w1(),
        wl(z),
        y1()
    },
    oe = (z, b, S, A, L, D, q, G, j = !1) => {
      const B = z && z.children,
        re = z ? z.shapeFlag : 0,
        K = b.children,
        { patchFlag: te, shapeFlag: se } = b
      if (te > 0) {
        if (te & 128) {
          I(B, K, S, A, L, D, q, G, j)
          return
        } else if (te & 256) {
          Fe(B, K, S, A, L, D, q, G, j)
          return
        }
      }
      se & 8
        ? (re & 16 && Be(B, L, D), K !== B && f(S, K))
        : re & 16
          ? se & 16
            ? I(B, K, S, A, L, D, q, G, j)
            : Be(B, L, D, !0)
          : (re & 8 && f(S, ''), se & 16 && Y(K, S, A, L, D, q, G, j))
    },
    Fe = (z, b, S, A, L, D, q, G, j) => {
      ;(z = z || fn), (b = b || fn)
      const B = z.length,
        re = b.length,
        K = Math.min(B, re)
      let te
      for (te = 0; te < K; te++) {
        const se = (b[te] = j ? v1(b[te]) : Xt(b[te]))
        T(z[te], se, S, null, L, D, q, G, j)
      }
      B > re ? Be(z, L, D, !0, !1, K) : Y(b, S, A, L, D, q, G, j, K)
    },
    I = (z, b, S, A, L, D, q, G, j) => {
      let B = 0
      const re = b.length
      let K = z.length - 1,
        te = re - 1
      for (; B <= K && B <= te; ) {
        const se = z[B],
          ze = (b[B] = j ? v1(b[B]) : Xt(b[B]))
        if (On(se, ze)) T(se, ze, S, null, L, D, q, G, j)
        else break
        B++
      }
      for (; B <= K && B <= te; ) {
        const se = z[K],
          ze = (b[te] = j ? v1(b[te]) : Xt(b[te]))
        if (On(se, ze)) T(se, ze, S, null, L, D, q, G, j)
        else break
        K--, te--
      }
      if (B > K) {
        if (B <= te) {
          const se = te + 1,
            ze = se < re ? b[se].el : A
          for (; B <= te; )
            T(null, (b[B] = j ? v1(b[B]) : Xt(b[B])), S, ze, L, D, q, G, j), B++
        }
      } else if (B > te) for (; B <= K; ) qe(z[B], L, D, !0), B++
      else {
        const se = B,
          ze = B,
          Ae = new Map()
        for (B = ze; B <= te; B++) {
          const lt = (b[B] = j ? v1(b[B]) : Xt(b[B]))
          lt.key != null && Ae.set(lt.key, B)
        }
        let we,
          Ue = 0
        const je = te - ze + 1
        let Qe = !1,
          rt = 0
        const E1 = new Array(je)
        for (B = 0; B < je; B++) E1[B] = 0
        for (B = se; B <= K; B++) {
          const lt = z[B]
          if (Ue >= je) {
            qe(lt, L, D, !0)
            continue
          }
          let Tt
          if (lt.key != null) Tt = Ae.get(lt.key)
          else
            for (we = ze; we <= te; we++)
              if (E1[we - ze] === 0 && On(lt, b[we])) {
                Tt = we
                break
              }
          Tt === void 0
            ? qe(lt, L, D, !0)
            : ((E1[Tt - ze] = B + 1),
              Tt >= rt ? (rt = Tt) : (Qe = !0),
              T(lt, b[Tt], S, null, L, D, q, G, j),
              Ue++)
        }
        const q1 = Qe ? x0(E1) : fn
        for (we = q1.length - 1, B = je - 1; B >= 0; B--) {
          const lt = ze + B,
            Tt = b[lt],
            Zn = lt + 1 < re ? b[lt + 1].el : A
          E1[B] === 0
            ? T(null, Tt, S, Zn, L, D, q, G, j)
            : Qe && (we < 0 || B !== q1[we] ? Je(Tt, S, Zn, 2) : we--)
        }
      }
    },
    Je = (z, b, S, A, L = null) => {
      const { el: D, type: q, transition: G, children: j, shapeFlag: B } = z
      if (B & 6) {
        Je(z.component.subTree, b, S, A)
        return
      }
      if (B & 128) {
        z.suspense.move(b, S, A)
        return
      }
      if (B & 64) {
        q.move(z, b, S, Z)
        return
      }
      if (q === It) {
        i(D, b, S)
        for (let K = 0; K < j.length; K++) Je(j[K], b, S, A)
        i(z.anchor, b, S)
        return
      }
      if (q === Ei) {
        C(z, b, S)
        return
      }
      if (A !== 2 && B & 1 && G)
        if (A === 0) G.beforeEnter(D), i(D, b, S), _t(() => G.enter(D), L)
        else {
          const { leave: K, delayLeave: te, afterLeave: se } = G,
            ze = () => i(D, b, S),
            Ae = () => {
              K(D, () => {
                ze(), se && se()
              })
            }
          te ? te(D, ze, Ae) : Ae()
        }
      else i(D, b, S)
    },
    qe = (z, b, S, A = !1, L = !1) => {
      const {
        type: D,
        props: q,
        ref: G,
        children: j,
        dynamicChildren: B,
        shapeFlag: re,
        patchFlag: K,
        dirs: te,
        cacheIndex: se,
      } = z
      if (
        (K === -2 && (L = !1),
        G != null && Di(G, null, S, z, !0),
        se != null && (b.renderCache[se] = void 0),
        re & 256)
      ) {
        b.ctx.deactivate(z)
        return
      }
      const ze = re & 1 && te,
        Ae = !kn(z)
      let we
      if ((Ae && (we = q && q.onVnodeBeforeUnmount) && Kt(we, b, z), re & 6))
        Ht(z.component, S, A)
      else {
        if (re & 128) {
          z.suspense.unmount(S, A)
          return
        }
        ze && $1(z, null, b, 'beforeUnmount'),
          re & 64
            ? z.type.remove(z, b, S, Z, A)
            : B && !B.hasOnce && (D !== It || (K > 0 && K & 64))
              ? Be(B, b, S, !1, !0)
              : ((D === It && K & 384) || (!L && re & 16)) && Be(j, b, S),
          A && jt(z)
      }
      ;((Ae && (we = q && q.onVnodeUnmounted)) || ze) &&
        _t(() => {
          we && Kt(we, b, z), ze && $1(z, null, b, 'unmounted')
        }, S)
    },
    jt = z => {
      const { type: b, el: S, anchor: A, transition: L } = z
      if (b === It) {
        Ze(S, A)
        return
      }
      if (b === Ei) {
        R(z)
        return
      }
      const D = () => {
        s(S), L && !L.persisted && L.afterLeave && L.afterLeave()
      }
      if (z.shapeFlag & 1 && L && !L.persisted) {
        const { leave: q, delayLeave: G } = L,
          j = () => q(S, D)
        G ? G(z.el, D, j) : j()
      } else D()
    },
    Ze = (z, b) => {
      let S
      for (; z !== b; ) (S = v(z)), s(z), (z = S)
      s(b)
    },
    Ht = (z, b, S) => {
      const { bum: A, scope: L, job: D, subTree: q, um: G, m: j, a: B } = z
      Cl(j),
        Cl(B),
        A && Si(A),
        L.stop(),
        D && ((D.flags |= 8), qe(q, z, b, S)),
        G && _t(G, b),
        _t(() => {
          z.isUnmounted = !0
        }, b),
        b &&
          b.pendingBranch &&
          !b.isUnmounted &&
          z.asyncDep &&
          !z.asyncResolved &&
          z.suspenseId === b.pendingId &&
          (b.deps--, b.deps === 0 && b.resolve())
    },
    Be = (z, b, S, A = !1, L = !1, D = 0) => {
      for (let q = D; q < z.length; q++) qe(z[q], b, S, A, L)
    },
    O = z => {
      if (z.shapeFlag & 6) return O(z.component.subTree)
      if (z.shapeFlag & 128) return z.suspense.next()
      const b = v(z.anchor || z.el),
        S = b && b[K4]
      return S ? v(S) : b
    }
  let P = !1
  const W = (z, b, S) => {
      z == null
        ? b._vnode && qe(b._vnode, null, null, !0)
        : T(b._vnode || null, z, b, null, null, null, S),
        (b._vnode = z),
        P || ((P = !0), wl(), Qa(), (P = !1))
    },
    Z = {
      p: T,
      um: qe,
      m: Je,
      r: jt,
      mt: Xe,
      mc: Y,
      pc: oe,
      pbc: V,
      n: O,
      o: e,
    }
  return { render: W, hydrate: void 0, createApp: m0(W) }
}
function Ns({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function k1({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function E0(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function zo(e, t, n = !1) {
  const i = e.children,
    s = t.children
  if (de(i) && de(s))
    for (let l = 0; l < i.length; l++) {
      const a = i[l]
      let o = s[l]
      o.shapeFlag & 1 &&
        !o.dynamicChildren &&
        ((o.patchFlag <= 0 || o.patchFlag === 32) &&
          ((o = s[l] = v1(s[l])), (o.el = a.el)),
        !n && o.patchFlag !== -2 && zo(a, o)),
        o.type === Qi && (o.el = a.el)
    }
}
function x0(e) {
  const t = e.slice(),
    n = [0]
  let i, s, l, a, o
  const c = e.length
  for (i = 0; i < c; i++) {
    const u = e[i]
    if (u !== 0) {
      if (((s = n[n.length - 1]), e[s] < u)) {
        ;(t[i] = s), n.push(i)
        continue
      }
      for (l = 0, a = n.length - 1; l < a; )
        (o = (l + a) >> 1), e[n[o]] < u ? (l = o + 1) : (a = o)
      u < e[n[l]] && (l > 0 && (t[i] = n[l - 1]), (n[l] = i))
    }
  }
  for (l = n.length, a = n[l - 1]; l-- > 0; ) (n[l] = a), (a = t[a])
  return n
}
function bo(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : bo(t)
}
function Cl(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const T0 = Symbol.for('v-scx'),
  M0 = () => Ft(T0)
function Nn(e, t, n) {
  return _o(e, t, n)
}
function _o(e, t, n = De) {
  const { immediate: i, deep: s, flush: l, once: a } = n,
    o = st({}, n),
    c = (t && i) || (!t && l !== 'post')
  let u
  if (Un) {
    if (l === 'sync') {
      const g = M0()
      u = g.__watcherHandles || (g.__watcherHandles = [])
    } else if (!c) {
      const g = () => {}
      return (g.stop = Qt), (g.resume = Qt), (g.pause = Qt), g
    }
  }
  const f = nt
  o.call = (g, y, T) => Zt(g, f, y, T)
  let p = !1
  l === 'post'
    ? (o.scheduler = g => {
        _t(g, f && f.suspense)
      })
    : l !== 'sync' &&
      ((p = !0),
      (o.scheduler = (g, y) => {
        y ? g() : L2(g)
      })),
    (o.augmentJob = g => {
      t && (g.flags |= 4),
        p && ((g.flags |= 2), f && ((g.id = f.uid), (g.i = f)))
    })
  const v = G4(e, t, o)
  return Un && (u ? u.push(v) : c && v()), v
}
function C0(e, t, n) {
  const i = this.proxy,
    s = We(e) ? (e.includes('.') ? wo(i, e) : () => i[e]) : e.bind(i, i)
  let l
  pe(t) ? (l = t) : ((l = t.handler), (n = t))
  const a = Jn(this),
    o = _o(s, l.bind(i), n)
  return a(), o
}
function wo(e, t) {
  const n = t.split('.')
  return () => {
    let i = e
    for (let s = 0; s < n.length && i; s++) i = i[n[s]]
    return i
  }
}
const P0 = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${G1(t)}Modifiers`]
function A0(e, t, ...n) {
  if (e.isUnmounted) return
  const i = e.vnode.props || De
  let s = n
  const l = t.startsWith('update:'),
    a = l && P0(i, t.slice(7))
  a &&
    (a.trim && (s = n.map(f => (We(f) ? f.trim() : f))),
    a.number && (s = n.map(e2)))
  let o,
    c = i[(o = Ls(t))] || i[(o = Ls(Rt(t)))]
  !c && l && (c = i[(o = Ls(G1(t)))]), c && Zt(c, e, 6, s)
  const u = i[o + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[o]) return
    ;(e.emitted[o] = !0), Zt(u, e, 6, s)
  }
}
function yo(e, t, n = !1) {
  const i = t.emitsCache,
    s = i.get(e)
  if (s !== void 0) return s
  const l = e.emits
  let a = {},
    o = !1
  if (!pe(e)) {
    const c = u => {
      const f = yo(u, t, !0)
      f && ((o = !0), st(a, f))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !l && !o
    ? (Ne(e) && i.set(e, null), null)
    : (de(l) ? l.forEach(c => (a[c] = null)) : st(a, l),
      Ne(e) && i.set(e, a),
      a)
}
function Xi(e, t) {
  return !e || !Vi(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, G1(t)) || xe(e, t))
}
function Pl(e) {
  const {
      type: t,
      vnode: n,
      proxy: i,
      withProxy: s,
      propsOptions: [l],
      slots: a,
      attrs: o,
      emit: c,
      render: u,
      renderCache: f,
      props: p,
      data: v,
      setupState: g,
      ctx: y,
      inheritAttrs: T,
    } = e,
    k = Li(e)
  let x, M
  try {
    if (n.shapeFlag & 4) {
      const R = s || i,
        N = R
      ;(x = Xt(u.call(N, R, f, p, g, v, y))), (M = o)
    } else {
      const R = t
      ;(x = Xt(
        R.length > 1 ? R(p, { attrs: o, slots: a, emit: c }) : R(p, null)
      )),
        (M = t.props ? o : O0(o))
    }
  } catch (R) {
    ;(Fn.length = 0), Ki(R, e, 1), (x = ke(j1))
  }
  let C = x
  if (M && T !== !1) {
    const R = Object.keys(M),
      { shapeFlag: N } = C
    R.length &&
      N & 7 &&
      (l && R.some(_2) && (M = I0(M, l)), (C = bn(C, M, !1, !0)))
  }
  return (
    n.dirs &&
      ((C = bn(C, null, !1, !0)),
      (C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs)),
    n.transition && D2(C, n.transition),
    (x = C),
    Li(k),
    x
  )
}
const O0 = e => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Vi(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  I0 = (e, t) => {
    const n = {}
    for (const i in e) (!_2(i) || !(i.slice(9) in t)) && (n[i] = e[i])
    return n
  }
function L0(e, t, n) {
  const { props: i, children: s, component: l } = e,
    { props: a, children: o, patchFlag: c } = t,
    u = l.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return i ? Al(i, a, u) : !!a
    if (c & 8) {
      const f = t.dynamicProps
      for (let p = 0; p < f.length; p++) {
        const v = f[p]
        if (a[v] !== i[v] && !Xi(u, v)) return !0
      }
    }
  } else
    return (s || o) && (!o || !o.$stable)
      ? !0
      : i === a
        ? !1
        : i
          ? a
            ? Al(i, a, u)
            : !0
          : !!a
  return !1
}
function Al(e, t, n) {
  const i = Object.keys(t)
  if (i.length !== Object.keys(e).length) return !0
  for (let s = 0; s < i.length; s++) {
    const l = i[s]
    if (t[l] !== e[l] && !Xi(n, l)) return !0
  }
  return !1
}
function D0({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree
    if ((i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const So = e => e.__isSuspense
function R0(e, t) {
  t && t.pendingBranch
    ? de(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : U4(e)
}
const It = Symbol.for('v-fgt'),
  Qi = Symbol.for('v-txt'),
  j1 = Symbol.for('v-cmt'),
  Ei = Symbol.for('v-stc'),
  Fn = []
let Et = null
function mt(e = !1) {
  Fn.push((Et = e ? null : []))
}
function $0() {
  Fn.pop(), (Et = Fn[Fn.length - 1] || null)
}
let qn = 1
function Ol(e, t = !1) {
  ;(qn += e), e < 0 && Et && t && (Et.hasOnce = !0)
}
function Eo(e) {
  return (
    (e.dynamicChildren = qn > 0 ? Et || fn : null),
    $0(),
    qn > 0 && Et && Et.push(e),
    e
  )
}
function Jt(e, t, n, i, s, l) {
  return Eo(xt(e, t, n, i, s, l, !0))
}
function $i(e, t, n, i, s) {
  return Eo(ke(e, t, n, i, s, !0))
}
function ki(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function On(e, t) {
  return e.type === t.type && e.key === t.key
}
const xo = ({ key: e }) => e ?? null,
  xi = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? We(e) || it(e) || pe(e)
        ? { i: St, r: e, k: t, f: !!n }
        : e
      : null
  )
function xt(
  e,
  t = null,
  n = null,
  i = 0,
  s = null,
  l = e === It ? 0 : 1,
  a = !1,
  o = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xo(t),
    ref: t && xi(t),
    scopeId: Za,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: St,
  }
  return (
    o
      ? (B2(c, n), l & 128 && e.normalize(c))
      : n && (c.shapeFlag |= We(n) ? 8 : 16),
    qn > 0 &&
      !a &&
      Et &&
      (c.patchFlag > 0 || l & 6) &&
      c.patchFlag !== 32 &&
      Et.push(c),
    c
  )
}
const ke = k0
function k0(e, t = null, n = null, i = 0, s = null, l = !1) {
  if (((!e || e === r0) && (e = j1), ki(e))) {
    const o = bn(e, t, !0)
    return (
      n && B2(o, n),
      qn > 0 &&
        !l &&
        Et &&
        (o.shapeFlag & 6 ? (Et[Et.indexOf(e)] = o) : Et.push(o)),
      (o.patchFlag = -2),
      o
    )
  }
  if ((X0(e) && (e = e.__vccOpts), t)) {
    t = B0(t)
    let { class: o, style: c } = t
    o && !We(o) && (t.class = E2(o)),
      Ne(c) && (O2(c) && !de(c) && (c = st({}, c)), (t.style = S2(c)))
  }
  const a = We(e) ? 1 : So(e) ? 128 : Y4(e) ? 64 : Ne(e) ? 4 : pe(e) ? 2 : 0
  return xt(e, t, n, i, s, a, l, !0)
}
function B0(e) {
  return e ? (O2(e) || fo(e) ? st({}, e) : e) : null
}
function bn(e, t, n = !1, i = !1) {
  const { props: s, ref: l, patchFlag: a, children: o, transition: c } = e,
    u = t ? V0(s || {}, t) : s,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && xo(u),
      ref:
        t && t.ref
          ? n && l
            ? de(l)
              ? l.concat(xi(t))
              : [l, xi(t)]
            : xi(t)
          : l,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: o,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== It ? (a === -1 ? 16 : a | 16) : a,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && bn(e.ssContent),
      ssFallback: e.ssFallback && bn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return c && i && D2(f, c.clone(f)), f
}
function Ti(e = ' ', t = 0) {
  return ke(Qi, null, e, t)
}
function N0(e, t) {
  const n = ke(Ei, null, e)
  return (n.staticCount = t), n
}
function F0(e = '', t = !1) {
  return t ? (mt(), $i(j1, null, e)) : ke(j1, null, e)
}
function Xt(e) {
  return e == null || typeof e == 'boolean'
    ? ke(j1)
    : de(e)
      ? ke(It, null, e.slice())
      : ki(e)
        ? v1(e)
        : ke(Qi, null, String(e))
}
function v1(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : bn(e)
}
function B2(e, t) {
  let n = 0
  const { shapeFlag: i } = e
  if (t == null) t = null
  else if (de(t)) n = 16
  else if (typeof t == 'object')
    if (i & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), B2(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !fo(t)
        ? (t._ctx = St)
        : s === 3 &&
          St &&
          (St.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    pe(t)
      ? ((t = { default: t, _ctx: St }), (n = 32))
      : ((t = String(t)), i & 64 ? ((n = 16), (t = [Ti(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function V0(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const i = e[n]
    for (const s in i)
      if (s === 'class')
        t.class !== i.class && (t.class = E2([t.class, i.class]))
      else if (s === 'style') t.style = S2([t.style, i.style])
      else if (Vi(s)) {
        const l = t[s],
          a = i[s]
        a &&
          l !== a &&
          !(de(l) && l.includes(a)) &&
          (t[s] = l ? [].concat(l, a) : a)
      } else s !== '' && (t[s] = i[s])
  }
  return t
}
function Kt(e, t, n, i = null) {
  Zt(e, t, 7, [n, i])
}
const j0 = ao()
let H0 = 0
function G0(e, t, n) {
  const i = e.type,
    s = (t ? t.appContext : e.appContext) || j0,
    l = {
      uid: H0++,
      vnode: e,
      type: i,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new g4(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ho(i, s),
      emitsOptions: yo(i, s),
      emit: null,
      emitted: null,
      propsDefaults: De,
      inheritAttrs: i.inheritAttrs,
      ctx: De,
      data: De,
      props: De,
      attrs: De,
      slots: De,
      refs: De,
      setupState: De,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (l.ctx = { _: l }),
    (l.root = t ? t.root : l),
    (l.emit = A0.bind(null, l)),
    e.ce && e.ce(l),
    l
  )
}
let nt = null,
  Bi,
  d2
{
  const e = Wi(),
    t = (n, i) => {
      let s
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(i),
        l => {
          s.length > 1 ? s.forEach(a => a(l)) : s[0](l)
        }
      )
    }
  ;(Bi = t('__VUE_INSTANCE_SETTERS__', n => (nt = n))),
    (d2 = t('__VUE_SSR_SETTERS__', n => (Un = n)))
}
const Jn = e => {
    const t = nt
    return (
      Bi(e),
      e.scope.on(),
      () => {
        e.scope.off(), Bi(t)
      }
    )
  },
  Il = () => {
    nt && nt.scope.off(), Bi(null)
  }
function To(e) {
  return e.vnode.shapeFlag & 4
}
let Un = !1
function W0(e, t = !1, n = !1) {
  t && d2(t)
  const { props: i, children: s } = e.vnode,
    l = To(e)
  v0(e, i, l, t), _0(e, s, n)
  const a = l ? q0(e, t) : void 0
  return t && d2(!1), a
}
function q0(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, o0))
  const { setup: i } = n
  if (i) {
    w1()
    const s = (e.setupContext = i.length > 1 ? K0(e) : null),
      l = Jn(e),
      a = Xn(i, e, 0, [e.props, s]),
      o = Ea(a)
    if ((y1(), l(), (o || e.sp) && !kn(e) && eo(e), o)) {
      if ((a.then(Il, Il), t))
        return a
          .then(c => {
            Ll(e, c)
          })
          .catch(c => {
            Ki(c, e, 0)
          })
      e.asyncDep = a
    } else Ll(e, a)
  } else Mo(e)
}
function Ll(e, t, n) {
  pe(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ne(t) && (e.setupState = Ka(t)),
    Mo(e)
}
function Mo(e, t, n) {
  const i = e.type
  e.render || (e.render = i.render || Qt)
  {
    const s = Jn(e)
    w1()
    try {
      c0(e)
    } finally {
      y1(), s()
    }
  }
}
const U0 = {
  get(e, t) {
    return et(e, 'get', ''), e[t]
  },
}
function K0(e) {
  const t = n => {
    e.exposed = n || {}
  }
  return {
    attrs: new Proxy(e.attrs, U0),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Ji(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ka(k4(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Bn) return Bn[n](e)
          },
          has(t, n) {
            return n in t || n in Bn
          },
        }))
    : e.proxy
}
function Y0(e, t = !0) {
  return pe(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function X0(e) {
  return pe(e) && '__vccOpts' in e
}
const Lt = (e, t) => j4(e, t, Un)
function pt(e, t, n) {
  const i = arguments.length
  return i === 2
    ? Ne(t) && !de(t)
      ? ki(t)
        ? ke(e, null, [t])
        : ke(e, t)
      : ke(e, null, t)
    : (i > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : i === 3 && ki(n) && (n = [n]),
      ke(e, t, n))
}
const Q0 = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let f2
const Dl = typeof window < 'u' && window.trustedTypes
if (Dl)
  try {
    f2 = Dl.createPolicy('vue', { createHTML: e => e })
  } catch {}
const Co = f2 ? e => f2.createHTML(e) : e => e,
  J0 = 'http://www.w3.org/2000/svg',
  Z0 = 'http://www.w3.org/1998/Math/MathML',
  l1 = typeof document < 'u' ? document : null,
  Rl = l1 && l1.createElement('template'),
  ed = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, i) => {
      const s =
        t === 'svg'
          ? l1.createElementNS(J0, e)
          : t === 'mathml'
            ? l1.createElementNS(Z0, e)
            : n
              ? l1.createElement(e, { is: n })
              : l1.createElement(e)
      return (
        e === 'select' &&
          i &&
          i.multiple != null &&
          s.setAttribute('multiple', i.multiple),
        s
      )
    },
    createText: e => l1.createTextNode(e),
    createComment: e => l1.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => l1.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, i, s, l) {
      const a = n ? n.previousSibling : t.lastChild
      if (s && (s === l || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === l || !(s = s.nextSibling));

        );
      else {
        Rl.innerHTML = Co(
          i === 'svg'
            ? `<svg>${e}</svg>`
            : i === 'mathml'
              ? `<math>${e}</math>`
              : e
        )
        const o = Rl.content
        if (i === 'svg' || i === 'mathml') {
          const c = o.firstChild
          for (; c.firstChild; ) o.appendChild(c.firstChild)
          o.removeChild(c)
        }
        t.insertBefore(o, n)
      }
      return [
        a ? a.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  td = Symbol('_vtc')
function nd(e, t, n) {
  const i = e[td]
  i && (t = (t ? [t, ...i] : [...i]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const $l = Symbol('_vod'),
  id = Symbol('_vsh'),
  sd = Symbol(''),
  rd = /(^|;)\s*display\s*:/
function ld(e, t, n) {
  const i = e.style,
    s = We(n)
  let l = !1
  if (n && !s) {
    if (t)
      if (We(t))
        for (const a of t.split(';')) {
          const o = a.slice(0, a.indexOf(':')).trim()
          n[o] == null && Mi(i, o, '')
        }
      else for (const a in t) n[a] == null && Mi(i, a, '')
    for (const a in n) a === 'display' && (l = !0), Mi(i, a, n[a])
  } else if (s) {
    if (t !== n) {
      const a = i[sd]
      a && (n += ';' + a), (i.cssText = n), (l = rd.test(n))
    }
  } else t && e.removeAttribute('style')
  $l in e && ((e[$l] = l ? i.display : ''), e[id] && (i.display = 'none'))
}
const kl = /\s*!important$/
function Mi(e, t, n) {
  if (de(n)) n.forEach(i => Mi(e, t, i))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const i = ad(e, t)
    kl.test(n)
      ? e.setProperty(G1(i), n.replace(kl, ''), 'important')
      : (e[i] = n)
  }
}
const Bl = ['Webkit', 'Moz', 'ms'],
  Fs = {}
function ad(e, t) {
  const n = Fs[t]
  if (n) return n
  let i = Rt(t)
  if (i !== 'filter' && i in e) return (Fs[t] = i)
  i = Gi(i)
  for (let s = 0; s < Bl.length; s++) {
    const l = Bl[s] + i
    if (l in e) return (Fs[t] = l)
  }
  return t
}
const Nl = 'http://www.w3.org/1999/xlink'
function Fl(e, t, n, i, s, l = v4(t)) {
  i && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Nl, t.slice(6, t.length))
      : e.setAttributeNS(Nl, t, n)
    : n == null || (l && !Ca(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, l ? '' : _1(n) ? String(n) : n)
}
function Vl(e, t, n, i, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Co(n) : n)
    return
  }
  const l = e.tagName
  if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
    const o = l === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;(o !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n)
    return
  }
  let a = !1
  if (n === '' || n == null) {
    const o = typeof e[t]
    o === 'boolean'
      ? (n = Ca(n))
      : n == null && o === 'string'
        ? ((n = ''), (a = !0))
        : o === 'number' && ((n = 0), (a = !0))
  }
  try {
    e[t] = n
  } catch {}
  a && e.removeAttribute(s || t)
}
function cn(e, t, n, i) {
  e.addEventListener(t, n, i)
}
function od(e, t, n, i) {
  e.removeEventListener(t, n, i)
}
const jl = Symbol('_vei')
function cd(e, t, n, i, s = null) {
  const l = e[jl] || (e[jl] = {}),
    a = l[t]
  if (i && a) a.value = i
  else {
    const [o, c] = dd(t)
    if (i) {
      const u = (l[t] = hd(i, s))
      cn(e, o, u, c)
    } else a && (od(e, o, a, c), (l[t] = void 0))
  }
}
const Hl = /(?:Once|Passive|Capture)$/
function dd(e) {
  let t
  if (Hl.test(e)) {
    t = {}
    let i
    for (; (i = e.match(Hl)); )
      (e = e.slice(0, e.length - i[0].length)), (t[i[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : G1(e.slice(2)), t]
}
let Vs = 0
const fd = Promise.resolve(),
  ud = () => Vs || (fd.then(() => (Vs = 0)), (Vs = Date.now()))
function hd(e, t) {
  const n = i => {
    if (!i._vts) i._vts = Date.now()
    else if (i._vts <= n.attached) return
    Zt(pd(i, n.value), t, 5, [i])
  }
  return (n.value = e), (n.attached = ud()), n
}
function pd(e, t) {
  if (de(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map(i => s => !s._stopped && i && i(s))
    )
  } else return t
}
const Gl = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  md = (e, t, n, i, s, l) => {
    const a = s === 'svg'
    t === 'class'
      ? nd(e, i, a)
      : t === 'style'
        ? ld(e, n, i)
        : Vi(t)
          ? _2(t) || cd(e, t, n, i, l)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : vd(e, t, i, a)
              )
            ? (Vl(e, t, i),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Fl(e, t, i, a, l, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !We(i))
              ? Vl(e, Rt(t), i, l, t)
              : (t === 'true-value'
                  ? (e._trueValue = i)
                  : t === 'false-value' && (e._falseValue = i),
                Fl(e, t, i, a))
  }
function vd(e, t, n, i) {
  if (i)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Gl(t) && pe(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const s = e.tagName
    if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE')
      return !1
  }
  return Gl(t) && We(n) ? !1 : t in e
}
const Wl = e => {
  const t = e.props['onUpdate:modelValue'] || !1
  return de(t) ? n => Si(t, n) : t
}
function gd(e) {
  e.target.composing = !0
}
function ql(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const js = Symbol('_assign'),
  Uu = {
    created(e, { modifiers: { lazy: t, trim: n, number: i } }, s) {
      e[js] = Wl(s)
      const l = i || (s.props && s.props.type === 'number')
      cn(e, t ? 'change' : 'input', a => {
        if (a.target.composing) return
        let o = e.value
        n && (o = o.trim()), l && (o = e2(o)), e[js](o)
      }),
        n &&
          cn(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (cn(e, 'compositionstart', gd),
          cn(e, 'compositionend', ql),
          cn(e, 'change', ql))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: i, trim: s, number: l } },
      a
    ) {
      if (((e[js] = Wl(a)), e.composing)) return
      const o =
          (l || e.type === 'number') && !/^0\d/.test(e.value)
            ? e2(e.value)
            : e.value,
        c = t ?? ''
      o !== c &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          ((i && t === n) || (s && e.value.trim() === c))) ||
          (e.value = c))
    },
  },
  zd = ['ctrl', 'shift', 'alt', 'meta'],
  bd = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, t) => zd.some(n => e[`${n}Key`] && !t.includes(n)),
  },
  Ul = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      i = t.join('.')
    return (
      n[i] ||
      (n[i] = (s, ...l) => {
        for (let a = 0; a < t.length; a++) {
          const o = bd[t[a]]
          if (o && o(s, t)) return
        }
        return e(s, ...l)
      })
    )
  },
  _d = st({ patchProp: md }, ed)
let Kl
function wd() {
  return Kl || (Kl = y0(_d))
}
const yd = (...e) => {
  const t = wd().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = i => {
      const s = Ed(i)
      if (!s) return
      const l = t._component
      !pe(l) && !l.render && !l.template && (l.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = '')
      const a = n(s, !1, Sd(s))
      return (
        s instanceof Element &&
          (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
        a
      )
    }),
    t
  )
}
function Sd(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function Ed(e) {
  return We(e) ? document.querySelector(e) : e
}
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const dn = typeof document < 'u'
function Po(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function xd(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === 'Module' ||
    (e.default && Po(e.default))
  )
}
const Se = Object.assign
function Hs(e, t) {
  const n = {}
  for (const i in t) {
    const s = t[i]
    n[i] = Vt(s) ? s.map(e) : e(s)
  }
  return n
}
const Vn = () => {},
  Vt = Array.isArray,
  Ao = /#/g,
  Td = /&/g,
  Md = /\//g,
  Cd = /=/g,
  Pd = /\?/g,
  Oo = /\+/g,
  Ad = /%5B/g,
  Od = /%5D/g,
  Io = /%5E/g,
  Id = /%60/g,
  Lo = /%7B/g,
  Ld = /%7C/g,
  Do = /%7D/g,
  Dd = /%20/g
function N2(e) {
  return encodeURI('' + e)
    .replace(Ld, '|')
    .replace(Ad, '[')
    .replace(Od, ']')
}
function Rd(e) {
  return N2(e).replace(Lo, '{').replace(Do, '}').replace(Io, '^')
}
function u2(e) {
  return N2(e)
    .replace(Oo, '%2B')
    .replace(Dd, '+')
    .replace(Ao, '%23')
    .replace(Td, '%26')
    .replace(Id, '`')
    .replace(Lo, '{')
    .replace(Do, '}')
    .replace(Io, '^')
}
function $d(e) {
  return u2(e).replace(Cd, '%3D')
}
function kd(e) {
  return N2(e).replace(Ao, '%23').replace(Pd, '%3F')
}
function Bd(e) {
  return e == null ? '' : kd(e).replace(Md, '%2F')
}
function Kn(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Nd = /\/$/,
  Fd = e => e.replace(Nd, '')
function Gs(e, t, n = '/') {
  let i,
    s = {},
    l = '',
    a = ''
  const o = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    o < c && o >= 0 && (c = -1),
    c > -1 &&
      ((i = t.slice(0, c)),
      (l = t.slice(c + 1, o > -1 ? o : t.length)),
      (s = e(l))),
    o > -1 && ((i = i || t.slice(0, o)), (a = t.slice(o, t.length))),
    (i = Gd(i ?? t, n)),
    { fullPath: i + (l && '?') + l + a, path: i, query: s, hash: Kn(a) }
  )
}
function Vd(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Yl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function jd(e, t, n) {
  const i = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    i > -1 &&
    i === s &&
    _n(t.matched[i], n.matched[s]) &&
    Ro(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function _n(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Ro(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Hd(e[n], t[n])) return !1
  return !0
}
function Hd(e, t) {
  return Vt(e) ? Xl(e, t) : Vt(t) ? Xl(t, e) : e === t
}
function Xl(e, t) {
  return Vt(t)
    ? e.length === t.length && e.every((n, i) => n === t[i])
    : e.length === 1 && e[0] === t
}
function Gd(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    i = e.split('/'),
    s = i[i.length - 1]
  ;(s === '..' || s === '.') && i.push('')
  let l = n.length - 1,
    a,
    o
  for (a = 0; a < i.length; a++)
    if (((o = i[a]), o !== '.'))
      if (o === '..') l > 1 && l--
      else break
  return n.slice(0, l).join('/') + '/' + i.slice(a).join('/')
}
const p1 = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var Yn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Yn || (Yn = {}))
var jn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(jn || (jn = {}))
function Wd(e) {
  if (!e)
    if (dn) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Fd(e)
}
const qd = /^[^#]+#/
function Ud(e, t) {
  return e.replace(qd, '#') + t
}
function Kd(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    i = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: i.left - n.left - (t.left || 0),
    top: i.top - n.top - (t.top || 0),
  }
}
const Zi = () => ({ left: window.scrollX, top: window.scrollY })
function Yd(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      i = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? i
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!s) return
    t = Kd(s, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function Ql(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const h2 = new Map()
function Xd(e, t) {
  h2.set(e, t)
}
function Qd(e) {
  const t = h2.get(e)
  return h2.delete(e), t
}
let Jd = () => location.protocol + '//' + location.host
function $o(e, t) {
  const { pathname: n, search: i, hash: s } = t,
    l = e.indexOf('#')
  if (l > -1) {
    let o = s.includes(e.slice(l)) ? e.slice(l).length : 1,
      c = s.slice(o)
    return c[0] !== '/' && (c = '/' + c), Yl(c, '')
  }
  return Yl(n, e) + i + s
}
function Zd(e, t, n, i) {
  let s = [],
    l = [],
    a = null
  const o = ({ state: v }) => {
    const g = $o(e, location),
      y = n.value,
      T = t.value
    let k = 0
    if (v) {
      if (((n.value = g), (t.value = v), a && a === y)) {
        a = null
        return
      }
      k = T ? v.position - T.position : 0
    } else i(g)
    s.forEach(x => {
      x(n.value, y, {
        delta: k,
        type: Yn.pop,
        direction: k ? (k > 0 ? jn.forward : jn.back) : jn.unknown,
      })
    })
  }
  function c() {
    a = n.value
  }
  function u(v) {
    s.push(v)
    const g = () => {
      const y = s.indexOf(v)
      y > -1 && s.splice(y, 1)
    }
    return l.push(g), g
  }
  function f() {
    const { history: v } = window
    v.state && v.replaceState(Se({}, v.state, { scroll: Zi() }), '')
  }
  function p() {
    for (const v of l) v()
    ;(l = []),
      window.removeEventListener('popstate', o),
      window.removeEventListener('beforeunload', f)
  }
  return (
    window.addEventListener('popstate', o),
    window.addEventListener('beforeunload', f, { passive: !0 }),
    { pauseListeners: c, listen: u, destroy: p }
  )
}
function Jl(e, t, n, i = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: i,
    position: window.history.length,
    scroll: s ? Zi() : null,
  }
}
function ef(e) {
  const { history: t, location: n } = window,
    i = { value: $o(e, n) },
    s = { value: t.state }
  s.value ||
    l(
      i.value,
      {
        back: null,
        current: i.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    )
  function l(c, u, f) {
    const p = e.indexOf('#'),
      v =
        p > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(p)) + c
          : Jd() + e + c
    try {
      t[f ? 'replaceState' : 'pushState'](u, '', v), (s.value = u)
    } catch (g) {
      console.error(g), n[f ? 'replace' : 'assign'](v)
    }
  }
  function a(c, u) {
    const f = Se({}, t.state, Jl(s.value.back, c, s.value.forward, !0), u, {
      position: s.value.position,
    })
    l(c, f, !0), (i.value = c)
  }
  function o(c, u) {
    const f = Se({}, s.value, t.state, { forward: c, scroll: Zi() })
    l(f.current, f, !0)
    const p = Se({}, Jl(i.value, c, null), { position: f.position + 1 }, u)
    l(c, p, !1), (i.value = c)
  }
  return { location: i, state: s, push: o, replace: a }
}
function tf(e) {
  e = Wd(e)
  const t = ef(e),
    n = Zd(e, t.state, t.location, t.replace)
  function i(l, a = !0) {
    a || n.pauseListeners(), history.go(l)
  }
  const s = Se(
    { location: '', base: e, go: i, createHref: Ud.bind(null, e) },
    t,
    n
  )
  return (
    Object.defineProperty(s, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  )
}
function nf(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function ko(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Bo = Symbol('')
var Zl
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Zl || (Zl = {}))
function wn(e, t) {
  return Se(new Error(), { type: e, [Bo]: !0 }, t)
}
function s1(e, t) {
  return e instanceof Error && Bo in e && (t == null || !!(e.type & t))
}
const ea = '[^/]+?',
  sf = { sensitive: !1, strict: !1, start: !0, end: !0 },
  rf = /[.+*?^${}()[\]/\\]/g
function lf(e, t) {
  const n = Se({}, sf, t),
    i = []
  let s = n.start ? '^' : ''
  const l = []
  for (const u of e) {
    const f = u.length ? [] : [90]
    n.strict && !u.length && (s += '/')
    for (let p = 0; p < u.length; p++) {
      const v = u[p]
      let g = 40 + (n.sensitive ? 0.25 : 0)
      if (v.type === 0)
        p || (s += '/'), (s += v.value.replace(rf, '\\$&')), (g += 40)
      else if (v.type === 1) {
        const { value: y, repeatable: T, optional: k, regexp: x } = v
        l.push({ name: y, repeatable: T, optional: k })
        const M = x || ea
        if (M !== ea) {
          g += 10
          try {
            new RegExp(`(${M})`)
          } catch (R) {
            throw new Error(
              `Invalid custom RegExp for param "${y}" (${M}): ` + R.message
            )
          }
        }
        let C = T ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`
        p || (C = k && u.length < 2 ? `(?:/${C})` : '/' + C),
          k && (C += '?'),
          (s += C),
          (g += 20),
          k && (g += -8),
          T && (g += -20),
          M === '.*' && (g += -50)
      }
      f.push(g)
    }
    i.push(f)
  }
  if (n.strict && n.end) {
    const u = i.length - 1
    i[u][i[u].length - 1] += 0.7000000000000001
  }
  n.strict || (s += '/?'),
    n.end ? (s += '$') : n.strict && !s.endsWith('/') && (s += '(?:/|$)')
  const a = new RegExp(s, n.sensitive ? '' : 'i')
  function o(u) {
    const f = u.match(a),
      p = {}
    if (!f) return null
    for (let v = 1; v < f.length; v++) {
      const g = f[v] || '',
        y = l[v - 1]
      p[y.name] = g && y.repeatable ? g.split('/') : g
    }
    return p
  }
  function c(u) {
    let f = '',
      p = !1
    for (const v of e) {
      ;(!p || !f.endsWith('/')) && (f += '/'), (p = !1)
      for (const g of v)
        if (g.type === 0) f += g.value
        else if (g.type === 1) {
          const { value: y, repeatable: T, optional: k } = g,
            x = y in u ? u[y] : ''
          if (Vt(x) && !T)
            throw new Error(
              `Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`
            )
          const M = Vt(x) ? x.join('/') : x
          if (!M)
            if (k)
              v.length < 2 &&
                (f.endsWith('/') ? (f = f.slice(0, -1)) : (p = !0))
            else throw new Error(`Missing required param "${y}"`)
          f += M
        }
    }
    return f || '/'
  }
  return { re: a, score: i, keys: l, parse: o, stringify: c }
}
function af(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const i = t[n] - e[n]
    if (i) return i
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function No(e, t) {
  let n = 0
  const i = e.score,
    s = t.score
  for (; n < i.length && n < s.length; ) {
    const l = af(i[n], s[n])
    if (l) return l
    n++
  }
  if (Math.abs(s.length - i.length) === 1) {
    if (ta(i)) return 1
    if (ta(s)) return -1
  }
  return s.length - i.length
}
function ta(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const of = { type: 0, value: '' },
  cf = /[a-zA-Z0-9_]/
function df(e) {
  if (!e) return [[]]
  if (e === '/') return [[of]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(g) {
    throw new Error(`ERR (${n})/"${u}": ${g}`)
  }
  let n = 0,
    i = n
  const s = []
  let l
  function a() {
    l && s.push(l), (l = [])
  }
  let o = 0,
    c,
    u = '',
    f = ''
  function p() {
    u &&
      (n === 0
        ? l.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
          ? (l.length > 1 &&
              (c === '*' || c === '+') &&
              t(
                `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
              ),
            l.push({
              type: 1,
              value: u,
              regexp: f,
              repeatable: c === '*' || c === '+',
              optional: c === '*' || c === '?',
            }))
          : t('Invalid state to consume buffer'),
      (u = ''))
  }
  function v() {
    u += c
  }
  for (; o < e.length; ) {
    if (((c = e[o++]), c === '\\' && n !== 2)) {
      ;(i = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        c === '/' ? (u && p(), a()) : c === ':' ? (p(), (n = 1)) : v()
        break
      case 4:
        v(), (n = i)
        break
      case 1:
        c === '('
          ? (n = 2)
          : cf.test(c)
            ? v()
            : (p(), (n = 0), c !== '*' && c !== '?' && c !== '+' && o--)
        break
      case 2:
        c === ')'
          ? f[f.length - 1] == '\\'
            ? (f = f.slice(0, -1) + c)
            : (n = 3)
          : (f += c)
        break
      case 3:
        p(), (n = 0), c !== '*' && c !== '?' && c !== '+' && o--, (f = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), p(), a(), s
}
function ff(e, t, n) {
  const i = lf(df(e.path), n),
    s = Se(i, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function uf(e, t) {
  const n = [],
    i = new Map()
  t = ra({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(p) {
    return i.get(p)
  }
  function l(p, v, g) {
    const y = !g,
      T = ia(p)
    T.aliasOf = g && g.record
    const k = ra(t, p),
      x = [T]
    if ('alias' in p) {
      const R = typeof p.alias == 'string' ? [p.alias] : p.alias
      for (const N of R)
        x.push(
          ia(
            Se({}, T, {
              components: g ? g.record.components : T.components,
              path: N,
              aliasOf: g ? g.record : T,
            })
          )
        )
    }
    let M, C
    for (const R of x) {
      const { path: N } = R
      if (v && N[0] !== '/') {
        const ie = v.record.path,
          Q = ie[ie.length - 1] === '/' ? '' : '/'
        R.path = v.record.path + (N && Q + N)
      }
      if (
        ((M = ff(R, v, k)),
        g
          ? g.alias.push(M)
          : ((C = C || M),
            C !== M && C.alias.push(M),
            y && p.name && !sa(M) && a(p.name)),
        Fo(M) && c(M),
        T.children)
      ) {
        const ie = T.children
        for (let Q = 0; Q < ie.length; Q++) l(ie[Q], M, g && g.children[Q])
      }
      g = g || M
    }
    return C
      ? () => {
          a(C)
        }
      : Vn
  }
  function a(p) {
    if (ko(p)) {
      const v = i.get(p)
      v &&
        (i.delete(p),
        n.splice(n.indexOf(v), 1),
        v.children.forEach(a),
        v.alias.forEach(a))
    } else {
      const v = n.indexOf(p)
      v > -1 &&
        (n.splice(v, 1),
        p.record.name && i.delete(p.record.name),
        p.children.forEach(a),
        p.alias.forEach(a))
    }
  }
  function o() {
    return n
  }
  function c(p) {
    const v = mf(p, n)
    n.splice(v, 0, p), p.record.name && !sa(p) && i.set(p.record.name, p)
  }
  function u(p, v) {
    let g,
      y = {},
      T,
      k
    if ('name' in p && p.name) {
      if (((g = i.get(p.name)), !g)) throw wn(1, { location: p })
      ;(k = g.record.name),
        (y = Se(
          na(
            v.params,
            g.keys
              .filter(C => !C.optional)
              .concat(g.parent ? g.parent.keys.filter(C => C.optional) : [])
              .map(C => C.name)
          ),
          p.params &&
            na(
              p.params,
              g.keys.map(C => C.name)
            )
        )),
        (T = g.stringify(y))
    } else if (p.path != null)
      (T = p.path),
        (g = n.find(C => C.re.test(T))),
        g && ((y = g.parse(T)), (k = g.record.name))
    else {
      if (((g = v.name ? i.get(v.name) : n.find(C => C.re.test(v.path))), !g))
        throw wn(1, { location: p, currentLocation: v })
      ;(k = g.record.name),
        (y = Se({}, v.params, p.params)),
        (T = g.stringify(y))
    }
    const x = []
    let M = g
    for (; M; ) x.unshift(M.record), (M = M.parent)
    return { name: k, path: T, params: y, matched: x, meta: pf(x) }
  }
  e.forEach(p => l(p))
  function f() {
    ;(n.length = 0), i.clear()
  }
  return {
    addRoute: l,
    resolve: u,
    removeRoute: a,
    clearRoutes: f,
    getRoutes: o,
    getRecordMatcher: s,
  }
}
function na(e, t) {
  const n = {}
  for (const i of t) i in e && (n[i] = e[i])
  return n
}
function ia(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: hf(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  }
  return Object.defineProperty(t, 'mods', { value: {} }), t
}
function hf(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const i in e.components) t[i] = typeof n == 'object' ? n[i] : n
  return t
}
function sa(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function pf(e) {
  return e.reduce((t, n) => Se(t, n.meta), {})
}
function ra(e, t) {
  const n = {}
  for (const i in e) n[i] = i in t ? t[i] : e[i]
  return n
}
function mf(e, t) {
  let n = 0,
    i = t.length
  for (; n !== i; ) {
    const l = (n + i) >> 1
    No(e, t[l]) < 0 ? (i = l) : (n = l + 1)
  }
  const s = vf(e)
  return s && (i = t.lastIndexOf(s, i - 1)), i
}
function vf(e) {
  let t = e
  for (; (t = t.parent); ) if (Fo(t) && No(e, t) === 0) return t
}
function Fo({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  )
}
function gf(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const i = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let s = 0; s < i.length; ++s) {
    const l = i[s].replace(Oo, ' '),
      a = l.indexOf('='),
      o = Kn(a < 0 ? l : l.slice(0, a)),
      c = a < 0 ? null : Kn(l.slice(a + 1))
    if (o in t) {
      let u = t[o]
      Vt(u) || (u = t[o] = [u]), u.push(c)
    } else t[o] = c
  }
  return t
}
function la(e) {
  let t = ''
  for (let n in e) {
    const i = e[n]
    if (((n = $d(n)), i == null)) {
      i !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Vt(i) ? i.map(l => l && u2(l)) : [i && u2(i)]).forEach(l => {
      l !== void 0 &&
        ((t += (t.length ? '&' : '') + n), l != null && (t += '=' + l))
    })
  }
  return t
}
function zf(e) {
  const t = {}
  for (const n in e) {
    const i = e[n]
    i !== void 0 &&
      (t[n] = Vt(i)
        ? i.map(s => (s == null ? null : '' + s))
        : i == null
          ? i
          : '' + i)
  }
  return t
}
const bf = Symbol(''),
  aa = Symbol(''),
  es = Symbol(''),
  F2 = Symbol(''),
  p2 = Symbol('')
function In() {
  let e = []
  function t(i) {
    return (
      e.push(i),
      () => {
        const s = e.indexOf(i)
        s > -1 && e.splice(s, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function g1(e, t, n, i, s, l = a => a()) {
  const a = i && (i.enterCallbacks[s] = i.enterCallbacks[s] || [])
  return () =>
    new Promise((o, c) => {
      const u = v => {
          v === !1
            ? c(wn(4, { from: n, to: t }))
            : v instanceof Error
              ? c(v)
              : nf(v)
                ? c(wn(2, { from: t, to: v }))
                : (a &&
                    i.enterCallbacks[s] === a &&
                    typeof v == 'function' &&
                    a.push(v),
                  o())
        },
        f = l(() => e.call(i && i.instances[s], t, n, u))
      let p = Promise.resolve(f)
      e.length < 3 && (p = p.then(u)), p.catch(v => c(v))
    })
}
function Ws(e, t, n, i, s = l => l()) {
  const l = []
  for (const a of e)
    for (const o in a.components) {
      let c = a.components[o]
      if (!(t !== 'beforeRouteEnter' && !a.instances[o]))
        if (Po(c)) {
          const f = (c.__vccOpts || c)[t]
          f && l.push(g1(f, n, i, a, o, s))
        } else {
          let u = c()
          l.push(() =>
            u.then(f => {
              if (!f)
                throw new Error(
                  `Couldn't resolve component "${o}" at "${a.path}"`
                )
              const p = xd(f) ? f.default : f
              ;(a.mods[o] = f), (a.components[o] = p)
              const g = (p.__vccOpts || p)[t]
              return g && g1(g, n, i, a, o, s)()
            })
          )
        }
    }
  return l
}
function oa(e) {
  const t = Ft(es),
    n = Ft(F2),
    i = Lt(() => {
      const c = pn(e.to)
      return t.resolve(c)
    }),
    s = Lt(() => {
      const { matched: c } = i.value,
        { length: u } = c,
        f = c[u - 1],
        p = n.matched
      if (!f || !p.length) return -1
      const v = p.findIndex(_n.bind(null, f))
      if (v > -1) return v
      const g = ca(c[u - 2])
      return u > 1 && ca(f) === g && p[p.length - 1].path !== g
        ? p.findIndex(_n.bind(null, c[u - 2]))
        : v
    }),
    l = Lt(() => s.value > -1 && Ef(n.params, i.value.params)),
    a = Lt(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        Ro(n.params, i.value.params)
    )
  function o(c = {}) {
    if (Sf(c)) {
      const u = t[pn(e.replace) ? 'replace' : 'push'](pn(e.to)).catch(Vn)
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => u),
        u
      )
    }
    return Promise.resolve()
  }
  return {
    route: i,
    href: Lt(() => i.value.href),
    isActive: l,
    isExactActive: a,
    navigate: o,
  }
}
function _f(e) {
  return e.length === 1 ? e[0] : e
}
const wf = yn({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: oa,
    setup(e, { slots: t }) {
      const n = Ui(oa(e)),
        { options: i } = Ft(es),
        s = Lt(() => ({
          [da(e.activeClass, i.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [da(
            e.exactActiveClass,
            i.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }))
      return () => {
        const l = t.default && _f(t.default(n))
        return e.custom
          ? l
          : pt(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              l
            )
      }
    },
  }),
  yf = wf
function Sf(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Ef(e, t) {
  for (const n in t) {
    const i = t[n],
      s = e[n]
    if (typeof i == 'string') {
      if (i !== s) return !1
    } else if (!Vt(s) || s.length !== i.length || i.some((l, a) => l !== s[a]))
      return !1
  }
  return !0
}
function ca(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const da = (e, t, n) => e ?? t ?? n,
  xf = yn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const i = Ft(p2),
        s = Lt(() => e.route || i.value),
        l = Ft(aa, 0),
        a = Lt(() => {
          let u = pn(l)
          const { matched: f } = s.value
          let p
          for (; (p = f[u]) && !p.components; ) u++
          return u
        }),
        o = Lt(() => s.value.matched[a.value])
      gn(
        aa,
        Lt(() => a.value + 1)
      ),
        gn(bf, o),
        gn(p2, s)
      const c = Ge()
      return (
        Nn(
          () => [c.value, o.value, e.name],
          ([u, f, p], [v, g, y]) => {
            f &&
              ((f.instances[p] = u),
              g &&
                g !== f &&
                u &&
                u === v &&
                (f.leaveGuards.size || (f.leaveGuards = g.leaveGuards),
                f.updateGuards.size || (f.updateGuards = g.updateGuards))),
              u &&
                f &&
                (!g || !_n(f, g) || !v) &&
                (f.enterCallbacks[p] || []).forEach(T => T(u))
          },
          { flush: 'post' }
        ),
        () => {
          const u = s.value,
            f = e.name,
            p = o.value,
            v = p && p.components[f]
          if (!v) return fa(n.default, { Component: v, route: u })
          const g = p.props[f],
            y = g
              ? g === !0
                ? u.params
                : typeof g == 'function'
                  ? g(u)
                  : g
              : null,
            k = pt(
              v,
              Se({}, y, t, {
                onVnodeUnmounted: x => {
                  x.component.isUnmounted && (p.instances[f] = null)
                },
                ref: c,
              })
            )
          return fa(n.default, { Component: k, route: u }) || k
        }
      )
    },
  })
function fa(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Tf = xf
function Mf(e) {
  const t = uf(e.routes, e),
    n = e.parseQuery || gf,
    i = e.stringifyQuery || la,
    s = e.history,
    l = In(),
    a = In(),
    o = In(),
    c = B4(p1)
  let u = p1
  dn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const f = Hs.bind(null, O => '' + O),
    p = Hs.bind(null, Bd),
    v = Hs.bind(null, Kn)
  function g(O, P) {
    let W, Z
    return (
      ko(O) ? ((W = t.getRecordMatcher(O)), (Z = P)) : (Z = O), t.addRoute(Z, W)
    )
  }
  function y(O) {
    const P = t.getRecordMatcher(O)
    P && t.removeRoute(P)
  }
  function T() {
    return t.getRoutes().map(O => O.record)
  }
  function k(O) {
    return !!t.getRecordMatcher(O)
  }
  function x(O, P) {
    if (((P = Se({}, P || c.value)), typeof O == 'string')) {
      const S = Gs(n, O, P.path),
        A = t.resolve({ path: S.path }, P),
        L = s.createHref(S.fullPath)
      return Se(S, A, {
        params: v(A.params),
        hash: Kn(S.hash),
        redirectedFrom: void 0,
        href: L,
      })
    }
    let W
    if (O.path != null) W = Se({}, O, { path: Gs(n, O.path, P.path).path })
    else {
      const S = Se({}, O.params)
      for (const A in S) S[A] == null && delete S[A]
      ;(W = Se({}, O, { params: p(S) })), (P.params = p(P.params))
    }
    const Z = t.resolve(W, P),
      Te = O.hash || ''
    Z.params = f(v(Z.params))
    const z = Vd(i, Se({}, O, { hash: Rd(Te), path: Z.path })),
      b = s.createHref(z)
    return Se(
      { fullPath: z, hash: Te, query: i === la ? zf(O.query) : O.query || {} },
      Z,
      { redirectedFrom: void 0, href: b }
    )
  }
  function M(O) {
    return typeof O == 'string' ? Gs(n, O, c.value.path) : Se({}, O)
  }
  function C(O, P) {
    if (u !== O) return wn(8, { from: P, to: O })
  }
  function R(O) {
    return Q(O)
  }
  function N(O) {
    return R(Se(M(O), { replace: !0 }))
  }
  function ie(O) {
    const P = O.matched[O.matched.length - 1]
    if (P && P.redirect) {
      const { redirect: W } = P
      let Z = typeof W == 'function' ? W(O) : W
      return (
        typeof Z == 'string' &&
          ((Z = Z.includes('?') || Z.includes('#') ? (Z = M(Z)) : { path: Z }),
          (Z.params = {})),
        Se(
          {
            query: O.query,
            hash: O.hash,
            params: Z.path != null ? {} : O.params,
          },
          Z
        )
      )
    }
  }
  function Q(O, P) {
    const W = (u = x(O)),
      Z = c.value,
      Te = O.state,
      z = O.force,
      b = O.replace === !0,
      S = ie(W)
    if (S)
      return Q(
        Se(M(S), {
          state: typeof S == 'object' ? Se({}, Te, S.state) : Te,
          force: z,
          replace: b,
        }),
        P || W
      )
    const A = W
    A.redirectedFrom = P
    let L
    return (
      !z && jd(i, Z, W) && ((L = wn(16, { to: A, from: Z })), Je(Z, Z, !0, !1)),
      (L ? Promise.resolve(L) : V(A, Z))
        .catch(D => (s1(D) ? (s1(D, 2) ? D : I(D)) : oe(D, A, Z)))
        .then(D => {
          if (D) {
            if (s1(D, 2))
              return Q(
                Se({ replace: b }, M(D.to), {
                  state: typeof D.to == 'object' ? Se({}, Te, D.to.state) : Te,
                  force: z,
                }),
                P || A
              )
          } else D = fe(A, Z, !0, b, Te)
          return ee(A, Z, D), D
        })
    )
  }
  function Y(O, P) {
    const W = C(O, P)
    return W ? Promise.reject(W) : Promise.resolve()
  }
  function F(O) {
    const P = Ze.values().next().value
    return P && typeof P.runWithContext == 'function'
      ? P.runWithContext(O)
      : O()
  }
  function V(O, P) {
    let W
    const [Z, Te, z] = Cf(O, P)
    W = Ws(Z.reverse(), 'beforeRouteLeave', O, P)
    for (const S of Z)
      S.leaveGuards.forEach(A => {
        W.push(g1(A, O, P))
      })
    const b = Y.bind(null, O, P)
    return (
      W.push(b),
      Be(W)
        .then(() => {
          W = []
          for (const S of l.list()) W.push(g1(S, O, P))
          return W.push(b), Be(W)
        })
        .then(() => {
          W = Ws(Te, 'beforeRouteUpdate', O, P)
          for (const S of Te)
            S.updateGuards.forEach(A => {
              W.push(g1(A, O, P))
            })
          return W.push(b), Be(W)
        })
        .then(() => {
          W = []
          for (const S of z)
            if (S.beforeEnter)
              if (Vt(S.beforeEnter))
                for (const A of S.beforeEnter) W.push(g1(A, O, P))
              else W.push(g1(S.beforeEnter, O, P))
          return W.push(b), Be(W)
        })
        .then(
          () => (
            O.matched.forEach(S => (S.enterCallbacks = {})),
            (W = Ws(z, 'beforeRouteEnter', O, P, F)),
            W.push(b),
            Be(W)
          )
        )
        .then(() => {
          W = []
          for (const S of a.list()) W.push(g1(S, O, P))
          return W.push(b), Be(W)
        })
        .catch(S => (s1(S, 8) ? S : Promise.reject(S)))
    )
  }
  function ee(O, P, W) {
    o.list().forEach(Z => F(() => Z(O, P, W)))
  }
  function fe(O, P, W, Z, Te) {
    const z = C(O, P)
    if (z) return z
    const b = P === p1,
      S = dn ? history.state : {}
    W &&
      (Z || b
        ? s.replace(O.fullPath, Se({ scroll: b && S && S.scroll }, Te))
        : s.push(O.fullPath, Te)),
      (c.value = O),
      Je(O, P, W, b),
      I()
  }
  let _e
  function Xe() {
    _e ||
      (_e = s.listen((O, P, W) => {
        if (!Ht.listening) return
        const Z = x(O),
          Te = ie(Z)
        if (Te) {
          Q(Se(Te, { replace: !0, force: !0 }), Z).catch(Vn)
          return
        }
        u = Z
        const z = c.value
        dn && Xd(Ql(z.fullPath, W.delta), Zi()),
          V(Z, z)
            .catch(b =>
              s1(b, 12)
                ? b
                : s1(b, 2)
                  ? (Q(Se(M(b.to), { force: !0 }), Z)
                      .then(S => {
                        s1(S, 20) &&
                          !W.delta &&
                          W.type === Yn.pop &&
                          s.go(-1, !1)
                      })
                      .catch(Vn),
                    Promise.reject())
                  : (W.delta && s.go(-W.delta, !1), oe(b, Z, z))
            )
            .then(b => {
              ;(b = b || fe(Z, z, !1)),
                b &&
                  (W.delta && !s1(b, 8)
                    ? s.go(-W.delta, !1)
                    : W.type === Yn.pop && s1(b, 20) && s.go(-1, !1)),
                ee(Z, z, b)
            })
            .catch(Vn)
      }))
  }
  let Ke = In(),
    ne = In(),
    le
  function oe(O, P, W) {
    I(O)
    const Z = ne.list()
    return (
      Z.length ? Z.forEach(Te => Te(O, P, W)) : console.error(O),
      Promise.reject(O)
    )
  }
  function Fe() {
    return le && c.value !== p1
      ? Promise.resolve()
      : new Promise((O, P) => {
          Ke.add([O, P])
        })
  }
  function I(O) {
    return (
      le ||
        ((le = !O),
        Xe(),
        Ke.list().forEach(([P, W]) => (O ? W(O) : P())),
        Ke.reset()),
      O
    )
  }
  function Je(O, P, W, Z) {
    const { scrollBehavior: Te } = e
    if (!dn || !Te) return Promise.resolve()
    const z =
      (!W && Qd(Ql(O.fullPath, 0))) ||
      ((Z || !W) && history.state && history.state.scroll) ||
      null
    return I2()
      .then(() => Te(O, P, z))
      .then(b => b && Yd(b))
      .catch(b => oe(b, O, P))
  }
  const qe = O => s.go(O)
  let jt
  const Ze = new Set(),
    Ht = {
      currentRoute: c,
      listening: !0,
      addRoute: g,
      removeRoute: y,
      clearRoutes: t.clearRoutes,
      hasRoute: k,
      getRoutes: T,
      resolve: x,
      options: e,
      push: R,
      replace: N,
      go: qe,
      back: () => qe(-1),
      forward: () => qe(1),
      beforeEach: l.add,
      beforeResolve: a.add,
      afterEach: o.add,
      onError: ne.add,
      isReady: Fe,
      install(O) {
        const P = this
        O.component('RouterLink', yf),
          O.component('RouterView', Tf),
          (O.config.globalProperties.$router = P),
          Object.defineProperty(O.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => pn(c),
          }),
          dn &&
            !jt &&
            c.value === p1 &&
            ((jt = !0), R(s.location).catch(Te => {}))
        const W = {}
        for (const Te in p1)
          Object.defineProperty(W, Te, {
            get: () => c.value[Te],
            enumerable: !0,
          })
        O.provide(es, P), O.provide(F2, Wa(W)), O.provide(p2, c)
        const Z = O.unmount
        Ze.add(O),
          (O.unmount = function () {
            Ze.delete(O),
              Ze.size < 1 &&
                ((u = p1),
                _e && _e(),
                (_e = null),
                (c.value = p1),
                (jt = !1),
                (le = !1)),
              Z()
          })
      },
    }
  function Be(O) {
    return O.reduce((P, W) => P.then(() => F(W)), Promise.resolve())
  }
  return Ht
}
function Cf(e, t) {
  const n = [],
    i = [],
    s = [],
    l = Math.max(t.matched.length, e.matched.length)
  for (let a = 0; a < l; a++) {
    const o = t.matched[a]
    o && (e.matched.find(u => _n(u, o)) ? i.push(o) : n.push(o))
    const c = e.matched[a]
    c && (t.matched.find(u => _n(u, c)) || s.push(c))
  }
  return [n, i, s]
}
function Ku() {
  return Ft(es)
}
function Yu(e) {
  return Ft(F2)
}
const Pf = 'modulepreload',
  Af = function (e) {
    return '/' + e
  },
  ua = {},
  Pe = function (t, n, i) {
    let s = Promise.resolve()
    if (n && n.length > 0) {
      let a = function (u) {
        return Promise.all(
          u.map(f =>
            Promise.resolve(f).then(
              p => ({ status: 'fulfilled', value: p }),
              p => ({ status: 'rejected', reason: p })
            )
          )
        )
      }
      document.getElementsByTagName('link')
      const o = document.querySelector('meta[property=csp-nonce]'),
        c =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute('nonce'))
      s = a(
        n.map(u => {
          if (((u = Af(u)), u in ua)) return
          ua[u] = !0
          const f = u.endsWith('.css'),
            p = f ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${u}"]${p}`)) return
          const v = document.createElement('link')
          if (
            ((v.rel = f ? 'stylesheet' : Pf),
            f || (v.as = 'script'),
            (v.crossOrigin = ''),
            (v.href = u),
            c && v.setAttribute('nonce', c),
            document.head.appendChild(v),
            f)
          )
            return new Promise((g, y) => {
              v.addEventListener('load', g),
                v.addEventListener('error', () =>
                  y(new Error(`Unable to preload CSS for ${u}`))
                )
            })
        })
      )
    }
    function l(a) {
      const o = new Event('vite:preloadError', { cancelable: !0 })
      if (((o.payload = a), window.dispatchEvent(o), !o.defaultPrevented))
        throw a
    }
    return s.then(a => {
      for (const o of a || []) o.status === 'rejected' && l(o.reason)
      return t().catch(l)
    })
  },
  Of = (e, t, n) => {
    const i = e[t]
    return i
      ? typeof i == 'function'
        ? i()
        : Promise.resolve(i)
      : new Promise((s, l) => {
          ;(typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
            l.bind(
              null,
              new Error(
                'Unknown variable dynamic import: ' +
                  t +
                  (t.split('/').length !== n
                    ? '. Note that variables only represent file names one level deep.'
                    : '')
              )
            )
          )
        })
  },
  If = [
    {
      path: '/',
      name: 'Home',
      component: () =>
        Pe(() => import('./Home-CJzDMNYW.js'), __vite__mapDeps([0, 1])),
    },
    {
      path: '/contactinfo',
      name: 'ContactInfo',
      component: () =>
        Pe(() => import('./ContactInfo-CY4SXVII.js'), __vite__mapDeps([2, 3])),
    },
    {
      path: '/learning',
      name: 'Learning',
      component: () =>
        Pe(() => import('./Learning-C-qUiqsF.js'), __vite__mapDeps([4, 5])),
    },
    {
      path: '/ordinatura',
      name: 'Ordinatura',
      component: () =>
        Pe(
          () => import('./Ordinatura-CsxXec5R.js'),
          __vite__mapDeps([6, 7, 8, 9])
        ),
    },
    {
      path: '/aspirantura',
      name: 'Aspirantura',
      component: () =>
        Pe(
          () => import('./Aspirantura-gvKohyj1.js'),
          __vite__mapDeps([10, 7, 8, 11])
        ),
    },
    {
      path: '/retraining',
      name: 'Retraining',
      component: () =>
        Pe(
          () => import('./Professional_retraining-C0TSxTxA.js'),
          __vite__mapDeps([12, 7, 8, 13])
        ),
    },
    {
      path: '/certification_cycles',
      name: 'CertificationCycle',
      component: () =>
        Pe(
          () => import('./Certification_cycles-DauOdQb7.js'),
          __vite__mapDeps([14, 7, 8, 15])
        ),
    },
    {
      path: '/scientific_practical',
      name: 'ScientificPractical',
      component: () =>
        Pe(
          () => import('./Scientific_practical-B1u3BXFb.js'),
          __vite__mapDeps([16, 17, 18, 19])
        ),
    },
    ...[2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017].map(e => ({
      path: `/scientific_practical/${e}`,
      name: `ScientificPractical${e}`,
      component: () =>
        Of(
          Object.assign({
            '../pages/scientific_practical/2010.vue': () =>
              Pe(
                () => import('./2010-DlqcgHEX.js'),
                __vite__mapDeps([20, 17, 18, 21])
              ),
            '../pages/scientific_practical/2011.vue': () =>
              Pe(
                () => import('./2011-xv2CGIsn.js'),
                __vite__mapDeps([22, 17, 18, 21])
              ),
            '../pages/scientific_practical/2012.vue': () =>
              Pe(
                () => import('./2012-DHmJEU8b.js'),
                __vite__mapDeps([23, 17, 18])
              ),
            '../pages/scientific_practical/2013.vue': () =>
              Pe(
                () => import('./2013-YhKrEhpI.js'),
                __vite__mapDeps([24, 17, 18])
              ),
            '../pages/scientific_practical/2014.vue': () =>
              Pe(
                () => import('./2014-BZhlFYh9.js'),
                __vite__mapDeps([25, 17, 18, 26])
              ),
            '../pages/scientific_practical/2015.vue': () =>
              Pe(
                () => import('./2015-BFOhNLS7.js'),
                __vite__mapDeps([27, 17, 18, 28])
              ),
            '../pages/scientific_practical/2016.vue': () =>
              Pe(
                () => import('./2016-BqOVS72Y.js'),
                __vite__mapDeps([29, 17, 18, 30])
              ),
            '../pages/scientific_practical/2017.vue': () =>
              Pe(
                () => import('./2017-CrTt5H_f.js'),
                __vite__mapDeps([31, 17, 18, 32])
              ),
            '../pages/scientific_practical/Scientific_practical.vue': () =>
              Pe(
                () => import('./Scientific_practical-B1u3BXFb.js'),
                __vite__mapDeps([16, 17, 18, 19])
              ),
          }),
          `../pages/scientific_practical/${e}.vue`,
          4
        ),
    })),
    {
      path: '/history',
      name: 'History',
      component: () =>
        Pe(() => import('./History-BTqXsz-9.js'), __vite__mapDeps([33, 34])),
    },
    {
      path: '/research',
      name: 'Research',
      component: () => Pe(() => import('./Research-CMgfDVQL.js'), []),
    },
    {
      path: '/library',
      name: 'Library',
      component: () =>
        Pe(
          () => import('./Library-BTG-YU0o.js'),
          __vite__mapDeps([35, 36, 37, 38, 39])
        ),
    },
    {
      path: '/privateLibrary',
      name: 'privateLibrary',
      component: () =>
        Pe(
          () => import('./PrivateLibrary-C6AICYl_.js'),
          __vite__mapDeps([40, 36, 37, 38, 41, 42])
        ),
      meta: { requiresAuth: !0 },
    },
    {
      path: '/libraryManager',
      name: 'libraryManager',
      component: () =>
        Pe(
          () => import('./LibraryManager-c2HDOj1m.js'),
          __vite__mapDeps([43, 37, 41, 44])
        ),
      meta: { requiresAuth: !0 },
    },
    {
      path: '/clientbase',
      name: 'ClientBase',
      component: () => Pe(() => import('./ClientBase-B1TR1eM6.js'), []),
    },
    {
      path: '/youngneurologists',
      name: 'YoungNeurologists',
      component: () =>
        Pe(
          () => import('./YoungNeurologists-Bqb_aJ5C.js'),
          __vite__mapDeps([45, 46])
        ),
    },
    {
      path: '/newsupdates',
      name: 'NewsUpdates',
      component: () => Pe(() => import('./NewsUpdates-BoXMHG2C.js'), []),
    },
    {
      path: '/educational',
      name: 'Educational',
      component: () =>
        Pe(
          () => import('./Educational-CFQywNbD.js'),
          __vite__mapDeps([47, 48])
        ),
    },
    {
      path: '/educational/2017',
      name: 'Educational2017',
      component: () =>
        Pe(() => import('./2017-5PhUNpOA.js'), __vite__mapDeps([49, 50])),
    },
    {
      path: '/educational/2018',
      name: 'Educational2018',
      component: () => Pe(() => import('./2018-YQP7-Zin.js'), []),
    },
    {
      path: '/gkb51dzm',
      name: 'Gkb51dzm',
      component: () =>
        Pe(() => import('./GKB51-Cdvg4rL1.js'), __vite__mapDeps([51, 52])),
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  Vo = Mf({ history: tf(), routes: If })
Vo.beforeEach(async (e, t, n) => {
  if (e.meta.requiresAuth)
    try {
      const i = `${window.location.origin}/api/auth`,
        s = await fetch(i, {
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        }),
        l = await s.json()
      if (!s.ok || l.authenticated !== !0) return n('/library')
      if (e.path === '/LibraryManager' && !l.isAdmin)
        return (
          console.error('Доступ запрещен: недостаточно прав'), n('/library')
        )
      n()
    } catch (i) {
      console.error('Ошибка проверки сессии:', i), n('/library')
    }
  else n()
})
const S1 = (e, t) => {
    const n = e.__vccOpts || e
    for (const [i, s] of t) n[i] = s
    return n
  },
  Lf = { name: 'Flag' },
  Df = { id: 'flag' }
function Rf(e, t, n, i, s, l) {
  return (
    mt(),
    Jt(
      'div',
      Df,
      t[0] ||
        (t[0] = [
          xt('div', { class: 'wave2' }, null, -1),
          xt('div', { class: 'wave3' }, null, -1),
        ])
    )
  )
}
const $f = S1(Lf, [
    ['render', Rf],
    ['__scopeId', 'data-v-4551579d'],
  ]),
  kf = yn({
    name: 'topHeader__Context',
    setup() {
      return {}
    },
  })
function Bf(e, t, n, i, s, l) {
  const a = Bt('router-link')
  return (
    mt(),
    $i(
      a,
      { class: 'top_header__context_link', to: { name: 'Home' } },
      {
        default: N1(
          () =>
            t[0] ||
            (t[0] = [
              xt(
                'div',
                { class: 'context' },
                'Кафедра неврологии Официальный сайт',
                -1
              ),
              xt(
                'div',
                { class: 'context' },
                ' ФГБУ ДПО "Центральная государственная медицинская академия" УД Президента РФ ',
                -1
              ),
            ])
        ),
        _: 1,
      }
    )
  )
}
const Nf = S1(kf, [
  ['render', Bf],
  ['__scopeId', 'data-v-d922733d'],
])
function ha(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'constructor' in e &&
    e.constructor === Object
  )
}
function V2(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {})
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter(i => n.indexOf(i) < 0)
    .forEach(i => {
      typeof e[i] > 'u'
        ? (e[i] = t[i])
        : ha(t[i]) && ha(e[i]) && Object.keys(t[i]).length > 0 && V2(e[i], t[i])
    })
}
const jo = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return { initEvent() {} }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      },
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
}
function W1() {
  const e = typeof document < 'u' ? document : {}
  return V2(e, jo), e
}
const Ff = {
  document: jo,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ''
      },
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > 'u' || clearTimeout(e)
  },
}
function ht() {
  const e = typeof window < 'u' ? window : {}
  return V2(e, Ff), e
}
function Vf(e) {
  return (
    e === void 0 && (e = ''),
    e
      .trim()
      .split(' ')
      .filter(t => !!t.trim())
  )
}
function jf(e) {
  const t = e
  Object.keys(t).forEach(n => {
    try {
      t[n] = null
    } catch {}
    try {
      delete t[n]
    } catch {}
  })
}
function m2(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function Ni() {
  return Date.now()
}
function Hf(e) {
  const t = ht()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function Gf(e, t) {
  t === void 0 && (t = 'x')
  const n = ht()
  let i, s, l
  const a = Hf(e)
  return (
    n.WebKitCSSMatrix
      ? ((s = a.transform || a.webkitTransform),
        s.split(',').length > 6 &&
          (s = s
            .split(', ')
            .map(o => o.replace(',', '.'))
            .join(', ')),
        (l = new n.WebKitCSSMatrix(s === 'none' ? '' : s)))
      : ((l =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (i = l.toString().split(','))),
    t === 'x' &&
      (n.WebKitCSSMatrix
        ? (s = l.m41)
        : i.length === 16
          ? (s = parseFloat(i[12]))
          : (s = parseFloat(i[4]))),
    t === 'y' &&
      (n.WebKitCSSMatrix
        ? (s = l.m42)
        : i.length === 16
          ? (s = parseFloat(i[13]))
          : (s = parseFloat(i[5]))),
    s || 0
  )
}
function wi(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function Wf(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function yt() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype']
  for (let n = 1; n < arguments.length; n += 1) {
    const i = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (i != null && !Wf(i)) {
      const s = Object.keys(Object(i)).filter(l => t.indexOf(l) < 0)
      for (let l = 0, a = s.length; l < a; l += 1) {
        const o = s[l],
          c = Object.getOwnPropertyDescriptor(i, o)
        c !== void 0 &&
          c.enumerable &&
          (wi(e[o]) && wi(i[o])
            ? i[o].__swiper__
              ? (e[o] = i[o])
              : yt(e[o], i[o])
            : !wi(e[o]) && wi(i[o])
              ? ((e[o] = {}), i[o].__swiper__ ? (e[o] = i[o]) : yt(e[o], i[o]))
              : (e[o] = i[o]))
      }
    }
  }
  return e
}
function yi(e, t, n) {
  e.style.setProperty(t, n)
}
function Ho(e) {
  let { swiper: t, targetPosition: n, side: i } = e
  const s = ht(),
    l = -t.translate
  let a = null,
    o
  const c = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = 'none'),
    s.cancelAnimationFrame(t.cssModeFrameID)
  const u = n > l ? 'next' : 'prev',
    f = (v, g) => (u === 'next' && v >= g) || (u === 'prev' && v <= g),
    p = () => {
      ;(o = new Date().getTime()), a === null && (a = o)
      const v = Math.max(Math.min((o - a) / c, 1), 0),
        g = 0.5 - Math.cos(v * Math.PI) / 2
      let y = l + g * (n - l)
      if ((f(y, n) && (y = n), t.wrapperEl.scrollTo({ [i]: y }), f(y, n))) {
        ;(t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [i]: y })
          }),
          s.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = s.requestAnimationFrame(p)
    }
  p()
}
function c1(e, t) {
  t === void 0 && (t = '')
  const n = ht(),
    i = [...e.children]
  return (
    n.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      i.push(...e.assignedElements()),
    t ? i.filter(s => s.matches(t)) : i
  )
}
function qf(e, t) {
  const n = [t]
  for (; n.length > 0; ) {
    const i = n.shift()
    if (e === i) return !0
    n.push(
      ...i.children,
      ...(i.shadowRoot ? i.shadowRoot.children : []),
      ...(i.assignedElements ? i.assignedElements() : [])
    )
  }
}
function Uf(e, t) {
  const n = ht()
  let i = t.contains(e)
  return (
    !i &&
      n.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((i = [...t.assignedElements()].includes(e)), i || (i = qf(e, t))),
    i
  )
}
function Fi(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function v2(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : Vf(t))), n
}
function Kf(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const i = e.previousElementSibling
    t ? i.matches(t) && n.push(i) : n.push(i), (e = i)
  }
  return n
}
function Yf(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const i = e.nextElementSibling
    t ? i.matches(t) && n.push(i) : n.push(i), (e = i)
  }
  return n
}
function z1(e, t) {
  return ht().getComputedStyle(e, null).getPropertyValue(t)
}
function pa(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function Xf(e, t) {
  const n = []
  let i = e.parentElement
  for (; i; ) n.push(i), (i = i.parentElement)
  return n
}
function ma(e, t, n) {
  const i = ht()
  return (
    e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(
      i
        .getComputedStyle(e, null)
        .getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top')
    ) +
    parseFloat(
      i
        .getComputedStyle(e, null)
        .getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom')
    )
  )
}
let qs
function Qf() {
  const e = ht(),
    t = W1()
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      'scrollBehavior' in t.documentElement.style,
    touch: !!(
      'ontouchstart' in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  }
}
function Go() {
  return qs || (qs = Qf()), qs
}
let Us
function Jf(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = Go(),
    i = ht(),
    s = i.navigator.platform,
    l = t || i.navigator.userAgent,
    a = { ios: !1, android: !1 },
    o = i.screen.width,
    c = i.screen.height,
    u = l.match(/(Android);?[\s\/]+([\d.]+)?/)
  let f = l.match(/(iPad).*OS\s([\d_]+)/)
  const p = l.match(/(iPod)(.*OS\s([\d_]+))?/),
    v = !f && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = s === 'Win32'
  let y = s === 'MacIntel'
  const T = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ]
  return (
    !f &&
      y &&
      n.touch &&
      T.indexOf(`${o}x${c}`) >= 0 &&
      ((f = l.match(/(Version)\/([\d.]+)/)),
      f || (f = [0, 1, '13_0_0']),
      (y = !1)),
    u && !g && ((a.os = 'android'), (a.android = !0)),
    (f || v || p) && ((a.os = 'ios'), (a.ios = !0)),
    a
  )
}
function Wo(e) {
  return e === void 0 && (e = {}), Us || (Us = Jf(e)), Us
}
let Ks
function Zf() {
  const e = ht(),
    t = Wo()
  let n = !1
  function i() {
    const o = e.navigator.userAgent.toLowerCase()
    return (
      o.indexOf('safari') >= 0 &&
      o.indexOf('chrome') < 0 &&
      o.indexOf('android') < 0
    )
  }
  if (i()) {
    const o = String(e.navigator.userAgent)
    if (o.includes('Version/')) {
      const [c, u] = o
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map(f => Number(f))
      n = c < 16 || (c === 16 && u < 2)
    }
  }
  const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    l = i(),
    a = l || (s && t.ios)
  return { isSafari: n || l, needPerspectiveFix: n, need3dFix: a, isWebView: s }
}
function qo() {
  return Ks || (Ks = Zf()), Ks
}
function e5(e) {
  let { swiper: t, on: n, emit: i } = e
  const s = ht()
  let l = null,
    a = null
  const o = () => {
      !t || t.destroyed || !t.initialized || (i('beforeResize'), i('resize'))
    },
    c = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((l = new ResizeObserver(p => {
          a = s.requestAnimationFrame(() => {
            const { width: v, height: g } = t
            let y = v,
              T = g
            p.forEach(k => {
              let { contentBoxSize: x, contentRect: M, target: C } = k
              ;(C && C !== t.el) ||
                ((y = M ? M.width : (x[0] || x).inlineSize),
                (T = M ? M.height : (x[0] || x).blockSize))
            }),
              (y !== v || T !== g) && o()
          })
        })),
        l.observe(t.el))
    },
    u = () => {
      a && s.cancelAnimationFrame(a),
        l && l.unobserve && t.el && (l.unobserve(t.el), (l = null))
    },
    f = () => {
      !t || t.destroyed || !t.initialized || i('orientationchange')
    }
  n('init', () => {
    if (t.params.resizeObserver && typeof s.ResizeObserver < 'u') {
      c()
      return
    }
    s.addEventListener('resize', o), s.addEventListener('orientationchange', f)
  }),
    n('destroy', () => {
      u(),
        s.removeEventListener('resize', o),
        s.removeEventListener('orientationchange', f)
    })
}
function t5(e) {
  let { swiper: t, extendParams: n, on: i, emit: s } = e
  const l = [],
    a = ht(),
    o = function (f, p) {
      p === void 0 && (p = {})
      const v = a.MutationObserver || a.WebkitMutationObserver,
        g = new v(y => {
          if (t.__preventObserver__) return
          if (y.length === 1) {
            s('observerUpdate', y[0])
            return
          }
          const T = function () {
            s('observerUpdate', y[0])
          }
          a.requestAnimationFrame
            ? a.requestAnimationFrame(T)
            : a.setTimeout(T, 0)
        })
      g.observe(f, {
        attributes: typeof p.attributes > 'u' ? !0 : p.attributes,
        childList: t.isElement || (typeof p.childList > 'u' ? !0 : p).childList,
        characterData: typeof p.characterData > 'u' ? !0 : p.characterData,
      }),
        l.push(g)
    },
    c = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const f = Xf(t.hostEl)
          for (let p = 0; p < f.length; p += 1) o(f[p])
        }
        o(t.hostEl, { childList: t.params.observeSlideChildren }),
          o(t.wrapperEl, { attributes: !1 })
      }
    },
    u = () => {
      l.forEach(f => {
        f.disconnect()
      }),
        l.splice(0, l.length)
    }
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i('init', c),
    i('destroy', u)
}
var n5 = {
  on(e, t, n) {
    const i = this
    if (!i.eventsListeners || i.destroyed || typeof t != 'function') return i
    const s = n ? 'unshift' : 'push'
    return (
      e.split(' ').forEach(l => {
        i.eventsListeners[l] || (i.eventsListeners[l] = []),
          i.eventsListeners[l][s](t)
      }),
      i
    )
  },
  once(e, t, n) {
    const i = this
    if (!i.eventsListeners || i.destroyed || typeof t != 'function') return i
    function s() {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy
      for (var l = arguments.length, a = new Array(l), o = 0; o < l; o++)
        a[o] = arguments[o]
      t.apply(i, a)
    }
    return (s.__emitterProxy = t), i.on(e, s, n)
  },
  onAny(e, t) {
    const n = this
    if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n
    const i = t ? 'unshift' : 'push'
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
  },
  offAny(e) {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
    const n = t.eventsAnyListeners.indexOf(e)
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
  },
  off(e, t) {
    const n = this
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(' ').forEach(i => {
          typeof t > 'u'
            ? (n.eventsListeners[i] = [])
            : n.eventsListeners[i] &&
              n.eventsListeners[i].forEach((s, l) => {
                ;(s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                  n.eventsListeners[i].splice(l, 1)
              })
        }),
      n
    )
  },
  emit() {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
    let t, n, i
    for (var s = arguments.length, l = new Array(s), a = 0; a < s; a++)
      l[a] = arguments[a]
    return (
      typeof l[0] == 'string' || Array.isArray(l[0])
        ? ((t = l[0]), (n = l.slice(1, l.length)), (i = e))
        : ((t = l[0].events), (n = l[0].data), (i = l[0].context || e)),
      n.unshift(i),
      (Array.isArray(t) ? t : t.split(' ')).forEach(c => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach(u => {
            u.apply(i, [c, ...n])
          }),
          e.eventsListeners &&
            e.eventsListeners[c] &&
            e.eventsListeners[c].forEach(u => {
              u.apply(i, n)
            })
      }),
      e
    )
  },
}
function i5() {
  const e = this
  let t, n
  const i = e.el
  typeof e.params.width < 'u' && e.params.width !== null
    ? (t = e.params.width)
    : (t = i.clientWidth),
    typeof e.params.height < 'u' && e.params.height !== null
      ? (n = e.params.height)
      : (n = i.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(z1(i, 'padding-left') || 0, 10) -
        parseInt(z1(i, 'padding-right') || 0, 10)),
      (n =
        n -
        parseInt(z1(i, 'padding-top') || 0, 10) -
        parseInt(z1(i, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function s5() {
  const e = this
  function t(V, ee) {
    return parseFloat(V.getPropertyValue(e.getDirectionLabel(ee)) || 0)
  }
  const n = e.params,
    { wrapperEl: i, slidesEl: s, size: l, rtlTranslate: a, wrongRTL: o } = e,
    c = e.virtual && n.virtual.enabled,
    u = c ? e.virtual.slides.length : e.slides.length,
    f = c1(s, `.${e.params.slideClass}, swiper-slide`),
    p = c ? e.virtual.slides.length : f.length
  let v = []
  const g = [],
    y = []
  let T = n.slidesOffsetBefore
  typeof T == 'function' && (T = n.slidesOffsetBefore.call(e))
  let k = n.slidesOffsetAfter
  typeof k == 'function' && (k = n.slidesOffsetAfter.call(e))
  const x = e.snapGrid.length,
    M = e.slidesGrid.length
  let C = n.spaceBetween,
    R = -T,
    N = 0,
    ie = 0
  if (typeof l > 'u') return
  typeof C == 'string' && C.indexOf('%') >= 0
    ? (C = (parseFloat(C.replace('%', '')) / 100) * l)
    : typeof C == 'string' && (C = parseFloat(C)),
    (e.virtualSize = -C),
    f.forEach(V => {
      a ? (V.style.marginLeft = '') : (V.style.marginRight = ''),
        (V.style.marginBottom = ''),
        (V.style.marginTop = '')
    }),
    n.centeredSlides &&
      n.cssMode &&
      (yi(i, '--swiper-centered-offset-before', ''),
      yi(i, '--swiper-centered-offset-after', ''))
  const Q = n.grid && n.grid.rows > 1 && e.grid
  Q ? e.grid.initSlides(f) : e.grid && e.grid.unsetSlides()
  let Y
  const F =
    n.slidesPerView === 'auto' &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      V => typeof n.breakpoints[V].slidesPerView < 'u'
    ).length > 0
  for (let V = 0; V < p; V += 1) {
    Y = 0
    let ee
    if (
      (f[V] && (ee = f[V]),
      Q && e.grid.updateSlide(V, ee, f),
      !(f[V] && z1(ee, 'display') === 'none'))
    ) {
      if (n.slidesPerView === 'auto') {
        F && (f[V].style[e.getDirectionLabel('width')] = '')
        const fe = getComputedStyle(ee),
          _e = ee.style.transform,
          Xe = ee.style.webkitTransform
        if (
          (_e && (ee.style.transform = 'none'),
          Xe && (ee.style.webkitTransform = 'none'),
          n.roundLengths)
        )
          Y = e.isHorizontal() ? ma(ee, 'width') : ma(ee, 'height')
        else {
          const Ke = t(fe, 'width'),
            ne = t(fe, 'padding-left'),
            le = t(fe, 'padding-right'),
            oe = t(fe, 'margin-left'),
            Fe = t(fe, 'margin-right'),
            I = fe.getPropertyValue('box-sizing')
          if (I && I === 'border-box') Y = Ke + oe + Fe
          else {
            const { clientWidth: Je, offsetWidth: qe } = ee
            Y = Ke + ne + le + oe + Fe + (qe - Je)
          }
        }
        _e && (ee.style.transform = _e),
          Xe && (ee.style.webkitTransform = Xe),
          n.roundLengths && (Y = Math.floor(Y))
      } else
        (Y = (l - (n.slidesPerView - 1) * C) / n.slidesPerView),
          n.roundLengths && (Y = Math.floor(Y)),
          f[V] && (f[V].style[e.getDirectionLabel('width')] = `${Y}px`)
      f[V] && (f[V].swiperSlideSize = Y),
        y.push(Y),
        n.centeredSlides
          ? ((R = R + Y / 2 + N / 2 + C),
            N === 0 && V !== 0 && (R = R - l / 2 - C),
            V === 0 && (R = R - l / 2 - C),
            Math.abs(R) < 1 / 1e3 && (R = 0),
            n.roundLengths && (R = Math.floor(R)),
            ie % n.slidesPerGroup === 0 && v.push(R),
            g.push(R))
          : (n.roundLengths && (R = Math.floor(R)),
            (ie - Math.min(e.params.slidesPerGroupSkip, ie)) %
              e.params.slidesPerGroup ===
              0 && v.push(R),
            g.push(R),
            (R = R + Y + C)),
        (e.virtualSize += Y + C),
        (N = Y),
        (ie += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + k),
    a &&
      o &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (i.style.width = `${e.virtualSize + C}px`),
    n.setWrapperSize &&
      (i.style[e.getDirectionLabel('width')] = `${e.virtualSize + C}px`),
    Q && e.grid.updateWrapperSize(Y, v),
    !n.centeredSlides)
  ) {
    const V = []
    for (let ee = 0; ee < v.length; ee += 1) {
      let fe = v[ee]
      n.roundLengths && (fe = Math.floor(fe)),
        v[ee] <= e.virtualSize - l && V.push(fe)
    }
    ;(v = V),
      Math.floor(e.virtualSize - l) - Math.floor(v[v.length - 1]) > 1 &&
        v.push(e.virtualSize - l)
  }
  if (c && n.loop) {
    const V = y[0] + C
    if (n.slidesPerGroup > 1) {
      const ee = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        fe = V * n.slidesPerGroup
      for (let _e = 0; _e < ee; _e += 1) v.push(v[v.length - 1] + fe)
    }
    for (
      let ee = 0;
      ee < e.virtual.slidesBefore + e.virtual.slidesAfter;
      ee += 1
    )
      n.slidesPerGroup === 1 && v.push(v[v.length - 1] + V),
        g.push(g[g.length - 1] + V),
        (e.virtualSize += V)
  }
  if ((v.length === 0 && (v = [0]), C !== 0)) {
    const V =
      e.isHorizontal() && a ? 'marginLeft' : e.getDirectionLabel('marginRight')
    f.filter((ee, fe) =>
      !n.cssMode || n.loop ? !0 : fe !== f.length - 1
    ).forEach(ee => {
      ee.style[V] = `${C}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let V = 0
    y.forEach(fe => {
      V += fe + (C || 0)
    }),
      (V -= C)
    const ee = V > l ? V - l : 0
    v = v.map(fe => (fe <= 0 ? -T : fe > ee ? ee + k : fe))
  }
  if (n.centerInsufficientSlides) {
    let V = 0
    y.forEach(fe => {
      V += fe + (C || 0)
    }),
      (V -= C)
    const ee = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if (V + ee < l) {
      const fe = (l - V - ee) / 2
      v.forEach((_e, Xe) => {
        v[Xe] = _e - fe
      }),
        g.forEach((_e, Xe) => {
          g[Xe] = _e + fe
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: f,
      snapGrid: v,
      slidesGrid: g,
      slidesSizesGrid: y,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    yi(i, '--swiper-centered-offset-before', `${-v[0]}px`),
      yi(
        i,
        '--swiper-centered-offset-after',
        `${e.size / 2 - y[y.length - 1] / 2}px`
      )
    const V = -e.snapGrid[0],
      ee = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map(fe => fe + V)),
      (e.slidesGrid = e.slidesGrid.map(fe => fe + ee))
  }
  if (
    (p !== u && e.emit('slidesLengthChange'),
    v.length !== x &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit('snapGridLengthChange')),
    g.length !== M && e.emit('slidesGridLengthChange'),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit('slidesUpdated'),
    !c && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
  ) {
    const V = `${n.containerModifierClass}backface-hidden`,
      ee = e.el.classList.contains(V)
    p <= n.maxBackfaceHiddenSlides
      ? ee || e.el.classList.add(V)
      : ee && e.el.classList.remove(V)
  }
}
function r5(e) {
  const t = this,
    n = [],
    i = t.virtual && t.params.virtual.enabled
  let s = 0,
    l
  typeof e == 'number'
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const a = o => (i ? t.slides[t.getSlideIndexByData(o)] : t.slides[o])
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach(o => {
        n.push(o)
      })
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const o = t.activeIndex + l
        if (o > t.slides.length && !i) break
        n.push(a(o))
      }
  else n.push(a(t.activeIndex))
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < 'u') {
      const o = n[l].offsetHeight
      s = o > s ? o : s
    }
  ;(s || s === 0) && (t.wrapperEl.style.height = `${s}px`)
}
function l5() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset =
      (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
      n -
      e.cssOverflowAdjustment()
}
const va = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function a5(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: i, rtlTranslate: s, snapGrid: l } = t
  if (i.length === 0) return
  typeof i[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
  let a = -e
  s && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
  let o = n.spaceBetween
  typeof o == 'string' && o.indexOf('%') >= 0
    ? (o = (parseFloat(o.replace('%', '')) / 100) * t.size)
    : typeof o == 'string' && (o = parseFloat(o))
  for (let c = 0; c < i.length; c += 1) {
    const u = i[c]
    let f = u.swiperSlideOffset
    n.cssMode && n.centeredSlides && (f -= i[0].swiperSlideOffset)
    const p =
        (a + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (u.swiperSlideSize + o),
      v =
        (a - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) /
        (u.swiperSlideSize + o),
      g = -(a - f),
      y = g + t.slidesSizesGrid[c],
      T = g >= 0 && g <= t.size - t.slidesSizesGrid[c],
      k =
        (g >= 0 && g < t.size - 1) ||
        (y > 1 && y <= t.size) ||
        (g <= 0 && y >= t.size)
    k && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(c)),
      va(u, k, n.slideVisibleClass),
      va(u, T, n.slideFullyVisibleClass),
      (u.progress = s ? -p : p),
      (u.originalProgress = s ? -v : v)
  }
}
function o5(e) {
  const t = this
  if (typeof e > 'u') {
    const f = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * f) || 0
  }
  const n = t.params,
    i = t.maxTranslate() - t.minTranslate()
  let { progress: s, isBeginning: l, isEnd: a, progressLoop: o } = t
  const c = l,
    u = a
  if (i === 0) (s = 0), (l = !0), (a = !0)
  else {
    s = (e - t.minTranslate()) / i
    const f = Math.abs(e - t.minTranslate()) < 1,
      p = Math.abs(e - t.maxTranslate()) < 1
    ;(l = f || s <= 0), (a = p || s >= 1), f && (s = 0), p && (s = 1)
  }
  if (n.loop) {
    const f = t.getSlideIndexByData(0),
      p = t.getSlideIndexByData(t.slides.length - 1),
      v = t.slidesGrid[f],
      g = t.slidesGrid[p],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      T = Math.abs(e)
    T >= v ? (o = (T - v) / y) : (o = (T + y - g) / y), o > 1 && (o -= 1)
  }
  Object.assign(t, { progress: s, progressLoop: o, isBeginning: l, isEnd: a }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !c && t.emit('reachBeginning toEdge'),
    a && !u && t.emit('reachEnd toEdge'),
    ((c && !l) || (u && !a)) && t.emit('fromEdge'),
    t.emit('progress', s)
}
const Ys = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function c5() {
  const e = this,
    { slides: t, params: n, slidesEl: i, activeIndex: s } = e,
    l = e.virtual && n.virtual.enabled,
    a = e.grid && n.grid && n.grid.rows > 1,
    o = p => c1(i, `.${n.slideClass}${p}, swiper-slide${p}`)[0]
  let c, u, f
  if (l)
    if (n.loop) {
      let p = s - e.virtual.slidesBefore
      p < 0 && (p = e.virtual.slides.length + p),
        p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
        (c = o(`[data-swiper-slide-index="${p}"]`))
    } else c = o(`[data-swiper-slide-index="${s}"]`)
  else
    a
      ? ((c = t.find(p => p.column === s)),
        (f = t.find(p => p.column === s + 1)),
        (u = t.find(p => p.column === s - 1)))
      : (c = t[s])
  c &&
    (a ||
      ((f = Yf(c, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !f && (f = t[0]),
      (u = Kf(c, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach(p => {
      Ys(p, p === c, n.slideActiveClass),
        Ys(p, p === f, n.slideNextClass),
        Ys(p, p === u, n.slidePrevClass)
    }),
    e.emitSlidesClasses()
}
const Ci = (e, t) => {
    if (!e || e.destroyed || !e.params) return
    const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
      i = t.closest(n())
    if (i) {
      let s = i.querySelector(`.${e.params.lazyPreloaderClass}`)
      !s &&
        e.isElement &&
        (i.shadowRoot
          ? (s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              i.shadowRoot &&
                ((s = i.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                s && s.remove())
            })),
        s && s.remove()
    }
  },
  Xs = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute('loading')
  },
  g2 = e => {
    if (!e || e.destroyed || !e.params) return
    let t = e.params.lazyPreloadPrevNext
    const n = e.slides.length
    if (!n || !t || t < 0) return
    t = Math.min(t, n)
    const i =
        e.params.slidesPerView === 'auto'
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      s = e.activeIndex
    if (e.params.grid && e.params.grid.rows > 1) {
      const a = s,
        o = [a - t]
      o.push(...Array.from({ length: t }).map((c, u) => a + i + u)),
        e.slides.forEach((c, u) => {
          o.includes(c.column) && Xs(e, u)
        })
      return
    }
    const l = s + i - 1
    if (e.params.rewind || e.params.loop)
      for (let a = s - t; a <= l + t; a += 1) {
        const o = ((a % n) + n) % n
        ;(o < s || o > l) && Xs(e, o)
      }
    else
      for (let a = Math.max(s - t, 0); a <= Math.min(l + t, n - 1); a += 1)
        a !== s && (a > l || a < s) && Xs(e, a)
  }
function d5(e) {
  const { slidesGrid: t, params: n } = e,
    i = e.rtlTranslate ? e.translate : -e.translate
  let s
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < 'u'
      ? i >= t[l] && i < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (s = l)
        : i >= t[l] && i < t[l + 1] && (s = l + 1)
      : i >= t[l] && (s = l)
  return n.normalizeSlideIndex && (s < 0 || typeof s > 'u') && (s = 0), s
}
function f5(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: i, params: s, activeIndex: l, realIndex: a, snapIndex: o } = t
  let c = e,
    u
  const f = g => {
    let y = g - t.virtual.slidesBefore
    return (
      y < 0 && (y = t.virtual.slides.length + y),
      y >= t.virtual.slides.length && (y -= t.virtual.slides.length),
      y
    )
  }
  if ((typeof c > 'u' && (c = d5(t)), i.indexOf(n) >= 0)) u = i.indexOf(n)
  else {
    const g = Math.min(s.slidesPerGroupSkip, c)
    u = g + Math.floor((c - g) / s.slidesPerGroup)
  }
  if ((u >= i.length && (u = i.length - 1), c === l && !t.params.loop)) {
    u !== o && ((t.snapIndex = u), t.emit('snapIndexChange'))
    return
  }
  if (c === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = f(c)
    return
  }
  const p = t.grid && s.grid && s.grid.rows > 1
  let v
  if (t.virtual && s.virtual.enabled && s.loop) v = f(c)
  else if (p) {
    const g = t.slides.find(T => T.column === c)
    let y = parseInt(g.getAttribute('data-swiper-slide-index'), 10)
    Number.isNaN(y) && (y = Math.max(t.slides.indexOf(g), 0)),
      (v = Math.floor(y / s.grid.rows))
  } else if (t.slides[c]) {
    const g = t.slides[c].getAttribute('data-swiper-slide-index')
    g ? (v = parseInt(g, 10)) : (v = c)
  } else v = c
  Object.assign(t, {
    previousSnapIndex: o,
    snapIndex: u,
    previousRealIndex: a,
    realIndex: v,
    previousIndex: l,
    activeIndex: c,
  }),
    t.initialized && g2(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (a !== v && t.emit('realIndexChange'), t.emit('slideChange'))
}
function u5(e, t) {
  const n = this,
    i = n.params
  let s = e.closest(`.${i.slideClass}, swiper-slide`)
  !s &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach(o => {
      !s && o.matches && o.matches(`.${i.slideClass}, swiper-slide`) && (s = o)
    })
  let l = !1,
    a
  if (s) {
    for (let o = 0; o < n.slides.length; o += 1)
      if (n.slides[o] === s) {
        ;(l = !0), (a = o)
        break
      }
  }
  if (s && l)
    (n.clickedSlide = s),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            s.getAttribute('data-swiper-slide-index'),
            10
          ))
        : (n.clickedIndex = a)
  else {
    ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
    return
  }
  i.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var h5 = {
  updateSize: i5,
  updateSlides: s5,
  updateAutoHeight: r5,
  updateSlidesOffset: l5,
  updateSlidesProgress: a5,
  updateProgress: o5,
  updateSlidesClasses: c5,
  updateActiveIndex: f5,
  updateClickedSlide: u5,
}
function p5(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
  const t = this,
    { params: n, rtlTranslate: i, translate: s, wrapperEl: l } = t
  if (n.virtualTranslate) return i ? -s : s
  if (n.cssMode) return s
  let a = Gf(l, e)
  return (a += t.cssOverflowAdjustment()), i && (a = -a), a || 0
}
function m5(e, t) {
  const n = this,
    { rtlTranslate: i, params: s, wrapperEl: l, progress: a } = n
  let o = 0,
    c = 0
  const u = 0
  n.isHorizontal() ? (o = i ? -e : e) : (c = e),
    s.roundLengths && ((o = Math.floor(o)), (c = Math.floor(c))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : c),
    s.cssMode
      ? (l[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal()
          ? -o
          : -c)
      : s.virtualTranslate ||
        (n.isHorizontal()
          ? (o -= n.cssOverflowAdjustment())
          : (c -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${o}px, ${c}px, ${u}px)`))
  let f
  const p = n.maxTranslate() - n.minTranslate()
  p === 0 ? (f = 0) : (f = (e - n.minTranslate()) / p),
    f !== a && n.updateProgress(e),
    n.emit('setTranslate', n.translate, t)
}
function v5() {
  return -this.snapGrid[0]
}
function g5() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function z5(e, t, n, i, s) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    i === void 0 && (i = !0)
  const l = this,
    { params: a, wrapperEl: o } = l
  if (l.animating && a.preventInteractionOnTransition) return !1
  const c = l.minTranslate(),
    u = l.maxTranslate()
  let f
  if (
    (i && e > c ? (f = c) : i && e < u ? (f = u) : (f = e),
    l.updateProgress(f),
    a.cssMode)
  ) {
    const p = l.isHorizontal()
    if (t === 0) o[p ? 'scrollLeft' : 'scrollTop'] = -f
    else {
      if (!l.support.smoothScroll)
        return (
          Ho({ swiper: l, targetPosition: -f, side: p ? 'left' : 'top' }), !0
        )
      o.scrollTo({ [p ? 'left' : 'top']: -f, behavior: 'smooth' })
    }
    return !0
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(f),
        n && (l.emit('beforeTransitionStart', t, s), l.emit('transitionEnd')))
      : (l.setTransition(t),
        l.setTranslate(f),
        n && (l.emit('beforeTransitionStart', t, s), l.emit('transitionStart')),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (v) {
              !l ||
                l.destroyed ||
                (v.target === this &&
                  (l.wrapperEl.removeEventListener(
                    'transitionend',
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  (l.animating = !1),
                  n && l.emit('transitionEnd')))
            }),
          l.wrapperEl.addEventListener(
            'transitionend',
            l.onTranslateToWrapperTransitionEnd
          ))),
    !0
  )
}
var b5 = {
  getTranslate: p5,
  setTranslate: m5,
  minTranslate: v5,
  maxTranslate: g5,
  translateTo: z5,
}
function _5(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t)
}
function Uo(e) {
  let { swiper: t, runCallbacks: n, direction: i, step: s } = e
  const { activeIndex: l, previousIndex: a } = t
  let o = i
  if (
    (o || (l > a ? (o = 'next') : l < a ? (o = 'prev') : (o = 'reset')),
    t.emit(`transition${s}`),
    n && l !== a)
  ) {
    if (o === 'reset') {
      t.emit(`slideResetTransition${s}`)
      return
    }
    t.emit(`slideChangeTransition${s}`),
      o === 'next'
        ? t.emit(`slideNextTransition${s}`)
        : t.emit(`slidePrevTransition${s}`)
  }
}
function w5(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: i } = n
  i.cssMode ||
    (i.autoHeight && n.updateAutoHeight(),
    Uo({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function y5(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: i } = n
  ;(n.animating = !1),
    !i.cssMode &&
      (n.setTransition(0),
      Uo({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
var S5 = { setTransition: _5, transitionStart: w5, transitionEnd: y5 }
function E5(e, t, n, i, s) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10))
  const l = this
  let a = e
  a < 0 && (a = 0)
  const {
    params: o,
    snapGrid: c,
    slidesGrid: u,
    previousIndex: f,
    activeIndex: p,
    rtlTranslate: v,
    wrapperEl: g,
    enabled: y,
  } = l
  if (
    (!y && !i && !s) ||
    l.destroyed ||
    (l.animating && o.preventInteractionOnTransition)
  )
    return !1
  typeof t > 'u' && (t = l.params.speed)
  const T = Math.min(l.params.slidesPerGroupSkip, a)
  let k = T + Math.floor((a - T) / l.params.slidesPerGroup)
  k >= c.length && (k = c.length - 1)
  const x = -c[k]
  if (o.normalizeSlideIndex)
    for (let Q = 0; Q < u.length; Q += 1) {
      const Y = -Math.floor(x * 100),
        F = Math.floor(u[Q] * 100),
        V = Math.floor(u[Q + 1] * 100)
      typeof u[Q + 1] < 'u'
        ? Y >= F && Y < V - (V - F) / 2
          ? (a = Q)
          : Y >= F && Y < V && (a = Q + 1)
        : Y >= F && (a = Q)
    }
  if (
    l.initialized &&
    a !== p &&
    ((!l.allowSlideNext &&
      (v
        ? x > l.translate && x > l.minTranslate()
        : x < l.translate && x < l.minTranslate())) ||
      (!l.allowSlidePrev &&
        x > l.translate &&
        x > l.maxTranslate() &&
        (p || 0) !== a))
  )
    return !1
  a !== (f || 0) && n && l.emit('beforeSlideChangeStart'), l.updateProgress(x)
  let M
  a > p ? (M = 'next') : a < p ? (M = 'prev') : (M = 'reset')
  const C = l.virtual && l.params.virtual.enabled
  if (!(C && s) && ((v && -x === l.translate) || (!v && x === l.translate)))
    return (
      l.updateActiveIndex(a),
      o.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      o.effect !== 'slide' && l.setTranslate(x),
      M !== 'reset' && (l.transitionStart(n, M), l.transitionEnd(n, M)),
      !1
    )
  if (o.cssMode) {
    const Q = l.isHorizontal(),
      Y = v ? x : -x
    if (t === 0)
      C &&
        ((l.wrapperEl.style.scrollSnapType = 'none'),
        (l._immediateVirtual = !0)),
        C && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[Q ? 'scrollLeft' : 'scrollTop'] = Y
            }))
          : (g[Q ? 'scrollLeft' : 'scrollTop'] = Y),
        C &&
          requestAnimationFrame(() => {
            ;(l.wrapperEl.style.scrollSnapType = ''), (l._immediateVirtual = !1)
          })
    else {
      if (!l.support.smoothScroll)
        return (
          Ho({ swiper: l, targetPosition: Y, side: Q ? 'left' : 'top' }), !0
        )
      g.scrollTo({ [Q ? 'left' : 'top']: Y, behavior: 'smooth' })
    }
    return !0
  }
  const ie = qo().isSafari
  return (
    C && !s && ie && l.isElement && l.virtual.update(!1, !1, a),
    l.setTransition(t),
    l.setTranslate(x),
    l.updateActiveIndex(a),
    l.updateSlidesClasses(),
    l.emit('beforeTransitionStart', t, i),
    l.transitionStart(n, M),
    t === 0
      ? l.transitionEnd(n, M)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (Y) {
            !l ||
              l.destroyed ||
              (Y.target === this &&
                (l.wrapperEl.removeEventListener(
                  'transitionend',
                  l.onSlideToWrapperTransitionEnd
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, M)))
          }),
        l.wrapperEl.addEventListener(
          'transitionend',
          l.onSlideToWrapperTransitionEnd
        )),
    !0
  )
}
function x5(e, t, n, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10))
  const s = this
  if (s.destroyed) return
  typeof t > 'u' && (t = s.params.speed)
  const l = s.grid && s.params.grid && s.params.grid.rows > 1
  let a = e
  if (s.params.loop)
    if (s.virtual && s.params.virtual.enabled) a = a + s.virtual.slidesBefore
    else {
      let o
      if (l) {
        const v = a * s.params.grid.rows
        o = s.slides.find(
          g => g.getAttribute('data-swiper-slide-index') * 1 === v
        ).column
      } else o = s.getSlideIndexByData(a)
      const c = l
          ? Math.ceil(s.slides.length / s.params.grid.rows)
          : s.slides.length,
        { centeredSlides: u } = s.params
      let f = s.params.slidesPerView
      f === 'auto'
        ? (f = s.slidesPerViewDynamic())
        : ((f = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
          u && f % 2 === 0 && (f = f + 1))
      let p = c - o < f
      if (
        (u && (p = p || o < Math.ceil(f / 2)),
        i && u && s.params.slidesPerView !== 'auto' && !l && (p = !1),
        p)
      ) {
        const v = u
          ? o < s.activeIndex
            ? 'prev'
            : 'next'
          : o - s.activeIndex - 1 < s.params.slidesPerView
            ? 'next'
            : 'prev'
        s.loopFix({
          direction: v,
          slideTo: !0,
          activeSlideIndex: v === 'next' ? o + 1 : o - c + 1,
          slideRealIndex: v === 'next' ? s.realIndex : void 0,
        })
      }
      if (l) {
        const v = a * s.params.grid.rows
        a = s.slides.find(
          g => g.getAttribute('data-swiper-slide-index') * 1 === v
        ).column
      } else a = s.getSlideIndexByData(a)
    }
  return (
    requestAnimationFrame(() => {
      s.slideTo(a, t, n, i)
    }),
    s
  )
}
function T5(e, t, n) {
  t === void 0 && (t = !0)
  const i = this,
    { enabled: s, params: l, animating: a } = i
  if (!s || i.destroyed) return i
  typeof e > 'u' && (e = i.params.speed)
  let o = l.slidesPerGroup
  l.slidesPerView === 'auto' &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (o = Math.max(i.slidesPerViewDynamic('current', !0), 1))
  const c = i.activeIndex < l.slidesPerGroupSkip ? 1 : o,
    u = i.virtual && l.virtual.enabled
  if (l.loop) {
    if (a && !u && l.loopPreventsSliding) return !1
    if (
      (i.loopFix({ direction: 'next' }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && l.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + c, e, t, n)
        }),
        !0
      )
  }
  return l.rewind && i.isEnd
    ? i.slideTo(0, e, t, n)
    : i.slideTo(i.activeIndex + c, e, t, n)
}
function M5(e, t, n) {
  t === void 0 && (t = !0)
  const i = this,
    {
      params: s,
      snapGrid: l,
      slidesGrid: a,
      rtlTranslate: o,
      enabled: c,
      animating: u,
    } = i
  if (!c || i.destroyed) return i
  typeof e > 'u' && (e = i.params.speed)
  const f = i.virtual && s.virtual.enabled
  if (s.loop) {
    if (u && !f && s.loopPreventsSliding) return !1
    i.loopFix({ direction: 'prev' }), (i._clientLeft = i.wrapperEl.clientLeft)
  }
  const p = o ? i.translate : -i.translate
  function v(M) {
    return M < 0 ? -Math.floor(Math.abs(M)) : Math.floor(M)
  }
  const g = v(p),
    y = l.map(M => v(M)),
    T = s.freeMode && s.freeMode.enabled
  let k = l[y.indexOf(g) - 1]
  if (typeof k > 'u' && (s.cssMode || T)) {
    let M
    l.forEach((C, R) => {
      g >= C && (M = R)
    }),
      typeof M < 'u' && (k = T ? l[M] : l[M > 0 ? M - 1 : M])
  }
  let x = 0
  if (
    (typeof k < 'u' &&
      ((x = a.indexOf(k)),
      x < 0 && (x = i.activeIndex - 1),
      s.slidesPerView === 'auto' &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        ((x = x - i.slidesPerViewDynamic('previous', !0) + 1),
        (x = Math.max(x, 0)))),
    s.rewind && i.isBeginning)
  ) {
    const M =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1
    return i.slideTo(M, e, t, n)
  } else if (s.loop && i.activeIndex === 0 && s.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(x, e, t, n)
      }),
      !0
    )
  return i.slideTo(x, e, t, n)
}
function C5(e, t, n) {
  t === void 0 && (t = !0)
  const i = this
  if (!i.destroyed)
    return (
      typeof e > 'u' && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, n)
    )
}
function P5(e, t, n, i) {
  t === void 0 && (t = !0), i === void 0 && (i = 0.5)
  const s = this
  if (s.destroyed) return
  typeof e > 'u' && (e = s.params.speed)
  let l = s.activeIndex
  const a = Math.min(s.params.slidesPerGroupSkip, l),
    o = a + Math.floor((l - a) / s.params.slidesPerGroup),
    c = s.rtlTranslate ? s.translate : -s.translate
  if (c >= s.snapGrid[o]) {
    const u = s.snapGrid[o],
      f = s.snapGrid[o + 1]
    c - u > (f - u) * i && (l += s.params.slidesPerGroup)
  } else {
    const u = s.snapGrid[o - 1],
      f = s.snapGrid[o]
    c - u <= (f - u) * i && (l -= s.params.slidesPerGroup)
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, s.slidesGrid.length - 1)),
    s.slideTo(l, e, t, n)
  )
}
function A5() {
  const e = this
  if (e.destroyed) return
  const { params: t, slidesEl: n } = e,
    i = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView
  let s = e.clickedIndex,
    l
  const a = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
  if (t.loop) {
    if (e.animating) return
    ;(l = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? s < e.loopedSlides - i / 2 ||
          s > e.slides.length - e.loopedSlides + i / 2
          ? (e.loopFix(),
            (s = e.getSlideIndex(
              c1(n, `${a}[data-swiper-slide-index="${l}"]`)[0]
            )),
            m2(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
        : s > e.slides.length - i
          ? (e.loopFix(),
            (s = e.getSlideIndex(
              c1(n, `${a}[data-swiper-slide-index="${l}"]`)[0]
            )),
            m2(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
  } else e.slideTo(s)
}
var O5 = {
  slideTo: E5,
  slideToLoop: x5,
  slideNext: T5,
  slidePrev: M5,
  slideReset: C5,
  slideToClosest: P5,
  slideToClickedSlide: A5,
}
function I5(e, t) {
  const n = this,
    { params: i, slidesEl: s } = n
  if (!i.loop || (n.virtual && n.params.virtual.enabled)) return
  const l = () => {
      c1(s, `.${i.slideClass}, swiper-slide`).forEach((v, g) => {
        v.setAttribute('data-swiper-slide-index', g)
      })
    },
    a = n.grid && i.grid && i.grid.rows > 1,
    o = i.slidesPerGroup * (a ? i.grid.rows : 1),
    c = n.slides.length % o !== 0,
    u = a && n.slides.length % i.grid.rows !== 0,
    f = p => {
      for (let v = 0; v < p; v += 1) {
        const g = n.isElement
          ? v2('swiper-slide', [i.slideBlankClass])
          : v2('div', [i.slideClass, i.slideBlankClass])
        n.slidesEl.append(g)
      }
    }
  if (c) {
    if (i.loopAddBlankSlides) {
      const p = o - (n.slides.length % o)
      f(p), n.recalcSlides(), n.updateSlides()
    } else
      Fi(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    l()
  } else if (u) {
    if (i.loopAddBlankSlides) {
      const p = i.grid.rows - (n.slides.length % i.grid.rows)
      f(p), n.recalcSlides(), n.updateSlides()
    } else
      Fi(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    l()
  } else l()
  n.loopFix({
    slideRealIndex: e,
    direction: i.centeredSlides ? void 0 : 'next',
    initial: t,
  })
}
function L5(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: i,
    setTranslate: s,
    activeSlideIndex: l,
    initial: a,
    byController: o,
    byMousewheel: c,
  } = e === void 0 ? {} : e
  const u = this
  if (!u.params.loop) return
  u.emit('beforeLoopFix')
  const {
      slides: f,
      allowSlidePrev: p,
      allowSlideNext: v,
      slidesEl: g,
      params: y,
    } = u,
    { centeredSlides: T, initialSlide: k } = y
  if (
    ((u.allowSlidePrev = !0),
    (u.allowSlideNext = !0),
    u.virtual && y.virtual.enabled)
  ) {
    n &&
      (!y.centeredSlides && u.snapIndex === 0
        ? u.slideTo(u.virtual.slides.length, 0, !1, !0)
        : y.centeredSlides && u.snapIndex < y.slidesPerView
          ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0)
          : u.snapIndex === u.snapGrid.length - 1 &&
            u.slideTo(u.virtual.slidesBefore, 0, !1, !0)),
      (u.allowSlidePrev = p),
      (u.allowSlideNext = v),
      u.emit('loopFix')
    return
  }
  let x = y.slidesPerView
  x === 'auto'
    ? (x = u.slidesPerViewDynamic())
    : ((x = Math.ceil(parseFloat(y.slidesPerView, 10))),
      T && x % 2 === 0 && (x = x + 1))
  const M = y.slidesPerGroupAuto ? x : y.slidesPerGroup
  let C = M
  C % M !== 0 && (C += M - (C % M)),
    (C += y.loopAdditionalSlides),
    (u.loopedSlides = C)
  const R = u.grid && y.grid && y.grid.rows > 1
  f.length < x + C || (u.params.effect === 'cards' && f.length < x + C * 2)
    ? Fi(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : R &&
      y.grid.fill === 'row' &&
      Fi(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      )
  const N = [],
    ie = [],
    Q = R ? Math.ceil(f.length / y.grid.rows) : f.length,
    Y = a && Q - k < x && !T
  let F = Y ? k : u.activeIndex
  typeof l > 'u'
    ? (l = u.getSlideIndex(
        f.find(ne => ne.classList.contains(y.slideActiveClass))
      ))
    : (F = l)
  const V = i === 'next' || !i,
    ee = i === 'prev' || !i
  let fe = 0,
    _e = 0
  const Ke = (R ? f[l].column : l) + (T && typeof s > 'u' ? -x / 2 + 0.5 : 0)
  if (Ke < C) {
    fe = Math.max(C - Ke, M)
    for (let ne = 0; ne < C - Ke; ne += 1) {
      const le = ne - Math.floor(ne / Q) * Q
      if (R) {
        const oe = Q - le - 1
        for (let Fe = f.length - 1; Fe >= 0; Fe -= 1)
          f[Fe].column === oe && N.push(Fe)
      } else N.push(Q - le - 1)
    }
  } else if (Ke + x > Q - C) {
    ;(_e = Math.max(Ke - (Q - C * 2), M)),
      Y && (_e = Math.max(_e, x - Q + k + 1))
    for (let ne = 0; ne < _e; ne += 1) {
      const le = ne - Math.floor(ne / Q) * Q
      R
        ? f.forEach((oe, Fe) => {
            oe.column === le && ie.push(Fe)
          })
        : ie.push(le)
    }
  }
  if (
    ((u.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      u.__preventObserver__ = !1
    }),
    u.params.effect === 'cards' &&
      f.length < x + C * 2 &&
      (ie.includes(l) && ie.splice(ie.indexOf(l), 1),
      N.includes(l) && N.splice(N.indexOf(l), 1)),
    ee &&
      N.forEach(ne => {
        ;(f[ne].swiperLoopMoveDOM = !0),
          g.prepend(f[ne]),
          (f[ne].swiperLoopMoveDOM = !1)
      }),
    V &&
      ie.forEach(ne => {
        ;(f[ne].swiperLoopMoveDOM = !0),
          g.append(f[ne]),
          (f[ne].swiperLoopMoveDOM = !1)
      }),
    u.recalcSlides(),
    y.slidesPerView === 'auto'
      ? u.updateSlides()
      : R &&
        ((N.length > 0 && ee) || (ie.length > 0 && V)) &&
        u.slides.forEach((ne, le) => {
          u.grid.updateSlide(le, ne, u.slides)
        }),
    y.watchSlidesProgress && u.updateSlidesOffset(),
    n)
  ) {
    if (N.length > 0 && ee) {
      if (typeof t > 'u') {
        const ne = u.slidesGrid[F],
          oe = u.slidesGrid[F + fe] - ne
        c
          ? u.setTranslate(u.translate - oe)
          : (u.slideTo(F + Math.ceil(fe), 0, !1, !0),
            s &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - oe),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - oe)))
      } else if (s) {
        const ne = R ? N.length / y.grid.rows : N.length
        u.slideTo(u.activeIndex + ne, 0, !1, !0),
          (u.touchEventsData.currentTranslate = u.translate)
      }
    } else if (ie.length > 0 && V)
      if (typeof t > 'u') {
        const ne = u.slidesGrid[F],
          oe = u.slidesGrid[F - _e] - ne
        c
          ? u.setTranslate(u.translate - oe)
          : (u.slideTo(F - _e, 0, !1, !0),
            s &&
              ((u.touchEventsData.startTranslate =
                u.touchEventsData.startTranslate - oe),
              (u.touchEventsData.currentTranslate =
                u.touchEventsData.currentTranslate - oe)))
      } else {
        const ne = R ? ie.length / y.grid.rows : ie.length
        u.slideTo(u.activeIndex - ne, 0, !1, !0)
      }
  }
  if (
    ((u.allowSlidePrev = p),
    (u.allowSlideNext = v),
    u.controller && u.controller.control && !o)
  ) {
    const ne = {
      slideRealIndex: t,
      direction: i,
      setTranslate: s,
      activeSlideIndex: l,
      byController: !0,
    }
    Array.isArray(u.controller.control)
      ? u.controller.control.forEach(le => {
          !le.destroyed &&
            le.params.loop &&
            le.loopFix({
              ...ne,
              slideTo: le.params.slidesPerView === y.slidesPerView ? n : !1,
            })
        })
      : u.controller.control instanceof u.constructor &&
        u.controller.control.params.loop &&
        u.controller.control.loopFix({
          ...ne,
          slideTo:
            u.controller.control.params.slidesPerView === y.slidesPerView
              ? n
              : !1,
        })
  }
  u.emit('loopFix')
}
function D5() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const i = []
  e.slides.forEach(s => {
    const l =
      typeof s.swiperSlideIndex > 'u'
        ? s.getAttribute('data-swiper-slide-index') * 1
        : s.swiperSlideIndex
    i[l] = s
  }),
    e.slides.forEach(s => {
      s.removeAttribute('data-swiper-slide-index')
    }),
    i.forEach(s => {
      n.append(s)
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
var R5 = { loopCreate: I5, loopFix: L5, loopDestroy: D5 }
function $5(e) {
  const t = this
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return
  const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = 'move'),
    (n.style.cursor = e ? 'grabbing' : 'grab'),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1
      })
}
function k5() {
  const e = this
  ;(e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = ''),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1
      }))
}
var B5 = { setGrabCursor: $5, unsetGrabCursor: k5 }
function N5(e, t) {
  t === void 0 && (t = this)
  function n(i) {
    if (!i || i === W1() || i === ht()) return null
    i.assignedSlot && (i = i.assignedSlot)
    const s = i.closest(e)
    return !s && !i.getRootNode ? null : s || n(i.getRootNode().host)
  }
  return n(t)
}
function ga(e, t, n) {
  const i = ht(),
    { params: s } = e,
    l = s.edgeSwipeDetection,
    a = s.edgeSwipeThreshold
  return l && (n <= a || n >= i.innerWidth - a)
    ? l === 'prevent'
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function F5(e) {
  const t = this,
    n = W1()
  let i = e
  i.originalEvent && (i = i.originalEvent)
  const s = t.touchEventsData
  if (i.type === 'pointerdown') {
    if (s.pointerId !== null && s.pointerId !== i.pointerId) return
    s.pointerId = i.pointerId
  } else
    i.type === 'touchstart' &&
      i.targetTouches.length === 1 &&
      (s.touchId = i.targetTouches[0].identifier)
  if (i.type === 'touchstart') {
    ga(t, i, i.targetTouches[0].pageX)
    return
  }
  const { params: l, touches: a, enabled: o } = t
  if (
    !o ||
    (!l.simulateTouch && i.pointerType === 'mouse') ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return
  !t.animating && l.cssMode && l.loop && t.loopFix()
  let c = i.target
  if (
    (l.touchEventsTarget === 'wrapper' && !Uf(c, t.wrapperEl)) ||
    ('which' in i && i.which === 3) ||
    ('button' in i && i.button > 0) ||
    (s.isTouched && s.isMoved)
  )
    return
  const u = !!l.noSwipingClass && l.noSwipingClass !== '',
    f = i.composedPath ? i.composedPath() : i.path
  u && i.target && i.target.shadowRoot && f && (c = f[0])
  const p = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    v = !!(i.target && i.target.shadowRoot)
  if (l.noSwiping && (v ? N5(p, c) : c.closest(p))) {
    t.allowClick = !0
    return
  }
  if (l.swipeHandler && !c.closest(l.swipeHandler)) return
  ;(a.currentX = i.pageX), (a.currentY = i.pageY)
  const g = a.currentX,
    y = a.currentY
  if (!ga(t, i, g)) return
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (a.startX = g),
    (a.startY = y),
    (s.touchStartTime = Ni()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (s.allowThresholdMove = !1)
  let T = !0
  c.matches(s.focusableElements) &&
    ((T = !1), c.nodeName === 'SELECT' && (s.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(s.focusableElements) &&
      n.activeElement !== c &&
      (i.pointerType === 'mouse' ||
        (i.pointerType !== 'mouse' && !c.matches(s.focusableElements))) &&
      n.activeElement.blur()
  const k = T && t.allowTouchMove && l.touchStartPreventDefault
  ;(l.touchStartForcePreventDefault || k) &&
    !c.isContentEditable &&
    i.preventDefault(),
    l.freeMode &&
      l.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit('touchStart', i)
}
function V5(e) {
  const t = W1(),
    n = this,
    i = n.touchEventsData,
    { params: s, touches: l, rtlTranslate: a, enabled: o } = n
  if (!o || (!s.simulateTouch && e.pointerType === 'mouse')) return
  let c = e
  if (
    (c.originalEvent && (c = c.originalEvent),
    c.type === 'pointermove' &&
      (i.touchId !== null || c.pointerId !== i.pointerId))
  )
    return
  let u
  if (c.type === 'touchmove') {
    if (
      ((u = [...c.changedTouches].find(N => N.identifier === i.touchId)),
      !u || u.identifier !== i.touchId)
    )
      return
  } else u = c
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && n.emit('touchMoveOpposite', c)
    return
  }
  const f = u.pageX,
    p = u.pageY
  if (c.preventedByNestedSwiper) {
    ;(l.startX = f), (l.startY = p)
    return
  }
  if (!n.allowTouchMove) {
    c.target.matches(i.focusableElements) || (n.allowClick = !1),
      i.isTouched &&
        (Object.assign(l, { startX: f, startY: p, currentX: f, currentY: p }),
        (i.touchStartTime = Ni()))
    return
  }
  if (s.touchReleaseOnEdges && !s.loop)
    if (n.isVertical()) {
      if (
        (p < l.startY && n.translate <= n.maxTranslate()) ||
        (p > l.startY && n.translate >= n.minTranslate())
      ) {
        ;(i.isTouched = !1), (i.isMoved = !1)
        return
      }
    } else {
      if (
        a &&
        ((f > l.startX && -n.translate <= n.maxTranslate()) ||
          (f < l.startX && -n.translate >= n.minTranslate()))
      )
        return
      if (
        !a &&
        ((f < l.startX && n.translate <= n.maxTranslate()) ||
          (f > l.startX && n.translate >= n.minTranslate()))
      )
        return
    }
  if (
    (t.activeElement &&
      t.activeElement.matches(i.focusableElements) &&
      t.activeElement !== c.target &&
      c.pointerType !== 'mouse' &&
      t.activeElement.blur(),
    t.activeElement &&
      c.target === t.activeElement &&
      c.target.matches(i.focusableElements))
  ) {
    ;(i.isMoved = !0), (n.allowClick = !1)
    return
  }
  i.allowTouchCallbacks && n.emit('touchMove', c),
    (l.previousX = l.currentX),
    (l.previousY = l.currentY),
    (l.currentX = f),
    (l.currentY = p)
  const v = l.currentX - l.startX,
    g = l.currentY - l.startY
  if (n.params.threshold && Math.sqrt(v ** 2 + g ** 2) < n.params.threshold)
    return
  if (typeof i.isScrolling > 'u') {
    let N
    ;(n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (i.isScrolling = !1)
      : v * v + g * g >= 25 &&
        ((N = (Math.atan2(Math.abs(g), Math.abs(v)) * 180) / Math.PI),
        (i.isScrolling = n.isHorizontal()
          ? N > s.touchAngle
          : 90 - N > s.touchAngle))
  }
  if (
    (i.isScrolling && n.emit('touchMoveOpposite', c),
    typeof i.startMoving > 'u' &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (i.startMoving = !0),
    i.isScrolling ||
      (c.type === 'touchmove' && i.preventTouchMoveFromPointerMove))
  ) {
    i.isTouched = !1
    return
  }
  if (!i.startMoving) return
  ;(n.allowClick = !1),
    !s.cssMode && c.cancelable && c.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && c.stopPropagation()
  let y = n.isHorizontal() ? v : g,
    T = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY
  s.oneWayMovement &&
    ((y = Math.abs(y) * (a ? 1 : -1)), (T = Math.abs(T) * (a ? 1 : -1))),
    (l.diff = y),
    (y *= s.touchRatio),
    a && ((y = -y), (T = -T))
  const k = n.touchesDirection
  ;(n.swipeDirection = y > 0 ? 'prev' : 'next'),
    (n.touchesDirection = T > 0 ? 'prev' : 'next')
  const x = n.params.loop && !s.cssMode,
    M =
      (n.touchesDirection === 'next' && n.allowSlideNext) ||
      (n.touchesDirection === 'prev' && n.allowSlidePrev)
  if (!i.isMoved) {
    if (
      (x && M && n.loopFix({ direction: n.swipeDirection }),
      (i.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const N = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      })
      n.wrapperEl.dispatchEvent(N)
    }
    ;(i.allowMomentumBounce = !1),
      s.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit('sliderFirstMove', c)
  }
  if (
    (new Date().getTime(),
    s._loopSwapReset !== !1 &&
      i.isMoved &&
      i.allowThresholdMove &&
      k !== n.touchesDirection &&
      x &&
      M &&
      Math.abs(y) >= 1)
  ) {
    Object.assign(l, {
      startX: f,
      startY: p,
      currentX: f,
      currentY: p,
      startTranslate: i.currentTranslate,
    }),
      (i.loopSwapReset = !0),
      (i.startTranslate = i.currentTranslate)
    return
  }
  n.emit('sliderMove', c),
    (i.isMoved = !0),
    (i.currentTranslate = y + i.startTranslate)
  let C = !0,
    R = s.resistanceRatio
  if (
    (s.touchReleaseOnEdges && (R = 0),
    y > 0
      ? (x &&
          M &&
          i.allowThresholdMove &&
          i.currentTranslate >
            (s.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (s.slidesPerView !== 'auto' &&
                n.slides.length - s.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: 'prev',
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > n.minTranslate() &&
          ((C = !1),
          s.resistance &&
            (i.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + i.startTranslate + y) ** R)))
      : y < 0 &&
        (x &&
          M &&
          i.allowThresholdMove &&
          i.currentTranslate <
            (s.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (s.slidesPerView !== 'auto' &&
                n.slides.length - s.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (s.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(s.slidesPerView, 10))),
          }),
        i.currentTranslate < n.maxTranslate() &&
          ((C = !1),
          s.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - i.startTranslate - y) ** R))),
    C && (c.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === 'next' &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === 'prev' &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    s.threshold > 0)
  )
    if (Math.abs(y) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        ;(i.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (i.currentTranslate = i.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY)
        return
      }
    } else {
      i.currentTranslate = i.startTranslate
      return
    }
  !s.followFinger ||
    s.cssMode ||
    (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
      s.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    s.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(i.currentTranslate),
    n.setTranslate(i.currentTranslate))
}
function j5(e) {
  const t = this,
    n = t.touchEventsData
  let i = e
  i.originalEvent && (i = i.originalEvent)
  let s
  if (i.type === 'touchend' || i.type === 'touchcancel') {
    if (
      ((s = [...i.changedTouches].find(N => N.identifier === n.touchId)),
      !s || s.identifier !== n.touchId)
    )
      return
  } else {
    if (n.touchId !== null || i.pointerId !== n.pointerId) return
    s = i
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
      i.type
    ) &&
    !(
      ['pointercancel', 'contextmenu'].includes(i.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return
  ;(n.pointerId = null), (n.touchId = null)
  const {
    params: a,
    touches: o,
    rtlTranslate: c,
    slidesGrid: u,
    enabled: f,
  } = t
  if (!f || (!a.simulateTouch && i.pointerType === 'mouse')) return
  if (
    (n.allowTouchCallbacks && t.emit('touchEnd', i),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && a.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1)
    return
  }
  a.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const p = Ni(),
    v = p - n.touchStartTime
  if (t.allowClick) {
    const N = i.path || (i.composedPath && i.composedPath())
    t.updateClickedSlide((N && N[0]) || i.target, N),
      t.emit('tap click', i),
      v < 300 && p - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', i)
  }
  if (
    ((n.lastClickTime = Ni()),
    m2(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (o.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
  let g
  if (
    (a.followFinger
      ? (g = c ? t.translate : -t.translate)
      : (g = -n.currentTranslate),
    a.cssMode)
  )
    return
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: g })
    return
  }
  const y = g >= -t.maxTranslate() && !t.params.loop
  let T = 0,
    k = t.slidesSizesGrid[0]
  for (
    let N = 0;
    N < u.length;
    N += N < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const ie = N < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
    typeof u[N + ie] < 'u'
      ? (y || (g >= u[N] && g < u[N + ie])) && ((T = N), (k = u[N + ie] - u[N]))
      : (y || g >= u[N]) && ((T = N), (k = u[u.length - 1] - u[u.length - 2]))
  }
  let x = null,
    M = null
  a.rewind &&
    (t.isBeginning
      ? (M =
          a.virtual && a.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (x = 0))
  const C = (g - u[T]) / k,
    R = T < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
  if (v > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === 'next' &&
      (C >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? x : T + R)
        : t.slideTo(T)),
      t.swipeDirection === 'prev' &&
        (C > 1 - a.longSwipesRatio
          ? t.slideTo(T + R)
          : M !== null && C < 0 && Math.abs(C) > a.longSwipesRatio
            ? t.slideTo(M)
            : t.slideTo(T))
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl)
      ? i.target === t.navigation.nextEl
        ? t.slideTo(T + R)
        : t.slideTo(T)
      : (t.swipeDirection === 'next' && t.slideTo(x !== null ? x : T + R),
        t.swipeDirection === 'prev' && t.slideTo(M !== null ? M : T))
  }
}
function za() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: i, allowSlidePrev: s, snapGrid: l } = e,
    a = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const o = a && t.loop
  ;(t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !o
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !a
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume()
      }, 500))),
    (e.allowSlidePrev = s),
    (e.allowSlideNext = i),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
}
function H5(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function G5() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: i } = e
  if (!i) return
  ;(e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses()
  let s
  const l = e.maxTranslate() - e.minTranslate()
  l === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / l),
    s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1)
}
function W5(e) {
  const t = this
  Ci(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
    ) && t.update()
}
function q5() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const Ko = (e, t) => {
  const n = W1(),
    { params: i, el: s, wrapperEl: l, device: a } = e,
    o = !!i.nested,
    c = t === 'on' ? 'addEventListener' : 'removeEventListener',
    u = t
  !s ||
    typeof s == 'string' ||
    (n[c]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: o }),
    s[c]('touchstart', e.onTouchStart, { passive: !1 }),
    s[c]('pointerdown', e.onTouchStart, { passive: !1 }),
    n[c]('touchmove', e.onTouchMove, { passive: !1, capture: o }),
    n[c]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
    n[c]('touchend', e.onTouchEnd, { passive: !0 }),
    n[c]('pointerup', e.onTouchEnd, { passive: !0 }),
    n[c]('pointercancel', e.onTouchEnd, { passive: !0 }),
    n[c]('touchcancel', e.onTouchEnd, { passive: !0 }),
    n[c]('pointerout', e.onTouchEnd, { passive: !0 }),
    n[c]('pointerleave', e.onTouchEnd, { passive: !0 }),
    n[c]('contextmenu', e.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      s[c]('click', e.onClick, !0),
    i.cssMode && l[c]('scroll', e.onScroll),
    i.updateOnWindowResize
      ? e[u](
          a.ios || a.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          za,
          !0
        )
      : e[u]('observerUpdate', za, !0),
    s[c]('load', e.onLoad, { capture: !0 }))
}
function U5() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = F5.bind(e)),
    (e.onTouchMove = V5.bind(e)),
    (e.onTouchEnd = j5.bind(e)),
    (e.onDocumentTouchStart = q5.bind(e)),
    t.cssMode && (e.onScroll = G5.bind(e)),
    (e.onClick = H5.bind(e)),
    (e.onLoad = W5.bind(e)),
    Ko(e, 'on')
}
function K5() {
  Ko(this, 'off')
}
var Y5 = { attachEvents: U5, detachEvents: K5 }
const ba = (e, t) => e.grid && t.grid && t.grid.rows > 1
function X5() {
  const e = this,
    { realIndex: t, initialized: n, params: i, el: s } = e,
    l = i.breakpoints
  if (!l || (l && Object.keys(l).length === 0)) return
  const a = W1(),
    o =
      i.breakpointsBase === 'window' || !i.breakpointsBase
        ? i.breakpointsBase
        : 'container',
    c =
      ['window', 'container'].includes(i.breakpointsBase) || !i.breakpointsBase
        ? e.el
        : a.querySelector(i.breakpointsBase),
    u = e.getBreakpoint(l, o, c)
  if (!u || e.currentBreakpoint === u) return
  const p = (u in l ? l[u] : void 0) || e.originalParams,
    v = ba(e, i),
    g = ba(e, p),
    y = e.params.grabCursor,
    T = p.grabCursor,
    k = i.enabled
  v && !g
    ? (s.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !v &&
      g &&
      (s.classList.add(`${i.containerModifierClass}grid`),
      ((p.grid.fill && p.grid.fill === 'column') ||
        (!p.grid.fill && i.grid.fill === 'column')) &&
        s.classList.add(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    y && !T ? e.unsetGrabCursor() : !y && T && e.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach(ie => {
      if (typeof p[ie] > 'u') return
      const Q = i[ie] && i[ie].enabled,
        Y = p[ie] && p[ie].enabled
      Q && !Y && e[ie].disable(), !Q && Y && e[ie].enable()
    })
  const x = p.direction && p.direction !== i.direction,
    M = i.loop && (p.slidesPerView !== i.slidesPerView || x),
    C = i.loop
  x && n && e.changeDirection(), yt(e.params, p)
  const R = e.params.enabled,
    N = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    k && !R ? e.disable() : !k && R && e.enable(),
    (e.currentBreakpoint = u),
    e.emit('_beforeBreakpoint', p),
    n &&
      (M
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !C && N
          ? (e.loopCreate(t), e.updateSlides())
          : C && !N && e.loopDestroy()),
    e.emit('breakpoint', p)
}
function Q5(e, t, n) {
  if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return
  let i = !1
  const s = ht(),
    l = t === 'window' ? s.innerHeight : n.clientHeight,
    a = Object.keys(e).map(o => {
      if (typeof o == 'string' && o.indexOf('@') === 0) {
        const c = parseFloat(o.substr(1))
        return { value: l * c, point: o }
      }
      return { value: o, point: o }
    })
  a.sort((o, c) => parseInt(o.value, 10) - parseInt(c.value, 10))
  for (let o = 0; o < a.length; o += 1) {
    const { point: c, value: u } = a[o]
    t === 'window'
      ? s.matchMedia(`(min-width: ${u}px)`).matches && (i = c)
      : u <= n.clientWidth && (i = c)
  }
  return i || 'max'
}
var J5 = { setBreakpoint: X5, getBreakpoint: Q5 }
function Z5(e, t) {
  const n = []
  return (
    e.forEach(i => {
      typeof i == 'object'
        ? Object.keys(i).forEach(s => {
            i[s] && n.push(t + s)
          })
        : typeof i == 'string' && n.push(t + i)
    }),
    n
  )
}
function eu() {
  const e = this,
    { classNames: t, params: n, rtl: i, el: s, device: l } = e,
    a = Z5(
      [
        'initialized',
        n.direction,
        { 'free-mode': e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: i },
        { grid: n.grid && n.grid.rows > 1 },
        {
          'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column',
        },
        { android: l.android },
        { ios: l.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress },
      ],
      n.containerModifierClass
    )
  t.push(...a), s.classList.add(...t), e.emitContainerClasses()
}
function tu() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == 'string' ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var nu = { addClasses: eu, removeClasses: tu }
function iu() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: i } = n
  if (i) {
    const s = e.slides.length - 1,
      l = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2
    e.isLocked = e.size > l
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
}
var su = { checkOverflow: iu },
  z2 = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  }
function ru(e, t) {
  return function (i) {
    i === void 0 && (i = {})
    const s = Object.keys(i)[0],
      l = i[s]
    if (typeof l != 'object' || l === null) {
      yt(t, i)
      return
    }
    if (
      (e[s] === !0 && (e[s] = { enabled: !0 }),
      s === 'navigation' &&
        e[s] &&
        e[s].enabled &&
        !e[s].prevEl &&
        !e[s].nextEl &&
        (e[s].auto = !0),
      ['pagination', 'scrollbar'].indexOf(s) >= 0 &&
        e[s] &&
        e[s].enabled &&
        !e[s].el &&
        (e[s].auto = !0),
      !(s in e && 'enabled' in l))
    ) {
      yt(t, i)
      return
    }
    typeof e[s] == 'object' && !('enabled' in e[s]) && (e[s].enabled = !0),
      e[s] || (e[s] = { enabled: !1 }),
      yt(t, i)
  }
}
const Qs = {
    eventsEmitter: n5,
    update: h5,
    translate: b5,
    transition: S5,
    slide: O5,
    loop: R5,
    grabCursor: B5,
    events: Y5,
    breakpoints: J5,
    checkOverflow: su,
    classes: nu,
  },
  Js = {}
let j2 = class r1 {
  constructor() {
    let t, n
    for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l]
    s.length === 1 &&
    s[0].constructor &&
    Object.prototype.toString.call(s[0]).slice(8, -1) === 'Object'
      ? (n = s[0])
      : ([t, n] = s),
      n || (n = {}),
      (n = yt({}, n)),
      t && !n.el && (n.el = t)
    const a = W1()
    if (
      n.el &&
      typeof n.el == 'string' &&
      a.querySelectorAll(n.el).length > 1
    ) {
      const f = []
      return (
        a.querySelectorAll(n.el).forEach(p => {
          const v = yt({}, n, { el: p })
          f.push(new r1(v))
        }),
        f
      )
    }
    const o = this
    ;(o.__swiper__ = !0),
      (o.support = Go()),
      (o.device = Wo({ userAgent: n.userAgent })),
      (o.browser = qo()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules)
    const c = {}
    o.modules.forEach(f => {
      f({
        params: n,
        swiper: o,
        extendParams: ru(n, c),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      })
    })
    const u = yt({}, z2, c)
    return (
      (o.params = yt({}, u, Js, n)),
      (o.originalParams = yt({}, o.params)),
      (o.passedParams = yt({}, n)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach(f => {
          o.on(f, o.params.on[f])
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === 'horizontal'
        },
        isVertical() {
          return o.params.direction === 'vertical'
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit('_swiper'),
      o.params.init && o.init(),
      o
    )
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[t]
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: i } = this,
      s = c1(n, `.${i.slideClass}, swiper-slide`),
      l = pa(s[0])
    return pa(t) - l
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.find(n => n.getAttribute('data-swiper-slide-index') * 1 === t)
    )
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: i } = t
    t.slides = c1(n, `.${i.slideClass}, swiper-slide`)
  }
  enable() {
    const t = this
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit('enable'))
  }
  disable() {
    const t = this
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit('disable'))
  }
  setProgress(t, n) {
    const i = this
    t = Math.min(Math.max(t, 0), 1)
    const s = i.minTranslate(),
      a = (i.maxTranslate() - s) * t + s
    i.translateTo(a, typeof n > 'u' ? 0 : n),
      i.updateActiveIndex(),
      i.updateSlidesClasses()
  }
  emitContainerClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = t.el.className
      .split(' ')
      .filter(
        i =>
          i.indexOf('swiper') === 0 ||
          i.indexOf(t.params.containerModifierClass) === 0
      )
    t.emit('_containerClasses', n.join(' '))
  }
  getSlideClasses(t) {
    const n = this
    return n.destroyed
      ? ''
      : t.className
          .split(' ')
          .filter(
            i =>
              i.indexOf('swiper-slide') === 0 ||
              i.indexOf(n.params.slideClass) === 0
          )
          .join(' ')
  }
  emitSlidesClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = []
    t.slides.forEach(i => {
      const s = t.getSlideClasses(i)
      n.push({ slideEl: i, classNames: s }), t.emit('_slideClass', i, s)
    }),
      t.emit('_slideClasses', n)
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = 'current'), n === void 0 && (n = !1)
    const i = this,
      {
        params: s,
        slides: l,
        slidesGrid: a,
        slidesSizesGrid: o,
        size: c,
        activeIndex: u,
      } = i
    let f = 1
    if (typeof s.slidesPerView == 'number') return s.slidesPerView
    if (s.centeredSlides) {
      let p = l[u] ? Math.ceil(l[u].swiperSlideSize) : 0,
        v
      for (let g = u + 1; g < l.length; g += 1)
        l[g] &&
          !v &&
          ((p += Math.ceil(l[g].swiperSlideSize)), (f += 1), p > c && (v = !0))
      for (let g = u - 1; g >= 0; g -= 1)
        l[g] && !v && ((p += l[g].swiperSlideSize), (f += 1), p > c && (v = !0))
    } else if (t === 'current')
      for (let p = u + 1; p < l.length; p += 1)
        (n ? a[p] + o[p] - a[u] < c : a[p] - a[u] < c) && (f += 1)
    else for (let p = u - 1; p >= 0; p -= 1) a[u] - a[p] < c && (f += 1)
    return f
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: i } = t
    i.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach(a => {
        a.complete && Ci(t, a)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function s() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate,
        o = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate())
      t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let l
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      s(), i.autoHeight && t.updateAutoHeight()
    else {
      if (
        (i.slidesPerView === 'auto' || i.slidesPerView > 1) &&
        t.isEnd &&
        !i.centeredSlides
      ) {
        const a = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides
        l = t.slideTo(a.length - 1, 0, !1, !0)
      } else l = t.slideTo(t.activeIndex, 0, !1, !0)
      l || s()
    }
    i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update')
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0)
    const i = this,
      s = i.params.direction
    return (
      t || (t = s === 'horizontal' ? 'vertical' : 'horizontal'),
      t === s ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
        i.el.classList.add(`${i.params.containerModifierClass}${t}`),
        i.emitContainerClasses(),
        (i.params.direction = t),
        i.slides.forEach(l => {
          t === 'vertical' ? (l.style.width = '') : (l.style.height = '')
        }),
        i.emit('changeDirection'),
        n && i.update()),
      i
    )
  }
  changeLanguageDirection(t) {
    const n = this
    ;(n.rtl && t === 'rtl') ||
      (!n.rtl && t === 'ltr') ||
      ((n.rtl = t === 'rtl'),
      (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'rtl'))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'ltr')),
      n.update())
  }
  mount(t) {
    const n = this
    if (n.mounted) return !0
    let i = t || n.params.el
    if ((typeof i == 'string' && (i = document.querySelector(i)), !i)) return !1
    ;(i.swiper = n),
      i.parentNode &&
        i.parentNode.host &&
        i.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0)
    const s = () =>
      `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
    let a =
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(s())
        : c1(i, s())[0]
    return (
      !a &&
        n.params.createElements &&
        ((a = v2('div', n.params.wrapperClass)),
        i.append(a),
        c1(i, `.${n.params.slideClass}`).forEach(o => {
          a.append(o)
        })),
      Object.assign(n, {
        el: i,
        wrapperEl: a,
        slidesEl:
          n.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : a,
        hostEl: n.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === 'rtl' || z1(i, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (i.dir.toLowerCase() === 'rtl' || z1(i, 'direction') === 'rtl'),
        wrongRTL: z1(a, 'display') === '-webkit-box',
      }),
      !0
    )
  }
  init(t) {
    const n = this
    if (n.initialized || n.mount(t) === !1) return n
    n.emit('beforeInit'),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(void 0, !0),
      n.attachEvents()
    const s = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      s.forEach(l => {
        l.complete
          ? Ci(n, l)
          : l.addEventListener('load', a => {
              Ci(n, a.target)
            })
      }),
      g2(n),
      (n.initialized = !0),
      g2(n),
      n.emit('init'),
      n.emit('afterInit'),
      n
    )
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0)
    const i = this,
      { params: s, el: l, wrapperEl: a, slides: o } = i
    return (
      typeof i.params > 'u' ||
        i.destroyed ||
        (i.emit('beforeDestroy'),
        (i.initialized = !1),
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        n &&
          (i.removeClasses(),
          l && typeof l != 'string' && l.removeAttribute('style'),
          a && a.removeAttribute('style'),
          o &&
            o.length &&
            o.forEach(c => {
              c.classList.remove(
                s.slideVisibleClass,
                s.slideFullyVisibleClass,
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass
              ),
                c.removeAttribute('style'),
                c.removeAttribute('data-swiper-slide-index')
            })),
        i.emit('destroy'),
        Object.keys(i.eventsListeners).forEach(c => {
          i.off(c)
        }),
        t !== !1 &&
          (i.el && typeof i.el != 'string' && (i.el.swiper = null), jf(i)),
        (i.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    yt(Js, t)
  }
  static get extendedDefaults() {
    return Js
  }
  static get defaults() {
    return z2
  }
  static installModule(t) {
    r1.prototype.__modules__ || (r1.prototype.__modules__ = [])
    const n = r1.prototype.__modules__
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach(n => r1.installModule(n)), r1)
      : (r1.installModule(t), r1)
  }
}
Object.keys(Qs).forEach(e => {
  Object.keys(Qs[e]).forEach(t => {
    j2.prototype[t] = Qs[e][t]
  })
})
j2.use([e5, t5])
const Yo = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'swiperElementNodeName',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  'breakpointsBase',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopAdditionalSlides',
  'loopAddBlankSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideFullyVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'slideBlankClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
]
function H1(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
    !e.__swiper__
  )
}
function zn(e, t) {
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter(i => n.indexOf(i) < 0)
    .forEach(i => {
      typeof e[i] > 'u'
        ? (e[i] = t[i])
        : H1(t[i]) && H1(e[i]) && Object.keys(t[i]).length > 0
          ? t[i].__swiper__
            ? (e[i] = t[i])
            : zn(e[i], t[i])
          : (e[i] = t[i])
    })
}
function Xo(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > 'u' &&
      typeof e.navigation.prevEl > 'u'
  )
}
function Qo(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u'
}
function Jo(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u'
}
function Zo(e) {
  e === void 0 && (e = '')
  const t = e
      .split(' ')
      .map(i => i.trim())
      .filter(i => !!i),
    n = []
  return (
    t.forEach(i => {
      n.indexOf(i) < 0 && n.push(i)
    }),
    n.join(' ')
  )
}
function lu(e) {
  return (
    e === void 0 && (e = ''),
    e
      ? e.includes('swiper-wrapper')
        ? e
        : `swiper-wrapper ${e}`
      : 'swiper-wrapper'
  )
}
function au(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: i,
    changedParams: s,
    nextEl: l,
    prevEl: a,
    scrollbarEl: o,
    paginationEl: c,
  } = e
  const u = s.filter(
      F => F !== 'children' && F !== 'direction' && F !== 'wrapperClass'
    ),
    {
      params: f,
      pagination: p,
      navigation: v,
      scrollbar: g,
      virtual: y,
      thumbs: T,
    } = t
  let k, x, M, C, R, N, ie, Q
  s.includes('thumbs') &&
    i.thumbs &&
    i.thumbs.swiper &&
    !i.thumbs.swiper.destroyed &&
    f.thumbs &&
    (!f.thumbs.swiper || f.thumbs.swiper.destroyed) &&
    (k = !0),
    s.includes('controller') &&
      i.controller &&
      i.controller.control &&
      f.controller &&
      !f.controller.control &&
      (x = !0),
    s.includes('pagination') &&
      i.pagination &&
      (i.pagination.el || c) &&
      (f.pagination || f.pagination === !1) &&
      p &&
      !p.el &&
      (M = !0),
    s.includes('scrollbar') &&
      i.scrollbar &&
      (i.scrollbar.el || o) &&
      (f.scrollbar || f.scrollbar === !1) &&
      g &&
      !g.el &&
      (C = !0),
    s.includes('navigation') &&
      i.navigation &&
      (i.navigation.prevEl || a) &&
      (i.navigation.nextEl || l) &&
      (f.navigation || f.navigation === !1) &&
      v &&
      !v.prevEl &&
      !v.nextEl &&
      (R = !0)
  const Y = F => {
    t[F] &&
      (t[F].destroy(),
      F === 'navigation'
        ? (t.isElement && (t[F].prevEl.remove(), t[F].nextEl.remove()),
          (f[F].prevEl = void 0),
          (f[F].nextEl = void 0),
          (t[F].prevEl = void 0),
          (t[F].nextEl = void 0))
        : (t.isElement && t[F].el.remove(),
          (f[F].el = void 0),
          (t[F].el = void 0)))
  }
  s.includes('loop') &&
    t.isElement &&
    (f.loop && !i.loop ? (N = !0) : !f.loop && i.loop ? (ie = !0) : (Q = !0)),
    u.forEach(F => {
      if (H1(f[F]) && H1(i[F]))
        Object.assign(f[F], i[F]),
          (F === 'navigation' || F === 'pagination' || F === 'scrollbar') &&
            'enabled' in i[F] &&
            !i[F].enabled &&
            Y(F)
      else {
        const V = i[F]
        ;(V === !0 || V === !1) &&
        (F === 'navigation' || F === 'pagination' || F === 'scrollbar')
          ? V === !1 && Y(F)
          : (f[F] = i[F])
      }
    }),
    u.includes('controller') &&
      !x &&
      t.controller &&
      t.controller.control &&
      f.controller &&
      f.controller.control &&
      (t.controller.control = f.controller.control),
    s.includes('children') && n && y && f.virtual.enabled
      ? ((y.slides = n), y.update(!0))
      : s.includes('virtual') &&
        y &&
        f.virtual.enabled &&
        (n && (y.slides = n), y.update(!0)),
    s.includes('children') && n && f.loop && (Q = !0),
    k && T.init() && T.update(!0),
    x && (t.controller.control = f.controller.control),
    M &&
      (t.isElement &&
        (!c || typeof c == 'string') &&
        ((c = document.createElement('div')),
        c.classList.add('swiper-pagination'),
        c.part.add('pagination'),
        t.el.appendChild(c)),
      c && (f.pagination.el = c),
      p.init(),
      p.render(),
      p.update()),
    C &&
      (t.isElement &&
        (!o || typeof o == 'string') &&
        ((o = document.createElement('div')),
        o.classList.add('swiper-scrollbar'),
        o.part.add('scrollbar'),
        t.el.appendChild(o)),
      o && (f.scrollbar.el = o),
      g.init(),
      g.updateSize(),
      g.setTranslate()),
    R &&
      (t.isElement &&
        ((!l || typeof l == 'string') &&
          ((l = document.createElement('div')),
          l.classList.add('swiper-button-next'),
          (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
          l.part.add('button-next'),
          t.el.appendChild(l)),
        (!a || typeof a == 'string') &&
          ((a = document.createElement('div')),
          a.classList.add('swiper-button-prev'),
          (a.innerHTML = t.hostEl.constructor.prevButtonSvg),
          a.part.add('button-prev'),
          t.el.appendChild(a))),
      l && (f.navigation.nextEl = l),
      a && (f.navigation.prevEl = a),
      v.init(),
      v.update()),
    s.includes('allowSlideNext') && (t.allowSlideNext = i.allowSlideNext),
    s.includes('allowSlidePrev') && (t.allowSlidePrev = i.allowSlidePrev),
    s.includes('direction') && t.changeDirection(i.direction, !1),
    (N || Q) && t.loopDestroy(),
    (ie || Q) && t.loopCreate(),
    t.update()
}
function _a(e, t) {
  e === void 0 && (e = {})
  const n = { on: {} },
    i = {},
    s = {}
  zn(n, z2), (n._emitClasses = !0), (n.init = !1)
  const l = {},
    a = Yo.map(c => c.replace(/_/, '')),
    o = Object.assign({}, e)
  return (
    Object.keys(o).forEach(c => {
      typeof e[c] > 'u' ||
        (a.indexOf(c) >= 0
          ? H1(e[c])
            ? ((n[c] = {}), (s[c] = {}), zn(n[c], e[c]), zn(s[c], e[c]))
            : ((n[c] = e[c]), (s[c] = e[c]))
          : c.search(/on[A-Z]/) === 0 && typeof e[c] == 'function'
            ? (n.on[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c])
            : (l[c] = e[c]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach(c => {
      n[c] === !0 && (n[c] = {}), n[c] === !1 && delete n[c]
    }),
    { params: n, passedParams: s, rest: l, events: i }
  )
}
function ou(e, t) {
  let {
    el: n,
    nextEl: i,
    prevEl: s,
    paginationEl: l,
    scrollbarEl: a,
    swiper: o,
  } = e
  Xo(t) &&
    i &&
    s &&
    ((o.params.navigation.nextEl = i),
    (o.originalParams.navigation.nextEl = i),
    (o.params.navigation.prevEl = s),
    (o.originalParams.navigation.prevEl = s)),
    Qo(t) &&
      l &&
      ((o.params.pagination.el = l), (o.originalParams.pagination.el = l)),
    Jo(t) &&
      a &&
      ((o.params.scrollbar.el = a), (o.originalParams.scrollbar.el = a)),
    o.init(n)
}
function cu(e, t, n, i, s) {
  const l = []
  if (!t) return l
  const a = c => {
    l.indexOf(c) < 0 && l.push(c)
  }
  if (n && i) {
    const c = i.map(s),
      u = n.map(s)
    c.join('') !== u.join('') && a('children'),
      i.length !== n.length && a('children')
  }
  return (
    Yo.filter(c => c[0] === '_')
      .map(c => c.replace(/_/, ''))
      .forEach(c => {
        if (c in e && c in t)
          if (H1(e[c]) && H1(t[c])) {
            const u = Object.keys(e[c]),
              f = Object.keys(t[c])
            u.length !== f.length
              ? a(c)
              : (u.forEach(p => {
                  e[c][p] !== t[c][p] && a(c)
                }),
                f.forEach(p => {
                  e[c][p] !== t[c][p] && a(c)
                }))
          } else e[c] !== t[c] && a(c)
      }),
    l
  )
}
const du = e => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate())
}
function Zs(e, t, n) {
  e === void 0 && (e = {})
  const i = [],
    s = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': [],
    },
    l = (a, o) => {
      Array.isArray(a) &&
        a.forEach(c => {
          const u = typeof c.type == 'symbol'
          o === 'default' && (o = 'container-end'),
            u && c.children
              ? l(c.children, o)
              : (c.type &&
                    (c.type.name === 'SwiperSlide' ||
                      c.type.name === 'AsyncComponentWrapper')) ||
                  (c.componentOptions &&
                    c.componentOptions.tag === 'SwiperSlide')
                ? i.push(c)
                : s[o] && s[o].push(c)
        })
    }
  return (
    Object.keys(e).forEach(a => {
      if (typeof e[a] != 'function') return
      const o = e[a]()
      l(o, a)
    }),
    (n.value = t.value),
    (t.value = i),
    { slides: i, slots: s }
  )
}
function fu(e, t, n) {
  if (!n) return null
  const i = f => {
      let p = f
      return f < 0 ? (p = t.length + f) : p >= t.length && (p = p - t.length), p
    },
    s = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: a } = n,
    o = e.value.params.loop ? -t.length : 0,
    c = e.value.params.loop ? t.length * 2 : t.length,
    u = []
  for (let f = o; f < c; f += 1)
    f >= l && f <= a && u.length < t.length && u.push(t[i(f)])
  return u.map(f => {
    if (
      (f.props || (f.props = {}),
      f.props.style || (f.props.style = {}),
      (f.props.swiperRef = e),
      (f.props.style = s),
      f.type)
    )
      return pt(f.type, { ...f.props }, f.children)
    if (f.componentOptions)
      return pt(
        f.componentOptions.Ctor,
        { ...f.props },
        f.componentOptions.children
      )
  })
}
const uu = {
    name: 'Swiper',
    props: {
      tag: { type: String, default: 'div' },
      wrapperTag: { type: String, default: 'div' },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: 'SWIPER-CONTAINER' },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      breakpointsBase: { type: String, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      '_beforeBreakpoint',
      '_containerClasses',
      '_slideClass',
      '_slideClasses',
      '_swiper',
      '_freeModeNoMomentumRelease',
      'activeIndexChange',
      'afterInit',
      'autoplay',
      'autoplayStart',
      'autoplayStop',
      'autoplayPause',
      'autoplayResume',
      'autoplayTimeLeft',
      'beforeDestroy',
      'beforeInit',
      'beforeLoopFix',
      'beforeResize',
      'beforeSlideChangeStart',
      'beforeTransitionStart',
      'breakpoint',
      'changeDirection',
      'click',
      'disable',
      'doubleTap',
      'doubleClick',
      'destroy',
      'enable',
      'fromEdge',
      'hashChange',
      'hashSet',
      'init',
      'keyPress',
      'lock',
      'loopFix',
      'momentumBounce',
      'navigationHide',
      'navigationShow',
      'navigationPrev',
      'navigationNext',
      'observerUpdate',
      'orientationchange',
      'paginationHide',
      'paginationRender',
      'paginationShow',
      'paginationUpdate',
      'progress',
      'reachBeginning',
      'reachEnd',
      'realIndexChange',
      'resize',
      'scroll',
      'scrollbarDragEnd',
      'scrollbarDragMove',
      'scrollbarDragStart',
      'setTransition',
      'setTranslate',
      'slidesUpdated',
      'slideChange',
      'slideChangeTransitionEnd',
      'slideChangeTransitionStart',
      'slideNextTransitionEnd',
      'slideNextTransitionStart',
      'slidePrevTransitionEnd',
      'slidePrevTransitionStart',
      'slideResetTransitionStart',
      'slideResetTransitionEnd',
      'sliderMove',
      'sliderFirstMove',
      'slidesLengthChange',
      'slidesGridLengthChange',
      'snapGridLengthChange',
      'snapIndexChange',
      'swiper',
      'tap',
      'toEdge',
      'touchEnd',
      'touchMove',
      'touchMoveOpposite',
      'touchStart',
      'transitionEnd',
      'transitionStart',
      'unlock',
      'update',
      'virtualUpdate',
      'zoomChange',
    ],
    setup(e, t) {
      let { slots: n, emit: i } = t
      const { tag: s, wrapperTag: l } = e,
        a = Ge('swiper'),
        o = Ge(null),
        c = Ge(!1),
        u = Ge(!1),
        f = Ge(null),
        p = Ge(null),
        v = Ge(null),
        g = { value: [] },
        y = { value: [] },
        T = Ge(null),
        k = Ge(null),
        x = Ge(null),
        M = Ge(null),
        { params: C, passedParams: R } = _a(e)
      Zs(n, g, y), (v.value = R), (y.value = g.value)
      const N = () => {
        Zs(n, g, y), (c.value = !0)
      }
      ;(C.onAny = function (Y) {
        for (
          var F = arguments.length, V = new Array(F > 1 ? F - 1 : 0), ee = 1;
          ee < F;
          ee++
        )
          V[ee - 1] = arguments[ee]
        i(Y, ...V)
      }),
        Object.assign(C.on, {
          _beforeBreakpoint: N,
          _containerClasses(Y, F) {
            a.value = F
          },
        })
      const ie = { ...C }
      if (
        (delete ie.wrapperClass,
        (p.value = new j2(ie)),
        p.value.virtual && p.value.params.virtual.enabled)
      ) {
        p.value.virtual.slides = g.value
        const Y = {
          cache: !1,
          slides: g.value,
          renderExternal: F => {
            o.value = F
          },
          renderExternalUpdate: !1,
        }
        zn(p.value.params.virtual, Y), zn(p.value.originalParams.virtual, Y)
      }
      R2(() => {
        !u.value && p.value && (p.value.emitSlidesClasses(), (u.value = !0))
        const { passedParams: Y } = _a(e),
          F = cu(Y, v.value, g.value, y.value, V => V.props && V.props.key)
        ;(v.value = Y),
          (F.length || c.value) &&
            p.value &&
            !p.value.destroyed &&
            au({
              swiper: p.value,
              slides: g.value,
              passedParams: Y,
              changedParams: F,
              nextEl: T.value,
              prevEl: k.value,
              scrollbarEl: M.value,
              paginationEl: x.value,
            }),
          (c.value = !1)
      }),
        gn('swiper', p),
        Nn(o, () => {
          I2(() => {
            du(p.value)
          })
        }),
        Qn(() => {
          f.value &&
            (ou(
              {
                el: f.value,
                nextEl: T.value,
                prevEl: k.value,
                paginationEl: x.value,
                scrollbarEl: M.value,
                swiper: p.value,
              },
              C
            ),
            i('swiper', p.value))
        }),
        $2(() => {
          p.value && !p.value.destroyed && p.value.destroy(!0, !1)
        })
      function Q(Y) {
        return C.virtual
          ? fu(p, Y, o.value)
          : (Y.forEach((F, V) => {
              F.props || (F.props = {}),
                (F.props.swiperRef = p),
                (F.props.swiperSlideIndex = V)
            }),
            Y)
      }
      return () => {
        const { slides: Y, slots: F } = Zs(n, g, y)
        return pt(s, { ref: f, class: Zo(a.value) }, [
          F['container-start'],
          pt(l, { class: lu(C.wrapperClass) }, [
            F['wrapper-start'],
            Q(Y),
            F['wrapper-end'],
          ]),
          Xo(e) && [
            pt('div', { ref: k, class: 'swiper-button-prev' }),
            pt('div', { ref: T, class: 'swiper-button-next' }),
          ],
          Jo(e) && pt('div', { ref: M, class: 'swiper-scrollbar' }),
          Qo(e) && pt('div', { ref: x, class: 'swiper-pagination' }),
          F['container-end'],
        ])
      }
    },
  },
  hu = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        i = !1
      const { swiperRef: s } = e,
        l = Ge(null),
        a = Ge('swiper-slide'),
        o = Ge(!1)
      function c(p, v, g) {
        v === l.value && (a.value = g)
      }
      Qn(() => {
        !s || !s.value || (s.value.on('_slideClass', c), (i = !0))
      }),
        io(() => {
          i || !s || !s.value || (s.value.on('_slideClass', c), (i = !0))
        }),
        R2(() => {
          !l.value ||
            !s ||
            !s.value ||
            (typeof e.swiperSlideIndex < 'u' &&
              (l.value.swiperSlideIndex = e.swiperSlideIndex),
            s.value.destroyed &&
              a.value !== 'swiper-slide' &&
              (a.value = 'swiper-slide'))
        }),
        $2(() => {
          !s || !s.value || s.value.off('_slideClass', c)
        })
      const u = Lt(() => ({
        isActive: a.value.indexOf('swiper-slide-active') >= 0,
        isVisible: a.value.indexOf('swiper-slide-visible') >= 0,
        isPrev: a.value.indexOf('swiper-slide-prev') >= 0,
        isNext: a.value.indexOf('swiper-slide-next') >= 0,
      }))
      gn('swiperSlide', u)
      const f = () => {
        o.value = !0
      }
      return () =>
        pt(
          e.tag,
          {
            class: Zo(`${a.value}`),
            ref: l,
            'data-swiper-slide-index':
              typeof e.virtualIndex > 'u' && s && s.value && s.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: f,
          },
          e.zoom
            ? pt(
                'div',
                {
                  class: 'swiper-zoom-container',
                  'data-swiper-zoom':
                    typeof e.zoom == 'number' ? e.zoom : void 0,
                },
                [
                  n.default && n.default(u.value),
                  e.lazy &&
                    !o.value &&
                    pt('div', { class: 'swiper-lazy-preloader' }),
                ]
              )
            : [
                n.default && n.default(u.value),
                e.lazy &&
                  !o.value &&
                  pt('div', { class: 'swiper-lazy-preloader' }),
              ]
        )
    },
  },
  wa =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='292.359'%20height='292.359'%20style='enable-background:new%200%200%20292.359%20292.359'%3e%3cpath%20d='M222.979%205.424C219.364%201.807%20215.08%200%20210.132%200c-4.949%200-9.233%201.807-12.848%205.424L69.378%20133.331c-3.615%203.617-5.424%207.898-5.424%2012.847s1.809%209.233%205.424%2012.847l127.906%20127.907c3.614%203.617%207.898%205.428%2012.848%205.428%204.948%200%209.232-1.811%2012.847-5.428%203.617-3.614%205.427-7.898%205.427-12.847V18.271c-.001-4.949-1.81-9.229-5.427-12.847z'/%3e%3c/svg%3e",
  pu = {
    name: 'navPanel',
    components: { Swiper: uu, SwiperSlide: hu },
    setup() {
      const e = Ge(null),
        t = Ge(null),
        n = Ge(null)
      let i = Ge(!1),
        s = Ge(null)
      const l = [
          { title: 'Обучение', route: 'learning' },
          { title: 'История', route: 'history' },
          { title: 'Научная работа', route: 'research' },
          { title: 'Библиотека', route: 'library' },
          { title: 'Клиентская база', route: 'clientBase' },
          {
            title: 'Ежегодные конференции',
            buttonOne: {
              title:
                'Инновационные технологии в области неврологии и смежных специальностей',
              route: 'youngNeurologists',
            },
            buttonTwo: {
              title: 'Неврологические образовательные университеты',
              route: 'youngNeurologists',
            },
            hasDropDown: !0,
          },
          {
            title: 'Научный кружок "Школа молодых неврологов"',
            route: 'youngNeurologists',
          },
          { title: 'Новости и обновления', route: 'newsUpdates' },
          { title: 'Контактная информация', route: 'contactInfo' },
        ],
        a = {
          300: { slidesPerView: 1, spaceBetween: 10 },
          500: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
          2e3: { slidesPerView: 8, spaceBetween: 50 },
          3e3: { slidesPerView: 10, spaceBetween: 50 },
        }
      function o(p) {
        let v = document.getElementById('dropdown-content'),
          g = p.target.getBoundingClientRect()
        ;(v.style.display = 'flex'),
          (v.style.width = g.width + 'px'),
          (v.style.left =
            s.getBoundingClientRect().left +
            (s.getBoundingClientRect().width -
              v.getBoundingClientRect().width) /
              2 +
            'px'),
          (v.style.top = s.getBoundingClientRect().bottom + 10 + 'px'),
          v.querySelectorAll('a').forEach(y => {
            y.addEventListener('mouseenter', () => {
              i.value = !0
            }),
              y.addEventListener('mouseleave', () => {
                ;(i.value = !1), c()
              })
          })
      }
      function c() {
        let p = document.getElementById('dropdown-content')
        setTimeout(() => {
          i.value === !1 && (p.style.display = 'none')
        }, 200)
      }
      Qn(() => {
        ;(s = document.getElementById('AnnualConferences')), f()
      })
      const u = p => {
          e.value = p
        },
        f = () => {
          e.value.isEnd
            ? (t.value.style.visibility = 'hidden')
            : (t.value.style.visibility = 'visible'),
            e.value.isBeginning
              ? (n.value.style.visibility = 'hidden')
              : (n.value.style.visibility = 'visible')
        }
      return {
        isDropDownVisible: i,
        showDropDownMenu: o,
        hideDropDownMenu: c,
        breakpoints: a,
        prevButton: n,
        nextButton: t,
        swiper: e,
        slides: l,
        onSwiperInit: u,
        updateButtonVisibility: f,
      }
    },
  },
  mu = { class: 'nav-panel' },
  vu = ['id'],
  gu = { id: 'dropdown-content' }
function zu(e, t, n, i, s, l) {
  const a = Bt('router-link'),
    o = Bt('swiper-slide'),
    c = Bt('swiper')
  return (
    mt(),
    Jt(
      It,
      null,
      [
        xt('div', mu, [
          xt(
            'img',
            {
              ref: 'prevButton',
              src: wa,
              alt: 'Назад',
              onClick:
                t[0] || (t[0] = Ul(u => i.swiper.slidePrev(), ['prevent'])),
              class: 'buttonPrev button-swiper',
            },
            null,
            512
          ),
          ke(
            c,
            {
              onSwiper: i.onSwiperInit,
              onSlideChange: i.updateButtonVisibility,
              breakpoints: i.breakpoints,
            },
            {
              default: N1(() => [
                (mt(!0),
                Jt(
                  It,
                  null,
                  a0(
                    i.slides,
                    (u, f) => (
                      mt(),
                      $i(
                        o,
                        { key: f },
                        {
                          default: N1(() => [
                            u.hasDropDown
                              ? (mt(),
                                Jt(
                                  'a',
                                  {
                                    key: 0,
                                    class: 'swiper-slide__link',
                                    id: u.hasDropDown
                                      ? 'AnnualConferences'
                                      : null,
                                    onMouseenter:
                                      t[1] ||
                                      (t[1] = p => i.showDropDownMenu(p)),
                                    onMouseleave:
                                      t[2] ||
                                      (t[2] = (...p) =>
                                        i.hideDropDownMenu &&
                                        i.hideDropDownMenu(...p)),
                                  },
                                  Ai(u.title),
                                  41,
                                  vu
                                ))
                              : (mt(),
                                $i(
                                  a,
                                  {
                                    key: 1,
                                    class: 'swiper-slide__link',
                                    to: u.route,
                                  },
                                  {
                                    default: N1(() => [Ti(Ai(u.title), 1)]),
                                    _: 2,
                                  },
                                  1032,
                                  ['to']
                                )),
                          ]),
                          _: 2,
                        },
                        1024
                      )
                    )
                  ),
                  128
                )),
              ]),
              _: 1,
            },
            8,
            ['onSwiper', 'onSlideChange', 'breakpoints']
          ),
          xt(
            'img',
            {
              ref: 'nextButton',
              src: wa,
              style: { transform: 'rotate(180deg)' },
              alt: 'Вперед',
              onClick:
                t[3] || (t[3] = Ul(u => i.swiper.slideNext(), ['prevent'])),
              class: 'buttonNext button-swiper',
            },
            null,
            512
          ),
        ]),
        xt('div', gu, [
          ke(
            a,
            { to: 'scientific_practical' },
            {
              default: N1(
                () =>
                  t[4] ||
                  (t[4] = [
                    Ti(
                      'Научно-практическая конференция "Инновационные технологии в области неврологии и смежных специальностей" '
                    ),
                  ])
              ),
              _: 1,
            }
          ),
          ke(
            a,
            { to: 'educational' },
            {
              default: N1(
                () =>
                  t[5] ||
                  (t[5] = [
                    Ti(
                      'Научно-образовательная конференция "Неврологические образовательные университеты" '
                    ),
                  ])
              ),
              _: 1,
            }
          ),
        ]),
      ],
      64
    )
  )
}
const bu = S1(pu, [
    ['render', zu],
    ['__scopeId', 'data-v-05884569'],
  ]),
  _u = { name: 'UDPRF' },
  wu = { class: 'gerb' }
function yu(e, t, n, i, s, l) {
  return (
    mt(),
    Jt(
      'div',
      wu,
      t[0] ||
        (t[0] = [
          N0(
            '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 366.9 402" data-v-eb6c4a1f><path d="M366 167c-4.5-2.8-12-3.7-19.5-3 12-4.2 20-13 20.4-20.9a36.6 36.6 0 0 0-18.2.5c5.7-4.4 15.2-12.3 14-23.8-5.7-1.5-15.8 2.5-20.2 4.4 13.8-7.8 18.7-25.9 11.4-36.3-4.2 2.5-23.8 22.5-27 24.9a84.8 84.8 0 0 0 17.5-27.6c3.4-8.7 3.6-23.4-7-28.4a350 350 0 0 1-32 52.6c-1-1-1.9-2.3-3.2-2.5a51.6 51.6 0 0 1-15.3 22c-.3-.7-1-2.4-2-4.2-6.6 9.8-23.9 23.4-29.4 31.7-4.3 6.2-4.3 11.7 1.7 17.6 2.5 2.3 7 6.7 3.1 12.7-6.6 9.5-20.7 8.9-25.1.9 9.2-1 12-12.3 6.1-18.9a10 10 0 0 1-12.8 4.2c-3.5-1.4-6-3-7.6-4.6 7.6 2.3 14-2.2 13.1-9.7-6 5.1-12 .2-13.3-1.1-3.8-4.4-4.8-9.4-3.3-17a43 43 0 0 1 12.5-20.4c.8.7 1.8 1.9 4 1.7 1.3-.3 3.3-1.4 5-2a15 15 0 0 1 11.8 1.4c5 3.2 4.6 6.8 4.5 9.2 7.9-4.3 5.3-11.6-5.1-14.4 7 0 12.8 6.4 14.3 7.3 4 2.8 9.5 2.2 12.7.6 6.3-3.1 7.6-10.4 5.9-11.9-.6 2.7-2.7 5-6.2 5.4-5.4.6-10.5-1.7-14.6-3.5-3.5-1.4-9-2.5-12.8-2.3 7-4 18-3.5 21.9 2.5 2.3-2 3.8-3.5 4.3-7.5 2-10.5-6-15.9-14.8-15.9.1-2.5-1.7-3.8-4-3 0-1-.3-1.8-.9-2.3l.8-.1c8.7-.6 17-3.4 21.6-8 7.9-8.5-4.7-19.2-.2-27.5 4.3 1.9 7.5 4.2 13.5 5.1.6 1.2 1.1 3.8 1.3 5.1 1.9 9.4-7.5 11-5 21 1 4.3 4.4 6 5.6 11.3 0 0 .4 3.8-2.8 7 7.4.2 11.5-6.3 9.2-12.2-1-2.5-3.7-4.9-3.7-7.6 3.8 5 7.3 5 13.3 3 2.8-.8 3.1 3 1.4 6a10 10 0 0 0 5-8.2c0-4.2-3.2-6.2-6.4-5.4-1.7.2-5.4 2.7-5.5-.8-.7-6 8.7-5.9 6.8-15.5-1.1-4.8-6.4-7.5-14.8-8.5-1-.9-3-2.8-4.1-4.5-4.7-7.6-9.5-9.7-12.3-8-3.4 1.7-5.1 3.2-7.9 4.6-2.2 1.2-4.5 1.8-6 3.5-3.6 4.5-.1 11.6 1.8 16 1.1 2.4 4.2 8.1 2.9 12.5-1.5 5.1-10 8.5-15.2 9.5l-.9.1v-2c1.5-2.6 2.8-5.8 3.8-8.6 3.5-9.4-1.6-13.2-9.3-15-1-.5-2-.8-3.2-.4h-.2l-.1 1.7-1-.3v-2h-.4a3.6 3.6 0 0 0 1.4-2.7 4.3 4.3 0 0 0-1-2.6h1.1l-.4-.5-1.3-1.4c-.3-.3-.5-.8-.5-1l.9.7c.4.4 1.2.8 1.3 1.3l.6.4v-8.6l-.6.6c-.3.1-.9.6-1.3 1s-.7.4-.9.6c0-.3.3-.4.5-.9.7-.4 1.1-1 1.3-1.3l.4-.6h-8.6l.4.6c.5.3.9.9 1.3 1.3.2.5.5.7.6.9-.3-.2-.7-.2-.9-.6-.7-.4-1.1-.9-1.6-1l-.4-.6v8.6l.4-.4 1.6-1.3 1-.6-.7.9-1.3 1.4-.4.5h1.3c-.7.5-.9 1.4-.9 2.6 0 1 .5 2.2 1.2 2.8h-.2l.2 1.9-1.2.3-.1-1.7h-.2a3.5 3.5 0 0 0-3.2.5c-7.7 1.9-13 5.7-9.5 14.9 1.2 2.8 2.4 6 4 8.6v1.3A71.2 71.2 0 0 1 202.6 67l-.9-1.3.2-5.6c2.6-4.5 5-10 7-15.2 5-13.3-2.3-18.8-13.9-21.1a5.2 5.2 0 0 0-4.5-.6l-.5 2-2.4-.1.1-2.8-1.3.1c1.6-.8 2.8-2.9 2.8-5 0-1.4-.8-3.1-2-4h2c-1.2-1-3.1-3.2-3.5-4.7 1.4.5 3.6 2.5 4.6 3.5v-11c-1 1-3.2 3.1-4.6 3.3a16 16 0 0 1 3.5-4.4h-11c.9 1 3 3 3.2 4.4-1.3-.3-3.3-2.4-4.5-3.2v11c1.2-1.1 3.2-3.1 4.5-3.6-.3 1.5-2.3 3.7-3.2 4.7h2c-1.4.9-2 2.6-2 4 0 2.3 1 4.2 2.8 5l-1.5-.1.2 2.8-2.5.1-.2-2a4.7 4.7 0 0 0-4.6.6c-11.4 2.2-18.7 7.9-13.8 21.1a65 65 0 0 0 7 15.2V66l-.8 1a70 70 0 0 1-25.6 16.2v-1.3c1.6-2.6 3-5.8 4-8.6 3.5-9.4-1.8-13.2-9.5-15-1-.5-2-.8-3.3-.4h-.1l-.1 1.7-1-.3v-2c.5-.7 1-1.7 1-2.7 0-1.2-.3-2-1-2.6h1.4c-1-.9-1.8-1.8-2.5-2.8 1 .7 2 1.4 2.8 2.3v-8.6A10 10 0 0 1 128 45c.6-1.1 1.6-1.9 2.5-2.8H122c.8.9 1.6 1.7 2.2 2.8a9 9 0 0 1-2.8-2.2v8.6a13 13 0 0 1 2.8-2.3c-.6 1-1.4 2-2.2 2.8h1.1a4.3 4.3 0 0 0-.8 2.6c0 1 .4 2.2 1.3 2.8h-.5l.2 1.9-1.2.3-.1-1.7h-.2a3.5 3.5 0 0 0-3.2.5c-7.7 1.9-13 5.7-9.5 14.9 1.2 2.8 2.4 6 4 8.6v2l-1-.1c-5-1-13.6-4.4-15.1-9.5-1.5-4.2 1.6-10 3-12.6 1.8-4.3 5.2-11.4 1.7-15.9-1.6-1.7-4-2.3-6.2-3.5-2.7-1.4-4.3-3-7.9-4.7-2.7-1.6-7.6.3-12.2 8-1 1.8-3.2 3.7-4.1 4.6-8.3 1-13.7 3.7-15 8.5C54.7 68.2 64 68 63.5 74c-.1 3.5-3.8 1-5.6.8-3.3-.7-6.5 1.2-6.5 5.4 0 1.8 1.1 5.7 5 8.2-1.7-3-1.4-6.8 1.4-6 6 2 9.3 2 13.3-3 0 2.9-2.5 5-3.7 7.6-2.3 6 1.5 12.4 9.2 12.2-3.5-3.2-2.7-7-2.7-7 1-5.2 4.4-6.8 5.5-11.4 2.4-10-7-11.5-5-20.9.3-1.3.8-3.8 1.4-5 6-.8 9.2-3.3 13.4-5.2 4.4 8.3-8 19-.1 27.5 4.5 4.6 12.8 7.4 21.6 8l.7.2c-.6.4-.9 1.3-.9 2.3-2.3-.9-4 .4-3.8 3-9 0-17 5.3-15 15.8.6 4 2 5.6 4.5 7.5 3.8-6 14.8-6.4 22-2.5-4-.1-9.6.9-13 2.3-4 1.8-9.1 4.1-14.5 3.5a7 7 0 0 1-6.3-5.4c-1.8 1.5-.5 9 5.8 11.9a13 13 0 0 0 12.6-.6c1.5-.9 7.3-7.3 14.3-7.3-10.2 2.6-13.1 10-5.1 14.4-.3-2.6-.7-6 4.4-9.2 2.9-1.7 7.4-2.7 11.8-1.4 1.6.6 3.7 1.6 5 2 2.2.2 3.3-1.1 4-1.7a45.4 45.4 0 0 1 12.5 20.4c1.6 7.6.4 12.6-3.4 17-1.1 1.3-7.3 6.2-13.3 1.1-.8 7.6 5.6 12.2 13.2 9.7-1.6 1.4-4.1 3.2-7.6 4.6a10 10 0 0 1-12.9-4.2c-5.8 6.6-3 17.8 6.2 18.9-4.3 8-18.6 8.6-25-1-4.1-6 .6-10.1 2.9-12.6 6.1-5.7 6.1-11.4 1.8-17.6-5.6-8.1-22.8-21.7-29.4-31.7-1 1.8-1.8 3.6-1.9 4.1A52.4 52.4 0 0 1 64.7 107c-1.2.3-2.2 1.6-3.2 2.5-9.6-12.1-27-41.2-32-52.6-10.4 5-10.2 19.9-7 28.4 2.8 7.7 7.6 16 17.5 27.6-3.2-2.4-22.6-22.4-27-24.9-7.2 10.4-2.3 28.5 11.4 36.3-4.2-2-14.6-5.7-20.2-4.4-1.1 11.5 8.2 19.4 14 23.8a36.7 36.7 0 0 0-18.2-.4C.4 151 8.6 160 20.2 164c-7.3-.7-14.8.2-19.3 3 .7 8.1 10 15.2 21.2 17-7.5.8-14 4-17.6 8.5 4.1 5.3 10.1 9.4 19.3 9.2-2 .8-4.5 2.2-6.6 4.3-.1-.3-.5-.5-1-.5-.4.3-.6.9-.4 1.3v.3c-.9.8-1.3 1.5-1.5 2.2-.9 1.3-1.7 2.7-2.2 4l.6.4c-.1.7 0 1.6.6 2.3a4 4 0 0 0-.9 1.8l-5.4-2c-.3 5 .7 8.9 3.2 11.3 2 2.2 4.1 2 3.5 2.7l5.9 3.5c1.2 2.2 3.2 2.2 4.7 1.6v.4c0 2.4 1.6 4.3 3.6 5-.4 1.9.4 3 3 4l22 53c-.9 2.4 0 4.6 1.9 5.5-.5.6-.9 1.2-.9 2.5.9-.7 2.2-.9 2.8.9.4 1.1-2 5.2 1.6 8-.5 2.5.9 5 3.3 6 0 1.3 1.2 5.4 1.4 6.9-1.5 2.1-5.2 5.5-4.7 9.2.3 2.6 1.4 3.5 3.5 4-.7 4.7 1.9 7 5.8 7 0 3.6 3.4 4.9 5.4 5 2 1.5 2.8 2 5.1 3.2-2.1 2.5-.7 5.9 3.3 7 .4 1.4 1.4 2.5 3.6 3.1a4 4 0 0 0 5 1.5c.9-.5 2.3-3 1-5 .9-1.2.4-3-.1-4.4 1.1-2.3.1-5-1.6-6 .1-1.3-.5-3.2-1-4.5l8.3-5.1a50 50 0 0 1 25.4-10.7c2.5-.1 7-.3 9.5-.1 4 .4 9.2 1.6 12.4-.9.9-.7 1.4-1.7 1.3-2.8-.4-2.3-3-4.5-4-6.7-.2-.6-.5-1.6-1-2.5 2.8.6 5.3.2 6.9-.5 1.6-.6 5.7-3.7 5.6-8.2-3.3 1.4-11.2 3.6-12-4.4-.9-7 5.4-13 15-10.4 6.6 1.8 16.2 15.8 7.5 22-4.3 2.9-11 5.6-10.1 13.4 2.8-3.4 6.6-5.1 11.5-4.7-7.3 5.4-12.8 6-20.4 10-6.6 4-11.6 10.4-16.7 10.6-4 .3-6.3-4.5-2.3-8.2-4-.9-9 2.2-10.5 6.3-2 5.7-.5 9.6 3 11.8a12.1 12.1 0 0 0-6.5 14.5c1.6 5.8 7.3 5.8 5 13.1 3.3-.7 5.5-2.9 6.4-6.1.4-2.2.8-4.5 1.9-5.6-.5 4.4 2 11 8 14a13 13 0 0 0 15.5-2.4c2 5.8 8.9 10.6 15.9 10.5 3.2 0 6.3-1.3 8.8-2.8 1.7 4.3 6 8.6 10.3 10.7a22 22 0 0 0 10.5-10.7c2.4 1.5 5.6 2.8 8.8 2.8 6.9.1 14-4.7 16-10.5a13 13 0 0 0 15.4 2.3c6-2.9 8.5-9.5 8-13.9 1.2 1 1.7 3.4 2.1 5.6.7 3 3 5.3 6.1 6.1-2.2-7.3 3.7-7.3 5.1-13.1 1.7-7-1.7-12-6.4-14.5 3.4-2.2 5-6.3 3-11.8-1.5-4.1-6.6-7.2-10.6-6.3 3.8 3.7 1.8 8.3-2.3 8.2-5.1-.2-10.1-6.6-16.7-10.5-7.6-4.1-13.1-4.7-20.4-10.1 5-.4 8.7 1.2 11.5 4.7.9-7.6-5.7-10.5-10-13.5-8.8-6.1.8-20.1 7.5-21.9 9.5-2.6 15.8 3.4 15 10.4-1.2 8-8.8 6-12.3 4.4 0 4.5 4 7.6 5.8 8.2 2 .8 5.6 1.3 9 0l-.4 1.9c-.6 6.8-4.4 7.5-3 10.3 1.7 2.2 13.4 1.8 16.6 2.4 5.6.7 10.2 2.9 15.6 3.9 6 1.3 12.5 1.3 17.9 3.5 3.3 1.5 7.3 4.2 10.6 6 5.1.9 4.4 3 7.6 3 3 0 4.1-2.6 8-3.6 2.5-.6 5.5.5 8.1-.4 1.9-.5 2.8-2.5 4.5-3.5 2-1.3 5-1.3 7-3.1 1.1-.8 1.3-2.5 1.2-3.7 4.1-2.9 7-7 8.8-11.6 1-.2 1.9-1.2 1.9-2.2v-.5a4 4 0 0 0 1.7-3.3c0-1.6-.7-3-1.7-4v-.4c0-.9-.5-1.5-1-2a23.9 23.9 0 0 0-17.4-18.9v-.4h-.2c0-.5-.3-.6-.6-.6-1.1-1.3-2.7-3.2-2.9-4.5 1.5.4 3.8 2.7 5.1 3.6v-12.1c-1.2.9-3.6 3.2-5 3.6 0-1.4 2.4-4 3.6-5h-12.3c1.2 1 3.5 3.6 3.6 5-1.4-.4-3.8-2.7-5-3.6v12.1c1-.9 3.6-3.2 5-3.6-.1 1.4-2.4 4-3.6 5l.4.2c-9.2 2-16.5 9.7-18.2 19-.6.6-1 1.2-1 2v.5c-1 1.2-1.7 2.3-.6 3.6 0 1.4.7 2.5 1.7 3.4v.4c0 1.3.9 2 2 2.2.3 1.2.8 2.4 1.4 3.4l.1-.2c-.7 3.5-5 5.6-5.8 5.6-7.5 1-15.8-2.2-23.4-5-3.4-1.3-7.9-2.8-10-6-1.5-2.3-2.1-4-1.4-6 .9 1 2.2 2.2 4.1 3.3.1-1 .1-2.2.6-3.1 1.9 2.8 5 4.2 8.6 4-2.2-1.8-3.2-6.6-2.2-11 3 5 14.6 6.1 16.7-3-4.4 2-7-.2-8-2.6-1.2-3.6 3-12.5-.8-19.5-3-5.3-6.6-8.4-14.6-9.7.6-.9.9-1.7 1-3.2-7.4 2.6-13.9.6-17-5.4 1.5.7 3.9.9 6 .9-6.7-5.4-6.2-20.6-1.5-28.5.5-.4.8-.9 1.4-1 1.5 2.9 5.9 2.9 8 5.4.8-.9 1.2-1 2-1.8 0 0 .2 12.6 1.1 17.7.7 5.8 6.4 5.3 9.2 7.7 3.4-3.8 9.4-3.5 8.5-9.9-.9-6.4-2.2-12.1-2.3-16.5 1.8 4 5.5 18.5 7 22.8 2.4 6.1 8.4 4.2 11.8 6.7 2.2-4.4 7.7-5.5 5.5-12.1-.5-1.6-9.7-21-11-24.6 3.3 4.9 12 21.8 14.8 26.5 3 5 8.7 2.5 12.6 3.8.7-3.5 6.1-7.8 2.2-13.9-4.8-8.2-16.5-22.5-17.1-24.5 2.3 2.1 20.3 24.4 21.6 25.7 4.3 3.6 10.4.8 13.9.8 0-4 3.2-8.7-1.5-13.4-4.3-4-14.3-11.1-16.3-13.6 6.6 4.5 14.3 11.9 19 13 8.1 2 11-1.1 14.1-2.5-2.4-7.6 1-11-16.5-18.2 15 5.4 21.7 2.8 27-1.5-2.1-5.4-7.4-10-11.8-11.4 9.2.3 15.4-3.8 19.3-9.2-3.4-4.5-10-7.7-17.8-8.6 11.4-1.7 20.4-8.8 21.5-17zM114.6 269.8c.2 1.5.5 2.3 1 3.2-8 1.3-11.5 4.5-14.4 9.7-4.1 7 .3 15.9-.9 19.5-.9 2.4-3.5 4.6-7.9 2.5 2 9.2 13.6 8.2 16.7 3 1.1 4.3 0 9.3-2 11.2 3.4.3 6.5-1.3 8.4-4.1.4.9.4 2 .6 3 2-1 3.2-2.1 4-3.2.4 1 .8 3.4.2 5.4a64.8 64.8 0 0 1-22.5 9.2c-3.8.8-10-1.4-11.8-6.5-1.5-5-5.6-6.6-8.8-3.5-.9-.6-3.2-1-4 .4 0 0-1-2.3-2.4-3.5.9-2.5.3-5.5-2-6.6-.3-4.8-3.4-4.8-4.4-6.5-.6-1-.6-2.4.8-2.5-.5-1-1.9-1.2-2-1.2.4-2-.3-4.7-3-5.5l-21.5-44.1h-.2l-.9-2.1v-.2l-2.4-5c1.6-1.8.7-4.2-1-5v-1.5l2.3-.4c5-1.2 12.7-8.5 19.3-13-2.4 2.5-12 9.5-16.4 13.6-4 3.8-2.4 7.8-1.8 11.3l1.1 2.3c3.7.3 9 2.4 13.1-1 1.2-1.1 19.1-23.5 21.6-25.6-1 2-12.4 16.3-17.5 24.5-3.7 6.1 1.9 10.4 2.5 13.9 4-1.3 9.6 1.1 12.5-3.8 3-4.8 11.7-21.8 15-26.5-1.2 3.7-10.6 22.8-11.2 24.6-2.1 6.6 3.4 7.7 5.6 12.1 3.4-2.3 9.5-.6 11.8-6.7 1.5-4.2 5.1-18.9 7-22.8-.3 4.2-1.4 10-2.3 16.5-.9 6.4 5.1 6.3 8.3 10 3-2.7 8.6-2 9.5-7.8.9-5.1 1-17.7 1-17.7 1 .8 1.4.9 2.2 1.8 2-2.5 6.5-2.5 8-5.4.5.1.8.6 1.4 1 4.7 7.9 5 23-1.5 28.5 2 0 4.4-.3 5.9-.9-3 6-9.5 8.2-17 5.4zm32.3 101.7c-5.1 0-8.8-3.2-6.1-7.8 1.3 2 4 3 6.3 3.2-.2 2-.2 2.8-.2 4.6zm78.4-7.8c2.7 4.6-1 7.8-6 7.8 0-1.8 0-2.5-.5-4.6 2.3-.1 5-1 6.5-3.2zM161 341.8c-4 5.4-7 9.2-9.5 16-4.5-.5-3.7-6-2.2-8.8 3-5.6 15.5-12.9 21.6-20.2-2.6 4.7-6.6 9-10 13zm13.4 10c-2.5 9.9-4.4 24.3-3.5 31-8.8-4.6-3.8-22.1-.4-29.7 4.6-10.6 8-23.4 9-31.6 2.8 6.1-3.2 23.7-5 30.2zm20.5 31c.8-6.7-1-21.1-3.5-31-1.8-6.6-8-24.2-5.2-30.3 1 8.2 4.4 21 9.1 31.6 3.4 7.6 8.3 25-.4 29.6zm21.6-33.8c1.4 2.7 2.3 8.3-2.2 8.7-2.5-6.7-5.6-10.5-9.4-15.9-3.5-4-7.3-8.3-10-13 6.1 7.3 18.5 14.6 21.6 20.2zm-1.8-255.4c-5 .8-9.5 0-13.4-1.7 2 3 4.5 5.4 8.5 6.7a25 25 0 0 1-21.4 7.7c2 2.5 6 4.1 9.4 3.7a87.6 87.6 0 0 0-14.8 39.6 86.4 86.4 0 0 0-14.6-39.6c3.4.4 7.2-1.2 9.2-3.7-8.6.8-16.8-2.6-21.1-7.7 3.9-1.3 6.4-3.7 8.4-6.7-3.8 1.7-8.4 2.3-13.4 1.7 6-1.3 15.2-6.1 15.6-10.5-1.6 1.8-13.6 2.4-20.4 2.4a64 64 0 0 0 29-14.8c4.6.1 10.3.3 14.8.1 5.2 5.6 17 12.2 29 14.7-7 0-19-.6-20.4-2.4.4 4.4 9.6 9.2 15.6 10.5z" data-v-eb6c4a1f></path><path fill="gold" d="M193.5 324a88 88 0 0 0 17.3 16.6c2.8 2.3 6.4 4.4 8 7.7 2.5 4.5 1.8 11.4-3.6 12-1.3.1-2.4-.4-3-.4 0 1.6 1.4 3.5 2.8 4.5 4.4 2.8 9.2-.6 11.1-3.2 5 4.6 2.7 11.5-2.8 12.4-5.4 1-12.2.6-11.8 7 3.8-2.3 6.4.1 9 2.5 7 5.5 15 1.3 18-5.1 1-2 2-7.6 1-10.1 7.4 3 4.7 9.5 8 12.6.1-5 5-7 5.8-10.4a11.7 11.7 0 0 0-12-13.8c4.7-.1 8.5-2.1 9-5.5 1-5.8-2.4-8.8-4.9-10 2 4.2-3.2 11-11.1 6.6-3.2-1.7-8.5-7.3-13-9.6-7.6-3.8-12.6-5.1-20.4-10.4-5-3.2-9.2-8.4-9.5-15.9-2.4 4.7-.6 8.8 2.1 12.6zm52.2-2.3c0 .2 0 .2 0 0 .6 1 1 1.8 2 2.5-.4.2-.8 1.8-.4 2.3 0-.8 1.6-2.3 3-.8 0 .1-.8 1-.4 1.9.2-.6 2.4-2 4-.2-.3.6-.7 1.3-.3 1.8 0-.6 1.7-2.2 3 .1.5-.1 0-.9 1.8 0 1.3.5 10.5 3.2 11.8 3.4 7 1.6 14 2.5 18.2-4 .5.6 1 1.4 1.8 2 .5 1.1-1.4 0-2 .7 1 .8 5.1 1.3 3.2 3.6-.1-.1-.9-1.4-2.5-.9 1 .5 2 1.4 2 1.4-.7.1-1.4.1-2 .4-.4-.2-.8 1.7.2 1.7 2.8-.1 7.3-.8 10 .2-1.4 2-2.6 2.5-7.1 2.6-1.5.2.1 1.5.7 1.5l1.8.1c.4 0 0 1.5 1.4 2-.4-1-.4-2 1-2.1 0 .6.4 1.7 1.5 1.9-.7-1.3-1.1-2.8.6-3.4.4 0 .4 1.3 1.3 1.8 0-1-.9-2.4.2-3.2l1.3 1.3c-.6-1.5 0-2-.2-2.7.5 0 1.8.6 1.8.6-1.3-3.3-.9-5 .9-6.4 1.4-1.3 5-.9 5.4 1.6.4 1.3.1 2.5-.6 3.5-.9 1-2.2 1.3-3.2 2-3.7 2.8-6.2 6-10.5 8.1-2.5.9-3.3-1.8-7-2l-10.9-6.6c-5.5-2.4-9-1.5-10-2.5-1.4.9-2-.9-2-1.5-.7.5-.8 1-.7 1.5-2.3.1-2.7-1.8-2.5-2.3-.5.4-.5 1.3-.5 1.7-2.7.4-2.7-1.9-2.7-2.6-.6.6-.6 1.6-.4 2-2 .6-2.5-2-2-2.6-1 .4-1 1.6-1 2-2.4 0-2.6-2.6-2.4-3-.6.1-.9 1.7-.6 2.2-2.5.1-2.8-2.5-2.8-3.5-.6.5-.6 2-.6 2.3-2.7.1-2.7-2.8-2.6-3.4-.9.6-.9 2.5-.9 2.8-2 0-2.3-2.3-1.4-4.4-1.6 1.3-1.3 3.7-1.3 3.7-5.1 0-14-.5-15.2-2-.6-.4 2.6-3.4 3.2-11.7l.9-1c.1 2.6.8 3.7 2.7 5 1-3.2 1.5-3.9 3.3-6.8.7 5.2 3.9 7.6 7.7 7.4zm-106.2.9c.6 1.3 2.5 3.5 3.2 4.4 1.3 1.7-.1 3.2-2.8 3.5-7.1 0-9.5-.6-14.4-.4h-4c0-1 .2-2-1-3.1.6 2.5-.6 4-2.5 4 0 0 1-2-.8-3 .7 1.9-.5 3.5-2.4 3.5.5-1.3 0-2-.9-2.8.5 2.5-.1 3.5-2.4 3.8.3-1.3-.5-2.3-1-2.7.4 1.7-.5 4-2.4 4.3 0-.8 0-1.7-1-2.7.1 3-.6 3.6-2.2 4 .1-1.4-.4-1.8-.9-2.7.5 2.2-.4 4-2.3 4.7 0 0 .1-2-.9-3.3.1 2-.9 3.8-3.2 5.9-3.7 2.5-6.2 4.4-10 6-1-2.5-2-5.1-3.3-7.8 2.5.2 4.4 1 6.7.2 1.8-.2 4.2-1.8 4.7-2.8-2 1-4.7 1.5-5.4 1.5-4.7 0-7.6-1-9.7-5l.6-.4c1.3 2 4.6 3 7 2-2.7 0-6.4-2-6.5-5.4.5-.7 1-2.8-1-3.5 1 1 1 1.5 0 3.2-1-1.3-1.4-2.5-2.7-2.8.2.6 0 1-.1 1.4a4 4 0 0 1-2 0c0 .5 2.4 1 2.8 2 1.8 4.4-3.3 6.1-5.5 3.5-1.3-1.7-1.3-4.2-.2-5.4 3.3-2.5 4-3.4 5.4-5.5 2.1-2.4 4.7-.5 5.2 1.1 2.4 5.9 5.8 8 10 9 5 .5 10.7-1.4 16.5-4 2.2-.9 2.7-1.3 3.6.1.5-.8-.2-1.7-.2-1.7 1-.9 2.3-.9 2.8.4.9-.6.1-1.7.1-1.7 1.8-1.5 2.7-.6 3 .4.7-.9 0-1.9 0-1.9 1-.4 1.8-.9 2.4-1.6 3.5 0 6.5-2.3 7.6-7.3 1.8 2.8 2 3.6 3 6.9 2.1-1.4 2.7-2.5 3-5 .9.9 2 1.6 3.2 2.2 0 1.7.6 3 .9 4.5zm-21-46a14 14 0 0 0-7.2 6.9c-1.7.7-4.2 3.2-5.1 6.5-1 3.5-.6 6.9 1.2 11-.2 3.8-2.5 6.8-6.8 7.3 4.4.1 6.6-2 7.4-5.9 1 3.4-.6 6-3.3 7.3-2.7 1-6.1.6-7.9-1.7 11.4-1.9 1.4-15.2 5.9-23.8 2-4.1 6.4-8.2 14-9l1.8 1.4zM274 48.9l-1.3-.2c-.9 2-1 4.5-.9 7-.8-2.5-1-4.5-.4-6.7-5.1.6.6 11.4 2.8 16.5 1 2.6 3 8.8-1 14.2 1.9-.9 6-5 6-8-.2-5-1.5-7.7-2.1-9.5-1.7-4.1-2.6-8.7-.4-12.3-.5 0-1-.2-1.6-.5a11 11 0 0 0-1.4 7 7.9 7.9 0 0 1 .3-7.5zm21.8 7.3c1 2.3 1.3 4.6.4 7.7.2-3.4-1-6.6-1.7-7.7L293 56c2.8 6.6 1.3 11.8-.8 14.5-4.4 5-4.1 9.6-1.4 15 1.4 2.5 6.5 8.6 2.8 12.6 7.9-3.8 4.4-11.1 2-13.9-1.7-2.5-1.8-6.1.2-8 0 4 3.5 7 6.6 7s8.4-4.1 10 .9c0-5-3.3-4-6.5-3.1-9.2 2-8.8-9.4-5.1-12.4 3.5-2.8 8.4-7.3 2.6-10.5.6 1.9.4 4.3-.4 6 .1-1.5 0-5.3-1.2-6.5l-1-.4a10 10 0 0 1 0 6.9c.1-2.2 0-5.2-1-7l-1.4-.2c1 1.9 1 4-.1 7.3.1-3.5-.4-6.1-1.3-7.7l-1.2-.3zM139.9 317.9zm18.3-154.5c-.6 4.5-2.8 10-3.2 12.3h-3.5c.9-2.5 5.7-8.2 6.7-12.3zm-15.5-64.7c2.2.4 5.4.8 7.3.8 2.6 2.5 6.3 8 10.1 14.8-7-4.2-13.9-12.6-17.4-15.6zm12 .6c2 3.8 9.6 8.4 17.7 8.9a20.6 20.6 0 0 1-21-8.8c.8.1 3.3-.1 3.3-.1zM52.3 216.6l10.5-7 1.5.5-12 6.5zm84.4-142.2.2-.1-.2.1zm-21.4 0-.2-.1.2.1zm68 325.6c2.8-1 8-6 9-9.2l-1-1.3c-1 3-4.6 7.7-8 7.9-3.2-.1-7-5-8-7.9l-.9 1.3c.9 3.2 6.3 8 9 9.2zm72.5-115s.1 2.4 0 4.7c1.4 4.3 2.3 11-3.7 15.7a17 17 0 0 0-.8-2.4 9.4 9.4 0 0 0-1.4 6.9c1 3.5 3.3 6 6.2 7.3-2.7-5.1.4-11.8.8-12.7 2.8-6.6 5.4-13.7-1.1-19.4zm-2-198.2c-8.4 0-35.6.8-46 .8-1.4-.3-3-.6-4.5-1.2 1 .9 3.7 2.6 5.1 3.2 8 4.1 17.9 5 28.1 3.7 2.6-.2 9-3.1 14.2-1.2 0 2.6-3.1 7-4.1 8-3-2.2-6-3-10.1-4.4-5-1.4-11.1-1.7-17.1-.8-3.5.4-9.5 1-13.4 0 5 4 13 4.6 21 2.3-6.1 4.1-12.7 11.4-13.7 19.1 5-7.6 12.5-13.2 20.4-17-6 5-12.2 14-14.9 18.8a94.9 94.9 0 0 0 20.2-16 35.5 35.5 0 0 1-7.8 11.2c1.6-.9 7.8-3.8 12.6-8a54 54 0 0 0 11-16.6c.4-1.6-.3-1.9-1-1.9zM80.4 342.2c0 .4 0 1.7-.8 2.5l-.8-1c.6 0 1.5-1 1.6-1.5zm-2.7-7.6c.1.6.1 1.3.8 2-1-.1-2.3-.8-2.3-1.9l1.5-.1zm6.2 12.1c.5.4.5 1.9 0 2.3l-.8-.8c.6-.3.8-1 .8-1.5zm-5.4-9.3c-.1.4-.4 1.6-1.4 2-.2-.1-.3-1-.6-1.3.4.1 1.7-.5 2-.7zm-5.2-13.2s-1.8 1.8-2.4 2.8c-1.3 2.6 0 5.5 2 7.6 0 0-2.5 1.7-4 1.3-1.8-.9-5.4-12.4-5.4-15.2a10 10 0 0 0 6.1-2.5c1.8 1.8 2.4 4 3.7 6zm5.8 9.4c3.2 2.3 9 15.7 8.6 19.8a5 5 0 0 1-3.5 4.4c-2.3.6-4.6-.1-4.8-1.5 4.4 1 6.9-2.7 5.6-6 .6-2.3.6-3.6-1.2-5.6-.1 1.9-.9 2.7-1.8 3.3-.5-.4-1.7-.6-2.7-.4.4-.5.6-1 .6-1.5 1.9-1 1.7-4 .4-6.1a5.4 5.4 0 0 1-2.5 2.9l-.9-.1.5-1.7.4-.1c.9-.3 1.3-.9 1.8-1.6.1-.1.1-.6.3-.7l.5-.2a12 12 0 0 1-1.3-5zm6.5 25c2.7-1 3.5-2.7 3.5-4.3 2 2.5-.2 4.7-2.8 6-2.5 1.3-6.6 1.3-7-2 1.3 1.6 4.8 1.1 6.3.4zm0 1.3c1.3-.2 1.9-1 2.7-1.5 0 1-1.9 1.7-2.7 1.5zm2.7 4.2c-1.3.6-3.2.9-4.5-1a7 7 0 0 0 5.8-2.8 3 3 0 0 1-1.3 3.8zm1 2.2c-.5.4-1.4.4-2-.6a3.6 3.6 0 0 0 2.8-1.3c.3.7-.2 1.6-.7 1.9zM15.4 215.7c-2.2-2-.4-2-.1-2.8.4.3 1.9-.6 1.7 2.2l-1.6.6zm4.6 4.5-.2-1.8c-.9-1-2.2-1-3.2-.5-.1.8-1.3.1-1.9 1.1-.4-.7 0-1.3.6-1.7-.2-.5.1-.6.4-.9l2.5-1.3c-.4.4-.4.6-.4.9 2-.2 3.2 1.3 3.2 1.3s-.2-2 1.4-3.2c-.1-.2-.4-.5-1-.2l2.8-1.3c.1 0 .7 0 .9.2.9 0 1.4.1 1.9.7-1.3 0-1.5 1.3-2.4.9-1 .4-1.7 1.6-1.6 2.7l1 1.4-4 1.7zm5-1.7c1 1.1 2.9 2.6 2.6 4.5-.2 2.5-1.5 2.5-2 4-1.8-.7-2.7.4-4.5-1-1.7-1.3-1.3-3.3-1.9-5l5.9-2.5zm-10.6 2.4c0 1.8.9 4.4 3.5 4 .6-.5 1.2-.9 1.3-1.6l.2.4c0 .9.4 2 1.3 2.6 1 .6 1.7 1 2.3 1 0 .4-.1.8-.4 1.2-1.5-.8-2.8-.6-4 .5h-1.3l1-2.8-1.8 2.8-1.4-.5 1.4-2.3-2 2-1.3-.5 2-2-2.5 1.5-1.5-1 3-1.3-3.6.4c-.1-.1-.1-.4-.4-.4-.2-.5-.2-.9-.5-1.3H14l-4.6-1-.1-1.4 3.8 1-4-1.8v-1.8l5.3 2.3zm1.5 8 6 3.7-.5.5-5.8-3.5.3-.6zm11-3.1 1.4.8s2 3.2 4.7 1.8c.1.6-1 1.7-2.5 2-2.2 0-4.1-1.6-4.1-1.6s-.2 2.5-1.8 4.1c-1.1 1-2.7 1.3-3.2.6 3-1 2-4.7 2-4.7l.4-1.7h.5l1 .1.4.5v-.6c.1-.5.4-.6.5-1 .2 0 .3 0 .6-.3zm4.6-.2c.6-.1 1.5 0 1.8.9.1.6 0 1.3-.6 1.7-.6.2-1.5 0-1.8-.8-.3-.8 0-1.4.6-1.8zm-1.2-16.8c.5.3 1 .9 1.4 1.3l-1.5 4.1 2-3.5c.3.4.5.9 1 1.3l-2.4 4 2.7-2.8c.2.1.2.6.5 1l.1.5-2.7 2.4 2.7-1.4c.2.6 0 1.3 0 1.9l-2.9.8 2.8-.1-.2 1.3-2.9.2 2.5.5-.4 1-3.5-.4 2.7 1.3c-.1.5-.4.6-.8 1-1.7 0-2.7 1-2.8 2.7l-1.3-.6c.4-.4.6-1.3.8-2.5 0-1-1-2.2-1-2.7l-.1-.2h2c1.8-1.7 1-4-.6-5.4l2-5.7zm-8 3.8c-2-1.7-.4-2-.4-2.8 1 .3 1.9-.6 1.9 2l-1.5.8zm-4.5-.4c-3.2-2.4-.9-3.2-.6-3.8.9.3 2.6-1.2 2.8 2.7l-2.2 1zm48 97.8c.5.2.2 1.8-.1 2.2-.2.6-1 1.3-2 1.3a8 8 0 0 0 2.1-3.5zm-33.3-66 1.5-.6L59.5 296c.4 1-.2 2.4-1.4 2.8-1 .4-2.9.7-3.5-.6L32.4 244zm-3.2-11.8c2 0 3.5 1.3 3.5 3.2 0 1.7-1.4 3.2-3.5 3.2a3.2 3.2 0 0 1-3.2-3.2c0-1.8 1.5-3.2 3.2-3.2zm.3 8.5c1.6 0 2.8-.8 3.7-1.8.5.1 1 .4 1.3.9.4.9-.2 2.2-1.5 2.8-1.3.5-2.8.4-3.2-.6-.3-.5-.3-1-.3-1.3zM59 300c1.7-.9 2.3-2.3 2.3-3.4 1.3 1.5 0 4-1.9 4.7-1.7.9-4.5.9-5-1.6 1 1.2 3.5.7 4.6.3zm1.9 2.3c0 .6 0 1.5-.5 2.4-.8-.2-1.4-.9-2-1.3.9 0 1.9-.5 2.5-1zm5 4.9c1.8 2.3 1.4 5.8-1.2 6.8-2.7 1.3-5.4 0-6.2-3-.6-1.8.6-3.8-.8-6.5 1.3 1.6 2.9 2.2 3.5 2.2a6 6 0 0 0 .8-4.4c1 2.2 2.8 3.1 4 4.9zm-.4 8.7c2.4-1 3.3-2.7 3.3-4 1.7 2.1 0 4.5-2.7 6-2 1-5.8 1-6.1-2.1 1 1.3 4.4.7 5.5.1zm-37.8-99.6h-1.9l-.1-.1-.3.1h-.5l.2-.1c.6 0 1-.2 1.4-.6.5 0 1 .3 1.2.7zm-7.3-.9c0-.3.2-.6.3-.8-.9-.3-1.9-.8-2.6-1.2l.1.6 1.2.4s-.2.2-.2.6c.2 0 .8.1 1.2.4zm.3-2.3.1-.3-.4-.6-.7.3 1 .6zm103.7-154 .3 5.6v-.1l.2-.1.4-.4a2.5 2.5 0 0 1-.3-.3l-.2-.3a1.3 1.3 0 0 1 0-.4 2 2 0 0 1-.1-.3v-.3a1 1 0 0 1 .2-.3l.2-.3a2.3 2.3 0 0 1-.3-2.1l.2-.3.3-.2c-.3 0-.6 0-.9-.2zm3 .2-.8.1c.4.3.7.8.6 1.3v.4l-.6 1 .3.1.3.4v.3c0 .8-.2.9-.6 1.3.3.3.4.5.4 1s-.3 1-.4 1.1l.2.2a1.4 1.4 0 0 1 .2.7l-.1.6a1.7 1.7 0 0 1-.3.4c.3.1.4.4.4.7l.5-9.6zm-7.5.2-.6.2 2.5 13v-.4h.1l.5.4-1.6-13.1-.5-.1a1.8 1.8 0 0 0-.4 0zm11.9 0h-.4l-1.7 13.2.4-.4h.2l.1.4 2.5-13c-.3-.1-.8-.3-1.1-.2zm-6 .4c-.4 0-.8.5-.8.8 0 .5.4 1 .9 1 .6 0 .9-.5.9-1 0-.4-.2-.8-1-.8zm8 .4-.3.6 1.6 1.7c.4-.4.9-1 1-1.7-.9-.2-1.5-.5-2.3-.6zm-15.4.2a52.5 52.5 0 0 1-2.6.5c.1.5.6 1.2 1 1.8.5-.8 1.2-1.2 1.6-1.8v-.5zm5.1.5-1.7.2.1.9 1.6-.2V61zm5.1 0v.9l1.3.2.2-1h-1.5zm-13.2.2c-.6 0-1.4.9-1.8 1.3l1.3 2.3c.7-.5 1.2-1.3 1.8-1.9a9 9 0 0 0-1.3-1.7zm21.1 0c-.3.4-.7 1.1-1.3 1.7.8.6 1.3 1.3 1.8 2l1.4-2.4c-.4-.4-1-1.3-1.9-1.3zm-18 .3c-.7.4-1 1-1.6 1.4.8.6 1.2 1.3 1.7 2l.4-.5-.4-3zm15.1 0-.7 2.9.4.4a10 10 0 0 0 1.6-1.9l-.6-.7-.3-.4a2.8 2.8 0 0 0-.4-.3zm-20.3.6.3.1.2-.1h-.5zm25.3 0 .1.1v-.1h-.1zm-25.6.2-2.2 1.5.3.7 2-2v-.2zm12.9 0c-.4 0-.6.2-.6.6 0 .6.1.9.6.9.6 0 .9-.3.9-.9 0-.1-.2-.6-.6-.6h-.3zm13.1.2v.1l1.8 2 .6-.8a4.2 4.2 0 0 0-2.4-1.3zm-25.8.1c-.6 1-1 1.5-1.8 2.4.7.7 1.3 1.4 1.8 2.2.4-.9 1-1.5 1.4-2.2-.4-1-1-1.5-1.4-2.4zm10.3 0-1.3.3v.5l1.3-.2v-.6zm5 0v.6l1.3.2.1-.6-1.4-.2zm10.2 0c-.4 1-.9 1.5-1.4 2.4l1.6 2.2 1.6-2.2c-.5-1-1-1.5-1.8-2.4zm-21.8.5c-.7.6-1.1 1.3-1.7 1.9l1.5 2c.5-.7 1.3-1.3 1.7-2-.4-.6-1.2-1.2-1.5-2zm18.3 0a18.6 18.6 0 0 1-1.6 1.9 19 19 0 0 1 1.8 2l1.4-2c-.4-.8-1.1-1.3-1.6-2zm-24.5.9c-1 .7-1.3 1.9-1.5 2.7l.5.8 1.4-2.7c-.3-.3-.3-.4-.4-.8zm30.8 0c-.1.4-.4.7-.6.8l1.5 2.7.4-.8c-.3-.7-.7-1.9-1.3-2.7zm-18 0-1.1.4v.7l1.1-.1v-1zm5.1 0v1l1 .1.2-.9-1.2-.1zm-2.8.4c-.3 0-.5.1-.5.6s.1.8.6.8c.4 0 .9-.4.9-.8s-.2-.6-.6-.6h-.4zm-6.5.4-.1.2v.7-.9zm13.6 0-.3 1 .4-.8-.1-.2zm4 .3c-.4.7-.8 1.5-1.4 2l1.8 2c.4-.5.8-1.2 1.4-1.8-.7-.6-1.1-1.3-1.7-2.2zm-25.6.2-1.5 2.6a9.5 9.5 0 0 1 1.5 1.9c.4-.9 1.1-1.5 1.7-2.3-.6-.6-1-1.5-1.7-2.2zm3.6 0c-.4.8-1 1.6-1.5 2.2l1.5 1.7 1.5-1.9-1.5-2zm25.9 0c-.5.7-1 1.6-1.6 2.2.3.4 1.6 1.7 1.6 2.3L142 68l-1.4-2.6zm-16.1 0 .2 3.5c0-.3.1-.6.4-.7-.3-.2-.4-.6-.4-1l.1-.6a1.8 1.8 0 0 1 .3-.4c-.3-.1-.5-.4-.6-.7zm-6 .3a5.1 5.1 0 0 1-1.8 1.7c.8.6 1.2 1.3 1.8 2a4 4 0 0 1 1-1.4l-.1-1.5c-.3-.3-.4-.7-.9-.8zm14.6 0-.9.8-.2 1.5 1.3 1.3 1.6-1.9c-.5-.4-1-1.2-1.8-1.7zm-9.5.1-1.1.3v.9l1.1-.2v-1zm4.7 0V67l.9.1.1-.9-1-.4zm-2.6.7c-.5 0-.6.5-.6.6 0 .5.4.9.6.9.4 0 .9-.4.9-.9 0-.4-.5-.6-1-.6zm-16.7 1v1l.5-.5-.5-.4zm14.6 0-.9.2v.9l1-.2v-.8zm4.4 0h.2-.2zm.2 0v1h.8l.2-.8-1-.1zm14.4 0-.1.5.3.6c0-.4 0-.9-.2-1zm-29.6.2c-.6.9-1.2 1.7-1.8 2.3.6.6 1.2 1.4 1.5 2 .4-.8 1.2-1.8 1.7-2.4-.6-.6-1-1.3-1.4-1.9zm3.5 0-1.5 1.9 1.5 1.9c.5-.7 1.1-1.5 1.7-2-.6-.8-1.2-1.2-1.7-1.8zm18.7 0-1.5 1.8 1.5 1.8 1.4-1.7-1.4-1.9zm3.5 0-1.5 1.9 1.5 2.5c.7-.7 1.1-1.5 1.6-2l-1.6-2.4zm-29.1.5-.6 1c0 1 .2 2 .6 2.9l1.3-2-1.3-2zm32.6 0a9.3 9.3 0 0 1-1.5 1.8c.4.8.9 1.5 1.3 2l.5-.3.1-2.5-.4-1zm-22.5.2c-.5.2-.9.6-1 1 .4.6 1 1 1.4 1.5l-.4-2.5zm6 0c-.5 0-.6.2-.6.6 0 .2.4.6.6.6.4 0 .5-.4.5-.6 0-.4 0-.6-.5-.6zm6.4 0-.7 2.5c.7-.4 1.1-.9 1.7-1.4l-1-1zm-8.5.6-.7.2v1l.9-.2-.2-1zm4.4 0v1l.7.2.2-1-.9-.2zm-3.3.2.1 4.4c.2-1 .4-1.5.7-2-.3 0-.7-.4-.6-1 0-.4 0-.7.2-.9-.2-.1-.4-.3-.4-.5zm2.3 0-.6.7c.3.3.4.4.4.9s-.3.7-.8.9c.3.4.7 1 .8 1.9l.2-4.4zm-8.5.4c-.7.7-1 1.3-1.6 2l1.6 1.5 1.5-1.8-1.5-1.7zm14.9 0a10 10 0 0 0-1.7 1.7l1.6 1.8 1.7-1.4a11.3 11.3 0 0 0-1.6-2.1zm-18.5.1-1.8 2.5 1.5 1.8.1-.3-.1-.5h.7c.2-.7.7-1.1 1-1.7-.4-.7-1-1.2-1.4-1.8zm.4 3.5c.7 0 1.3.2 2.5.6l.4-.6-1.6-1.4c-.4.4-.7 1-1.3 1.4zM137 70l-1.4 1.8c.4.7.8 1.1 1.3 1.7h.3c0 .3 0 .3-.2.4l.2.2c.5-.7 1-1.2 1.6-1.6-.5-1-1.2-1.6-1.8-2.5zm1.8 2.5c-.5.7-1 1.3-1.5 1.7.5.6.6 1.2 1 1.6.7-.3 1-.9 1.5-1.3l.1-.1c-.3-.6-.5-1.3-1.1-2zm-13-2.4c-.5 0-.5.2-.5.6 0 .2.3.5.5.5.4 0 .5-.3.5-.5 0-.4 0-.6-.5-.6zm-14.6.5a9 9 0 0 0-1 2c.4.5.8 1.2 1.4 1.6.3-.6.7-1.3 1.2-1.9-.5-.6-1.2-1-1.6-1.7zm29.5 0a6 6 0 0 1-1.6 1.7l1.3 2c.4-.7.8-1.4 1.6-1.7l-1.3-2zm-16.8.1-.6.2v.9l.6-.2v-.9zm4.2 0-.1.9.7.2.1-1h-.7zm-8 .9c-.6.6-.9 1.2-1.5 1.7l1.8 1.4.4-.6-.4-2.3v-.2h-.3zm11.2.2L131 74l.6.6 1.4-1.3c-.4-.7-.8-1.3-1.4-1.7h-.2zm3.8.2-1.7 1.5.5.6c.8-.3 1.6-.7 2.2-.6-.4-.4-.5-1-1-1.5zm-1.7 1.5c-.6.6-1.2.9-1.8 1.3l.5.5c.4-.5 1.1-.8 1.7-1l-.4-.8zm-7.5-1.2c-.6 1.2-1 2.7-1 4 0 1.6.4 3 1 4.4a10.3 10.3 0 0 0 0-8.3zm-13 .3-1 2c.4.4 1 .8 1.4 1.5.5-.4 1-1.1 1-1.7-.4-.5-.8-1.2-1.4-1.8zm10.5 0v1l.5-1h-.5zm4.7 0c0 .3.3.6.3 1l.3-1h-.6zm-18.3.2-.1.1c.4.9.9 1.8 1 2.6.2-.4.5-.5.6-1l-1.5-1.7zm32.2 0-1.5 1.7c0 .5.3.6.5 1 .3-.6 1.1-2 1-2.6v-.1zm-20 .4c-.2 1.5.3 3.2 1.1 4.5.8.6 1.4 1.3 1.8 2a15.5 15.5 0 0 1-.4-3.7c-.8-1-1.7-2.2-2.5-2.8zm2.2 0-.2 1 .6.9.2-1-.6-.9zm3.8 0c-.5.3-.8.7-.9.9l.1 1 .6-.9c0-.3 0-.7.2-1zm1.8 0c-1 .7-2 1.7-2.6 2.8 0 1.1.2 2.5-.4 3.6.4-.6 1-1.3 1.7-1.9 1-1.3 1.3-3 1.3-4.5zm-11.3.5-.3.7c.6.3 1 .4 1.4.9l.5.1.1-.4-1.7-1.3zm18 0a9.5 9.5 0 0 0-5 2.6c.7-.3 1.1-.5 1.7-.5-.1.2-.1.6-.4 1l1.6-.2c.7-1 1.6-1.8 2-2.8zm-21.4.2c.7 1 1.3 2 2.5 2.8l1.3.1-.1-.8c.5 0 1.1.1 1.4.4a8.1 8.1 0 0 0-5.1-2.5zm-3.5.8c-.2.4-.5.8-.6 1.3.1.7.5 1.7 1.2 2.3.4-.7.9-1.3 1-2.2l-1.6-1.4zm3 0-1 1.4c.5.8 1.2 1.2 1.8 1.8v-.2l-.6-.9h1.2l.1-.7c-.4-.6-1-1-1.4-1.4zm22.7 0c-.7.4-1.2.8-1.7 1.4v.6h1.1l.2.1c-.2.3-.5.6-.6 1h.3c.4-.5 1.2-1 1.7-1.7l-1-1.4zm3 0c-.5.5-1 1-1.7 1.4.5.9.7 1.6 1.2 2.2.6-.6.9-1.6 1.3-2.3l-.9-1.3zm-20 .4-.2.4c.3.3.4.3.4.5l-.1-.9zm.5 0 .6 1.7c.4 0 .7.3.9.5-.3-.6-.5-1.3-.5-1.8-.1-.1-.7-.4-1-.4zm10 0-.8.4-.6 1.8c.3-.3.8-.5 1-.5 0-.5.3-1.1.5-1.7zm.5 0-.1.9c.3-.3.4-.3.4-.5l-.3-.4zm-14.6 1.3-.1.3h.1v-.3zm18.6 0-.2.3h.2v-.3zm-16 .2a8.7 8.7 0 0 0 5.9 4.2c-1-2-3.5-4-5.9-4.2zm13.3 0c-2.5.3-5 2.2-6 4.2a8 8 0 0 0 6-4.2zm-19.1.1a6 6 0 0 0-1 1.9l1.9 1.3.9-1.7-1.8-1.5zm24.8 0-1.9 1.5 1 1.7c.8-.7 1.4-1.2 2.1-1.3l-1.2-1.9zm-21.8.3c-.3 0-.6 0-.8.2.6.8 1.7 1.4 2.8 1.9h2.3c-.6-.3-1-1-1.5-1.7-1-.2-2-.4-2.8-.4zm18.9 0c-1 0-1.9.2-2.8.4-.4.8-1 1.4-1.4 1.8.9-.2 1.7-.1 2.3-.1 1-.5 2-1 2.8-2a4.4 4.4 0 0 0-1 0zm.7.9c-.6.6-1.1.9-1.7 1.3h.4l1.3-1.2v-.1zm-20.3.1-.1.2 1.1 1.1h.6l-1.6-1.3zm-.3.3-.8 1.6.6.5c.5-.3 1.1-.3 1.7-.5a167.2 167.2 0 0 0-.6-.6h.2l-1-1zm20.8 0-.9 1.2h.2l-.6.6h.1c.5.1 1 .1 1.5.4l.6-.4c-.3-.8-.6-1.2-1-1.8zm-24 .3c.2.9.6 1.5 1 2.3h.6c0-.4.3-.5.3-1a6.8 6.8 0 0 1-1.9-1.3zm27.5.2-2.2 1.3c.1.3.4.7.4 1h.6c.3-.9.7-1.6 1.2-2.3zm-21 .7a8.1 8.1 0 0 0-.8 0 6.5 6.5 0 0 0-.8.1l2.1 1.5h4.4a9.2 9.2 0 0 0-5-1.6zm14.3 0c-1.7 0-3.5.6-5 1.6h4.5c.6-.4 1.5-.7 2-1.5l-1.5-.1zm-18.4.7-.3.5c.3 0 .3 0 .4-.3l-.1-.2zm22.8.2-.5.1.6.2-.1-.3zm-20.4.2-2 .2h3.2l-.5-.1a5 5 0 0 0-.7-.1zm17.9 0a5.5 5.5 0 0 0-.7 0c-.3 0-.3.2-.5.2h3.2l-2-.2zm-8.4-34.7c.2 1.4 2.7-.3 3.1-.6v3.7c-.6-.5-1.7-1.4-2.6-1.2-1.5.1.4 2.6.6 3h-3.5c.4-.5 1.3-1.7 1.3-2.6-.2-1.4-2.7.3-3 .8v-3.7c.5.4 1.7 1.3 2.4 1.3 1.5-.1 0-2.6-.6-3h3.5c-.6.5-1.6 1.6-1.2 2.3zm2.2 8.8c0 1.5-1.3 2.8-2.7 2.8s-2.8-1.3-2.8-2.8c0-1.6 1.3-2.8 2.8-2.8s2.7 1.3 2.7 2.8zm-34.7-6c.8 2 1 4.5.8 7 1-2.5 1.2-4.5.5-6.7 5.1.5-.6 11.4-2.8 16.5-1 2.6-3.2 8.7 1 14.1-1.9-.8-6-5-6-7.9.2-5 1.5-7.7 2-9.6 1.7-4 2.7-8.6.7-12.3.4 0 .8-.1 1.4-.4a11 11 0 0 1 1.3 6.9c1.5-3.1.6-6.2-.1-7.3.3 0 .7-.3 1.2-.3zm-23.3 7.6c-1 2.3-1.3 4.6-.4 7.7-.1-3.4 1-6.6 1.8-7.7l1.6-.2c-2.8 6.6-1.6 11.8.8 14.5 4.3 5 4 9.6 1.4 15-1.4 2.5-6.5 8.6-2.8 12.6-8-3.8-4.3-11.1-2-13.9 1.7-2.5 1.8-6.1-.2-8-.2 4-3.5 7-6.6 7-3 0-8.6-4.1-10 .9 0-5 3.3-4 6.5-3.1 9.2 2 8.8-9.4 5.1-12.4-3.5-2.8-8.3-7.3-2.5-10.5-.7 1.9-.4 4.3.5 6-.2-1.2-.3-5.6 1-6.5l1-.4a10 10 0 0 0 0 6.9c-.1-2.2 0-5.2 1-7l1.4-.2c-1 1.9-1 4 .2 7.3a14 14 0 0 1 1.4-7.7l.8-.3zm17.4-16c-2.5 0-4.4 1.8-6 3.3 1.5-1 5.2-2.5 7.3-2a2.5 2.5 0 0 1 1.2.5c-.6 0-4 0-6.3 2.6C87.6 43 91 43 92.6 43c.9.5 1 .6 2.5 1.2-4 0-6.1.9-11.8 3.8-3.5 2-10.4 2.8-10.4 2.8 2-1.5 3.6-4.1 4.5-5.2 2-2.6 5.1-6.8 8.5-6.4.7 0 1.9.6 2.3 1zm10 5.9c9 5-4.7 18.2-3.7 28.3.6 6 8.2 8.2 12.1 10-9.2-1-15.2-5.9-13.7-14.5 1.3-6.4 11.1-19.9 3.5-22.4-5.4-1.7-11.8 4.7-19.1 6-7 1.2-19.7 1.3-17.8 10.4.5 2.6 4.5 4.5 6 6.4 2.7 4.4.8 10.5-4.1 9.2-5.9-1.7-7.4-1.3-8.4 2 .6-9.7 9.7.2 11.6-4.7 1.7-4.4-1.3-6.6-3.7-8.7a7.7 7.7 0 0 1-3.2-6.4c1-9.5 13-8.5 20.4-10 4.4-1 10.1-5.2 14.5-6a12 12 0 0 1 5.6.4zm72.9 9.6c.5.6 1.6 1 2.1 1.3a17 17 0 0 0-4 1c-1-.2-2-.7-2.8-1.4 1.4-.6 2.9-.9 4.7-.9zm-2 10.5a64 64 0 0 1 14.2-1.3c5.4 0 11 .5 14.3 1.3-3.5 1-8.9 1.5-14.3 1.5-4.7 0-9.6-.3-14.1-1.5zm-2.1-.8v-1c2.7-1 8.9-1.7 16.3-1.8 5 .1 11.6.1 16.4 1.9v.9a58 58 0 0 0-16.4-1.8c-5.2 0-11.2 0-16.3 1.8zm0-4.1v-1c2.7-1.7 8.9-2.7 16.3-2.7 4.8 0 11.9.2 16.4 2.7v1c-3-1.6-9-2.7-16.4-2.7-5.2 0-11.7 0-16.3 2.7zm16.3.4c-.4 0-1.1-.4-1.1-1 0-.7.7-1.2 1.1-1.2.6 0 1 .5 1 1.2a1 1 0 0 1-1 1zm-14.1.9-.6.6c-.5 0-1-.5-1-.6 0-.4.5-.9 1-.9.3 0 .6.6.6.9zm2.4-.9c0 .4-.1.9-.5.9s-1-.5-1-.9.5-.6 1-.6c0-.3.5.2.5.6zm2.8-.4c0 .4-.1.9-.6.9-.6 0-.8-.5-.8-1s.1-.8.8-.8c.5.1.6.6.6.9zm3-.2c0 .5-.5.9-.8.9s-.9-.4-.9-.9c0-.6.5-1.1.9-1.1.6 0 .9.7.9 1.1zm3.4-.3c0 .5-.4 1-1 1-.4 0-1-.5-1-1s.6-1.1 1-1.1c.7 0 1 .6 1 1.1zm-11 2.2V63v.1zm-.6-1.7.5-.2-.1.5c-.3 0-.4-.2-.4-.3zm3 1.3c.2 0 .2-.2.2-.4.1.1.4.2.4.4h-.6zm-.6-2h.8l-.2.4-.6-.5zm3.3 1.7.1-.4.4.4h-.5zm-.2-2.3h.6l-.2.5-.4-.5zm3.2 2.2.5-1c0 .5.1.7.4 1h-.9zm-.1-2.5.8-.2c-.1.2-.1.5-.4.9l-.4-.7zM181 62c.2-.1.5-.4.5-.9 0 .5.1.6.4.9h-.9zm0-2.5h1c-.2.2-.5.5-.5.9 0-.3-.2-.6-.5-.9zM167 63l.5.6-.5.2V63zm32.1-.4c0 .1-.4.6-.9.6l-.6-.6c0-.4.5-.9.6-.9.5 0 .9.5.9.9zm-2.5-.9c0 .4-.4.9-.9.9s-.5-.5-.5-.9.1-.6.5-.6c.3 0 1 .2 1 .6zm-2.8-.4c0 .4-.3.9-.8.9s-1-.5-1-1 .5-.8 1-.8c.4.1.8.4.8.9zM191 61c0 .5-.4.9-.9.9s-.8-.4-.8-.9c0-.6.1-1.1.8-1.1.6 0 1 .7 1 1.1zm-3.2-.3c0 .5-.4 1-.9 1-.6 0-1-.5-1-1s.4-1.1 1-1.1 1 .7 1 1.1zm9 2.2s0-.1.2-.1v.1h-.1zm.2-1.9.6.2-.4.1-.2-.3c.2 0 .2 0 0 0zm-3 1.5.2-.4c.2.1.2.4.2.4h-.3zm.5-2h.5l-.2.4c-.1-.3-.3-.3-.3-.5zm-3.2 1.7.2-.4.4.4h-.6zm.2-2.3h.5c-.1.3-.4.3-.4.5.2-.2 0-.4-.1-.5zm-3.4 2.2c.1-.2.6-.5.6-1 .1.5.1.7.4 1h-1zm.1-2.7 1 .2c-.2 0-.5.6-.5.7 0-.3-.2-.6-.5-.9zm-3.5 2.5c.5-.1.5-.4.6-.9 0 .5.2.6.5.9h-1zm.2-2.5h.9c-.2.2-.5.5-.5.9 0-.3-.1-.6-.4-.9zm15 4.4-.7-.1.7-.6v.7zM167 67.1c3.3 1 9.9 1.5 16.3 1.5 5.3 0 11.1-.2 16.4-1.5v1c-3.2 1-8.5 1.8-16.4 1.8A53 53 0 0 1 167 68v-1zm34.1-10 .2.8c0 .5-.2.6-.4 1-.6-.1-1.4-.5-2-.8l2.2-1zm-3.5.8c-1.3-.4-2.4-.6-4-.9.7-.1 1.6-.7 2.3-1.3 1.7 0 3 .3 4.7.9-1 .6-2 1-3 1.3zm6.2-4.8c-.6 1.5-1.5 3-2 4.4l-1-2.4c.8-.7 2-1.4 3-2zm4.7-17.4c-.3-1.3-1-3-2.2-4.2-.3.6-.3.9-.6 1.3a26.6 26.6 0 0 0 2.2 4l.6-1zm-36.1 9.7 2.5 1.9-.3.5-.6-.3c-.6-.5-1.3-.8-2.2-1.3l.6-.8zm-4.6 6.2c-.8-.8-1.9-1.6-2.4-2.6a7 7 0 0 1 1.6-2.2c.7.7 1.6 1.3 2.2 2.2l-.5.9h-1.6l-.3.3c.5.4.7.7.9 1.3v.1h.1zm-3.2-.8c-.3 1-.1 1.7.6 2.4l-1.6-.8 1-1.6zm-4-15.4a3 3 0 0 0 0 2.8l-.8-1.3.9-1.5zm6-7.6c-.8.8-.7 2-.4 2.8l-.8-1.6 1.1-1.2zm-2.8 3.4c-.8.7-.6 2-.3 2.9l-1-1.5 1.3-1.4zm-.3 7.7c-.8.8-.5 1.8 0 2.5l-1.5-1.3 1.5-1.2zm2.7-4c-.7 1-.6 1.7 0 2.7L165 36l1.3-1.2zm2.8-3.4c-.9.9-.3 1.6-.3 2.6l-.9-1.5 1.2-1.1zm2.6 3.3c-.7.8-.4 2 0 2.8l-1.4-1.6 1.4-1.2zm-2.9 3.1c-.3 1-.3 1.8 0 2.8l-.9-1.3 1-1.5zm-7.6 4.2c-.4 1-.1 1.8.3 2.5l-1.3-1.3 1-1.2zm3 2.8c-.6.9-.3 1.6.2 2.5l-1.3-.9 1-1.6zm1.8-3c-.3 1-.1 1.7.3 2.7l-1.3-1.3 1-1.5zm5.7-1c-.5 1-.5 1.8 0 2.8l-1.4-1.3 1.4-1.6zm2.5 2.8c-.3.6-.3 1.4 0 2.2l-.9-.8 1-1.4zm-7.6 4.1c-.3 1-.1 1.8.3 2.7l-1.3-1.5 1-1.2zM172 26v.9c-.6.9-1.7 1.6-2.3 2.5l-1.6-2.5 4-.9zm1 6-.5.6a13 13 0 0 0-2.4-2.8c.8-.6 1.5-1.6 2.4-2.2l.6 4.4zm1 5.1c-.7.6-1.4 1.3-1.7 2-.9-1-1.6-2-2.6-2.8 1-.6 2-1.7 2.6-2.5.6.3.9.8 1.3 1.3l.3 2zm-.7-4.5V34l-.2-1 .2-.5zm-1.3.3c-.6 1-1.7 2-2.6 3-.6-1-1.6-2-2.2-3 .9-.9 1.6-2 2.5-2.8.7 1 1.7 1.8 2.3 2.8zm-4.5-5.7c.6.6 1.3 1.6 1.9 2.5-.9.9-1.6 1.9-2.5 2.7-.6-1.3-1.3-2.1-1.9-3.5.6-.4 1.6-1.7 2.5-1.7zm-5.7 5.7c1-1.3 1.8-2.2 2.6-3.5.6 1.3 1.6 2.2 2.2 3.5-.6 1-1.6 2-2.2 3.2-.8-1-1.6-2.2-2.6-3.2zm-1-2c.9-.8 2.2-1.4 3.2-2.1l.3.3c-1 1-2 2.2-3 3l-.5-1.1zm3.6-2.4h.6l-.3.3-.3-.3zm-6.1 7c.3-1.3.9-2.9 2.2-4.2.3.6.3.9.6 1.3a26.7 26.7 0 0 1-2.2 4l-.6-1zm1 1.6c.9-1.6 1.6-2.7 2.2-4 1 1.1 1.8 2.4 2.6 3.3-.8 1.3-2 2.2-2.6 3.5-.7-1-1.3-1.9-2.2-2.8zm-1 .9v-1.6l.6.6-.6 1zm0 1 .9-1.6 1.9 2.8c-.6 1-1.2 2-2 3a9.8 9.8 0 0 1-.8-4.2zm1.6 4.8c.3-.8.9-1.9 1.6-2.9.6 1 1.8 1.8 2.4 2.7-.6.8-1.4 1.9-1.8 2.7l-2.2-2.5zm-.6.6.3-.3c.6 1 1.6 2 2.2 2.5l-.9 1.6a30 30 0 0 0-1.6-3.8zm2.5-4.2a43.5 43.5 0 0 0 2.6-3.5c.6.9 1.3 1.9 2.2 2.8-.9.8-1.9 2.3-2.5 3.6-.7-1-1.6-1.9-2.3-3zm3-3.7c.5-.8 1.5-1.9 2.1-3.2.6 1 1.6 2 2.2 3-.6.8-1.6 1.8-2.2 2.7-.9-.7-1.6-1.6-2.2-2.5zm2.4 3.1 2.2-2.8 2.6 2.5-2.6 3c-.6-1-1.3-1.8-2.2-2.7zm7.8 2c-.6-.7-1.7-1.4-2.2-2.3.3-.6.8-1.3 1.6-1.6l.6 3.8zm-4.9 1c.8-1 1.5-2.1 2.4-3 .6.9 1.3 1.6 2.2 2.6-.6.6-1.6 1.6-2.2 2.5-.8-.9-1.6-1.4-2.4-2.2zm5.1 0 .6 3.4-.6 1-2.4-2 2.2-2.5h.2zm-5.5.2 2.3 2.2-.6.9c-1.7-.6-2.6-.9-3.6-.9.7-.6 1.3-1.4 1.9-2.2zm-3 3.2c-.7-.8-1.7-1.6-2.3-2.4l2.5-3.7c.6.9 1.6 1.6 2.2 2.6-.6 1-1.3 1.6-1.6 2.5h-.9c0 .3.3.3.3.6l-.3.4zm-4.2.6 1.6-2.8c1 1 1.6 2 2.2 2.5-.3.9-.8 2-1.6 2.5l-2.2-2.2zm-1.3 2.2.9-1.9c.7.9 1.8 1.6 2.3 2.2a9.5 9.5 0 0 1-1.6 3.2 7.7 7.7 0 0 1-1.6-3.5zm6.3 3.4c-.3.8-.9 1.6-1.3 2.5-1.3-1-2.2-1.7-2.8-2A9 9 0 0 1 165 50l2.5 2.2zm24-27.3c.7-.3 1.6 0 2.1.2l-3.7 19.3c0-.3 0-.6-.3-.6h-.3l-.6.6 2.8-19.5zM183 37.6c-.6 0-.8.3-.8.9 0 .3.5.9.8.9.6 0 1-.6 1-1 0-.5-.2-.8-1-.8zm-.1 4.8a9 9 0 0 0-1 2.8l-.3-6.4c.1.4.3.7.6 1-.3.3-.3.6-.3 1.3 0 .7.4 1.3 1 1.3zm-1.3-4-.2-4.9c.2.5.5.7.9 1-.3.3-.6 1-.6 1.4 0 .5.3 1.3.6 1.6-.4.1-.7.4-.7 1zm-.3-6-.5-8.2c.5.1.8.3 1.4.3a2.6 2.6 0 0 0-1 2c0 .6.2 1.3.5 2-.3.2-.6.5-.6 1.2 0 .9.3 1.3 1 2-.4 0-.7.4-.8.7zm2.9-8c.4 0 .9 0 1.3-.2l-.6 14.1c0-.4-.3-.7-.6-1.1.3-.3.6-.9.6-1.6 0-.3-.3-1-.6-1.3.3-.3.6-1 .6-1.8 0-.6-.3-.9-.6-1.3.6-.6 1-.9 1-2 0-.5-.4-.8-1-1.2.6-.6 1-1.3 1-2a2 2 0 0 0-1.1-1.5zm.7 14.5-.3 6.5a5.5 5.5 0 0 0-1.3-2.8c.8-.2 1.3-.8 1.3-1.3 0-.6-.3-1-.5-1.4.4-.4.7-.5.8-1zm-1.9 1.2c-.6 0-.6.3-.6.9 0 .3.3.7.8.7.6 0 .9-.4.9-.7 0-.6-.3-1-1-1zm0-5.3c-.6 0-.8.6-.8 1 0 .5.5 1.2.8 1.2.6 0 1.3-.6 1.3-1.3 0-.7-.7-.9-1.3-.9zm-.8-2c0 .7.2 1.4.8 1.4.6 0 1.3-.5 1.3-1.4 0-.6-.2-.9-.8-.9-.8 0-1.3 0-1.3.9zm2.1-3c0-.4-.2-1-.8-1s-1.3 0-1.3 1c0 .8.2 1.2.8 1.2 1-.1 1.3-.4 1.3-1.3zm-2.4-3.3c0 .6.5 1.3 1.3 1.3.9 0 1.3-.6 1.3-1.3 0-.6-.3-1.5-1.3-1.5-.8.2-1.3 1-1.3 1.5zm5.4.3 2.2.3-.3 1.3-2-.3v-1.3zm-.3 2.5 2.2.3-.3.9-2-.3v-1zm0 2.2 1.9.3-.3 1.3-1.6-.3v-1.3zm0 2.3 1.6.6-.3 1.3-1.3-.3v-1.6zm-.5 2.6 1.8.3-.3 1.3-1.5-.2v-1.4zm0 2.2 1.5.3-.3 1.6-1-.3v-1.6h-.2zm0 2.5 1 .3-.2 1.5-1-.3.2-1.5zm.5 4.3c0-.6-.5-1-.5-1.7h.8l-.3 1.7zm-7.3-1.7h.6l-.6 1.7v-1.7zm.6-2.6v1.5l-1 .3v-1.5l1-.3zm-.3-2.5.3 1.6-1.4.3V39l1-.3zm0-2.2v1.4l-1.3.2v-1.3l1.3-.3zm0-2.6v1.6l-1.8.3v-1.3l1.8-.6zm-.3-2.3v1.3l-1.8.3v-1.3l1.8-.3zm0-2.2v.9l-2 .3v-1l2-.2zm0-2.5v1.3l-2.4.3-.3-1.3 2.7-.3zm-1.8 17.5-.6-.6h-.3v.6L173.2 25c.3-.2 1.4-.5 2.2-.2l2.5 19.5zm6.4-38.8c.3 2.2 4-.3 4.6-.9V10c-.9-.6-2.7-2-4-1.8-2.2.3.6 3.8 1 4.6h-5.4c.6-.9 2-2.5 2-4-.3-2-4 .5-4.6 1V4.5c.7.6 2.6 2 3.7 2 2-.3-.2-4-1-4.4h5.4c-.8.7-2.2 2.3-1.7 3.5zm3.3 12.7c0 2.2-2 4-4.3 4-2.2 0-4-1.8-4-4 0-2.4 1.8-4.3 4-4.3 2.4.2 4.3 2 4.3 4.3zM199 45.6c-.6 1.7-2 2.8-3.1 4.3l-2.3.3.5-1.5c-1 0-1.6.2-2.4.6a12 12 0 0 1 7.3-3.7zm-12.8.6-.8 1.3c0-.3 0-.8-.3-1.6.3-.3.6-.8 1.3-1.3-.2.6-.2 1-.2 1.6zm-4.6-.3c0 .6 0 1.3-.3 1.6l-.9-1.3c0-.6 0-.8.3-1.6.3.5.4.9.9 1.3zm-4.3 2.2c0 .6.3 1.8.6 2.7-.3-.3-.6-.6-1.3-.6l-.9-2.7c.5 0 1.2.3 1.6.6zm12.5 2c-.3 0-1 .4-1.4.7.3-1 .6-2 1-2.7.5-.3.8-.6 1.2-.6-.1 1-.6 1.7-.8 2.7zm-5.5 6c1.7-3.2 5.2-6 9-6.4a12.4 12.4 0 0 1-9 6.3zm1-7.4c.8-1.6 2.3-3 3.9-4 0 2.1-.6 4.6-2 6.6-1 1-2 2-2.6 2.8 1-1.6.6-3.6.6-5.4zm-1.8 7c-.9-1.9-1.6-4-1.6-6.4 0-1.9.5-4 1.6-6a14.8 14.8 0 0 1 1.3 6c-.2 2.2-.5 4.5-1.3 6.4zm-1.6-1.4c-.6-1-1.6-2-2.5-2.8-1.5-2-2-4.5-1.8-6.7 1.5.8 2.7 2.4 3.7 4 0 1.8.1 3.6.6 5.5zm.3 1.7c-3.5-.6-7-3-8.7-6.3 3.5.5 7 3.2 8.7 6.3zm-2.2.7c-2 0-3.1 0-5.4.2-1.4-.4-3.5-1.3-4.4-2.6 3.3-.8 7 .4 9.8 2.4zm12.2 0-5.7-.1c3-1.9 7-3 9.8-2.2-.6.9-2.9 2-4 2.3zm6.5-6.2a10.2 10.2 0 0 1-4.3 2.7c-.8 0-2.2 0-3.5.3.6-.6 1.6-1.6 2.2-2.5 2-.5 3.8-.8 5.6-.5zm-23 3c-1.6-.3-2.5-.3-3.5-.3-1.6-.5-3.2-1.6-4.2-2.7 1.6-.3 3.6 0 5.4.5.7 1 1.5 2 2.3 2.5zm-3-4.8c0 .6.3 1 .3 1.5l-2-.3a16.2 16.2 0 0 1-3.6-4.3c2.8.3 5.4 1.7 7.6 3.8-.7-.2-1.5-.7-2.3-.7zm-3.4 1.2.3-.5v.5h-.3zm-1.2 2.2.3-.3 2.4 1.9h-.8l-1.9-1.6zm-1.6 3 .3.3c-.3.3-.3.3-.6.3l.3-.6zm2.8-1.3h-.3l.9.9c-.7.3-1.8.3-2.5.6l-.9-.6c.6-.9.9-1.3 1.3-2.3l1.5 1.4zm29.4-1.4c.5.7.8 1.6 1.3 2.4l-.9.6c-.7-.3-1.5-.4-2.2-.6h-.4l.9-.8h-.3l1.6-1.6zm7.7-9-.9 1.4c.3-1 .6-2 0-2.5l1 1.2zM193.3 45l-1 .9c.7-.9.7-1.6.4-2.2l.6 1.3zm2.9-2.5-1.3 1.3c.6-1.3.6-1.9 0-2.9l1.3 1.6zm2.8-2.9-1.4 1.3c.6-1.3.6-1.9 0-2.8l1.4 1.5zm-2.8-3.5-.9 1.6c.3-1.3.3-2.2-.3-2.8l1.2 1.2zm5.4 0-.9 1.6c.3-1.3.3-1.9-.3-2.8l1.2 1.2zm-3-3.2-.8 1.5c.3-1 .3-2-.3-2.7l1.2 1.2zm6 0-1.4 1.5c.6-1.5.6-2.4 0-3l1.3 1.5zM201 29l-.8 1.6c.6-1.3.3-2.2-.3-2.8L201 29zm5.9 8-.9 1.3c.3-1.3.3-2.1-.3-2.7L207 37zm-2.5 3-1.3 1.4c.6-.9.6-1.9 0-2.5l1.3 1.2zm-2.6 3.5-1.3 1.3c.5-1.3.5-2 0-2.8l1.3 1.5zm-1 5.5-1.4 1.5c.6-1 .6-1.8.3-2.7l1 1.2zm1.9 3.4-1.4.8c.6-.8.6-1.6.3-2.4l1 1.6zm1.1-5.9-1.4.9c.7-.9.7-1.6.3-2.5l1.1 1.6zm-10.4-14 .3.3-.5 1 .2-1.3zm1-5c.7.6 1.4 1.6 2 2.2l-2.4 2.8-.6-.6 1-4.4zm2.4 1.8c-.6-1-1.5-1.8-2.3-2.5l.4-.9 3.5.9a62 62 0 0 0-1.6 2.5zm5-.3-2.2 3.5c-.6-.9-1.6-1.9-2.5-2.8.9-.9 1.6-1.9 1.9-2.5 1-.1 2 1 2.8 1.8zm-2.5 3.8c-.6 1-1.3 2-2.2 3-.6-1-1.6-2-2.6-3l2.3-2.8c.9.9 1.8 1.8 2.5 2.8zm-6.4 2 1.3-1.3 2.6 2.5c-.6.9-1.6 1.9-2.3 2.8l-2-2 .4-2zm-.3 2.8 1.6 1.6c-.8.7-1.6 1.6-2.5 2.2l.9-3.8zm-.8 4.5 2.5-2.6c.8.9 1.8 2 2.4 3-1 .5-1.6 1.2-2.7 2.1-.6-.9-1.1-1.9-2.2-2.5zm-.5.3h.3a9 9 0 0 1 2.1 2.5l-2.1 2-1-1 .7-3.5zm3.6 3.8c-.9.5-1.9.9-2.6 1.6l-.6-.5c.9-.6 1.7-1.2 2.5-2l.7 1zm.3-.3-.7-.8c1-.6 1.7-1.6 2.6-2.2.6.6.9 1.6 1.6 2.2-1.2-.2-2.5.4-3.5.8zm-3.6 2.2c0 .3-.3.3-.6.6 0-.4.3-.7.3-1.3l.3.7zM200 46l-.3-.3c.3-.2.3-.2.3-.5h-.6c-.6-1-1.3-1.6-1.9-2.5.9-1 1.6-1.8 2.2-2.7.9 1.4 1.9 2.4 2.5 3.7l-2.2 2.3zm.3-6.4c.6-.9 1.3-1.9 2.2-2.8.7 1.3 1.7 2.5 2.3 3.5-.6 1-1.3 2-2.3 3-.6-1.4-1.5-2.5-2.2-3.7zm-2.8-3.5c.9-.9 1.6-1.9 2.2-3 .9 1.5 1.6 2.4 2.5 3.3-1 .9-1.6 1.9-2.2 2.5-.9-.8-1.6-1.8-2.5-2.8zm-2.5 3.2c.6-.9 1.6-1.6 2.2-2.5l2.2 2.8-2.2 2.6c-.7-1-1.6-1.9-2.2-2.9zm5-6.4c.9-1.3 1.6-2.2 2.2-3.5 1 1.3 2 2.2 2.6 3.5-.6 1-1.6 2-2.3 3.2-1-1-1.6-2.2-2.5-3.2zm6.1-2-.9 1.4c-.7-1.2-1.7-2-2.6-3v-.4c1 .5 2.5 1.2 3.5 2zm-4-2.4v.3l-.2-.3h.3zM208 37l.3-.6c.3.3.3 1 .3 1.6l-.6-1zm-5.1-.6c.7-.8 1.7-2.1 2.3-3.2a241.7 241.7 0 0 1 2.2 4c-.6.8-1.3 1.9-2.2 2.7 0-.8-2-2.9-2.3-3.5zm4.5 6.8-2-3c1-.8 1.5-1.7 2.3-2.7l.6 1.6c0 1.3-.3 2.5-.3 3.6l-.6.5zm-4.5.3c1-1 1.7-1.7 2.3-2.7l1.9 3a9 9 0 0 0-2.2 2.4l-2-2.7zm-2.5 2.7a19 19 0 0 0 2.2-2.5c.7 1 1.4 2 1.7 2.8-.6.6-1.4 1.6-2.3 2.2-.8-.7-1-1.7-1.6-2.5zm-1.6 5.1.8-1.3-.1-.1h-1.6l-.3-.7c.9-1 1.6-1.7 2.5-2.2a7 7 0 0 0 1.6 2.2c-.9 1-2 1.7-2.5 2.6l-.4-.5zm-1.5-1.4h-.3l.3-.5v.5zm6.4 2.8c-1 .2-2 .8-3.2 1.9-.3-1-.6-1.7-1.3-2.5l2.8-2.2c.3 1 1 1.9 1.7 2.8zm.3-.3-1.7-3.3a6.8 6.8 0 0 0 2.3-2.1l1.3 1.9c-.7 1-1 2.6-1.9 3.5zm1.8-4.3c-.3-.6-.6-.8-.6-1.6l2.2-2.5v.3c0 1-1.2 3.1-1.6 3.8zm-5.1 7.6c-.5 0-.8 0-1-.3l.7-.3.3.6zm-4.1-2.2h-.6c.9-.6 1.7-1.1 2.5-1.9v.3l-2 1.6zm-21.4-6c.3.6.3 1 .3 1.4 0-.3-.3-.3-.5-.6l.2-.8zm-10 10c-.6-1.3-1.5-2.8-2-4.4.8.4 1.8 1 3.1 2a5 5 0 0 0-1.1 2.4zm.7 1.4-.6-1 .4-.9c.6.5 1.7 1 2.2 1l-2 1zm2.8 11.3c-6.6 5.8-19 13-29.2 15.2a79.8 79.8 0 0 0 26.1-16c-.1.3 2.6.6 3 .8zm29.5 0c6.6 5.8 19 13 29.3 15.2A78 78 0 0 1 201 69c.1.9-2 1-3 1.2zm-5.9.7a71 71 0 0 0 31 14.5 74 74 0 0 1-26.6-15l-4.4.5zm-17.8 0a71 71 0 0 1-31 14.5 74 74 0 0 0 26.6-15l4.4.5zm-36.8 13.6h-.1l.1-.6v.6zm-23.4 1V85c2-.1 6.5.2 11.9.2 3.8 0 7.9-.6 11.5-.2v.6c-1.9-.1-6.4.2-11.8.2-3.8 0-7.8-.6-11.6-.2zm11.6-3.2c-3.7 0-8-.4-11.6.4V82c2-.5 6.5 0 11.9 0 3 0 8.6-1 11.5 0v.8c-1.9-.4-6.4-.4-11.8-.4zm.1 2.2a1 1 0 0 1-.9-.9c0-.1.5-.6 1-.6s.5.2.5.6c.1.3 0 .9-.6.9zm-10.2-.7c0 .1-.2.4-.6.4-.1 0-.4-.4-.4-.6 0-.1.1-.4.4-.4.2 0 .6.4.6.6zm2 0c0 .1-.1.4-.7.4l-.6-.6c0-.4.5-.4.6-.4.4 0 .7.1.7.6zm2-.2c0 .5-.2.6-.6.6-.2-.1-.5-.4-.5-.6 0-.4.2-.6.5-.6.1 0 .5.3.5.6zm2 .2c0 .1-.2.4-.6.4-.4 0-.6-.1-.6-.6 0-.4.2-.6.6-.6.3.2.6.3.6.8zm1.7.7c-.4-.1-.6-.4-.6-.9s.2-.6.6-.6c1 0 1 1.5 0 1.5zm-7.6-1.2-.1-.4h.4l-.3.4zm2 1.2.2-.4.2.4h-.3zm0-1.3V83h.4l-.3.2zm2 1.3.1-.4.5.4h-.6zm.1-1.3-.1-.2h.4l-.3.2zm2.4.9.1.4h-.6c.3 0 .3-.3.5-.4zm-.6-1h.9c-.2 0-.2 0-.5.4 0-.3-.3-.5-.4-.5zm2.6 1.5.4-.5c0 .3 0 .4.2.5h-.6zm0-1.6h.6c-.2 0-.2.2-.2.5-.1-.2-.2-.5-.4-.5zm-10 .8c0 .1 0 .4.4.6h-.5v-.6zm22.9-.2c0 .2-.2.6-.5.6-.1 0-.4-.1-.4-.4 0-.2.1-.5.4-.6.2 0 .5.1.5.4zm-1.8 0c0 .2-.1.5-.6.6-.1 0-.4-.1-.4-.4 0-.5.1-.6.4-.6.5-.2.6 0 .6.4zm-1.9 0c0 .2-.1.5-.6.6-.4 0-.6-.1-.6-.6 0-.1.2-.6.6-.6.3 0 .6.2.6.6zm-2.2 0c0 .5-.1.6-.6.6-.1 0-.5-.1-.5-.4 0-.5.4-.6.5-1 .5.2.6.4.6.8zm-2 0c0 .5-.5.6-.9.9-.3 0-.7-.4-.7-.9 0-.1.4-.6.7-.6.4 0 .9.2.9.6zm6.5.6h-.4l.2-.1.2.1zm0-1V83h.5l-.5.2zm-1.8 1.3h-.6c0-.1.3-.1.3-.4l.3.4zm0-1.3-.2-.2h.6l-.4.2zm-2 1.3h-.4l.2-.4.3.4zm-.2-1.3-.2-.2h.6l-.4.2zm-2.5 1.3c.1 0 .4-.1.4-.4l.2.4h-.6zm.1-1.5h.6c-.1 0-.4.2-.4.5.1-.3 0-.5-.2-.5zm-2.6 1.6c.1-.1.1-.4.4-.5l.2.5h-.6zm0-1.6h.6l-.2.5c0-.3-.1-.5-.4-.5zM239 43.4c.6.3 2 2.8.6 3-.7 0-1.9-.9-2.5-1.3v3.6c.5-.4 3-2.2 3-.7 0 .8-.8 2-1.2 2.6h3.5c-.2-.4-2-3-.6-3 .9-.2 2 .7 2.6 1.1v-3.6c-.4.2-2.9 2-3 .6-.3-.8.5-1.8 1.1-2.3h-3.5zm2 8.3a2.8 2.8 0 0 0-2.7 2.8c0 1.4 1.3 2.7 2.8 2.7 1.5 0 2.8-1.3 2.8-2.7s-1.4-2.8-2.8-2.8zm-2 7.4.3 5.5.6-.5c-.4-.5-.6-.8-.6-1.4 0-.4.3-.7.4-.8-.2-.5-.4-.9-.4-1.3 0-.6.2-1.1.6-1.4l-.9-.1zm3.2.1c-.2.2-.5.2-.8.2.3.3.5.7.5 1.3 0 .4 0 .9-.5 1.3.4.3.5.4.5.9 0 .7 0 .8-.5 1.3.3.3.4.4.4.9s-.3 1-.4 1.1c.3.3.4.8.4 1 0 .4-.3.8-.4 1a.8.8 0 0 1 .4.7l.4-9.7zm-7.1.2c-.5 0-1 .1-1 .3l2.4 13v-.5h.2l.4.5-1.6-13.2a1.2 1.2 0 0 0-.4-.1zm11.3 0a.8.8 0 0 0-.4.1l-1.8 13.2.4-.5h.3l.1.5 2.5-13c-.3-.2-.7-.3-1.1-.3zm-5.8.4c-.6 0-.9.6-.9.9 0 .4.5.9 1 .9s.8-.5.8-1-.1-.8-.9-.8zm-7.6.4c-1.1.5-2.6.8-2.6.6.1.5.6 1.2 1 1.8l1.6-1.8v-.6zm15.5 0-.3.6 1.6 1.8c.3-.4.8-1 1-1.8-.8-.1-1.4-.4-2.3-.6zm-10.3.8-1.8.1.1.9 1.7-.1v-1zm5.2 0v.9h1.3l.2-.8-1.5-.1zm-13.4.1c-.6 0-1.3.9-1.8 1.3l1.3 2.4c.8-.6 1.2-1.3 1.8-2l-1.3-1.7zm21.3 0c-.3.5-.7 1.2-1.3 1.8.7.6 1.3 1.3 1.7 1.9.6-.9 1-1.8 1.5-2.4-.6-.4-1.2-1.3-1.9-1.3zm-18 .3c-.7.5-1 1-1.6 1.5.7.6 1.2 1.3 1.6 1.9l.5-.5-.5-2.9zm15 0-.8 3 .4.4c.6-.6 1.2-1.2 1.7-2-.5-.4-.8-1-1.4-1.4zM228 62l.3.2.2-.2h-.5zm25.3 0 .1.2V62h-.1zm-25.6.3-2.2 1.4.3.8c.8-.6 1.3-1.3 2-2v-.2zm12.9 0c-.3 0-.6.1-.6.6 0 .6.2.8.6.8.6 0 .9-.2.9-.8 0-.2-.2-.6-.6-.6h-.3zm13.1.1v.2l1.8 2 .6-.9a4.2 4.2 0 0 0-2.4-1.3zm-25.7.2a24.9 24.9 0 0 1-1.7 2.3l1.7 2.2 1.5-2.2-1.5-2.3zm10.3 0-1.4.1v.6l1.4-.1v-.6zm5 0v.6l1.2.1.2-.6-1.5-.1zm10.1 0c-.4.9-.8 1.5-1.4 2.3l1.6 2.2 1.6-2.2c-.4-.8-1-1.4-1.8-2.3zm-21.7.4c-.7.6-1.2 1.3-1.8 2l1.5 2c.6-.8 1.3-1.3 1.7-2-.4-.8-1-1.2-1.4-2zm18.2 0-1.6 2a19.3 19.3 0 0 1 1.8 2l1.4-2c-.4-.8-1-1.4-1.6-2zm-24.5.9c-.9.7-1.3 2-1.5 2.8l.5.7c.6-.9 1-1.7 1.4-2.6l-.4-.9zm12.9.2H237v1l1.2-.2v-.8zm5 0v.8l1 .2.2-1h-1.1zm13 0-.5.8c.4 1 .9 1.8 1.4 2.7l.5-.8c-.2-.8-.6-2-1.5-2.7zm-15.7.2c-.3 0-.6.2-.6.6 0 .6.2 1 .6 1 .4 0 .9-.5.9-1s-.2-.6-.6-.6h-.3zm-6.6.5-.1.1.1.8v-1zm13.8 0-.4.9.5-.8-.1-.1zm4 .3c-.4.7-.8 1.4-1.4 2l1.7 2 1.5-1.8c-.7-.6-1.2-1.4-1.8-2.2zm-25.8.1-1.5 2.6c.6.6 1 1.2 1.5 2 .4-1 1.1-1.5 1.7-2.4-.6-.6-1-1.5-1.7-2.2zm3.6 0c-.4.9-1 1.6-1.4 2.2.4.6.8 1.2 1.4 1.8l1.5-2-1.5-2zm25.9 0c-.5.7-1 1.6-1.6 2.2.3.4 1.6 1.8 1.6 2.3.6-.5 1-1.3 1.4-1.9l-1.4-2.6zm-16 .2v3.3c0-.3.4-.6.5-.7-.3-.2-.4-.6-.4-1 0-.3.3-.8.4-1-.3 0-.4-.3-.6-.6zm-6 0a5.1 5.1 0 0 1-1.8 1.9c.7.6 1.2 1.3 1.7 1.9a4 4 0 0 1 1-1.4v-1.4c-.4-.3-.5-.8-1-1zm14.7 0-.9 1-.3 1.4 1.3 1.4a18 18 0 0 0 1.6-2l-1.7-1.7zm-9.7.3-1.1.2v1l1.1-.2v-1zm4.7 0v1.1l.9.2.2-1-1-.3zm-2.6.7c-.4 0-.6.4-.6.6 0 .4.4.8.6.8.4 0 .9-.4.9-.8s-.5-.6-.9-.6zm-16.7 1v1l.5-.6-.5-.4zm14.6 0-.8.2v.8l.8-.1v-.9zm4.4 0h.2-.2zm.2 0v.9l.8.1.2-.8-1-.2zm14.4 0-.1.4.3.6c0-.4 0-.9-.2-1zm-29.5.2c-.6.8-1.1 1.7-1.7 2.3l1.4 2c.5-.8 1.2-1.9 1.8-2.4-.6-.6-1-1.4-1.5-2zm3.4 0-1.5 1.9a9.4 9.4 0 0 1 1.5 1.8l1.7-2-1.7-1.7zm18.7 0c-.4.7-1 1.1-1.5 1.7l1.5 2 1.4-1.8c-.4-.6-.8-1.4-1.4-2zm3.6 0c-.6.5-1 1.3-1.4 1.9l1.4 2.4c.7-.7 1.2-1.4 1.6-2a63.5 63.5 0 0 1-1.6-2.3zm-29.2.4-.6 1c0 1 .2 2 .6 3l1.3-2.1-1.3-1.9zm32.6 0a9.4 9.4 0 0 1-1.5 1.9l1.3 2 .5-.4.1-2.5-.4-1zm-16.5.2c-.4 0-.6 0-.6.5 0 .2.4.6.6.6.4 0 .6-.4.6-.6.1-.3-.2-.5-.6-.5zm6.4 0-.7 2.4c.7-.4 1.1-.9 1.7-1.4l-1-1zm-12.4 0c-.4.2-.9.7-1 1.1.4.6 1 1 1.4 1.5l-.4-2.5zm4 .7-.8.1v1l.9-.1-.2-1zm4.3 0v1l.8.1.1-1-.9-.1zm-3.2.1.1 4.4.8-1.9c-.4-.1-.7-.5-.6-1 0-.5 0-.8.2-1-.2 0-.5-.2-.5-.5zm2.2 0c-.1.3-.3.5-.6.7.3.3.5.5.5 1s-.3.7-1 .8c.4.4.8 1 1 1.9l.1-4.4zm-8.5.5c-.7.7-1 1.3-1.6 2 .6.4 1.2.9 1.6 1.5.5-.8 1-1.3 1.5-1.8l-1.5-1.7zm15 0a10.1 10.1 0 0 0-1.8 1.7c.7.5 1.1 1.2 1.6 1.8l1.7-1.5c-.4-.7-1-1.5-1.6-2zm-18.6 0-1.8 2.6 1.5 1.7.3-.2-.2-.5h.6c.2-.7.6-1.2 1-1.8-.4-.7-1-1.1-1.4-1.7zm.4 3.6c.8 0 1.3.1 2.5.6l.4-.6-1.6-1.4c-.4.4-.7 1-1.3 1.4zm21.6-3.4-1.4 1.8c.4.7.8 1.2 1.3 1.7h.3c0 .3 0 .3-.2.5l.2.1 1.6-1.6c-.4-.9-1.2-1.6-1.8-2.5zm-11.2.2c-.4 0-.4.1-.4.6 0 .1.2.4.4.4.4 0 .6-.3.6-.4.1-.5-.2-.6-.6-.6zm-14.6.4c-.5.8-.9 1.5-1 2 .6.5.8 1.1 1.4 1.7l1.2-2c-.4-.5-1.2-1-1.6-1.7zm29.5 0a6 6 0 0 1-1.6 1.8l1.4 2c.5-.7 1-1.3 1.5-1.7-.4-.8-.9-1.3-1.3-2zm-16.8.2-.6.1v.9l.6-.2v-.8zm4.2 0-.1.8.7.2.2-.9-.8-.1zm-7.9.8c-.6.6-.9 1.2-1.4 1.8l.9.7h.1l.7.6.5-.6-.5-2.3v-.2h-.3zm11.1.2-.4 2.5.6.6 1.5-1.4c-.5-.7-1-1.3-1.5-1.7h-.2zm3.8.3c-.5.4-1 1-1.7 1.4l.6.6c.7-.3 1.6-.7 2.2-.6-.5-.4-.6-1-1-1.4zm-1.7 1.4c-.6.6-1.2 1-1.8 1.4l.5.4c.4-.4 1.1-.7 1.7-1l-.4-.8zm-7.3-1.1c-.6 1.2-1 2.6-1 4 0 1.5.4 3 1 4.3a10.6 10.6 0 0 0 0-8.3zm12.8.1c-.4.7-1 1.4-1.4 1.8.3.6.5 1.2 1 1.6.7-.4 1.2-1 1.6-1.5-.3-.6-.6-1.3-1.2-1.9zm-26 .2c-.4.6-.5 1.3-1 1.9.6.4 1 .8 1.5 1.6.4-.5.8-1.2 1-1.8l-1.5-1.7zm10.6 0v1l.4-1h-.4zm4.6 0c0 .3.3.6.3 1l.3-1h-.6zm-18.2.1-.2.2c.5.9.9 1.7 1 2.6.2-.4.5-.6.6-1l-1.4-1.8zm32.2 0c-.5.6-.8 1.2-1.4 1.8 0 .4.3.6.4 1 .2-.6 1-2 1-2.6v-.2zm-20 .5c-.1 1.4.3 3.2 1.2 4.5.7.6 1.3 1.3 1.7 1.9-.4-1.2-.4-2.5-.4-3.7-.7-1-1.6-2.2-2.5-2.7zm2 0v1c0 .3.4.7.5.9.2-.2.2-.6.2-1l-.6-1zm4 0-.9.8.2 1 .6-.8.1-1zm1.8 0c-1 .7-2 1.7-2.7 2.7 0 1.2.2 2.5-.4 3.7.4-.6 1-1.3 1.8-1.9.9-1.3 1.3-3 1.3-4.5zm-11.3.4-.3.7 1.5.9.4.2.2-.5-1.8-1.3zm18 .2a8.5 8.5 0 0 0-5 2.4c.8-.3 1.2-.4 1.8-.4-.2.1-.2.6-.5.9l1.6-.2c.8-.9 1.7-1.7 2.1-2.7zm-21.5 0c.7 1.1 1.3 2 2.5 2.9l1.3.1-.1-.9c.6 0 1.1.2 1.4.5a8.2 8.2 0 0 0-5-2.5zm-3.5.8c-.1.5-.4 1-.6 1.3.2.8.5 1.8 1.2 2.4.4-.8.9-1.4 1-2.2l-1.6-1.5zm3.2 0c-.4.5-.9 1-1 1.5.4.7 1.2 1.1 1.7 1.7v-.1c-.1-.3-.2-.6-.5-.9l.1-.1h1l.2-.6c-.4-.6-1-1-1.5-1.5zm22.5 0-1.7 1.5.1.6h1l.2.1-.6.9.3.1c.4-.6 1.2-1 1.8-1.7-.5-.5-1-1-1-1.5zm3 0a5 5 0 0 1-1.7 1.5l1.2 2.2c.6-.6.9-1.6 1.3-2.4-.3-.4-.7-.8-.9-1.3zm-19.8.5-.3.4.5.4-.2-.8zm.5 0c.1.6.4 1 .5 1.7.5 0 .8.3 1 .5-.4-.6-.5-1.4-.5-1.8l-1-.4zm9.9 0c-.3 0-.4.3-.9.4l-.6 1.8c.3-.3.8-.5 1-.5 0-.6.3-1.1.5-1.7zm.4 0-.1.8c.3-.2.4-.2.4-.4l-.3-.4zm-14.6 1.3-.1.3h.1v-.3zm18.6 0-.2.3h.2v-.3zm-16 .1a8.7 8.7 0 0 0 5.9 4.3 8 8 0 0 0-5.8-4.3zm13.3 0c-2.4.3-5 2.2-6 4.3 2.4-.3 5-2 6-4.3zm-19 .2a6 6 0 0 0-1.1 1.9l1.9 1.3.9-1.8-1.8-1.4zm.8 3.2a7 7 0 0 1-2-1.3c.2.8.7 1.4 1.1 2.3l.6-.1.3-1zm24-3.2-1.8 1.4.9 1.8c.9-.7 1.4-1.2 2.2-1.3-.6-.6-1-1.4-1.2-2zm-4 .3a7.2 7.2 0 0 0-1.8.4c-.4.7-1 1.3-1.4 1.8.9-.2 1.7-.2 2.3-.2 1-.4 2-1 2.8-1.9a5.4 5.4 0 0 0-1.8-.1zm-17.9 0a6 6 0 0 0-.8.1c.6.9 1.8 1.5 2.8 2h2.3c-.6-.4-1-1-1.4-1.6a8.4 8.4 0 0 0-2.9-.5zm19.7.8c-.6.6-1.2 1-1.8 1.4h.5l1.3-1.2v-.2zm-20.3.2-.2.1 1.2 1.2h.6a15 15 0 0 1-1.6-1.3zm-.4.3c-.2.7-.4 1-.8 1.6l.6.4c.6-.3 1.1-.3 1.7-.4l-.5-.6-1-1zm20.8 0-.9 1.1h.2l-.6.6h.1c.5.2 1 .2 1.5.5l.6-.5-1-1.7zm3.5.4-2.2 1.3c.2.3.4.7.4 1h.6c.3-.8.8-1.6 1.2-2.3zm-21 .7a7.7 7.7 0 0 0-1.6.2c.7.6 1.3 1 2.2 1.4h4.3a9 9 0 0 0-4.8-1.6zm14.3 0a10 10 0 0 0-5 1.6h4.5c.8-.4 1.7-.8 2.1-1.4a6.9 6.9 0 0 0-1.6-.2zm-18.4.8-.3.3c.3 0 .3 0 .4-.2l-.1-.1zm22.8.1-.5.2.6.1-.1-.3zm-20.4.2c-.7 0-1.4.1-2 .3h3.2l-.5-.2a4.7 4.7 0 0 0-.7 0zm18 0a6 6 0 0 0-.8.1l-.5.2h3.2c-.6-.2-1.3-.3-2-.3zm-18 1.1c-1 0-1.9.1-2.7.3v.9c1.9-.3 6.4-.3 11.5-.3 4 0 8.4.1 11.9.3v-.9c-2-.4-6.5 0-11.9 0-2.6 0-5.9-.4-8.8-.3zm4 1.5c-.3.1-.6.3-.6.7 0 .5.2.6.6.6.2 0 .6-.1.6-.4 0-.5-.4-.6-.6-.9zm14.6 0 .3.4.2-.4h-.5zm-20.2.1.5.2V83h-.5zm2.1 0 .4.2V83h-.4zm1.5 0c-.5 0-.6.2-.6.6 0 .2.1.5.6.6.4 0 .5-.1.5-.6 0-.1 0-.6-.5-.6zm.5 0 .4.2V83h-.4zm2.2 0c.2 0 .2.2.5.5l.1-.5h-.6zm1.8 0c-.3 0-.9.2-.9.6 0 .5.5.6 1 .9 0 0 .5-.4.5-.9 0-.1-.4-.6-.6-.6zm.6 0c.1 0 .4.2.4.5 0-.3.3-.5.4-.5h-.8zm1.7 0c-.4 0-.5.2-.5.6 0 .3 0 .9.5.9s.9-.4.9-.9c0-.1-.4-.6-.9-.6zm1.2 0c.2 0 .1.2.1.5 0-.2.2-.5.5-.5h-.6zm1.5 0c-.3 0-.8.3-.8.6 0 .5.3.9.8.9.4-.1.5-.4.5-.9 0-.4 0-.6-.5-.6zm.9 0 .4.5.1-.5h-.5zm1.4 0c-.5.2-.6.3-.6.8 0 .1.1.4.6.4.4 0 .6-.1.6-.6 0-.4-.2-.6-.6-.6zm.7 0 .3.2.2-.2h-.5zm1.4 0c-.2 0-.6.3-.6.6 0 .5.1.6.6.6.1-.1.4-.4.4-.6 0-.4-.2-.6-.4-.6zm.8 0 .3.2.2-.2h-.5zm-17 .1c-.2 0-.3.2-.3.5 0 .2 0 .5.5.6.3 0 .6-.1.6-.4 0-.5-.1-.6-.6-.6a.5.5 0 0 0-.2 0zm-1.5 0c-.3 0-.5.2-.5.5 0 .2.2.6.5.6s.4-.1.4-.4c0-.2-.1-.5-.4-.6zm19.7 0c-.5 0-.6.4-.6.7 0 .1.1.4.6.4.1-.1.4-.4.4-.6 0-.4-.1-.4-.4-.4zm1.9 0c-.3.2-.6.4-.6.7 0 .1.1.4.6.4.1 0 .4-.4.4-.6 0-.1-.1-.4-.4-.4zm.9.7c0 .1-.2.4-.5.5h.5v-.5zm-23.7.1v.6h.4c-.1-.2-.1-.5-.4-.6zm2.2.2-.3.1h.5l-.2-.1zm2 0-.3.4h.5l-.2-.4zm2 0-.3.4h.4l-.2-.4zm1.8 0-.1.4h.7c-.3 0-.6-.1-.6-.4zm2.5 0-.1.6h.5l-.4-.6zm2.6 0v.6h.5c-.2-.2-.2-.5-.5-.6zm2.4 0-.1.4h.5l-.4-.4zm2.3 0-.4.4h.6l-.2-.4zm2 0v.4h.2l-.1-.4zm-17.6.7-2 .1v.6c2-.1 6.5.2 11.6.2l11.9-.2V85c-2-.1-6.5.2-11.9.2-3.8 0-7.3-.3-9.6-.3zm47.3-44.6c2.5 0 4.4 1.8 6 3.3-1.5-1-5.1-2.5-7.3-2-.6 0-1 .5-1 .5.6 0 3.8 0 6.1 2.6A14.6 14.6 0 0 0 274 43l-2.4 1.2c4 0 6 .9 11.8 3.8 3.6 2 10.4 2.8 10.4 2.8-2-1.5-3.7-4.1-4.6-5.2-1.9-2.6-5-6.8-8.4-6.4-.6 0-1.8.6-2.4 1zm-9.8 5.9c-8.9 5 4.7 18.2 3.7 28.3-.6 6-8.2 8.2-12 10 9.2-1 15.2-5.9 13.7-14.5-1.3-6.4-11-19.9-3.3-22.4 5.4-1.7 11.8 4.7 19 6 7 1.2 19.7 1.3 17.8 10.4-.6 2.6-4.5 4.5-6 6.4-2.8 4.4-.9 10.5 4 9.2 6-1.7 7.4-1.3 8.4 2-.6-9.7-9.6.2-11.5-4.7-1.8-4.4 1.3-6.6 3.6-8.7 1.8-1.3 3.5-3.6 3.2-6.4-1.1-9.5-13.1-8.5-20.6-10-4.3-1-10-5.2-14.4-6a12 12 0 0 0-5.6.4zM75 323s-.4-1.2-1-2.1c1-.9 2-.9 2.8-.4-.4 1-1 1.7-1.8 2.6zm-11.6 7.1c2.7 2.5-1 4-1.7 6.1l.5.2c0-.6.7-1.3 1.2-1.8 0-.6 1 1.3 1.3 1.5-.5 0-.5-.2-.5.1-.4 0-.1.6-.1 1h.6c0-.5.4-1 .8-1.1 1 0 1.4 1.2 1.4 1.9h.4c0-.5.1-.6.4-.9v-.1c1 0 1.6.8 2 1.3 1.8 0 2-2 3.9-1.5 0 0 2 .6 2.2 2 1 2.8-.2 3.4-2 3.9-3 .5-4.9-2-7.4-3.4-1.3-.9-3-.4-4.5-1.2-4.2-1.7-.2-6.1 1.5-8zm2.4 11s-.4 1.4 0 2.4c.5-1.4 1.3-1.9 2-1.3-.5.6-.5 1.8 0 2.5 0-1.2 1-1.7 1.7-.9 0 0-.2 1 .4 1.2.2-.6 1-.4 1.3-.4 0 0 2.4.8 5.2-1 1.3.8 1.8 1.7 1.4 3.1-.4 2-2.8 2.4-4.7 1-3.2-2-6.5-1.2-8.3-2.7-1.2-1-1.5-3-.9-4.4.6 0 1.5 0 2 .5zm16.5 12.4c-1.7 2.2-5.7-.2-7-1.5l-2.2-1c0-.5-.1-.7.2-1l1.3.4c-.1.1 0 .6.1 1 .2-.6.6-1 1.5-.6 0 .5 0 1 .9 1.5l.1-1.9c.9-.1 1-.6 1.5-1.3 2.8-.7 6.4 1.6 3.6 4.4zm-9.9-3.8c-.1.1.2 1 .2 1-1 0-3.3-1-3-2.5 1 .2 2.2.9 2.8 1.5zm256.8-26.6c-1.5 4-4 7.3-7.3 9.8-1-1.5-1.7-1.8-3-2 0-.5-1-3.6-3.9-3.7 1 1.3 1 2.6.6 4.4-1 .8-2.8 2-1.7 5 0 0-1.8.4-2.8 0 .9-2.4.4-6.4-3.2-7-.6-2-2-3.9-4.7-3.6 1.2.9 1.2 2.8 1.2 3.5-2.8 1-4.1 3.5-3.7 6.4h-.9a23.5 23.5 0 0 1-12.2-12.8c13.9-1.6 27.4-1.6 41.6 0zm.9-12.9c-5.1-.4-9.8-.6-15-.6v-15.6a22 22 0 0 1 15 16.2zm-20.6-28.2c.4 2.7 4.4-.5 5.1-1v6c-.9-.6-2.8-2-4-1.9-2.7.4.2 4.4 1 5.1h-6.2c.9-.9 2.3-3 2-4.4-.4-2.6-4.3.6-5 1v-6c.8.7 2.7 2.1 4 2 2.7-.5-.3-4.4-1-5.1h6.1l-1.4 2.1c-.3.8-.6 1.5-.6 2.2zm3 9.8c.5.2.8.6.8 1l.1 18.3c5.9 0 11.1.3 17.1.9.6 0 1 .4 1 .9 0 .1-.1.4-.4.5-.4-.1-.9-.4-1.3-.4l-17.4-.9-.1-18.5-.2-1.5c-.1-.1.2-.3.3-.3zm-27.6 21c0-.4.5-.8 1-.8 6-.6 12-.9 18-1.2 0-5.8 0-11.8.2-18 0-.5.1-1 .9-1 .1 0 .4.2.4.5l-.1 1.4v18.6c-6.2.1-12.3.4-18.5.9-.7 0-1.1.1-1.6.4l-.3-.7zm25.6 2.3c0 1.3-1 2.4-2.2 2.4-1.3 0-2.3-1.1-2.3-2.4 0-1.4 1-2 2.3-2 1.2 0 2.2.8 2.2 2zm5.7.4c0 1.3-1 2.2-2.5 2.2-1 0-2-.9-2-2.2s1-2.3 2-2.3c1.2 0 2.5 1 2.5 2.3zm5.6.3c0 1.3-1 2.5-2.5 2.5-1 0-2-1-2-2.5 0-1 1-2 2-2 1.1-.2 2.5.7 2.5 2zm3.2-1.8c1.3 0 2.3 1 2.3 2 0 1.4-1 2.6-2.5 2.6-1.3 0-2-1-2-2.5 0-1.3.9-2 2.2-2zm-31.1 2.2c0 1.3-1 2.5-2.2 2.5-1.3 0-2.4-1-2.4-2.5a2.3 2.3 0 0 1 2.4-2.3c1.3 0 2.2 1 2.2 2.3zm5.5-.3c0 1.3-.9 2.2-2.2 2.2-1.3 0-2.3-.9-2.3-2.2a2.3 2.3 0 0 1 2.3-2.3c1.3 0 2.2 1 2.2 2.3zm5.6-.4c0 1.3-1 2.5-2.2 2.5-1.3 0-2.4-1-2.4-2.5 0-1.3 1-2 2.4-2 1.1 0 2.2.8 2.2 2zm6-22.2c0 1.3-1 2.5-2.4 2.5-1.3 0-2.2-1.2-2.2-2.5s.9-2.3 2.2-2.3a2.3 2.3 0 0 1 2.3 2.3zm0 5.5c0 1.4-1 2.2-2.4 2.2-1.3 0-2.2-.8-2.2-2.2 0-1.3.9-2.3 2.2-2.3a2.3 2.3 0 0 1 2.3 2.3zm0 5.3c0 1.3-1 2.5-2.4 2.5-1.3 0-2.2-1.2-2.2-2.5s.9-2 2.2-2c1.3 0 2.3.8 2.3 2zm0 5.7c0 1.3-1 2.2-2.4 2.2-1.3 0-2.2-.9-2.2-2.2 0-1.3.9-2.3 2.2-2.3a2.3 2.3 0 0 1 2.3 2.3zm21.7 7.9c-.4.9-1 1.3-2 1.3-1.3 0-2.2-.9-2.2-2 0-1.4.9-2.5 2.2-2.5 1.9 0 2.5 1.7 2 3.2zm-46.6-3.2c1.3 0 2.2 1 2.2 2.5 0 1.3-.9 2-2.2 2-2 0-2.2-1.9-2.3-2.5.3-1.2.9-2 2.3-2zm25.3-6c-.2-.6-.9-1.3-1.5-1.5.6-.1 1.3-.9 1.5-1.6v3zm0-5.6c-.2-.6-.9-1-1.5-1.4.6-.2 1-.6 1.5-1.3v2.7zm0-5.5c-.5-.6-.9-1-1.5-1.3.6-.2 1-.6 1.5-1.4v2.7zm-5.1-2.4c.1.5.6 1 1 1l-1.3 1 .3-2zm-.3 5.4c.4.5.9 1 1.3 1-.4.5-.9.7-1.3 1.4v-2.4zm0 5.6c.4.4.9.9 1.3 1l-1.3 1v-2zm0 5.3c.1.4.6.8 1 1-.9.4-1.5 1-1.7 1.9-.2-.5-.6-.9-1-1.3 1.8.1 1.7-.2 1.7-1.6zm-5.1 1.9a4 4 0 0 0-1 1.3c-.2-.5-.6-1-1.4-1.3h2.4zm-5.4.2c-.5.2-1 1-1.3 1.5-.2-.6-.6-1-1.4-1.5h2.7zm-5.6.2c-.6.4-1 1-1.3 1.7a6.9 6.9 0 0 0-1.5-1.4c1 0 2 0 2.8-.3zm-1.9 5.5c.5-.4.6-.8.9-1.4.4.4.9 1 1.5 1.3l-2.4.1zm5.4-.2c.5-.5.9-1 1-1.5.2.4.6 1 1 1.3a3.4 3.4 0 0 0-2 .2zm5.6-.5 1-1.3c.1.4.6.9 1.3 1.3H299zm5.4-.3c.6-.1 1-.9 1.3-1.6.4.7 1 1.3 1.9 1.6h-3.2zm4.7 0c.8-.1 1.4-.9 1.8-1.6.2.7 1 1.3 1.5 1.6H309zm6.2.3c.5-.4 1-.9 1.3-1.4.2.5.6 1 1 1.4h-2.3zm5.6.2c.6-.2 1-.6 1.3-1.4.1.6.6 1 1 1.5l-2.3-.1zm5.5.4c.5-.1 1-.6 1.3-1.3.2.6.5 1 1 1.4l-2.3-.1zm3-5.1c-.6.4-1.4.9-1.5 1.4a3 3 0 0 0-1.3-1.7c1 .3 1.9.3 2.8.3zm-5.7-.5-1.4 1.5c-.1-.6-.5-1-1-1.5h2.4zm-5.9-.2c-.4.4-.9.8-1 1.3a3 3 0 0 0-1-1.3h2zm-5.8-.2c-.5.4-.6.6-.9 1-.2-.6-.9-1-1.3-1.4.7-.3 1.3-1 1.4-1.6.2.7-.1 2 .8 2zm-9.4-19.4-.1 15.6c-5.4.2-10.5.4-15.7.9a22 22 0 0 1 15.8-16.5zM331 320c.2.2.4.5.4.9s-.4.6-.8.6a230 230 0 0 0-44.9 0c-.4 0-.9-.2-.9-.6 0-.4 0-.6.2-.9.4.2 1 .2 1.6.2a211 211 0 0 1 43 0c.5.1 1.1.1 1.4-.2zm-12 18c-1.3.9-3.8 1.3-5.4 2v-1.7c.9-.5 2.7-.5 2.8-.5-1.5-1.3-1.9-5 1.5-5 2.9 0 3.5 3.9 1.1 5.2zm-1.4-7.2c-.2 0-.6 0-1 .2v-1.8c.5.3.8 1.2 1 1.6zm-11.4-1.7-1 .1v-1.7c.4.3.8 1.1 1 1.6zm7.3 11a11 11 0 0 0-3 2.6c-1.4 1.7-4.6.5-8.1.8 3-2.7 3.6-2.7 7-2.4.4-.6.1-1.4 1-1.8.6-.4 1 .9 1.3 1.3.2-.6.2-1.4 0-2.2.9-.1 1.8.8 1.8 1.8zm-84.7-84.6c1 2.6 3.6 5.8 6.8 7a29 29 0 0 1 1-24.3c-.8.2-3.3 1.8-3.9 2.5-.4 1.8-1.3 7.4-1.3 11.8-1.3-4-.6-11-.5-12-.4-.8-.5-1.7-2-2.7v17.7h-.1zm-64 68.5c-4.6 0-5.9-.5-9 1.9 1.4-4 6.6-5.9 8.4-6.9 3.2-2.6 5.1-5.1 3.6-13 2.7 3.8 6.2 18-3 18zM138 255.6c-1 2.6-3.5 5.8-6.8 7 2.8-7 3.5-16-1-24.3.8.2 3.3 1.8 4 2.5.5 1.8 1.4 7.4 1.4 11.8 1.3-4 .4-11 .4-12 .4-.8.6-1.7 2-2.7v17.7zM248 304c-.5-1-1.9-2-2.9-3 .9 2.8.9 7.5.9 10.5.4 1 1.7 2.5 3 3.4 0 0 .5-1.3.6-2.5a10 10 0 0 1 1.4-10.3c0-1-2-4.6-2.7-5.5.3 2.7.5 4.9-.3 7.4zm-31.2-20.2-1 .3-.3.4 6.1 1-4.8-1.7zm1.1-.3c2 .7 6 2 8 4-1.4-.3-7.8-1.8-11-2-.9 1.8-3.2 5.6-3.5 6.2 7-4.1 17-2.8 24.5 4a43.2 43.2 0 0 0-13-14.4c-1.4 1-3.2 1.8-5 2.2zm7.8-5.1 4.7 1.7-4.1-2.6-.6.9zm1-1.5 7.8 5.6c-3.1-.9-6.2-2.8-9.1-3.4a5 5 0 0 1-1.8 1.8c8 5.8 16.4 6 20.2 6.1a50.4 50.4 0 0 0-16-12.4l-1 2.3zm7.5.6 3.2 2c1.3.2 2.7.5 5.4.6-.5-.1-3.4-1.7-3.8-1.7-2 0-3.7-.5-4.8-.9zm-5.4-14.6c.8 3 3.6 6.1 5 7.5a12 12 0 0 1-5-5c0 4.4-.2 6-1 8.2 1 .6 3 1.9 4.8 2.4 7.4 3.3 14.4.6 16.3-3.5-2.6 2.5-9.5 5.4-15.6 1.4 5 2 10 1.3 13-1.2-4.4.6-11.4-1.3-13.3-9.4a19 19 0 0 1-4.4-4.6v4.2h.2zm11.5 15.5c3.5 1.2 5.8 1.6 8.8 4-4.4-1.4-7.8-1.4-11.1-1.8a15 15 0 0 1 4.3 3.5c4.4 2 8.8 3.2 12.6 4.2 0-5-2.6-9.2-7.7-11.4-2.2 1-4.6 1.3-7 1.5zm7.9-2c4 1.5 6.7 5.5 7.1 7 1.8.7 4.4 3.2 5.2 6.5 1 3.5.4 6.9-1 11 0 3.8 2.3 6.8 6.5 7.3-4.4.1-6.4-2-7.3-5.9-1 3.4.7 6 3.2 7.3 2.8 1 6.1.6 7.9-1.7-11.4-1.9-1.3-15.2-5.8-23.8a17 17 0 0 0-14-9c-.5.5-1 1-1.8 1.4zm.6 10.9c.8.9 2.4 3.5 3.2 6.4-1.3-2.3-5-5-6.4-6-1 .2-2.4 0-3.1.2a30.3 30.3 0 0 1 10 15.6c4.4-4.5 4-9.6 2.1-14.4a29 29 0 0 1-5.8-1.8zm-1.5-.3-3.2-1 5.4 3.6-2.2-2.6zm-4.7 7c-2.9-1.3-6.5-4.2-9.9-5.4.6.9 4.4 6.7 5 7a25 25 0 0 1 9.8 5.9c0-10.1-4.3-13.6-11.9-14.5 2 2.6 5.1 4.2 7 7zm-14.1-9.3c1 1 2.3 2 2.9 2.5 2.2.8 5.5 2.6 7.1 3.6-.1-.1-3.9-3.5-4.6-4.4-1.8-.3-3.5-1-5.4-1.7zm6.2 22.9c-.5 4-3 5.1-1 10.5.2-2.8 4-5 4.5-9 1-7.5-3.5-14-8.6-16.1 4 3.8 5.7 9.2 5.1 14.6zm-23-14.6c9.6-1.5 15.4 3 16.5 10 .6 5.3-2.5 11-9.2 10 .4 1 2.7 2 6 2-3.4 1-6.2-.2-8.4-2 2 4.5 10.6 5.9 14.5.4 6.6-8.4.1-21.9-9-22.7-3.3-.5-7.8.1-10.4 2.3zm24.6 4c1.7 2.4 2.7 5 2.8 7.4.6 7-1.4 13 5 15.2v-4c1.3-6 .6-11.8 0-15.2l-3-2.1c1.2 3 1.7 7 1 10.3-1-4.4-.6-7.3-3-11-.7-.2-1.7-.7-2.8-.7zM212 284.2c-.5 1-4 6.2-5 7a98.8 98.8 0 0 1 2.5-7H207a261 261 0 0 0-5.4 16.1 76.8 76.8 0 0 0 12.9-16.4c-.7.3-1.8.3-2.6.3zm-13.2 21.8c-6 8.5-2.5 18 3 18 4.6 0 6-.5 9.1 1.9-1.3-4-6.7-5.9-8.4-6.9-3.1-2.6-5.2-5.1-3.7-13zm-15.5 89.4c3.4-.9 6.5-5.4 6.9-7.3-1.3-1.6-2.5-4.1-2.8-5.9 1.8 1 2.5.6 3.7 1 .4-3.6.1-10.3-.2-15.1 1 2.9 2 11 1.5 15.2 0 0 1 0 1.3-.2 1.2-8.2-1-21-3-30.5-2.4-10-4.5-17.1-5.5-27-1.3 8.4-1.3 21.4-.9 32.4 0 3.4 0 25.3-.7 31.8-.9-6.5-.9-28.4-.9-31.8.3-11 .6-24-.8-32.4-1 9.9-3.3 17-5.6 27-1.9 9.5-4 22.3-3 30.5 0 .2 1.4.2 1.4.2-.6-4.4.4-12.3 1.5-15.2-.5 5-.6 11.5-.2 15.2 1.3-.5 2-.2 3.7-1-.5 1.7-1.5 4.2-2.8 5.8.1 1.9 3 6.4 6.4 7.3zm11.6-49c2.7 7 6.5 13.5 7.4 22.6.6 10-3 17-12 16 1.5 3.5 4.4 5.4 8 6.5a15 15 0 0 0 16.6-5.9c.7-1 .9-1.7 1.3-2.8-2-2-4.7-.8-5.6.5-2.7-6.5.6-10.4 6.9-11.1 0-2-.4-3.7-.9-5.1-5.5-.6-7.3-6.5-7-9.7.9.5 2 .5 2.8.6-1.8-6.4-7.9-13.7-12.6-19.7-4-5.1-9.6-12-11.5-19.9-1.5 8.3 3.8 20.3 6.6 28zm.8-46.7c-3 8.5-4.5 12.6-1.4 18.3 0-8.2 2.3-11.6 6-15.2l3.5-12.4a30.8 30.8 0 0 1-8 9.3zm7-15.5c-.4 1.3-1.3 3.4-3.3 6.6.1-3.2.9-6.6.9-6.6s-2.5-.1-3.5 0c.5 5.4 0 9.2-.6 13.8a20 20 0 0 0 4.7-5c1.9-2.5 3.3-6 4.5-8.8h-2.6zm-.8 0h-.9l-.6 3.2 1.5-3.2zm9.3 0h-.9l-1.3 3.2 2.2-3.2zm-40.1 15.5c3 8.5 4.5 12.6 1.6 18.3 0-8.2-2.5-11.6-6-15.2-.8-2-3-10-3.7-12.4 1.8 3.6 4.8 6.7 8 9.3zm-16-6.7c-9.6-1.5-15.3 3-16.5 10-.6 5.3 2.5 11 9.2 10-.4 1-2.7 2-6 2 3.5 1 6.2-.2 8.5-2-2.2 4.5-10.5 5.9-14.6.4-6.4-8.4-.1-21.9 9-22.7 3.4-.5 7.7.3 10.4 2.3zm-28.7-14.6c-3.4 1.2-5.9 1.6-8.8 4 4-1.4 7.7-1.4 11-1.8-1.5.6-3.6 2.5-4.4 3.5-4.4 2-8.8 3.2-12.5 4.2 0-5 2.5-9.2 7.8-11.4 2.2 1 4.5 1.3 6.9 1.5zm6.2-.9-3.2 2c-1.3.2-2.8.5-5.4.6.5-.1 3.4-1.7 3.8-1.7a15 15 0 0 0 4.8-.9zm-13.3 9.5 3.3-1-5.4 3.6 2.1-2.6zM138 263c-.8 3-3.5 6.1-5 7.5a12 12 0 0 0 5-5c0 4.4.2 6 1 8.2-1 .6-3 1.9-4.8 2.4-7.6 3.3-14.6.6-16.3-3.5a13 13 0 0 0 15.6 1.4c-4.8 2-10 1.3-13-1.2 4.4.6 11.4-1.3 13.3-9.4 1.3-1 3.5-3.2 4.2-4.6v4.2zm2.2 14c-2.2 1.5-5.5 3.7-7.7 5.6 2.8-.9 6.1-2.8 9-3.4a5 5 0 0 0 1.8 1.8c-7.9 5.8-16.4 6-20.2 6.1 3.4-5.4 12.3-10.4 16-12.4l1.1 2.3zm.8 1.5-4.7 1.7 4-2.6.7.9zm-3 6.3c-.8 1-2 2-2.7 2.5-2.2.8-5.6 2.6-7.2 3.6.3-.1 4-3.5 4.7-4.4 1.7-.3 3.5-1 5.2-1.7zm-13.8 9.3c2.9-1.3 6.5-4.2 10-5.4-.7.9-4.5 6.7-5 7-4 1.5-7.2 3.2-9.9 5.9 0-10.1 4.4-13.6 11.9-14.5-2 2.6-5.1 4.2-7 7zm-6.2-6.7c-.8.9-2.6 3.5-3.2 6.4 1.3-2.3 5-5 6.4-6 1 .2 2.5 0 3.1.2-6 5.1-8.6 10.6-10 15.6-4.5-4.5-4-9.6-2-14.4a30 30 0 0 0 5.7-1.8zm-7 2.3c-1.4 4.3-2.3 11 3.7 15.7l.8-2.4a9.4 9.4 0 0 1 1.4 6.9c-1 3.5-3.3 6-6.2 7.3 2.7-5.1-.4-11.8-.9-12.7-2.4-6.6-5.4-13.7 1.4-19.4v4.6h-.2zm7.8 14.4c.5-1 1.9-2 2.9-3-.9 2.8-.9 7.5-.9 10.5a15 15 0 0 1-3 3.4l-.6-2.5a10 10 0 0 0-1.4-10.3c0-1 2.2-4.6 2.7-5.5-.3 2.5-.3 4.9.3 7.4zm11.5-7c-1.5 2.4-2.6 5-2.8 7.4-.6 7 1.6 13-5 15.2v-4c-1.1-6-.5-11.8 0-15.2l3.1-2.1a18 18 0 0 0-1 10.3c.9-4.4.6-7.3 3-11 .7-.2 1.7-.7 2.7-.7zm1.8 10.6c.5 4 3 5.1 1 10.5-.2-2.8-3.8-5-4.4-9a15.6 15.6 0 0 1 8.5-16.1c-4.1 3.8-5.9 9.2-5.1 14.6zm18-23.8 1 .3.2.4-6 1 4.7-1.7zm-1.5-.3c-2 .7-5.9 2-8 4 1.5-.3 8-1.8 11.2-2 .8 1.8 3.2 5.6 3.5 6.2-7-4.1-17-2.8-24.6 4 2.4-5.5 11.4-14 13-14.4a14.5 14.5 0 0 0 4.9 2.2zm7.1.7h.9l1.3 3.2-2.2-3.2zm-1.2 0c.6 1 4.1 6.2 5.2 7-1-3.5-2-5.5-2.5-7h2.3c.6 1 5.4 15.8 5.4 16.1a76.8 76.8 0 0 1-12.8-16.4c.7.3 1.6.3 2.4.3zm9.4 0c.1 1.3 1.3 3.4 3.5 6.6-.1-3.2-.9-6.6-.9-6.6s2.4-.1 3.4 0c-.6 5.4 0 9.2.6 13.8a20 20 0 0 1-4.7-5c-1.9-2.5-3.4-6-4.4-8.8h2.5zm.9 0h.8l.6 3.2-1.4-3.2zm18.5 25.3c-2.6-3-5.2-6.9-7.4-11.1-2.2-4.2-3.8-9-4.4-13.9 8 2 11 9 11.8 19.5 1-10.6 4-17.4 12-19.5-1 10-6.6 18.9-12 25zm0 14c-5-9.5-12.5-20-12.7-36.2 1 6.1 3.7 11.1 6.4 16 1.6 2.7 5.2 5.5 5.6 9.4.3 1.3 0 3.2.7 5 .9-1.8.6-3.7.9-5 .4-4 4-6.6 5.6-9.5 2.7-4.7 5.4-9.6 6.4-15.9-.3 16.2-7.8 26.7-12.9 36.2zm-11.4 23c-2.7 7-6.7 13.4-7.6 22.5-.5 10 3.1 17 12 16-1.4 3.5-4.2 5.4-8.3 6.5a15 15 0 0 1-16.4-5.9c-.6-1-.8-1.7-1.3-2.8 2-2 4.7-.8 5.6.5 2.7-6.5-.8-10.4-7-11.1 0-2 .1-3.7.8-5.1 5.4-.6 7.3-6.5 7-9.7-.8.5-2 .5-2.7.6 1.7-6.4 8-13.7 12.7-19.7 3.8-5.1 9.6-12 11.5-19.9 1.8 8.5-3.5 20.2-6.3 28zm1.3-22.5a91.5 91.5 0 0 1-17 16.5c-2.8 2.3-6.6 4.4-8.2 7.7-2.4 4.5-1.8 11.4 3.6 12 1.3.1 2.4-.4 3-.4 0 1.6-1.4 3.5-2.8 4.5-4.4 2.8-9.2-.6-11.1-3.2-5 4.6-2.7 11.5 2.7 12.4 5.4 1 12.3.6 11.9 7-3.8-2.3-6.5.1-9 2.5-7 5.5-15 1.3-18-5.1-1-2-2-7.6-1-10.1-7.4 3-4.7 9.5-8 12.6-.1-5-5-7-5.8-10.4a11.7 11.7 0 0 1 12-13.8c-4.7-.1-8.5-2.1-9-5.5-1-5.8 2.4-8.8 4.9-10-2 4.2 3.2 11 11 6.6 3.4-1.7 8.6-7.3 13.2-9.6 7.5-3.8 12.5-5.1 20.3-10.4 5-3.2 9.2-8.5 9.5-15.9 2.4 4.7.5 8.8-2.2 12.6zm75-231.3c.3 2.7-.6 4-3.4 4.6.6.1 1.3 1.1 1.8 1.6 1.4-1.4 3.2-4.6 3-6.2-.3-.3-1.1 0-1.4 0zm-129.7 0c-.2 2.7.6 4 3.3 4.6-.6.1-1.3 1.1-1.7 1.6-1.5-1.4-3.2-4.6-3-6.2.3-.3 1 0 1.4 0zm2.7 3.7s-1.4-.6-1.9-2c-.1-.8.2-1.4.2-1.4a9.3 9.3 0 0 1 1.7 3.4zm7.3-2.8c-1.3.6-3.6 1.5-4.6 2.3.6-1.3.4-2.3-.2-3.2 1.5.3 3.4.9 4.8.9zm109.7 0c1.4.6 3.6 1.5 4.7 2.3-.7-1.3-.6-2.3.2-3.2-1.5.3-3.4.9-4.9.9zm7.2 2.8s1.3-.6 1.9-2c.2-.8-.1-1.4-.1-1.4a9.2 9.2 0 0 0-1.8 3.4zm-166.8 88c.9.8 2 2 2.8 2.5-3.3 1-10 1.8-14.2 3 4.4.4 13.3-.5 17-.5A6.3 6.3 0 0 0 82 193c-3.5 1-17.5 3.2-17.5 3.2-6.6 1-9-1.7-11-4.2 1.4-3.6 4.3-7 7.8-7 5.7-.3 11.7-1 17.4-.6zm-.9-5.5c1.3-1.3 4.5-5.8 9.2-4.7a42.8 42.8 0 0 1 8.8 2.2c.4-.4.4-.6.4-1-10.4-2.2-17.5-6.6-17.5-15 7.7-5.6 16-.2 20.9 6l.6-.6c-4-6.5-9.8-9.2-14.5-14.5-4.4-4.7-5.8-14.3-3.2-22 9 11.5 24.5 22.3 28.5 32 4 9.6-6.2 11.5-8 18.3-2 7.8 2.9 13.3 12 16.5 7 2.2 15.7-.4 18.8-7.3 1.4 0 2.7.2 4.2 0v7.3c-1.5.2-.2 0-1.5 1.2.6 1.5 1.2 3 1.5 4.4v5.8c-1 0-1.8-.3-2.8-1.7.6 1.3 1.3 2.5 2.8 2.8v1c-.9 0-2-.6-2.5-1.3-1.3-2-2.2-7.2-3-9.2-.5-1-1.5-.6-1.4.1.6 1.5 2.7 7.3 2.8 8.8.9 3.8-2.5 4.4-4.4 6.8-3.2-1.3-6.8-.4-7.7-4.6-.6-2.8-.6-5.4-1-8-.2-.8-1.4-.8-1 0 0 2.4.4 6.8.4 7.8.1 3.2-3.7 3.2-5.9 5.4-2.3-2-6.1-2.3-5.8-6 .1-1.7 1.7-6.4 2.3-8 0-.4-.9-1-.9-.6-1 2.7-2.3 6.7-3.3 8.6-2 3.7-5.1 1-8.8 1-1-2.4-4.6-4.9-2.6-8 .7-1.1 5-5.5 5.1-6.1.2-.6-.4-1.3-1-.6-1.3 1.2-3 3.5-6.4 6-2.8 2.5-9.1-2-10.6-2.3.5-3.1-.1-7.5 3.7-9.5 2.8-1.3 6.9-1.5 8-2 .2-.5-.4-1.2-.4-1.2-2.8.4-6 .5-8.8.4-4-.6-5.4-4.8-7-8.2zM135 212l.1-2c.6.5 1.8 1.2 2.8 1.2v11.1l-3-10.3zm-27.6 33.6.8-9.8 1.8-2-2.6 11.8zM79.8 131.7c-.5 2.5-.8 4-.5 5.8-1.1-.9-5-5.8-9-9.5 2 5.6 7 11.6 9.5 13.8.1 2 1 4.3 1.9 6.7-3.6-3.2-11-9.2-14-12.3-6-6.4-9-16.5-4-25.3a52.9 52.9 0 0 0 16 20.8zm-.5 6.8v1.8a67.8 67.8 0 0 1-4.4-5.8c1.6 1.1 2.7 2.9 4.4 4zm50.1 78 .6.2.6-.9 1 8.5-2.2-7.7zm-11.5-1.8 1.3-1-1 9.3-.3-8.3zm-10.1-2.7.9 1.2-2.6 6.4 1.7-7.6zm-13.7 4.7 2.7-6.1.5 1-3.2 5.1zm-9.8-8.5 4.4-5 1.3.2-5.7 4.8zm-8.5-7.7 5.6-2.4-.2 1-5.4 1.4zM73.3 189s8-1 9.2-1.5l2.7 1-11.9.5zm3.8-11.8s-.6.5-1.3 1c-2.8-.2-6-1-7.7-1.5 2.9.2 6 0 9 .5zM78 165l.4 1.3c-2.3-.8-6.1-1.9-9.4-3.6l9 2.3zm5.2-8.4-1.3.1a68.6 68.6 0 0 1-7.3-5.1c3 1.5 5.7 3.4 8.6 5zm55 78.4c-1 1.2-2.5 2.2-3.6 3.8-2.4-2-7.3-2.3-7.7-5.1a226 226 0 0 1-1.5-18.3c1 .5 2.4.5 3.2 1l4.3 12.5c0-3.5-1.5-13.8-1.5-13.8s2-1.9 2.7-2c1.1 3.5 2.7 8.3 4 13.6v8.3zm-50.3-32a73.2 73.2 0 0 0-7.9 10c2.8-2.1 10.4-8.7 11.1-9.4 1.5-.1 1.9-.4 2.8-.9-.5 1-.2 2-.2 2.5-1.7 3-8 11.1-10.3 13.6-2.8 2.5-6.5 2.3-10.6 2.5-.8-4-2.9-7.3.2-10.7 2-2 11.4-7.9 12.6-8.8.8.3 1.6.8 2.3 1.2zm33.3 8.5c.4 2 1.7 2.8 2.8 3.2 0 3.5.8 17 .8 18.6 0 3.5-3.9 3.6-6.5 5.5-2.8-2-7.2-2.5-7.2-6.6.2-4.5 2-12 2.2-16 .4.1.9.5 1.3 1.3 1-1.5 2-2 2.8-2.5 0 1.7.3 9.5 1.2 14 .8-4.8 1-11 1.7-15.8.3-.3.8-1.1.9-1.7zm-17 14c2.4-3.8 3.7-8 5.5-12l2.4 1.8c-.5 4.4-2.4 14.6-3 16.5-1 4-5.1 3.5-8.5 4.7-1.9-3.1-5.6-4.7-3.4-10.6l6.2-13.2c1.3-.2 2.3.1 3.6-1.5-1.1 4.7-2.2 9.5-2.7 14.3zm-7.8-15.5c-1.6 3.2-4.4 8.6-5 12 1.8-1.7 6-8.8 7-10.5 1 0 2.6.4 3.7.9-1.6 3-4 8.7-7 14.6-1.5 3-6 2.5-9.3 3-1.3-3.2-3-5.4-1.7-8.1 2-4.6 7.7-11.4 10-15.2.7 1.1 1.8 2 2.3 3.3zm-14.5-15.6c0 1 0 1.7-.4 2.8-4.1 1.4-8.8 4-12.3 5.5 4.7-.4 11.4-2.6 12.3-3 1 .4 2.7 1.7 2.7 1.7-2.7 1.3-7.4 4.7-12.2 7-4.7 2-10-.6-11.9-1.7.5-3.4 1.5-8 5.4-8.8 5.6-1.3 11-2.3 16.4-3.5zm-17.4-24.3c6 1.4 11 2 17 3.4-1.4.9-2 1.6-3.5 2.8-4 0-10-.6-15.5 0 4 1.4 9.5 2.5 13.6 2.8a37 37 0 0 0 1.7 3.5c-3.8 0-12.4.4-17.8-.2-5-.4-8.6-3.6-10.4-7 3-5.7 9.5-6.4 15-5.3zm-1.1-15.6 13.7 6.6c0 1 .4 2.5.6 3.2-3.2-.9-9-2.6-14.3-3.5 5.5 3.5 13 5.1 15.6 6.1.9 1.5 2.5 3.5 5 5-8.5-1.5-20-2.5-27.2-6-2.4-.9-7.5-5-8-10 4-3.1 9.6-3.7 14.6-1.4zm25.5 2.4-4.2-.2c-1.8-.4-10.7-7-17.1-9.6 3 4 9 7 13.3 10.3a8 8 0 0 0-4 2.5c-2.4-1.3-12-6.4-15.6-8-4.4-4.5-7.4-10.7-7.3-15.5 15.6 1.2 23.5 12.1 35 20.5zm-29.3 44.4c-1.4.4-16.6 3.5-24.3 7 8.2-.5 23.7-4.1 23.8-4.1-.1.9-.4 1.9-.4 2.8-5 2.4-18.3 6-23.1 7.7-1.2-4.7-5.4-8-6.3-8.5l-1.7 5.6c-.6-.5-1.4-.6-2-.6-.5-2.3-2.7-3-4.3-2.6 2.5-2.2 5.7-4.3 8.7-4.7-2.9.1-6.7 1.6-9.6 3.8a3 3 0 0 0-1.5-.9 18 18 0 0 1 9.5-4.2c7.3-.9 25-3.7 33-4.4-.8.6-1.4 1.9-1.8 3zm-24 16.8.9-.3c3.3-1.5 19.8-8.4 22.8-9.4 1.3.2 2.7.9 2.7.9-2.4 1.5-13.3 8-20.1 13.3 8-2.8 22.5-11.8 23.8-12 1 0 2.8.4 5.1-.4-4.4 3-25 18.8-31.1 22-2 1-3.8 1.8-5.3 2a9 9 0 0 0-.7-1.7 20.7 20.7 0 0 0 4-1c-2 .6-3.3.3-4.7-.1h-.3c1.3-.6 2.5-1.8 2-3.3.5-.5.5-1.7.2-2.4-.5-1-1-1.4-2-1.5 1.2-1.6 2.4-3.8 2.7-6.1zm-7.2-33c8.8 0 17.1 0 27 .8-2 1.5-3 3.4-3.4 4.4-8.7.9-14.6.4-24.3 2.5 8.8 1.4 22.4 1 25 .9 1 1.4 3 2.4 5.4 3-13 2.4-22 3.2-30.1 3.8-9.6 1-16.4-1.9-20.6-8 5.1-5.3 13.9-7.5 21-7.5zm32.3-73.7c-.6 1.8-1.4 4.4-1.7 6.6-7-6.9-15.2-20-23.7-29a122 122 0 0 0 23.5 34.4 23 23 0 0 0 4.5 10c-15.6-11.9-33.7-33.8-38-48.1-4.6-13.9-.8-21 3.9-24.3a253 253 0 0 0 31.5 50.4zm-32 56c6 1.4 16.7 4 20.6 4.6-.8 1-1.3 1.8-1.9 3.1.2.6.2.9.5 1.3-.6 0-15.7-2.6-24.3-2 8.2 2.6 26.2 5 26.6 5.4 2.2 2.2 4.7 3.5 7.3 4.4-2 .4-26.1-.2-31.5-1-8-1-20-5.8-22.4-14.4a40 40 0 0 1 25.1-1.4zM27 148.6c3.6 1.8 16 6.6 19.3 8.5.8 2.2 1.3 3.5 2.4 5.1-5-1.7-16.3-6-28.9-8.8a234 234 0 0 0 33.3 13 7 7 0 0 0 2.5 2c-2 .5-3.2 1.3-4.7 2.1-2.7 0-18.2-4-21.9-5-12-3.4-24.5-11.3-25.8-20.5 6.8-1.6 17.4.7 23.8 3.6zm6.4-17.4c4.7 3 14 8.4 20.5 13 1.4 3 2 2.4 5.5 7-2.6-.4-2.8 0-4 0-3.4-2-21-11.8-30-15.3 7.7 6.7 21.9 15 25.2 16.4-1.9 1.1-2.9 2-3.8 2.8-5.4-1.8-19.2-7-24.2-10.7-7.3-5.1-16.4-11.6-15.6-22 9-.7 19 3.9 26.4 8.8zm32 5.9c-3-1.2-7.5-2.5-11-2.5a290.7 290.7 0 0 0-25.7-18c6.5 7.8 20 18 23.5 20.6.2 1 .2 2.5 1.4 4.3-8.2-5.1-22.5-12.4-32.6-22-7-6.8-11.6-17.5-7.3-27.5 17.8 15.6 32.7 31.8 51.7 45zm-6.6-17.5v2.1c-4-4.3-11-12.7-13.7-18a84 84 0 0 0 13.7 15.9zm-6 15h-1.1c0 .4 0 .6.3 1-2.8-2-9.5-7-12.2-9.8a78 78 0 0 1 13 8.8zm-16.3 7.7c6 2.8 16 8.4 17.8 9-1 0-1.3 0-2.6.5-.3-.1-10.7-5.8-15.2-9.5zm13.3 21L51 165c-.9-.2-10.7-3.5-14.3-5.4 4 1.2 8.9 2 13 3.8zm-1.5 14c.6.5.4 1 1 1.4 0 0-10.5-1.9-12.5-2.8l11.5 1.4zm-10.4 15.4c6.6-.8 11.9-.8 13.8-1v1c-4.1.5-7.3.3-13.8 0zm21.5 9.5-.1 1c-4 1-7.6 1.5-13 2.4 4.3-1.2 8.6-2.8 13.1-3.4zm47.2 50.6c1-3 3.5-15.7 3.8-17 .4 1.8 2.6 1.8 3.6 2.8 0 2.8-.1 15-.4 16.5-.6 6.6-5.6 5.6-7.7 7.3-2.8-2-7.8-3.2-7-7.1.8-6.5 1.8-11.9 2.6-17.4 2.3-1 4-.9 5.8-1.8 0 5.7-1.3 11.1-.7 16.7zM69.8 216c-2 2.3-13.6 15.2-17.8 21.1 4.4-4 15.2-13.7 18.4-17.5 0 0 .9 2 .9 3.2-.2.5-16.7 20.5-19.7 23.7-3.5 4-8.4 1.8-11.9 1.8-.4-4-1.9-7 1.8-11 1.7-1.9 25.3-22 28.3-24.5-.1 1 0 2 0 3.2zm16.4 36.8c2.5-4.4 7.4-17 9.2-21 .6 1.7 2 2.7 2.6 4-1.7 6.5-6.6 23-7.7 25.3-1.3 3.5-6.7 2.6-8.8 4.4-1.3-2.3-6.1-4.5-5-8.3 2-5.6 8.7-21 11.6-25.6.6-.1 2.8-.1 4-.6-1.8 7.2-4.9 14.5-6 21.8zm-3.5-31.3c-.5.9-12.6 19-15 24.7 2.9-2.6 12.2-15.6 15.1-19.3.5 1 1.3 2.4 1.3 4-1.7 4-13.4 25.2-14.9 26.6-2.7 2.7-5.8.8-9 1.9-1-2.7-4-4.4-3.2-8.7.7-3.5 16.8-24.5 19-27.1 2.3-.8 4.5-.5 6.7-2zm-22 6.4 9.4-11 .2 1.6-9.7 9.4zm13.8 8 7.9-11.9v1.8l-7.9 10zm14.6 7.8 4.1-13.3c.6-.1 1.3-.6 1.9-1.3v1.2l-6 13.4zm171.2 9c-1.2-3-3.6-15.6-4-16.9-.5 1.8-2.4 1.8-3.6 2.8 0 2.8.2 15 .5 16.5.7 6.6 5.4 5.6 7.7 7.3 2.8-2 7.7-3.2 7-7.1-.9-6.5-1.9-11.9-2.5-17.4-2.5-1-4-.9-5.8-1.8.1 5.7 1.1 11.1.7 16.7zm21.5-65.5c4.7-.6 6-5.6 7.3-8.2-1.3-1.3-4.5-5.8-9.2-4.7-3 .5-6 1.2-8.8 2.2-.4-.4-.4-.6-.4-1 10.2-2.2 17.4-6.6 17.4-15-7.6-5.4-15.5-.6-21 6l-.5-.6c4-6.5 10-9.2 14.4-14.5 4.4-4.7 5.9-14.3 3.3-22-9 11.5-24.4 22.3-28.5 32-4 9.6 6 11.5 7.9 18.3 2.2 7.8-2.8 13.3-12 16.5-7 2.2-15.6-.4-18.6-7.3-1.4 0-2.7.2-4.3 0v7.3c1.4.2.1 0 1.4 1.2-.6 1.5-1.2 3-1.4 4.4v5.8c1 0 1.7-.3 2.4-1.7-.4 1.4-1 2.5-2.4 2.8v1c.8 0 2-.6 2.4-1.3 1.4-2 2.2-7.2 3.1-9.2.4-1 1.5-.6 1.3.1a101 101 0 0 0-2.8 8.8c-1.1 3.8 2.4 4.4 4.3 6.8 3.2-1.3 7-.4 7.7-4.6.6-2.8.6-5.4 1-8 .2-.8 1.4-.8 1 0 0 2.4-.4 6.8-.4 7.8-.1 3.2 3.7 3.2 5.9 5.4 2.5-2 6.1-2.3 5.8-6-.1-1.7-1.7-6.4-2.3-8 0-.4.6-1 .9-.6 1 2.7 2.3 6.7 3.5 8.6 1.9 3.7 5 1 8.7 1 1-2.4 4.7-4.9 2.7-8-.6-1.1-5-5.5-5.2-6.1-.1-.6.5-1.3 1-.6 1.4 1.2 3.1 3.5 6.2 6 3 2.5 9.2-2 10.7-2.3-.5-3.1.1-7.5-3.7-9.5-2.8-1.3-7-1.5-8-2-.2-.5.4-1.2.4-1.2 2.8.4 5.9.7 8.8.4zm5.7-48.7c0 .6 0 1.4-.2 1.8 1.5-1.5 3.5-4.5 4.4-5.8-1.4 1.1-2.6 2.9-4.2 4zM231.7 212c-.2-.9-.5-1.3-.2-2-.6.5-1.7 1.2-2.7 1.2v11.1l2.9-10.3zm58-34.6s.6.5 1.3 1c2.8-.2 6-1 7.7-1.5-3 .2-6.1 0-9 .5zm3.6 11.8s-8-1-9.2-1.5c-.6.5-2.5 1-2.5 1l11.7.5zm-2.5 11.4-5.5-2.4.1 1 5.4 1.4zm-8.4 7.7-4.4-5-1.3.2 5.7 4.8zm-9.7 8.5-2.8-6.1-.4 1 3.2 5.1zM259 212l-.9 1.2 2.6 6.4-1.7-7.6zm-10 2.7-1.4-1 1.2 9.3.1-8.3zM228.7 235c.8 1.2 2.4 2.2 3.5 3.8 2.3-2 7.3-2.3 7.7-5.1.6-3.2 1.3-14.3 1.5-18.3-1 .5-2.4.5-3.3 1-.8 3.1-3.6 10.4-4.3 12.5 0-3.5 1.4-13.8 1.4-13.8s-2-1.9-2.5-2c-1.1 3.5-2.7 8.3-4 13.4v8.5zm8.4-18.5-.6.1-.5-.9-1 8.5 2.1-7.7zm50-85c.4 2.6.6 4 .4 6 1-1 5.1-6 9-9.6a43 43 0 0 1-9.4 13.8c-.2 2-1.2 4.3-2 6.7 3.4-3.2 10.9-9.2 14-12.3 6-6.4 8.9-16.5 4-25.3-2.9 7.8-9.7 15.5-16 20.8zm-9.4 25.4 4.4-.2c1.8-.4 10.7-7 17-9.6-3.1 4-9 7-13.3 10.3a8 8 0 0 1 4 2.5c2.5-1.3 11.9-6.4 15.5-8 4.4-4.5 7.5-10.7 7.3-15.5-15.6 1.2-23.5 12.1-34.9 20.5zm24.4 13.2c-6 1.4-11 2-17 3.4 1.4.9 2.1 1.6 3.6 2.8 4 0 10-.6 15.5 0-4.1 1.4-9.5 2.5-13.6 2.8-.4 1.1-1.8 3.5-1.8 3.5 4 0 12.5.4 17.6-.2 5-.4 8.7-3.6 10.5-7-2.6-5.8-9.2-6.4-14.8-5.3zm1.5-15.6c-1.2.5-10 4.7-13.7 6.6 0 1-.5 2.5-.6 3.2 3.2-.9 9-2.6 14.4-3.5-5.8 3.5-13.1 5.1-15.6 6.1-.9 1.5-2.5 3.5-5 5 8.5-1.5 20-2.5 27.2-6 2.3-.9 7.5-5 8-10-4.3-3.3-9.9-3.7-14.7-1.4zm-15.5 29.8c-.9.9-2 2-2.8 2.6 3.2 1 10 1.8 14.2 3-4.4.4-13.3-.5-17.4-.5 1.5.9 2 2.2 2.5 3.5 3.5 1 17.5 3.2 17.5 3.2 6.8 1 8.8-1.7 11.1-4.2-1.4-3.6-4.2-7-7.9-7-5.5-.3-11.5-1-17.2-.6zm-3.4 10c0 1.1 0 1.8.5 2.9 4 1.4 8.7 4 12.3 5.5a55.3 55.3 0 0 1-12.3-3c-1 .4-2.8 1.7-2.8 1.7 2.5 1.3 7.3 4.7 12.3 7 4.7 2 10-.6 11.8-1.7-.4-3.4-1.4-8-5.4-8.8-5.4-1.3-10.8-2.3-16.4-3.5zm-6 8.7c2.7 2.5 5.5 6.6 8 10-2.7-2.1-10.3-8.7-11-9.4-1.6-.1-2-.4-2.8-.9.5 1 .2 2 .2 2.5 1.7 3 8.1 11.1 10.3 13.6 2.8 2.5 6.5 2.3 10.5 2.5 1-4 3-7.3-.1-10.7-2-2-11.4-7.9-12.4-8.8-1 .3-1.8.6-2.6 1.2zm-8.3 7c1.5 3.2 4.3 8.6 4.9 12-1.8-1.8-6-8.8-7-10.5-1 0-2.5.4-3.6.9 1.5 3 3.8 8.7 6.9 14.6 1.5 3 6 2.4 9.2 3 1.3-3.2 3-5.4 1.8-8.1-2-4.6-7.8-11.4-10.1-15.2-.6 1.1-1.6 2-2 3.3zm-24.8 1.5c-.4 2-1.8 2.8-2.8 3.2 0 3.5-.9 17-.9 18.5 0 3.6 4 3.7 6.8 5.6 2.7-2 7-2.5 7-6.6-.2-4.5-2-12-2.2-16-.4.1-.9.5-1.3 1.3-1-1.5-2-2-2.8-2.5 0 1.7-.1 9.5-1 14-.9-4.8-1.2-11-1.8-15.8-.6-.3-.9-1.1-1-1.7zm17 14c-2.4-3.8-3.7-8-5.5-12l-2.3 1.8c.4 4.4 2.3 14.6 3 16.5 1 4 5 3.5 8.4 4.7 1.9-3.1 5.5-4.7 3.4-10.6-1.4-3-5.4-11-6.2-13.2-1.3-.2-2.3.1-3.5-1.5.9 4.7 2 9.5 2.6 14.3zm35.1-63c-3.2 1-6.2 1.7-9 2.5l-.4 1.3c2.3-.8 6.2-1.9 9.4-3.7zm-14.1-6 1.3.2c2.5-1.5 4.4-2.8 7.3-5.1-3 1.5-5.8 3.4-8.6 5zm-24.3 88.9-.8-9.8-1.8-2 2.6 11.8zm59.2-68.2c-.6.5-.4 1-1 1.4 0 0 10.5-1.9 12.5-2.8l-11.5 1.4zm10 15.4c-6.5-.8-11.5-.8-13.4-1v1c4 .5 7.2.3 13.5 0zm-8.1 12.9c-4.2-1.2-8.8-2.8-13.2-3.4l.2 1c4 1 7.7 1.5 13 2.4zm-6 11-10.5-7-1.6.5 12.1 6.5zm-8.3 11.3-9.5-11-.2 1.6 9.7 9.4zm-13.9 8-8-11.9v1.8l8 10zm-14.9 7.8-4-13.3c-.7-.3-1.3-.7-1.8-1.3v1.2l5.8 13.4zm30.7-124.1v2.1c4-4.3 10.6-12.7 13.7-18-3.8 4.9-8.8 12-13.7 15.9zm6.1 15h1l-.1 1c2.8-2 9.3-7 12-9.8a71.2 71.2 0 0 0-12.9 8.8zm16 7.7c-6 2.8-15.8 8.4-17.6 9 1 0 1.3 0 2.6.5.2-.1 10.7-5.8 15-9.5zm-13.4 21a5 5 0 0 1-1 1.7c.9-.2 10.7-3.5 14.3-5.4-4.4 1.2-9 2.2-13.3 3.8zm-11-51.8c.5 1.8 1.8 4.4 2 6.6 7-6.9 15.2-20 23.6-29-5 12.2-17 28.9-23.5 34.4-.6 2.8-2 7.5-4.4 10 15.7-11.9 33.6-33.8 38.2-48.1 4.4-13.9.8-21-4-24.3a279 279 0 0 1-32 50.4zm-25.2 141.3c-2.5-4.4-7.4-17-9.2-21-.4 1.7-2 2.7-2.6 4 1.7 6.5 6.6 23 7.7 25.3 1.3 3.5 6.6 2.6 8.8 4.4 1.3-2.3 6.1-4.5 5-8.3-2-5.6-8.5-21-11.6-25.6-.6-.1-2.8-.1-4-.6 2 7 4.9 14.6 6 21.8zm3.5-31.3c.5.9 12.4 19 15 24.7-2.9-2.6-12-15.6-15.1-19.3-.5 1-1.3 2.4-1.3 4 1.7 4 13.4 25.2 15 26.6 2.8 2.7 5.8.8 9 1.9 1-2.7 3.9-4.4 3.1-8.7-.9-3.5-16.6-24.5-19-27.1-2.3-.8-4.6-.5-6.7-2zm12.7-5.5c2 2.3 13.6 15.2 17.8 21.1-4.5-4-15.1-13.7-18.5-17.5 0 0-.9 2-.9 3.2a670 670 0 0 0 19.7 23.7c3.5 4 8.4 1.8 11.9 1.8.4-4 1.9-7-1.8-11-1.7-1.9-25.4-22-28.3-24.5.4 1 .1 2 .1 3.2zm33.6 1.9c-3.5-1.5-20-8.4-22.8-9.4-1.3.2-2.7.9-2.7.9 2.4 1.5 13.3 8 20.1 13.3-8.2-2.8-22.6-11.8-23.8-12-1 0-2.8.4-5.1-.4 4.4 3 25 18.8 31.1 22 9 4.7 11.4 1 15 0-2-7.4-3.9-11.4-11.8-14.4zm-23.2-16.5c1.3.4 16.5 3.5 24.2 7-8.1-.5-23.6-4.1-23.8-4.1.2.9.5 1.9.5 2.8 5.5 2.7 21.6 7.1 24.7 8.1 5.8 2.4 16.5 1.5 19.7-2.6-2.8-5.4-9-9.3-14.5-10-7.3-.8-25-3.6-33-4.3 1.2.6 1.8 1.9 2.2 3zm31.1-16.3c-8.8.2-17 .2-26.9 1a12 12 0 0 1 3.5 4.3c8.5.9 14.5.4 24.3 2.5-8.8 1.4-22.4 1-24.8.9a9.8 9.8 0 0 1-5.4 3c12.8 2.4 21.6 3.2 29.9 3.8 9.6 1 16.4-1.9 20.6-8a30.9 30.9 0 0 0-21.2-7.5zm-.1-17.6c-6 1.4-17 4-20.6 4.6.8 1 1.3 1.8 2 3.1-.3.6-.3.9-.6 1.3.8 0 15.7-2.6 24.1-2-8 2.6-26 5-26.4 5.4-2 2.2-4.7 3.5-7.3 4.4 1.9.4 26.1-.2 31.4-1 8-1 20-5.8 22.3-14.4-7-3.6-17.5-3.2-25-1.4zm1.6-18.9c-3.5 1.8-16.1 6.6-19.3 8.5-.9 2.2-1.3 3.5-2.6 5.1 5-1.7 16.5-6 29.2-8.8a241 241 0 0 1-33.3 13 7 7 0 0 1-2.5 2c2 .5 3.2 1.3 4.7 2.1 2.7 0 18.2-4 21.9-5 12-3.4 24.5-11.3 26-20.5-7-1.6-17.6.7-24.1 3.6zm-6.5-17.4c-4.6 3-13.8 8.4-20.4 13-1.5 3-2 2.4-5.6 7 2.7-.4 2.8 0 4 0 3.6-2 21-12 30.2-15.3-7.7 6.7-21.9 15-25.4 16.4 1.9 1.1 3 2 4 2.8 5.4-1.8 19.2-7 24.2-10.7 7-5.1 16.4-11.6 15.6-22-9.2-.7-19 3.9-26.6 8.8zm-32 5.9c3.1-1.2 7.7-2.5 11-2.5 1.5-1.3 17.5-13.3 25.7-18-6.4 7.8-20 18-23.4 20.6-.1 1-.1 2.5-1.3 4.3 8.2-5.1 22.7-12.4 32.6-22 7.2-6.8 11.7-17.5 7.3-27.5-20.1 17.2-33.9 32.5-51.8 45zM227 175c-11.4-4.4-16-15-17.8-29.5-.5 2.6 0 8 .6 11.4-1.5-3.6-1.5-7.6-1.8-11.4-1.7 11.4.9 21.9 9.2 30h11.4v11.2c8 1.4 16-4.6 12.3-13.3-4.1 3.6-9 3.3-13.9 1.6zm-46.3-33.6a52.4 52.4 0 0 1 1.5 20.4c-2.5-15-9-29-18-43 5.5 7 12.6 14.5 16.5 22.6zM168 128c4 6.6 4.7 18 4 32.6-2.4-14.5-9-25.6-9.9-31.5 3.3 3.9 6.5 9.2 8.4 15.4-.2-3.6-5.4-21-6.9-25l4.4 8.5zm-22.8 36.8c4.4-1.3 6.6-6.4 6.6-6.4-.2 1.5-1 5.1-2 6.9-4.7 4-13 2.8-14.5-2.2 8.7 3.5 14.7-3.5 17-12.3 0 5-2.4 11.7-7.1 14zm-7.3 10.7 1.9-.6c11.4-4.4 16-14.9 17.8-29.5.4 2.6 0 8-.6 11.4 1.5-3.5 1.5-8 1.8-11.4 1.6 11.1-1 22-9.2 30.1h-11.7v11.3c-8 1.4-16-4.6-12.3-13.3 3.8 3.2 7.8 3.2 12.3 2zm29.5-58c-1.3-3.2-8.2-9-10-11.5 2.3 1.7 6 3.6 8.2 4a89.2 89.2 0 0 1 13.8 27.7c-8.6-14.2-17.1-19.2-23.1-31.6 4 3 6.9 8.6 11.1 11.4zm-15-1c1.9 3.5 5 14 5.4 15.2-2.8-4-6.5-7.3-11-9.5a83.5 83.5 0 0 0-10-8.5 51 51 0 0 1-6-7.3 151 151 0 0 0 19.7 14.2c-3.7-6.6-8.7-13.3-12.6-17.8 5.1 3 11.5 8.4 14.5 13.7zm6.7-29c1.3-.2 3-.5 4.4-1.1-1 .9-3.7 2.6-5.2 3.2a48 48 0 0 1-28 3.7c-2.6-.2-9-3.1-14.2-1.2 0 2.6 3 7 4.1 8 3-2.2 6-3 10.1-4.4 5-1.4 11.1-1.7 17-.8 3.7.4 9.6 1 13.5 0-4.8 4-13 4.6-20.9 2.3 6 4.1 12.6 11.4 13.8 19.1a50.4 50.4 0 0 0-20.5-17c6 5 12.3 14 15 18.8a94.9 94.9 0 0 1-20.2-16 38 38 0 0 0 7.7 11.2c-1.5-.9-7.7-3.8-12.4-8-4-3.4-8.8-11-11-16.6-.6-1.6.2-2 .9-2 15 .1 30.4.9 45.9.9zm-52.3 5.6c8 11.6 16.3 19 28.5 26.3-1 1.6-4.7-1.4-7.6-3.2a41 41 0 0 0-19.8-8.6c-5-.2-9.6 1.4-12.4 4.4-2.6-2.4-3.2-8.5-2-11.9 2.2-4.8 8.3-7.4 13.3-7zm14.4 21c-15.4.8-15.9 7.7-22.3 9.3-4.5 1.3-10.7-.5-13-5.6 3.5 2 7.3 2 11.4 1 5.1-1.3 9.5-4.5 15.2-5 2.9-.4 6-.8 8.7.4zm6.6 4.3c-5.4-.2-15.2-1.3-17.8 8.6-1.5-2.2-.6-5 1.7-6.4 0 0 2.8-5 16.1-2.2zM111 90.2c2.8 6.1 6 11.5 10 15.2 3 3 9 6.6 13.1 8.5a44.2 44.2 0 0 1 14 11.8 28.7 28.7 0 0 1 4.1 16.5 49.8 49.8 0 0 0-17-25c-7.2-4-13.7-8.4-17.6-13.7-3-3.8-6.7-7.5-9-11.5-1.7-2 1.7-3.4 2.4-1.8zm15.8 5.5c1.3-1.3 2.6-1.7 3.2-1.7-.6 1-2.2 1.7-3.2 1.7zm27.3 23c2.2 2.2 6.4 6.4 7.7 9.6 1 8.6 1 24-1.1 32a58.4 58.4 0 0 0-4.7-24.5c2 8.7.2 17.8-4.5 27.6 2.5-8.3 3.2-24 .1-32.9-.9-2.3-2.5-5.1-3.6-7 4 1.9 10 8.8 11.8 13a121 121 0 0 0-5.7-17.8zm7.2 3.3c-2-4.3-5.6-8.7-8-12.2 1.4 1.4 5.8 4.4 7.4 5.5a90 90 0 0 1 7 19.9 93.8 93.8 0 0 0-13.6-17.5c0-2.4-1-5.4-1.9-7.8 3 4 5.6 8.6 9 12.1zm8.6 32.6c-.6 7-3.7 12.6-5.6 17 .5-6.5-.4-13.8-1.7-19.2.4-4 .6-9.8.4-13.9.6 2 3 11.4 3.5 16.4 0-5-1.6-13.1-2.2-16.5 2.5 4.8 4.6 11 5.6 16.2zm-11.1 21H156c1.5-4 3.5-14.8 3.5-21.1 0 .4.6 7 .5 12.2 1.6-5 1.7-7.7 2.4-12.4a25.3 25.3 0 0 1-3.6 21.4zm4.4 0h-2.8c1.2-2.7 2.6-5.5 3.5-9.6-.1 3.2-.6 6.4-.7 9.7zm5.7 0h-4.6c.5-4.5 2.8-8 4.4-11.8.5 3.8.6 8 .2 11.9zm6.7-8.4c-1.2 2.8-2 5.7-3.2 8.5h-2.2c0-3.6-.2-8.5-.9-12.8.4-2.3.9-4.6 1-6.8 1.3 4.5 1.3 6.1 1.6 11.4.6-5 1.3-10.7 1-15l2.7 14.7zm.3 8.5h-2.4c.5-2 1.5-4.4 2.4-7 .3 2.3 0 4.6 0 7zm6.7 0h-4.8c1.3-4.1 3.3-7.6 4.6-11.9 1.4 3.7-.5 8 .2 11.9zm-5.6-20.5c-.8-6.1-1.7-11.5-3.2-17.4 0 0 2.5 6.9 3 8.8 1.1 4 4.3 12.3 4.6 16-1 4.6-2.9 7.5-4.6 11 0-6-.6-11.5-2-17.5-.4-1.8-1.4-4.5-1.7-6.4-.4-4-.6-9.7-.9-12 2 5.7 3.5 11.7 4.8 17.5zm37.3-38.7a117 117 0 0 0-5.4 15.2c2.8-4 6.4-7.3 11-9.5 2.4-2.6 7-6.1 10-8.5 1.5-1.4 4.6-5.1 5.9-7.3a148.8 148.8 0 0 1-19.5 14.2c3.5-6.6 8.5-13.3 12.5-17.8-5 3-11.7 8.4-14.5 13.7zM260 93a86.7 86.7 0 0 1-28.6 26.3c.9 1.6 4.7-1.4 7.6-3.2a41 41 0 0 1 19.7-8.6 17 17 0 0 1 12.6 4.4c2.4-2.4 3.2-8.5 1.9-11.9-2-4.6-8.2-7.4-13.2-7zm-14.6 21c15.5.8 16 7.7 22.4 9.3 4.5 1.3 10.6-.5 13-5.6-3.5 2-7.3 2-11.6 1-5-1.3-9.2-4.5-14.9-5-3-.4-6-.8-8.9.4zm-6.6 4.3c5.4-.2 15.2-1.3 17.9 8.6 1.4-2.2.5-5-1.8-6.4-5.1-3.5-10.2-3.5-16-2.2zm17-28.2c-2.8 6.1-6 11.5-10 15.2-2.9 3-9 6.6-13 8.5a44.8 44.8 0 0 0-14.1 11.8 29.9 29.9 0 0 0-4.1 16.5 49.8 49.8 0 0 1 17-25c7.2-4 13.7-8.4 17.7-13.7 3-3.8 6.6-7.5 9-11.5 1.6-2-2-3.4-2.5-1.8zm-16 5.5c-1.3-1.3-2.6-1.7-3.2-1.7-.7.1 2.5 1.7 3.3 1.7zm-45.4 12.5a20.2 20.2 0 0 0 20.8-8.8l-3.2-.1c-2.8 5.5-11.9 8.6-17.6 8.9zm22.4-8.7a68.5 68.5 0 0 0-10.1 14.8c7-4.2 13.9-12.4 17.4-15.6-2.5.4-5 .8-7.3.8zm-11.9 29c-1.1 8.6-.8 24 1 32 .2-7.6 1.4-19.3 4.7-24.6a41.3 41.3 0 0 0 4.4 27.6c-2.5-8.3-3.2-24-.1-32.8.7-2.4 2.5-5.2 3.6-7-4 1.8-10 8.7-11.8 13 1.7-7 3.5-11.9 5.8-17.9-2.6 2.5-6.4 5.9-7.6 9.7zm-6.4-.5c-3.8 6.6-4.4 18-3.8 32.6 2.4-14.5 9-25.6 9.8-31.5-3.2 3.9-6.4 9.2-8.3 15.4.1-3.6 5.4-21 6.8-25l-4.5 8.5zm7.2-6c1.9-4.3 5.5-8.7 7.9-12.2-1.5 1.4-5.9 4.4-7.5 5.5a90 90 0 0 0-7 19.9 94 94 0 0 1 13.6-17.5c0-2.4 1-5.4 1.7-7.8-2.9 4.1-5.4 8.6-8.7 12.1zm-6.3-4.5c1.3-3.2 8-9 10-11.5-2.4 1.7-6 3.6-8.4 4a89.2 89.2 0 0 0-13.7 27.7c8.6-14.2 17-19.2 23.2-31.6-4.4 2.8-6.9 8.5-11.1 11.4zm-13.3 24a55.5 55.5 0 0 0-1.5 20.4c2.5-15 9-29 18-43-5.7 7-12.4 14.5-16.5 22.6zm3.7 13.7c.8-6.1 1.7-11.5 3.2-17.4 0 0-2.5 6.9-3 8.8-1 4-4.3 12.3-4.6 16 1 4.6 2.9 7.5 4.6 11 0-6 .6-11.5 2-17.5.4-1.8 1.4-4.5 1.7-6.4.6-4 .7-9.7.7-12-2.2 5.7-3.3 11.7-4.6 17.5zm-5.6 20.5h5c-1.3-4.1-3.7-7.6-4.7-11.9-.9 4 .4 8-.3 11.9zm6.6 0h2.3c-.4-2-1.4-4.4-2.3-7-.3 2.3 0 4.6 0 7zm.4-8.5c1 2.8 2 5.7 3.2 8.5h2c0-3.6 0-8.5 1-12.8-.5-2.3-1-4.6-1-6.8-1.4 4.5-1.4 6.1-1.5 11.4-.6-5-1.3-10.7-1-15l-2.7 14.7zm6.6 8.5h4.5c-.4-4.6-2.8-8-4.4-11.9-.4 3.8-.6 8-.1 11.9zm5.8 0h2.8c-1.3-2.8-2.6-5.6-3.5-9.7.1 3.2.4 6.4.7 9.7zm4.3 0h2.7c-1.6-4.1-3.6-15-3.6-21.2 0 .4-.6 7-.4 12.2-1.5-5-1.8-7.7-2.5-12.4a27.5 27.5 0 0 0 3.8 21.4zm-11.1-21c.5 7 3.6 12.5 5.5 16.9-.4-6.5.5-13.8 1.8-19.2-.5-4-.6-9.8-.5-13.9-.6 2-2.9 11.4-3.3 16.4 0-5 1.4-13.1 2-16.5a56 56 0 0 0-5.5 16.2zm15 21h3.5c-1-2.5-5.8-8.2-6.8-12.3.7 4.2 2.6 8 3.3 12.3zm10-10.9c-4.6-1.3-6.8-6.4-6.8-6.4.2 1.5 1.2 5.1 2 6.9 4.7 4 13 2.8 14.5-2.2-8.7 3.5-14.7-3.5-17.4-12.3.2 5.1 2.8 11.9 7.6 14zM138 200c-.4-.9-.5-2.5-.5-2.5l.5-.1v2.6zm-11.6.6-.6.1 1.3 3.7-.7-3.8zm-10.6 1.2h-.8v2.6c.4-.7.5-1.8.8-2.6zm-10.2-3.7-.6-.1s-.8 1.7-1 2.4c.4-.8 1-1.6 1.6-2.3zm-8.2-6-.4-.6-3 2c1.2 0 2.6-1 3.4-1.4zm-.1-21.8-.2.6s-3-2.2-3.5-2.7l3.7 2.1zm5.5-12.4-.4.8s-5.8-6-5.8-6.6l6.2 5.8zm-7.3 24.4v-.6l-4-.4 4 1zM228.8 200c.4-.9.5-2.5.5-2.5l-.5-.1v2.6zm11.5.6.6.1-1.3 3.7.7-3.8zm10.5 1.2h.9v2.6l-.9-2.6zm10.4-3.7.6-.1s.8 1.7 1 2.4l-1.6-2.3zm8-6 .5-.6 3 2c-1.1 0-2.5-1-3.5-1.4zm2-9.8v-.6l4-.4-4 1zm-1.7-12 .2.6s3-2.2 3.5-2.7c-1.2.8-2.5 1.4-3.7 2.1zm-5.7-12.4.4.8 5.6-6.8c-2.3 1.5-4 4-6 6z" data-v-eb6c4a1f></path><path d="M17.2 222.2c-.1-.9-.1-1.8-.4-2.5l.6-.4-.2-.2c-.4.4-.8.6-1.4.6-.2 1.3-.2 2.8 1 3 .1-.4.1-.5.4-.5zm122.3 95.4zm-102-70 1 2h.1l-1.1-2.2v.2zm-2.2-31.4 3.4-1.5c-1 .5-2.3.8-3.4 1.2v.3zm-7.7 1.3-1.2.1c0 .2.2.2.2.3h.9l.1-.4zm-8.3 12.3 2 1.3c.5-.5.5-1 .5-1.8-1-.5-1.8-.5-2.5.5zm-1.6-7.3c-.2-.8-.2-1.7-.5-2.4l.6-.5-.1-.1c-.5.4-.9.6-1.5.6-.1 1.3-.1 2.7 1 2.9.2-.3.2-.5.5-.5zm18-6 3.4-1.4c-1 .4-2.3.7-3.3 1.2v.3zM28 218l-1.1.1.1.3h.9l.1-.4zM19.7 230l2 1.4c.5-.5.5-1 .5-1.8-.9-.6-1.8-.6-2.5.4zm211.8 92.2c.5.9-.8 3.4-.8 4.4.4 1.7 5.5 1.7 7 2.5-2 .4-8.5-.6-8.7-1-.5-.8 1.7-3.1 2.5-5.9zm2.7.9c-.2.6-1 1.4-.5 2.3.2.5 1.5.9 1.5 1-.6 0-2.4-.1-2.5-.5-.7-1.5.7-2.4 1.5-2.8zm60.9-233c.8 1.5 1 2.3.8 4 2-1.4.3-3.6-.8-4zm.7-18c-.6 2.5-6.6 5-2.5 11.9-2.2-6.3 3.2-8.7 2.5-11.9zm-156 254.2c.9.4 1.3 1.6.6 2-1.8 1.5-5 0-10.4 0 3.8-1.4 9.5 1.2 9.8-2zm-13.2.1c.5.2.5 1.7-.1 1.7-.1-.3.1-1.7.1-1.7zm-2.4-.4c.8.6.5 1.8 0 2.5V326zm13-3.4c2.4 2.5.4 4.3-1.8 3.6 2.3-.8 2.2-1.8 1.8-3.6zm49.6-113.5c-.1.8-.6 2.8-.8 4.6l2.7-1.6.6-2c-.9 0-1.7-.2-2.5-1zM73.3 84.1c2-6.2-3.2-8.7-2.5-11.9 1.4 5 6.8 5 2.5 11.9zM208 363.7c1.9 9.4-1 19-6.2 22.4 5.4-2.4 10.1-11.3 7.3-22.9-2.3-10.4-9.2-18.4-14.3-26.6 4.3 9.2 11 17 13.2 27zm22.2 20c7.7-2.2 9.6-11 8.4-17 1.4-.4 3.8.9 5.9 2.8-1-2.8-3.7-4.7-7.2-3.7.8 6.3-.4 15-7.1 17.9zm-15.8-21.5c2.8 3.2 9 1.7 11-2.6-2.1 3.2-7.8 3.6-11 2.6zm3.5-21c6 4 17 11.8 15.5 26.1-1 11-7 11.4-10 11 4.4 1.3 7.8-.5 9.7-4.1 5.1-10 .4-24.3-10.7-31.7-5.8-4-12-6.6-19.5-11.1 4.5 3.8 9.9 6.7 15 9.8zm21.5 11.5c1.7.1 1.9-.9 2-.9l-3.2-.1c-3.2-.2.7 1 1.2 1zm3.3 1.7c4.4.5 8.5-3.9 5.9-8.9a9 9 0 0 1-5.9 9zm5.6 17.9c2.5-7.3-1.8-12.2-8.8-13.2 6.6 2 8.8 6.9 8.8 13.2zm-89.4-8.6c-2 9.4 1 19 6.1 22.4-5.4-2.4-10-11.3-7.3-22.9 2.4-10.4 9.2-18.4 14.5-26.6-4.3 9.2-11 17-13.3 27zm-10-22.5c-6 4-16.9 11.8-15.4 26.1 1.1 11 7 11.4 9.9 11-4.4 1.3-7.7-.5-9.6-4.1-5.2-10-.6-24.3 10.6-31.7 5.9-4 12.1-6.6 19.6-11.1-4.5 3.8-9.8 6.7-15 9.8zm3.6 21c-3.1 3.2-9.1 1.7-11-2.6 2.2 3.2 7.7 3.6 11 2.6zm-28.2-7.8c-4.4.5-8.5-3.9-5.9-8.9a9 9 0 0 0 5.9 9zm3.3-1.7c-1.7.1-1.9-.9-2-.9l3.2-.1c3.2-.2-.9 1-1.2 1zm-9 19.6c-2.5-7.3 1.7-12.2 8.7-13.2-6.5 2-8.7 6.9-8.7 13.2zm18.2 11.4c-7.7-2.2-9.6-11-8.3-17-1.3-.4-4 .9-6.1 2.8 1.3-2.8 4-4.7 7.3-3.7-1 6.2.6 15 7.1 17.9zm-67.3-260c-2.2-1.5-5-4.4-5.4-5.2-1.3 5.6 4.4 16.4 8.5 20.5-9.2-7.8-12-18-9-24.7a47.5 47.5 0 0 0 5.9 9.3zm65 113.4c-3-1.8-7-1.7-6.7-6.4.7 3.2 3.5 3.2 6.5 4.7 1.8-2.2 3.5-2.5 3.3-6 1.7 4.4-1.4 4.8-3.1 7.7zm-59.2-18.6c3 0 6 .7 8-2-2.7 4.4-6 2.7-9.3 3.6-1.2-5.4-2.2-7.2 2.4-10.4-3 3-2 5.2-1 8.8zm12.6 8.7c3.2-.1 5.1 0 7-2.5-1.9 4.7-4.7 3.2-8 3.8-.6-3.2-3.5-4.2 0-8.4-1.8 3.2.1 4.3 1 7.1zm13.6 6c2.9-1 5.8-.9 6.8-4-.4 4.6-4.3 4.3-7.3 5.5-1.3-2.8-5-4.3-2.4-8.4-.8 3.5 1.3 4.6 2.9 7zm17 2.6c2.7-1.6 4.9-1.7 5.3-5.4.6 5.9-3 4.7-5.4 7-2.5-2.3-6.7-1.9-5.5-7.3-.3 4 3.5 4 5.5 5.7zm-61.7-44.5c1.7 2.3 6.1 3.3 9 3.5-4.6.4-8.6-.6-10.6-3.4 2-4 5-5.8 10-5.4-4 .6-6.7 1.6-8.4 5.3zm6.7 13.7c2.3 1.8 5.5 2.8 7.7 2-4 2.1-6.8 0-9.5-1.4 1.2-4.4 2.2-6.9 7-7.3-3.9 1.2-4.2 3.4-5.2 6.7zm-10-29.6c1.2 2.9 5 5.4 7.8 6-4-.2-8-2.7-9.6-6.2 2.2-3.5 8.4-5.1 12.5-3.6-4-.2-8.3.4-10.8 3.8zm-.7-18.3c.6 4 5.1 7.6 8 8.8-4.5-1-8.8-4.6-10-9.2 4.7-3.3 10-2 13.3-.2-4-1.2-7.5-1-11.3.6zm17.3-13c-3.5-1.9-7-3.5-11.9-4 .5 2.7 3.8 8.5 6.9 11.7-5.1-3.3-9-9.9-8.8-13.4 3.4-.1 11.9 2.6 13.8 5.7zM40.6 85.2A195.4 195.4 0 0 1 28.2 67c-6 8.7 3.2 26 6.9 34.4-5.6-7.8-16-28.7-6.5-37.4 4 7.4 7.6 14.5 12 21.2zM12.6 193c2.2 4.6 13 6 18.7 6.2-10 .6-18.7-1.8-21.5-6.5 4-3.9 12.5-6 17.5-5.8-4.7.7-11.4 2.5-14.7 6.1zm-2.8-22c1.7 3.5 9.2 8.4 17.5 11-6.9-.7-18.5-6-20.9-11.9a37.3 37.3 0 0 1 21.5-.6A40 40 0 0 0 9.8 171zm17-20.3c-6.6-1.3-9.7-3-18.3-2.5a40 40 0 0 0 17 14.5c-11-3.6-19-11.6-20-16.1 6.8-.7 15.1 1.3 21.2 4zm4.9-18c-4-2.2-14.9-6-20.9-6.6 2.5 10.7 9.7 14.3 15.6 18.6C19.6 141 8.6 132.9 9 124c7.6.7 16.7 4 22.8 8.6zm1.9-18.5c-5.1-3.8-12.9-13.3-18.3-16.7-1.3 11.8 8.5 22.4 11.9 26.1-6.2-5-16.5-17-12.9-28.9 7 3.5 13.7 13.8 19.3 19.5zm8.6 131.4c3.8.3 6.6 1.6 10.1-2.3-4 5.5-7.2 3.5-11.1 3.6-.7-5.5-1.3-7 3.8-10.6-3.2 3.2-3 5.4-2.8 9.3zm63.9 13.6c3-2.6 6.5-.9 6.5-7 .9 7.9-3.5 5.8-6.7 8.5-3.8-3.5-6.6-1.3-5.1-9-.2 5.9 2.3 4.3 5.3 7.5zm-24 3c3.6-1.7 7-.7 8.8-6.6-1.4 8-5.4 6-9.1 8.1-3-4.6-5.8-3.2-2.3-10.3-1.4 5.4.5 5 2.6 8.9zM61.8 256c4-.9 6.7.6 9-5-2.3 7.8-5.8 5.1-9.9 6.6-1.9-5.1-4.5-4.7.2-11-2 4.7-.8 5.3.7 9.4zM97 190.6l1 .4v1.2s-4.5 3.2-9 4.3c2.6-2.2 5.2-4.2 8-6zm28.2 9.9.9-.9 1 .4s.9 3.3.6 8l-2.5-7.5zm-10.8.9 1.3-.6.9.9s-.6 3.6-2 6.5l-.2-6.8zm-9.8-4.1 1.3-.2.4 1s-1.3 3-4.6 6.2l2.9-7zm24.4 14.9c1.4-2.4 4.4-2.4 3.5-5.1 1.7 4.3-2 3.6-3.2 6.7-3-1.8-6 .1-7-4.6 1.4 3.3 4.3 2 6.7 3zm-37.1-70.3c-2.8-1.7-5.4-3.4-7.3-5.5-1.2 6 3.5 15.1 5 16.5-5.3-4.7-8-12.5-6.3-19.9 2.7 3 5.8 5.8 8.6 9zm-9.5 20c-.2 2.8 1.7 6.2 4 8.5-3.3-1.8-6-6.6-5.6-9.2 2.3-1.5 6.6-2 11 0-3-.9-6.8-1-9.4.7zm-1.2 17.3c.9 2.1 2 5 4.7 6.7-3.5-.8-5.4-3.7-6.4-6.7 1.7-2 4.6-5 9.3-3.8-3 .3-5.5 1.6-7.6 3.8zM85 198c3 1.3 5.6 3.5 8.5 1.9-3.4 3-6.6-.4-10-1.3 1.4-5.1-.5-6.4 5-8.2-3.5 1.5-2.8 4.4-3.5 7.6zm14.3 10.2c3.1-.6 5.4 2 7.2-.4-2.5 4-4.7.6-8 1.7-.5-3-4.4-3.9-1.4-7.7-1.9 3 1.5 4 2.2 6.4zm15 4.3c2.1-2 4.8-1 5-3.5.2 4.6-3 2.9-5 5-1.4-2.1-5.3-1.2-4.5-5.8-.1 3.4 3.1 2.5 4.6 4.3zM96 181l.6 1-1 .9c-2.4 0-5-1.4-9.9-2.4l10.3.5zm1.9-11.3v1.3l-1 .5c-1.8-1-4.6-3.5-8-6 3.1.8 6.3 2.3 9 4.2zm-6.6-23.4s12.4 11.1 12.3 10.8l-.2 1.8-1.3.4c.2-.1-8.5-8.9-10.8-13zm179.5 34.7-.7 1 .9.9c2.3 0 5-1.5 9.8-2.5-2.4-.5-10 .6-10 .6zm-29.2 19.4-.9-.9-1 .4s-.9 3.3-.6 8l2.5-7.5zm10.5.9-1-.6-.9.9s.6 3.6 2 6.5v-6.8zm10.1-4.1-1.3-.2-.4 1s1.3 3 4.6 6.2c-.7-2.4-1.6-4.8-2.9-7zm7.5-6.7-1 .4v1.2s4.5 3.2 9 4.3l-8-6zm5-44.7-11.5 11.3v1.7l1.3.4s8-9.4 10.3-13.4zm-6 24v1.2l1.1.5c1.8-1 4.5-3.5 8-6-3 .8-6.4 2.3-9 4.2zm-30.9 42.3c-1.6-2.4-4.5-2.4-4-5.1-1.4 4.3 2.1 3.6 3.4 6.7 3-1.8 6.2.1 7-4.6-1 3.3-4.2 2-6.4 3zm37-70.3c2.7-1.7 5.4-3.4 7.3-5.5 1 6-3.7 15.1-5.1 16.5 5.4-4.7 8-12.5 6.4-19.9-2.6 3-5.7 5.8-8.6 9zm9.5 20c.1 2.8-1.8 6.2-4 8.5 3.2-1.8 6-6.6 5.6-9.2-2.4-1.5-6.6-2-11 0 3-.9 6.9-1 9.4.7zm1.3 17.3c-.9 2.1-2 5-4.7 6.7 3.5-.8 5.4-3.7 6.6-6.7-1.8-2-4.7-5-9.5-3.8 2.9.3 5.5 1.6 7.6 3.8zm-3.8 18.8c-3 1.3-5.6 3.5-8.6 1.9 3.5 3 6.5-.4 9.9-1.3-1.3-5.1.6-6.4-5-8.2 3.7 1.5 2.8 4.4 3.7 7.6zm-14.5 10.2c-3-.6-5.4 2-7-.4 2.3 4 4.7.6 7.9 1.7.4-3 4.4-3.9 1.3-7.7 2 3-1.3 4-2.2 6.4zm-15 4.3c-2-2-4.7-1-5-3.5-.1 4.6 3 2.9 5 5 1.6-2.1 5.4-1.2 4.5-5.8.3 3.4-3 2.5-4.5 4.3zM232.4 237c3-1.8 6.9-1.7 6.6-6.4-.6 3.2-3.5 3.2-6.4 4.7-1.8-2.2-3.7-2.5-3.3-6-1.7 4.4 1.2 4.8 3.1 7.7zm64.9-113.5c2.2-1.4 5-4.3 5.4-5 1.3 5.5-4.3 16.3-8.5 20.4 9.2-7.8 12-18 9-24.7a42.3 42.3 0 0 1-6 9.3zm-.6 20.5c3.5-1.9 7.1-3.5 11.8-4a33 33 0 0 1-7 11.7c5.1-3.3 9-9.9 8.8-13.4-3.4-.1-11.4 2.6-13.6 5.7zm17.5 13c-.7 4-5.1 7.6-8 8.8 4.4-1 8.7-4.6 10-9.2-4.8-3.3-10-2-13.4-.2 4-1.2 7.5-1 11.4.6zm-.7 18.3c-1.3 2.9-5.1 5.4-8 6 4.2-.2 8.1-2.7 9.7-6.2-2.2-3.5-8.4-5.1-12.5-3.6 3.8-.2 8.3.4 10.8 3.8zm-3.5 15.9c-1.8 2.3-6 3.3-9 3.5 4.6.4 8.5-.6 10.6-3.4-2-4-5.4-5.8-10.1-5.4 4 .6 6.9 1.5 8.5 5.3zm-6.6 13.7c-2.5 1.8-5.6 2.8-8 2 4 2.1 7 0 9.6-1.4-1-4.4-2.2-6.9-6.9-7.3 4 1.2 4.1 3.5 5.3 6.7zm-11.8 13.5c-3.2 0-6 .7-8-2 2.7 4.4 6 2.7 9.4 3.6 1-5.4 2-7.2-2.5-10.4 2.8 3 2 5.2 1 8.8zm-12.7 8.7c-3.3-.1-5.2 0-7-2.5 1.8 4.7 4.6 3.2 7.8 3.8 1-3.2 3.7-4.2.2-8.4 2 3.2 0 4.3-1 7.1zm-13.5 6c-3-1-5.8-.9-7-4 .4 4.6 4.4 4.3 7.3 5.5 1.3-2.8 5-4.3 2.3-8.4 1 3.5-1 4.4-2.6 7zm-17 2.6c-2.7-1.6-4.9-1.7-5.3-5.4-.8 5.9 2.9 4.7 5.4 7 2.3-2.3 6.5-1.9 5.5-7.3.3 4-3.5 3.8-5.5 5.7zm77.8-150.6A170 170 0 0 0 338.6 67c6 8.7-3.2 26-6.9 34.4 5.6-7.8 16.1-28.7 6.5-37.4-3.8 7.4-7.8 14.5-12 21.2zm-65.5 174c-3-2.6-6.4-.9-6.4-7-.9 7.9 3.4 5.8 6.4 8.5 4.1-3.5 7-1.3 5.4-9 0 5.9-2.4 4.3-5.4 7.5zm24 3c-3.7-1.7-7.3-.7-8.8-6.6 1.3 8 5.4 6 9 8.1 3-4.6 5.8-3.2 2.4-10.3 1.3 5.4-.6 5-2.6 8.9zm20.2-6.2c-4-.9-6.6.6-9.1-5 2.5 7.8 5.8 5.1 10 6.6 1.8-5.1 4.5-4.7-.2-11 2 4.7.7 5.3-.7 9.4zm19.7-10.4c-3.8.3-6.6 1.6-10-2.3 3.6 5.5 7 3.5 11.1 3.6.6-5.5 1-7-3.9-10.6 3.2 3.2 3 5.4 2.8 9.3zm14-15.5c-3.5.5-5.4 2.5-9.5 1.5 5.1 2 6.4.6 11-.1-.6-4.7-1.4-7.6-7-11 4 2.3 4.2 5.5 5.5 9.6zm9.6-18.2c-5 3.6-11.5 2.8-15.4 2 4.6 2 12.5 2.5 17.8-1.6a17 17 0 0 0-13.9-8.5c4.4.8 9.2 4.1 11.5 8zm6-18.9c-2.2 4.6-12.8 6-18.7 6.2 10 .6 18.7-1.8 21.5-6.5-4-3.9-12.6-6-17.5-5.8 4.7.7 11.4 2.5 14.7 6.1zm2.8-22c-1.7 3.5-9.2 8.4-17.5 11 6.8-.7 18.7-6 20.9-11.9a37.3 37.3 0 0 0-21.5-.6c5.7-.4 12.4-.9 18.1 1.5zm-17-20.3c6.8-1.3 9.7-3 18.3-2.5-2 4-10.5 11.8-17.2 14.5 11.2-3.6 19-11.6 20-16.1a41.8 41.8 0 0 0-21 4zm-4.9-18c4-2.2 14.9-6 20.9-6.6-2.5 10.7-9.7 14.3-15.6 18.6 7-3.7 17.8-11.8 17.6-20.6-7.7.7-16.8 4-22.9 8.6zm-2.5-19.6c5.1-3.8 13.5-12.4 18.9-15.6 1.3 11.8-8.5 22.4-11.9 26.1 6.2-5 16.5-17 13-28.9-7.1 3.4-14.4 13-20 18.4zM216.3 214.8l-.3.9c-.7.1-.7.1-.7-.5l1-.4zm-19.5-13.1h.5c-.7.5-2.6 2.1-3.2 2.1l2.7-2.1zm2.3-2c-.1.5-.4 1-1.3 1.5 1-1.3-1.8-.3-2-.6l3.3-.8zm8.6-5c-.9-.4-2.6-.2-3.5.2l-.4-.4c1.1-.7 3.2-.7 4 .1zm-25.6-.3c.5 0 1.3.1 1.7.4l-.4.2-1.3-.6zm.2-7c1.3.2 2 1.1 3.2 1.4 0 0 1.8-.3 2 .6-.2.7.2 2.5-.5 2.8-.2-1-.5-1.8-.9-2.2-.6-.6-3.2-1.8-3.2-2-.6.2-1.5 1.2-2.2 1.2.7-.4 1.6-1.7 1.6-1.7zm.4 3.4c.5.1.8.5 1.3.5 0 0-.2.3-.6.5l-1.3-.6c.1-.4.6-.4.6-.4zm-34-18.7c2.5-2.4 3-4 5.4-6.8-1 2.9-3 5-5.4 6.8zm-15.6 5.6c-2 .6-3.8.4-5.4 0 0 1.3.8 4.7 3.6 6.9-4-1-6.1-6.6-4.7-9 1.8 1.4 4.3 2.1 6.5 2.1zm-30.4-72.9c1.4-.4 1.3.2 1.3.9-1.7 0-3 .4-4.5.9.4-1 .9-2.8 2.8-3.5 1.7-.5.1 1.4.4 1.7zm161.4 0c-1.5-.4-1.3.2-1.3.9 1.7 0 3 .4 4.5.9-.4-1-.9-2.8-2.8-3.5-1.7-.5-.1 1.4-.4 1.7zm-46.2 67.3c-2.3-2.4-3-4-5.4-6.8 1.2 2.9 3 5 5.4 6.8zm15.8 5.6c2 .6 4 .4 5.4 0 0 1.3-.9 4.7-3.6 6.9 4-1 6.1-6.6 4.6-9-1.7 1.4-4.2 2.1-6.4 2.1z" data-v-eb6c4a1f></path><path fill="gold" stroke="#000" stroke-miterlimit="10" d="M183.1 145.8h.5c9 0 17 .9 26 9 8.9 8.2 12.9 18.2 19.3 20.7 6.5 2.5 14.6 4.5 21.7 1.7 2 3.3 3.4 7.9 2.2 11.8s-5.5 9.7-7.5 12-5 6.5-5 10.7 1.3 12.2 6.3 17.2c0 0 0 27.2-12.7 41.5a107 107 0 0 1-37.5 27.6c-12 5.7-12.9 13.4-12.9 13.4h-.1s-.8-7.7-12.8-13.4a107 107 0 0 1-37.6-27.6c-12.6-14.3-12.6-41.5-12.6-41.5 5-5 6.2-13 6.2-17.2 0-4.2-3-8.5-5-10.7s-6.4-8.1-7.5-12 .3-8.5 2.3-11.8c7 2.8 15.1.8 21.6-1.7 6.5-2.5 10.5-12.5 19.4-20.7 9-8.1 17-9 26-9h.4" data-v-eb6c4a1f></path><path fill="#C00" d="M183.5 301.8c-2-.1-2.2-2.8-2.2-3.6 0-1 .3-1.5.7-2.2l.6-1V288c-1.2-2-3-3-3.8-3.3-.3-1.4-2.8-3.4-6.4-3.4a6 6 0 0 0-5.4 3.1 65.1 65.1 0 0 1-36.4-53.4c6.3-11 9.1-25.4 1.2-33.1-5.6-5.5-6.8-9.5-7.1-11h1.5c4 0 12.6-1.5 18-4.9 6.2-4 13.4-12.4 15.8-15.2l.5-.6c2-2.3 5.2-3.6 6-3.8 1.2.9 2.6 1.3 4 1.3.8 0 1.4 0 1.9-.2.4.8 1.6 1.1 3.8 1.1 3.4 0 6.1-5 7.3-7.5 1.2 2.7 4 7.5 7.2 7.5 2.3 0 3.5-.3 3.8-1a7.6 7.6 0 0 0 1.9.2c1.4 0 2.8-.5 3.9-1.4a26 26 0 0 1 10.5 8.4c3.4 3.7 7.5 8.4 12 11.2a39.9 39.9 0 0 0 19.5 4.9c-.3 1.5-1.6 5.5-7.2 11-7.9 7.7-5 22.2 1.2 33a65.2 65.2 0 0 1-36.4 53.6 6 6 0 0 0-5.3-3.1c-3.6 0-6.1 1.9-6.5 3.4-.7.3-2.6 1.2-3.7 3.2V295.1l.5 1c.4.6.7 1.2.7 2 0 2.5-.7 3.7-2.1 3.7z" data-v-eb6c4a1f></path><path d="M183.5 158.2c1.4 2.9 4 6.8 7.2 6.8 2.2 0 3.5-.3 4-1l1.7.2c1.4 0 2.8-.5 4-1.3a25.4 25.4 0 0 1 10 8.1c3.4 3.8 7.6 8.5 12.1 11.4a40.5 40.5 0 0 0 19.1 5c-.5 1.7-2 5.3-6.8 10-8.1 8-5.3 22.5 1 33.6 0 1.6-.7 10.2-5 20.3a62.2 62.2 0 0 1-30.7 32.4c-.8-1.1-2.5-3-5.5-3-3.7 0-6.3 2-6.9 3.6-.9.4-2.7 1.4-3.7 3.4l-.1.5v7.1l.6 1c.4.7.6 1 .6 1.9 0 2-.5 3-1.6 3-1.6 0-1.7-2.3-1.7-3 0-.8.3-1.3.7-2l.5-1 .1-.4v-6.7l-.1-.4c-1.1-2-2.9-3-3.8-3.4-.6-1.7-3.1-3.6-6.8-3.6-3 0-4.8 1.9-5.6 3a62.2 62.2 0 0 1-30.7-32.5 65.3 65.3 0 0 1-5-20.2c6.4-11 9.1-25.7 1-33.6a23.8 23.8 0 0 1-6.8-10h1c4 0 12.6-1.6 18-5a86 86 0 0 0 16-15.4l.6-.6c1.7-2 4.5-3.2 5.6-3.6 1.2.9 2.6 1.3 4 1.3a8 8 0 0 0 1.7-.1c.6.7 1.8 1 4 1 3.3 0 5.9-4 7.3-6.8m0-2.4s-3.3 8.2-7.3 8.2c-4.2 0-3.3-1.3-3.3-1.3s-1 .4-2.3.4a5.7 5.7 0 0 1-3.9-1.4 15 15 0 0 0-6.6 4c-1.5 1.8-9.5 11.5-16.2 15.8a39.6 39.6 0 0 1-17.7 4.9c-1.1 0-1.9-.2-2-.4 0 0-.3 4.6 7.3 12.1s4.9 21.9-1.4 32.6c0 0 1 37.4 37.1 54.3 0 0 1.4-3.3 5.2-3.3s6 2.2 6 3.3c0 0 2.4.8 3.7 3.1v6.7c-.6 1.3-1.3 1.9-1.3 3.4 0 2.3 1 4 2.7 4 1.8 0 2.6-1.5 2.6-4 0-1.5-.7-2.1-1.3-3.3v-6.7a7.4 7.4 0 0 1 3.8-3.2c0-1.1 2.2-3.2 6-3.2s5.1 3.2 5.1 3.2c36.1-16.9 37.1-54.2 37.1-54.2-6.2-10.8-9-25.2-1.3-32.7s7.3-12 7.3-12c-.2.2-1 .3-2 .3-4 0-12.5-1.6-17.7-4.9-6.8-4.2-13-13-16.3-15.7a26 26 0 0 0-6.6-4 5.7 5.7 0 0 1-3.8 1.4c-1.3 0-2.3-.4-2.3-.4s.9 1.2-3.4 1.2c-4 0-7.2-8.2-7.2-8.2zm0 146.5c-.1 0 0 0 0 0z" data-v-eb6c4a1f></path><path fill="none" stroke="#000" stroke-linejoin="bevel" stroke-miterlimit="10" d="M165.3 149.3c5-1.8 11.2 1.7 11.2 7.6 0 5.2-4 6.5-4 6.5m-1.5-4.9c.6-1.2.8-4.1-3-4.2-3.9 0-5.3 5-1.7 8m-2.4-3.6c-7.5.6-13 16.8-24.9 21.6-6.3 2.5-18 2.1-18 2.1-4.9 10 10.3 16.8 11.4 24.2a35 35 0 0 1-5.8 23.9s-2.2 35.4 36.2 55.3m-35.6-107.5c19.7 4.6 28-30.1 40.8-24M118.6 178s-2.5 5.1-2.5 8.4c0 8.1 12.9 15.2 13.5 24.3.8 10.3-6.5 19.6-6.5 19.6s-1.7 44 45.6 61.6m-4.3 3c5.3 1.6 15.6 3.8 14.2-10.2m-11.7-.5c-1 2.4-1.7 6.8 2.3 7.8s6.2-1 6.2-3.6c0-2.4-4-4.6-5.5-.8" data-v-eb6c4a1f></path><g fill="gold" stroke="#000" stroke-miterlimit="10" stroke-width=".3" data-v-eb6c4a1f><path d="M184.3 276.7h-1.6a1.9 1.9 0 0 0-1.9 1.9v.8c0 1 .9 2 1.9 2h1.6a1.9 1.9 0 0 0 1.9-2v-.8a1.9 1.9 0 0 0-1.9-2z" data-v-eb6c4a1f></path><path d="M185.4 277.5h-3.8a1 1 0 0 1-1-1v-65.3c0-.5.4-1 1-1h3.8c.6 0 1 .5 1 1v65.3c0 .6-.4 1-1 1z" data-v-eb6c4a1f></path><path d="M180 229.9v5.6l7-7.7v-5.6" data-v-eb6c4a1f></path><path d="m187.5 213-8 8.1v9.4l8-8.5zm-7.5 40.2v5.6l7-7.7v-5.6" data-v-eb6c4a1f></path><path d="m187.5 236.2-8 8.2v9.4l8-8.5zm-7.5 36.4v5.6l7-7.7v-5.6" data-v-eb6c4a1f></path><path d="m187.5 259.8-8 8.2v5.2l8-8.5z" data-v-eb6c4a1f></path></g><path fill="none" stroke="#000" stroke-linejoin="bevel" stroke-miterlimit="10" d="M201.6 149.3c-5-1.8-11.2 1.7-11.2 7.6 0 5.2 4 6.5 4 6.5m1.5-4.9c-.6-1.2-.8-4.1 3-4.2 3.9 0 5.3 5 1.7 8m2.4-3.6c7.5.6 13 16.8 24.9 21.6 6.3 2.5 18 2.1 18 2.1 4.9 10-10.3 16.8-11.4 24.2a35 35 0 0 0 5.8 23.9s2.2 35.4-36.2 55.3m35.6-107.5c-19.7 4.6-28-30.1-40.8-24m49.4 23.7s2.5 5.1 2.5 8.4c0 8.1-12.9 15.2-13.5 24.3-.8 10.3 6.5 19.6 6.5 19.6s1.7 44-45.7 61.6m4.4 3c-5.4 1.6-15.6 3.8-14.2-10.2m11.7-.5c1 2.4 1.6 6.8-2.3 7.8s-6.2-1-6.2-3.6c0-2.4 4-4.6 5.5-.8" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M173.7 175.8zm19.6 0z" data-v-eb6c4a1f></path><path d="M159.3 196v-.3a.3.3 0 0 1-.2 0l.1.4zm17.8 14z" data-v-eb6c4a1f></path><path d="M210.3 188a5 5 0 0 0-2.9-.4c1.8-.6 3-2 3-3-1-.3-1.9-.2-2.7 0 .9-.7 2.3-1.8 2-3.5-.7-.2-2.2.4-2.9.6 2-1 2.8-3.7 1.7-5.3-.6.4-3.5 3.3-4 3.7 1.5-1.7 2.2-3 2.6-4 .5-1.3.5-3.5-1-4.2-.7 1.7-3.3 6-4.7 7.7-.1-.2-.3-.4-.5-.4-.3 1.1-1.3 2.5-2.2 3.2l-.3-.6c-1 1.5-3.5 3.4-4.3 4.7-.6.9-.6 1.7.3 2.5.3.4 1 1 .4 1.9-1 1.4-3 1.3-3.7.1 1.4-.1 1.8-1.8 1-2.7-.4.6-1.2.9-2 .6-.5-.2-.8-.5-1-.7 1 .3 2-.3 1.9-1.4-1 .7-1.8 0-2-.2-.5-.6-.7-1.4-.5-2.5.2-1 1.2-2.5 1.9-3 0 .1.2.3.5.3l.8-.3c.6-.2 1.3 0 1.7.2.7.5.7 1 .7 1.4 1.1-.7.7-1.8-.8-2.2 1 0 1.9 1 2.1 1.1.6.4 1.4.3 1.9 0 .9-.4 1-1.4.8-1.6 0 .3-.4.7-.9.8-.8 0-1.5-.3-2.1-.6-.5-.2-1.3-.3-1.9-.3 1-.6 2.6-.5 3.2.4.4-.3.6-.6.7-1.1.3-1.6-1-2.4-2.2-2.4 0-.3-.3-.5-.6-.4l-.1-.3c1.4-.1 2.6-.5 3.2-1.2 1.2-1.3-.6-2.8 0-4 .6.2 1.1.6 2 .7l.2.8c.3 1.3-1.1 1.6-.8 3 .2.7.7.9.9 1.7 0 0 0 .5-.4 1 1 0 1.6-1 1.3-1.8-.1-.4-.5-.7-.5-1.1.5.7 1 .7 2 .5.3-.2.4.4.1.8.6-.3.8-1 .8-1.2 0-.6-.5-.9-1-.8-.2 0-.8.4-.8 0-.1-1 1.3-1 1-2.4-.2-.7-1-1-2.2-1.2l-.6-.7c-.7-1-1.4-1.4-1.8-1.1l-1.1.7c-.3.1-.7.2-.9.5-.5.6 0 1.7.3 2.3.1.4.6 1.2.4 1.8-.2.8-1.5 1.3-2.2 1.4h-.2v-.3l.6-1.2c.5-1.4-.2-2-1.4-2.2a.5.5 0 0 0-.4 0v.2h-.2v-.3a.5.5 0 0 0 .1-.5.6.6 0 0 0-.1-.3h.1v-.1l-.2-.2a.2.2 0 0 1 0-.1l.2.2.1.1v-1.3.1a1 1 0 0 0-.3.2.5.5 0 0 0 .2-.3h-1.2l.2.2.1.2-.1-.1-.2-.2h-.1v1.2l.3-.3a.6.6 0 0 0 .1 0l-.3.3h.2l-.2.4.2.5v.2h-.2v-.2a.5.5 0 0 0-.5.1c-1.1.3-1.9.8-1.4 2.2l.6 1.2v.2c-1.1-.3-3.2-1.6-3.7-2.3l-.2-.2v-.8c.5-.7.8-1.5 1-2.3.8-1.9-.2-2.7-2-3a.8.8 0 0 0-.6-.1v.3h-.4v-.5h-.2c.2 0 .4-.4.4-.7l-.3-.6h.3a2 2 0 0 1-.5-.7l.7.6v-1.6l-.7.4.5-.6h-1.6c.1.1.5.4.5.6l-.7-.4v1.6l.7-.6c0 .3-.4.6-.5.7h.3l-.3.6c0 .3.2.6.4.8h-.2v.3h-.3v-.2a.7.7 0 0 0-.7 0c-1.7.4-2.8 1.2-2 3.1a9.5 9.5 0 0 0 1 2.3v.8l-.2.2c-.5.7-2.6 2-3.7 2.3v-.2l.6-1.2c.5-1.4-.3-2-1.4-2.2a.5.5 0 0 0-.5 0v.2h-.2v-.3a.7.7 0 0 0 .2-.5l-.1-.3h.1a2.7 2.7 0 0 1-.3-.4l.4.3v-1.3a1.5 1.5 0 0 1-.4.4c0-.2.2-.3.3-.4h-1.2l.3.4-.4-.4v1.3l.4-.3a1.6 1.6 0 0 1-.3.4h.2a.6.6 0 0 0-.2.3c0 .2 0 .4.2.5v.2h-.2v-.2a.5.5 0 0 0-.5.1c-1.1.3-2 .8-1.4 2.2.2.4.3.9.6 1.2v.3h-.1c-.8-.1-2-.6-2.3-1.4-.2-.6.3-1.4.5-1.8.2-.6.7-1.7.2-2.3-.2-.3-.6-.4-.9-.5l-1.1-.7c-.4-.3-1.1 0-1.8 1.1l-.6.7c-1.2.2-2 .5-2.2 1.2-.3 1.5 1.1 1.4 1 2.3 0 .5-.5.2-.8.1-.5 0-1 .2-1 .8 0 .3.2.9.8 1.2-.3-.4-.2-1 .2-.9.9.3 1.4.3 2-.4 0 .4-.4.7-.6 1.1-.3 1 .2 1.8 1.3 1.8-.5-.5-.4-1-.4-1 .2-.8.7-1 .8-1.7.4-1.4-1-1.7-.7-3l.2-.8c.9-.1 1.4-.5 2-.7.6 1.2-1.2 2.7 0 4 .6.7 1.8 1 3.1 1.2h.1l-.1.3c-.3-.1-.6 0-.6.4-1.3 0-2.5.8-2.2 2.4.1.5.3.8.7 1 .6-.8 2.2-.9 3.2-.3a5.2 5.2 0 0 0-1.9.3c-.6.3-1.3.6-2.1.6a1 1 0 0 1-1-.8c-.2.2 0 1.3 1 1.7.4.2 1.2.3 1.8 0 .2-.2 1-1.2 2-1.2-1.4.4-1.9 1.5-.7 2.2 0-.4 0-1 .7-1.4a2.2 2.2 0 0 1 1.7-.2l.7.3c.3 0 .5-.2.6-.3.6.5 1.6 2 1.8 3 .3 1.1 0 1.9-.5 2.5-.1.2-1 1-2 .2 0 1 .9 1.8 2 1.4l-1.1.7c-.7.3-1.5 0-1.9-.6-.8 1-.4 2.6 1 2.7-.7 1.2-2.8 1.3-3.7-.1-.6-.9 0-1.5.4-1.9.9-.8.9-1.6.2-2.5-.8-1.2-3.3-3.2-4.2-4.7a3.2 3.2 0 0 0-.3.6c-1-.7-2-2.1-2.3-3.2-.2 0-.3.3-.5.4a51 51 0 0 1-4.6-7.7c-1.6.7-1.5 2.9-1 4.1.3 1.2 1 2.4 2.5 4-.5-.3-3.3-3.2-4-3.6-1 1.6-.3 4.2 1.7 5.3-.6-.2-2.1-.8-3-.6-.1 1.7 1.3 2.8 2.1 3.5-.8-.2-1.8-.3-2.6 0 0 1 1.2 2.4 2.9 3-1-.1-2.2 0-2.8.4 0 1.2 1.5 2.2 3 2.5-1 .1-2 .6-2.5 1.2.6.8 1.5 1.4 2.8 1.4-.3 0-.6.3-1 .6a.2.2 0 0 0-.1.1.6.6 0 0 0-.3.4l-.3.6h.1a.4.4 0 0 0 .1.4.6.6 0 0 0-.1.2l-.8-.3c0 .8 0 1.3.4 1.7l.6.4.8.5c.2.3.5.3.7.2 0 .4.2.7.5.8 0 .3.1.5.5.6l3.2 7.7c-.1.4 0 .7.3.9-.1 0-.2.1-.2.3.2 0 .4-.1.4.2.1.1-.2.7.3 1.1a.8.8 0 0 0 .5.9l.2 1c-.3.3-.8.8-.7 1.4 0 .3.2.5.5.5-.1.7.3 1 .8 1 0 .6.5.8.8.8l.8.5c-.3.3-.1.8.4 1 .1.2.3.4.6.4.2.3.5.3.7.3.1-.1.4-.5.2-.8v-.6c.1-.3 0-.8-.3-.9l-.1-.6 1.2-.8c1-.8 2.3-1.5 3.7-1.6a15 15 0 0 1 1.4 0c.6 0 1.3.3 1.8-.1l.2-.4c0-.3-.5-.7-.6-1l-.1-.4a1.7 1.7 0 0 0 1 0c.2-.1.8-.6.8-1.2-.5.2-1.6.5-1.8-.7-.1-1 .8-1.9 2.2-1.5 1 .3 2.4 2.3 1.1 3.2-.6.4-1.6.8-1.5 2 .4-.5 1-.8 1.7-.7-1 .8-1.9.9-3 1.5-1 .5-1.7 1.5-2.4 1.5-.6 0-1-.7-.3-1.2-.6-.1-1.4.3-1.6 1-.3.8 0 1.3.5 1.7-.7.3-1.3 1-1 2 .2 1 1 1 .8 2 .4-.1.7-.4.9-.9 0-.3.1-.7.3-.8-.1.6.2 1.6 1.1 2 .6.3 1.6.4 2.3-.3.3.8 1.3 1.5 2.3 1.5.5 0 1-.2 1.3-.4.3.6.9 1.3 1.5 1.6.7-.3 1.3-1 1.6-1.6.3.2.8.4 1.2.4 1 0 2-.7 2.4-1.5.7.7 1.6.6 2.2.3.9-.4 1.3-1.4 1.2-2 .2.1.2.5.3.8.1.4.4.8.9.9-.3-1 .5-1 .7-2 .3-1-.2-1.7-.9-2 .5-.4.7-1 .4-1.8-.2-.6-1-1-1.5-.9.6.5.3 1.2-.3 1.2-.8 0-1.5-1-2.5-1.5-1-.6-1.9-.7-3-1.5.8 0 1.3.2 1.7.7.1-1.1-.8-1.6-1.5-2-1.2-.9.2-3 1.2-3.2 1.3-.4 2.3.5 2.1 1.5-.1 1.2-1.3.9-1.8.7 0 .6.6 1 .9 1.2.3 0 .8.2 1.3 0v.2c-.1 1-.7 1.2-.5 1.6.3.3 2 .2 2.4.3.9.1 1.5.4 2.3.6.9.2 1.8.2 2.6.5l1.6.9c.7 0 .6.4 1.1.4.4 0 .6-.4 1.2-.5h1.2l.6-.6 1-.4c.2-.2.2-.4.2-.6.6-.4 1-1 1.3-1.7a.3.3 0 0 0 .3-.3.6.6 0 0 0 .2-.6.8.8 0 0 0-.2-.5v-.1l-.2-.3a3.5 3.5 0 0 0-2.5-2.8l-.1-.1-.5-.7c.3 0 .6.4.8.6v-1.8c-.2.1-.5.5-.8.5 0-.2.4-.6.6-.7h-1.8c.2.1.5.5.5.7-.2 0-.5-.4-.7-.5v1.8l.7-.6c0 .2-.3.6-.5.8a3.5 3.5 0 0 0-2.6 2.8c-.1 0-.2.1-.2.3-.1.2-.2.4 0 .6 0 .2 0 .3.2.5 0 .2.1.3.3.3l.2.5c-.1.5-.7.8-.8.8-1.1.2-2.4-.3-3.5-.7-.5-.2-1.1-.4-1.4-.9-.2-.3-.3-.5-.2-.8l.6.4v-.4c.3.4.8.6 1.3.6-.3-.3-.5-1-.3-1.7.4.8 2.1 1 2.4-.4-.6.3-1 0-1.1-.4-.2-.5.4-1.8-.2-2.8-.4-.8-1-1.2-2-1.4v-.5c-1 .4-2 0-2.4-.8l.8.1c-1-.8-.9-3-.2-4.1l.2-.2c.3.4.9.4 1.2.8l.3-.2s0 1.8.2 2.5c0 .9.9.8 1.3 1.2.5-.6 1.4-.5 1.2-1.5 0-1-.3-1.8-.3-2.4.3.6.8 2.7 1 3.3.4 1 1.3.7 1.8 1 .3-.6 1-.8.8-1.8l-1.7-3.5 2.2 3.8c.5.7 1.3.4 1.9.6 0-.5.9-1.2.3-2-.7-1.3-2.4-3.3-2.5-3.6l3.1 3.7c.7.5 1.6.1 2 .1 0-.6.5-1.2-.1-2-.7-.5-2.1-1.5-2.4-2 1 .8 2 1.8 2.7 2 1.2.3 1.7-.2 2.1-.4-.3-1 .1-1.6-2.4-2.6 2.2.8 3.2.4 4-.3-.4-.7-1.1-1.4-1.8-1.6 1.4 0 2.3-.6 2.8-1.4-.4-.6-1.4-1.1-2.6-1.2 1.7-.3 3-1.3 3.2-2.5zm-36.8 15 .1.5c-1.1.2-1.6.7-2 1.4-.7 1 0 2.3-.2 2.9-.1.3-.5.6-1.2.3.3 1.4 2 1.2 2.5.5.2.6 0 1.3-.3 1.6a1.3 1.3 0 0 0 1.2-.6l.1.5a1.8 1.8 0 0 0 .6-.5c0 .1.1.5 0 .8l-.8.5c-.6.3-1.8.7-2.5.8-.5.1-1.4-.2-1.7-1-.2-.7-.8-.9-1.3-.4-.1-.1-.4-.2-.6 0l-.3-.5c.1-.4 0-.8-.3-1 0-.7-.5-.7-.7-1 0 0 0-.3.2-.3l-.3-.2c0-.3 0-.6-.5-.8l-3.1-6.4-.2-.3-.3-.8c.2-.2 0-.6-.2-.7v-.2h.4c.7-.3 1.8-1.3 2.8-2l-2.4 2c-.6.6-.4 1.1-.3 1.7l.2.3c.5 0 1.3.3 2-.1 0-.2 2.7-3.5 3-3.8 0 .3-1.7 2.4-2.5 3.6-.5.9.3 1.5.4 2 .6-.2 1.4.2 1.8-.5l2.2-3.9c-.2.5-1.6 3.3-1.6 3.6-.4 1 .5 1.1.8 1.8.5-.4 1.4-.1 1.7-1l1-3.4-.3 2.5c-.1.9.7.9 1.2 1.4.5-.4 1.3-.3 1.4-1.1l.1-2.6.4.2c.3-.3.9-.3 1.1-.7l.2.1c.7 1.2.8 3.4-.2 4.2.3 0 .7 0 .9-.2-.5 1-1.4 1.2-2.5.8zm4.7 14.9c-.7 0-1.3-.5-.9-1.1.2.3.6.4 1 .4v.7zm11.5-1.1c.4.6-.2 1.1-1 1.1v-.7c.4 0 .8-.1 1-.4zm-9.4-3.2c-.6.8-1 1.3-1.4 2.3-.7 0-.5-.9-.3-1.3.4-.8 2.2-1.9 3.1-3-.3.7-1 1.4-1.4 2zm2 1.4a16 16 0 0 0-.6 4.5c-1.2-.6-.5-3.2 0-4.3.7-1.5 1.2-3.4 1.3-4.6.4.9-.5 3.5-.7 4.4zm3 4.5c0-1-.2-3-.6-4.5-.2-1-1.1-3.5-.7-4.4.1 1.2.6 3 1.3 4.6.5 1.1 1.2 3.7 0 4.3zm3.1-4.9c.2.4.3 1.2-.3 1.3-.4-1-.8-1.5-1.4-2.3l-1.5-2c1 1.1 2.8 2.2 3.2 3zm-.3-37.3c-.7 0-1.3 0-2-.3.4.5.7.8 1.3 1-.6.8-1.9 1.3-3.1 1.1.3.4.9.6 1.4.6-1.2 1.8-2 3.6-2.2 5.8-.2-2.2-1-4-2.1-5.8.5 0 1-.2 1.3-.6-1.2.1-2.4-.4-3-1.1.5-.2.9-.5 1.2-1-.6.3-1.3.4-2 .3.9-.2 2.2-1 2.3-1.6-.2.3-2 .4-3 .4a9.4 9.4 0 0 0 4.2-2.2h2.2a9 9 0 0 0 4.2 2.2c-1 0-2.7-.1-3-.4.1.7 1.5 1.4 2.3 1.6z" data-v-eb6c4a1f></path><path d="m162.2 199.8.2.3-.2-.3zm-.3-4.6.5-.2c-.1 0-.3 0-.5.2zm-1.1.2h-.2.2zm-1.2 1.8.3.2v-.3h-.3z" data-v-eb6c4a1f></path><path fill="#C00" d="M183.6 206.6c-.3-1-1-1.8-2.2-1.8h-2.1c-1.4 0-2-.7-2-2.3v-13h12.6v13c0 1.6-.7 2.3-2 2.3h-2.2c-1 0-1.8.9-2.1 1.8z" data-v-eb6c4a1f></path><path d="M159.3 196.1v-.4a.3.3 0 0 1-.2 0c0 .3 0 .5.2.5z" data-v-eb6c4a1f></path><path fill="gold" d="M185 211c.7 1 1.7 1.7 2.6 2.4.4.3 1 .6 1.1 1.1.4.7.3 1.7-.5 1.8l-.4-.1.4.7c.6.4 1.3-.1 1.6-.5.7.7.4 1.7-.4 1.8-.8.2-1.8.1-1.7 1 .5-.3 1 0 1.3.4 1 .8 2.2.2 2.6-.7.2-.3.3-1.2.2-1.5 1 .4.7 1.4 1.1 1.8 0-.7.8-1 .9-1.5.2-.9-.5-2-1.8-2 .7 0 1.3-.3 1.4-.8 0-.9-.4-1.3-.8-1.5.3.6-.4 1.6-1.6 1l-1.9-1.4-3-1.5a2.9 2.9 0 0 1-1.4-2.4c-.3.7 0 1.3.4 1.9zm7.7-.4c0 .2.1.3.3.4 0 0-.2.2 0 .3 0-.1.1-.3.4-.1 0 0-.2.2-.1.3 0-.1.3-.3.6 0 0 0-.1.2 0 .2 0 0 .2-.3.4 0h.2l1.8.5c1 .3 2 .4 2.6-.5l.3.3h-.3c.1.2.7.2.5.6l-.4-.2.3.2-.3.1v.3c.4 0 1-.2 1.5 0-.2.3-.4.3-1 .4-.3 0 0 .2 0 .2h.3s0 .2.2.3c0-.2 0-.3.2-.3 0 0 0 .2.2.3-.1-.2-.2-.5 0-.5.1 0 .1.2.3.2 0-.1-.2-.3 0-.5l.2.2v-.3h.2c-.2-.5-.1-.7.1-.9.3-.2.8-.1.8.2a.5.5 0 0 1 0 .5l-.5.3c-.6.5-1 1-1.6 1.2-.3.1-.4-.2-1-.3l-1.6-1c-.8-.3-1.3-.2-1.4-.3-.2.1-.3-.1-.3-.2l-.1.2c-.4 0-.4-.3-.4-.3v.2c-.5 0-.5-.3-.5-.4v.3c-.3.1-.4-.3-.3-.4l-.1.3c-.4 0-.4-.3-.4-.4l-.1.3c-.4 0-.4-.3-.4-.5v.3c-.5 0-.5-.4-.5-.4l-.1.4c-.3 0-.3-.4-.2-.7-.2.2-.2.6-.2.6-.8 0-2-.1-2.2-.3-.1 0 .4-.5.4-1.8h.2c0 .3.1.4.4.6l.4-1c.2.8.6 1.1 1.2 1.1zm-15.6.2.5.6c.2.3 0 .5-.4.5h-2.7l-.1-.5c0 .4-.1.6-.4.6 0 0 .1-.3-.1-.5 0 .3 0 .6-.4.6.1-.2 0-.3 0-.4 0 .3-.1.5-.5.5a.4.4 0 0 0-.1-.4c0 .3 0 .6-.3.6l-.2-.4c0 .5 0 .6-.3.6l-.1-.4c0 .3-.1.6-.4.7l-.1-.5c0 .3-.1.6-.5.9l-1.5.9a9.8 9.8 0 0 0-.4-1.2c.3 0 .6.2 1 0l.6-.3a2.3 2.3 0 0 1-.7.2c-.7 0-1.2-.2-1.5-.8h.1c.2.3.7.4 1 .3-.4 0-.9-.3-1-.8.2-.1.2-.4 0-.5v.4l-.4-.4a.3.3 0 0 1 0 .2.6.6 0 0 1-.3 0l.4.3c.2.7-.5 1-.8.5-.2-.2-.2-.6 0-.7l.7-.9c.3-.3.7 0 .8.2.3.9.8 1.2 1.4 1.3.8.1 1.6-.2 2.5-.6.3 0 .3-.2.5 0v-.2c.1-.1.3-.1.4 0v-.2c.2-.2.4 0 .4 0 .1 0 0-.2 0-.2l.4-.2c.5 0 1-.4 1-1.1.3.4.4.5.5 1 .3-.2.4-.4.5-.7l.4.3.1.7zm-3-6.8a2 2 0 0 0-1 1c-.3.1-.7.5-.8 1-.2.5-.1 1 .1 1.6 0 .6-.3 1-1 1 .7 0 1-.2 1.1-.8.2.5 0 .9-.4 1-.4.2-1 .2-1.2-.2 1.7-.3.2-2.2.9-3.5.3-.6 1-1.2 2-1.3l.3.2zm22.7-33.3h-.2l-.1 1v-1c-.8.1 0 1.7.3 2.5.2.3.5 1.2-.1 2 .3 0 .9-.7.9-1.1 0-.8-.2-1.2-.3-1.4-.3-.6-.4-1.3 0-1.8a.6.6 0 0 1-.3 0 1.6 1.6 0 0 0-.2 1c-.2-.6-.1-1 0-1.2zm3.2 1c.2.4.2.8 0 1.2 0-.5 0-1-.2-1.1h-.2c.4 1 .2 1.7-.1 2-.7.8-.6 1.5-.2 2.3.2.4 1 1.2.4 1.8 1.1-.5.6-1.6.3-2-.3-.4-.3-.9 0-1.2 0 .6.5 1 1 1s1.2-.6 1.4.2c0-.8-.5-.6-1-.5-1.3.3-1.2-1.3-.7-1.8.5-.4 1.3-1 .4-1.5.1.3 0 .6 0 .8 0-.2 0-.7-.2-.9h-.2c.1.2.2.6 0 1l-.1-1-.2-.1v1l-.2-1-.2-.1zm-22.8 38.4z" data-v-eb6c4a1f></path><path d="m162 195.2.5-.2-.5.2zm-1.1.2h-.2v.1h.1zm-1.3 1.8.3.2.1-.2c-.1-.1-.3-.1-.4 0z" data-v-eb6c4a1f></path><path fill="gold" d="m179.9 187.5-.5 1.8h-.5c.1-.4.8-1.2 1-1.8zm-2.3-9.5 1 .1c.5.4 1 1.2 1.6 2.2-1-.6-2-1.8-2.6-2.3zm1.8.1c.3.6 1.4 1.2 2.6 1.3a3 3 0 0 1-3.1-1.3h.5z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="m167.2 176.8-.1.6c-.3-.2 0-.6.1-.6z" data-v-eb6c4a1f></path><path fill="gold" d="m164.4 195.2 1.5-1 .2.1-1.7 1zm12.3-20.7zm-3.1 0z" data-v-eb6c4a1f></path><path d="m190.6 210.7-.1.7c0 .2.8.2 1 .3l-1.3-.1.4-.9z" data-v-eb6c4a1f></path><path d="M191 210.8c0 .1-.2.3 0 .4l.1.1h-.3c-.1-.3 0-.4.2-.5z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M204.4 211c0 .3-.3.7-.6.8l.6-.7zm-.3 0c0 .2-.3.6-.5.6a1.6 1.6 0 0 0 .5-.6zm-.3.1c0 .1-.1.3-.3.3l.3-.3z" data-v-eb6c4a1f></path><path fill="gold" d="M183.6 222c.4 0 1.1-.8 1.3-1.3l-.2-.2c-.1.5-.7 1.2-1.1 1.2-.5 0-1-.7-1.2-1.2l-.1.2c0 .5.9 1.2 1.3 1.4zm10.6-16.7v.6c.2.7.3 1.7-.6 2.3a2.5 2.5 0 0 0-.1-.3c-.2.2-.3.7-.2 1 .1.5.5.9.9 1-.4-.7 0-1.7.1-1.8.4-1 .8-2-.1-2.8zm-.3-29H186.5l.7.4a7 7 0 0 0 4.1.5c.4 0 1.4-.4 2.1-.1 0 .3-.4 1-.6 1.1-.4-.3-.9-.4-1.5-.6a6 6 0 0 0-2.5-.1 6 6 0 0 1-2 0c.8.5 2 .6 3.1.3-.9.6-1.8 1.7-2 2.8.8-1.1 1.9-2 3-2.5-.9.7-1.8 2-2.2 2.8 1-.6 2.3-1.6 3-2.4-.2.6-.7 1.2-1.1 1.6.2 0 1-.5 1.8-1.1.6-.5 1.3-1.6 1.6-2.4l-.1-.3z" data-v-eb6c4a1f></path><path d="m199.9 176.8.1.6c.3-.2 0-.6-.1-.6zm.1-2.7c0 .4-1 .8-.4 1.8-.3-1 .5-1.3.4-1.8z" data-v-eb6c4a1f></path><path fill="gold" d="m168.5 213.6-.1.4-.1-.1.2-.3zm-.4-1 .1.2c-.1 0-.3-.1-.3-.3h.2zm1 1.7v.3l-.2-.1.1-.2z" data-v-eb6c4a1f></path><path d="M177.2 211.3c.1 0 .2.2 0 .3-.2.2-.6 0-1.4 0 .5-.2 1.3.2 1.4-.3zm-2 0v.3-.3zm-.3 0v.3-.3zm2-.5c.3.3 0 .6-.3.5.3-.1.3-.3.2-.5zm7.2-16.6-.2.6.4-.2.1-.3a.4.4 0 0 1-.3-.1z" data-v-eb6c4a1f></path><path d="m188.7 202.6-.1-.1h-.2l-.1.2v.3H187.8h.5a.5.5 0 0 0 .3-.1v.1c.1 0 .3-.1.3-.3v.3a.3.3 0 0 0 .3-.3s0 .3.1 0v.2c.1 0 .3 0 .3-.2h.1l-.1.7c-.3.1-.5 0-.8.2l-.4.2-.7-.2c0 .1-.2.4-.4.4l-.2-.3h-.4l-.2-.2c-.2.1-.7 1-.7 1-.2 0-.6-.3-1.2 0-.3-.2-.8-.1-1 .1-.2-.6-1.5-.4-1.5-.4l.4-.2-.6-.4c-.6.3-1.4.2-1.7.1-.5 0-1.2-.4-1.4-.8-.1-.3 0-.5 0-.8 0-.1 0-.4-.4-.5h.6l.2.4v.7l.5.2s0-.4.2-.7l-.3-.1c.1-.3.4-1 .4-1.5l.2-1.3c0-.1.4-.1.5-.4l-.2-1.2v-.8c0-.2-.2-.2-.3-.2-.3.1-.2.7-.2 1 0 .7-.2 1.2-.4 1.5v-.5c0 .3-.5.9-.5.9v-.3l-.5.7v-1.2h-.2a4.1 4.1 0 0 0 .2-.8c0-.7-.1-1.3.4-1.9.4-.6 1.1-.6 1.9.3a3 3 0 0 1 1.2-.7l-.3-.7.7-.1v-.1c-.2-.2-.7-.5-1-.3l-.3.4-.3-.1-.1.1-.6-.1v.2l-1-.4.4-.4s-.3-.3-.5-.3l.2-.4c-.2 0-.3-.4-.5-.4l.7-.7a3 3 0 0 1 1-.7v-1l.2-.2-.2-.5c0-.2.1-.2.2-.1l.2.5h.2l.3.5-.2.3.2.3c.5.1 1 .2 1.6.5l.1-.3h-.5l-.1-.3-.3-.2.4-.4.5-.3c.6-.5 1.7.3 1.5 1 0 .4-.3.3-.5.4l-.4.4.4.5.2.7.3-.2.2.1.2-.4h-.3l.5-.3h-.1l.3-.2a.4.4 0 0 1-.2-.2c.2 0 .4-.3.7-.3l-.2-.1c.3-.2.5-.2.8-.2l-.2-.4h.8l.4.1c.1.2.3.5.5.5h.2l-.2.3.8.3-.5.2.2.5.4 1.5-.1.4c-.1 0-1 .6-1 .3-.2 0-.3.2-.4.3.2.4.5.8.5 1.3v.5c.4 0 1.4-.5 1.7 0 .1.3-.1.5-.2 1l-.5 1.3a1.8 1.8 0 0 1-.4.3h-.6l.3-.9.4.1c0-.2 0-.3.2-.3 0-.2.2-.6.1-.8 0-.3-1.2.3-1.8.4 0 .4.2 1 .4 1.4v.7l.4 1 .3.6.3-.2c.2 0 .6-.7 1-.3v.2l-.3-.2v.4h-.1v.2c-.1-.1-.2-.1-.2 0l-.1.2z" data-v-eb6c4a1f></path><path fill="#FFF" d="m185.2 192.7.5-.3h-.5a1.8 1.8 0 0 1 1-.2l-.4-.2h.7l-.2-.5c.7 0 1 0 1.3.6a1.5 1.5 0 0 0-.4.2s.4 0 .6-.1l-.3.3.4 1a.6.6 0 0 1 .3-.1l.5 1.4-.1.4-.5.2-.3-.4-.1-.2c-.3-.3-.6-.2-.8-.6v-.9c-.1.3-.2 1.3 0 1.8-1-.4-2-.9-2.4-1.3 0 0 0 .2-.2.2 0 0 .2.2 0 .2s-.1-.3-.1-.5l.3-.1s0 .2.2.3c0-.2.2-.3.3-.4h-.2l.3-.4h-.3l.5-.3h-.1zm-2.3-2 .4-.1.7.1c.4.3.7 1 .3 1.2h-.3v-.2h-.2l-.1.2v-.2a.2.2 0 0 0 .2 0v.2l-.4.5c-.3 0-.5-.5-.5-.8v-.1.1h-.3.1l-.4.1v-.2c-.2 0-.2-.2-.2-.3a1.8 1.8 0 0 1 .7-.4z" data-v-eb6c4a1f></path><path fill="#C00" d="M180.6 203h.1l.4-.3v-.5c.2-.3.5-.7 1.2-.7.4 0 .7.2 1 .3.3 0 .6.3.8.4h.1v-.2c-.1-.3-.3-.1-.5-.3-.2 0-.2-.2-.4-.5a7.2 7.2 0 0 0-1-.8v-.6l-.1-.5c-.3.4-1 .7-1.3.9-.5.3-.8 1.6-.5 2.2l.2.6z" data-v-eb6c4a1f></path><path fill="#C00" d="M185 202.3h.3v-.1a31.9 31.9 0 0 1-.8-2l-.2-.4h-.2c-.1-.1 0-.4 0-.8h-.1a1.6 1.6 0 0 1-.3 0v.2c-.2.7-.6.9-.7 1 0 .2.3.6 1 1.1a80.9 80.9 0 0 1 1 1zm.4-.5v-.1c.1-.2.2-.4.4-.4l.3.1c0 .1.1 0 0 .2-.1.1.4 0 .4 0l-.1.1v.1h.1c0 .3-.3.4-.3.6h.2c.1-.1.4-.3.4-.6v-.3c-.1 0-.5-.2-.3-.2l.4.2s-.2-.3 0-.3v.2h.1l.3.5v.2-.1c-.1-.5-.6-1.2-.7-1.5l-.1-.6c-.2-.5-.6-1.1-1.2-1.3h-.2v.8c.4.2.8.3.6.5h-.5l-.4-.1h-.3l.2.4.7 1.6zm1.4-7.6c0 .5.1.7.2.9l.6.2.2-.1-.2-.4c-.2-.3-.6-.2-.8-.6z" data-v-eb6c4a1f></path><path fill="#06C" d="m180 192.1.4-.2v1.1l.3.1-1.2 1h-.1l.4-.6-.3.3-.2.2h-.2c.1-.5.8-1.1 1-1.5l-.9 1a.1.1 0 0 1-.1 0c0-.2.4-.5.5-.6-.2 0-.3.2-.4.3l-.2.1-.1-.1 1-1zm1.9 1.6.4 1s-.4-.4-.8-.3l.4-.7zm-.2-.4.1.3-.4.9-.2.4-.3-.1.8-1.5zm-.1-.3v.2l-.6 1.2-.3.5-.5-.1c.2-.3.6-1.1 1-1.5l.2-.3h.2zm-.8.1h.4c-.3.2-1 1.5-1.2 1.8h-.2l.1-.2.2-.4-.2.2a1 1 0 0 1-.1.3l-.5-.1c.3-.6 1.5-1.6 1.5-1.6zm1 0h.3v.7l-.3-.8zm-.5-1.4c.8.1 1.6.3 1.8.8.2.3.2.6 0 .6l-.2-.6a.7.7 0 0 0-.5-.4h-1l-.1-.4zm-.2 0 .2.6h-.2l-.2-.6h.2z" data-v-eb6c4a1f></path><path fill="#C00" d="M184.8 198.7v.4l-.2-.4h.2z" data-v-eb6c4a1f></path><path fill="#FFF" d="m184.7 197.8.1.8h-.2a4 4 0 0 1 0-.7zm2.8-1.3c.2.3.2 1 0 1.5l-.1-1.3a.8.8 0 0 1 .1-.2z" data-v-eb6c4a1f></path><path fill="gold" d="m168.2 213-.2.2v-.2h.2zm-.7-2-.4.4c-.2.4 0 .8.3 1.1 0 0-.4.3-.6.2-.2-.1-.8-1.8-.8-2.2.4 0 .7-.2 1-.4l.5.9z" data-v-eb6c4a1f></path><path fill="gold" d="M168.3 212.4c.5.3 1.3 2.3 1.3 2.9 0 .3-.2.5-.5.6-.4 0-.7 0-.8-.2.7.1 1-.4.9-1 0-.2 0-.4-.2-.7 0 .3-.1.4-.3.5 0 0-.2-.1-.4 0a.3.3 0 0 0 .1-.3c.3-.2.3-.6 0-.9 0 .2-.1.3-.3.4h-.1v-.2h.1l.3-.3v-.1h.1l-.2-.7z" data-v-eb6c4a1f></path><path fill="gold" d="M169.2 216c.5-.1.6-.4.6-.6.3.4 0 .7-.4.9-.4.2-1 .2-1-.3.1.2.6.1.8 0zM169.2 216.2l.5-.2-.5.2zm.5.6c-.2.1-.5.1-.7-.1.3 0 .7-.2.8-.4a.4.4 0 0 1-.1.5zm.1.3h-.3a.5.5 0 0 0 .4-.2l-.1.2zm-10.8-22c-.3-.3 0-.3 0-.4 0 0 .3 0 .2.3l-.2.1zm.7.7v-.3h-.5l-.3.1v-.2l.1-.2.4-.2v.2l.4.2s0-.3.2-.5h-.1l.4-.2h.1l.3.1c-.2 0-.2.2-.4.1a.4.4 0 0 0-.2.4l.2.2-.6.3zm.7-.3c.1.2.4.4.4.7 0 .4-.2.4-.3.6-.3-.1-.4 0-.7-.2s-.2-.5-.3-.7l.9-.4z" data-v-eb6c4a1f></path><path fill="gold" d="M158.8 195.9c0 .2.2.6.6.6l.1-.3v.1l.3.4.3.1a.3.3 0 0 1 0 .2h-.8l.1-.3-.3.4-.1-.1.1-.3-.3.3-.1-.1.3-.3-.4.2-.2-.1.4-.2h-.5l-.1-.2h.6l-.7-.2v-.2l.6.2-.6-.3v-.3l.7.4zm.3 1.2.8.5-.9-.5z" data-v-eb6c4a1f></path><path fill="gold" d="m160.7 196.6.2.1s.3.5.7.3l-.4.3c-.3 0-.6-.3-.6-.3s0 .4-.3.6c-.1.2-.4.2-.4.1.4-.1.2-.7.2-.7l.1-.2h.2l.2-.1v-.1z" data-v-eb6c4a1f></path><path fill="gold" d="m161.3 196.6.3.1a.2.2 0 0 1 0 .3c-.2 0-.3 0-.3-.2v-.2zm-.1-2.5.2.2-.3.6.3-.5.2.2-.4.6.4-.4.1.1-.4.4.4-.2v.3l-.4.1h.4v.2h-.4l.3.1v.2l-.6-.1.4.2v.1c-.3 0-.5.2-.5.4h-.2l.2-.4-.2-.4h.3c.2-.3.1-.6-.1-.9l.3-.8zm-1.2.6c-.3-.3 0-.3 0-.4 0 0 .2-.1.2.3h-.2zm-.7 0c-.4-.4 0-.6 0-.6s.3-.2.4.4l-.4.1zm7 14.2v.3l-.2.2.3-.5zm-4.8-9.6.2-.1 3.7 7.7c.1.1 0 .3-.1.4l-.6-.1-3.2-8zm-.5-1.8c.3 0 .5.2.5.5s-.2.5-.5.5a.5.5 0 0 1-.4-.5c0-.3.2-.5.4-.5zm0 1.3a.7.7 0 0 0 .6-.3.3.3 0 0 1 .2.1c0 .2 0 .4-.2.5l-.5-.1v-.2z" data-v-eb6c4a1f></path><path fill="gold" d="m165.4 207.5.3-.5c.2.2 0 .6-.3.7-.2 0-.6 0-.7-.3.1.2.5.1.7 0zm.2.3v.4c-.2 0-.2-.2-.3-.2a.6.6 0 0 0 .3-.2z" data-v-eb6c4a1f></path><path fill="gold" d="M166.4 208.5c.2.4.2.9-.2 1-.4.2-.8 0-1-.4 0-.3.2-.6 0-1 .2.3.4.3.5.3 0 0 .2-.4.1-.6l.6.7z" data-v-eb6c4a1f></path><path fill="gold" d="M166.3 209.8c.4-.2.5-.4.5-.6.2.3 0 .7-.4.9-.3.1-.8.1-.9-.3.2.2.6 0 .8 0zm-5.5-14.6h-.4a.3.3 0 0 0 .2 0h.2zm-1-.1v-.1a2.1 2.1 0 0 1-.4-.2l.2.1v.1a.5.5 0 0 1 .1.1zm0-.3v-.2h-.2l.2.2zm15.1-22.6v.9h.1a.7.7 0 0 0 0-.1v-.1a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1.3.3 0 0 1 0-.4zm.5 0a.3.3 0 0 1-.2 0c.1.1.2.2.1.3a.3.3 0 0 1 0 .2.2.2 0 0 1 0 .1V173.1a.3.3 0 0 1 0 .2.2.2 0 0 1 0 .1v.1a.1.1 0 0 1 0 .2v-1.4zm-1.1 0a.2.2 0 0 0-.1.1l.3 2v-.1h.1l-.2-1.9a.2.2 0 0 0-.1 0zm1.7 0v.1l-.3 2v-.1h.1l.4-1.9h-.2z" data-v-eb6c4a1f></path><path fill="gold" d="M175.1 172.4v.2l.2-.1-.2-.1zm1.2 0v.1l.2.3a.5.5 0 0 0 .1-.3h-.3zm-2.2 0-.4.1.1.3.3-.3zm.7.1h-.3v.2h.3v-.2zm.7 0v.1h.2-.2zm-1.9 0-.3.2.2.4.3-.3a1.3 1.3 0 0 0-.2-.3zm3.1 0-.2.3.3.3.2-.4-.3-.2zm-2.6 0-.3.3.3.3v-.5zm2.2 0-.1.5c.1 0 .2 0 .3-.2l-.1-.1a.3.3 0 0 0-.1-.1zm-3 .2zm3.7 0zm-3.7 0-.4.2v.1c.2 0 .3-.2.4-.3zm1.8 0v.2l.2-.1h-.1zm2 0 .2.4.1-.2a.6.6 0 0 0-.3-.2zm-3.8 0-.3.4.3.3.2-.3-.2-.3zm1.5 0-.2.1h.2zm.7 0v.1h.2-.2zm1.5 0-.2.4.2.3.3-.3-.3-.3zm-3.2.1-.2.3.2.3.3-.3-.3-.3zm2.7 0a2.6 2.6 0 0 1-.2.3l.2.3a2.7 2.7 0 0 0 .2-.3l-.2-.3zm-3.6.1a.7.7 0 0 0-.2.5c.2 0 .2-.2.3-.3v-.2zm4.5 0a.3.3 0 0 1 0 .2l.2.4v-.1c0-.2 0-.3-.2-.5zm-2.6 0-.2.1v.1h.2v-.1zm.7 0v.2h.2v-.1h-.2zm-.4.1v.2a.1.1 0 0 0 .2-.1h-.1zm-1 0v.2-.1zm2 0v.2-.1zm.7.1-.3.3.3.3.2-.3-.2-.3zm-3.8 0-.2.4.2.3.3-.3-.3-.4zm.5 0-.2.4.2.2.3-.3-.3-.3zm3.8 0a1.8 1.8 0 0 1-.2.4l.2.3.2-.3-.2-.4zm-2.3 0v.6V173.4a.3.3 0 0 1 0-.1v-.1zm-.9 0a.8.8 0 0 1-.3.3l.3.3a.6.6 0 0 1 .1-.2v-.2l-.1-.1zm2.1 0-.1.2v.2l.2.2a2.6 2.6 0 0 0 .2-.3l-.3-.2zm-1.4.1h-.1v.2h.1v-.2zm.7 0v.2h.2v-.1h-.2zm-.4.1v.2a.1.1 0 0 0 .2-.1h-.2zm-2.4.2v.1-.1zm2.1 0v.1-.1zm.7 0zm0 0 .1.1v-.1h-.1zm2.1 0v.1-.1zm-4.3 0a2.3 2.3 0 0 1-.3.3 1 1 0 0 1 .2.3l.3-.3-.2-.3zm.5 0-.2.3.2.2.3-.3-.3-.2zm2.7 0-.2.2.2.3.2-.2c0-.1 0-.2-.2-.3zm.5 0-.2.3.2.3c.2 0 .2-.2.3-.3a7.3 7.3 0 0 1-.3-.3zm-4.2 0V174.1l.2-.3-.2-.3zm4.8 0-.3.3.2.3h.1V173.5zm-3.3 0a.3.3 0 0 0-.2.2l.2.3v-.4zm.8 0v.2h.1v-.1zm1 0-.1.4.2-.2-.1-.1zm-1.3.2v.1-.1zm.7 0v.1l.1-.1h-.1zm-.5 0v.6a.7.7 0 0 1 .1-.2V173.8l-.1-.1zm.3 0a.4.4 0 0 1 0 .1v.1l-.1.2.1.2v-.6zm-1.2 0-.2.4.2.2.2-.3-.2-.2zm2.2 0a1.4 1.4 0 0 0-.3.3l.3.3.2-.2a1.6 1.6 0 0 0-.2-.3zm-2.7 0-.3.4.2.3v-.1h.1l.2-.3-.2-.2zm0 .6h.4l-.2-.2-.2.2zm3.2-.5-.2.3.2.2v.1l.2-.2-.2-.4zm.2.4a1.3 1.3 0 0 1-.2.2l.2.3.2-.2c0-.1 0-.2-.2-.3z" data-v-eb6c4a1f></path><path fill="gold" d="M175.1 173.8v.1h.1zm-2.1 0a1.3 1.3 0 0 0-.1.4s0 .2.2.2l.1-.3-.2-.2zm4.3 0a.9.9 0 0 1-.2.3l.2.3.2-.2-.2-.3zm-2.4.1h-.1v.2-.2zm.6 0v.1zm-1.2.1-.2.3.3.2v-.4zm1.7 0-.1.4v.1l.3-.2a.8.8 0 0 0-.2-.2zm.5.1-.2.2v.1c.1 0 .3-.1.4 0l-.2-.3zm-.2.2-.3.2h.3v-.2zm-1.1-.2a1.4 1.4 0 0 0-.2.6c0 .3 0 .5.2.7V174zm-2 0v.4l.1.2a.6.6 0 0 0 .2-.3l-.2-.2zm1.6 0v.2-.1zm.7 0v.2-.1zm-2.7.1.1.4.1-.1a2.8 2.8 0 0 1-.2-.3zm4.7 0-.2.3v.1l.2-.4zm-3 0c0 .3.1.5.3.7l.2.3a2.3 2.3 0 0 1 0-.5l-.4-.4zm.4 0v.2a.6.6 0 0 0 0 .1v-.1a.4.4 0 0 1 0-.1zm.6 0-.2.2v.1a.6.6 0 0 1 .1 0v-.2zm.2 0a1.4 1.4 0 0 0-.3.5l-.1.5.2-.3a1.2 1.2 0 0 0 .2-.6zm-1.6.1v.1l.1.2h.1l-.2-.3zm2.6 0a1.4 1.4 0 0 0-.7.4.6.6 0 0 1 .2 0h.2l.3-.3zm-3.1 0c0 .2.2.4.3.5h.2v-.1h.2a1.2 1.2 0 0 0-.7-.3zm-.5.2-.1.2s0 .2.2.3l.1-.3-.2-.2zm.4 0a.6.6 0 0 0-.1.2l.2.3a.4.4 0 0 0 0-.2h.1v-.1l-.2-.2zm3.3 0-.2.2h.1v.2s.2 0 .3-.2a.7.7 0 0 1-.2-.2zm.5 0a.8.8 0 0 1-.3.2l.2.3.2-.3-.1-.2zm-3 0v.1zm.1 0 .1.3h.1a.6.6 0 0 1 0-.2.3.3 0 0 0-.2 0zm1.5 0-.1.1-.1.3a.2.2 0 0 1 .1-.1v-.3zm0 0v.2h.1v-.2zm-2 .2h-.1zm2.6 0z" data-v-eb6c4a1f></path><path fill="gold" d="M174.2 174.8c.2.3.5.5.9.6-.2-.3-.6-.6-.9-.6zm2 0c-.4 0-.8.3-1 .6.4 0 .8-.3 1-.6zm-2.9 0a.9.9 0 0 0-.1.3l.3.2.1-.3-.3-.2zm3.7 0-.3.2.1.3.3-.2a2 2 0 0 1-.1-.3zm-3.2 0a.5.5 0 0 0-.1 0c0 .2.2.3.4.3h.3l-.2-.2h-.4zm2.7 0a1.5 1.5 0 0 0-.4 0 1.3 1.3 0 0 1-.2.3h.4l.4-.3a.8.8 0 0 0-.2 0zm.2.2-.3.1.3-.1zm-3 0 .1.2h.1a2.3 2.3 0 0 1-.2-.2zm0 0a.9.9 0 0 1-.2.3h.4l-.1-.1-.2-.2zm3 0-.1.2h-.1l.2.1h.1l-.1-.3zm-3.5 0 .1.4h.1v-.1a1 1 0 0 1-.2-.2zm4 0-.3.3v.1h.1l.2-.3zm-3 .2a1.3 1.3 0 0 0-.3 0l.3.2h.6a1.3 1.3 0 0 0-.7-.2zm2 0a1.4 1.4 0 0 0-.7.2h.6c.1 0 .3 0 .3-.2a1 1 0 0 0-.2 0zm-2.7.1zm3.4 0h-.1zm-3 0a1.4 1.4 0 0 0-.3 0h.5-.1a.8.8 0 0 0-.1 0zm2.6 0a1 1 0 0 0-.1 0h.4-.3zm-1.2-5c0 .2.4 0 .4-.1v.5s-.2-.2-.4-.1c-.2 0 .1.3.1.4h-.5l.2-.4c0-.2-.4 0-.5.1v-.5l.4.2c.2 0 0-.4 0-.4h.4s-.2.2-.1.3zm.3 1.3c0 .2-.2.4-.4.4s-.4-.2-.4-.4c0-.3.2-.4.4-.4a.4.4 0 0 1 .4.4zm-5-1v1.1c.2-.4.2-.7.1-1 .7.1 0 1.7-.4 2.4-.2.4-.5 1.3.1 2.1-.2-.1-.8-.7-.8-1.1 0-.8.2-1.2.3-1.4.2-.6.3-1.3 0-1.8a.5.5 0 0 0 .3-.1l.2 1c.2-.5 0-.9 0-1l.1-.1zm-3.5 1.2c-.1.3-.2.7 0 1.1l.2-1.1h.2c-.4 1-.2 1.7.2 2 .6.8.5 1.5.2 2.3-.2.4-1 1.2-.4 1.8-1.2-.5-.7-1.6-.3-2 .2-.4.2-.9 0-1.2 0 .6-.6 1-1 1-.5 0-1.3-.6-1.5.2 0-.8.5-.6 1-.5 1.3.3 1.2-1.3.7-1.8-.5-.4-1.2-1-.4-1.5l.1.8c0-.1 0-.8.2-.9h.1v1c0-.4 0-.8.2-1l.1-.1v1c0-.4.2-.8.3-1l.1-.1zm2.6-2.3c-.4 0-.7.2-1 .4l1.1-.3.2.1s-.6 0-.9.4c.5-.2 1-.2 1.2-.2l.4.1c-.6 0-1 .2-1.8.6-.5.3-1.5.4-1.5.4l.7-.7c.3-.4.7-1 1.2-1l.4.2z" data-v-eb6c4a1f></path><path fill="gold" d="M171.1 170.3c1.3.7-.7 2.7-.5 4.2 0 .8 1.2 1.2 1.7 1.4-1.3-.1-2.2-.8-2-2.1.2-1 1.7-2.9.5-3.3-.7-.2-1.7.7-2.7 1-1 0-3 .1-2.7 1.4.1.4.7.7 1 1 .3.6 0 1.5-.7 1.3-.8-.2-1-.2-1.2.3 0-1.4 1.4 0 1.7-.7.2-.6-.2-1-.5-1.3-.3-.1-.5-.5-.5-.9.1-1.4 1.9-1.2 3-1.5.6-.1 1.5-.7 2-.8a1.8 1.8 0 0 1 .9 0z" data-v-eb6c4a1f></path><path d="M167.5 175.9c.3-1-.5-1.3-.4-1.8.2.8 1 .8.4 1.8z" data-v-eb6c4a1f></path><path fill="gold" d="m181.8 171.7.3.2a2.4 2.4 0 0 0-.6.2.8.8 0 0 1-.4-.2l.7-.2zm-.3 1.6c.5-.2 1.3-.2 2-.2l2.2.2a9.4 9.4 0 0 1-4.2 0zM181.2 173.1a9 9 0 0 1 2.4-.4c.7 0 1.6 0 2.3.3v.1l-2.3-.2c-.8 0-1.7 0-2.4.2zm0-.6v-.1c.4-.2 1.3-.4 2.4-.4.7 0 1.7 0 2.3.4v.1c-.4-.2-1.3-.3-2.3-.3a5 5 0 0 0-2.4.3z" data-v-eb6c4a1f></path><path fill="gold" d="m183.6 172.6-.2-.1c0-.1 0-.2.2-.2l.1.2a.1.1 0 0 1-.1.1zm-2.1.1-.1.1h-.1l.1-.2v.1zm.3 0a.1.1 0 0 1-.2 0c0-.2.1-.2.2-.2v.1zm.5-.2-.1.2c-.1 0-.2 0-.2-.2s0 0 .2 0zm.4 0-.1.1h-.2c0-.2.1-.2.2-.2l.1.1zm.5 0-.2.1-.1-.1.1-.2c.2 0 .2 0 .2.2zm-1.6.3zm-.1-.3zm.4.2h.1zm0-.3v.1zm.4.3h.1zm0-.3zm.5.3v-.2.2zm0-.4v.1zm.4.3h.1zm0-.3h.2l-.1.1v-.1zm-2 .5v.1-.1zm4.7 0h-.2v-.2l.2.1zm-.4-.2-.1.1h-.1v-.2l.2.1zm-.4 0h-.1a.1.1 0 0 1-.2 0l.2-.2.1.1zm-.4 0a.1.1 0 0 1-.2 0v-.2l.2.1zm-.5-.1a.1.1 0 0 1-.1.1l-.2-.1c0-.1 0-.2.2-.2s.1.1.1.2zm1.3.3zm0-.3h.1zm-.4.2zm0-.3h.1a.2.2 0 0 1 0 .1zm-.4.3h.1zm0-.3h.1zm-.5.3.1-.2v.2zm0-.4h.2v.1l-.1-.1zm-.5.3h.2-.2zm0-.3h.2v.1l-.1-.1zm2.3.6h-.1zm-4.8.5 2.4.2c.7 0 1.6 0 2.3-.2v.1c-.4.2-1.2.3-2.3.3-1.2 0-2 0-2.4-.3v-.1zm5-1.5V172.2l-.4-.1a1.6 1.6 0 0 0 .4-.2zm-.6.2-.5-.2s.2 0 .3-.2c.2 0 .4 0 .7.2l-.5.2zm1-.8-.4.7a2.5 2.5 0 0 0-.1-.4l.4-.3zm.6-2.5a1.2 1.2 0 0 0-.3-.6v.2l.2.6.1-.2zm-5.2 1.4.3.3h-.1c-.1 0-.2 0-.3-.2zm-.7 1-.4-.5.3-.3.3.3v.2h-.3v.2zm-.5-.2.1.4-.2-.2.1-.2zm-.6-2.2a.5.5 0 0 0 0 .4v-.4zm.9-1.1c-.1 0 0 .2 0 .4l-.2-.3.2-.1zm-.4.4v.5l-.2-.2.2-.3zm0 1.2c-.2 0-.1.2 0 .3l-.3-.2.3-.1zm.4-.6c-.1.1-.1.2 0 .4l-.2-.3.2-.1zm.4-.5c-.2.1 0 .2 0 .4l-.2-.2.2-.2zm.3.5v.4l-.2-.3.2-.1zm-.4.4a.7.7 0 0 0 0 .4l-.1-.2.1-.2zm-1 .6c-.2.2-.1.3 0 .4l-.2-.2.1-.2zm.3.5v.3l-.1-.1.1-.2zm.3-.5v.4l-.1-.2.1-.2zm.8-.1v.4l-.2-.2.2-.2zm.4.4v.3l-.1-.1.1-.2z" data-v-eb6c4a1f></path><path fill="gold" d="M181.1 170.6a.5.5 0 0 0 0 .4l-.1-.3.1-.1zm.8-3.2v.1l-.4.4-.2-.4.6-.1zm.1.8v.1a1.9 1.9 0 0 0-.4-.4l.4-.3v.6zm.2.8-.3.3c0-.2-.2-.3-.4-.4a1.2 1.2 0 0 0 .4-.4l.2.2v.3zm-.1-.7v.2-.1zm-.2 0c0 .2-.3.4-.4.5l-.3-.4.3-.4.4.4zm-.7-.8.3.4-.4.4-.2-.5.3-.3zm-.8.9.4-.5c0 .2.2.3.3.5l-.3.4-.4-.4zm-.2-.3.5-.3c0 .2-.2.3-.4.5v-.2zm.6-.4zm-1 1 .4-.6v.2a4 4 0 0 1-.2.6l-.1-.1zm.2.3.4-.6.3.5c0 .2-.3.3-.3.5l-.4-.4zm-.1.1v-.2.2zm0 .2.1-.3.3.4a3 3 0 0 1-.3.5 1.4 1.4 0 0 1-.1-.6zm.2.7.3-.4.3.3c0 .2-.2.3-.3.4l-.3-.3zm0 0c0 .2.2.3.3.4l-.1.2a4.3 4.3 0 0 0-.3-.5zm.3-.6.4-.5c0 .2.2.3.3.4a2 2 0 0 0-.4.6c0-.2-.2-.3-.3-.5zm.4-.5c.1-.1.3-.3.3-.5l.4.5-.4.4a1.7 1.7 0 0 1-.3-.4zm.4.5c0-.2.2-.3.3-.4l.4.3-.4.4a1.8 1.8 0 0 0-.3-.3zm1.1.2-.3-.3a.5.5 0 0 1 .2-.2l.1.5zm-.7.2.4-.4.3.3a2.7 2.7 0 0 0-.3.4l-.4-.3zm.8 0v.6l-.4-.2.3-.4zm-.9 0 .4.4h-.6l.2-.4zm-.4.5-.3-.4.3-.5.4.4-.3.4h-.1v.1zm-.6 0 .2-.3.4.3a.8.8 0 0 1-.3.4l-.3-.3zm-.2.4.1-.3c.1.2.3.3.4.3 0 .2-.1.4-.3.5l-.2-.5zm1 .5-.3.4-.4-.3.3-.4.3.3zm3.4-4h.4l-.6 2.9v-.1h-.2l.4-2.8zm-1.2 1.9-.1.1.1.1h.1v-.2zm0 .7a1.3 1.3 0 0 0-.2.4v-1a.3.3 0 0 0 0 .2v.2c0 .2.1.2.2.2zm-.2-.6v-.7l.1.1a.3.3 0 0 0 0 .2v.3l-.1.1zm0-.9-.1-1.2h.2a.4.4 0 0 0-.2.4l.1.2v.5a.3.3 0 0 0 0 .1zm.4-1.1a.6.6 0 0 0 .2 0l-.1 2v-.2a.3.3 0 0 0 0-.2.5.5 0 0 0 0-.2V167.7a.4.4 0 0 0 0-.3.3.3 0 0 0-.1-.2zm0 2v1l-.1-.4.1-.2V169.3z" data-v-eb6c4a1f></path><path fill="gold" d="M183.5 169.4v.2h.2c0-.1 0-.2-.2-.2zm0-.7-.1.1.1.2c.1 0 .2 0 .2-.2l-.2-.1zm-.1-.3.1.2c.1 0 .2 0 .2-.2l-.1-.2c-.1 0-.2 0-.2.2zm.3-.5-.1-.1-.2.1.1.2c.1 0 .2 0 .2-.2zm-.4-.4.2.2c.2 0 .2-.1.2-.2s0-.3-.2-.3l-.2.3zm.8 0h.4v.2h-.4v-.2zm0 .4h.3v.1h-.3v-.1zm0 .3h.3v.2h-.3v-.2zm0 .3.2.1v.2h-.2v-.3zm0 .4h.2v.2h-.3v-.2zm0 .3h.1v.3h-.2v-.3zm0 .4v.3h-.1v-.3zm0 .6v-.2.2zm-1-.2v.2-.2zm0-.4v.2h-.1v-.2h.1zm0-.4v.3h-.2v-.2h.2zm0-.3v.2h-.2v-.1h.2zm0-.4v.3h-.3v-.2h.3zm0-.3v.2h-.3v-.2h.2zm0-.3-.4.1.3-.1zm0-.4v.2h-.4v-.2h.3zm-.3 2.6-.1-.1-.6-2.8h.3l.4 2.9zm1-5.7c0 .3.5 0 .6-.1v.7c-.2 0-.4-.3-.6-.2-.3 0 0 .5.1.7h-.8l.3-.6c0-.3-.5 0-.6.1v-.8c0 .1.3.3.5.3.3 0 0-.6-.1-.6h.7s-.3.3-.2.5zm.4 1.8c0 .4-.3.6-.6.6a.6.6 0 0 1-.6-.6c0-.3.2-.6.6-.6.3 0 .6.3.6.6zm1.6 4c0 .3-.2.5-.4.7h-.3v-.2a.7.7 0 0 0-.3 0 1.8 1.8 0 0 1 1-.4zm-1.8.1-.1.2v-.2l.1-.2v.2zm-.7 0v.2l-.2-.2v-.2l.2.2zm-.6.3v.4h-.1l-.2-.5.3.1zm1.8.3a.5.5 0 0 0-.2.1l.1-.4h.2l-.1.3z" data-v-eb6c4a1f></path><path fill="gold" d="M183.7 171.8c.2-.5.8-.9 1.3-1-.2.5-.8.9-1.3 1zm.1-1a1.7 1.7 0 0 1 .6-.7c0 .3 0 .7-.3 1a2.2 2.2 0 0 0-.4.4c.2-.2.1-.5.1-.8zm-.2 1c-.2-.3-.3-.7-.3-1l.3-.9.2.9c0 .3 0 .7-.2 1zm-.3-.3-.3-.4a1.4 1.4 0 0 1-.3-1l.6.6v.8zm0 .3c-.4-.1-1-.5-1.2-1 .5.1 1 .5 1.3 1zm-.2 0-.8.1-.7-.4c.5 0 1 0 1.5.4zm1.8 0h-.9a2 2 0 0 1 1.5-.3c-.1.2-.5.3-.6.4zm.9-.8-.6.4h-.5l.3-.4h.8zm-3.4.4h-.5a1.6 1.6 0 0 1-.6-.4h.8l.3.4z" data-v-eb6c4a1f></path><path fill="gold" d="M182 170.7v.2h-.2a2.4 2.4 0 0 1-.6-.6c.4 0 .8.2 1.1.5h-.3zm-.5.2zm-.2.3.4.2-.4-.2zm-.2.4v.1zm.4-.1-.3.2-.1-.1.2-.4.2.3zm4.3-.3.2.4h-.1a1.7 1.7 0 0 0-.4 0l.1-.1.2-.3zm1.1-1.3-.1.2v-.3l.1.1zm-1.9.2-.1.2v-.3l.1.1zm.4-.3-.2.2c.1-.2.1-.3 0-.4l.2.2zm.4-.4-.1.2v-.5l.1.3zm-.4-.6v.3l-.1-.4.1.1zm.8 0-.1.3v-.4l.1.1zm-.4-.4-.1.2v-.4l.1.2zm.9 0-.2.2v-.4l.2.2zm-.5-.6-.2.3c.1-.2 0-.4 0-.4l.2.1zm.8 1.2-.1.2v-.4l.1.2zm-.3.4-.2.2v-.3l.2.1zm-.4.5-.2.2v-.4l.2.2zm-.2.8-.2.3a.4.4 0 0 0 0-.4l.2.1zm.3.5-.2.2a.4.4 0 0 0 0-.4l.2.2zm.2-.8-.2.1v-.4l.2.3zm-1.5-2v.1-.2zm0-.8c.2 0 .3.2.4.3l-.4.4v-.7zm.4.3c0-.2-.2-.3-.3-.4v-.1l.6.1-.3.4z" data-v-eb6c4a1f></path><path fill="gold" d="m186.3 167.8-.4.5a3.2 3.2 0 0 0-.3-.4l.3-.3.4.2zm-.4.6a2 2 0 0 1-.3.4 3.3 3.3 0 0 0-.4-.4l.3-.4.4.4zm-1 .3.3-.2.3.3c0 .2-.2.3-.3.5l-.3-.3v-.3zm0 .4.3.2a2.6 2.6 0 0 1-.4.3l.1-.5zm0 .6.3-.3.3.4-.4.3-.3-.4zm-.2 0 .4.5-.3.2-.2-.1.1-.5zm.6.6-.4.3-.1-.1a2.3 2.3 0 0 0 .4-.3v.1zm0 0-.1-.1.4-.3.2.3-.5.1zm-.5.3-.1.1v-.2.1zm1.2-.3v-.1l-.4-.4c.2-.1.3-.2.3-.4l.4.6-.3.3zm0-1a2.6 2.6 0 0 1 .4-.3l.3.5-.3.4-.4-.5zm-.4-.5c.2 0 .3-.2.3-.4l.4.5-.3.4-.4-.5zm-.3.5.3-.3.3.4-.3.3-.3-.4zm.7-1 .3-.4.4.5-.3.4-.4-.4zm.9-.2-.1.2-.4-.5.5.3zm-.6-.4zm.8 1.3.1.1v-.1zm-.7 0 .3-.6.4.6a2.6 2.6 0 0 1-.4.4l-.3-.5zm.7.9-.3-.4.3-.4v.7zm-.7 0 .3-.3.3.4-.3.3-.3-.4zm-.4.4.4-.3.2.4-.3.3-.3-.4zm-.2.8.1-.2h-.2v-.1c0-.2.2-.3.3-.3l.2.3c-.1.1-.3.2-.3.4l-.1-.1zm-.2-.2zm1 .4c-.2 0-.4.1-.5.3a1 1 0 0 0-.2-.4l.4-.3.2.4zm0 0-.3-.5a1 1 0 0 0 .4-.3l.1.2-.2.5zm.2-.7v-.2l.3-.4-.3.6zm-.7 1.1h-.2.1zm-.6-.3h-.1a2.3 2.3 0 0 0 .4-.3l-.3.3zm-3.1-.9a.3.3 0 0 1 0 .2v-.2zm-1.5 1.5-.3-.7.5.3a.7.7 0 0 0-.2.4zm0 .2V171.9l.4.2-.3.1zm.5 1.6c-1 .9-2.8 2-4.3 2.3 1-.4 3-1.4 3.9-2.4l.4.1zm4.3 0c1 .9 2.8 2 4.3 2.3-.9-.4-3-1.4-3.9-2.4l-.4.1z" data-v-eb6c4a1f></path><path fill="gold" d="M184.9 174c1 .8 2.8 1.7 4.5 2-1.7-.5-3-1.3-3.9-2.1h-.6zm-2.6 0c-1 .8-2.9 1.7-4.6 2 1.7-.5 3.1-1.3 4-2.1h.6zm-5.4 2v-.1zm-3.4 0h3.4l-1.8.1h-1.6zm1.6-.4h-1.6 1.7c.4 0 1.2-.2 1.7 0H175zm0 .3v-.2l.1.1v.1zm-1.4 0h-.1v-.2.1zm.3 0h-.2v-.2l.2.1zm.2 0h-.1v-.2l.1.1zm.3 0h-.1v-.2l.1.1zm.3 0v-.2c.1 0 .1.2 0 .2zm-1.1-.1v-.1zm.3.1zm0-.2zm.3.2zm0-.2zm.3.2zm0-.2zm.3.3v-.1h.1zm0-.3h.1zm-1.4.1v.1zm3.3 0v.1h-.1v-.2l.1.1zm-.2 0-.1.1h-.1v-.2l.2.1zm-.3 0-.1.1h-.1v-.2l.2.1zm-.3 0-.1.1h-.1v-.2l.2.1zm-.3 0-.2.1v-.2l.2.1zm1 .1h-.1zm0-.2zm-.4.2zm0-.2h.1zm-.2.2h-.1zm0-.2h-.1zm-.4.2zm0-.2zm-.4.3v-.1zm0-.3zm16.4-5.8c.1 0 .3.4.1.5l-.4-.2v.5c.1 0 .5-.3.5-.1l-.2.4h.5s-.3-.4 0-.5l.3.2v-.5s-.4.3-.4 0l.1-.3h-.5zm.3 1.2a.4.4 0 0 0-.4.4c0 .3.2.5.4.5s.4-.2.4-.5-.2-.4-.4-.4zm-.3 1.1v.8h.1v-.4a.3.3 0 0 1 0-.2v-.2zm.5 0a.3.3 0 0 1-.1 0 .3.3 0 0 1 0 .4v.5a.3.3 0 0 1 0 .2.2.2 0 0 1 0 .1.3.3 0 0 1 0 .1.1.1 0 0 1 0 .2v-1.5zm-1 0-.2.1.4 2v-.2.1l-.2-2zm1.6 0-.3 2 .5-1.9h-.2z" data-v-eb6c4a1f></path><path fill="gold" d="m192 172.3-.2.2H192.1c0-.1 0-.2-.2-.2zm-1.2 0c-.1.2-.3.2-.3.2l.1.2.2-.2v-.1zm2.3 0v.2l.2.2.1-.2-.3-.1zm-1.5.2h-.3v.1h.3v-.1zm.8 0v.1h.1l-.1-.1zm-2 0-.3.2.2.4.3-.3a1.4 1.4 0 0 0-.2-.3zm3.1 0s0 .2-.2.3l.3.3.2-.4-.3-.2zm-2.6 0-.3.3c.2 0 .2.2.3.3v-.5zm2.2 0-.1.5.3-.2-.2-.2zm-3 .1zm3.7 0zm-3.8 0c0 .2-.2.2-.3.3v.1c.2 0 .3-.2.4-.3zm2 0-.2.2.1.1.2-.1-.1-.1zm1.8.1.3.3v-.1a.6.6 0 0 0-.3-.2zm-3.7 0a3.6 3.6 0 0 1-.3.4l.3.3.2-.3-.2-.4zm1.5 0h-.2v.1h.2zm.7 0v.1h.2-.2zm1.5 0-.2.4.2.3.3-.3-.3-.4zm-3.2.1-.2.3.2.3.2-.3-.2-.3zm2.7 0a2.8 2.8 0 0 1-.2.3l.2.3.2-.3a1.4 1.4 0 0 0-.2-.3zm-3.6.1a.7.7 0 0 0-.2.4v.1l.3-.3v-.2zm1.9 0h-.2v.2h.2v-.2zm.7 0v.2h.2v-.1h-.2zm2 0-.1.2.2.4v-.1a.7.7 0 0 0-.2-.5zm-2.4 0V173.3a.1.1 0 0 0 .2-.1l-.1-.1zm-1 .2zm2 0h.1zm.7 0-.2.3.2.3.2-.3-.2-.3zm-3.8 0-.2.4.2.3.2-.4-.2-.3zm.5 0-.2.3.2.3.2-.3-.2-.3zm3.8 0a1.7 1.7 0 0 1-.2.3l.2.4.2-.3-.2-.4zm-2.3 0v.5-.4zm-1 0a.7.7 0 0 1-.2.3l.3.3a.6.6 0 0 1 .1-.2v-.2l-.1-.1zm2.2 0v.2l-.1.2.2.2.2-.3-.3-.2zm-1.4 0-.1.1v.2h.1v-.2zm.7 0v.3h.1v-.2z" data-v-eb6c4a1f></path><path fill="gold" d="M192 173.3h-.2l.1.2a.1.1 0 0 0 .2-.1l-.2-.1zm-2.5.1v.2-.1zm2.1 0h-.1v.2h.1v-.2zm.7 0zm0 0v.2h.1v-.1h-.1zm2.1 0v.1zm-4.3 0c0 .2-.2.3-.3.4l.2.3.3-.4-.2-.2zm.5 0-.2.3.2.3.2-.3-.2-.2zm2.7 0c0 .2-.1.2-.2.3l.2.3.2-.3s0-.2-.2-.2zm.5 0-.2.3.2.4.3-.3a9.8 9.8 0 0 1-.3-.3zm-4.2.1-.1.2v.4l.3-.3-.2-.3zm4.7 0a1.4 1.4 0 0 1-.2.3l.2.3.1-.4v-.2zm-2.4 0v.2h.1v-.2zm1 0-.1.4.2-.2-.1-.2zm-1.8 0a.3.3 0 0 0-.2.2l.2.2v-.3zm.5.2v.1-.1zm.7 0v.1l.1-.1h-.1zm-.5 0v.6l.1-.3v-.2l-.1-.1zm.3 0v.2l-.1.1.1.3v-.6zm-1.2 0-.3.3.3.3c0-.2.1-.2.2-.3l-.2-.3zm2.2 0-.3.3.2.3.3-.3a1.6 1.6 0 0 0-.2-.3zm-2.8 0-.2.4.2.3v-.1h.1l.2-.3-.3-.2z" data-v-eb6c4a1f></path><path fill="gold" d="M190.4 174.3h.4l-.2-.2-.2.2zm3.2-.5-.2.2c0 .1 0 .2.2.3l.2-.2-.2-.3zm-1.7 0v.1h.1v-.1zm-2.1 0a1.3 1.3 0 0 0-.2.4l.3.2.1-.3-.2-.2zm4.3 0a.9.9 0 0 1-.2.3l.2.3a.8.8 0 0 1 .2-.2l-.2-.3zm-2.4 0-.1.1v.1-.1zm.6 0v.2-.1zm-1.2.2-.2.3h.1l.2.2v-.5zm1.6 0v.4l.3-.1a.8.8 0 0 0-.2-.3zm.6 0-.3.3h.4l-.1-.2z" data-v-eb6c4a1f></path><path fill="gold" d="m193 174.3-.2.2.3-.1v-.1zm-1-.2a1.4 1.4 0 0 0-.2.6c0 .2 0 .4.2.6a1.5 1.5 0 0 0 0-1.2zm1.8 0a1.4 1.4 0 0 1-.2.3l.2.2.2-.2s0-.2-.2-.3zm-3.8 0-.1.3a.7.7 0 0 1 .2.3.6.6 0 0 0 .2-.3l-.3-.2zm1.6 0v.2-.1zm.7 0v.2-.1zm-2.7 0v.1l.1.4.1-.2a2.6 2.6 0 0 1-.2-.2zm4.7 0c0 .2-.1.3-.2.3v.2l.2-.4zm-2.9.2c0 .2 0 .4.2.6l.2.3v-.5l-.4-.4zm.3 0v.1a.6.6 0 0 0 0 .1v-.2zm.6 0h-.2a.5.5 0 0 1 0 .2.6.6 0 0 1 .2-.1v-.1z" data-v-eb6c4a1f></path><path fill="gold" d="M192.5 174.3a1.4 1.4 0 0 0-.4.4v.5l.2-.3c.2-.2.2-.4.2-.6zm-1.6 0v.1l.2.1-.2-.2zm2.6 0c-.3 0-.5.2-.7.4a.6.6 0 0 1 .2 0h.2l.3-.4zm-3.1 0c0 .2.2.3.3.5h.2v-.1h.2a1.2 1.2 0 0 0-.7-.3zm-.5.2-.1.2.1.3.2-.3-.2-.2zm.4 0a.6.6 0 0 0-.1.2l.2.2v-.1h.1v-.1l-.2-.2zm3.3 0s-.2 0-.2.2h.1v.2l.3-.2a.7.7 0 0 1-.2-.2zm.4 0a.7.7 0 0 1-.2.2l.2.3.2-.3-.2-.2zm-2.8 0v.1zm0 0 .1.3h.1a.6.6 0 0 1 0-.2h-.2zm1.5 0-.2.1v.3a.2.2 0 0 1 0-.1l.2-.3zm0 0v.2-.1zm-2 .2h-.1zm2.6 0z" data-v-eb6c4a1f></path><path fill="gold" d="M191 174.7c.2.4.5.6.8.7-.1-.3-.4-.6-.8-.7zm2 0c-.4 0-.8.4-1 .7.4 0 .8-.3 1-.7zm-2.9 0a.9.9 0 0 0-.1.3l.3.2v-.2s0-.2-.2-.2z" data-v-eb6c4a1f></path><path fill="gold" d="M190.3 175.2a1 1 0 0 1-.3-.2l.1.4h.1v-.2zm3.5-.4-.3.2.1.2.4-.2a.7.7 0 0 1-.2-.2zm-.6 0a1 1 0 0 0-.3 0 1.3 1.3 0 0 1-.2.3h.4l.4-.3a.8.8 0 0 0-.3 0zm-2.6 0a1 1 0 0 0-.1 0c0 .2.2.2.4.3h.3l-.2-.2a1.2 1.2 0 0 0-.4 0zm2.8.1-.2.2.2-.1zm-3 0 .2.2h.1a2.3 2.3 0 0 1-.2-.1zm0 .1a.9.9 0 0 1 0 .2v.1h.2v-.2l-.2-.1zm3 0v.2h-.1l.2.1h.1l-.1-.3zm.6 0-.3.3v.1h.1l.2-.3zm-3 .2a1.1 1.1 0 0 0-.3 0l.3.2h.6a1.3 1.3 0 0 0-.7-.2zm2 0a1.5 1.5 0 0 0-.7.2h.6l.3-.2a1 1 0 0 0-.2 0zm-2.7 0v.1zm3.3.1zm-3 0a1.4 1.4 0 0 0-.2 0h.4a.9.9 0 0 0-.1 0zm2.7 0a1 1 0 0 0-.1 0h-.1.5-.3zm-2.6.2a2.2 2.2 0 0 0-.4 0v.2H193.7v-.2h-3zm.5.2v.2h.1v-.2zm2.2 0zm-3 0h.1zm.3 0h.1zm.2 0v.2h.1v-.2zm.1 0zm.4 0zm.2 0-.1.1.1.1v-.2zm0 0h.2-.1zm.3 0v.2a.1.1 0 0 0 .2 0c0-.1 0-.2-.2-.2zm.2 0h.1zm.2 0v.2h.1v-.2zm.2 0zm.2 0-.1.1v.1h.2l-.1-.2zm0 0h.1zm.3 0-.1.1v.1h.1v-.2zm.1 0zm-2.5 0v.2h.1v-.2zm-.2 0v.2a.1.1 0 0 0 0-.2zm2.9 0-.1.1v.1h.1v-.2zm.3 0-.1.1v.1h.1v-.2zm0 .1v.1zm-3.4 0v.1zm.3 0v.1zm.3 0v.1zm.3 0v.1zm.3 0a.2.2 0 0 1 0 .1zm.4 0v.2-.1zm.3 0v.2h.1v-.1zm.4 0a.2.2 0 0 1 0 .1zm.3 0v.1zm.3 0v.1zm-2.6.2h-.2l1.6.1h1.8v-.1h-3.2zm7-6.5c.3 0 .6.2.8.4l-1-.3-.2.1c.1 0 .6 0 1 .4a2.1 2.1 0 0 0-1.3-.2l-.3.1c.6 0 .9.2 1.7.6.5.3 1.5.4 1.5.4l-.7-.7c-.2-.4-.7-1-1.2-1l-.3.2z" data-v-eb6c4a1f></path><path fill="gold" d="M196 170.3c-1.3.7.7 2.7.6 4.2-.1.8-1.2 1.2-1.8 1.4 1.4-.1 2.2-.8 2-2.1-.2-1-1.6-2.9-.5-3.3.8-.2 1.8.7 2.8 1 1 0 2.9.1 2.6 1.4 0 .4-.6.7-.9 1-.4.6 0 1.5.6 1.3.9-.2 1.1-.2 1.3.3-.1-1.4-1.5 0-1.7-.7-.3-.6.2-1 .5-1.3.3-.1.5-.5.5-.9-.2-1.4-2-1.2-3-1.5-.7-.1-1.5-.7-2.2-.8a1.8 1.8 0 0 0-.8 0zm-28.3 40.5-.1-.3c.1-.1.2-.1.4 0l-.3.3zm-1.7 1c.4.4-.2.6-.2 1l.2-.3.2.2c-.1 0 0 .1 0 .2l.1-.2.2.3.1-.1c.2 0 .3.1.3.2.3 0 .3-.3.6-.3 0 0 .3.1.3.3.2.5 0 .5-.3.6-.4 0-.7-.3-1-.5-.2-.1-.5 0-.7-.2-.6-.2 0-.9.2-1.1z" data-v-eb6c4a1f></path><path fill="gold" d="M166.4 213.5v.3c0-.2.2-.2.2-.2v.4c0-.2.2-.3.3-.1v.1h.3s.3.1.7-.1c.2 0 .3.2.2.4 0 .3-.4.3-.7.2-.4-.3-1-.2-1.2-.5-.2-.1-.2-.4-.1-.6h.3zm2.4 1.8c-.3.3-.9 0-1-.2l-.4-.2v-.1h.2v.2c0-.1.1-.2.3-.1l.1.2v-.3c.2 0 .2 0 .2-.2.4 0 1 .3.6.7zm-1.5-.6v.2s-.4-.2-.4-.4l.4.2zm37.6-3.9a3.3 3.3 0 0 1-1 1.5c-.2-.2-.3-.3-.5-.3 0 0-.2-.5-.6-.6.1.2.2.4 0 .7 0 .1-.3.3-.2.7h-.4c.2-.3 0-1-.4-1-.1-.3-.3-.6-.7-.5l.1.5c-.4.1-.6.5-.5 1h-.1c-.8-.4-1.5-1.1-1.8-2a26.3 26.3 0 0 1 6 0zm.1-1.8a24.8 24.8 0 0 0-2.2-.1v-2.3a3.2 3.2 0 0 1 2.2 2.4zm-3-4.2c0 .4.6 0 .7-.1v.9l-.6-.3c-.3 0 0 .6.2.7h-1c.2 0 .4-.4.4-.6 0-.4-.6 0-.8.1v-.8c.2 0 .5.3.6.2.4 0 0-.6-.1-.7h.9l-.2.3a.9.9 0 0 0-.1.3z" data-v-eb6c4a1f></path><path fill="gold" d="m202.4 206.3.1.1v2.7a24.9 24.9 0 0 1 2.7.2v.1h-.2l-2.6-.2V206.3zm-4 3h.1l2.7-.3a111.4 111.4 0 0 1 .2-2.7v3h-2.7a.4.4 0 0 0-.3.2.4.4 0 0 1 0-.2zm3.7.4c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3 0-.2.1-.3.3-.3.2 0 .3.1.3.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M201.8 210c.2 0 .3-.2.3-.3l-.3.2z" data-v-eb6c4a1f></path><path fill="gold" d="M203 209.7c0 .2-.2.4-.4.4-.1 0-.3-.2-.3-.4s.2-.3.3-.3c.2 0 .4.1.4.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M202.6 210c.2 0 .3-.2.3-.3a.5.5 0 0 1-.3.3z" data-v-eb6c4a1f></path><path fill="gold" d="M203.8 209.8a.4.4 0 0 1-.4.3c-.1 0-.3-.1-.3-.3a.3.3 0 0 1 .3-.3c.2 0 .4 0 .4.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="m203.5 210 .2-.2a.5.5 0 0 1-.2.2z" data-v-eb6c4a1f></path><path fill="gold" d="M204.3 209.5c.1 0 .3.1.3.3a.4.4 0 0 1-.4.4c-.2 0-.3-.2-.3-.4s.2-.3.4-.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M204.3 210c.1 0 .2 0 .2-.2a.4.4 0 0 1-.2.3z" data-v-eb6c4a1f></path><path fill="gold" d="M199.7 209.8c0 .2-.1.4-.3.4s-.4-.1-.4-.4c0-.2.2-.3.4-.3s.3.1.3.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M199.4 210c.2 0 .2 0 .2-.2l-.2.3z" data-v-eb6c4a1f></path><path fill="gold" d="M200.5 209.8c0 .2-.1.3-.3.3s-.3-.1-.3-.3.1-.3.3-.3c.2 0 .3.1.3.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M200.2 210c.2 0 .3-.1.2-.2a.7.7 0 0 1-.2.2z" data-v-eb6c4a1f></path><path fill="gold" d="M201.3 209.7c0 .2-.1.4-.3.4-.2 0-.3-.2-.3-.4s.1-.3.3-.3c.2 0 .3.2.3.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M201 210c.2 0 .3-.1.2-.3 0 .1 0 .2-.2.3z" data-v-eb6c4a1f></path><path fill="gold" d="M202.2 206.5c0 .2-.1.3-.3.3-.2 0-.4-.1-.4-.3 0-.2.2-.4.4-.4s.3.2.3.4z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="m202 206.7.1-.2a.5.5 0 0 1-.2.2z" data-v-eb6c4a1f></path><path fill="gold" d="M202.2 207.3c0 .2-.1.3-.3.3-.2 0-.4-.1-.4-.3s.2-.3.4-.3.3.1.3.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="m202 207.5.1-.2a.7.7 0 0 1-.2.2z" data-v-eb6c4a1f></path><path fill="gold" d="M202.2 208c0 .3-.1.4-.3.4-.2 0-.4-.1-.4-.3 0-.2.2-.3.4-.3s.3 0 .3.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="m202 208.3.1-.2a.5.5 0 0 1-.2.2z" data-v-eb6c4a1f></path><path fill="gold" d="M202.2 208.9c0 .2-.1.3-.3.3-.2 0-.4-.1-.4-.3s.2-.3.4-.3.3.1.3.3z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="m202 209.1.1-.2a.5.5 0 0 1-.2.2zm3.1 1c.2 0 .2 0 .2-.2a.6.6 0 0 1-.2.3z" data-v-eb6c4a1f></path><path fill="gold" d="M205.4 210c0 .2-.2.2-.3.2-.2 0-.3 0-.3-.3 0-.1.1-.3.3-.3.3 0 .4.2.3.5z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M198.6 210.2c.2 0 .2-.2.2-.3a.7.7 0 0 1-.2.3z" data-v-eb6c4a1f></path><path fill="gold" d="M198.6 209.6c.2 0 .3.1.3.3 0 .2-.1.3-.3.3-.3 0-.3-.2-.4-.3 0-.2.2-.3.4-.3zm3.7-.9a.4.4 0 0 0-.2-.2.3.3 0 0 0 .2-.2v.4zm0-.8-.2-.2.2-.2v.4zm0-.8a.6.6 0 0 0-.2-.2l.2-.2v.4zm-.8-.4a.3.3 0 0 0 .2.2l-.2.1v-.3zm0 .8a.6.6 0 0 0 .2.2s-.2 0-.2.2v-.4zm0 .8a.6.6 0 0 0 .2.2l-.2.1v-.3zm0 .8a.3.3 0 0 0 .1.2.5.5 0 0 0-.2.2l-.2-.2c.3 0 .3 0 .3-.2zm-.8.3a.6.6 0 0 0-.1.2l-.2-.2h.3zm-.8 0s0 .2-.2.2l-.1-.2h.3zm-.8 0a.6.6 0 0 0-.2.3 1 1 0 0 0-.2-.2h.4zm-.2.9v-.2l.3.1a1.7 1.7 0 0 0-.3 0zm.7 0 .2-.3a.4.4 0 0 0 .1.2.5.5 0 0 0-.3 0zm.9-.1a.6.6 0 0 0 .1-.2l.2.2h-.3zm.7 0 .2-.3.3.2h-.5zm.7 0 .3-.3.2.2h-.5zm1 0 .1-.3.2.3h-.4zm.8 0 .1-.2.2.2h-.3zm.8 0 .2-.1a.4.4 0 0 0 .1.2h-.3zm.4-.7-.2.2a.4.4 0 0 0-.2-.2h.4zm-.8 0-.2.1-.2-.2h.4zm-.9-.1a.6.6 0 0 0-.1.2.4.4 0 0 0-.2-.2h.3zm-.8 0-.2.1-.2-.2a.3.3 0 0 0 .2-.2s0 .3.2.3zm-1.4-2.9v2.3l-2.3.1c.2-1.1 1.1-2 2.3-2.4zm4.2 3.9v.1l-.1.1a33.6 33.6 0 0 0-6.6 0h-.1v-.2a.8.8 0 0 0 .3 0 30.8 30.8 0 0 1 6.2 0h.3zm-1.8 2.6-.8.3v-.2l.4-.1c-.2-.2-.3-.7.2-.7s.5.5.2.7zm-.2-1h-.2v-.3l.2.3zm-1.7-.3h-.1v-.2l.1.2zm1 1.6-.3.4c-.3.3-.7 0-1.2.1.4-.4.5-.4 1-.3l.1-.3.2.2a.8.8 0 0 0 0-.3c.2 0 .3 0 .3.2zM190.3 201c.1.3.5.8 1 1-.4-1-.5-2.4.2-3.6-.2 0-.5.3-.6.4a9.3 9.3 0 0 0-.2 1.7 5 5 0 0 1 0-1.7l-.4-.4v2.5zm-9.4 10c-.6 0-.8-.1-1.3.2.2-.5 1-.8 1.3-1 .4-.3.7-.7.5-1.9.4.6.9 2.7-.5 2.7zm-3.9-10c-.1.3-.5.8-1 1 .4-1 .5-2.4-.1-3.6l.6.4.2 1.7c.2-.6 0-1.6 0-1.7l.3-.4v2.6zm16.1 7-.4-.4.1 1.6.5.4v-.3c-.2-.6 0-1.1.2-1.5l-.3-.8v1zm-4.6-3-.1.1v.1l.9.2-.8-.3z" data-v-eb6c4a1f></path><path fill="gold" d="M188.6 205c.3.2.9.4 1.2.7l-1.6-.3-.5.8c1-.5 2.4-.4 3.5.6-.3-.8-1.6-2-1.9-2a2.2 2.2 0 0 1-.7.3zm1.2-.7.6.3-.6-.4v.1z" data-v-eb6c4a1f></path><path fill="gold" d="m189.9 204 1.1.9-1.3-.5-.2.3c1.1.8 2.3.8 2.9.9a7.4 7.4 0 0 0-2.3-1.8l-.2.3zm1 .2.6.3h.8l-.6-.2a2 2 0 0 1-.7-.1zm-.7-2.2c.1.5.5 1 .7 1.1-.3-.1-.6-.5-.7-.7l-.1 1.2.7.4c1 .4 2 0 2.3-.5-.3.3-1.3.7-2.2.1.7.3 1.4.2 1.9-.1-.7 0-1.7-.2-2-1.4l-.6-.7v.6z" data-v-eb6c4a1f></path><path fill="gold" d="M191.9 204.3c.5.2.8.2 1.3.6l-1.7-.3.7.5 1.8.7c0-.8-.4-1.4-1.1-1.7l-1 .2z" data-v-eb6c4a1f></path><path fill="gold" d="M193 204c.6.2 1 .8 1 1 .3.1.7.5.8 1 .2.5.1 1-.1 1.6 0 .6.3 1 1 1-.7 0-1-.2-1.1-.8-.2.5 0 .9.4 1 .5.2 1 .2 1.2-.2-1.7-.3-.2-2.2-.9-3.5-.3-.6-.9-1.2-2-1.3a.9.9 0 0 1-.3.2z" data-v-eb6c4a1f></path><path fill="gold" d="M193.1 205.6c.2.1.4.5.5 1-.2-.4-.7-.8-1-1h-.4c1 .8 1.3 1.7 1.5 2.4.6-.7.6-1.4.3-2.1l-.9-.3z" data-v-eb6c4a1f></path><path fill="gold" d="m193 205.6-.6-.2.8.5-.3-.3zm-.8 1-1.4-.8.7 1c.6.2 1 .5 1.4.9 0-1.5-.6-2-1.7-2.1.3.4.8.6 1 1z" data-v-eb6c4a1f></path><path fill="gold" d="m190.2 205.2.4.4 1 .5-.7-.6-.7-.3zm.9 3.4c-.1.6-.5.7-.2 1.5 0-.4.6-.7.7-1.3.1-1.1-.5-2-1.3-2.4.6.6.9 1.4.8 2.2z" data-v-eb6c4a1f></path><path fill="gold" d="M187.7 206.4c1.4-.2 2.3.5 2.4 1.5.1.8-.3 1.6-1.3 1.5 0 .1.4.3.8.2-.4.2-.9 0-1.2-.2.3.6 1.6.8 2.1 0 1-1.2 0-3.2-1.3-3.3-.5 0-1.1 0-1.5.3zm3.6.6c.2.4.4.7.4 1.1.1 1-.2 2 .7 2.2v-.5c.2-1 .1-1.8 0-2.3a5.6 5.6 0 0 0-.4-.3c.2.5.2 1 .1 1.5 0-.6 0-1-.4-1.6h-.4zm-3.6-1.8s-.5.9-.7 1l.4-1h-.4l-.8 2.3c.3-.2 1.7-1.8 2-2.4h-.5zm-1.9 3.1c-.9 1.3-.3 2.7.5 2.7.6 0 .8-.1 1.3.2-.2-.5-1-.8-1.2-1-.5-.3-.8-.7-.6-1.9zm-2.2 13.1c.4-.1.9-.8 1-1-.2-.3-.4-.7-.4-1 .2.2.3.2.5.2v-2.2c.1.4.3 1.6.2 2.2h.2c.1-1.2-.2-3-.5-4.4l-.8-4c-.2 1.2-.2 3.1 0 4.7 0 .5 0 3.7-.2 4.7l-.1-4.7c0-1.6 0-3.5-.2-4.7-.1 1.5-.4 2.5-.8 4-.2 1.3-.5 3.2-.4 4.4h.2c0-.6 0-1.8.2-2.2v2.2l.5-.1-.4.8c0 .3.4 1 1 1.1z" data-v-eb6c4a1f></path><path fill="gold" d="M185.2 214.3c.5 1 1 2 1.1 3.2.1 1.5-.4 2.5-1.7 2.4.2.5.6.8 1.2 1 1 .3 2-.3 2.4-1l.2-.3c-.3-.3-.7-.2-.8 0-.5-.9 0-1.5 1-1.6l-.2-.7c-.8-.1-1-1-1-1.4h.4c-.2-.9-1.1-2-1.8-2.8-.6-.8-1.4-1.8-1.7-3-.2 1.3.5 3 1 4.2z" data-v-eb6c4a1f></path><path d="M187.1 216.8c.3 1.3-.1 2.7-.9 3.2.8-.3 1.5-1.6 1.1-3.3-.3-1.5-1.3-2.7-2-3.9.5 1.4 1.5 2.5 1.8 4zm3.3 2.9c1.1-.3 1.4-1.6 1.2-2.5.2 0 .6.1.9.4-.2-.4-.5-.7-1-.5 0 .9-.1 2.2-1.1 2.6zm-2.3-3.2c.4.5 1.3.3 1.6-.3-.3.4-1.1.5-1.6.3z" data-v-eb6c4a1f></path><path d="M188.6 213.5c.9.6 2.5 1.7 2.3 3.8-.2 1.6-1 1.7-1.5 1.6.7.2 1.1 0 1.4-.6.8-1.5 0-3.6-1.5-4.6l-2.9-1.7c.7.6 1.5 1 2.2 1.5zm3.1 1.7c.3 0 .3-.2.3-.2h-.4c-.5 0 0 .2.1.2zm.5.2c.7 0 1.3-.6.9-1.3 0 .6-.3 1-.9 1.3zm.8 2.6c.4-1-.2-1.8-1.2-1.9 1 .3 1.2 1 1.2 2z" data-v-eb6c4a1f></path><path fill="gold" d="M185.4 207.4c-.5 1.3-.7 1.9-.2 2.7 0-1.2.3-1.7.8-2.2l.5-1.8c-.2.5-.7 1-1.1 1.3zm1-2.2-.5 1 .1-1h-.5v2l.6-.8c.3-.3.5-.8.7-1.2h-.4z" data-v-eb6c4a1f></path><path fill="gold" d="M186.3 205.2h-.2v.4l.2-.4zm1.3 0-.3.4.3-.4zm-5.8 2.2c.4 1.3.6 1.9.2 2.7 0-1.2-.4-1.7-.9-2.2a31.3 31.3 0 0 1-.5-1.8c.2.5.7 1 1.2 1.3zm-2.4-1c-1.4-.2-2.2.5-2.4 1.5 0 .8.4 1.6 1.4 1.5-.1.1-.4.3-1 .2.6.2 1 0 1.3-.2-.3.6-1.5.8-2.1 0-1-1.2 0-3.2 1.3-3.3.5 0 1.1 0 1.5.3zm-4.2-2.1c-.5.2-.8.2-1.3.6l1.7-.3a2 2 0 0 0-.7.5l-1.8.7c0-.8.4-1.4 1.1-1.7l1 .2z" data-v-eb6c4a1f></path><path fill="gold" d="m176.1 204.2-.4.3h-.8l.5-.2.7-.1zm-1.9 1.4.5-.2-.8.5.3-.3zm2.7-3.6c0 .5-.5 1-.7 1.1.3-.1.6-.5.7-.7 0 .6 0 .9.2 1.2l-.7.4c-1.1.4-2.2 0-2.4-.5.4.3 1.4.7 2.3.1-.7.3-1.5.2-2-.1.7 0 1.7-.2 2-1.4l.6-.7v.6zm.4 2-1.2.9 1.3-.5.3.3c-1.1.8-2.4.8-3 .9.5-.8 1.9-1.6 2.4-1.9 0 .2 0 .3.2.4z" data-v-eb6c4a1f></path><path fill="gold" d="m177.4 204.3-.7.3.6-.4v.1zm-.5 1a2 2 0 0 1-.4.3 8 8 0 0 0-1 .5l.7-.6.7-.3z" data-v-eb6c4a1f></path><path fill="gold" d="m175 206.6 1.4-.8-.7 1c-.6.2-1.1.5-1.5.9 0-1.5.6-2 1.7-2.1l-1 1z" data-v-eb6c4a1f></path><path fill="gold" d="M174 205.6c-.1.1-.4.5-.5 1 .2-.4.8-.8 1-1h.4a4.6 4.6 0 0 0-1.4 2.4c-.7-.7-.6-1.4-.3-2.1l.8-.3z" data-v-eb6c4a1f></path><path fill="gold" d="M173 206c-.2.6-.4 1.6.5 2.2l.1-.3c.2.3.3.7.2 1a1.6 1.6 0 0 1-.9 1c.4-.7 0-1.7 0-1.8-.5-1-.9-2 .1-2.8v.6z" data-v-eb6c4a1f></path><path fill="gold" d="m174.1 208 .4-.4v1.6l-.5.4-.1-.3c.2-.6.1-1.1-.2-1.5l.4-.8v1zm1.7-1c-.2.4-.4.7-.4 1.1 0 1 .2 2-.7 2.2v-.5c-.2-1-.1-1.8 0-2.3l.4-.3a2.6 2.6 0 0 0-.1 1.5c.1-.6 0-1 .4-1.6h.4z" data-v-eb6c4a1f></path><path fill="gold" d="M176 208.6c.1.6.5.7.2 1.5 0-.4-.5-.7-.6-1.3-.2-1.1.5-2 1.2-2.4a2.4 2.4 0 0 0-.7 2.2zm2.7-3.5h.2v.1l-.9.2.7-.3z" data-v-eb6c4a1f></path><path fill="gold" d="M178.5 205c-.3.2-.9.4-1.2.7l1.6-.3.6.8c-1-.5-2.5-.4-3.6.6.3-.8 1.6-2 1.9-2l.7.3zm1 .2h.1l.2.4-.3-.4z" data-v-eb6c4a1f></path><path fill="gold" d="m179.3 205.2.8 1-.4-1h.4l.8 2.3c-.3-.2-1.7-1.8-2-2.4h.4zm1.4 0 .5 1-.1-1h.5v2a3 3 0 0 1-.6-.8c-.3-.3-.5-.8-.6-1.2h.3z" data-v-eb6c4a1f></path><path fill="gold" d="M180.8 205.2h.2v.4l-.2-.4zm2.8 3.7a8.5 8.5 0 0 1-1.1-1.7 6 6 0 0 1-.7-2c1.2.3 1.6 1.3 1.8 2.8.1-1.5.5-2.5 1.7-2.8-.1 1.5-1 2.8-1.7 3.7z" data-v-eb6c4a1f></path><path fill="gold" d="M183.6 211c-.8-1.5-1.9-3-1.9-5.4.1 1 .5 1.6 1 2.3.2.4.7.8.8 1.4v.8c.2-.3.1-.6.2-.8 0-.6.6-1 .8-1.4.4-.6.8-1.4 1-2.3-.1 2.4-1.2 4-2 5.3zm-1.7 3.3c-.4 1-1 2-1.1 3.2-.1 1.5.4 2.5 1.7 2.4-.2.5-.6.8-1.2 1-1 .3-2-.3-2.4-1l-.2-.3c.3-.3.7-.1.8 0 .4-.9 0-1.5-1-1.6l.1-.7c.8-.1 1.1-1 1-1.4h-.3c.2-.9 1.1-2 1.8-2.8.6-.8 1.4-1.8 1.7-3 .3 1.3-.5 3-1 4.2z" data-v-eb6c4a1f></path><path d="M180 216.8c-.3 1.3.1 2.7.9 3.2-.8-.3-1.5-1.6-1.1-3.3.3-1.5 1.3-2.7 2.1-3.9-.6 1.4-1.6 2.5-2 4z" data-v-eb6c4a1f></path><path fill="gold" d="M182 211c-.6 1-1.5 1.7-2.4 2.4-.4.3-1 .6-1.2 1.1-.4.7-.3 1.7.5 1.8l.4-.1c0 .2-.1.5-.4.7-.6.4-1.3-.1-1.6-.5-.7.7-.4 1.7.4 1.8.8.2 1.8.1 1.8 1-.6-.3-1 0-1.3.4-1.1.8-2.2.2-2.7-.7-.1-.3-.3-1.2-.1-1.5-1.1.4-.7 1.4-1.2 1.8 0-.7-.7-1-.9-1.5-.1-.9.5-2 1.8-2-.7 0-1.2-.3-1.3-.8-.2-.9.3-1.3.7-1.5-.3.6.5 1.6 1.6 1l2-1.4 3-1.5c.6-.5 1.3-1.3 1.3-2.4.3.7 0 1.3-.3 1.9z" data-v-eb6c4a1f></path><path d="M178.5 213.5c-.9.6-2.5 1.7-2.2 3.8.1 1.6 1 1.7 1.4 1.6-.6.2-1.1 0-1.4-.6-.8-1.5 0-3.6 1.6-4.6l2.8-1.7c-.6.6-1.4 1-2.2 1.5z" data-v-eb6c4a1f></path><path d="M179 216.5c-.4.5-1.3.3-1.6-.3.3.4 1.2.5 1.6.3zm-4-1c-.7 0-1.3-.7-1-1.4 0 .6.3 1 1 1.3zm.4-.3c-.3 0-.3-.2-.3-.2h.5c.4 0-.2.2-.2.2zm-1.3 2.8c-.4-1 .2-1.8 1.3-1.9-1 .3-1.3 1-1.3 2zm2.6 1.7c-1-.3-1.4-1.6-1.2-2.5-.2 0-.6.1-.9.4.2-.4.6-.7 1.1-.5-.1.9 0 2.2 1 2.6z" data-v-eb6c4a1f></path><path fill="gold" d="M193 177.2c0 .3 0 .5-.5.6l.3.3c.2-.2.5-.7.5-1h-.3zm-19 0c0 .3.2.5.6.6l-.3.3c-.2-.2-.5-.7-.4-1h.2z" data-v-eb6c4a1f></path><path fill="gold" d="m174.5 177.7-.3-.3v-.2l.3.5zm1-.4-.6.3v-.4h.6zm16 0c.3 0 .6.2.8.3-.1-.2-.1-.3 0-.4h-.7zm1.1.4.3-.3v-.2a1.4 1.4 0 0 0-.3.5zm-24.4 12.8.4.4-2 .5 2.5-.1a1 1 0 0 0-.4.5l-2.5.5c-1 .1-1.4-.3-1.7-.6.3-.6.7-1 1.2-1l2.5-.2z" data-v-eb6c4a1f></path><path fill="gold" d="M168.1 189.8c.2-.2.7-.9 1.4-.7l1.2.3.1-.2c-1.5-.3-2.6-1-2.6-2.2 1.2-.8 2.4 0 3.1 1v-.2c-.5-.9-1.3-1.3-2-2-.7-.8-.9-2.2-.5-3.3 1.3 1.7 3.6 3.3 4.2 4.7.5 1.4-1 1.7-1.2 2.7-.3 1.1.4 2 1.8 2.4 1 .3 2.2 0 2.7-1h.6v1c-.2 0 0 0-.2.2l.2.6v.8l-.4-.2c0 .2.2.4.4.4v.1a.5.5 0 0 1-.3-.1l-.5-1.4c0-.1-.2 0-.2 0l.4 1.3c.1.6-.3.7-.6 1-.5-.2-1 0-1.2-.7l-.1-1.1c0-.2-.2-.2-.2 0l.1 1.1c0 .5-.5.5-.8.8-.4-.3-1-.3-.9-.9l.3-1.2s0-.1 0 0l-.6 1.2c-.3.6-.7.2-1.3.2-.1-.4-.6-.8-.3-1.2 0-.2.7-.8.7-.9 0 0 0-.2-.1 0-.2 0-.5.4-1 .8-.4.4-1.3-.3-1.5-.4 0-.4 0-1 .5-1.3l1.2-.3v-.2a6.5 6.5 0 0 1-1.4 0c-.6 0-.8-.7-1-1.1z" data-v-eb6c4a1f></path><path fill="gold" d="M176.5 194.6v-.3l.4.2v1.6l-.4-1.5zm-4 4.9V198l.3-.3-.4 1.8zm-4-16.7c-.2.4-.2.6-.2.9l-1.3-1.4a6 6 0 0 0 1.4 2l.3 1-2-1.8c-1-1-1.4-2.4-.6-3.7a7.7 7.7 0 0 0 2.3 3z" data-v-eb6c4a1f></path><path fill="gold" d="M168.3 183.8v.3a10 10 0 0 1-.6-.9l.6.6zm7.4 11.4h.1l.2 1.2-.3-1.2zm-1.7-.2.2-.2-.2 1.4V195zm-1.5-.4.1.2-.3.9.2-1.1zm-2 .7.4-1v.2l-.4.8zm-1.4-1.3.6-.7h.2l-.8.7zm-1.3-1.1.8-.3-.8.3zm-.3-1.7 1.3-.2.4.1-1.7.1zm.5-1.7-.2.2c-.4 0-.8-.2-1.1-.3l1.3.1zm.1-1.8.1.2-1.4-.5 1.3.3zm.8-1.2h-.2a9.9 9.9 0 0 1-1-.7l1.2.7z" data-v-eb6c4a1f></path><path d="m166.9 181.7-.8-.8c-.2.8.6 2.4 1.2 3-1.3-1.1-1.7-2.6-1.3-3.6l.9 1.4z" data-v-eb6c4a1f></path><path fill="gold" d="m177 198-.6.5c-.3-.3-1-.3-1.1-.7l-.2-2.7.4.1.7 1.9-.2-2 .3-.3.6 2v1.2z" data-v-eb6c4a1f></path><path d="M176.4 198.3c-.4-.3-1-.3-1-1 .1.5.5.5 1 .7.2-.3.5-.4.5-.9.2.7-.2.7-.5 1.2z" data-v-eb6c4a1f></path><path fill="gold" d="M169.6 193.3c-.4.3-.8 1-1.2 1.5a46.1 46.1 0 0 0 1.7-1.4l.4-.2c-.1.2 0 .3 0 .4l-1.6 2c-.4.4-1 .3-1.5.4-.1-.6-.4-1.1 0-1.6l1.8-1.3.4.2z" data-v-eb6c4a1f></path><path d="M167.8 195.5c.4 0 .8.1 1.1-.3-.4.7-.9.4-1.3.6-.2-.8-.4-1 .3-1.6-.4.5-.3.8-.1 1.3z" data-v-eb6c4a1f></path><path fill="gold" d="M174.5 194.5c0 .3.2.4.4.5v2.7c0 .5-.5.5-.9.8-.4-.3-1-.3-1-1l.3-2.3.2.2.4-.4c0 .3 0 1.4.2 2l.2-2.2a.7.7 0 0 0 .2-.3zm-2.5 2 .8-1.7.3.3-.4 2.4c-.2.6-.8.5-1.3.7-.2-.5-.8-.7-.4-1.6l.9-2c.1 0 .3.1.5-.1l-.4 2zm-1.2-2.2-.7 1.8 1-1.6.6.1-1 2.2c-.3.4-1 .3-1.4.4-.2-.4-.5-.8-.3-1.2l1.5-2.2c0 .2.3.3.3.5z" data-v-eb6c4a1f></path><path d="M169.6 196.8c.5 0 .7 0 1-.4-.3.7-.7.5-1.2.6 0-.5-.5-.6 0-1.2-.2.4 0 .6.2 1zm2 .9c.4-.2.8-.1 1-.6 0 .7-.7.6-1 .8-.3-.4-.8-.6-.5-1.2 0 .5.2.6.5 1zm2.5.4c.4-.3.7-.3.7-.8.1.8-.4.7-.7 1-.4-.3-1-.3-.9-1 0 .5.6.5.9.8zm-9-6.5c.2.3.8.4 1.3.5-.7 0-1.3-.1-1.6-.5.3-.6.8-.9 1.5-.8-.6 0-1 .2-1.3.8z" data-v-eb6c4a1f></path><path fill="gold" d="M168.7 192v.4l-1.8.8a8 8 0 0 0 1.7-.4l.5.2-1.8 1c-.7.4-1.5 0-1.8-.2 0-.5.2-1.1.8-1.3l2.4-.5z" data-v-eb6c4a1f></path><path d="M166 193.6c.4.2.8.4 1.2.3-.6.3-1 0-1.4-.3.1-.6.3-1 1-1-.6.1-.6.5-.8 1z" data-v-eb6c4a1f></path><path fill="gold" d="m166.2 188.5 2.4.5-.5.4H166a8.2 8.2 0 0 0 2 .4l.2.5h-2.6a2 2 0 0 1-1.5-1c.4-.9 1.4-1 2.2-.8z" data-v-eb6c4a1f></path><path d="M164.5 189.2c.2.5.8.8 1.2.9-.6 0-1.2-.4-1.4-.9.3-.5 1.2-.7 1.8-.5-.6 0-1.2 0-1.6.5z" data-v-eb6c4a1f></path><path fill="gold" d="m166 186.2 2 1v.4l-2-.5c.8.5 1.9.8 2.3 1 .1.1.3.4.7.6-1.2-.2-2.9-.3-4-.8-.3-.2-1-.8-1.1-1.5a2 2 0 0 1 2.1-.2z" data-v-eb6c4a1f></path><path d="M164.5 186.6c0 .6.7 1 1.1 1.2a2 2 0 0 1-1.4-1.3c.6-.5 1.4-.3 2 0-.7-.2-1.2-.2-1.7 0z" data-v-eb6c4a1f></path><path fill="gold" d="M169.7 186.5h-.6c-.2 0-1.5-1-2.5-1.4.5.6 1.3 1 2 1.5a1.2 1.2 0 0 0-.6.4l-2.3-1.2c-.6-.7-1-1.6-1-2.3 2.2.2 3.4 1.8 5 3z" data-v-eb6c4a1f></path><path d="M167 184.7c-.5-.3-1-.6-1.7-.6 0 .4.5 1.2 1 1.7-.8-.5-1.4-1.5-1.3-2 .5 0 1.7.4 2 .9z" data-v-eb6c4a1f></path><path fill="gold" d="M165.4 193c-.1 0-2.4.5-3.5 1 1.2 0 3.5-.5 3.5-.5v.4l-3.5 1c-.1-.6-.7-1-.9-1.1l-.2.8a.5.5 0 0 0-.3-.1c-.1-.4-.4-.4-.7-.4.4-.3.9-.6 1.3-.7-.4 0-1 .2-1.4.6a.4.4 0 0 0-.2-.2c.4-.3 1-.5 1.4-.6l4.8-.6-.3.4zm-3.5 2.5h.2l3.3-1.4.4.1c-.4.2-2 1.2-3 2 1.2-.5 3.3-1.8 3.5-1.8h.8c-.7.4-3.7 2.7-4.6 3.2l-.7.3a1.3 1.3 0 0 0-.1-.3l.6-.2h-.7c.1 0 .3-.2.2-.4v-.4a.4.4 0 0 0-.2-.2c.1-.3.3-.6.3-1zm-1-4.8h4a1.6 1.6 0 0 0-.6.7c-1.2.2-2.1 0-3.5.4 1.3.2 3.3.1 3.6.1l.8.5-4.4.5c-1.4.1-2.4-.3-3-1.2.8-.7 2-1 3-1zm4.7-10.8-.2 1c-1-1-2.3-3-3.5-4.3.7 1.8 2.5 4.2 3.4 5 .1.4.3 1.1.7 1.5-2.3-1.7-5-5-5.6-7-.6-2 0-3.1.6-3.6a37 37 0 0 0 4.6 7.4z" data-v-eb6c4a1f></path><path d="M162.7 176a28.7 28.7 0 0 1-1.8-2.6c-.9 1.3.4 3.8 1 5-.8-1.1-2.4-4.2-1-5.5.6 1.1 1.1 2.2 1.8 3.1zm-4.1 15.8c.3.7 1.9.9 2.7 1-1.4 0-2.7-.3-3.1-1 .6-.6 1.8-1 2.5-.9-.6.1-1.6.4-2.1 1z" data-v-eb6c4a1f></path><path fill="gold" d="m161 188 3 .8c-.2 0-.2.2-.3.4v.2s-2.3-.4-3.5-.3c1.2.4 3.8.7 3.9.8.3.3.7.5 1 .6l-4.6-.1c-1.1-.2-2.9-.9-3.2-2.1 1-.5 2.5-.5 3.6-.2z" data-v-eb6c4a1f></path><path d="M158.2 188.6c.2.5 1.3 1.2 2.5 1.6-1-.1-2.7-.9-3-1.7.8-.4 2.5-.4 3.1-.1-.8 0-1.8-.2-2.6.2z" data-v-eb6c4a1f></path><path fill="gold" d="m160.7 185.3 2.8 1.3.4.7c-.8-.3-2.4-.9-4.3-1.3a34.2 34.2 0 0 0 5.3 2.2c-.3 0-.5.2-.7.3l-3.2-.7c-1.8-.5-3.6-1.7-3.8-3 1-.3 2.5 0 3.5.5z" data-v-eb6c4a1f></path><path d="M160.7 185.6c-1-.2-1.5-.4-2.7-.3.3.5 1.5 1.7 2.5 2-1.6-.4-2.8-1.6-3-2.3 1 0 2.3.2 3.2.6z" data-v-eb6c4a1f></path><path fill="gold" d="m161.6 182.8 3 1.9.8 1h-.6c-.5-.3-3-1.7-4.4-2.2 1.2 1 3.2 2.1 3.7 2.4l-.5.4c-.8-.3-2.8-1-3.6-1.6-1-.8-2.4-1.7-2.2-3.2 1.3-.1 2.7.5 3.8 1.3z" data-v-eb6c4a1f></path><path d="M161.4 183c-.6-.3-2.2-.9-3-1 .3 1.6 1.3 2.1 2.2 2.7-1-.5-2.6-1.7-2.5-3 1 .1 2.4.6 3.3 1.3z" data-v-eb6c4a1f></path><path fill="gold" d="M166.3 183.6a5 5 0 0 0-1.6-.3c-.2-.2-2.6-2-3.8-2.7 1 1.2 3 2.7 3.5 3 0 .2 0 .4.2.7-1.2-.8-3.3-1.8-4.8-3.2-1-1-1.7-2.6-1-4 2.5 2.2 4.7 4.6 7.5 6.5z" data-v-eb6c4a1f></path><path d="M161.7 180.3c-.8-.6-2-2-2.7-2.5-.2 1.8 1.2 3.3 1.7 3.9-.9-.8-2.4-2.5-1.9-4.3 1 .5 2 2 2.9 2.9z" data-v-eb6c4a1f></path><path fill="gold" d="M165.3 181v.4c-.6-.7-1.6-1.9-2-2.7.6.8 1.3 1.8 2 2.4zm-.8 2.3h-.2v.1a18 18 0 0 1-1.7-1.4l1.9 1.3zm-2.4 1.1 2.6 1.3h-.4s-1.6-.8-2.2-1.3zm2 3 .1.3a17 17 0 0 1-2-.8l1.8.6zm-.3 2.1.1.2-1.8-.4 1.7.2zm-1.5 2.3 2-.2v.2h-2zm3.1 1.4v.1c-.6.2-1.1.2-1.9.3.6-.1 1.3-.4 2-.4zm7 7.3.5-2.4c0 .2.4.2.5.4v2.4c-.1 1-.9.8-1.2 1-.4-.2-1.1-.4-1-1l.4-2.5.8-.3c0 .8-.2 1.6 0 2.4zm-5.4-5.3-2.6 3 2.6-2.5.2.5s-2.5 3-3 3.4c-.4.6-1.1.3-1.6.3-.1-.6-.3-1 .2-1.6l4.2-3.6v.5z" data-v-eb6c4a1f></path><path d="M163 199.5c.5 0 .9.2 1.4-.3-.6.8-1 .5-1.6.5-.1-.8-.2-1 .5-1.6-.4.5-.4.8-.4 1.4zm9.3 2c.4-.4 1-.1 1-1 0 1.1-.6.8-1 1.2-.6-.5-1-.2-.8-1.3 0 .9.3.6.8 1z" data-v-eb6c4a1f></path><path fill="gold" d="m169.4 200.5 1.3-3c0 .2.3.4.4.6l-1.2 3.7c-.1.5-1 .3-1.2.6-.2-.3-1-.7-.8-1.2l1.7-3.8h.6c-.2 1-.7 2-.8 3.1z" data-v-eb6c4a1f></path><path d="M168.8 202c.5-.3 1-.2 1.2-1-.2 1.1-.8.8-1.3 1.1-.4-.6-.8-.4-.3-1.5-.2.8 0 .8.4 1.3z" data-v-eb6c4a1f></path><path fill="gold" d="M168.8 196c0 .1-1.8 2.8-2.1 3.6l2.2-2.8.2.5-2.2 4c-.4.3-.9 0-1.4.2-.1-.4-.5-.6-.4-1.3 0-.5 2.4-3.5 2.8-4 .3 0 .6 0 1-.2z" data-v-eb6c4a1f></path><path d="M165.8 201c.6-.1 1 .1 1.3-.7-.3 1.1-.8.7-1.4 1-.3-.8-.7-.7 0-1.7-.3.7-.1.8 0 1.4z" data-v-eb6c4a1f></path><path fill="gold" d="m165.6 197 1.4-1.7v.2l-1.4 1.4zm2 1 1.2-1.7v.3l-1.2 1.5zm2.2 1.2.6-2a.5.5 0 0 0 .3-.1v.2l-1 2z" data-v-eb6c4a1f></path><path d="M171 191.4V191.7s-.6.5-1.2.6l1.1-.9zm4 1.5.2-.1h.1l.1 1.2-.3-1.1zm-1.5.1H173.8l-.3 1v-1zm-1.5-.6h.2l.1.2s-.2.4-.7.9l.4-1zm3.6 2.2c.2-.3.7-.3.5-.7.3.6-.3.5-.4 1-.5-.3-1 0-1-.7.1.4.6.3 1 .4zm-5.4-10.3c-.4-.2-.8-.5-1-.8-.3 1 .4 2.2.7 2.4a3 3 0 0 1-1-2.9l1.3 1.3zm-1.4 3c0 .4.3.9.6 1.2-.5-.3-.9-1-.8-1.3.3-.3 1-.3 1.6 0-.5-.2-1-.2-1.4 0zm-.2 2.5c.2.3.3.7.7 1-.5-.1-.8-.6-1-1 .3-.3.8-.7 1.4-.6a1.7 1.7 0 0 0-1 .6z" data-v-eb6c4a1f></path><path d="M169.2 192.5c.4.2.8.5 1.2.3-.5.5-1 0-1.4-.2.2-.7-.1-1 .7-1.2-.5.2-.4.7-.5 1.1zm2 1.5c.5 0 .9.3 1.1 0-.3.5-.7 0-1.2.2 0-.4-.6-.6-.1-1.1-.3.4.2.6.3 1zm2.3.7c.3-.3.7-.2.7-.6 0 .7-.4.5-.7.8-.2-.3-.8-.2-.7-.9 0 .5.5.4.7.7zm-2.7-4.6v.2l-1.5-.3h1.5zm.3-1.7v.2h-.2c-.2 0-.7-.4-1.2-.8.5.1 1 .3 1.4.6zm-1-3.4 1.8 1.6v.2l-.2.1s-1.3-1.3-1.6-1.9z" data-v-eb6c4a1f></path><path fill="gold" d="m194.8 200.5-.6-2.4c0 .2-.3.2-.5.4v2.4c.2 1 .9.8 1.2 1 .4-.2 1.1-.4 1-1l-.3-2.5-.9-.3c0 .8.2 1.6.1 2.4zm3.2-9.5c.6-.1.8-.9 1-1.2-.2-.2-.6-.9-1.3-.7a6.7 6.7 0 0 0-1.3.3v-.2c1.4-.3 2.5-1 2.5-2.2-1.1-.7-2.3 0-3 1l-.2-.2c.6-.9 1.5-1.3 2.1-2 .7-.8.9-2.2.5-3.3-1.3 1.7-3.6 3.3-4.1 4.7-.6 1.4.8 1.7 1.1 2.7.3 1.1-.4 2-1.7 2.4-1 .3-2.3 0-2.8-1h-.6v1c.2 0 0 0 .2.2a3.7 3.7 0 0 0-.2.6v.8c.1 0 .3 0 .4-.2-.1.2-.2.4-.4.4v.1a.5.5 0 0 0 .4-.1c.2-.3.3-1 .4-1.4 0-.1.2 0 .2 0l-.4 1.3c-.2.6.3.7.6 1 .5-.2 1 0 1.1-.7l.2-1.1c0-.2.2-.2.1 0v1.1c0 .5.5.5.8.8.4-.3 1-.3.9-.9l-.4-1.2s.1-.1.2 0c.1.3.3 1 .5 1.2.3.6.7.2 1.3.2.1-.4.7-.8.4-1.2l-.8-.9s0-.2.2 0c.2 0 .4.4.9.8.4.4 1.3-.3 1.5-.4 0-.4 0-1-.5-1.3l-1.2-.3v-.2h1.4z" data-v-eb6c4a1f></path><path d="m196.4 190-.2.2.2.1 1.4-.3h-1.4zM192 193l-.1-.1h-.2v1.2l.3-1.1zm1.5.1H193.3l.3 1a7.8 7.8 0 0 0 0-1zm1.5-.6h-.2v.2s.1.4.6.9c0-.4-.2-.8-.4-1zm1-1V191.7s.6.5 1.3.6l-1.2-.9zm.8-6.5-1.7 1.7v.2h.2s1.2-1.3 1.5-1.9zm-.8 3.5v.2h.1c.3 0 .7-.4 1.2-.8a4.4 4.4 0 0 0-1.3.6zm-4.6 6.2c-.2-.3-.6-.3-.6-.7-.2.6.3.5.5 1 .5-.3 1 0 1-.7 0 .4-.6.3-.9.4zm5.4-10.3 1.1-.8c.1 1-.5 2.2-.8 2.4a3 3 0 0 0 1-2.9l-1.3 1.3z" data-v-eb6c4a1f></path><path d="M198.3 187.3c0 .4-.2.9-.6 1.2.5-.3 1-1 .9-1.3-.4-.3-1-.3-1.6 0 .4-.2 1-.2 1.3 0zm.2 2.5c-.1.3-.3.7-.7 1 .5-.1.8-.6 1-1-.3-.3-.7-.7-1.4-.6.4 0 .8.3 1.1.6zm-.5 2.7c-.5.2-.9.5-1.3.3.5.5 1 0 1.4-.2-.1-.7.1-1-.7-1.2.6.2.4.7.6 1.1zm-2.2 1.5c-.4 0-.8.3-1 0 .4.5.7 0 1.2.2 0-.4.6-.6.2-1.1.2.4-.2.6-.4 1zm-2.2.7c-.3-.3-.6-.2-.7-.6 0 .7.5.5.7.8.3-.3.8-.2.7-.9 0 .5-.4.4-.7.7z" data-v-eb6c4a1f></path><path fill="gold" d="M198.8 183.8v.3l.6-.9-.6.6zm-8.2 10.8v-.3l-.4.2v1.6l.4-1.5zm8.5-5.1.2.2c.4 0 .9-.2 1.1-.3l-1.3.1zm.5 1.7-1.3-.2-.4.1 1.7.1zm-.3 1.7-.8-.3.8.3zM198 194l-.6-.7h-.2l.8.7zm-1.4 1.3-.4-1v.2l.4.8zm-2-.7-.1.2.4.9-.3-1.1zm-1.5.4-.1-.2.1 1.4V195zm-2.9 3 .5.5c.4-.3 1-.3 1.1-.7l.3-2.7-.5.1-.7 1.9.3-2-.4-.3a29.5 29.5 0 0 0-.6 2v1.2z" data-v-eb6c4a1f></path><path fill="gold" d="M191.4 195.2h-.1l-.2 1.2.3-1.2z" data-v-eb6c4a1f></path><path d="M190.7 198.3c.5-.3 1-.3 1-1 0 .5-.5.5-1 .7-.2-.3-.5-.4-.4-.9-.3.7.2.7.4 1.2z" data-v-eb6c4a1f></path><path fill="gold" d="m198.7 182.8.1.9 1.3-1.4c-.3.8-1 1.7-1.4 2 0 .3-.1.7-.3 1l2.1-1.8c.9-1 1.3-2.4.6-3.7a8.2 8.2 0 0 1-2.4 3z" data-v-eb6c4a1f></path><path d="m200.2 181.7.8-.8c.2.8-.6 2.4-1.2 3 1.3-1.1 1.7-2.6 1.3-3.6a6.2 6.2 0 0 1-.9 1.4z" data-v-eb6c4a1f></path><path fill="gold" d="M197.4 186.5h.6c.3 0 1.6-1 2.5-1.4-.5.6-1.3 1-2 1.5.2 0 .4.1.6.4l2.3-1.2c.7-.7 1.1-1.6 1-2.3-2.2.2-3.4 1.8-5 3z" data-v-eb6c4a1f></path><path d="M200.1 184.7c.5-.3 1-.6 1.8-.6-.1.4-.6 1.2-1 1.7.7-.5 1.3-1.5 1.2-2-.5 0-1.6.4-2 .9z" data-v-eb6c4a1f></path><path fill="gold" d="m201 188.5-2.5.5.5.4h2.2a8.2 8.2 0 0 1-2 .4l-.2.5h2.6a2 2 0 0 0 1.5-1c-.4-1-1.3-1-2.2-.8zm.2-2.3-2 1-.1.4 2-.5c-.8.5-1.8.8-2.2 1a2.1 2.1 0 0 1-.7.6c1.2-.2 2.9-.3 4-.8.3-.2 1-.8 1.1-1.5a2 2 0 0 0-2.1-.2z" data-v-eb6c4a1f></path><path d="M202.7 186.6c-.1.6-.8 1-1.2 1.2a2 2 0 0 0 1.5-1.3c-.7-.5-1.5-.3-2 0a2.4 2.4 0 0 1 1.7 0zm-.1 2.6c-.2.5-.8.8-1.2.9.6 0 1.2-.4 1.4-.9-.3-.5-1.2-.7-1.8-.5.6 0 1.2 0 1.6.5z" data-v-eb6c4a1f></path><path fill="gold" d="M198.9 190.5a6.2 6.2 0 0 1-.4.4l2 .5-2.5-.1.4.5 2.5.5c1 .1 1.3-.3 1.7-.6-.2-.6-.7-1-1.2-1l-2.5-.2z" data-v-eb6c4a1f></path><path d="M202 191.6c-.2.3-.8.4-1.2.5.6 0 1.2-.1 1.5-.5-.3-.6-.8-.9-1.5-.8.6 0 1 .2 1.3.8z" data-v-eb6c4a1f></path><path fill="gold" d="M198.4 192v.4l1.9.8a8 8 0 0 1-1.8-.4l-.4.2c.3.2 1 .7 1.8 1 .6.4 1.4 0 1.7-.2 0-.5-.2-1.1-.8-1.3l-2.4-.5z" data-v-eb6c4a1f></path><path d="M201.1 193.6c-.3.2-.8.4-1.2.3.6.3 1 0 1.4-.3-.1-.6-.3-1-1-1 .6.1.6.5.8 1z" data-v-eb6c4a1f></path><path fill="gold" d="M197.5 193.3c.4.3.8 1 1.2 1.5a46 46 0 0 1-1.6-1.4c-.3 0-.3-.1-.4-.2v.4a20 20 0 0 0 1.5 2c.4.4 1 .3 1.5.4.2-.6.5-1.1 0-1.6L198 193a1.3 1.3 0 0 0-.4.2z" data-v-eb6c4a1f></path><path d="M199.4 195.5c-.5 0-.9.1-1.2-.3.4.7.9.4 1.4.6.1-.8.3-1-.4-1.6.4.5.3.8.2 1.3z" data-v-eb6c4a1f></path><path fill="gold" d="m196.3 194.3.7 1.8-1-1.6-.5.1 1 2.2c.2.4.9.3 1.3.4.2-.4.5-.8.3-1.2l-1.5-2.2c0 .2-.2.3-.3.5z" data-v-eb6c4a1f></path><path d="M197.5 196.8c-.4 0-.7 0-1-.4.3.7.7.5 1.2.6 0-.5.5-.6 0-1.2.3.4 0 .6-.2 1z" data-v-eb6c4a1f></path><path fill="gold" d="M192.7 194.5c0 .3-.3.4-.4.5l-.2 2.7c0 .5.6.5 1 .8.4-.3 1-.3 1-1l-.3-2.3-.2.2-.4-.4-.1 2-.3-2.2-.1-.3zm2.5 2c-.4-.5-.6-1.1-.8-1.7l-.4.3.4 2.4c.2.6.8.5 1.3.7.3-.5.8-.7.5-1.6l-1-2c-.1 0-.3.1-.4-.1l.4 2z" data-v-eb6c4a1f></path><path d="M195.6 197.7c-.5-.2-.9-.1-1-.6 0 .7.6.6 1 .8.2-.4.7-.6.3-1.2.2.5-.1.6-.3 1zm-2.5.4c-.4-.3-.7-.3-.8-.8-.1.8.4.7.8 1 .3-.3 1-.3.8-1 0 .5-.5.5-.8.8z" data-v-eb6c4a1f></path><path fill="gold" d="M200.3 187.4c-.5 0-1 .2-1.3.3v.2l1.3-.5zm-2-1 .1.1a8.2 8.2 0 0 0 1-.7l-1.2.7zm-3.6 13-.1-1.4a3.6 3.6 0 0 1-.3-.3l.4 1.8zm8.6-9.9-.1.2 1.8-.4-1.7.2zm1.5 2.3-2-.2v.2h2zm-1.2 1.8c-.6-.1-1.3-.4-2-.4l.1.1c.6.2 1.1.2 2 .3zm-.9 1.6-1.5-1-.2.1 1.7 1zm-1.2 1.7-1.4-1.6v.2l1.4 1.4zm-2 1.2-1.2-1.8v.3l1.2 1.5zm-2.2 1.1-.6-2a.8.8 0 0 1-.2-.1v.2l.8 2zm4.5-18.1v.3c.6-.7 1.6-1.9 2-2.7-.5.8-1.3 1.8-2 2.4zm.9 2.2h.1v.1l1.8-1.4c-.7.3-1.4.8-2 1.3zm2.3 1.1-2.5 1.3h.3s1.6-.8 2.2-1.3zm-2 3a.7.7 0 0 1 0 .3l2-.8-2 .6z" data-v-eb6c4a1f></path><path fill="gold" d="m201.5 179.9.3 1c1-1 2.2-3 3.4-4.3-.7 1.8-2.5 4.2-3.4 5-.1.4-.3 1.1-.7 1.5 2.3-1.7 5-5 5.6-7 .7-2 .1-3.1-.6-3.6a40.8 40.8 0 0 1-4.6 7.4z" data-v-eb6c4a1f></path><path d="M204.4 176a25 25 0 0 0 1.9-2.6c.8 1.3-.5 3.8-1 5 .8-1.1 2.3-4.2.9-5.5a43.9 43.9 0 0 1-1.8 3.1zm-9.5 25.5c-.5-.4-1-.1-1-1 0 1.1.5.8 1 1.2.6-.5 1-.2.8-1.3 0 .9-.4.6-.8 1z" data-v-eb6c4a1f></path><path fill="gold" d="M197.8 200.5c-.4-.6-1.1-2.4-1.4-3l-.3.6c.2 1 1 3.3 1 3.7.3.5 1 .3 1.4.6.2-.3.9-.7.7-1.2a27 27 0 0 0-1.7-3.8h-.6l.9 3.1z" data-v-eb6c4a1f></path><path d="M198.4 202c-.6-.3-1-.2-1.3-1 .2 1.1.8.8 1.3 1.1.5-.6.9-.4.4-1.5.2.8-.1.8-.4 1.3z" data-v-eb6c4a1f></path><path fill="gold" d="m198.3 196 2.2 3.6-2.2-2.8-.2.5c.2.6 2 3.7 2.2 4 .4.3.8 0 1.3.2.1-.4.6-.6.5-1.3-.2-.5-2.5-3.5-2.8-4-.4 0-.7 0-1-.2z" data-v-eb6c4a1f></path><path d="M201.3 201c-.5-.1-1 .1-1.3-.7.4 1.1.9.7 1.5 1 .2-.8.6-.7 0-1.7.2.7 0 .8-.2 1.4z" data-v-eb6c4a1f></path><path fill="gold" d="m200.2 195.2 2.6 3-2.8-2.5v.5l2.8 3.4c.5.6 1.2.3 1.7.3.1-.6.3-1-.2-1.6a210 210 0 0 0-4.2-3.6v.5z" data-v-eb6c4a1f></path><path d="M204.2 199.5c-.5 0-1 .2-1.4-.3.5.8 1 .5 1.6.5 0-.8.1-1-.6-1.6.5.5.5.8.4 1.4z" data-v-eb6c4a1f></path><path fill="gold" d="m205 195.4-3.3-1.3-.4.1c.4.2 2 1.2 3 2-1.2-.5-3.3-1.8-3.5-1.8h-.8c.7.4 3.7 2.7 4.6 3.2 1.3.6 1.7.1 2.2 0-.3-1.1-.6-1.7-1.7-2.2z" data-v-eb6c4a1f></path><path d="M206.3 197.2c-.6.1-.8.4-1.4.2.7.3 1 .1 1.6 0-.1-.7-.2-1-1-1.6.5.4.6.8.8 1.4z" data-v-eb6c4a1f></path><path fill="gold" d="M201.7 193c.2 0 2.4.5 3.5 1-1.2 0-3.4-.5-3.5-.5l.1.4c.8.4 3.2 1 3.6 1.2.9.3 2.4.2 2.9-.4a2.9 2.9 0 0 0-2.1-1.5l-4.9-.6c.2 0 .3.3.4.4z" data-v-eb6c4a1f></path><path d="M207.7 194.6c-.8.5-1.7.4-2.3.3.7.2 1.8.3 2.6-.3a2.5 2.5 0 0 0-2-1.2c.6.1 1.3.6 1.7 1.2z" data-v-eb6c4a1f></path><path fill="gold" d="M206.2 190.7h-4c.4.3.5.6.6.7 1.2.2 2.1 0 3.5.4a21 21 0 0 1-3.6.1c-.2.2-.4.4-.8.5l4.4.5c1.4.1 2.4-.3 3-1.2-.8-.7-2-1-3-1z" data-v-eb6c4a1f></path><path d="M208.5 191.8c-.3.7-1.8.9-2.7 1 1.5 0 2.7-.3 3.2-1-.6-.6-1.9-1-2.6-.9.7.1 1.7.4 2.1 1z" data-v-eb6c4a1f></path><path fill="gold" d="m206.2 188-3 .8.3.4-.1.2c.1 0 2.3-.4 3.5-.3-1.1.4-3.8.7-3.8.8-.3.3-.7.5-1.1.6l4.6-.1c1.2-.2 3-.9 3.3-2.1-1-.5-2.6-.5-3.7-.2z" data-v-eb6c4a1f></path><path d="M209 188.6c-.3.5-1.4 1.2-2.6 1.6 1-.1 2.7-.9 3-1.7-.7-.4-2.5-.4-3-.1.7 0 1.7-.2 2.6.2z" data-v-eb6c4a1f></path><path fill="gold" d="m206.4 185.3-2.8 1.3-.4.7c.8-.3 2.4-.9 4.3-1.3-1.3.7-3.5 1.5-4.9 2a1 1 0 0 1-.3.2c.3 0 .4.2.7.3l3.2-.7c1.7-.5 3.5-1.7 3.8-3-1-.3-2.6 0-3.6.5z" data-v-eb6c4a1f></path><path d="M206.5 185.6c1-.2 1.4-.4 2.6-.3-.3.5-1.5 1.7-2.5 2 1.7-.4 2.8-1.6 3-2.3-1 0-2.3.2-3.1.6z" data-v-eb6c4a1f></path><path fill="gold" d="m205.5 182.8-3 1.9-.8 1h.6c.5-.3 3-1.8 4.4-2.2-1.1 1-3.2 2.1-3.7 2.4l.6.4c.7-.3 2.8-1 3.5-1.6 1-.8 2.4-1.7 2.3-3.2-1.4-.1-2.8.5-4 1.3z" data-v-eb6c4a1f></path><path d="M205.8 183a11 11 0 0 1 3-1c-.4 1.6-1.4 2.1-2.3 2.7 1-.5 2.6-1.7 2.6-3-1.1.1-2.5.6-3.3 1.3z" data-v-eb6c4a1f></path><path fill="gold" d="m200.8 183.6 1.6-.3c.2-.2 2.6-2 3.8-2.7-1 1.2-3 2.7-3.4 3 0 .2 0 .4-.2.7 1.2-.8 3.3-1.8 4.7-3.2 1-1 1.7-2.6 1.1-4-3 2.4-5 4.7-7.6 6.5z" data-v-eb6c4a1f></path><path d="m205.4 180.1 2.7-2.3c.2 1.8-1.2 3.3-1.7 3.9 1-.8 2.4-2.5 2-4.3-1.1.5-2.2 2-3 2.7z" data-v-eb6c4a1f></path><path fill="#FFF" d="M188 192.5h.4s-.2.2-.3.1l-.1-.1z" data-v-eb6c4a1f></path><path fill="#C00" d="m184.4 195.6.3 1c0 .2-.1.2-.3.3l-.4-1.2c.1-.2.3-.1.4-.1z" data-v-eb6c4a1f></path><path d="M188.4 195v.1h-.2l.2-.1zm-2.9-2h.1l-.5.4.4-.3zm.4-.2-.2.2c.1-.2-.3 0-.3 0l.5-.2zm1.2-.8a.8.8 0 0 0-.5 0h.5zm.4 1.4.3.3-.1.1h-.1v-.4z" data-v-eb6c4a1f></path><path fill="#FFF" d="M183.7 192.7c.2 0 .3.3.2.5l-.2-.5z" data-v-eb6c4a1f></path><path d="M183.4 192h.2-.2zm0-1 .5.2h.3l-.1.5-.1-.3-.5-.3-.3.2.2-.3zm0 .5h.3l-.1.1h-.2v-.1z" data-v-eb6c4a1f></path><path fill="#FFF" d="m180.5 190 .2.5-.2-.4zm0 1.1v-.4l.3-.1h.2l-.2.1h.3l-.3.1h.3l-.2.2c.2-.1.2 0 .2 0a.6.6 0 0 1 0 .2v-.1c0-.1-.2 0-.2 0l-.1.3.2 1h.3l.2.6h-.6a.7.7 0 0 1-.4 0v-1.9zm7.3 4.2.1.1h-.2l.1-.1zm-4 2.9.2.6h-.1c-.2 0-.4-.4-.3-.6h.1zm-.1.8a2 2 0 0 1-.2.5l-.6.6c0 .7 1.6 1.4 1.7 1.8l-.3.1-.1-.2c-.1-.1-.4 0-.5-.2l-.3-.3a7.4 7.4 0 0 0-1.1-1l.1-.4-.1-.7.1-.5c.5.2.7.3 1.3.3zm-3.4 3.6.2.4-.7-.1c.1-.2.5-.3.5-.3zm4-.4c0-.2.2-.2.4-.3a.4.4 0 0 1 .2.3h-.6zm-.1-3 .1.5c-.3 0-.1-.2-.1-.4zm.4-2.1c.2.3.3 1.1.4 1.5l.2 1.1h-.3v-.7l-.3-2zm.6 2.4.3.2h-.3v-.2zm-.2-3c.2 0 1.3-.2 1.9.2.3.2.4 1 .3 1.4 0 .2-.1.3-.3.4v-.6l-.1.6.3 1.2.2.4v.6l.6 1.6-.3.2c-.2 0-.2-.2-.2-.6 0-.3-.6-1.2-.7-1.5l-.1-.6-.4-.7a2.1 2.1 0 0 0-.5-.4 1.4 1.4 0 0 0-.3-.2s0-.2 0-.3l-.1.1a.8.8 0 0 1 0 .2h-.3l-.2-.8.5-.1-.4-.9.1-.2z" data-v-eb6c4a1f></path><path fill="#FFF" d="M187 196.8h.3V198.2c0-.5 0-1-.2-1.4zm0-.2.1-.1h.2l-.2.2-.1-.1zm0-.1v.1c-.4-.2-1.2-.3-2-.1l-.2-.1c.8-.2 1.9 0 2.2 0zm.3 0 .2-.2v.2h-.2zm1.7 1 .4.1v.3l-.2.6-.4 1.2a.7.7 0 0 1-.4.3v-.5h.1v-.3c0-.1.2 0 .2-.2s.3-.8 0-.9c-.3-.2-1 .3-1.5.4.1-.2.4-.4.4-.8l1.4-.3z" data-v-eb6c4a1f></path><path fill="#FFF" d="M188.2 199.4c.1 0 .2.4 0 .7h-.3c0-.3.2-.7.3-.7zm-.2 3 .2.4h-.6c0-.2.3-.3.4-.3zm-.9-6a5.8 5.8 0 0 0-1.4-.2h-1l-.2-.5c-.1-.5-.2-.9 0-1.5.5.6 1.8 1.3 2.7 1.6l.2.5-.3.1z" data-v-eb6c4a1f></path><path fill="#FFF" d="m184.6 194 1.3.7 1.6.7-.3.3c-.1 0-.7-.2-1.1-.5-.7-.3-1.5-1-1.5-1.2zm-5.5 2c.5-.4 1.4.1 1.6.6a1 1 0 0 0-.2.3c0-.3-.5-.3-.6 0v1c0 .4-.2.7-.3 1l-.1-1.4v1l-.4.8v-1.1c0 .8-.2 1-.5 1.5-.1-1 .3-1.3.3-2-.1.3-.1.8-.4 1l.1-.4c0-1 0-1.7.5-2.2zm1.8-4.7h.1l3.8 9.1.7 2-.8-2-3.8-9.1zm2.4 3.2h.3v.3h-.3v-.3zm0-.3h.4v.3h-.4v-.3zm.1-.4h.3v.4h-.3a7.2 7.2 0 0 1 0-.4zm.5-.5c.3 0 0 .9 0 1.4h-.1l-.1-.2v-.2h.2-.2v-.4l.3.1-.2-.2v-.2l.1-.3zm0 1.6c-.2.2-.2 0-.2 0l-.1-.1v-.2h.2v.3z" data-v-eb6c4a1f></path><path fill="#FFF" d="M183.3 195c0 .1.4 0 .5.3l.5 1.5c.2.5 0 1.3.2 1.9 0 0 0 .3.3.5v.4h-.3l-1-2.4.2-.5c-.1 0-.2.1-.2 0l.1-.4c-.2 0-.3.4-.3.4l-.4-1.1v-.4h-.2l-.4-1V193c.1 0 .3.1.3.3 0-.2 0-.4-.2-.4h-.6l-.3-.7h.5c.4-.2.8 0 1 .3v.5l.2.1c.2-.1.1-.4 0-.6l-.2-.4v-.3c0 .2.3.5.5.6.3.4.3.7.3 1.1v.2h-.3v-.3.3h-.4l-.2-.5.1.5v1-1h.5v.2a.8.8 0 0 1 0 .2h-.2.1v.3l-.3.1h.3v.2l-.3.1.7.1h-.5zm-.9 0 .3.8s-.3-.1-.3-.3a.8.8 0 0 1 0-.4z" data-v-eb6c4a1f></path><path fill="#C00" d="M182.3 195c0 .4-.2.5.3.8l-.2.1-.4-.4a1.3 1.3 0 0 1-.2-.3l.5-.1z" data-v-eb6c4a1f></path><path fill="#FFF" d="M182.1 195.9c.2.4.2 1.3.2 1.8v.7l1.2-.2c0 .3 0 .4.3.7a2.1 2.1 0 0 1-.7 0c-.3 0-.6-.2-.8-.4 0 .1 0 .5-.3.8-.3.5-.8.5-1.2.8-.3.3-.6 1.2-.6 1.7v.7c-.2 0-.3.2-.5.3 0 0 0-.4.2-.6l-.3-.1.5-1.4v-1.3s.6-.2.6-.5l-.2-.7c0-.8 0-1.5.6-1.9l1-.4z" data-v-eb6c4a1f></path><path fill="#C00" d="m183.3 197.2-.4.2c-.3 0-.5-1-.6-1.4.3-.2.4 0 .4 0l.6 1.2zm1-2.4.1.7a.8.8 0 0 0-.4 0v-.5l.3-.2z" data-v-eb6c4a1f></path><path fill="#FFF" d="M187.7 192.4c.3.2.5.5.6.8a1 1 0 0 0-.4 0 3.4 3.4 0 0 0-.3-.7h.1z" data-v-eb6c4a1f></path><path fill="gold" d="M190 189.2c-1.7-.7-2.4-2.2-2.7-4.3l.1 1.6c-.2-.5-.2-1-.2-1.6-.3 1.6.1 3.2 1.3 4.4h1.7v1.6c1.2.2 2.3-.7 1.8-2-.6.6-1.3.5-2 .3zm-6.8-5c.3 1.3.3 2.4.2 3-.4-2.1-1.3-4.2-2.6-6.2.8 1 1.8 2 2.4 3.3z" data-v-eb6c4a1f></path><path fill="gold" d="M181.3 182.3c.6 1 .7 2.6.6 4.8-.4-2.1-1.3-3.8-1.4-4.6.4.5.9 1.3 1.2 2.2 0-.5-.8-3-1-3.6l.6 1.2zm-3.3 5.4c.6-.2 1-1 1-1 0 .3-.2.8-.4 1-.6.6-1.8.5-2-.3 1.2.5 2-.5 2.4-1.8 0 .8-.3 1.7-1 2z" data-v-eb6c4a1f></path><path fill="gold" d="M177 189.2h.2c1.7-.7 2.3-2.2 2.6-4.4v1.7l.2-1.7a5 5 0 0 1-1.4 4.4H177v1.7c-1.2.2-2.3-.7-1.8-2 .6.5 1.2.5 1.8.3z" data-v-eb6c4a1f></path><path d="m178.5 188.8.8-1a2 2 0 0 1-.8 1zm-2.3.8a1.4 1.4 0 0 1-.8 0c0 .2.1.7.6 1-.6-.2-1-1-.7-1.3.2.2.6.3 1 .3z" data-v-eb6c4a1f></path><path fill="gold" d="M181.2 180.8c-.2-.5-1.2-1.4-1.4-1.7l1.2.6a13 13 0 0 1 2 4c-1.3-2-2.5-2.8-3.4-4.6.6.4 1 1.3 1.6 1.7zm-2.2-.2c.3.5.8 2 .8 2.2a4.2 4.2 0 0 0-1.6-1.4l-1.5-1.2-.8-1c.5.5 2 1.5 2.8 2a16.3 16.3 0 0 0-1.8-2.6c.8.5 1.7 1.2 2.1 2z" data-v-eb6c4a1f></path><path fill="gold" d="m180 176.4.7-.2-.8.5a7 7 0 0 1-4.1.5c-.4 0-1.3-.4-2-.1 0 .3.4 1 .5 1.1l1.5-.6a6 6 0 0 1 2.5-.1 6 6 0 0 0 2 0c-.7.5-2 .6-3 .3.8.6 1.7 1.7 2 2.8-.8-1.1-2-2-3-2.5.8.7 1.7 2 2.1 2.8a14 14 0 0 1-3-2.4 5.6 5.6 0 0 0 1.2 1.6c-.2 0-1.1-.5-1.8-1.1a7.5 7.5 0 0 1-1.6-2.4c-.1-.3 0-.3.1-.3h6.7zm-7.6.8c1.1 1.7 2.4 2.8 4.1 3.8-.1.3-.7-.2-1-.4a6 6 0 0 0-3-1.3c-.7 0-1.4.2-1.8.7-.4-.4-.5-1.3-.3-1.8.3-.7 1.2-1 2-1z" data-v-eb6c4a1f></path><path d="M171.8 179c.2-.2.2 0 .2 0l-.7.2c0-.2.1-.4.4-.5.3-.1 0 .2 0 .2z" data-v-eb6c4a1f></path><path fill="gold" d="M174.5 180.3c-2.3 0-2.3 1-3.3 1.3-.7.2-1.5 0-1.9-.8.5.3 1 .3 1.7.2.7-.2 1.4-.7 2.2-.8h1.3zm1 .6c-.8 0-2.3-.2-2.7 1.3-.2-.4 0-.8.3-1 0 0 .4-.7 2.3-.3zm-2.5-4.1a7 7 0 0 0 1.4 2.2c.5.4 1.4 1 2 1.2.6.4 1.6 1.1 2 1.8.4.6.7 1.5.6 2.4-.4-1.3-1.4-3-2.5-3.7-1-.6-2-1.2-2.6-2-.4-.5-1-1-1.3-1.7-.2-.3.3-.5.4-.2zm2.3.8.5-.3c-.1.2-.4.3-.5.3z" data-v-eb6c4a1f></path><path fill="gold" d="M179.3 181c.3.3 1 .9 1.1 1.3.2 1.3.1 3.5-.2 4.7 0-1-.1-2.8-.6-3.6a6 6 0 0 1-.7 4c.4-1.1.5-3.4 0-4.7l-.5-1c.6.2 1.5 1.2 1.7 1.8-.2-1-.5-1.7-.8-2.6z" data-v-eb6c4a1f></path><path fill="gold" d="m180.3 181.4-1.1-1.8 1 .8c.4.6.9 2 1 3-.6-1.1-1.5-2.2-2-2.6 0-.4 0-.8-.2-1.1l1.3 1.7zm1.3 4.8c0 1-.5 1.8-.8 2.5 0-1 0-2-.3-2.8v-2c.2.2.5 1.6.6 2.3l-.3-2.4a9.5 9.5 0 0 1 .8 2.4z" data-v-eb6c4a1f></path><path fill="gold" d="M180 189.3h-.4c.2-.6.5-2.2.5-3.1v1.8c.3-.8.3-1.2.4-1.9.2 1.2.2 2.1-.5 3.2zm.6 0h-.4c.2-.4.4-.8.5-1.4v1.4zm.8 0h-.6c0-.7.4-1.2.6-1.8v1.8zm1-1.3-.4 1.3h-.4v-2.9l.3 1.7c0-.8.2-1.6.1-2.2l.4 2.1zm0 1.3h-.3c0-.3.2-.7.4-1v1zm1 0h-.7l.7-1.8c.2.6 0 1.2 0 1.8zm-.8-3c0-1-.2-1.7-.4-2.6l.4 1.3.7 2.3-.7 1.7c0-1 0-1.7-.3-2.6l-.2-1-.2-1.7.7 2.6zm5.5-5.7c-.3.5-.8 2-.8 2.2a4.2 4.2 0 0 1 1.6-1.4l1.5-1.2.8-1c-.5.5-2 1.5-2.8 2 .5-1 1.2-2 1.8-2.6-.7.5-1.7 1.2-2.1 2zm6.7-3.4a12.7 12.7 0 0 1-4.2 3.8c.1.3.7-.2 1-.4a6 6 0 0 1 3-1.3c.7 0 1.4.2 1.8.7.4-.4.5-1.3.3-1.8-.3-.7-1.2-1-2-1z" data-v-eb6c4a1f></path><path d="M195.4 179c-.2-.2-.2 0-.2 0l.6.2c0-.2 0-.4-.4-.5-.2-.1 0 .2 0 .2z" data-v-eb6c4a1f></path><path fill="gold" d="M192.6 180.3c2.3 0 2.4 1 3.3 1.3.7.2 1.6 0 1.9-.8-.5.3-1 .3-1.7.2-.7-.2-1.3-.7-2.2-.8h-1.3zm-1 .6c.9 0 2.3-.2 2.7 1.3.2-.4 0-.8-.3-1-.7-.5-1.5-.5-2.3-.3zm2.6-4.1a7 7 0 0 1-1.5 2.2c-.4.4-1.3 1-1.9 1.2-.7.4-1.7 1.1-2 1.8-.4.6-.7 1.5-.7 2.4.4-1.3 1.4-3 2.5-3.7 1-.6 2-1.2 2.6-2 .4-.5 1-1 1.3-1.7.2-.3-.3-.5-.3-.2zm-2.4.8-.4-.3c-.2 0 .3.3.4.3zm-6.6 1.8a3 3 0 0 0 3-1.3h-.5c-.4.8-1.7 1.3-2.5 1.3zm3.2-1.3a10 10 0 0 0-1.4 2.2c1-.6 2-1.8 2.5-2.3l-1 .1z" data-v-eb6c4a1f></path><path fill="gold" d="M186.7 182.4c-.2 1.2-.1 3.5.2 4.6 0-1 .2-2.8.7-3.5a6 6 0 0 0 .6 4 9.6 9.6 0 0 1 0-4.8c0-.4.3-.8.5-1-.6.2-1.5 1.2-1.7 1.9.2-1 .5-1.8.8-2.6-.4.3-1 .8-1 1.4zm-1-.1c-.5 1-.6 2.6-.5 4.8.4-2.1 1.3-3.8 1.5-4.6a6.7 6.7 0 0 0-1.3 2.2c0-.5.8-3 1-3.6l-.6 1.2z" data-v-eb6c4a1f></path><path fill="gold" d="m186.8 181.4 1.2-1.8-1.1.8c-.4.6-.8 2-1 3 .6-1.1 1.5-2.2 2-2.6l.2-1.1-1.3 1.7zm-.9-.6c.2-.5 1.2-1.4 1.5-1.7l-1.3.6a13 13 0 0 0-2 4c1.3-2 2.5-2.8 3.4-4.6-.6.4-1 1.2-1.6 1.7z" data-v-eb6c4a1f></path><path fill="gold" d="M184 184.3a8.1 8.1 0 0 0-.3 3c.4-2.2 1.4-4.3 2.7-6.3-.9 1-1.8 2-2.4 3.3z" data-v-eb6c4a1f></path><path fill="gold" d="m184.5 186.3.5-2.6-.5 1.3c-.1.6-.6 1.8-.6 2.3.1.7.4 1.2.6 1.7 0-1 .1-1.7.3-2.6l.3-1v-1.7l-.6 2.6zm-.8 3h.7l-.7-1.8v1.8z" data-v-eb6c4a1f></path><path fill="gold" d="M184.6 189.3h.4c0-.3-.2-.7-.4-1v1zm.1-1.3.5 1.3h.3l.1-1.9-.1-1-.3 1.7-.1-2.2-.4 2.1zm1 1.3h.6c0-.7-.4-1.2-.6-1.8a7.7 7.7 0 0 0 0 1.8zm.8 0h.4a6 6 0 0 1-.5-1.4l.1 1.4zm.6 0h.5c-.3-.6-.6-2.2-.6-3.1v1.8c-.3-.8-.3-1.2-.4-1.9a4 4 0 0 0 .5 3.2z" data-v-eb6c4a1f></path><path fill="gold" d="M185.5 186.2c.1 1 .6 1.8.8 2.5 0-1 .1-2 .3-2.8v-2c-.2.2-.5 1.6-.6 2.3l.3-2.4c-.3.7-.7 1.6-.8 2.4zm2.2 3h.5c-.1-.3-.8-1.1-1-1.7l.5 1.8z" data-v-eb6c4a1f></path><path d="m188.6 188.8-.8-1 .8 1z" data-v-eb6c4a1f></path><path fill="gold" d="M189.2 187.7c-.7-.2-1-1-1-1l.3 1c.7.6 1.9.5 2.1-.3-1.3.5-2.2-.5-2.5-1.8 0 .8.4 1.8 1 2z" data-v-eb6c4a1f></path><path d="M191 189.6h.7c0 .2-.1.7-.5 1 .6-.2.9-1 .7-1.3a1.6 1.6 0 0 1-1 .3z" data-v-eb6c4a1f></path><path fill="#FFF" d="m184.8 196.4.4 1.2h-.4l-.2-.8c.2 0 .2-.4.2-.4zm-2.5 0 .3.9.4.1h.3l.3.7-1.1.2-.2-2zm2.2.6.2.7-.2.1v-.8z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="m184.4 204.2.1.2-.2-.2zm1.5-.6h.1-.1zm-1 .2.2.1h-.2zm-5.5-.5v.1-.1zm7.7.3v.3h.2v-.1l.2-.3-.1-.1-.1.4-.2-.1v-.1zm-5.8-.3.1.1h-.1zm-2.4-1.5a.3.3 0 0 1-.1.3c0-.3 0-.4-.3-.4l.4.1zm2 1.2v.4l.2.3-.3-.3v-.4h.1zm-.4.4.1.3-.2-.2.1-.4v.3zm-.3-.3c-.2.2-.1.3 0 .5l-.1-.3v-.2zm-.5 0c-.2.2 0 .4.2.5a.4.4 0 0 1-.3-.3v-.2zm-.4-.2-.1.2v.2-.4zm-.2 0v.2-.1zm2 0 .3.3h-.1l-.1-.2v-.1zm.3-1h.2v.2H181.3l.1-.1zm-2.6.3.1.1v-.1zm2.7 0-.1.1c0 .1 0 0 0 0zm-2.8.2.1.2c0 .1.1 0 .2 0h-.1v.2c-.2 0-.2-.3-.2-.4zm2.8.9.1.2-.1-.2zm3.6 0h-.3v.1c.1.1 0 .1 0 .1v-.1l-1.6.5-.2.2h-.7l.9-.4h.4c.1-.1 1.4-.6 1.5-.4zM184.7 203.5v.1l-.1-.1zm-2.1-.2h-.2v.3h.1V203.2zm-.9-.6h.3a.7.7 0 0 0-.2.1l-.2.4.1-.5zm.3.9.2-.4c0-.2.2-.2.3-.2l-.1-.1a.3.3 0 0 0-.3.1v.6z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M182.1 201.6c.3.2.3.4.4.6 0-.4 0-.4-.2-.7h.1c.3.2.3.7.3 1a4 4 0 0 0 0-.8h.1l.1.6h.1v-.5c.1 0 0 .5 0 .8v-.2h-.1v.4h-.1l-.1-.2c-.1 0 0 0 0-.1h-.2v.3s-.4 0-.5.2h-.2c0-.2.3-.3.4-.3h.1c0-.2-.3-.3-.4-.3l-.5.3c-.2 0 0-.3.4-.4h.4l-.3-.3-.4-.2c.1-.2.6.1.7.2l-.4-.4a.9.9 0 0 1 .3 0zm3.5 0zm.2 0v.1-.1z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M183 201.7a.7.7 0 0 1 .3.3v.4l-.2.4c-.1 0 0 0 0-.1v-.5l-.1-.5zm-4 .4v-.1.1zm8.2-.3zm-.3 0zm-3.5.1c.2.2.2.4 0 .6v-.6zm5.5 0v.1zm-.2.1.1.1s-.1 0 0 0zm-5 .1h.2v.6l-.1-.6zm.4.2.1.3v-.3zm-.1 0v.5-.5zm3.3 0-.1.2v-.2zm-2.9 0 .1.1.1.3a.8.8 0 0 0-.2-.3zm.5 0c.1.1.2.1.2.3l-.2-.2zm.4 0v.2-.1zm3 0v.3h-.1v-.1l.1-.1zm-4 .2v.4-.4zm-2.6 0h.2l-.3.3v-.1l.1-.2zm1.8 0V202.8v-.3zm.2 0-.2.5.2-.5zm2.4 0h.4l-.3.2.1.2-.2-.4zm-2.9 0a.3.3 0 0 1 0 .3v-.2zm3.6 0 .2.2-.2-.1zm-3.4.1v.2c-.1 0 0-.1 0-.2zm1.5 0 .2.4-.2-.4zm2.2 0 .3.1a.7.7 0 0 1-.3 0zm-2.4.1a.4.4 0 0 1 0 .2v-.2zm.4 0a.8.8 0 0 1 .1.3v-.3zm-1 0h.1l-.1.4v-.4zm-5.2 0v.2h.2l-.1.1h-.1v-.2zm3.7 0 .4.3a.7.7 0 0 1-.4-.2zm2.2 0v.3-.2zm-1 .2h.1v.1-.1zm1.7 0v.1-.1zm-4.4 0v.1c0 .1-.1 0-.1 0zm-1.6.1v.1-.1zm9.4 0h.2l-.3.3a.5.5 0 0 1 0-.3zm.4 0v.1c-.1 0 0 0 0 0zm-9.4 0v.2-.1zm8.4 0v.2-.1zm.1.1h.1zm.2 0zm-1.4.2v.1-.1zm-6.6 0zm4.8 0-.2.2-.4.3-.6.4-.5.1a20 20 0 0 1 1.7-1zm-2 .1zm-3 0v.2c-.1 0 0 0 0-.1zm6.6 0v.2-.2zm-6.4.1v.1zm7 0 .2.1h-.2zm-4.7 0v.1zm1.4 0 .2.2-.2-.1zm1 0h.1v.1zm2.8 0h.1l.1.1-.1.1h-.1v-.2zm-2.2 0-.3.1-.4.4c.1 0 .3 0 .3.2l-.3-.1.4.2a.2.2 0 0 1 0 .1l-.4-.1c0-.1-.1 0-.2 0h-.1l.5-.6c.2-.2.5-.3.5-.2zm-3.4.1v.1zm1.4 0a.5.5 0 0 1 .3.3h-.1l-.2-.2zm-.2.2.2.1-.2-.2z" data-v-eb6c4a1f></path><path fill="#CFB53B" d="M185.7 203.8h.1-.1zm-2.3.1c.2 0 .3.1.3.2l-.3-.2zm2.5 0c0 .1-.1 0-.1 0zm-2.7 0 .4.4-.2-.2h-.2v-.1zm2.4.1h.2v.1a.7.7 0 0 1-.2 0zm-1 0a.1.1 0 0 1 .2.2h-.1v-.1z" data-v-eb6c4a1f></path><path fill="gold" d="m177 192.8-.1-.3v.3zm-1.8.1.1.6v-.6zm-1.5.2h-.1v.4-.4zm-1.5-.6-.2.4.2-.4zm-1.2-.8v-.1l-.5.3.5-.2zm0-3.2-.6-.3.6.3zm.8-1.8-1-.9 1 .9zm-1 3.5-.7-.1.6.1zm19.4 2.6v-.3.3zm1.7.1-.1.6v-.6zm1.5.2h.2v.4l-.2-.4zm1.5-.6h.1l.2.4a2 2 0 0 0-.3-.4zm1.2-.8v-.1l.5.3-.5-.2zm.3-1.5.6-.1-.6.1zm-.2-1.7.5-.3c-.2 0-.4.2-.5.3zm-.9-1.8.9-1-.9 1z" data-v-eb6c4a1f></path><path fill="gold" stroke="#000" stroke-miterlimit="10" stroke-width=".3" d="M204.4 268.1a11 11 0 0 0-3.7-6.7 9 9 0 0 0 3.7-6.9V253H203a9 9 0 0 0-7.1 3.3 9.5 9.5 0 0 0-6.7-3.6l-1.8-.1.2 1.8c.3 2 1.4 5.1 3.8 7a12.6 12.6 0 0 0-3.8 6.4l-.4 1.9 2-.1c2-.1 5.1-1 7-3.5a12 12 0 0 0 6.5 3.7l2 .4-.2-2zm-3.4-11.9a5 5 0 0 1-3.5 3.4c.6-2 2.2-3 3.5-3.4zm-7 3.2c-1.4-.6-2.3-1.9-2.8-3a5 5 0 0 1 2.9 3zm-2.6 6.6a6 6 0 0 1 2.9-3 4.9 4.9 0 0 1-3 3zm6.3-2.9c1.4.6 2.2 1.7 2.8 2.8-1-.6-2.2-1.5-2.8-2.8z" data-v-eb6c4a1f></path></svg>',
            1
          ),
        ])
    )
  )
}
const Su = S1(_u, [
    ['render', yu],
    ['__scopeId', 'data-v-eb6c4a1f'],
  ]),
  Eu = yn({
    props: {},
    setup() {
      let e = Ge(null)
      function t(n, i, s) {
        const [l, a] = n.split('-').map(Number),
          [o, c] = i.split('-').map(Number),
          [u, f] = s.split('-').map(Number),
          p = new Date(2e3, l - 1, a),
          v = new Date(2e3, o - 1, c),
          g = new Date(2e3, u - 1, f)
        return p >= v && p <= g
      }
      return (
        Qn(async () => {
          const n = new Date(),
            i = `${n.getMonth() + 1}-${n.getDate()}`,
            s = [
              {
                date: { start: '5-5', end: '5-9' },
                image: new URL(
                  '/assets/GeorgLenta-CLYNBbgX.png',
                  import.meta.url
                ).href,
                alt: '9 Мая — День Победы',
              },
              {
                date: { start: '1-1', end: '1-2' },
                image: new URL('@/assets/images/NewYear.png', import.meta.url)
                  .href,
                alt: 'Новый Год',
              },
            ]
          e.value = s.find(l => t(i, l.date.start, l.date.end)) || null
        }),
        { holiday: e }
      )
    },
  }),
  xu = { key: 0, class: 'holiday-banner' },
  Tu = ['src', 'alt']
function Mu(e, t, n, i, s, l) {
  return e.holiday
    ? (mt(),
      Jt('div', xu, [
        xt('img', { src: e.holiday.image, alt: e.holiday.alt }, null, 8, Tu),
      ]))
    : F0('', !0)
}
const Cu = S1(Eu, [
    ['render', Mu],
    ['__scopeId', 'data-v-cce2316b'],
  ]),
  Pu = yn({
    components: { HolidayImage: Cu, UDPRF: Su },
    name: 'topHeader__Images',
    setup() {
      return {}
    },
  }),
  Au = { class: 'top_header__images' }
function Ou(e, t, n, i, s, l) {
  const a = Bt('UDPRF'),
    o = Bt('holiday-image')
  return mt(), Jt('div', Au, [ke(a), ke(o)])
}
const Iu = S1(Pu, [
    ['render', Ou],
    ['__scopeId', 'data-v-c8a133a9'],
  ]),
  Lu = yn({
    components: {
      topHeader__Images: Iu,
      NavPanel: bu,
      topHeader__Context: Nf,
      Flag: $f,
    },
    name: 'topHeader',
    setup() {},
  }),
  Du = { class: 'top_header' },
  Ru = { class: 'top_header_content' }
function $u(e, t, n, i, s, l) {
  const a = Bt('Flag'),
    o = Bt('topHeader__Context'),
    c = Bt('topHeader__Images'),
    u = Bt('nav-panel')
  return mt(), Jt('header', Du, [xt('div', Ru, [ke(a), ke(o), ke(c)]), ke(u)])
}
const ku = S1(Lu, [['render', $u]]),
  Bu = {
    setup() {
      return { year: new Date().getUTCFullYear() }
    },
  },
  Nu = { class: 'footer' }
function Fu(e, t, n, i, s, l) {
  return (
    mt(),
    Jt(
      'div',
      Nu,
      ' © ' + Ai(i.year) + ' Кафедра неврологии. Все права защищены. ',
      1
    )
  )
}
const Vu = S1(Bu, [['render', Fu]]),
  ju = { id: 'main-container' },
  Hu = {
    __name: 'App',
    setup(e) {
      return (t, n) => {
        const i = Bt('router-view')
        return mt(), Jt(It, null, [ke(ku), xt('main', ju, [ke(i)]), ke(Vu)], 64)
      }
    },
  }
var Pi = { exports: {} }
/*!
 * Bootstrap v5.3.6 (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ var Gu = Pi.exports,
  ya
function Wu() {
  return (
    ya ||
      ((ya = 1),
      (function (e, t) {
        ;(function (n, i) {
          e.exports = i()
        })(Gu, function () {
          const n = new Map(),
            i = {
              set(h, r, d) {
                n.has(h) || n.set(h, new Map())
                const m = n.get(h)
                m.has(r) || m.size === 0
                  ? m.set(r, d)
                  : console.error(
                      `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(m.keys())[0]}.`
                    )
              },
              get: (h, r) => (n.has(h) && n.get(h).get(r)) || null,
              remove(h, r) {
                if (!n.has(h)) return
                const d = n.get(h)
                d.delete(r), d.size === 0 && n.delete(h)
              },
            },
            s = 'transitionend',
            l = h => (
              h &&
                window.CSS &&
                window.CSS.escape &&
                (h = h.replace(/#([^\s"#']+)/g, (r, d) => `#${CSS.escape(d)}`)),
              h
            ),
            a = h => {
              h.dispatchEvent(new Event(s))
            },
            o = h =>
              !(!h || typeof h != 'object') &&
              (h.jquery !== void 0 && (h = h[0]), h.nodeType !== void 0),
            c = h =>
              o(h)
                ? h.jquery
                  ? h[0]
                  : h
                : typeof h == 'string' && h.length > 0
                  ? document.querySelector(l(h))
                  : null,
            u = h => {
              if (!o(h) || h.getClientRects().length === 0) return !1
              const r =
                  getComputedStyle(h).getPropertyValue('visibility') ===
                  'visible',
                d = h.closest('details:not([open])')
              if (!d) return r
              if (d !== h) {
                const m = h.closest('summary')
                if ((m && m.parentNode !== d) || m === null) return !1
              }
              return r
            },
            f = h =>
              !h ||
              h.nodeType !== Node.ELEMENT_NODE ||
              !!h.classList.contains('disabled') ||
              (h.disabled !== void 0
                ? h.disabled
                : h.hasAttribute('disabled') &&
                  h.getAttribute('disabled') !== 'false'),
            p = h => {
              if (!document.documentElement.attachShadow) return null
              if (typeof h.getRootNode == 'function') {
                const r = h.getRootNode()
                return r instanceof ShadowRoot ? r : null
              }
              return h instanceof ShadowRoot
                ? h
                : h.parentNode
                  ? p(h.parentNode)
                  : null
            },
            v = () => {},
            g = h => {
              h.offsetHeight
            },
            y = () =>
              window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
                ? window.jQuery
                : null,
            T = [],
            k = () => document.documentElement.dir === 'rtl',
            x = h => {
              var r
              ;(r = () => {
                const d = y()
                if (d) {
                  const m = h.NAME,
                    _ = d.fn[m]
                  ;(d.fn[m] = h.jQueryInterface),
                    (d.fn[m].Constructor = h),
                    (d.fn[m].noConflict = () => (
                      (d.fn[m] = _), h.jQueryInterface
                    ))
                }
              }),
                document.readyState === 'loading'
                  ? (T.length ||
                      document.addEventListener('DOMContentLoaded', () => {
                        for (const d of T) d()
                      }),
                    T.push(r))
                  : r()
            },
            M = (h, r = [], d = h) =>
              typeof h == 'function' ? h.call(...r) : d,
            C = (h, r, d = !0) => {
              if (!d) return void M(h)
              const m =
                (E => {
                  if (!E) return 0
                  let { transitionDuration: $, transitionDelay: H } =
                    window.getComputedStyle(E)
                  const X = Number.parseFloat($),
                    J = Number.parseFloat(H)
                  return X || J
                    ? (($ = $.split(',')[0]),
                      (H = H.split(',')[0]),
                      1e3 * (Number.parseFloat($) + Number.parseFloat(H)))
                    : 0
                })(r) + 5
              let _ = !1
              const w = ({ target: E }) => {
                E === r && ((_ = !0), r.removeEventListener(s, w), M(h))
              }
              r.addEventListener(s, w),
                setTimeout(() => {
                  _ || a(r)
                }, m)
            },
            R = (h, r, d, m) => {
              const _ = h.length
              let w = h.indexOf(r)
              return w === -1
                ? !d && m
                  ? h[_ - 1]
                  : h[0]
                : ((w += d ? 1 : -1),
                  m && (w = (w + _) % _),
                  h[Math.max(0, Math.min(w, _ - 1))])
            },
            N = /[^.]*(?=\..*)\.|.*/,
            ie = /\..*/,
            Q = /::\d+$/,
            Y = {}
          let F = 1
          const V = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
            ee = new Set([
              'click',
              'dblclick',
              'mouseup',
              'mousedown',
              'contextmenu',
              'mousewheel',
              'DOMMouseScroll',
              'mouseover',
              'mouseout',
              'mousemove',
              'selectstart',
              'selectend',
              'keydown',
              'keypress',
              'keyup',
              'orientationchange',
              'touchstart',
              'touchmove',
              'touchend',
              'touchcancel',
              'pointerdown',
              'pointermove',
              'pointerup',
              'pointerleave',
              'pointercancel',
              'gesturestart',
              'gesturechange',
              'gestureend',
              'focus',
              'blur',
              'change',
              'reset',
              'select',
              'submit',
              'focusin',
              'focusout',
              'load',
              'unload',
              'beforeunload',
              'resize',
              'move',
              'DOMContentLoaded',
              'readystatechange',
              'error',
              'abort',
              'scroll',
            ])
          function fe(h, r) {
            return (r && `${r}::${F++}`) || h.uidEvent || F++
          }
          function _e(h) {
            const r = fe(h)
            return (h.uidEvent = r), (Y[r] = Y[r] || {}), Y[r]
          }
          function Xe(h, r, d = null) {
            return Object.values(h).find(
              m => m.callable === r && m.delegationSelector === d
            )
          }
          function Ke(h, r, d) {
            const m = typeof r == 'string',
              _ = m ? d : r || d
            let w = Fe(h)
            return ee.has(w) || (w = h), [m, _, w]
          }
          function ne(h, r, d, m, _) {
            if (typeof r != 'string' || !h) return
            let [w, E, $] = Ke(r, d, m)
            r in V &&
              (E = (ue =>
                function (ce) {
                  if (
                    !ce.relatedTarget ||
                    (ce.relatedTarget !== ce.delegateTarget &&
                      !ce.delegateTarget.contains(ce.relatedTarget))
                  )
                    return ue.call(this, ce)
                })(E))
            const H = _e(h),
              X = H[$] || (H[$] = {}),
              J = Xe(X, E, w ? d : null)
            if (J) return void (J.oneOff = J.oneOff && _)
            const U = fe(E, r.replace(N, '')),
              me = w
                ? (function (ae, ue, ce) {
                    return function he(Oe) {
                      const Re = ae.querySelectorAll(ue)
                      for (
                        let { target: ge } = Oe;
                        ge && ge !== this;
                        ge = ge.parentNode
                      )
                        for (const ye of Re)
                          if (ye === ge)
                            return (
                              Je(Oe, { delegateTarget: ge }),
                              he.oneOff && I.off(ae, Oe.type, ue, ce),
                              ce.apply(ge, [Oe])
                            )
                    }
                  })(h, d, E)
                : (function (ae, ue) {
                    return function ce(he) {
                      return (
                        Je(he, { delegateTarget: ae }),
                        ce.oneOff && I.off(ae, he.type, ue),
                        ue.apply(ae, [he])
                      )
                    }
                  })(h, E)
            ;(me.delegationSelector = w ? d : null),
              (me.callable = E),
              (me.oneOff = _),
              (me.uidEvent = U),
              (X[U] = me),
              h.addEventListener($, me, w)
          }
          function le(h, r, d, m, _) {
            const w = Xe(r[d], m, _)
            w && (h.removeEventListener(d, w, !!_), delete r[d][w.uidEvent])
          }
          function oe(h, r, d, m) {
            const _ = r[d] || {}
            for (const [w, E] of Object.entries(_))
              w.includes(m) && le(h, r, d, E.callable, E.delegationSelector)
          }
          function Fe(h) {
            return (h = h.replace(ie, '')), V[h] || h
          }
          const I = {
            on(h, r, d, m) {
              ne(h, r, d, m, !1)
            },
            one(h, r, d, m) {
              ne(h, r, d, m, !0)
            },
            off(h, r, d, m) {
              if (typeof r != 'string' || !h) return
              const [_, w, E] = Ke(r, d, m),
                $ = E !== r,
                H = _e(h),
                X = H[E] || {},
                J = r.startsWith('.')
              if (w === void 0) {
                if (J) for (const U of Object.keys(H)) oe(h, H, U, r.slice(1))
                for (const [U, me] of Object.entries(X)) {
                  const ae = U.replace(Q, '')
                  ;($ && !r.includes(ae)) ||
                    le(h, H, E, me.callable, me.delegationSelector)
                }
              } else {
                if (!Object.keys(X).length) return
                le(h, H, E, w, _ ? d : null)
              }
            },
            trigger(h, r, d) {
              if (typeof r != 'string' || !h) return null
              const m = y()
              let _ = null,
                w = !0,
                E = !0,
                $ = !1
              r !== Fe(r) &&
                m &&
                ((_ = m.Event(r, d)),
                m(h).trigger(_),
                (w = !_.isPropagationStopped()),
                (E = !_.isImmediatePropagationStopped()),
                ($ = _.isDefaultPrevented()))
              const H = Je(new Event(r, { bubbles: w, cancelable: !0 }), d)
              return (
                $ && H.preventDefault(),
                E && h.dispatchEvent(H),
                H.defaultPrevented && _ && _.preventDefault(),
                H
              )
            },
          }
          function Je(h, r = {}) {
            for (const [d, m] of Object.entries(r))
              try {
                h[d] = m
              } catch {
                Object.defineProperty(h, d, { configurable: !0, get: () => m })
              }
            return h
          }
          function qe(h) {
            if (h === 'true') return !0
            if (h === 'false') return !1
            if (h === Number(h).toString()) return Number(h)
            if (h === '' || h === 'null') return null
            if (typeof h != 'string') return h
            try {
              return JSON.parse(decodeURIComponent(h))
            } catch {
              return h
            }
          }
          function jt(h) {
            return h.replace(/[A-Z]/g, r => `-${r.toLowerCase()}`)
          }
          const Ze = {
            setDataAttribute(h, r, d) {
              h.setAttribute(`data-bs-${jt(r)}`, d)
            },
            removeDataAttribute(h, r) {
              h.removeAttribute(`data-bs-${jt(r)}`)
            },
            getDataAttributes(h) {
              if (!h) return {}
              const r = {},
                d = Object.keys(h.dataset).filter(
                  m => m.startsWith('bs') && !m.startsWith('bsConfig')
                )
              for (const m of d) {
                let _ = m.replace(/^bs/, '')
                ;(_ = _.charAt(0).toLowerCase() + _.slice(1)),
                  (r[_] = qe(h.dataset[m]))
              }
              return r
            },
            getDataAttribute: (h, r) => qe(h.getAttribute(`data-bs-${jt(r)}`)),
          }
          class Ht {
            static get Default() {
              return {}
            }
            static get DefaultType() {
              return {}
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!'
              )
            }
            _getConfig(r) {
              return (
                (r = this._mergeConfigObj(r)),
                (r = this._configAfterMerge(r)),
                this._typeCheckConfig(r),
                r
              )
            }
            _configAfterMerge(r) {
              return r
            }
            _mergeConfigObj(r, d) {
              const m = o(d) ? Ze.getDataAttribute(d, 'config') : {}
              return {
                ...this.constructor.Default,
                ...(typeof m == 'object' ? m : {}),
                ...(o(d) ? Ze.getDataAttributes(d) : {}),
                ...(typeof r == 'object' ? r : {}),
              }
            }
            _typeCheckConfig(r, d = this.constructor.DefaultType) {
              for (const [_, w] of Object.entries(d)) {
                const E = r[_],
                  $ = o(E)
                    ? 'element'
                    : (m = E) == null
                      ? `${m}`
                      : Object.prototype.toString
                          .call(m)
                          .match(/\s([a-z]+)/i)[1]
                          .toLowerCase()
                if (!new RegExp(w).test($))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${_}" provided type "${$}" but expected type "${w}".`
                  )
              }
              var m
            }
          }
          class Be extends Ht {
            constructor(r, d) {
              super(),
                (r = c(r)) &&
                  ((this._element = r),
                  (this._config = this._getConfig(d)),
                  i.set(this._element, this.constructor.DATA_KEY, this))
            }
            dispose() {
              i.remove(this._element, this.constructor.DATA_KEY),
                I.off(this._element, this.constructor.EVENT_KEY)
              for (const r of Object.getOwnPropertyNames(this)) this[r] = null
            }
            _queueCallback(r, d, m = !0) {
              C(r, d, m)
            }
            _getConfig(r) {
              return (
                (r = this._mergeConfigObj(r, this._element)),
                (r = this._configAfterMerge(r)),
                this._typeCheckConfig(r),
                r
              )
            }
            static getInstance(r) {
              return i.get(c(r), this.DATA_KEY)
            }
            static getOrCreateInstance(r, d = {}) {
              return (
                this.getInstance(r) ||
                new this(r, typeof d == 'object' ? d : null)
              )
            }
            static get VERSION() {
              return '5.3.6'
            }
            static get DATA_KEY() {
              return `bs.${this.NAME}`
            }
            static get EVENT_KEY() {
              return `.${this.DATA_KEY}`
            }
            static eventName(r) {
              return `${r}${this.EVENT_KEY}`
            }
          }
          const O = h => {
              let r = h.getAttribute('data-bs-target')
              if (!r || r === '#') {
                let d = h.getAttribute('href')
                if (!d || (!d.includes('#') && !d.startsWith('.'))) return null
                d.includes('#') &&
                  !d.startsWith('#') &&
                  (d = `#${d.split('#')[1]}`),
                  (r = d && d !== '#' ? d.trim() : null)
              }
              return r
                ? r
                    .split(',')
                    .map(d => l(d))
                    .join(',')
                : null
            },
            P = {
              find: (h, r = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(r, h)),
              findOne: (h, r = document.documentElement) =>
                Element.prototype.querySelector.call(r, h),
              children: (h, r) =>
                [].concat(...h.children).filter(d => d.matches(r)),
              parents(h, r) {
                const d = []
                let m = h.parentNode.closest(r)
                for (; m; ) d.push(m), (m = m.parentNode.closest(r))
                return d
              },
              prev(h, r) {
                let d = h.previousElementSibling
                for (; d; ) {
                  if (d.matches(r)) return [d]
                  d = d.previousElementSibling
                }
                return []
              },
              next(h, r) {
                let d = h.nextElementSibling
                for (; d; ) {
                  if (d.matches(r)) return [d]
                  d = d.nextElementSibling
                }
                return []
              },
              focusableChildren(h) {
                const r = [
                  'a',
                  'button',
                  'input',
                  'textarea',
                  'select',
                  'details',
                  '[tabindex]',
                  '[contenteditable="true"]',
                ]
                  .map(d => `${d}:not([tabindex^="-"])`)
                  .join(',')
                return this.find(r, h).filter(d => !f(d) && u(d))
              },
              getSelectorFromElement(h) {
                const r = O(h)
                return r && P.findOne(r) ? r : null
              },
              getElementFromSelector(h) {
                const r = O(h)
                return r ? P.findOne(r) : null
              },
              getMultipleElementsFromSelector(h) {
                const r = O(h)
                return r ? P.find(r) : []
              },
            },
            W = (h, r = 'hide') => {
              const d = `click.dismiss${h.EVENT_KEY}`,
                m = h.NAME
              I.on(document, d, `[data-bs-dismiss="${m}"]`, function (_) {
                if (
                  (['A', 'AREA'].includes(this.tagName) && _.preventDefault(),
                  f(this))
                )
                  return
                const w =
                  P.getElementFromSelector(this) || this.closest(`.${m}`)
                h.getOrCreateInstance(w)[r]()
              })
            },
            Z = '.bs.alert',
            Te = `close${Z}`,
            z = `closed${Z}`
          class b extends Be {
            static get NAME() {
              return 'alert'
            }
            close() {
              if (I.trigger(this._element, Te).defaultPrevented) return
              this._element.classList.remove('show')
              const r = this._element.classList.contains('fade')
              this._queueCallback(
                () => this._destroyElement(),
                this._element,
                r
              )
            }
            _destroyElement() {
              this._element.remove(),
                I.trigger(this._element, z),
                this.dispose()
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = b.getOrCreateInstance(this)
                if (typeof r == 'string') {
                  if (
                    d[r] === void 0 ||
                    r.startsWith('_') ||
                    r === 'constructor'
                  )
                    throw new TypeError(`No method named "${r}"`)
                  d[r](this)
                }
              })
            }
          }
          W(b, 'close'), x(b)
          const S = '[data-bs-toggle="button"]'
          class A extends Be {
            static get NAME() {
              return 'button'
            }
            toggle() {
              this._element.setAttribute(
                'aria-pressed',
                this._element.classList.toggle('active')
              )
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = A.getOrCreateInstance(this)
                r === 'toggle' && d[r]()
              })
            }
          }
          I.on(document, 'click.bs.button.data-api', S, h => {
            h.preventDefault()
            const r = h.target.closest(S)
            A.getOrCreateInstance(r).toggle()
          }),
            x(A)
          const L = '.bs.swipe',
            D = `touchstart${L}`,
            q = `touchmove${L}`,
            G = `touchend${L}`,
            j = `pointerdown${L}`,
            B = `pointerup${L}`,
            re = { endCallback: null, leftCallback: null, rightCallback: null },
            K = {
              endCallback: '(function|null)',
              leftCallback: '(function|null)',
              rightCallback: '(function|null)',
            }
          class te extends Ht {
            constructor(r, d) {
              super(),
                (this._element = r),
                r &&
                  te.isSupported() &&
                  ((this._config = this._getConfig(d)),
                  (this._deltaX = 0),
                  (this._supportPointerEvents = !!window.PointerEvent),
                  this._initEvents())
            }
            static get Default() {
              return re
            }
            static get DefaultType() {
              return K
            }
            static get NAME() {
              return 'swipe'
            }
            dispose() {
              I.off(this._element, L)
            }
            _start(r) {
              this._supportPointerEvents
                ? this._eventIsPointerPenTouch(r) && (this._deltaX = r.clientX)
                : (this._deltaX = r.touches[0].clientX)
            }
            _end(r) {
              this._eventIsPointerPenTouch(r) &&
                (this._deltaX = r.clientX - this._deltaX),
                this._handleSwipe(),
                M(this._config.endCallback)
            }
            _move(r) {
              this._deltaX =
                r.touches && r.touches.length > 1
                  ? 0
                  : r.touches[0].clientX - this._deltaX
            }
            _handleSwipe() {
              const r = Math.abs(this._deltaX)
              if (r <= 40) return
              const d = r / this._deltaX
              ;(this._deltaX = 0),
                d &&
                  M(
                    d > 0
                      ? this._config.rightCallback
                      : this._config.leftCallback
                  )
            }
            _initEvents() {
              this._supportPointerEvents
                ? (I.on(this._element, j, r => this._start(r)),
                  I.on(this._element, B, r => this._end(r)),
                  this._element.classList.add('pointer-event'))
                : (I.on(this._element, D, r => this._start(r)),
                  I.on(this._element, q, r => this._move(r)),
                  I.on(this._element, G, r => this._end(r)))
            }
            _eventIsPointerPenTouch(r) {
              return (
                this._supportPointerEvents &&
                (r.pointerType === 'pen' || r.pointerType === 'touch')
              )
            }
            static isSupported() {
              return (
                'ontouchstart' in document.documentElement ||
                navigator.maxTouchPoints > 0
              )
            }
          }
          const se = '.bs.carousel',
            ze = '.data-api',
            Ae = 'ArrowLeft',
            we = 'ArrowRight',
            Ue = 'next',
            je = 'prev',
            Qe = 'left',
            rt = 'right',
            E1 = `slide${se}`,
            q1 = `slid${se}`,
            lt = `keydown${se}`,
            Tt = `mouseenter${se}`,
            Zn = `mouseleave${se}`,
            tc = `dragstart${se}`,
            nc = `load${se}${ze}`,
            ic = `click${se}${ze}`,
            H2 = 'carousel',
            ei = 'active',
            G2 = '.active',
            W2 = '.carousel-item',
            sc = G2 + W2,
            rc = { [Ae]: rt, [we]: Qe },
            lc = {
              interval: 5e3,
              keyboard: !0,
              pause: 'hover',
              ride: !1,
              touch: !0,
              wrap: !0,
            },
            ac = {
              interval: '(number|boolean)',
              keyboard: 'boolean',
              pause: '(string|boolean)',
              ride: '(boolean|string)',
              touch: 'boolean',
              wrap: 'boolean',
            }
          class U1 extends Be {
            constructor(r, d) {
              super(r, d),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = P.findOne(
                  '.carousel-indicators',
                  this._element
                )),
                this._addEventListeners(),
                this._config.ride === H2 && this.cycle()
            }
            static get Default() {
              return lc
            }
            static get DefaultType() {
              return ac
            }
            static get NAME() {
              return 'carousel'
            }
            next() {
              this._slide(Ue)
            }
            nextWhenVisible() {
              !document.hidden && u(this._element) && this.next()
            }
            prev() {
              this._slide(je)
            }
            pause() {
              this._isSliding && a(this._element), this._clearInterval()
            }
            cycle() {
              this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                  () => this.nextWhenVisible(),
                  this._config.interval
                ))
            }
            _maybeEnableCycle() {
              this._config.ride &&
                (this._isSliding
                  ? I.one(this._element, q1, () => this.cycle())
                  : this.cycle())
            }
            to(r) {
              const d = this._getItems()
              if (r > d.length - 1 || r < 0) return
              if (this._isSliding)
                return void I.one(this._element, q1, () => this.to(r))
              const m = this._getItemIndex(this._getActive())
              if (m === r) return
              const _ = r > m ? Ue : je
              this._slide(_, d[r])
            }
            dispose() {
              this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
            }
            _configAfterMerge(r) {
              return (r.defaultInterval = r.interval), r
            }
            _addEventListeners() {
              this._config.keyboard &&
                I.on(this._element, lt, r => this._keydown(r)),
                this._config.pause === 'hover' &&
                  (I.on(this._element, Tt, () => this.pause()),
                  I.on(this._element, Zn, () => this._maybeEnableCycle())),
                this._config.touch &&
                  te.isSupported() &&
                  this._addTouchEventListeners()
            }
            _addTouchEventListeners() {
              for (const d of P.find('.carousel-item img', this._element))
                I.on(d, tc, m => m.preventDefault())
              const r = {
                leftCallback: () => this._slide(this._directionToOrder(Qe)),
                rightCallback: () => this._slide(this._directionToOrder(rt)),
                endCallback: () => {
                  this._config.pause === 'hover' &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    (this.touchTimeout = setTimeout(
                      () => this._maybeEnableCycle(),
                      500 + this._config.interval
                    )))
                },
              }
              this._swipeHelper = new te(this._element, r)
            }
            _keydown(r) {
              if (/input|textarea/i.test(r.target.tagName)) return
              const d = rc[r.key]
              d && (r.preventDefault(), this._slide(this._directionToOrder(d)))
            }
            _getItemIndex(r) {
              return this._getItems().indexOf(r)
            }
            _setActiveIndicatorElement(r) {
              if (!this._indicatorsElement) return
              const d = P.findOne(G2, this._indicatorsElement)
              d.classList.remove(ei), d.removeAttribute('aria-current')
              const m = P.findOne(
                `[data-bs-slide-to="${r}"]`,
                this._indicatorsElement
              )
              m && (m.classList.add(ei), m.setAttribute('aria-current', 'true'))
            }
            _updateInterval() {
              const r = this._activeElement || this._getActive()
              if (!r) return
              const d = Number.parseInt(r.getAttribute('data-bs-interval'), 10)
              this._config.interval = d || this._config.defaultInterval
            }
            _slide(r, d = null) {
              if (this._isSliding) return
              const m = this._getActive(),
                _ = r === Ue,
                w = d || R(this._getItems(), m, _, this._config.wrap)
              if (w === m) return
              const E = this._getItemIndex(w),
                $ = U =>
                  I.trigger(this._element, U, {
                    relatedTarget: w,
                    direction: this._orderToDirection(r),
                    from: this._getItemIndex(m),
                    to: E,
                  })
              if ($(E1).defaultPrevented || !m || !w) return
              const H = !!this._interval
              this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(E),
                (this._activeElement = w)
              const X = _ ? 'carousel-item-start' : 'carousel-item-end',
                J = _ ? 'carousel-item-next' : 'carousel-item-prev'
              w.classList.add(J),
                g(w),
                m.classList.add(X),
                w.classList.add(X),
                this._queueCallback(
                  () => {
                    w.classList.remove(X, J),
                      w.classList.add(ei),
                      m.classList.remove(ei, J, X),
                      (this._isSliding = !1),
                      $(q1)
                  },
                  m,
                  this._isAnimated()
                ),
                H && this.cycle()
            }
            _isAnimated() {
              return this._element.classList.contains('slide')
            }
            _getActive() {
              return P.findOne(sc, this._element)
            }
            _getItems() {
              return P.find(W2, this._element)
            }
            _clearInterval() {
              this._interval &&
                (clearInterval(this._interval), (this._interval = null))
            }
            _directionToOrder(r) {
              return k() ? (r === Qe ? je : Ue) : r === Qe ? Ue : je
            }
            _orderToDirection(r) {
              return k() ? (r === je ? Qe : rt) : r === je ? rt : Qe
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = U1.getOrCreateInstance(this, r)
                if (typeof r != 'number') {
                  if (typeof r == 'string') {
                    if (
                      d[r] === void 0 ||
                      r.startsWith('_') ||
                      r === 'constructor'
                    )
                      throw new TypeError(`No method named "${r}"`)
                    d[r]()
                  }
                } else d.to(r)
              })
            }
          }
          I.on(
            document,
            ic,
            '[data-bs-slide], [data-bs-slide-to]',
            function (h) {
              const r = P.getElementFromSelector(this)
              if (!r || !r.classList.contains(H2)) return
              h.preventDefault()
              const d = U1.getOrCreateInstance(r),
                m = this.getAttribute('data-bs-slide-to')
              return m
                ? (d.to(m), void d._maybeEnableCycle())
                : Ze.getDataAttribute(this, 'slide') === 'next'
                  ? (d.next(), void d._maybeEnableCycle())
                  : (d.prev(), void d._maybeEnableCycle())
            }
          ),
            I.on(window, nc, () => {
              const h = P.find('[data-bs-ride="carousel"]')
              for (const r of h) U1.getOrCreateInstance(r)
            }),
            x(U1)
          const Sn = '.bs.collapse',
            oc = `show${Sn}`,
            cc = `shown${Sn}`,
            dc = `hide${Sn}`,
            fc = `hidden${Sn}`,
            uc = `click${Sn}.data-api`,
            ts = 'show',
            K1 = 'collapse',
            ti = 'collapsing',
            hc = `:scope .${K1} .${K1}`,
            ns = '[data-bs-toggle="collapse"]',
            pc = { parent: null, toggle: !0 },
            mc = { parent: '(null|element)', toggle: 'boolean' }
          class Y1 extends Be {
            constructor(r, d) {
              super(r, d),
                (this._isTransitioning = !1),
                (this._triggerArray = [])
              const m = P.find(ns)
              for (const _ of m) {
                const w = P.getSelectorFromElement(_),
                  E = P.find(w).filter($ => $ === this._element)
                w !== null && E.length && this._triggerArray.push(_)
              }
              this._initializeChildren(),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                  ),
                this._config.toggle && this.toggle()
            }
            static get Default() {
              return pc
            }
            static get DefaultType() {
              return mc
            }
            static get NAME() {
              return 'collapse'
            }
            toggle() {
              this._isShown() ? this.hide() : this.show()
            }
            show() {
              if (this._isTransitioning || this._isShown()) return
              let r = []
              if (
                (this._config.parent &&
                  (r = this._getFirstLevelChildren(
                    '.collapse.show, .collapse.collapsing'
                  )
                    .filter(_ => _ !== this._element)
                    .map(_ => Y1.getOrCreateInstance(_, { toggle: !1 }))),
                (r.length && r[0]._isTransitioning) ||
                  I.trigger(this._element, oc).defaultPrevented)
              )
                return
              for (const _ of r) _.hide()
              const d = this._getDimension()
              this._element.classList.remove(K1),
                this._element.classList.add(ti),
                (this._element.style[d] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0)
              const m = `scroll${d[0].toUpperCase() + d.slice(1)}`
              this._queueCallback(
                () => {
                  ;(this._isTransitioning = !1),
                    this._element.classList.remove(ti),
                    this._element.classList.add(K1, ts),
                    (this._element.style[d] = ''),
                    I.trigger(this._element, cc)
                },
                this._element,
                !0
              ),
                (this._element.style[d] = `${this._element[m]}px`)
            }
            hide() {
              if (
                this._isTransitioning ||
                !this._isShown() ||
                I.trigger(this._element, dc).defaultPrevented
              )
                return
              const r = this._getDimension()
              ;(this._element.style[r] =
                `${this._element.getBoundingClientRect()[r]}px`),
                g(this._element),
                this._element.classList.add(ti),
                this._element.classList.remove(K1, ts)
              for (const d of this._triggerArray) {
                const m = P.getElementFromSelector(d)
                m &&
                  !this._isShown(m) &&
                  this._addAriaAndCollapsedClass([d], !1)
              }
              ;(this._isTransitioning = !0),
                (this._element.style[r] = ''),
                this._queueCallback(
                  () => {
                    ;(this._isTransitioning = !1),
                      this._element.classList.remove(ti),
                      this._element.classList.add(K1),
                      I.trigger(this._element, fc)
                  },
                  this._element,
                  !0
                )
            }
            _isShown(r = this._element) {
              return r.classList.contains(ts)
            }
            _configAfterMerge(r) {
              return (r.toggle = !!r.toggle), (r.parent = c(r.parent)), r
            }
            _getDimension() {
              return this._element.classList.contains('collapse-horizontal')
                ? 'width'
                : 'height'
            }
            _initializeChildren() {
              if (!this._config.parent) return
              const r = this._getFirstLevelChildren(ns)
              for (const d of r) {
                const m = P.getElementFromSelector(d)
                m && this._addAriaAndCollapsedClass([d], this._isShown(m))
              }
            }
            _getFirstLevelChildren(r) {
              const d = P.find(hc, this._config.parent)
              return P.find(r, this._config.parent).filter(m => !d.includes(m))
            }
            _addAriaAndCollapsedClass(r, d) {
              if (r.length)
                for (const m of r)
                  m.classList.toggle('collapsed', !d),
                    m.setAttribute('aria-expanded', d)
            }
            static jQueryInterface(r) {
              const d = {}
              return (
                typeof r == 'string' && /show|hide/.test(r) && (d.toggle = !1),
                this.each(function () {
                  const m = Y1.getOrCreateInstance(this, d)
                  if (typeof r == 'string') {
                    if (m[r] === void 0)
                      throw new TypeError(`No method named "${r}"`)
                    m[r]()
                  }
                })
              )
            }
          }
          I.on(document, uc, ns, function (h) {
            ;(h.target.tagName === 'A' ||
              (h.delegateTarget && h.delegateTarget.tagName === 'A')) &&
              h.preventDefault()
            for (const r of P.getMultipleElementsFromSelector(this))
              Y1.getOrCreateInstance(r, { toggle: !1 }).toggle()
          }),
            x(Y1)
          var at = 'top',
            vt = 'bottom',
            gt = 'right',
            ot = 'left',
            ni = 'auto',
            X1 = [at, vt, gt, ot],
            x1 = 'start',
            Q1 = 'end',
            q2 = 'clippingParents',
            is = 'viewport',
            J1 = 'popper',
            U2 = 'reference',
            ss = X1.reduce(function (h, r) {
              return h.concat([r + '-' + x1, r + '-' + Q1])
            }, []),
            rs = [].concat(X1, [ni]).reduce(function (h, r) {
              return h.concat([r, r + '-' + x1, r + '-' + Q1])
            }, []),
            K2 = 'beforeRead',
            Y2 = 'read',
            X2 = 'afterRead',
            Q2 = 'beforeMain',
            J2 = 'main',
            Z2 = 'afterMain',
            er = 'beforeWrite',
            tr = 'write',
            nr = 'afterWrite',
            ir = [K2, Y2, X2, Q2, J2, Z2, er, tr, nr]
          function Gt(h) {
            return h ? (h.nodeName || '').toLowerCase() : null
          }
          function zt(h) {
            if (h == null) return window
            if (h.toString() !== '[object Window]') {
              var r = h.ownerDocument
              return (r && r.defaultView) || window
            }
            return h
          }
          function T1(h) {
            return h instanceof zt(h).Element || h instanceof Element
          }
          function Mt(h) {
            return h instanceof zt(h).HTMLElement || h instanceof HTMLElement
          }
          function ls(h) {
            return (
              typeof ShadowRoot < 'u' &&
              (h instanceof zt(h).ShadowRoot || h instanceof ShadowRoot)
            )
          }
          const as = {
            name: 'applyStyles',
            enabled: !0,
            phase: 'write',
            fn: function (h) {
              var r = h.state
              Object.keys(r.elements).forEach(function (d) {
                var m = r.styles[d] || {},
                  _ = r.attributes[d] || {},
                  w = r.elements[d]
                Mt(w) &&
                  Gt(w) &&
                  (Object.assign(w.style, m),
                  Object.keys(_).forEach(function (E) {
                    var $ = _[E]
                    $ === !1
                      ? w.removeAttribute(E)
                      : w.setAttribute(E, $ === !0 ? '' : $)
                  }))
              })
            },
            effect: function (h) {
              var r = h.state,
                d = {
                  popper: {
                    position: r.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0',
                  },
                  arrow: { position: 'absolute' },
                  reference: {},
                }
              return (
                Object.assign(r.elements.popper.style, d.popper),
                (r.styles = d),
                r.elements.arrow &&
                  Object.assign(r.elements.arrow.style, d.arrow),
                function () {
                  Object.keys(r.elements).forEach(function (m) {
                    var _ = r.elements[m],
                      w = r.attributes[m] || {},
                      E = Object.keys(
                        r.styles.hasOwnProperty(m) ? r.styles[m] : d[m]
                      ).reduce(function ($, H) {
                        return ($[H] = ''), $
                      }, {})
                    Mt(_) &&
                      Gt(_) &&
                      (Object.assign(_.style, E),
                      Object.keys(w).forEach(function ($) {
                        _.removeAttribute($)
                      }))
                  })
                }
              )
            },
            requires: ['computeStyles'],
          }
          function Wt(h) {
            return h.split('-')[0]
          }
          var M1 = Math.max,
            ii = Math.min,
            Z1 = Math.round
          function os() {
            var h = navigator.userAgentData
            return h != null && h.brands && Array.isArray(h.brands)
              ? h.brands
                  .map(function (r) {
                    return r.brand + '/' + r.version
                  })
                  .join(' ')
              : navigator.userAgent
          }
          function sr() {
            return !/^((?!chrome|android).)*safari/i.test(os())
          }
          function en(h, r, d) {
            r === void 0 && (r = !1), d === void 0 && (d = !1)
            var m = h.getBoundingClientRect(),
              _ = 1,
              w = 1
            r &&
              Mt(h) &&
              ((_ = (h.offsetWidth > 0 && Z1(m.width) / h.offsetWidth) || 1),
              (w = (h.offsetHeight > 0 && Z1(m.height) / h.offsetHeight) || 1))
            var E = (T1(h) ? zt(h) : window).visualViewport,
              $ = !sr() && d,
              H = (m.left + ($ && E ? E.offsetLeft : 0)) / _,
              X = (m.top + ($ && E ? E.offsetTop : 0)) / w,
              J = m.width / _,
              U = m.height / w
            return {
              width: J,
              height: U,
              top: X,
              right: H + J,
              bottom: X + U,
              left: H,
              x: H,
              y: X,
            }
          }
          function cs(h) {
            var r = en(h),
              d = h.offsetWidth,
              m = h.offsetHeight
            return (
              Math.abs(r.width - d) <= 1 && (d = r.width),
              Math.abs(r.height - m) <= 1 && (m = r.height),
              { x: h.offsetLeft, y: h.offsetTop, width: d, height: m }
            )
          }
          function rr(h, r) {
            var d = r.getRootNode && r.getRootNode()
            if (h.contains(r)) return !0
            if (d && ls(d)) {
              var m = r
              do {
                if (m && h.isSameNode(m)) return !0
                m = m.parentNode || m.host
              } while (m)
            }
            return !1
          }
          function e1(h) {
            return zt(h).getComputedStyle(h)
          }
          function vc(h) {
            return ['table', 'td', 'th'].indexOf(Gt(h)) >= 0
          }
          function f1(h) {
            return ((T1(h) ? h.ownerDocument : h.document) || window.document)
              .documentElement
          }
          function si(h) {
            return Gt(h) === 'html'
              ? h
              : h.assignedSlot ||
                  h.parentNode ||
                  (ls(h) ? h.host : null) ||
                  f1(h)
          }
          function lr(h) {
            return Mt(h) && e1(h).position !== 'fixed' ? h.offsetParent : null
          }
          function En(h) {
            for (
              var r = zt(h), d = lr(h);
              d && vc(d) && e1(d).position === 'static';

            )
              d = lr(d)
            return d &&
              (Gt(d) === 'html' ||
                (Gt(d) === 'body' && e1(d).position === 'static'))
              ? r
              : d ||
                  (function (m) {
                    var _ = /firefox/i.test(os())
                    if (
                      /Trident/i.test(os()) &&
                      Mt(m) &&
                      e1(m).position === 'fixed'
                    )
                      return null
                    var w = si(m)
                    for (
                      ls(w) && (w = w.host);
                      Mt(w) && ['html', 'body'].indexOf(Gt(w)) < 0;

                    ) {
                      var E = e1(w)
                      if (
                        E.transform !== 'none' ||
                        E.perspective !== 'none' ||
                        E.contain === 'paint' ||
                        ['transform', 'perspective'].indexOf(E.willChange) !==
                          -1 ||
                        (_ && E.willChange === 'filter') ||
                        (_ && E.filter && E.filter !== 'none')
                      )
                        return w
                      w = w.parentNode
                    }
                    return null
                  })(h) ||
                  r
          }
          function ds(h) {
            return ['top', 'bottom'].indexOf(h) >= 0 ? 'x' : 'y'
          }
          function xn(h, r, d) {
            return M1(h, ii(r, d))
          }
          function ar(h) {
            return Object.assign(
              {},
              { top: 0, right: 0, bottom: 0, left: 0 },
              h
            )
          }
          function or(h, r) {
            return r.reduce(function (d, m) {
              return (d[m] = h), d
            }, {})
          }
          const cr = {
            name: 'arrow',
            enabled: !0,
            phase: 'main',
            fn: function (h) {
              var r,
                d = h.state,
                m = h.name,
                _ = h.options,
                w = d.elements.arrow,
                E = d.modifiersData.popperOffsets,
                $ = Wt(d.placement),
                H = ds($),
                X = [ot, gt].indexOf($) >= 0 ? 'height' : 'width'
              if (w && E) {
                var J = (function (Ie, Ce) {
                    return ar(
                      typeof (Ie =
                        typeof Ie == 'function'
                          ? Ie(
                              Object.assign({}, Ce.rects, {
                                placement: Ce.placement,
                              })
                            )
                          : Ie) != 'number'
                        ? Ie
                        : or(Ie, X1)
                    )
                  })(_.padding, d),
                  U = cs(w),
                  me = H === 'y' ? at : ot,
                  ae = H === 'y' ? vt : gt,
                  ue =
                    d.rects.reference[X] +
                    d.rects.reference[H] -
                    E[H] -
                    d.rects.popper[X],
                  ce = E[H] - d.rects.reference[H],
                  he = En(w),
                  Oe = he
                    ? H === 'y'
                      ? he.clientHeight || 0
                      : he.clientWidth || 0
                    : 0,
                  Re = ue / 2 - ce / 2,
                  ge = J[me],
                  ye = Oe - U[X] - J[ae],
                  ve = Oe / 2 - U[X] / 2 + Re,
                  be = xn(ge, ve, ye),
                  Me = H
                d.modifiersData[m] =
                  (((r = {})[Me] = be), (r.centerOffset = be - ve), r)
              }
            },
            effect: function (h) {
              var r = h.state,
                d = h.options.element,
                m = d === void 0 ? '[data-popper-arrow]' : d
              m != null &&
                (typeof m != 'string' ||
                  (m = r.elements.popper.querySelector(m))) &&
                rr(r.elements.popper, m) &&
                (r.elements.arrow = m)
            },
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow'],
          }
          function tn(h) {
            return h.split('-')[1]
          }
          var gc = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
          function dr(h) {
            var r,
              d = h.popper,
              m = h.popperRect,
              _ = h.placement,
              w = h.variation,
              E = h.offsets,
              $ = h.position,
              H = h.gpuAcceleration,
              X = h.adaptive,
              J = h.roundOffsets,
              U = h.isFixed,
              me = E.x,
              ae = me === void 0 ? 0 : me,
              ue = E.y,
              ce = ue === void 0 ? 0 : ue,
              he =
                typeof J == 'function' ? J({ x: ae, y: ce }) : { x: ae, y: ce }
            ;(ae = he.x), (ce = he.y)
            var Oe = E.hasOwnProperty('x'),
              Re = E.hasOwnProperty('y'),
              ge = ot,
              ye = at,
              ve = window
            if (X) {
              var be = En(d),
                Me = 'clientHeight',
                Ie = 'clientWidth'
              be === zt(d) &&
                e1((be = f1(d))).position !== 'static' &&
                $ === 'absolute' &&
                ((Me = 'scrollHeight'), (Ie = 'scrollWidth')),
                (_ === at || ((_ === ot || _ === gt) && w === Q1)) &&
                  ((ye = vt),
                  (ce -=
                    (U && be === ve && ve.visualViewport
                      ? ve.visualViewport.height
                      : be[Me]) - m.height),
                  (ce *= H ? 1 : -1)),
                (_ !== ot && ((_ !== at && _ !== vt) || w !== Q1)) ||
                  ((ge = gt),
                  (ae -=
                    (U && be === ve && ve.visualViewport
                      ? ve.visualViewport.width
                      : be[Ie]) - m.width),
                  (ae *= H ? 1 : -1))
            }
            var Ce,
              He = Object.assign({ position: $ }, X && gc),
              bt =
                J === !0
                  ? (function (kt, ct) {
                      var Pt = kt.x,
                        At = kt.y,
                        Ve = ct.devicePixelRatio || 1
                      return {
                        x: Z1(Pt * Ve) / Ve || 0,
                        y: Z1(At * Ve) / Ve || 0,
                      }
                    })({ x: ae, y: ce }, zt(d))
                  : { x: ae, y: ce }
            return (
              (ae = bt.x),
              (ce = bt.y),
              H
                ? Object.assign(
                    {},
                    He,
                    (((Ce = {})[ye] = Re ? '0' : ''),
                    (Ce[ge] = Oe ? '0' : ''),
                    (Ce.transform =
                      (ve.devicePixelRatio || 1) <= 1
                        ? 'translate(' + ae + 'px, ' + ce + 'px)'
                        : 'translate3d(' + ae + 'px, ' + ce + 'px, 0)'),
                    Ce)
                  )
                : Object.assign(
                    {},
                    He,
                    (((r = {})[ye] = Re ? ce + 'px' : ''),
                    (r[ge] = Oe ? ae + 'px' : ''),
                    (r.transform = ''),
                    r)
                  )
            )
          }
          const fs = {
            name: 'computeStyles',
            enabled: !0,
            phase: 'beforeWrite',
            fn: function (h) {
              var r = h.state,
                d = h.options,
                m = d.gpuAcceleration,
                _ = m === void 0 || m,
                w = d.adaptive,
                E = w === void 0 || w,
                $ = d.roundOffsets,
                H = $ === void 0 || $,
                X = {
                  placement: Wt(r.placement),
                  variation: tn(r.placement),
                  popper: r.elements.popper,
                  popperRect: r.rects.popper,
                  gpuAcceleration: _,
                  isFixed: r.options.strategy === 'fixed',
                }
              r.modifiersData.popperOffsets != null &&
                (r.styles.popper = Object.assign(
                  {},
                  r.styles.popper,
                  dr(
                    Object.assign({}, X, {
                      offsets: r.modifiersData.popperOffsets,
                      position: r.options.strategy,
                      adaptive: E,
                      roundOffsets: H,
                    })
                  )
                )),
                r.modifiersData.arrow != null &&
                  (r.styles.arrow = Object.assign(
                    {},
                    r.styles.arrow,
                    dr(
                      Object.assign({}, X, {
                        offsets: r.modifiersData.arrow,
                        position: 'absolute',
                        adaptive: !1,
                        roundOffsets: H,
                      })
                    )
                  )),
                (r.attributes.popper = Object.assign({}, r.attributes.popper, {
                  'data-popper-placement': r.placement,
                }))
            },
            data: {},
          }
          var ri = { passive: !0 }
          const us = {
            name: 'eventListeners',
            enabled: !0,
            phase: 'write',
            fn: function () {},
            effect: function (h) {
              var r = h.state,
                d = h.instance,
                m = h.options,
                _ = m.scroll,
                w = _ === void 0 || _,
                E = m.resize,
                $ = E === void 0 || E,
                H = zt(r.elements.popper),
                X = [].concat(r.scrollParents.reference, r.scrollParents.popper)
              return (
                w &&
                  X.forEach(function (J) {
                    J.addEventListener('scroll', d.update, ri)
                  }),
                $ && H.addEventListener('resize', d.update, ri),
                function () {
                  w &&
                    X.forEach(function (J) {
                      J.removeEventListener('scroll', d.update, ri)
                    }),
                    $ && H.removeEventListener('resize', d.update, ri)
                }
              )
            },
            data: {},
          }
          var zc = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom',
          }
          function li(h) {
            return h.replace(/left|right|bottom|top/g, function (r) {
              return zc[r]
            })
          }
          var bc = { start: 'end', end: 'start' }
          function fr(h) {
            return h.replace(/start|end/g, function (r) {
              return bc[r]
            })
          }
          function hs(h) {
            var r = zt(h)
            return { scrollLeft: r.pageXOffset, scrollTop: r.pageYOffset }
          }
          function ps(h) {
            return en(f1(h)).left + hs(h).scrollLeft
          }
          function ms(h) {
            var r = e1(h),
              d = r.overflow,
              m = r.overflowX,
              _ = r.overflowY
            return /auto|scroll|overlay|hidden/.test(d + _ + m)
          }
          function ur(h) {
            return ['html', 'body', '#document'].indexOf(Gt(h)) >= 0
              ? h.ownerDocument.body
              : Mt(h) && ms(h)
                ? h
                : ur(si(h))
          }
          function Tn(h, r) {
            var d
            r === void 0 && (r = [])
            var m = ur(h),
              _ = m === ((d = h.ownerDocument) == null ? void 0 : d.body),
              w = zt(m),
              E = _ ? [w].concat(w.visualViewport || [], ms(m) ? m : []) : m,
              $ = r.concat(E)
            return _ ? $ : $.concat(Tn(si(E)))
          }
          function vs(h) {
            return Object.assign({}, h, {
              left: h.x,
              top: h.y,
              right: h.x + h.width,
              bottom: h.y + h.height,
            })
          }
          function hr(h, r, d) {
            return r === is
              ? vs(
                  (function (m, _) {
                    var w = zt(m),
                      E = f1(m),
                      $ = w.visualViewport,
                      H = E.clientWidth,
                      X = E.clientHeight,
                      J = 0,
                      U = 0
                    if ($) {
                      ;(H = $.width), (X = $.height)
                      var me = sr()
                      ;(me || (!me && _ === 'fixed')) &&
                        ((J = $.offsetLeft), (U = $.offsetTop))
                    }
                    return { width: H, height: X, x: J + ps(m), y: U }
                  })(h, d)
                )
              : T1(r)
                ? (function (m, _) {
                    var w = en(m, !1, _ === 'fixed')
                    return (
                      (w.top = w.top + m.clientTop),
                      (w.left = w.left + m.clientLeft),
                      (w.bottom = w.top + m.clientHeight),
                      (w.right = w.left + m.clientWidth),
                      (w.width = m.clientWidth),
                      (w.height = m.clientHeight),
                      (w.x = w.left),
                      (w.y = w.top),
                      w
                    )
                  })(r, d)
                : vs(
                    (function (m) {
                      var _,
                        w = f1(m),
                        E = hs(m),
                        $ = (_ = m.ownerDocument) == null ? void 0 : _.body,
                        H = M1(
                          w.scrollWidth,
                          w.clientWidth,
                          $ ? $.scrollWidth : 0,
                          $ ? $.clientWidth : 0
                        ),
                        X = M1(
                          w.scrollHeight,
                          w.clientHeight,
                          $ ? $.scrollHeight : 0,
                          $ ? $.clientHeight : 0
                        ),
                        J = -E.scrollLeft + ps(m),
                        U = -E.scrollTop
                      return (
                        e1($ || w).direction === 'rtl' &&
                          (J += M1(w.clientWidth, $ ? $.clientWidth : 0) - H),
                        { width: H, height: X, x: J, y: U }
                      )
                    })(f1(h))
                  )
          }
          function pr(h) {
            var r,
              d = h.reference,
              m = h.element,
              _ = h.placement,
              w = _ ? Wt(_) : null,
              E = _ ? tn(_) : null,
              $ = d.x + d.width / 2 - m.width / 2,
              H = d.y + d.height / 2 - m.height / 2
            switch (w) {
              case at:
                r = { x: $, y: d.y - m.height }
                break
              case vt:
                r = { x: $, y: d.y + d.height }
                break
              case gt:
                r = { x: d.x + d.width, y: H }
                break
              case ot:
                r = { x: d.x - m.width, y: H }
                break
              default:
                r = { x: d.x, y: d.y }
            }
            var X = w ? ds(w) : null
            if (X != null) {
              var J = X === 'y' ? 'height' : 'width'
              switch (E) {
                case x1:
                  r[X] = r[X] - (d[J] / 2 - m[J] / 2)
                  break
                case Q1:
                  r[X] = r[X] + (d[J] / 2 - m[J] / 2)
              }
            }
            return r
          }
          function nn(h, r) {
            r === void 0 && (r = {})
            var d = r,
              m = d.placement,
              _ = m === void 0 ? h.placement : m,
              w = d.strategy,
              E = w === void 0 ? h.strategy : w,
              $ = d.boundary,
              H = $ === void 0 ? q2 : $,
              X = d.rootBoundary,
              J = X === void 0 ? is : X,
              U = d.elementContext,
              me = U === void 0 ? J1 : U,
              ae = d.altBoundary,
              ue = ae !== void 0 && ae,
              ce = d.padding,
              he = ce === void 0 ? 0 : ce,
              Oe = ar(typeof he != 'number' ? he : or(he, X1)),
              Re = me === J1 ? U2 : J1,
              ge = h.rects.popper,
              ye = h.elements[ue ? Re : me],
              ve = (function (ct, Pt, At, Ve) {
                var qt =
                    Pt === 'clippingParents'
                      ? (function (Le) {
                          var dt = Tn(si(Le)),
                            Ot =
                              ['absolute', 'fixed'].indexOf(e1(Le).position) >=
                                0 && Mt(Le)
                                ? En(Le)
                                : Le
                          return T1(Ot)
                            ? dt.filter(function (h1) {
                                return T1(h1) && rr(h1, Ot) && Gt(h1) !== 'body'
                              })
                            : []
                        })(ct)
                      : [].concat(Pt),
                  Ut = [].concat(qt, [At]),
                  ln = Ut[0],
                  Ye = Ut.reduce(
                    function (Le, dt) {
                      var Ot = hr(ct, dt, Ve)
                      return (
                        (Le.top = M1(Ot.top, Le.top)),
                        (Le.right = ii(Ot.right, Le.right)),
                        (Le.bottom = ii(Ot.bottom, Le.bottom)),
                        (Le.left = M1(Ot.left, Le.left)),
                        Le
                      )
                    },
                    hr(ct, ln, Ve)
                  )
                return (
                  (Ye.width = Ye.right - Ye.left),
                  (Ye.height = Ye.bottom - Ye.top),
                  (Ye.x = Ye.left),
                  (Ye.y = Ye.top),
                  Ye
                )
              })(
                T1(ye) ? ye : ye.contextElement || f1(h.elements.popper),
                H,
                J,
                E
              ),
              be = en(h.elements.reference),
              Me = pr({ reference: be, element: ge, placement: _ }),
              Ie = vs(Object.assign({}, ge, Me)),
              Ce = me === J1 ? Ie : be,
              He = {
                top: ve.top - Ce.top + Oe.top,
                bottom: Ce.bottom - ve.bottom + Oe.bottom,
                left: ve.left - Ce.left + Oe.left,
                right: Ce.right - ve.right + Oe.right,
              },
              bt = h.modifiersData.offset
            if (me === J1 && bt) {
              var kt = bt[_]
              Object.keys(He).forEach(function (ct) {
                var Pt = [gt, vt].indexOf(ct) >= 0 ? 1 : -1,
                  At = [at, vt].indexOf(ct) >= 0 ? 'y' : 'x'
                He[ct] += kt[At] * Pt
              })
            }
            return He
          }
          function _c(h, r) {
            r === void 0 && (r = {})
            var d = r,
              m = d.placement,
              _ = d.boundary,
              w = d.rootBoundary,
              E = d.padding,
              $ = d.flipVariations,
              H = d.allowedAutoPlacements,
              X = H === void 0 ? rs : H,
              J = tn(m),
              U = J
                ? $
                  ? ss
                  : ss.filter(function (ue) {
                      return tn(ue) === J
                    })
                : X1,
              me = U.filter(function (ue) {
                return X.indexOf(ue) >= 0
              })
            me.length === 0 && (me = U)
            var ae = me.reduce(function (ue, ce) {
              return (
                (ue[ce] = nn(h, {
                  placement: ce,
                  boundary: _,
                  rootBoundary: w,
                  padding: E,
                })[Wt(ce)]),
                ue
              )
            }, {})
            return Object.keys(ae).sort(function (ue, ce) {
              return ae[ue] - ae[ce]
            })
          }
          const mr = {
            name: 'flip',
            enabled: !0,
            phase: 'main',
            fn: function (h) {
              var r = h.state,
                d = h.options,
                m = h.name
              if (!r.modifiersData[m]._skip) {
                for (
                  var _ = d.mainAxis,
                    w = _ === void 0 || _,
                    E = d.altAxis,
                    $ = E === void 0 || E,
                    H = d.fallbackPlacements,
                    X = d.padding,
                    J = d.boundary,
                    U = d.rootBoundary,
                    me = d.altBoundary,
                    ae = d.flipVariations,
                    ue = ae === void 0 || ae,
                    ce = d.allowedAutoPlacements,
                    he = r.options.placement,
                    Oe = Wt(he),
                    Re =
                      H ||
                      (Oe !== he && ue
                        ? (function (Le) {
                            if (Wt(Le) === ni) return []
                            var dt = li(Le)
                            return [fr(Le), dt, fr(dt)]
                          })(he)
                        : [li(he)]),
                    ge = [he].concat(Re).reduce(function (Le, dt) {
                      return Le.concat(
                        Wt(dt) === ni
                          ? _c(r, {
                              placement: dt,
                              boundary: J,
                              rootBoundary: U,
                              padding: X,
                              flipVariations: ue,
                              allowedAutoPlacements: ce,
                            })
                          : dt
                      )
                    }, []),
                    ye = r.rects.reference,
                    ve = r.rects.popper,
                    be = new Map(),
                    Me = !0,
                    Ie = ge[0],
                    Ce = 0;
                  Ce < ge.length;
                  Ce++
                ) {
                  var He = ge[Ce],
                    bt = Wt(He),
                    kt = tn(He) === x1,
                    ct = [at, vt].indexOf(bt) >= 0,
                    Pt = ct ? 'width' : 'height',
                    At = nn(r, {
                      placement: He,
                      boundary: J,
                      rootBoundary: U,
                      altBoundary: me,
                      padding: X,
                    }),
                    Ve = ct ? (kt ? gt : ot) : kt ? vt : at
                  ye[Pt] > ve[Pt] && (Ve = li(Ve))
                  var qt = li(Ve),
                    Ut = []
                  if (
                    (w && Ut.push(At[bt] <= 0),
                    $ && Ut.push(At[Ve] <= 0, At[qt] <= 0),
                    Ut.every(function (Le) {
                      return Le
                    }))
                  ) {
                    ;(Ie = He), (Me = !1)
                    break
                  }
                  be.set(He, Ut)
                }
                if (Me)
                  for (
                    var ln = function (Le) {
                        var dt = ge.find(function (Ot) {
                          var h1 = be.get(Ot)
                          if (h1)
                            return h1.slice(0, Le).every(function (mi) {
                              return mi
                            })
                        })
                        if (dt) return (Ie = dt), 'break'
                      },
                      Ye = ue ? 3 : 1;
                    Ye > 0 && ln(Ye) !== 'break';
                    Ye--
                  );
                r.placement !== Ie &&
                  ((r.modifiersData[m]._skip = !0),
                  (r.placement = Ie),
                  (r.reset = !0))
              }
            },
            requiresIfExists: ['offset'],
            data: { _skip: !1 },
          }
          function vr(h, r, d) {
            return (
              d === void 0 && (d = { x: 0, y: 0 }),
              {
                top: h.top - r.height - d.y,
                right: h.right - r.width + d.x,
                bottom: h.bottom - r.height + d.y,
                left: h.left - r.width - d.x,
              }
            )
          }
          function gr(h) {
            return [at, gt, vt, ot].some(function (r) {
              return h[r] >= 0
            })
          }
          const zr = {
              name: 'hide',
              enabled: !0,
              phase: 'main',
              requiresIfExists: ['preventOverflow'],
              fn: function (h) {
                var r = h.state,
                  d = h.name,
                  m = r.rects.reference,
                  _ = r.rects.popper,
                  w = r.modifiersData.preventOverflow,
                  E = nn(r, { elementContext: 'reference' }),
                  $ = nn(r, { altBoundary: !0 }),
                  H = vr(E, m),
                  X = vr($, _, w),
                  J = gr(H),
                  U = gr(X)
                ;(r.modifiersData[d] = {
                  referenceClippingOffsets: H,
                  popperEscapeOffsets: X,
                  isReferenceHidden: J,
                  hasPopperEscaped: U,
                }),
                  (r.attributes.popper = Object.assign(
                    {},
                    r.attributes.popper,
                    {
                      'data-popper-reference-hidden': J,
                      'data-popper-escaped': U,
                    }
                  ))
              },
            },
            br = {
              name: 'offset',
              enabled: !0,
              phase: 'main',
              requires: ['popperOffsets'],
              fn: function (h) {
                var r = h.state,
                  d = h.options,
                  m = h.name,
                  _ = d.offset,
                  w = _ === void 0 ? [0, 0] : _,
                  E = rs.reduce(function (J, U) {
                    return (
                      (J[U] = (function (me, ae, ue) {
                        var ce = Wt(me),
                          he = [ot, at].indexOf(ce) >= 0 ? -1 : 1,
                          Oe =
                            typeof ue == 'function'
                              ? ue(Object.assign({}, ae, { placement: me }))
                              : ue,
                          Re = Oe[0],
                          ge = Oe[1]
                        return (
                          (Re = Re || 0),
                          (ge = (ge || 0) * he),
                          [ot, gt].indexOf(ce) >= 0
                            ? { x: ge, y: Re }
                            : { x: Re, y: ge }
                        )
                      })(U, r.rects, w)),
                      J
                    )
                  }, {}),
                  $ = E[r.placement],
                  H = $.x,
                  X = $.y
                r.modifiersData.popperOffsets != null &&
                  ((r.modifiersData.popperOffsets.x += H),
                  (r.modifiersData.popperOffsets.y += X)),
                  (r.modifiersData[m] = E)
              },
            },
            gs = {
              name: 'popperOffsets',
              enabled: !0,
              phase: 'read',
              fn: function (h) {
                var r = h.state,
                  d = h.name
                r.modifiersData[d] = pr({
                  reference: r.rects.reference,
                  element: r.rects.popper,
                  placement: r.placement,
                })
              },
              data: {},
            },
            _r = {
              name: 'preventOverflow',
              enabled: !0,
              phase: 'main',
              fn: function (h) {
                var r = h.state,
                  d = h.options,
                  m = h.name,
                  _ = d.mainAxis,
                  w = _ === void 0 || _,
                  E = d.altAxis,
                  $ = E !== void 0 && E,
                  H = d.boundary,
                  X = d.rootBoundary,
                  J = d.altBoundary,
                  U = d.padding,
                  me = d.tether,
                  ae = me === void 0 || me,
                  ue = d.tetherOffset,
                  ce = ue === void 0 ? 0 : ue,
                  he = nn(r, {
                    boundary: H,
                    rootBoundary: X,
                    padding: U,
                    altBoundary: J,
                  }),
                  Oe = Wt(r.placement),
                  Re = tn(r.placement),
                  ge = !Re,
                  ye = ds(Oe),
                  ve = ye === 'x' ? 'y' : 'x',
                  be = r.modifiersData.popperOffsets,
                  Me = r.rects.reference,
                  Ie = r.rects.popper,
                  Ce =
                    typeof ce == 'function'
                      ? ce(
                          Object.assign({}, r.rects, { placement: r.placement })
                        )
                      : ce,
                  He =
                    typeof Ce == 'number'
                      ? { mainAxis: Ce, altAxis: Ce }
                      : Object.assign({ mainAxis: 0, altAxis: 0 }, Ce),
                  bt = r.modifiersData.offset
                    ? r.modifiersData.offset[r.placement]
                    : null,
                  kt = { x: 0, y: 0 }
                if (be) {
                  if (w) {
                    var ct,
                      Pt = ye === 'y' ? at : ot,
                      At = ye === 'y' ? vt : gt,
                      Ve = ye === 'y' ? 'height' : 'width',
                      qt = be[ye],
                      Ut = qt + he[Pt],
                      ln = qt - he[At],
                      Ye = ae ? -Ie[Ve] / 2 : 0,
                      Le = Re === x1 ? Me[Ve] : Ie[Ve],
                      dt = Re === x1 ? -Ie[Ve] : -Me[Ve],
                      Ot = r.elements.arrow,
                      h1 = ae && Ot ? cs(Ot) : { width: 0, height: 0 },
                      mi = r.modifiersData['arrow#persistent']
                        ? r.modifiersData['arrow#persistent'].padding
                        : { top: 0, right: 0, bottom: 0, left: 0 },
                      ll = mi[Pt],
                      al = mi[At],
                      vi = xn(0, Me[Ve], h1[Ve]),
                      J3 = ge
                        ? Me[Ve] / 2 - Ye - vi - ll - He.mainAxis
                        : Le - vi - ll - He.mainAxis,
                      Z3 = ge
                        ? -Me[Ve] / 2 + Ye + vi + al + He.mainAxis
                        : dt + vi + al + He.mainAxis,
                      As = r.elements.arrow && En(r.elements.arrow),
                      e4 = As
                        ? ye === 'y'
                          ? As.clientTop || 0
                          : As.clientLeft || 0
                        : 0,
                      ol = (ct = bt == null ? void 0 : bt[ye]) != null ? ct : 0,
                      t4 = qt + Z3 - ol,
                      cl = xn(
                        ae ? ii(Ut, qt + J3 - ol - e4) : Ut,
                        qt,
                        ae ? M1(ln, t4) : ln
                      )
                    ;(be[ye] = cl), (kt[ye] = cl - qt)
                  }
                  if ($) {
                    var dl,
                      n4 = ye === 'x' ? at : ot,
                      i4 = ye === 'x' ? vt : gt,
                      R1 = be[ve],
                      gi = ve === 'y' ? 'height' : 'width',
                      fl = R1 + he[n4],
                      ul = R1 - he[i4],
                      Os = [at, ot].indexOf(Oe) !== -1,
                      hl = (dl = bt == null ? void 0 : bt[ve]) != null ? dl : 0,
                      pl = Os ? fl : R1 - Me[gi] - Ie[gi] - hl + He.altAxis,
                      ml = Os ? R1 + Me[gi] + Ie[gi] - hl - He.altAxis : ul,
                      vl =
                        ae && Os
                          ? (function (s4, r4, Is) {
                              var gl = xn(s4, r4, Is)
                              return gl > Is ? Is : gl
                            })(pl, R1, ml)
                          : xn(ae ? pl : fl, R1, ae ? ml : ul)
                    ;(be[ve] = vl), (kt[ve] = vl - R1)
                  }
                  r.modifiersData[m] = kt
                }
              },
              requiresIfExists: ['offset'],
            }
          function wc(h, r, d) {
            d === void 0 && (d = !1)
            var m,
              _,
              w = Mt(r),
              E =
                Mt(r) &&
                (function (U) {
                  var me = U.getBoundingClientRect(),
                    ae = Z1(me.width) / U.offsetWidth || 1,
                    ue = Z1(me.height) / U.offsetHeight || 1
                  return ae !== 1 || ue !== 1
                })(r),
              $ = f1(r),
              H = en(h, E, d),
              X = { scrollLeft: 0, scrollTop: 0 },
              J = { x: 0, y: 0 }
            return (
              (w || (!w && !d)) &&
                ((Gt(r) !== 'body' || ms($)) &&
                  (X =
                    (m = r) !== zt(m) && Mt(m)
                      ? {
                          scrollLeft: (_ = m).scrollLeft,
                          scrollTop: _.scrollTop,
                        }
                      : hs(m)),
                Mt(r)
                  ? (((J = en(r, !0)).x += r.clientLeft), (J.y += r.clientTop))
                  : $ && (J.x = ps($))),
              {
                x: H.left + X.scrollLeft - J.x,
                y: H.top + X.scrollTop - J.y,
                width: H.width,
                height: H.height,
              }
            )
          }
          function yc(h) {
            var r = new Map(),
              d = new Set(),
              m = []
            function _(w) {
              d.add(w.name),
                []
                  .concat(w.requires || [], w.requiresIfExists || [])
                  .forEach(function (E) {
                    if (!d.has(E)) {
                      var $ = r.get(E)
                      $ && _($)
                    }
                  }),
                m.push(w)
            }
            return (
              h.forEach(function (w) {
                r.set(w.name, w)
              }),
              h.forEach(function (w) {
                d.has(w.name) || _(w)
              }),
              m
            )
          }
          var wr = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
          function yr() {
            for (var h = arguments.length, r = new Array(h), d = 0; d < h; d++)
              r[d] = arguments[d]
            return !r.some(function (m) {
              return !(m && typeof m.getBoundingClientRect == 'function')
            })
          }
          function ai(h) {
            h === void 0 && (h = {})
            var r = h,
              d = r.defaultModifiers,
              m = d === void 0 ? [] : d,
              _ = r.defaultOptions,
              w = _ === void 0 ? wr : _
            return function (E, $, H) {
              H === void 0 && (H = w)
              var X,
                J,
                U = {
                  placement: 'bottom',
                  orderedModifiers: [],
                  options: Object.assign({}, wr, w),
                  modifiersData: {},
                  elements: { reference: E, popper: $ },
                  attributes: {},
                  styles: {},
                },
                me = [],
                ae = !1,
                ue = {
                  state: U,
                  setOptions: function (he) {
                    var Oe = typeof he == 'function' ? he(U.options) : he
                    ce(),
                      (U.options = Object.assign({}, w, U.options, Oe)),
                      (U.scrollParents = {
                        reference: T1(E)
                          ? Tn(E)
                          : E.contextElement
                            ? Tn(E.contextElement)
                            : [],
                        popper: Tn($),
                      })
                    var Re,
                      ge,
                      ye = (function (ve) {
                        var be = yc(ve)
                        return ir.reduce(function (Me, Ie) {
                          return Me.concat(
                            be.filter(function (Ce) {
                              return Ce.phase === Ie
                            })
                          )
                        }, [])
                      })(
                        ((Re = [].concat(m, U.options.modifiers)),
                        (ge = Re.reduce(function (ve, be) {
                          var Me = ve[be.name]
                          return (
                            (ve[be.name] = Me
                              ? Object.assign({}, Me, be, {
                                  options: Object.assign(
                                    {},
                                    Me.options,
                                    be.options
                                  ),
                                  data: Object.assign({}, Me.data, be.data),
                                })
                              : be),
                            ve
                          )
                        }, {})),
                        Object.keys(ge).map(function (ve) {
                          return ge[ve]
                        }))
                      )
                    return (
                      (U.orderedModifiers = ye.filter(function (ve) {
                        return ve.enabled
                      })),
                      U.orderedModifiers.forEach(function (ve) {
                        var be = ve.name,
                          Me = ve.options,
                          Ie = Me === void 0 ? {} : Me,
                          Ce = ve.effect
                        if (typeof Ce == 'function') {
                          var He = Ce({
                            state: U,
                            name: be,
                            instance: ue,
                            options: Ie,
                          })
                          me.push(He || function () {})
                        }
                      }),
                      ue.update()
                    )
                  },
                  forceUpdate: function () {
                    if (!ae) {
                      var he = U.elements,
                        Oe = he.reference,
                        Re = he.popper
                      if (yr(Oe, Re)) {
                        ;(U.rects = {
                          reference: wc(
                            Oe,
                            En(Re),
                            U.options.strategy === 'fixed'
                          ),
                          popper: cs(Re),
                        }),
                          (U.reset = !1),
                          (U.placement = U.options.placement),
                          U.orderedModifiers.forEach(function (Ce) {
                            return (U.modifiersData[Ce.name] = Object.assign(
                              {},
                              Ce.data
                            ))
                          })
                        for (var ge = 0; ge < U.orderedModifiers.length; ge++)
                          if (U.reset !== !0) {
                            var ye = U.orderedModifiers[ge],
                              ve = ye.fn,
                              be = ye.options,
                              Me = be === void 0 ? {} : be,
                              Ie = ye.name
                            typeof ve == 'function' &&
                              (U =
                                ve({
                                  state: U,
                                  options: Me,
                                  name: Ie,
                                  instance: ue,
                                }) || U)
                          } else (U.reset = !1), (ge = -1)
                      }
                    }
                  },
                  update:
                    ((X = function () {
                      return new Promise(function (he) {
                        ue.forceUpdate(), he(U)
                      })
                    }),
                    function () {
                      return (
                        J ||
                          (J = new Promise(function (he) {
                            Promise.resolve().then(function () {
                              ;(J = void 0), he(X())
                            })
                          })),
                        J
                      )
                    }),
                  destroy: function () {
                    ce(), (ae = !0)
                  },
                }
              if (!yr(E, $)) return ue
              function ce() {
                me.forEach(function (he) {
                  return he()
                }),
                  (me = [])
              }
              return (
                ue.setOptions(H).then(function (he) {
                  !ae && H.onFirstUpdate && H.onFirstUpdate(he)
                }),
                ue
              )
            }
          }
          var Sc = ai(),
            Ec = ai({ defaultModifiers: [us, gs, fs, as] }),
            zs = ai({ defaultModifiers: [us, gs, fs, as, br, mr, _r, cr, zr] })
          const Sr = Object.freeze(
              Object.defineProperty(
                {
                  __proto__: null,
                  afterMain: Z2,
                  afterRead: X2,
                  afterWrite: nr,
                  applyStyles: as,
                  arrow: cr,
                  auto: ni,
                  basePlacements: X1,
                  beforeMain: Q2,
                  beforeRead: K2,
                  beforeWrite: er,
                  bottom: vt,
                  clippingParents: q2,
                  computeStyles: fs,
                  createPopper: zs,
                  createPopperBase: Sc,
                  createPopperLite: Ec,
                  detectOverflow: nn,
                  end: Q1,
                  eventListeners: us,
                  flip: mr,
                  hide: zr,
                  left: ot,
                  main: J2,
                  modifierPhases: ir,
                  offset: br,
                  placements: rs,
                  popper: J1,
                  popperGenerator: ai,
                  popperOffsets: gs,
                  preventOverflow: _r,
                  read: Y2,
                  reference: U2,
                  right: gt,
                  start: x1,
                  top: at,
                  variationPlacements: ss,
                  viewport: is,
                  write: tr,
                },
                Symbol.toStringTag,
                { value: 'Module' }
              )
            ),
            Er = 'dropdown',
            C1 = '.bs.dropdown',
            bs = '.data-api',
            xc = 'ArrowUp',
            xr = 'ArrowDown',
            Tc = `hide${C1}`,
            Mc = `hidden${C1}`,
            Cc = `show${C1}`,
            Pc = `shown${C1}`,
            Tr = `click${C1}${bs}`,
            Mr = `keydown${C1}${bs}`,
            Ac = `keyup${C1}${bs}`,
            sn = 'show',
            P1 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            Oc = `${P1}.${sn}`,
            oi = '.dropdown-menu',
            Ic = k() ? 'top-end' : 'top-start',
            Lc = k() ? 'top-start' : 'top-end',
            Dc = k() ? 'bottom-end' : 'bottom-start',
            Rc = k() ? 'bottom-start' : 'bottom-end',
            $c = k() ? 'left-start' : 'right-start',
            kc = k() ? 'right-start' : 'left-start',
            Bc = {
              autoClose: !0,
              boundary: 'clippingParents',
              display: 'dynamic',
              offset: [0, 2],
              popperConfig: null,
              reference: 'toggle',
            },
            Nc = {
              autoClose: '(boolean|string)',
              boundary: '(string|element)',
              display: 'string',
              offset: '(array|string|function)',
              popperConfig: '(null|object|function)',
              reference: '(string|element|object)',
            }
          class $t extends Be {
            constructor(r, d) {
              super(r, d),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                  P.next(this._element, oi)[0] ||
                  P.prev(this._element, oi)[0] ||
                  P.findOne(oi, this._parent)),
                (this._inNavbar = this._detectNavbar())
            }
            static get Default() {
              return Bc
            }
            static get DefaultType() {
              return Nc
            }
            static get NAME() {
              return Er
            }
            toggle() {
              return this._isShown() ? this.hide() : this.show()
            }
            show() {
              if (f(this._element) || this._isShown()) return
              const r = { relatedTarget: this._element }
              if (!I.trigger(this._element, Cc, r).defaultPrevented) {
                if (
                  (this._createPopper(),
                  'ontouchstart' in document.documentElement &&
                    !this._parent.closest('.navbar-nav'))
                )
                  for (const d of [].concat(...document.body.children))
                    I.on(d, 'mouseover', v)
                this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  this._menu.classList.add(sn),
                  this._element.classList.add(sn),
                  I.trigger(this._element, Pc, r)
              }
            }
            hide() {
              if (f(this._element) || !this._isShown()) return
              const r = { relatedTarget: this._element }
              this._completeHide(r)
            }
            dispose() {
              this._popper && this._popper.destroy(), super.dispose()
            }
            update() {
              ;(this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update()
            }
            _completeHide(r) {
              if (!I.trigger(this._element, Tc, r).defaultPrevented) {
                if ('ontouchstart' in document.documentElement)
                  for (const d of [].concat(...document.body.children))
                    I.off(d, 'mouseover', v)
                this._popper && this._popper.destroy(),
                  this._menu.classList.remove(sn),
                  this._element.classList.remove(sn),
                  this._element.setAttribute('aria-expanded', 'false'),
                  Ze.removeDataAttribute(this._menu, 'popper'),
                  I.trigger(this._element, Mc, r),
                  this._element.focus()
              }
            }
            _getConfig(r) {
              if (
                typeof (r = super._getConfig(r)).reference == 'object' &&
                !o(r.reference) &&
                typeof r.reference.getBoundingClientRect != 'function'
              )
                throw new TypeError(
                  `${Er.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                )
              return r
            }
            _createPopper() {
              if (Sr === void 0)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)"
                )
              let r = this._element
              this._config.reference === 'parent'
                ? (r = this._parent)
                : o(this._config.reference)
                  ? (r = c(this._config.reference))
                  : typeof this._config.reference == 'object' &&
                    (r = this._config.reference)
              const d = this._getPopperConfig()
              this._popper = zs(r, this._menu, d)
            }
            _isShown() {
              return this._menu.classList.contains(sn)
            }
            _getPlacement() {
              const r = this._parent
              if (r.classList.contains('dropend')) return $c
              if (r.classList.contains('dropstart')) return kc
              if (r.classList.contains('dropup-center')) return 'top'
              if (r.classList.contains('dropdown-center')) return 'bottom'
              const d =
                getComputedStyle(this._menu)
                  .getPropertyValue('--bs-position')
                  .trim() === 'end'
              return r.classList.contains('dropup')
                ? d
                  ? Lc
                  : Ic
                : d
                  ? Rc
                  : Dc
            }
            _detectNavbar() {
              return this._element.closest('.navbar') !== null
            }
            _getOffset() {
              const { offset: r } = this._config
              return typeof r == 'string'
                ? r.split(',').map(d => Number.parseInt(d, 10))
                : typeof r == 'function'
                  ? d => r(d, this._element)
                  : r
            }
            _getPopperConfig() {
              const r = {
                placement: this._getPlacement(),
                modifiers: [
                  {
                    name: 'preventOverflow',
                    options: { boundary: this._config.boundary },
                  },
                  { name: 'offset', options: { offset: this._getOffset() } },
                ],
              }
              return (
                (this._inNavbar || this._config.display === 'static') &&
                  (Ze.setDataAttribute(this._menu, 'popper', 'static'),
                  (r.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
                { ...r, ...M(this._config.popperConfig, [void 0, r]) }
              )
            }
            _selectMenuItem({ key: r, target: d }) {
              const m = P.find(
                '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
                this._menu
              ).filter(_ => u(_))
              m.length && R(m, d, r === xr, !m.includes(d)).focus()
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = $t.getOrCreateInstance(this, r)
                if (typeof r == 'string') {
                  if (d[r] === void 0)
                    throw new TypeError(`No method named "${r}"`)
                  d[r]()
                }
              })
            }
            static clearMenus(r) {
              if (r.button === 2 || (r.type === 'keyup' && r.key !== 'Tab'))
                return
              const d = P.find(Oc)
              for (const m of d) {
                const _ = $t.getInstance(m)
                if (!_ || _._config.autoClose === !1) continue
                const w = r.composedPath(),
                  E = w.includes(_._menu)
                if (
                  w.includes(_._element) ||
                  (_._config.autoClose === 'inside' && !E) ||
                  (_._config.autoClose === 'outside' && E) ||
                  (_._menu.contains(r.target) &&
                    ((r.type === 'keyup' && r.key === 'Tab') ||
                      /input|select|option|textarea|form/i.test(
                        r.target.tagName
                      )))
                )
                  continue
                const $ = { relatedTarget: _._element }
                r.type === 'click' && ($.clickEvent = r), _._completeHide($)
              }
            }
            static dataApiKeydownHandler(r) {
              const d = /input|textarea/i.test(r.target.tagName),
                m = r.key === 'Escape',
                _ = [xc, xr].includes(r.key)
              if ((!_ && !m) || (d && !m)) return
              r.preventDefault()
              const w = this.matches(P1)
                  ? this
                  : P.prev(this, P1)[0] ||
                    P.next(this, P1)[0] ||
                    P.findOne(P1, r.delegateTarget.parentNode),
                E = $t.getOrCreateInstance(w)
              if (_)
                return r.stopPropagation(), E.show(), void E._selectMenuItem(r)
              E._isShown() && (r.stopPropagation(), E.hide(), w.focus())
            }
          }
          I.on(document, Mr, P1, $t.dataApiKeydownHandler),
            I.on(document, Mr, oi, $t.dataApiKeydownHandler),
            I.on(document, Tr, $t.clearMenus),
            I.on(document, Ac, $t.clearMenus),
            I.on(document, Tr, P1, function (h) {
              h.preventDefault(), $t.getOrCreateInstance(this).toggle()
            }),
            x($t)
          const Cr = 'backdrop',
            Pr = 'show',
            Ar = `mousedown.bs.${Cr}`,
            Fc = {
              className: 'modal-backdrop',
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: 'body',
            },
            Vc = {
              className: 'string',
              clickCallback: '(function|null)',
              isAnimated: 'boolean',
              isVisible: 'boolean',
              rootElement: '(element|string)',
            }
          class Or extends Ht {
            constructor(r) {
              super(),
                (this._config = this._getConfig(r)),
                (this._isAppended = !1),
                (this._element = null)
            }
            static get Default() {
              return Fc
            }
            static get DefaultType() {
              return Vc
            }
            static get NAME() {
              return Cr
            }
            show(r) {
              if (!this._config.isVisible) return void M(r)
              this._append()
              const d = this._getElement()
              this._config.isAnimated && g(d),
                d.classList.add(Pr),
                this._emulateAnimation(() => {
                  M(r)
                })
            }
            hide(r) {
              this._config.isVisible
                ? (this._getElement().classList.remove(Pr),
                  this._emulateAnimation(() => {
                    this.dispose(), M(r)
                  }))
                : M(r)
            }
            dispose() {
              this._isAppended &&
                (I.off(this._element, Ar),
                this._element.remove(),
                (this._isAppended = !1))
            }
            _getElement() {
              if (!this._element) {
                const r = document.createElement('div')
                ;(r.className = this._config.className),
                  this._config.isAnimated && r.classList.add('fade'),
                  (this._element = r)
              }
              return this._element
            }
            _configAfterMerge(r) {
              return (r.rootElement = c(r.rootElement)), r
            }
            _append() {
              if (this._isAppended) return
              const r = this._getElement()
              this._config.rootElement.append(r),
                I.on(r, Ar, () => {
                  M(this._config.clickCallback)
                }),
                (this._isAppended = !0)
            }
            _emulateAnimation(r) {
              C(r, this._getElement(), this._config.isAnimated)
            }
          }
          const ci = '.bs.focustrap',
            jc = `focusin${ci}`,
            Hc = `keydown.tab${ci}`,
            Ir = 'backward',
            Gc = { autofocus: !0, trapElement: null },
            Wc = { autofocus: 'boolean', trapElement: 'element' }
          class Lr extends Ht {
            constructor(r) {
              super(),
                (this._config = this._getConfig(r)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null)
            }
            static get Default() {
              return Gc
            }
            static get DefaultType() {
              return Wc
            }
            static get NAME() {
              return 'focustrap'
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                I.off(document, ci),
                I.on(document, jc, r => this._handleFocusin(r)),
                I.on(document, Hc, r => this._handleKeydown(r)),
                (this._isActive = !0))
            }
            deactivate() {
              this._isActive && ((this._isActive = !1), I.off(document, ci))
            }
            _handleFocusin(r) {
              const { trapElement: d } = this._config
              if (
                r.target === document ||
                r.target === d ||
                d.contains(r.target)
              )
                return
              const m = P.focusableChildren(d)
              m.length === 0
                ? d.focus()
                : this._lastTabNavDirection === Ir
                  ? m[m.length - 1].focus()
                  : m[0].focus()
            }
            _handleKeydown(r) {
              r.key === 'Tab' &&
                (this._lastTabNavDirection = r.shiftKey ? Ir : 'forward')
            }
          }
          const Dr = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
            Rr = '.sticky-top',
            di = 'padding-right',
            $r = 'margin-right'
          class _s {
            constructor() {
              this._element = document.body
            }
            getWidth() {
              const r = document.documentElement.clientWidth
              return Math.abs(window.innerWidth - r)
            }
            hide() {
              const r = this.getWidth()
              this._disableOverFlow(),
                this._setElementAttributes(this._element, di, d => d + r),
                this._setElementAttributes(Dr, di, d => d + r),
                this._setElementAttributes(Rr, $r, d => d - r)
            }
            reset() {
              this._resetElementAttributes(this._element, 'overflow'),
                this._resetElementAttributes(this._element, di),
                this._resetElementAttributes(Dr, di),
                this._resetElementAttributes(Rr, $r)
            }
            isOverflowing() {
              return this.getWidth() > 0
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, 'overflow'),
                (this._element.style.overflow = 'hidden')
            }
            _setElementAttributes(r, d, m) {
              const _ = this.getWidth()
              this._applyManipulationCallback(r, w => {
                if (
                  w !== this._element &&
                  window.innerWidth > w.clientWidth + _
                )
                  return
                this._saveInitialAttribute(w, d)
                const E = window.getComputedStyle(w).getPropertyValue(d)
                w.style.setProperty(d, `${m(Number.parseFloat(E))}px`)
              })
            }
            _saveInitialAttribute(r, d) {
              const m = r.style.getPropertyValue(d)
              m && Ze.setDataAttribute(r, d, m)
            }
            _resetElementAttributes(r, d) {
              this._applyManipulationCallback(r, m => {
                const _ = Ze.getDataAttribute(m, d)
                _ !== null
                  ? (Ze.removeDataAttribute(m, d), m.style.setProperty(d, _))
                  : m.style.removeProperty(d)
              })
            }
            _applyManipulationCallback(r, d) {
              if (o(r)) d(r)
              else for (const m of P.find(r, this._element)) d(m)
            }
          }
          const Ct = '.bs.modal',
            qc = `hide${Ct}`,
            Uc = `hidePrevented${Ct}`,
            kr = `hidden${Ct}`,
            Br = `show${Ct}`,
            Kc = `shown${Ct}`,
            Yc = `resize${Ct}`,
            Xc = `click.dismiss${Ct}`,
            Qc = `mousedown.dismiss${Ct}`,
            Jc = `keydown.dismiss${Ct}`,
            Zc = `click${Ct}.data-api`,
            Nr = 'modal-open',
            Fr = 'show',
            ws = 'modal-static',
            e3 = { backdrop: !0, focus: !0, keyboard: !0 },
            t3 = {
              backdrop: '(boolean|string)',
              focus: 'boolean',
              keyboard: 'boolean',
            }
          class A1 extends Be {
            constructor(r, d) {
              super(r, d),
                (this._dialog = P.findOne('.modal-dialog', this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new _s()),
                this._addEventListeners()
            }
            static get Default() {
              return e3
            }
            static get DefaultType() {
              return t3
            }
            static get NAME() {
              return 'modal'
            }
            toggle(r) {
              return this._isShown ? this.hide() : this.show(r)
            }
            show(r) {
              this._isShown ||
                this._isTransitioning ||
                I.trigger(this._element, Br, { relatedTarget: r })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(Nr),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(r)))
            }
            hide() {
              this._isShown &&
                !this._isTransitioning &&
                (I.trigger(this._element, qc).defaultPrevented ||
                  ((this._isShown = !1),
                  (this._isTransitioning = !0),
                  this._focustrap.deactivate(),
                  this._element.classList.remove(Fr),
                  this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated()
                  )))
            }
            dispose() {
              I.off(window, Ct),
                I.off(this._dialog, Ct),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose()
            }
            handleUpdate() {
              this._adjustDialog()
            }
            _initializeBackDrop() {
              return new Or({
                isVisible: !!this._config.backdrop,
                isAnimated: this._isAnimated(),
              })
            }
            _initializeFocusTrap() {
              return new Lr({ trapElement: this._element })
            }
            _showElement(r) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = 'block'),
                this._element.removeAttribute('aria-hidden'),
                this._element.setAttribute('aria-modal', !0),
                this._element.setAttribute('role', 'dialog'),
                (this._element.scrollTop = 0)
              const d = P.findOne('.modal-body', this._dialog)
              d && (d.scrollTop = 0),
                g(this._element),
                this._element.classList.add(Fr),
                this._queueCallback(
                  () => {
                    this._config.focus && this._focustrap.activate(),
                      (this._isTransitioning = !1),
                      I.trigger(this._element, Kc, { relatedTarget: r })
                  },
                  this._dialog,
                  this._isAnimated()
                )
            }
            _addEventListeners() {
              I.on(this._element, Jc, r => {
                r.key === 'Escape' &&
                  (this._config.keyboard
                    ? this.hide()
                    : this._triggerBackdropTransition())
              }),
                I.on(window, Yc, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog()
                }),
                I.on(this._element, Qc, r => {
                  I.one(this._element, Xc, d => {
                    this._element === r.target &&
                      this._element === d.target &&
                      (this._config.backdrop !== 'static'
                        ? this._config.backdrop && this.hide()
                        : this._triggerBackdropTransition())
                  })
                })
            }
            _hideModal() {
              ;(this._element.style.display = 'none'),
                this._element.setAttribute('aria-hidden', !0),
                this._element.removeAttribute('aria-modal'),
                this._element.removeAttribute('role'),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                  document.body.classList.remove(Nr),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    I.trigger(this._element, kr)
                })
            }
            _isAnimated() {
              return this._element.classList.contains('fade')
            }
            _triggerBackdropTransition() {
              if (I.trigger(this._element, Uc).defaultPrevented) return
              const r =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                d = this._element.style.overflowY
              d === 'hidden' ||
                this._element.classList.contains(ws) ||
                (r || (this._element.style.overflowY = 'hidden'),
                this._element.classList.add(ws),
                this._queueCallback(() => {
                  this._element.classList.remove(ws),
                    this._queueCallback(() => {
                      this._element.style.overflowY = d
                    }, this._dialog)
                }, this._dialog),
                this._element.focus())
            }
            _adjustDialog() {
              const r =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                d = this._scrollBar.getWidth(),
                m = d > 0
              if (m && !r) {
                const _ = k() ? 'paddingLeft' : 'paddingRight'
                this._element.style[_] = `${d}px`
              }
              if (!m && r) {
                const _ = k() ? 'paddingRight' : 'paddingLeft'
                this._element.style[_] = `${d}px`
              }
            }
            _resetAdjustments() {
              ;(this._element.style.paddingLeft = ''),
                (this._element.style.paddingRight = '')
            }
            static jQueryInterface(r, d) {
              return this.each(function () {
                const m = A1.getOrCreateInstance(this, r)
                if (typeof r == 'string') {
                  if (m[r] === void 0)
                    throw new TypeError(`No method named "${r}"`)
                  m[r](d)
                }
              })
            }
          }
          I.on(document, Zc, '[data-bs-toggle="modal"]', function (h) {
            const r = P.getElementFromSelector(this)
            ;['A', 'AREA'].includes(this.tagName) && h.preventDefault(),
              I.one(r, Br, m => {
                m.defaultPrevented ||
                  I.one(r, kr, () => {
                    u(this) && this.focus()
                  })
              })
            const d = P.findOne('.modal.show')
            d && A1.getInstance(d).hide(),
              A1.getOrCreateInstance(r).toggle(this)
          }),
            W(A1),
            x(A1)
          const t1 = '.bs.offcanvas',
            Vr = '.data-api',
            n3 = `load${t1}${Vr}`,
            jr = 'show',
            Hr = 'showing',
            Gr = 'hiding',
            Wr = '.offcanvas.show',
            i3 = `show${t1}`,
            s3 = `shown${t1}`,
            r3 = `hide${t1}`,
            qr = `hidePrevented${t1}`,
            Ur = `hidden${t1}`,
            l3 = `resize${t1}`,
            a3 = `click${t1}${Vr}`,
            o3 = `keydown.dismiss${t1}`,
            c3 = { backdrop: !0, keyboard: !0, scroll: !1 },
            d3 = {
              backdrop: '(boolean|string)',
              keyboard: 'boolean',
              scroll: 'boolean',
            }
          class n1 extends Be {
            constructor(r, d) {
              super(r, d),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners()
            }
            static get Default() {
              return c3
            }
            static get DefaultType() {
              return d3
            }
            static get NAME() {
              return 'offcanvas'
            }
            toggle(r) {
              return this._isShown ? this.hide() : this.show(r)
            }
            show(r) {
              this._isShown ||
                I.trigger(this._element, i3, { relatedTarget: r })
                  .defaultPrevented ||
                ((this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new _s().hide(),
                this._element.setAttribute('aria-modal', !0),
                this._element.setAttribute('role', 'dialog'),
                this._element.classList.add(Hr),
                this._queueCallback(
                  () => {
                    ;(this._config.scroll && !this._config.backdrop) ||
                      this._focustrap.activate(),
                      this._element.classList.add(jr),
                      this._element.classList.remove(Hr),
                      I.trigger(this._element, s3, { relatedTarget: r })
                  },
                  this._element,
                  !0
                ))
            }
            hide() {
              this._isShown &&
                (I.trigger(this._element, r3).defaultPrevented ||
                  (this._focustrap.deactivate(),
                  this._element.blur(),
                  (this._isShown = !1),
                  this._element.classList.add(Gr),
                  this._backdrop.hide(),
                  this._queueCallback(
                    () => {
                      this._element.classList.remove(jr, Gr),
                        this._element.removeAttribute('aria-modal'),
                        this._element.removeAttribute('role'),
                        this._config.scroll || new _s().reset(),
                        I.trigger(this._element, Ur)
                    },
                    this._element,
                    !0
                  )))
            }
            dispose() {
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose()
            }
            _initializeBackDrop() {
              const r = !!this._config.backdrop
              return new Or({
                className: 'offcanvas-backdrop',
                isVisible: r,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: r
                  ? () => {
                      this._config.backdrop !== 'static'
                        ? this.hide()
                        : I.trigger(this._element, qr)
                    }
                  : null,
              })
            }
            _initializeFocusTrap() {
              return new Lr({ trapElement: this._element })
            }
            _addEventListeners() {
              I.on(this._element, o3, r => {
                r.key === 'Escape' &&
                  (this._config.keyboard
                    ? this.hide()
                    : I.trigger(this._element, qr))
              })
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = n1.getOrCreateInstance(this, r)
                if (typeof r == 'string') {
                  if (
                    d[r] === void 0 ||
                    r.startsWith('_') ||
                    r === 'constructor'
                  )
                    throw new TypeError(`No method named "${r}"`)
                  d[r](this)
                }
              })
            }
          }
          I.on(document, a3, '[data-bs-toggle="offcanvas"]', function (h) {
            const r = P.getElementFromSelector(this)
            if (
              (['A', 'AREA'].includes(this.tagName) && h.preventDefault(),
              f(this))
            )
              return
            I.one(r, Ur, () => {
              u(this) && this.focus()
            })
            const d = P.findOne(Wr)
            d && d !== r && n1.getInstance(d).hide(),
              n1.getOrCreateInstance(r).toggle(this)
          }),
            I.on(window, n3, () => {
              for (const h of P.find(Wr)) n1.getOrCreateInstance(h).show()
            }),
            I.on(window, l3, () => {
              for (const h of P.find(
                '[aria-modal][class*=show][class*=offcanvas-]'
              ))
                getComputedStyle(h).position !== 'fixed' &&
                  n1.getOrCreateInstance(h).hide()
            }),
            W(n1),
            x(n1)
          const Kr = {
              '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
              a: ['target', 'href', 'title', 'rel'],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              dd: [],
              div: [],
              dl: [],
              dt: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
            },
            f3 = new Set([
              'background',
              'cite',
              'href',
              'itemtype',
              'longdesc',
              'poster',
              'src',
              'xlink:href',
            ]),
            u3 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            h3 = (h, r) => {
              const d = h.nodeName.toLowerCase()
              return r.includes(d)
                ? !f3.has(d) || !!u3.test(h.nodeValue)
                : r.filter(m => m instanceof RegExp).some(m => m.test(d))
            },
            p3 = {
              allowList: Kr,
              content: {},
              extraClass: '',
              html: !1,
              sanitize: !0,
              sanitizeFn: null,
              template: '<div></div>',
            },
            m3 = {
              allowList: 'object',
              content: 'object',
              extraClass: '(string|function)',
              html: 'boolean',
              sanitize: 'boolean',
              sanitizeFn: '(null|function)',
              template: 'string',
            },
            v3 = {
              entry: '(string|element|function|null)',
              selector: '(string|element)',
            }
          class g3 extends Ht {
            constructor(r) {
              super(), (this._config = this._getConfig(r))
            }
            static get Default() {
              return p3
            }
            static get DefaultType() {
              return m3
            }
            static get NAME() {
              return 'TemplateFactory'
            }
            getContent() {
              return Object.values(this._config.content)
                .map(r => this._resolvePossibleFunction(r))
                .filter(Boolean)
            }
            hasContent() {
              return this.getContent().length > 0
            }
            changeContent(r) {
              return (
                this._checkContent(r),
                (this._config.content = { ...this._config.content, ...r }),
                this
              )
            }
            toHtml() {
              const r = document.createElement('div')
              r.innerHTML = this._maybeSanitize(this._config.template)
              for (const [_, w] of Object.entries(this._config.content))
                this._setContent(r, w, _)
              const d = r.children[0],
                m = this._resolvePossibleFunction(this._config.extraClass)
              return m && d.classList.add(...m.split(' ')), d
            }
            _typeCheckConfig(r) {
              super._typeCheckConfig(r), this._checkContent(r.content)
            }
            _checkContent(r) {
              for (const [d, m] of Object.entries(r))
                super._typeCheckConfig({ selector: d, entry: m }, v3)
            }
            _setContent(r, d, m) {
              const _ = P.findOne(m, r)
              _ &&
                ((d = this._resolvePossibleFunction(d))
                  ? o(d)
                    ? this._putElementInTemplate(c(d), _)
                    : this._config.html
                      ? (_.innerHTML = this._maybeSanitize(d))
                      : (_.textContent = d)
                  : _.remove())
            }
            _maybeSanitize(r) {
              return this._config.sanitize
                ? (function (d, m, _) {
                    if (!d.length) return d
                    if (_ && typeof _ == 'function') return _(d)
                    const w = new window.DOMParser().parseFromString(
                        d,
                        'text/html'
                      ),
                      E = [].concat(...w.body.querySelectorAll('*'))
                    for (const $ of E) {
                      const H = $.nodeName.toLowerCase()
                      if (!Object.keys(m).includes(H)) {
                        $.remove()
                        continue
                      }
                      const X = [].concat(...$.attributes),
                        J = [].concat(m['*'] || [], m[H] || [])
                      for (const U of X)
                        h3(U, J) || $.removeAttribute(U.nodeName)
                    }
                    return w.body.innerHTML
                  })(r, this._config.allowList, this._config.sanitizeFn)
                : r
            }
            _resolvePossibleFunction(r) {
              return M(r, [void 0, this])
            }
            _putElementInTemplate(r, d) {
              if (this._config.html) return (d.innerHTML = ''), void d.append(r)
              d.textContent = r.textContent
            }
          }
          const z3 = new Set(['sanitize', 'allowList', 'sanitizeFn']),
            ys = 'fade',
            fi = 'show',
            b3 = '.tooltip-inner',
            Yr = '.modal',
            Xr = 'hide.bs.modal',
            Mn = 'hover',
            Ss = 'focus',
            _3 = {
              AUTO: 'auto',
              TOP: 'top',
              RIGHT: k() ? 'left' : 'right',
              BOTTOM: 'bottom',
              LEFT: k() ? 'right' : 'left',
            },
            w3 = {
              allowList: Kr,
              animation: !0,
              boundary: 'clippingParents',
              container: !1,
              customClass: '',
              delay: 0,
              fallbackPlacements: ['top', 'right', 'bottom', 'left'],
              html: !1,
              offset: [0, 6],
              placement: 'top',
              popperConfig: null,
              sanitize: !0,
              sanitizeFn: null,
              selector: !1,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              title: '',
              trigger: 'hover focus',
            },
            y3 = {
              allowList: 'object',
              animation: 'boolean',
              boundary: '(string|element)',
              container: '(string|element|boolean)',
              customClass: '(string|function)',
              delay: '(number|object)',
              fallbackPlacements: 'array',
              html: 'boolean',
              offset: '(array|string|function)',
              placement: '(string|function)',
              popperConfig: '(null|object|function)',
              sanitize: 'boolean',
              sanitizeFn: '(null|function)',
              selector: '(string|boolean)',
              template: 'string',
              title: '(string|element|function)',
              trigger: 'string',
            }
          class O1 extends Be {
            constructor(r, d) {
              if (Sr === void 0)
                throw new TypeError(
                  "Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)"
                )
              super(r, d),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle()
            }
            static get Default() {
              return w3
            }
            static get DefaultType() {
              return y3
            }
            static get NAME() {
              return 'tooltip'
            }
            enable() {
              this._isEnabled = !0
            }
            disable() {
              this._isEnabled = !1
            }
            toggleEnabled() {
              this._isEnabled = !this._isEnabled
            }
            toggle() {
              this._isEnabled &&
                (this._isShown() ? this._leave() : this._enter())
            }
            dispose() {
              clearTimeout(this._timeout),
                I.off(this._element.closest(Yr), Xr, this._hideModalHandler),
                this._element.getAttribute('data-bs-original-title') &&
                  this._element.setAttribute(
                    'title',
                    this._element.getAttribute('data-bs-original-title')
                  ),
                this._disposePopper(),
                super.dispose()
            }
            show() {
              if (this._element.style.display === 'none')
                throw new Error('Please use show on visible elements')
              if (!this._isWithContent() || !this._isEnabled) return
              const r = I.trigger(
                  this._element,
                  this.constructor.eventName('show')
                ),
                d = (
                  p(this._element) ||
                  this._element.ownerDocument.documentElement
                ).contains(this._element)
              if (r.defaultPrevented || !d) return
              this._disposePopper()
              const m = this._getTipElement()
              this._element.setAttribute(
                'aria-describedby',
                m.getAttribute('id')
              )
              const { container: _ } = this._config
              if (
                (this._element.ownerDocument.documentElement.contains(
                  this.tip
                ) ||
                  (_.append(m),
                  I.trigger(
                    this._element,
                    this.constructor.eventName('inserted')
                  )),
                (this._popper = this._createPopper(m)),
                m.classList.add(fi),
                'ontouchstart' in document.documentElement)
              )
                for (const w of [].concat(...document.body.children))
                  I.on(w, 'mouseover', v)
              this._queueCallback(
                () => {
                  I.trigger(this._element, this.constructor.eventName('shown')),
                    this._isHovered === !1 && this._leave(),
                    (this._isHovered = !1)
                },
                this.tip,
                this._isAnimated()
              )
            }
            hide() {
              if (
                this._isShown() &&
                !I.trigger(this._element, this.constructor.eventName('hide'))
                  .defaultPrevented
              ) {
                if (
                  (this._getTipElement().classList.remove(fi),
                  'ontouchstart' in document.documentElement)
                )
                  for (const r of [].concat(...document.body.children))
                    I.off(r, 'mouseover', v)
                ;(this._activeTrigger.click = !1),
                  (this._activeTrigger[Ss] = !1),
                  (this._activeTrigger[Mn] = !1),
                  (this._isHovered = null),
                  this._queueCallback(
                    () => {
                      this._isWithActiveTrigger() ||
                        (this._isHovered || this._disposePopper(),
                        this._element.removeAttribute('aria-describedby'),
                        I.trigger(
                          this._element,
                          this.constructor.eventName('hidden')
                        ))
                    },
                    this.tip,
                    this._isAnimated()
                  )
              }
            }
            update() {
              this._popper && this._popper.update()
            }
            _isWithContent() {
              return !!this._getTitle()
            }
            _getTipElement() {
              return (
                this.tip ||
                  (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate()
                  )),
                this.tip
              )
            }
            _createTipElement(r) {
              const d = this._getTemplateFactory(r).toHtml()
              if (!d) return null
              d.classList.remove(ys, fi),
                d.classList.add(`bs-${this.constructor.NAME}-auto`)
              const m = (_ => {
                do _ += Math.floor(1e6 * Math.random())
                while (document.getElementById(_))
                return _
              })(this.constructor.NAME).toString()
              return (
                d.setAttribute('id', m),
                this._isAnimated() && d.classList.add(ys),
                d
              )
            }
            setContent(r) {
              ;(this._newContent = r),
                this._isShown() && (this._disposePopper(), this.show())
            }
            _getTemplateFactory(r) {
              return (
                this._templateFactory
                  ? this._templateFactory.changeContent(r)
                  : (this._templateFactory = new g3({
                      ...this._config,
                      content: r,
                      extraClass: this._resolvePossibleFunction(
                        this._config.customClass
                      ),
                    })),
                this._templateFactory
              )
            }
            _getContentForTemplate() {
              return { [b3]: this._getTitle() }
            }
            _getTitle() {
              return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute('data-bs-original-title')
              )
            }
            _initializeOnDelegatedTarget(r) {
              return this.constructor.getOrCreateInstance(
                r.delegateTarget,
                this._getDelegateConfig()
              )
            }
            _isAnimated() {
              return (
                this._config.animation ||
                (this.tip && this.tip.classList.contains(ys))
              )
            }
            _isShown() {
              return this.tip && this.tip.classList.contains(fi)
            }
            _createPopper(r) {
              const d = M(this._config.placement, [this, r, this._element]),
                m = _3[d.toUpperCase()]
              return zs(this._element, r, this._getPopperConfig(m))
            }
            _getOffset() {
              const { offset: r } = this._config
              return typeof r == 'string'
                ? r.split(',').map(d => Number.parseInt(d, 10))
                : typeof r == 'function'
                  ? d => r(d, this._element)
                  : r
            }
            _resolvePossibleFunction(r) {
              return M(r, [this._element, this._element])
            }
            _getPopperConfig(r) {
              const d = {
                placement: r,
                modifiers: [
                  {
                    name: 'flip',
                    options: {
                      fallbackPlacements: this._config.fallbackPlacements,
                    },
                  },
                  { name: 'offset', options: { offset: this._getOffset() } },
                  {
                    name: 'preventOverflow',
                    options: { boundary: this._config.boundary },
                  },
                  {
                    name: 'arrow',
                    options: { element: `.${this.constructor.NAME}-arrow` },
                  },
                  {
                    name: 'preSetPlacement',
                    enabled: !0,
                    phase: 'beforeMain',
                    fn: m => {
                      this._getTipElement().setAttribute(
                        'data-popper-placement',
                        m.state.placement
                      )
                    },
                  },
                ],
              }
              return { ...d, ...M(this._config.popperConfig, [void 0, d]) }
            }
            _setListeners() {
              const r = this._config.trigger.split(' ')
              for (const d of r)
                if (d === 'click')
                  I.on(
                    this._element,
                    this.constructor.eventName('click'),
                    this._config.selector,
                    m => {
                      this._initializeOnDelegatedTarget(m).toggle()
                    }
                  )
                else if (d !== 'manual') {
                  const m =
                      d === Mn
                        ? this.constructor.eventName('mouseenter')
                        : this.constructor.eventName('focusin'),
                    _ =
                      d === Mn
                        ? this.constructor.eventName('mouseleave')
                        : this.constructor.eventName('focusout')
                  I.on(this._element, m, this._config.selector, w => {
                    const E = this._initializeOnDelegatedTarget(w)
                    ;(E._activeTrigger[w.type === 'focusin' ? Ss : Mn] = !0),
                      E._enter()
                  }),
                    I.on(this._element, _, this._config.selector, w => {
                      const E = this._initializeOnDelegatedTarget(w)
                      ;(E._activeTrigger[w.type === 'focusout' ? Ss : Mn] =
                        E._element.contains(w.relatedTarget)),
                        E._leave()
                    })
                }
              ;(this._hideModalHandler = () => {
                this._element && this.hide()
              }),
                I.on(this._element.closest(Yr), Xr, this._hideModalHandler)
            }
            _fixTitle() {
              const r = this._element.getAttribute('title')
              r &&
                (this._element.getAttribute('aria-label') ||
                  this._element.textContent.trim() ||
                  this._element.setAttribute('aria-label', r),
                this._element.setAttribute('data-bs-original-title', r),
                this._element.removeAttribute('title'))
            }
            _enter() {
              this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                  this._setTimeout(() => {
                    this._isHovered && this.show()
                  }, this._config.delay.show))
            }
            _leave() {
              this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                  this._isHovered || this.hide()
                }, this._config.delay.hide))
            }
            _setTimeout(r, d) {
              clearTimeout(this._timeout), (this._timeout = setTimeout(r, d))
            }
            _isWithActiveTrigger() {
              return Object.values(this._activeTrigger).includes(!0)
            }
            _getConfig(r) {
              const d = Ze.getDataAttributes(this._element)
              for (const m of Object.keys(d)) z3.has(m) && delete d[m]
              return (
                (r = { ...d, ...(typeof r == 'object' && r ? r : {}) }),
                (r = this._mergeConfigObj(r)),
                (r = this._configAfterMerge(r)),
                this._typeCheckConfig(r),
                r
              )
            }
            _configAfterMerge(r) {
              return (
                (r.container =
                  r.container === !1 ? document.body : c(r.container)),
                typeof r.delay == 'number' &&
                  (r.delay = { show: r.delay, hide: r.delay }),
                typeof r.title == 'number' && (r.title = r.title.toString()),
                typeof r.content == 'number' &&
                  (r.content = r.content.toString()),
                r
              )
            }
            _getDelegateConfig() {
              const r = {}
              for (const [d, m] of Object.entries(this._config))
                this.constructor.Default[d] !== m && (r[d] = m)
              return (r.selector = !1), (r.trigger = 'manual'), r
            }
            _disposePopper() {
              this._popper && (this._popper.destroy(), (this._popper = null)),
                this.tip && (this.tip.remove(), (this.tip = null))
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = O1.getOrCreateInstance(this, r)
                if (typeof r == 'string') {
                  if (d[r] === void 0)
                    throw new TypeError(`No method named "${r}"`)
                  d[r]()
                }
              })
            }
          }
          x(O1)
          const S3 = '.popover-header',
            E3 = '.popover-body',
            x3 = {
              ...O1.Default,
              content: '',
              offset: [0, 8],
              placement: 'right',
              template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              trigger: 'click',
            },
            T3 = {
              ...O1.DefaultType,
              content: '(null|string|element|function)',
            }
          class ui extends O1 {
            static get Default() {
              return x3
            }
            static get DefaultType() {
              return T3
            }
            static get NAME() {
              return 'popover'
            }
            _isWithContent() {
              return this._getTitle() || this._getContent()
            }
            _getContentForTemplate() {
              return { [S3]: this._getTitle(), [E3]: this._getContent() }
            }
            _getContent() {
              return this._resolvePossibleFunction(this._config.content)
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = ui.getOrCreateInstance(this, r)
                if (typeof r == 'string') {
                  if (d[r] === void 0)
                    throw new TypeError(`No method named "${r}"`)
                  d[r]()
                }
              })
            }
          }
          x(ui)
          const Es = '.bs.scrollspy',
            M3 = `activate${Es}`,
            Qr = `click${Es}`,
            C3 = `load${Es}.data-api`,
            rn = 'active',
            xs = '[href]',
            Jr = '.nav-link',
            P3 = `${Jr}, .nav-item > ${Jr}, .list-group-item`,
            A3 = {
              offset: null,
              rootMargin: '0px 0px -25%',
              smoothScroll: !1,
              target: null,
              threshold: [0.1, 0.5, 1],
            },
            O3 = {
              offset: '(number|null)',
              rootMargin: 'string',
              smoothScroll: 'boolean',
              target: 'element',
              threshold: 'array',
            }
          class Cn extends Be {
            constructor(r, d) {
              super(r, d),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                  getComputedStyle(this._element).overflowY === 'visible'
                    ? null
                    : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                  visibleEntryTop: 0,
                  parentScrollTop: 0,
                }),
                this.refresh()
            }
            static get Default() {
              return A3
            }
            static get DefaultType() {
              return O3
            }
            static get NAME() {
              return 'scrollspy'
            }
            refresh() {
              this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                  ? this._observer.disconnect()
                  : (this._observer = this._getNewObserver())
              for (const r of this._observableSections.values())
                this._observer.observe(r)
            }
            dispose() {
              this._observer.disconnect(), super.dispose()
            }
            _configAfterMerge(r) {
              return (
                (r.target = c(r.target) || document.body),
                (r.rootMargin = r.offset
                  ? `${r.offset}px 0px -30%`
                  : r.rootMargin),
                typeof r.threshold == 'string' &&
                  (r.threshold = r.threshold
                    .split(',')
                    .map(d => Number.parseFloat(d))),
                r
              )
            }
            _maybeEnableSmoothScroll() {
              this._config.smoothScroll &&
                (I.off(this._config.target, Qr),
                I.on(this._config.target, Qr, xs, r => {
                  const d = this._observableSections.get(r.target.hash)
                  if (d) {
                    r.preventDefault()
                    const m = this._rootElement || window,
                      _ = d.offsetTop - this._element.offsetTop
                    if (m.scrollTo)
                      return void m.scrollTo({ top: _, behavior: 'smooth' })
                    m.scrollTop = _
                  }
                }))
            }
            _getNewObserver() {
              const r = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
              }
              return new IntersectionObserver(d => this._observerCallback(d), r)
            }
            _observerCallback(r) {
              const d = E => this._targetLinks.get(`#${E.target.id}`),
                m = E => {
                  ;(this._previousScrollData.visibleEntryTop =
                    E.target.offsetTop),
                    this._process(d(E))
                },
                _ = (this._rootElement || document.documentElement).scrollTop,
                w = _ >= this._previousScrollData.parentScrollTop
              this._previousScrollData.parentScrollTop = _
              for (const E of r) {
                if (!E.isIntersecting) {
                  ;(this._activeTarget = null), this._clearActiveClass(d(E))
                  continue
                }
                const $ =
                  E.target.offsetTop >= this._previousScrollData.visibleEntryTop
                if (w && $) {
                  if ((m(E), !_)) return
                } else w || $ || m(E)
              }
            }
            _initializeTargetsAndObservables() {
              ;(this._targetLinks = new Map()),
                (this._observableSections = new Map())
              const r = P.find(xs, this._config.target)
              for (const d of r) {
                if (!d.hash || f(d)) continue
                const m = P.findOne(decodeURI(d.hash), this._element)
                u(m) &&
                  (this._targetLinks.set(decodeURI(d.hash), d),
                  this._observableSections.set(d.hash, m))
              }
            }
            _process(r) {
              this._activeTarget !== r &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = r),
                r.classList.add(rn),
                this._activateParents(r),
                I.trigger(this._element, M3, { relatedTarget: r }))
            }
            _activateParents(r) {
              if (r.classList.contains('dropdown-item'))
                P.findOne(
                  '.dropdown-toggle',
                  r.closest('.dropdown')
                ).classList.add(rn)
              else
                for (const d of P.parents(r, '.nav, .list-group'))
                  for (const m of P.prev(d, P3)) m.classList.add(rn)
            }
            _clearActiveClass(r) {
              r.classList.remove(rn)
              const d = P.find(`${xs}.${rn}`, r)
              for (const m of d) m.classList.remove(rn)
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = Cn.getOrCreateInstance(this, r)
                if (typeof r == 'string') {
                  if (
                    d[r] === void 0 ||
                    r.startsWith('_') ||
                    r === 'constructor'
                  )
                    throw new TypeError(`No method named "${r}"`)
                  d[r]()
                }
              })
            }
          }
          I.on(window, C3, () => {
            for (const h of P.find('[data-bs-spy="scroll"]'))
              Cn.getOrCreateInstance(h)
          }),
            x(Cn)
          const I1 = '.bs.tab',
            I3 = `hide${I1}`,
            L3 = `hidden${I1}`,
            D3 = `show${I1}`,
            R3 = `shown${I1}`,
            $3 = `click${I1}`,
            k3 = `keydown${I1}`,
            B3 = `load${I1}`,
            N3 = 'ArrowLeft',
            Zr = 'ArrowRight',
            F3 = 'ArrowUp',
            el = 'ArrowDown',
            Ts = 'Home',
            tl = 'End',
            L1 = 'active',
            nl = 'fade',
            Ms = 'show',
            il = '.dropdown-toggle',
            Cs = `:not(${il})`,
            sl =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            Ps = `.nav-link${Cs}, .list-group-item${Cs}, [role="tab"]${Cs}, ${sl}`,
            V3 = `.${L1}[data-bs-toggle="tab"], .${L1}[data-bs-toggle="pill"], .${L1}[data-bs-toggle="list"]`
          class D1 extends Be {
            constructor(r) {
              super(r),
                (this._parent = this._element.closest(
                  '.list-group, .nav, [role="tablist"]'
                )),
                this._parent &&
                  (this._setInitialAttributes(
                    this._parent,
                    this._getChildren()
                  ),
                  I.on(this._element, k3, d => this._keydown(d)))
            }
            static get NAME() {
              return 'tab'
            }
            show() {
              const r = this._element
              if (this._elemIsActive(r)) return
              const d = this._getActiveElem(),
                m = d ? I.trigger(d, I3, { relatedTarget: r }) : null
              I.trigger(r, D3, { relatedTarget: d }).defaultPrevented ||
                (m && m.defaultPrevented) ||
                (this._deactivate(d, r), this._activate(r, d))
            }
            _activate(r, d) {
              r &&
                (r.classList.add(L1),
                this._activate(P.getElementFromSelector(r)),
                this._queueCallback(
                  () => {
                    r.getAttribute('role') === 'tab'
                      ? (r.removeAttribute('tabindex'),
                        r.setAttribute('aria-selected', !0),
                        this._toggleDropDown(r, !0),
                        I.trigger(r, R3, { relatedTarget: d }))
                      : r.classList.add(Ms)
                  },
                  r,
                  r.classList.contains(nl)
                ))
            }
            _deactivate(r, d) {
              r &&
                (r.classList.remove(L1),
                r.blur(),
                this._deactivate(P.getElementFromSelector(r)),
                this._queueCallback(
                  () => {
                    r.getAttribute('role') === 'tab'
                      ? (r.setAttribute('aria-selected', !1),
                        r.setAttribute('tabindex', '-1'),
                        this._toggleDropDown(r, !1),
                        I.trigger(r, L3, { relatedTarget: d }))
                      : r.classList.remove(Ms)
                  },
                  r,
                  r.classList.contains(nl)
                ))
            }
            _keydown(r) {
              if (![N3, Zr, F3, el, Ts, tl].includes(r.key)) return
              r.stopPropagation(), r.preventDefault()
              const d = this._getChildren().filter(_ => !f(_))
              let m
              if ([Ts, tl].includes(r.key))
                m = d[r.key === Ts ? 0 : d.length - 1]
              else {
                const _ = [Zr, el].includes(r.key)
                m = R(d, r.target, _, !0)
              }
              m &&
                (m.focus({ preventScroll: !0 }),
                D1.getOrCreateInstance(m).show())
            }
            _getChildren() {
              return P.find(Ps, this._parent)
            }
            _getActiveElem() {
              return (
                this._getChildren().find(r => this._elemIsActive(r)) || null
              )
            }
            _setInitialAttributes(r, d) {
              this._setAttributeIfNotExists(r, 'role', 'tablist')
              for (const m of d) this._setInitialAttributesOnChild(m)
            }
            _setInitialAttributesOnChild(r) {
              r = this._getInnerElement(r)
              const d = this._elemIsActive(r),
                m = this._getOuterElement(r)
              r.setAttribute('aria-selected', d),
                m !== r &&
                  this._setAttributeIfNotExists(m, 'role', 'presentation'),
                d || r.setAttribute('tabindex', '-1'),
                this._setAttributeIfNotExists(r, 'role', 'tab'),
                this._setInitialAttributesOnTargetPanel(r)
            }
            _setInitialAttributesOnTargetPanel(r) {
              const d = P.getElementFromSelector(r)
              d &&
                (this._setAttributeIfNotExists(d, 'role', 'tabpanel'),
                r.id &&
                  this._setAttributeIfNotExists(
                    d,
                    'aria-labelledby',
                    `${r.id}`
                  ))
            }
            _toggleDropDown(r, d) {
              const m = this._getOuterElement(r)
              if (!m.classList.contains('dropdown')) return
              const _ = (w, E) => {
                const $ = P.findOne(w, m)
                $ && $.classList.toggle(E, d)
              }
              _(il, L1),
                _('.dropdown-menu', Ms),
                m.setAttribute('aria-expanded', d)
            }
            _setAttributeIfNotExists(r, d, m) {
              r.hasAttribute(d) || r.setAttribute(d, m)
            }
            _elemIsActive(r) {
              return r.classList.contains(L1)
            }
            _getInnerElement(r) {
              return r.matches(Ps) ? r : P.findOne(Ps, r)
            }
            _getOuterElement(r) {
              return r.closest('.nav-item, .list-group-item') || r
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = D1.getOrCreateInstance(this)
                if (typeof r == 'string') {
                  if (
                    d[r] === void 0 ||
                    r.startsWith('_') ||
                    r === 'constructor'
                  )
                    throw new TypeError(`No method named "${r}"`)
                  d[r]()
                }
              })
            }
          }
          I.on(document, $3, sl, function (h) {
            ;['A', 'AREA'].includes(this.tagName) && h.preventDefault(),
              f(this) || D1.getOrCreateInstance(this).show()
          }),
            I.on(window, B3, () => {
              for (const h of P.find(V3)) D1.getOrCreateInstance(h)
            }),
            x(D1)
          const u1 = '.bs.toast',
            j3 = `mouseover${u1}`,
            H3 = `mouseout${u1}`,
            G3 = `focusin${u1}`,
            W3 = `focusout${u1}`,
            q3 = `hide${u1}`,
            U3 = `hidden${u1}`,
            K3 = `show${u1}`,
            Y3 = `shown${u1}`,
            rl = 'hide',
            hi = 'show',
            pi = 'showing',
            X3 = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
            Q3 = { animation: !0, autohide: !0, delay: 5e3 }
          class Pn extends Be {
            constructor(r, d) {
              super(r, d),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners()
            }
            static get Default() {
              return Q3
            }
            static get DefaultType() {
              return X3
            }
            static get NAME() {
              return 'toast'
            }
            show() {
              I.trigger(this._element, K3).defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add('fade'),
                this._element.classList.remove(rl),
                g(this._element),
                this._element.classList.add(hi, pi),
                this._queueCallback(
                  () => {
                    this._element.classList.remove(pi),
                      I.trigger(this._element, Y3),
                      this._maybeScheduleHide()
                  },
                  this._element,
                  this._config.animation
                ))
            }
            hide() {
              this.isShown() &&
                (I.trigger(this._element, q3).defaultPrevented ||
                  (this._element.classList.add(pi),
                  this._queueCallback(
                    () => {
                      this._element.classList.add(rl),
                        this._element.classList.remove(pi, hi),
                        I.trigger(this._element, U3)
                    },
                    this._element,
                    this._config.animation
                  )))
            }
            dispose() {
              this._clearTimeout(),
                this.isShown() && this._element.classList.remove(hi),
                super.dispose()
            }
            isShown() {
              return this._element.classList.contains(hi)
            }
            _maybeScheduleHide() {
              this._config.autohide &&
                (this._hasMouseInteraction ||
                  this._hasKeyboardInteraction ||
                  (this._timeout = setTimeout(() => {
                    this.hide()
                  }, this._config.delay)))
            }
            _onInteraction(r, d) {
              switch (r.type) {
                case 'mouseover':
                case 'mouseout':
                  this._hasMouseInteraction = d
                  break
                case 'focusin':
                case 'focusout':
                  this._hasKeyboardInteraction = d
              }
              if (d) return void this._clearTimeout()
              const m = r.relatedTarget
              this._element === m ||
                this._element.contains(m) ||
                this._maybeScheduleHide()
            }
            _setListeners() {
              I.on(this._element, j3, r => this._onInteraction(r, !0)),
                I.on(this._element, H3, r => this._onInteraction(r, !1)),
                I.on(this._element, G3, r => this._onInteraction(r, !0)),
                I.on(this._element, W3, r => this._onInteraction(r, !1))
            }
            _clearTimeout() {
              clearTimeout(this._timeout), (this._timeout = null)
            }
            static jQueryInterface(r) {
              return this.each(function () {
                const d = Pn.getOrCreateInstance(this, r)
                if (typeof r == 'string') {
                  if (d[r] === void 0)
                    throw new TypeError(`No method named "${r}"`)
                  d[r](this)
                }
              })
            }
          }
          return (
            W(Pn),
            x(Pn),
            {
              Alert: b,
              Button: A,
              Carousel: U1,
              Collapse: Y1,
              Dropdown: $t,
              Modal: A1,
              Offcanvas: n1,
              Popover: ui,
              ScrollSpy: Cn,
              Tab: D1,
              Toast: Pn,
              Tooltip: O1,
            }
          )
        })
      })(Pi)),
    Pi.exports
  )
}
Wu()
const ec = yd(Hu)
ec.use(Vo)
ec.mount('#app')
export {
  It as F,
  S1 as _,
  xt as a,
  Ti as b,
  Jt as c,
  ke as d,
  N0 as e,
  yn as f,
  a0 as g,
  $i as h,
  F0 as i,
  qu as j,
  Ge as k,
  Qn as l,
  Yu as m,
  Ul as n,
  mt as o,
  Bt as r,
  Ai as t,
  Ku as u,
  Uu as v,
  N1 as w,
}

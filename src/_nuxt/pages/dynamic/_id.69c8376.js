(window.webpackJsonp = window.webpackJsonp || []).push([[2], { 184 (t, n, e) { let content = e(191); typeof content === 'string' && (content = [[t.i, content, '']]), content.locals && (t.exports = content.locals); (0, e(48).default)('5183a22e', content, !0, { sourceMap: !1 }) }, 190 (t, n, e) { 'use strict'; const o = e(184); e.n(o).a }, 191 (t, n, e) { (n = e(47)(!1)).push([t.i, 'p{color:#00f}', '']), t.exports = n }, 198 (t, n, e) { 'use strict'; e.r(n); e(18); const o = e(44); const c = e.n(o); const l = { data () { return { id: this.$route.params.id, name: '', title: '' } }, created () { this.fetchData() }, methods: { fetchData () { const t = this; c.a.get('/user_data.json').then(function (n) { t.name = n.data[t.id]['이름(영문이름)'], t.title = n.data[t.id]['작품제목'], console.log(n.data[t.id]) }).catch(function (t) { console.log(t) }) } } }; const r = (e(190), e(22)); const component = Object(r.a)(l, function () { const t = this; const n = t.$createElement; const e = t._self._c || n; return e('div', [e('p', [t._v('id ' + t._s(t.id))]), t._v(' '), e('p', [t._v('hello ' + t._s(t.name))]), t._v(' '), e('p', [t._v('당신의 작품은 ' + t._s(t.title))])]) }, [], !1, null, null, null); n.default = component.exports } }])

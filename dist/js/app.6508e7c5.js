(function (t) {
  function s(s) {
    for (
      var a, n, c = s[0], o = s[1], l = s[2], d = 0, A = [];
      d < c.length;
      d++
    )
      (n = c[d]),
        Object.prototype.hasOwnProperty.call(e, n) && e[n] && A.push(e[n][0]),
        (e[n] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    p && p(s);
    while (A.length) A.shift()();
    return r.push.apply(r, l || []), i();
  }
  function i() {
    for (var t, s = 0; s < r.length; s++) {
      for (var i = r[s], a = !0, c = 1; c < i.length; c++) {
        var o = i[c];
        0 !== e[o] && (a = !1);
      }
      a && (r.splice(s--, 1), (t = n((n.s = i[0]))));
    }
    return t;
  }
  var a = {},
    e = { app: 0 },
    r = [];
  function n(s) {
    if (a[s]) return a[s].exports;
    var i = (a[s] = { i: s, l: !1, exports: {} });
    return t[s].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = a),
    (n.d = function (t, s, i) {
      n.o(t, s) || Object.defineProperty(t, s, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, s) {
      if ((1 & s && (t = n(t)), 8 & s)) return t;
      if (4 & s && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & s && "string" != typeof t)
      )
        for (var a in t)
          n.d(
            i,
            a,
            function (s) {
              return t[s];
            }.bind(null, a)
          );
      return i;
    }),
    (n.n = function (t) {
      var s =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return n.d(s, "a", s), s;
    }),
    (n.o = function (t, s) {
      return Object.prototype.hasOwnProperty.call(t, s);
    }),
    (n.p = "/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = c.push.bind(c);
  (c.push = s), (c = c.slice());
  for (var l = 0; l < c.length; l++) s(c[l]);
  var p = o;
  r.push([0, "chunk-vendors"]), i();
})({
  0: function (t, s, i) {
    t.exports = i("56d7");
  },
  "0a20": function (t, s) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE00lEQVR4nO2bbUxTVxjHf+e2lBaYsKLgVBgYUZAXR5jLNs1Qlpk1c27JpokuxmTTiRuJ02TZvi3Zh/Ft+oWAYVmWvZhMkiVbdCYyiVmyV7dFo6CDMRhEsIj1haKltvfsw3ABlNuDlN5b7O9Te8+Tp//zv+et554rmEBR9eESib5D6DwjBblA6sSYOGNYSHqkRrNAazzXsP7s2EJx+0PxxkOOkNu5T0A1oMVcZmzQJTTYfYE9rU2bgjBqQPHGQ46w23kUqDJVXuxosfkCntamTUENIOR27uP+qTxAVdid/CGAKKo+XCKlfprZ2+wnQxdCW6FJ9B3cf5UH0JByu310tFci1WlngduFJgT9V25y/catmZU400i5zj461RmSn53GuxuLWbV8HjbtP7d0Kfm9w8cHTWc533t9xrXOBFKQIwp3fiONgl58Iof3XykjyX73XhLWJbWHWvniRNeMiJxpDPt+XnYq720unbTyADZN8M7LyylcNCfq4mKBoQG7NxTidNgiJkmya+x6bmnURMUSQwMeWzpXOVFZXsa0xZiBoQEuhbt/m6wMJ3Zb/M2mhoo7+tRH927vMKGwPm1BscbQgF/bLysnmkqslTA0oOFoB32+mxGTDFwLsP/rc1ETFUsMDRgOhKipP8nfF/2TxnR5/dTUn+TacHyuCiMuhAAcdo2tVfmsLZvPwkwXuoS+yzc4ccbLZy1dBEPx1/dvo2TAbCb+5q0oc98bYDdbgApOh43i3HSyMpzMcSUxPBLi8lCQbq+ffoVZyghDAx4tyGTLmjylRJ+3dPFHp++O69WeAopy05Vy7D7w27jvpXkZ7PQUsKY0+/+/4RPp8vppOe3lk+86Gbw+ovQ7YzE0YIHbhadigVKi46cuQued1ysKMlm9fN6URLkfcFC7rZynSrIixuZnp/HaujS2VObxcXMn9d+2E9bVx3XLjQGL5qZw8O3VSpUfiyvZxpvrl1K3ayUpyeo921IGpKcm8eneJ3k4696fxVSWZlP3xko0obbPZykDareV85DbNe08jy+by+vPLlGKtZQBa8uyo5ar5vllLMxMiRhnKQOiiU0TbK3Kjxg3aw0AeGlVbsQtPUsuhMK65Mvv/6H5VD9/9Q0BsGzRHDZX5vH0ivnKedKcdh5Z/CA/nx+cNMZyBviGgry6/yf+vDB+N2qw7RI/tF1ip6eAt14oVM5XscRtaIClukBYl1TX/XJH5cdy4GgHrT3XlHOWL3YbllvKgK9+7OVM99WIcQen8BBmXnqyYbnFDOhRijty8gK6VFvupqc6DMstZUD7hSGluJFbOr6hoFJsekqSYbmlDLgZDCnHDlwNKMVFmgYtZYBiqwbgil+tBUTCUgZMhWhtZMatAdEiYYDZAswmYYDZAswmYYDZAswmYYDZAswmYYDZAswmYYDZAswmYYDZAszGcFu82+tXPgXe7b37SbKW0xfpGRieurIIRCtv4pAUEP3bEz/4NSFR24uehQhJryY1ms0WYhpCHNMEWiMQv0c97x1d6LJRO9ew/qyEBrPVxB5Z39a4oVUDsPsCe4AWkxXFDAnHbb6RvTC6EGpt2hS0+QIekHXM7u6gg6xLk/2ecS9Pj6Wo+nAJUm5HynVSkAOkxVxmdPELSS9CHEOIjya+Pv8vMS1w+Xt3w8YAAAAASUVORK5CYII=";
  },
  "15a3": function (t, s, i) {
    "use strict";
    var a = i("7964"),
      e = i.n(a);
    e.a;
  },
  "266f": function (t, s, i) {
    t.exports = i.p + "img/Sapna.313c9268.jpg";
  },
  "33ff": function (t, s, i) {},
  "36cc": function (t, s, i) {
    t.exports = i.p + "img/bindusar.6fceb6f2.jpg";
  },
  "46f1": function (t, s, i) {},
  5206: function (t, s, i) {},
  "56d7": function (t, s, i) {
    "use strict";
    i.r(s);
    i("e260"), i("e6cf"), i("cca6"), i("a79d");
    var a = i("2b0e"),
      e = function () {
        var t = this,
          s = t.$createElement,
          i = t._self._c || s;
        return i("div", [
          i("div", { staticClass: "container" }, [i("appheader")], 1),
          i("hr", { staticClass: "navdivider" }),
          i("div", { staticClass: "container" }, [i("appaim"), i("hr")], 1),
          i(
            "div",
            { staticClass: "container" },
            [
              i("h3", [t._v("Active projects")]),
              i("br"),
              i("appactive", { attrs: { info: t.activeprojects } }),
              i("br"),
              i("br"),
            ],
            1
          ),
          i("hr", { staticClass: "container" }),
          i(
            "div",
            { staticClass: "container" },
            [
              i("h3", [t._v("Completed projects")]),
              i("br"),
              i("cp", { attrs: { details: t.completedprojects } }),
              i("br"),
              i("br"),
              i("hr"),
              i("h3", [t._v("Contributors")]),
              i("contri", { attrs: { slides: t.slides } }),
            ],
            1
          ),
          i("hr"),
          i("div", { staticClass: "container" }, [i("appfooter")], 1),
        ]);
      },
      r = [],
      n = function () {
        var t = this,
          s = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      c = [
        function () {
          var t = this,
            s = t.$createElement,
            a = t._self._c || s;
          return a("div", { staticClass: "flexdisplay" }, [
            a("div", [
              a("img", {
                staticClass: "img-thumbnail logo",
                attrs: { src: i("cf05"), width: "200", height: "200" },
              }),
            ]),
            a("div", [
              a("div", { attrs: { id: "navbarText" } }, [
                a("ul", { attrs: { id: "icons" } }, [
                  a("a", { attrs: { href: "#" } }, [
                    a("li", [
                      a("img", {
                        attrs: {
                          src: i("bb36"),
                          height: "40px",
                          width: "40px",
                        },
                      }),
                    ]),
                  ]),
                  a("a", { attrs: { href: "#" } }, [
                    a("li", [
                      a("img", {
                        attrs: {
                          src: i("e35f"),
                          height: "40px",
                          width: "40px",
                        },
                      }),
                    ]),
                  ]),
                  a("a", { attrs: { href: "#" } }, [
                    a("li", [
                      a("img", {
                        attrs: {
                          src: i("0a20"),
                          height: "40px",
                          width: "40px",
                        },
                      }),
                    ]),
                  ]),
                  a("a", { attrs: { href: "#" } }, [
                    a("li", [
                      a("img", {
                        attrs: {
                          src: i("5c1e"),
                          height: "40px",
                          width: "40px",
                        },
                      }),
                    ]),
                  ]),
                  a("a", { attrs: { href: "#" } }, [
                    a("li", [
                      a("img", {
                        attrs: {
                          src: i("de06"),
                          height: "40px",
                          width: "40px",
                        },
                      }),
                    ]),
                  ]),
                ]),
              ]),
              a("hr", { attrs: { id: "divider" } }),
              a("div", [
                a("nav", { staticClass: "navbar navbar-light bg-light" }, [
                  a("form", { staticClass: "form-inline" }, [
                    a("a", { attrs: { href: "#" } }, [
                      a(
                        "button",
                        {
                          staticClass: "btn bt-nav",
                          attrs: { type: "button" },
                        },
                        [t._v("Who we are")]
                      ),
                    ]),
                    a("a", { attrs: { href: "#" } }, [
                      a(
                        "button",
                        {
                          staticClass: "btn bt-nav",
                          attrs: { type: "button" },
                        },
                        [t._v("What we do")]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      o = { name: "header" },
      l = o,
      p = (i("b8c6"), i("2877")),
      d = Object(p["a"])(l, n, c, !1, null, "b9dd15a0", null),
      A = d.exports,
      f = function () {
        var t = this,
          s = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      b = [
        function () {
          var t = this,
            s = t.$createElement,
            a = t._self._c || s;
          return a("div", [
            a("footer", { staticClass: "page-footer" }, [
              a("div", { staticClass: "footer-content  flexdisplay" }, [
                a("div", { staticClass: "fc-left" }, [
                  a("img", {
                    attrs: { src: i("cf05"), width: "300", height: "200" },
                  }),
                ]),
                a("div", { staticClass: "fc-right" }, [
                  a("div", { staticClass: "fc-nav" }, [
                    a("ul", [
                      a("li", [
                        a("a", { attrs: { href: "#" } }, [
                          t._v("PRIVACY POLICY"),
                        ]),
                      ]),
                      a("li", [
                        a("a", { attrs: { href: "#" } }, [
                          t._v("TERMS OF USE"),
                        ]),
                      ]),
                      a("li", [
                        a("a", { attrs: { href: "#" } }, [
                          t._v("SUBSCRIBE TO THE NEWSLETTER"),
                        ]),
                      ]),
                      a("li", [
                        a("a", { attrs: { href: "#" } }, [t._v("CONTACT US")]),
                      ]),
                    ]),
                  ]),
                  a("div", { staticClass: "fc-mission" }, [
                    a("p", [
                      t._v(
                        "We connect, inspire and guide youth in computing and organizations that view technology innovation as a strategic imperative."
                      ),
                    ]),
                    a("p", [t._v("Youth transform technology. ")]),
                  ]),
                ]),
              ]),
              a("div", { staticClass: "footer-copyright text-center py-3" }, [
                t._v("© Catalyst 2020 "),
                a("img", {
                  staticClass: "footer-img",
                  attrs: {
                    src:
                      "https://anitab.org/wp-content/assets/images/footer_bars.png",
                  },
                }),
              ]),
            ]),
          ]);
        },
      ],
      v = { name: "footer" },
      g = v,
      u = (i("6263"), Object(p["a"])(g, f, b, !1, null, "4207552c", null)),
      m = u.exports,
      h = function () {
        var t = this,
          s = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      C = [
        function () {
          var t = this,
            s = t.$createElement,
            a = t._self._c || s;
          return a("div", [
            a("div", { staticClass: "row" }, [
              a("div", { staticClass: "design" }, [
                a("img", {
                  staticClass: "footer-img",
                  attrs: { src: i("db13") },
                }),
              ]),
              a("div", { staticClass: "slogan col-4" }, [
                a("p", [
                  t._v(" let's change the direction of tech..."),
                  a("span", { attrs: { id: "together" } }, [t._v("together!")]),
                  a("br"),
                  a("a", { attrs: { href: "#" } }, [
                    a("button", { attrs: { id: "donate" } }, [t._v("DONATE")]),
                  ]),
                ]),
              ]),
            ]),
            a("br"),
            a("div", { staticClass: "row" }, [
              a("div", { staticClass: "col-6 aim" }, [
                a("h2", [t._v("Aim of our organization")]),
                a("p", [
                  t._v(
                    " The aim of the Catalyst network is to provide a platform to all beginner developers to come and work with us on live open source projects; it helps them become experienced contributors as well as skilled developers. We also provide a space to all developers who have new, exciting ideas in mind that may open possibilities of discussion in society. As an organisation full of skilled developers we can work with you to help make your ideas reality. "
                  ),
                ]),
              ]),
              a("div", { staticClass: "col-6" }, [
                a("img", {
                  attrs: { src: i("bca0"), height: "100%", width: "100%" },
                }),
              ]),
            ]),
          ]);
        },
      ],
      w = {},
      y = w,
      x = (i("15a3"), Object(p["a"])(y, h, C, !1, null, "8f7383f6", null)),
      E = x.exports,
      _ = function () {
        var t = this,
          s = t.$createElement,
          i = t._self._c || s;
        return i(
          "div",
          { staticClass: "row" },
          t._l(t.details, function (s) {
            return i("app-quote", { key: s.id }, [
              i("h1", { attrs: { slot: "title" }, slot: "title" }, [
                t._v(t._s(s.title)),
              ]),
              i("p", { attrs: { slot: "body" }, slot: "body" }, [
                t._v(t._s(s.body)),
              ]),
              i(
                "button",
                {
                  staticClass: "btn btn-info",
                  attrs: { slot: "link" },
                  slot: "link",
                },
                [
                  i("a", { attrs: { href: s.link, target: "_blank" } }, [
                    t._v("Know More"),
                  ]),
                ]
              ),
            ]);
          }),
          1
        );
      },
      k = [],
      B = function () {
        var t = this,
          s = t.$createElement,
          i = t._self._c || s;
        return i("div", { staticClass: "col-sm-6 col-md-4 col-lg-3" }, [
          i("div", { attrs: { id: "root" } }, [
            i("div", { staticClass: "oval" }, [
              i("div", { staticClass: "content" }, [
                i("div", { staticClass: "title" }, [t._t("title")], 2),
                i("div", { staticClass: "body" }, [t._t("body")], 2),
                i("div", { staticClass: "link" }, [t._t("link")], 2),
              ]),
            ]),
          ]),
        ]);
      },
      S = [],
      Y = {},
      j = Y,
      T = (i("7b4b"), Object(p["a"])(j, B, S, !1, null, null, null)),
      M = T.exports,
      I = { props: ["details"], components: { appQuote: M } },
      P = I,
      O = (i("d15f"), Object(p["a"])(P, _, k, !1, null, "0c69a0e8", null)),
      D = O.exports,
      F = function () {
        var t = this,
          s = t.$createElement,
          i = t._self._c || s;
        return i(
          "div",
          { staticClass: "row" },
          t._l(t.info, function (s) {
            return i("app-active", { key: s.id }, [
              i("h5", { attrs: { slot: "title" }, slot: "title" }, [
                t._v(t._s(s.title)),
              ]),
              i("p", { attrs: { slot: "body" }, slot: "body" }, [
                t._v(t._s(s.body)),
              ]),
              i(
                "button",
                {
                  staticClass: "btn btn-info",
                  attrs: { slot: "link" },
                  slot: "link",
                },
                [
                  i("a", { attrs: { href: s.link, target: "_blank" } }, [
                    t._v("Know More"),
                  ]),
                ]
              ),
              i(
                "ul",
                {
                  staticStyle: { "font-size": "17px" },
                  attrs: { slot: "list" },
                  slot: "list",
                },
                t._l(s.contri, function (s) {
                  return i("li", { key: s.id }, [t._v(t._s(s))]);
                }),
                0
              ),
            ]);
          }),
          1
        );
      },
      V = [],
      U = function () {
        var t = this,
          s = t.$createElement,
          i = t._self._c || s;
        return i("div", { staticClass: "col-sm-6 col-md-4 col-lg-3" }, [
          i("div", { attrs: { id: "root" } }, [
            i("div", { staticClass: "box" }, [
              i(
                "div",
                { staticClass: "content" },
                [
                  t._t("title"),
                  i("hr"),
                  t._t("body"),
                  i("br"),
                  t._t("link"),
                  i(
                    "p",
                    { staticClass: "img__description", attrs: { id: "font" } },
                    [t._v(" Contributors "), i("br"), t._t("list")],
                    2
                  ),
                ],
                2
              ),
            ]),
          ]),
        ]);
      },
      Q = [],
      H = {},
      X = H,
      G = (i("c199"), Object(p["a"])(X, U, Q, !1, null, null, null)),
      Z = G.exports,
      L = { props: ["info"], components: { appActive: Z } },
      R = L,
      N = Object(p["a"])(R, F, V, !1, null, null, null),
      K = N.exports,
      W = function () {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a(
          "carousel-3d",
          [
            a("slide", { staticClass: "team", attrs: { index: 0 } }, [
              a("div", { staticClass: "img__wrap" }, [
                a("img", {
                  staticClass: "img__img",
                  attrs: { src: i("cda1") },
                }),
                a("p", { staticClass: "img__description" }, [
                  t._v(" formal website catalyst "),
                  a("br"),
                  t._v(" IOS app for catalyst "),
                ]),
                a("div", { staticClass: "centered" }, [
                  t._v("Anubhav Singh "),
                  a("br"),
                  t._v("Admin"),
                ]),
              ]),
            ]),
            a("slide", { staticClass: "team", attrs: { index: 1 } }, [
              a("div", { staticClass: "img__wrap" }, [
                a("img", {
                  staticClass: "img__img",
                  attrs: { src: i("b3c2") },
                }),
                a("p", { staticClass: "img__description" }, [
                  t._v(" formal website catalyst "),
                  a("br"),
                  t._v(" IOS app for catalyst "),
                ]),
                a("div", { staticClass: "centered" }, [
                  t._v("Pushpinder Pal Singh"),
                  a("br"),
                  t._v("Admin"),
                ]),
              ]),
            ]),
            a("slide", { staticClass: "team", attrs: { index: 2 } }, [
              a("div", { staticClass: "img__wrap" }, [
                a("img", {
                  staticClass: "img__img",
                  attrs: { src: i("caa2") },
                }),
                a("p", { staticClass: "img__description" }, [
                  t._v(" formal website catalyst "),
                  a("br"),
                  t._v(" frontend website catalyst "),
                  a("br"),
                  t._v(" chat bot "),
                ]),
                a("div", { staticClass: "centered" }, [
                  t._v("Aryaman Puri "),
                  a("br"),
                  t._v("Admin"),
                ]),
              ]),
            ]),
            a("slide", { staticClass: "team", attrs: { index: 3 } }, [
              a("div", { staticClass: "img__wrap" }, [
                a("img", {
                  staticClass: "img__img",
                  attrs: { src: i("dd2a") },
                }),
                a("p", { staticClass: "img__description" }, [
                  t._v(" formal website catalyst "),
                  a("br"),
                  t._v(" frontend website catalyst "),
                ]),
                a("div", { staticClass: "centered" }, [
                  t._v("Aashim Garg "),
                  a("br"),
                  t._v("Mentor"),
                ]),
              ]),
            ]),
            a("slide", { staticClass: "team", attrs: { index: 4 } }, [
              a("div", { staticClass: "img__wrap" }, [
                a("img", {
                  staticClass: "img__img",
                  attrs: { src: i("85bb") },
                }),
                a("p", { staticClass: "img__description" }, [
                  t._v(" formal website catalyst "),
                  a("br"),
                  t._v(" frontend website catalyst "),
                ]),
                a("div", { staticClass: "centered" }, [
                  t._v("Aman Kumar "),
                  a("br"),
                  t._v("Mentor"),
                ]),
              ]),
            ]),
            a("slide", { staticClass: "team", attrs: { index: 5 } }, [
              a("div", { staticClass: "img__wrap" }, [
                a("img", {
                  staticClass: "img__img",
                  attrs: { src: i("5b5b") },
                }),
                a("p", { staticClass: "img__description" }, [
                  t._v(" formal website catalyst "),
                  a("br"),
                  t._v(" frontend website catalyst "),
                ]),
                a("div", { staticClass: "centered" }, [
                  t._v("Hrishikesh Agarwal "),
                  a("br"),
                  t._v("Contributor"),
                ]),
              ]),
            ]),
            a("slide", { staticClass: "team", attrs: { index: 6 } }, [
              a("div", { staticClass: "img__wrap" }, [
                a("img", {
                  staticClass: "img__img",
                  attrs: { src: i("5c71") },
                }),
                a("p", { staticClass: "img__description" }, [
                  t._v(" formal website catalyst "),
                  a("br"),
                  t._v(" frontend website catalyst "),
                ]),
                a("div", { staticClass: "centered" }, [
                  t._v("Vinayak Sharma "),
                  a("br"),
                  t._v("Contributor"),
                ]),
              ]),
            ]),
            a("slide", { staticClass: "team", attrs: { index: 7 } }, [
              a("div", { staticClass: "img__wrap" }, [
                a("img", {
                  staticClass: "img__img",
                  attrs: { src: i("36cc") },
                }),
                a("p", { staticClass: "img__description" }, [
                  t._v("frontend website catalyst"),
                ]),
                a("div", { staticClass: "centered" }, [
                  t._v("Bindusar Maurya "),
                  a("br"),
                  t._v("Contributor"),
                ]),
              ]),
            ]),
            a("slide", { staticClass: "team", attrs: { index: 8 } }, [
              a("div", { staticClass: "img__wrap" }, [
                a("img", {
                  staticClass: "img__img",
                  attrs: { src: i("266f") },
                }),
                a("p", { staticClass: "img__description" }, [
                  t._v(" formal website catalyst "),
                  a("br"),
                  t._v(" frontend website catalyst "),
                ]),
                a("div", { staticClass: "centered" }, [
                  t._v("Hari Sapna Nair "),
                  a("br"),
                  t._v("Contributor"),
                ]),
              ]),
            ]),
          ],
          1
        );
      },
      J = [],
      q = i("3cf7"),
      z = { components: { Carousel3d: q["Carousel3d"], Slide: q["Slide"] } },
      $ = z,
      tt = (i("c833"), Object(p["a"])($, W, J, !1, null, "7fb15ebc", null)),
      st = tt.exports,
      it = {
        data: function () {
          return {
            completedprojects: [
              {
                title: "chatbot",
                body:
                  "This chatbot helps the police in automating response from citizens",
                link: "https://github.com/Catalyst-CSE/Chat-Bot",
              },
            ],
            activeprojects: [
              {
                title: "OpenSourceEvents-IOS",
                body:
                  "This iOS-application contains a list of open source events and hackathons",
                link: "https://github.com/Catalyst-CSE/OpenSourceEvents-iOS",
                contri: ["To be Added"],
              },
              {
                title: "OpenSourceEvents-Frontend",
                body:
                  "This website contains a list of open source events and hackathons",
                link: "https://opensourcefrontend.netlify.app/",
                contri: [
                  "Vinayak Sharma",
                  "Hrishikesh Agarwal",
                  "Bindusar Maurya",
                  "Hari Sapna Nair",
                ],
              },
            ],
          };
        },
        components: {
          appheader: A,
          appfooter: m,
          appaim: E,
          cp: D,
          appactive: K,
          contri: st,
        },
      },
      at = it,
      et = (i("a8dd"), Object(p["a"])(at, e, r, !1, null, "a0d508bc", null)),
      rt = et.exports;
    (a["a"].config.productionTip = !1),
      new a["a"]({
        render: function (t) {
          return t(rt);
        },
      }).$mount("#app");
  },
  "5b5b": function (t, s, i) {
    t.exports = i.p + "img/hrishikesh.439d8529.jpg";
  },
  "5c1e": function (t, s) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6pJREFUeJzt2kuIHFUUBuCv4yQyYuID1BijmYURfKKiggQREcEXvoJkJQF3CUYUX0sXwb0RURcKghsRBDHBFwR3ogsdFRGCCr4GFcaFcYzPmXJRVcztm+6Zqu7q7hq4Pxzo7jrn1jn/TP9/1e0iISEhISEhISEhISFhGRfhII4hW+NxDG/iwl6DrutDwDbcgOkqbLUc0/JZZuoWXo45k/8LDhs/FrNUxvbg9TmYbcEQg8YnxQy9ZuuLeewI3p+MQy0Ypm4cLHovsQO/ViEgw1+4N/jsBBxowVBV40DRc4ldxUxZVQLKeAyd4Ng+LLZgwH6xiAeCfjt4IsqpRUCG5zEVHL8dCy0YNo4F3Bb0OVX0HufVJiCTa0D4fbpCuxwiVvqNeKtP7kAEZPgYZwd5W7XDIWZ1K/0Wufr3yx+YgAzf4eIgd9IOESv9pfhhlZqhCMjwG24M8iflELHS34SjFeqGJiDDv9gd1T1oPA6xKHejEPcXPVWpb4SAMp7UbZOjdohY6TvYX3ONRgnI8DI2BPWjcog53Up/Il4ZYJ3GCchwGKcGazTtELHSn4b3B1xrJARk+EJ+G11io2YcIr4GmcGXQ6w3MgIy/IQrg7Wm8MwQ68VKfzV+GbLHkRKQOV6oqO8QvZT+DvzRQH8jJ6AcYE+0blWHWChyQ+zDUkO9jYWATP512BytvZpDzBU5IbYY/t9+7AR8hnOL9Tq69x634tMeNbPFsRJhzYxcZNcEAYfkDkAugs/hdd0brLFDxEp/Et6QC2gpgpvwdtsJeHqFhj/AGcF5SocIh4Qz8VFQF97wTOHZNhLwH/YGa5yHz3vkfYXzVzj3BfimR118ITTMzlTjBBzFzUH9VXIB7Jc/j2t7nLfctOxXF2963IrfJ03At7gkqL1LtV+T/sTOoG6n5U3LlSK2yMvw/aQI+BBnFTUdPKKeVy/hITxcsy6+SNqsWzPGQsCrllW93+bjqCMUz2m8Ni4C9lv26E14ZwLDlxE6xDo8NUoC/sZ9QV4/pR93xA6xG/80TcA8rgtyVlP6cUfsENfr7yi1CTii27vv1s7nBmKH2F70PhQBh+W7L+RK/6jm7spGEbFDnO74naPKBLyI9cVn6/FCCwasGqFDbMBLdQhY0v2j6Cl4twVD1Y3QITp4vCoB9wSvt2nuNnQSETtEONuquAY/t2CIYaP2IzJwp3Yq/aCxgFt6DdrvKbEjeE++CbnWsSDXsK8n3UhCQkJCQkJCQkJCQnvwP8McAYzIBwhNAAAAAElFTkSuQmCC";
  },
  "5c71": function (t, s, i) {
    t.exports = i.p + "img/vinayak.a3c06a5f.jpg";
  },
  6263: function (t, s, i) {
    "use strict";
    var a = i("e7b0"),
      e = i.n(a);
    e.a;
  },
  "70b1": function (t, s, i) {},
  7964: function (t, s, i) {},
  "7b4b": function (t, s, i) {
    "use strict";
    var a = i("46f1"),
      e = i.n(a);
    e.a;
  },
  "85bb": function (t, s, i) {
    t.exports = i.p + "img/aman.b24c4f59.jpg";
  },
  a8dd: function (t, s, i) {
    "use strict";
    var a = i("c526"),
      e = i.n(a);
    e.a;
  },
  a9cc: function (t, s, i) {},
  b3c2: function (t, s, i) {
    t.exports = i.p + "img/pushpinder.608a8ef0.jpg";
  },
  b8c6: function (t, s, i) {
    "use strict";
    var a = i("70b1"),
      e = i.n(a);
    e.a;
  },
  bb36: function (t, s) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABQlJREFUeJztm1toHVUUhr/EpjSmaVM1rXhqYr1EK8U2qNRiFa8oBtE8KG1fRMFWpWJBa1EQ9Em84YMUleL9BioIgkiVUqVUNBZ7EY1NRY01GPU0WqvGS5Ljw5riYWbvmbX3XM4Bzw8Lkpw1/1r/mjN7r733BBpooIEG/sdoqmHsVqA9+PkQMF6LJIoowNHAhcByYCHQAxwPHBHymwD2A3uBQWAb8B7wcwE5Zo5jgFuBj4ApoOJpk8B24GZgTqEKPHEK8BTwF/6ibfYn8CRwYmFqHDAXeAa5Y1kLD9sEUoijClGmwGrkOc1beNjKwHUF6LNiNvA6xQsP20vAzJy1RnASsC9l4lnaINCdq+Iq9AKjOQvyse+ARTnqhiDAWI2FxlkZODUv8d3ASB2ITLJhoJS1+BnArjoQp7UBYLpGWLgdtWEj0Bfz+SPA08A3QCf5dW37gBeATcC3wFKLXwlZZ2zOImgf8dUeB44MXXMJsDXhOhd7F7ggFKMD+CfhuouSxCUthlqBz4AFMT7bgPMtn10JPIaMH6PIYzSE3L0y8Efg14asH7qQxVIv0l1+BawF3rbw7wDOjMntC2Ax8HeMTyzuIfnubErgaEP6BlecTPSbFcaLivzu8IgNyDOkmfIe9g2QATbG5HXYfkC+yUY0x5DfhG4wS7pLeUITey5woytxE/L8aQeoWmF7TF7V9rkr8XlK4grwG9CSTocXWnHbdzjLRGJ7BFY4JPIQMh0VjXHgUQf/lS7kQ+iqugN9M5UHWoBPDXmZbLeWtKQkrACXZqMjFa5Cl+sU0mskol9J+GWGItKgGVkKa3K+wnRxGNrl5FseyeaBKeydYhgRbaYC9CjJPlH6FYGdSj9VAeYpyb5X+hWBEaVfRJupANoNxgmlXxHQ5tIe/oOpAG1KMmt/XQNoc47cXFMBtNWsm4MJ9BswkYbNVIDflWQnKP2KQNx+RTUi2kwF+ElJ1qv0KwLaXH4M/8FUgGEl2XLL9UVjOnCO0jeizSRgSEnWiZz71xqXAbOUviptS9CvBd50TDYPbEGf70IN4TTgVwfSWn4Lknasq20Mh0f2DQfiYWTbqWjMR7pRbZ6vuJBf70BcQba7tS10Figh21wuOa5yCTALmTNdAowAl6eSpUM/Mp255HYQj871WQPR18CDwPPY3wrZjIzMWU6RLcDVwPuWmEn2uE/QRUTf8PoA2YpuBm7AXKTDNgo8h7xCsxS31rmEHIXdBrxKuiP5SeSQxQumwXAvcEbw+XrgCWUiax3iblByauxlV9HV6EHO1cKkY8Fn7UgxkgakDx3jNqHf7IyzcTJ4deYBC/lAkOhdwNnE9w6rPeLeHsOntXs94kYwA/sdvjbwuQYRucfgcwC/Z3CZJabWdqE4sNG+K7yY/wbAagwgA9wcZJA7HZlCZyKLlKHg99eUcarRhX5hFsYhZIHkfCQWh1WYK31Llc9pgS0D7kaao37PeMda4iXZVIqYiTCNzpPIGXzWS+PjDLE05jLbeOE+S+BB4E7gXGS3qAvZqFiB8oWlEHwKsMFPkjvW4fZidIdHDJcjuglgjbcaT/QBvygT9CnAfCV3Gbg4hY5UWICuP/fZQe5S8L6D/PdJTdGEzARl7ImqTmVD6I7hG0XWInWFDuB+ZOkZTrjTg89UgANIdxc54aknzEYGyd1I0jvxmyJbkJmlAnyMfMu0J0B1g3mke4NkGn6PTwMNNKDDv5y6CsIPD797AAAAAElFTkSuQmCC";
  },
  bca0: function (t, s, i) {
    t.exports = i.p + "img/open-source.d7d47922.png";
  },
  c199: function (t, s, i) {
    "use strict";
    var a = i("a9cc"),
      e = i.n(a);
    e.a;
  },
  c526: function (t, s, i) {},
  c833: function (t, s, i) {
    "use strict";
    var a = i("33ff"),
      e = i.n(a);
    e.a;
  },
  caa2: function (t, s, i) {
    t.exports = i.p + "img/aryaman.b43b7396.jpg";
  },
  cda1: function (t, s, i) {
    t.exports = i.p + "img/anubhav.bbf3c17d.jpg";
  },
  cf05: function (t, s, i) {
    t.exports = i.p + "img/logo.6afd897e.png";
  },
  d15f: function (t, s, i) {
    "use strict";
    var a = i("5206"),
      e = i.n(a);
    e.a;
  },
  db13: function (t, s, i) {
    t.exports = i.p + "img/color-bar.ab943729.png";
  },
  dd2a: function (t, s, i) {
    t.exports = i.p + "img/aashim.f6c100f6.jpg";
  },
  de06: function (t, s) {
    t.exports =
      "data:image/png;base64,UklGRj4DAABXRUJQVlA4TDIDAAAvP8APEM/kNpIkSclZkFDx3z3k/53dbTccR5LkKDmHBv9NwwgNr9O3zbhtG0mcY//bf627kdvYtlXlnvsFi5yMBuiBEijbaYL4G+7cHTBSIgAAAAEAQIkSJcrEMs1V/Obirokkfr3n9++1lrE5C0GP2f0R2RZzTv+e1sx6Ht8LZWU953tlr6+spN1YjyUa9ShJsT1LhPVU8vnpBRLeY9me5Csk+ZpXkvAk36skjUEQvgAvgAAAAPzwxw/giwAAIPACAF+cxQd3PHFTwC+AlHVFVIEeFUIlfCMlEKy7EgMJD6pQ9KhOuguVNS1EsyDpU5BIlH6hMAhSOwqqIRTp5ihWwkf5q2KjbJpDoepcw3zB0fRybP1rS6MtH8tORzcHtf6lU6Zvkd0fp4rr7UnX/n2eT3AXF2SQIACQITk9E9t2cowvTrbOtm3btm1f3ru73VXVH6iJ6P8EKPTVtprpvLTEGElMy5v22lYV76XyXB8Y+nLLl9gc1mcDstQfctgcigfC+GGhchqTgDi52SFZLgSGhSsEHbHAMq4Vy6kCtlWC8n8KGE//R/hfBKyLxMiZAubTjkkVsK8y6ADSH+FvXjx/9S7sfdRfHa9dazmW4M/r+xfc4Jc/6MStaDiFgB9xx9WP1PEKJVgz4L+84BJ4DUE2k/BCXGOD5ONAw4D+9RaRVx3gMB7vsUuVcORXD+jfLpF5dX7ZeG9duhwlsgT4j3TOPfn4E1AXlZQT3NW4GArY5UpyCW5rPAb0fbXqI7ii8QnPt90GhK7mdzxPangAYe20bSV5tuWn2ZaeaFtSjG0SjfDFJbyHEc/rIULCHq9nCHv5vEIQCsZ5fUaYHGF1/hfCSA+rO4DYu8rqAca2yuT0FCFLSYXZ78igOpGBoxAqlcyZaeoA/oISybApQ0SkwaYWv7M0e9LP/KTfnj4JeLJrS+ppIGmypVEFL7ZDlOZWqg2ypSNr//jJutIf4Tcihk4pN3FMxBnjNeooxBlOZYI7wEcU9kYKjxRR+FsTHMa3hLQrkUo6FfVBdRxFXPWBMDyezcLKnj1WXOcHc8xyZF7x3ukeunnj+rWr4l2/cXOoe0ehAw==";
  },
  e35f: function (t, s) {
    t.exports =
      "data:image/png;base64,UklGRl4DAABXRUJQVlA4TFEDAAAvP8APEGcFObJtVVXvi07JPxmiIAkduW34kgOERpIcSVF93hM4/oyOi/ufctBGkiO57v9BPH+MObUb27bVhPcfrrGO2TI7pkBFqV/wl5/k3m3AqCZrdAs9TU9b5FbwL7LSUWIM/MxSU60URXGFAmKCQilpAOZiCKI6pYXsH7WAGIorTIC+QZSqDN9yzHAyHuB/GADgbwAC6EAABJABEC06EMAXHVolYSEUc6xaHYwRFS2wwKJBeDL4AARmBcyQAmgVBNYSWhiOWSGSpkEClApf2OiRLEPxCUiTIJIfXN7/uUlJ/etngJ+JQtXJYJpkNR7j7n+3MfM228bFnjOOvO3xd7j7jJPvSZPzPL9/N9k548FfhKcYApluYN+mMaTVMBtxrA4p+N73y3XIcffF7XwdFg9YvcnmpYdkSbZN25rXtm3feW3btm3btm1b7/zl1pp7t14vov8TAP9Lzy1KchIj6qsG/DQUcdkZhsKp7iqhzYdvnjkykw8Uf7vBM9+Cg8C9jLQm6kLJCXsnvi+piDGrPBMYZEoyjgzDw5A7Dbx5iGHeBLtBLPjbgfcrFBGDLZn9pCDzNxX88/UAWELeITVGo8g6zG7N7SUu6wxgng9bj5iokpjFRCLihz4AbAtgoxELPyQN3gUA0BXCoOdjacMkV7vA1QwSQoyx+5VSQtFoCPyVYhCvbU7E5RM0HYKgkzjEmF4dMXkEjiB8ESUBEZu619T47glGREC/NESMrembNbxQ9RJYiTlJZ8EfckXgIgZ0P5iR+ggtzPyBf6wC/IR8sHHA1b1BfqtCfqjMSDWh71Bl3ILIAmV0ivFQhrmYf6mKWBEDs0qoBPGPCrCT8K9IfvsSQKtNbhUg3SNBXr4M4HskS0Y3GtJ2zbaMbarlMwnSrVDWGX8MDmJl5QMsp+RUqMZEVS6fqH1ge5IjGwdgfXonk3IVM/izjZRD5ilQHvbEkn3oArF6gPVAPMXVPNAftiBh5CKQq01GI+GHEVD/88xFyvp1IF4eS0bSgmMgVNP2eqpD2nB7DWA7X3xXk90YguTNesBcc+QT6dPNVEAZ2BNHlOH8B9S/3mWhzMJKFtVAlkfvr8kMrl+8D0DOhzM9pTW1aZ9h8Wk5hR0OOwbwPxQA";
  },
  e7b0: function (t, s, i) {},
});
//# sourceMappingURL=app.6508e7c5.js.map

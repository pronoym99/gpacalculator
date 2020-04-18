webpackJsonp([0], {
  "492I": function(e, t) {},
  NHnr: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = r("7+uW"),
      s = r("rWCf"),
      o = r.n(s),
      c = r("pkbO"),
      a = r.n(c),
      C = {
        name: "SGPA",
        data: function() {
          return {
            it: o.a,
            ece: a.a,
            activeIT: !0,
            selectedCourse: "it",
            selectedSemester: 0,
            theoryGrades: [],
            labGrades: [],
            projectScore: 0,
            projectGrade: "",
            tweenedNumber: 0
          }
        },
        methods: {
          getScore: function(e) {
            switch (e) {
              case "A+":
              case "a+":
                return 10;
              case "A":
              case "a":
                return 9;
              case "B+":
              case "b+":
                return 8;
              case "B":
              case "b":
                return 7;
              case "C":
              case "c":
                return 6;
              case "D":
              case "d":
                return 5;
              default:
                return 0
            }
          },
          calc: function(e) {
            var t = e.toString();
            return t = t.slice(0, t.indexOf(".") + 3), Number(t)
          }
        },
        computed: {
          animatedResult: function() {
            return this.tweenedNumber.toFixed(2)
          },
          course: function() {
            return this[this.selectedCourse]
          },
          theoryScore: function() {
            var e = this,
              t = 0;
            return this.theoryGrades.forEach(function(r) {
              t += e.getScore(r)
            }), 3 * t
          },
          labScore: function() {
            var e = this,
              t = 0;
            return this.labGrades.forEach(function(r) {
              t += e.getScore(r)
            }), 2 * t
          },
          totalScore: function() {
            var e = 0;
            this.labGrades.forEach(function(t) {
              null !== t && (e += 1)
            });
            var t = 0;
            this.theoryGrades.forEach(function(e) {
              null !== e && (t += 1)
            });
            var r = 3 * t + 2 * e + this.projectScore,
              i = (this.labScore + this.theoryScore + this.getScore(this.projectGrade) * this.projectScore) / r;
            return isNaN(i) || 0 === i ? null : this.calc(i)
          },
          showMessage: function() {
            return this.totalScore <= 10 && this.totalScore > 9 ? "Teach me, Master 🙏🏻" : this.totalScore <= 9 && this.totalScore > 8 ? " Machaya! Decent Score 🍻" : this.totalScore <= 8 && this.totalScore > 7 ? " Push yourself, just a little 🙌" : this.totalScore <= 7 && this.totalScore > 6 ? "Need to work harder 🔨" : this.totalScore <= 6 && this.totalScore > 5 ? "Beta tumse na ho payega 😂" : "You entered a wrong value 😪"
          }
        },
        watch: {
          selectedSemester: function() {
            this.theoryGrades = [], this.labGrades = [], this.projectScore = 0, this.projectGrade = ""
          },
          selectedCourse: function() {
            this.theoryGrades = [], this.labGrades = [], this.projectScore = 0, this.projectGrade = ""
          },
          totalScore: function(e) {
            TweenLite.to(this.$data, .5, {
              tweenedNumber: e
            })
          }
        }
      },
      d = {
        render: function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", [r("div", {
            staticClass: "nav"
          }, [r("div", {
            staticClass: "branch"
          }, [r("label", [e._v("Branch")]), e._v(" "), r("button", {
            class: [e.activeIT ? "active" : ""],
            on: {
              click: function(t) {
                e.selectedCourse = "it", e.activeIT = !0
              }
            }
          }, [e._v("IT")]), e._v(" "), r("button", {
            class: [e.activeIT ? "" : "active"],
            on: {
              click: function(t) {
                e.selectedCourse = "ece", e.activeIT = !1
              }
            }
          }, [e._v("ECE")])]), e._v(" "), r("div", {
            staticClass: "semester"
          }, [r("label", [e._v("Semester")]), e._v(" "), r("select", {
            directives: [{
              name: "model",
              rawName: "v-model.number",
              value: e.selectedSemester,
              expression: "selectedSemester",
              modifiers: {
                number: !0
              }
            }],
            on: {
              change: function(t) {
                var r = Array.prototype.filter.call(t.target.options, function(e) {
                  return e.selected
                }).map(function(t) {
                  var r = "_value" in t ? t._value : t.value;
                  return e._n(r)
                });
                e.selectedSemester = t.target.multiple ? r : r[0]
              }
            }
          }, e._l(8, function(t) {
            return r("option", {
              key: t,
              domProps: {
                value: t - 1
              }
            }, [e._v("Semester " + e._s(t))])
          }))])]), e._v(" "), r("table", {
            staticClass: "course-list"
          }, e._l(e.course[e.selectedSemester], function(t, i) {
            return r("tr", {
              key: t.id,
              staticClass: "course"
            }, [r("td", {
              staticClass: "name"
            }, [e._v(e._s(t.courseName))]), e._v(" "), t.theoryCredits ? r("td", {
              attrs: {
                colspan: t.theoryCredits && t.labCredits ? "" : 2
              }
            }, [r("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: e.theoryGrades[i],
                expression: "theoryGrades[index]"
              }],
              attrs: {
                type: "text",
                placeholder: "Theory Grade"
              },
              domProps: {
                value: e.theoryGrades[i]
              },
              on: {
                input: function(t) {
                  t.target.composing || e.$set(e.theoryGrades, i, t.target.value)
                }
              }
            })]) : e._e(), e._v(" "), t.labCredits ? r("td", {
              attrs: {
                colspan: t.theoryCredits && t.labCredits ? "" : 2
              }
            }, [r("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: e.labGrades[i],
                expression: "labGrades[index]"
              }],
              attrs: {
                type: "text",
                placeholder: "Lab Grade"
              },
              domProps: {
                value: e.labGrades[i]
              },
              on: {
                input: function(t) {
                  t.target.composing || e.$set(e.labGrades, i, t.target.value)
                }
              }
            })]) : e._e(), e._v(" "), t.projectCredits ? r("td", {
              attrs: {
                colspan: "2"
              }
            }, [r("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: e.projectGrade,
                expression: "projectGrade"
              }],
              attrs: {
                type: "text",
                placeholder: "Project Grade",
                change: e.projectScore = t.projectCredits
              },
              domProps: {
                value: e.projectGrade
              },
              on: {
                input: function(t) {
                  t.target.composing || (e.projectGrade = t.target.value)
                }
              }
            })]) : e._e()])
          })), e._v(" "), e.totalScore ? r("hr") : e._e(), e._v(" "), e.totalScore ? r("div", {
            staticClass: "verdict"
          }, [r("h4", [e._v(e._s(e.showMessage))]), e._v(" "), r("h3", [e._v(e._s(e.animatedResult)), e.totalScore ? r("span", {
            staticClass: "outta"
          }, [e._v("/10")]) : e._e()])]) : e._e()])
        },
        staticRenderFns: []
      };
    var n = r("VU/8")(C, d, !1, function(e) {
        r("y0kF")
      }, null, null).exports,
      I = r("tSR1"),
      l = r.n(I),
      u = {
        name: "CGPA",
        data: function() {
          return {
            credits: l.a,
            activeIT: !0,
            selectedCourse: "it",
            selectedSemester: 4,
            sgpa: [],
            tweenedNumber: 0
          }
        },
        methods: {
          getSemCredit: function(e) {
            var t = "it" === this.selectedCourse ? 0 : 1;
            return parseInt(l.a["s" + e][t])
          },
          calc: function(e) {
            var t = e.toString();
            return t = t.slice(0, t.indexOf(".") + 3), Number(t)
          },
          placeholder: function(e) {
            return "GPA of Semester " + e
          }
        },
        computed: {
          animatedResult: function() {
            return this.tweenedNumber.toFixed(2)
          },
          totalScore: function() {
            var e = 0,
              t = 0;
            return this.sgpa.forEach(function(r, i) {
              e += this.getSemCredit(i), t += this.getSemCredit(i) * r
            }.bind(this)), this.calc(t / e)
          }
        },
        watch: {
          selectedSemester: function() {
            this.sgpa = []
          },
          totalScore: function(e) {
            TweenLite.to(this.$data, .5, {
              tweenedNumber: e
            })
          }
        }
      },
      g = {
        render: function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", [r("div", {
            staticClass: "nav"
          }, [r("div", {
            staticClass: "branch"
          }, [r("label", [e._v("Branch")]), e._v(" "), r("button", {
            class: [e.activeIT ? "active" : ""],
            on: {
              click: function(t) {
                e.selectedCourse = "it", e.activeIT = !0
              }
            }
          }, [e._v("IT")]), e._v(" "), r("button", {
            class: [e.activeIT ? "" : "active"],
            on: {
              click: function(t) {
                e.selectedCourse = "ece", e.activeIT = !1
              }
            }
          }, [e._v("ECE")])]), e._v(" "), r("div", {
            staticClass: "semester"
          }, [r("label", [e._v("Semesters Completed")]), e._v(" "), r("select", {
            directives: [{
              name: "model",
              rawName: "v-model.number",
              value: e.selectedSemester,
              expression: "selectedSemester",
              modifiers: {
                number: !0
              }
            }],
            staticClass: "smaller",
            on: {
              change: function(t) {
                var r = Array.prototype.filter.call(t.target.options, function(e) {
                  return e.selected
                }).map(function(t) {
                  var r = "_value" in t ? t._value : t.value;
                  return e._n(r)
                });
                e.selectedSemester = t.target.multiple ? r : r[0]
              }
            }
          }, e._l(8, function(t) {
            return r("option", {
              key: t,
              domProps: {
                value: t
              }
            }, [e._v(e._s(t) + " Done")])
          }))])]), e._v(" "), r("div", {
            staticClass: "course-list"
          }, e._l(e.selectedSemester, function(t) {
            return r("div", {
              key: t,
              staticClass: "courseitem small"
            }, [r("p", [e._v("Semester " + e._s(t))]), e._v(" "), r("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: e.sgpa[t],
                expression: "sgpa[i]"
              }],
              attrs: {
                type: "number",
                step: "0.01",
                placeholder: e.placeholder(t),
                max: "10",
                min: "0"
              },
              domProps: {
                value: e.sgpa[t]
              },
              on: {
                input: function(r) {
                  r.target.composing || e.$set(e.sgpa, t, r.target.value)
                }
              }
            })])
          })), e._v(" "), e.totalScore ? r("hr") : e._e(), e._v(" "), e.totalScore ? r("div", {
            staticClass: "verdict"
          }, [r("h3", [e._v(e._s(e.animatedResult)), e.totalScore ? r("span", {
            staticClass: "outta"
          }, [e._v("/10")]) : e._e()])]) : e._e()])
        },
        staticRenderFns: []
      };
    var m = r("VU/8")(u, g, !1, function(e) {
        r("492I")
      }, "data-v-8dd482b0", null).exports,
      A = (r("feh2"), {
        name: "App",
        components: {
          SGPA: n,
          CGPA: m
        },
        data: function() {
          return {
            sgActive: !0
          }
        },
        mounted: function() {
          var e = document.createElement("script");
          e.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js"), document.head.appendChild(e)
        }
      }),
      M = {
        render: function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", {
            attrs: {
              id: "app"
            }
          }, [e._m(0), e._v(" "), r("div", {
            staticClass: "content"
          }, [r("h1", [e._v("GPA Calculator")]), e._v(" "), r("h2", [e._v("Calculate your Semester GPA, Cummulative GPA and check how much you need next semester to cross that legendary GPA Mark")]), e._v(" "), r("div", {
            staticClass: "main"
          }, [r("div", {
            staticClass: "selection"
          }, [r("button", {
            class: [e.sgActive ? "active" : ""],
            on: {
              click: function(t) {
                e.sgActive = !0
              }
            }
          }, [e._v("Semester GPA")]), e._v(" "), r("button", {
            class: [e.sgActive ? "" : "active"],
            on: {
              click: function(t) {
                e.sgActive = !1
              }
            }
          }, [e._v("Cumulative GPA")])]), e._v(" "), e.sgActive ? r("div", {
            staticClass: "sgbox"
          }, [r("SGPA")], 1) : e._e(), e._v(" "), e.sgActive ? e._e() : r("div", {
            staticClass: "cgbox"
          }, [r("CGPA")], 1)])]), e._v(" "), e._m(1)])
        },
        staticRenderFns: [function() {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("div", {
            staticClass: "background"
          }, [t("img", {
            attrs: {
              src: r("RYk1")
            }
          })])
        }, function() {
          var e = this.$createElement,
            t = this._self._c || e;
          return t("footer", [t("a", {
            attrs: {
              href: "https://github.com/littlewonder/gpacalculator"
            }
          }, [this._v("Hacked by a lowly 8 CG human 🙈")])])
        }]
      };
    var N = r("VU/8")(A, M, !1, function(e) {
      r("tUX/")
    }, null, null).exports;
    i.a.config.productionTip = !1, new i.a({
      el: "#app",
      components: {
        App: N
      },
      template: "<App/>"
    })
  },
  RYk1: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQ0MHB4IiBoZWlnaHQ9IjY0N3B4IiB2aWV3Qm94PSIwIDAgMTQ0MCA2NDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjEgKDU1MDQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzJENUFGRiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkVCRUZDIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTIiIHBvaW50cz0iMCA1NzYuNjg3MjUxIDE0NDAgNjQ3IDE0NDAgMCAwIDAiPjwvcG9seWdvbj4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTQiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkU3OUZFIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMTVBRkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkE2RUZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjAlIiB4Mj0iMTEuMTc1NTYwOCUiIHkyPSI2OS45ODcxMjIzJSIgaWQ9ImxpbmVhckdyYWRpZW50LTUiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzM5REZEIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMTVDRkUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRGVza3RvcC1IRCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9InVuZHJhd19kYXRhX3JlcG9ydF9iaTZsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJNYXNrIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTI3LjA0MDY2OTUsMjUxLjg5MjA0OSBMMjYwLjQ0NzYzNSw3Mi4yNDk0MTg1IEMxNjAuNjQwNTEyLDM0LjA3NTczMTQgODcuMzk2NDUxNSwxNC45ODg4ODc5IDQwLjcxNTQ1MzUsMTQuOTg4ODg3OSBDLTguODI1NzcwNzYsMTQuOTg4ODg3OSAtNzEuNjg1MDA5MiwyOS41MDQ5NTMgLTE0Ny44NjIyNjIsNTguNTM3MDgzMiBMLTI3LjA0MDY2OTUsMjUxLjg5MjA0OSBaIiBpZD0iUGF0aC0yIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBvcGFjaXR5PSIwLjY1MzUxNTYyNSIgbWFzaz0idXJsKCNtYXNrLTMpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ni4yOTI2ODcsIDEzMy40NDA0NjgpIHJvdGF0ZSgxMjIuMDAwMDAwKSB0cmFuc2xhdGUoLTU2LjI5MjY4NywgLTEzMy40NDA0NjgpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04MjUsMCBDODQxLjc1ODM1NCw0Ni4yMTUxOTggODc3LjQyNTAyMSw3NS4yMTUxOTggOTMyLDg3IEMxMDUwLjkzNzE4LDExMi42ODMwMzYgMTMyNSw5NSAxNDM3LDk1IEwxNDM3LDAgTDgyNSwwIFoiIGlkPSJQYXRoLTMiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNSkiIG9wYWNpdHk9IjAuMjAzNzk0NjQzIiBtYXNrPSJ1cmwoI21hc2stMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTI3NSw1MzMgQzEzMDIuNjg3NjMsNDk3LjQyNzgxOCAxMzU4LjM1NDI5LDQ5Ny40Mjc4MTggMTQ0Miw1MzMgTDE0NDIsNzgxIEMxMzY0LjI1ODk3LDc3OS4wNDUyNTggMTMxMy45MjU2NCw3NjEuMDQ1MjU4IDEyOTEsNzI3IEMxMjU2LjYxMTU0LDY3NS45MzIxMTMgMTIzMy40Njg1Niw1ODYuMzU4Mjc0IDEyNzUsNTMzIFoiIGlkPSJQYXRoLTQiIGZpbGw9IiMyNUFBRkYiIG9wYWNpdHk9IjAuNjExNjA3MTQzIiBtYXNrPSJ1cmwoI21hc2stMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNSIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4xMTY5MDg0ODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNzMuMTc1MTQ0LCAzMDkuMTc1MTQ0KSByb3RhdGUoMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTExNzMuMTc1MTQ0LCAtMzA5LjE3NTE0NCkgIiB4PSIxMTI1LjY3NTE0IiB5PSIyNjEuNjc1MTQ0IiB3aWR0aD0iOTUiIGhlaWdodD0iOTUiIHJ4PSI1Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTUtQ29weS0yIiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjExNjkwODQ4MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAzNS40MjY0MDcsIDUxMC40MjY0MDcpIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTAzNS40MjY0MDcsIC01MTAuNDI2NDA3KSAiIHg9IjEwMDUuNDI2NDEiIHk9IjQ4MC40MjY0MDciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcng9IjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03NDIuNjEyNjI1LDI2LjQwOTAxOTggTDc0Mi43MDUxOTUsNTAuMTI0MzcxNyBDNzQyLjcxNDUxNyw1Mi41MTI3NTYyIDc0MS4wMzMzNTQsNTQuNTc0MjQ2NiA3MzguNjkxOTE4LDU1LjA0NTU2NjkgTDY0NS41ODQxMjgsNzMuNzg3NzMzNSBMNzM1LjExMjY2MywyMi4wOTg0MDk1IEM3MzcuNTA0MTI2LDIwLjcxNzY5NzYgNzQwLjU2MjA3OCwyMS41MzcwNzM0IDc0MS45NDI3OSwyMy45Mjg1MzY1IEM3NDIuMzc4MzIzLDI0LjY4MjkwMTYgNzQyLjYwOTIyNSwyNS41Mzc5NjA2IDc0Mi42MTI2MjUsMjYuNDA5MDE5OCBaIiBpZD0iUmVjdGFuZ2xlLTUtQ29weS01IiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjExNjkwODQ4MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjk0LjE0NDY4MCwgNDcuNjA3NzE4KSByb3RhdGUoMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTY5NC4xNDQ2ODAsIC00Ny42MDc3MTgpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS01LUNvcHktNCIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4wNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTc4LjA1MzgyNCwgMjE0LjI4ODkzOCkgcm90YXRlKDQ1LjAwMDAwMCkgdHJhbnNsYXRlKC01NzguMDUzODI0LCAtMjE0LjI4ODkzOCkgIiB4PSI1NDguMDUzODI0IiB5PSIxODQuMjg4OTM4IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHJ4PSI1Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTUtQ29weSIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC4xMTY5MDg0ODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4OS4wMDAwMDAsIDMxMC4wMDAwMDApIHJvdGF0ZSgzMC4wMDAwMDApIHRyYW5zbGF0ZSgtMzg5LjAwMDAwMCwgLTMxMC4wMDAwMDApICIgeD0iMzY1IiB5PSIyODYiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcng9IjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNS1Db3B5LTMiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuMTE2OTA4NDgyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MzkuNTAwMDAwLCA0ODguMDAwMDAwKSByb3RhdGUoMzAuMDAwMDAwKSB0cmFuc2xhdGUoLTQzOS41MDAwMDAsIC00ODguMDAwMDAwKSAiIHg9IjM3OS41IiB5PSI0MjgiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
  },
  feh2: function(e, t) {},
  pkbO: function(e, t) {
    e.exports = [
      [{
        courseName: "Electronics Devices and Circuits",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Introduction to Programming",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Calculus and Differential Equation",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Engineering Physics",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Circuit Analysis and Synthesis",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Introduction to Computers",
        theoryCredits: !1,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Professional Communication",
        theoryCredits: !1,
        labCredits: !0,
        projectCredits: 0
      }],
      [{
        courseName: "Probability and Statistics",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Discrete Mathematics",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Computer Organization and Architecture",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Data Structures",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Digital Electronics",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Principles of Management",
        theoryCredits: !1,
        labCredits: !1,
        projectCredits: 0
      }],
      [{
        courseName: "Analog Electronics",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Operating System",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Electromagnetic Field and Waves",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Analog Communication",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Basic Electrical Engineering",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }],
      [{
        courseName: "Discrete Time Signals and Systems",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Electronics Measurement and Instrumentation",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Microprocessor Interface and Programming",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Microwave Engineering",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Integrated Circuits Technology",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Marketing Management",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }],
      [{
        courseName: "Control Systems",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Antenna and Wave Propagation",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Principles of Economics",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Computer Networks",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Digital Communication",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Mini Project",
        theoryCredits: !1,
        labCredits: !1,
        projectCredits: 5
      }],
      [{
        courseName: "Digital Signal Processing",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Optical Communication",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Digital IC Design",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Elective-1",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Elective-2",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Mini Project",
        theoryCredits: !1,
        labCredits: !1,
        projectCredits: 5
      }],
      [{
        courseName: "Embedded System Design",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Wireless Communication",
        theoryCredits: !1,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Elective-1",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Elective-2",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Elective-3",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Mini Project",
        theoryCredits: !1,
        labCredits: !1,
        projectCredits: 5
      }],
      [{
        courseName: "Major Project",
        theoryCredits: !1,
        labCredits: !1,
        projectCredits: 20
      }]
    ]
  },
  rWCf: function(e, t) {
    e.exports = [
      [{
        courseName: "Electronics Devices and Circuits",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Introduction to Programming",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Calculus and Differential Equation",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Engineering Physics",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Circuit Analysis and Synthesis",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Introduction to Computers",
        theoryCredits: !1,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Professional Communication",
        theoryCredits: !1,
        labCredits: !0,
        projectCredits: 0
      }],
      [{
        courseName: "Probability and Statistics",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Discrete Mathematics",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Computer Organization and Architecture",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Data Structures",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Digital Electronics",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Principles of Management",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }],
      [{
        courseName: "Mathematics - 2",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Operating System",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Theory of Computation",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Object Oriented Methodologies",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Microprocessors",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }],
      [{
        courseName: "Mathematics - 3",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Design and Analysis of Algorithms",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Principles of Programming Languages",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Database Management Systems",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Principles of Communication",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }],
      [{
        courseName: "Computer Networks",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Software Engineering",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Principles of Economics",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Graphics and Visual Computing",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Artificial Intelligence",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Mini Project",
        theoryCredits: !1,
        labCredits: !1,
        projectCredits: 5
      }],
      [{
        courseName: "Compiler Design",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Image and Video Processing",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Data Mining and Warehousing",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Elective-1",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Elective-2",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Mini Project",
        theoryCredits: !1,
        labCredits: !1,
        projectCredits: 5
      }],
      [{
        courseName: "System Modeling and Simulation",
        theoryCredits: !0,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Organizational Behaviour",
        theoryCredits: !1,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Elective-1",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Elective-2",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Mini Project",
        theoryCredits: !1,
        labCredits: !1,
        projectCredits: 8
      }],
      [{
        courseName: "Philosophy of Science",
        theoryCredits: !1,
        labCredits: !0,
        projectCredits: 0
      }, {
        courseName: "Elective",
        theoryCredits: !0,
        labCredits: !1,
        projectCredits: 0
      }, {
        courseName: "Major Project",
        theoryCredits: !1,
        labCredits: !1,
        projectCredits: 14
      }]
    ]
  },
  tSR1: function(e, t) {
    e.exports = {
      s1: [25, 25],
      s2: [22, 22],
      s3: [21, 23],
      s4: [21, 24],
      s5: [28, 28],
      s6: [26, 26],
      s7: [21, 24],
      s8: [19, 20]
    }
  },
  "tUX/": function(e, t) {},
  y0kF: function(e, t) {}
}, ["NHnr"]);
//# sourceMappingURL=app.7bc461b3dd76bb011960.js.map

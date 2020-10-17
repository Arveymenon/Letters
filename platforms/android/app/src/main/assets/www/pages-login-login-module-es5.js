(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/components/input/input.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/components/input/input.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginComponentsInputInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item>\n  <ion-input appEmailStringValidator [placeholder]=\"placeholder\" [formControl]=\"control\"></ion-input>\n</ion-item>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"displayContents loginPage\">\n  <div class=\"section_one\">\n    <div class=\"parent_text_box\">\n      <!-- <div class=\"text\" #textBox id=\"text_box\">Penpal Letters</div> -->\n      <div class=\"text\" #textBox id=\"text_box\"></div>\n      </div>\n  </div>\n  <div class=\"login-form\">\n      <app-input *ngIf=\"loginStage == 1\" [control]=\"email\" placeholder=\"Email\"></app-input>\n      <app-input *ngIf=\"loginStage == 2\" [control]=\"otp\" max=\"6\" placeholder=\"OTP\"></app-input>\n      \n      <ion-button (click)=\"login()\" expand=\"block\">{{ loginStage == 1 ? 'Send OTP' : 'Submit' }}</ion-button>\n      <p class=\"ion-text-center resend-otp\" *ngIf=\"loginStage == 2\" (click)=\"resendOtp()\">Resend OTP</p>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/vara/src/vara.min.js":
    /*!*******************************************!*\
      !*** ./node_modules/vara/src/vara.min.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function node_modulesVaraSrcVaraMinJs(module, exports, __webpack_require__) {
      Vara = function Vara(t, e, s, i) {
        var r = this;
        this.elementName = t, this.textsInit = [], "string" == typeof s ? this.textsInit.push({
          text: s
        }) : "object" == typeof s && (this.textsInit = s), this.texts = this.textsInit, this.properties = i || {}, this.properties.textAlign = this.properties.textAlign || "left", this.letterSpacing = 0, this.element = document.querySelector(this.elementName), this.fontSource = e, this.characters = {}, this.drawnCharacters = {}, this.totalPathLength = 0, this.fontSize = 24, this.frameRate = 1e3 / 30, this.prevDuration = 0, this.completed = !1, this.ready = function (t) {
          r.readyF = t;
        }, this.animationEnd = function (t) {
          r.animationEndF = t;
        }, this.svg = this.createNode("svg", {
          width: "100%"
        }), this.element.appendChild(this.svg), this.font = document.createElement("object"), this.getSVGData();
      }, Vara.prototype.createNode = function (t, e) {
        for (var s in t = document.createElementNS("http://www.w3.org/2000/svg", t), e) {
          t.setAttributeNS(null, s.replace(/[A-Z]/g, function (t, e, s, i) {
            return "-" + t.toLowerCase();
          }), e[s]);
        }

        return t;
      }, Vara.prototype.getSVGData = function () {
        var t = this,
            e = new XMLHttpRequest();
        e.open("GET", this.fontSource, !0), e.onreadystatechange = function () {
          4 == e.readyState && 200 == e.status && (t.contents = JSON.parse(e.responseText), t.characters = JSON.parse(e.responseText).c, t.preCreate(), t.createText());
        }, e.send(null);
      }, Vara.prototype.preCreate = function () {
        !function () {
          if ("function" == typeof NodeList.prototype.forEach) return !1;
          NodeList.prototype.forEach = Array.prototype.forEach;
        }(), this.questionMark = null == this.characters[63] ? {
          paths: [{
            w: 8.643798828125,
            h: 14.231731414794922,
            my: 22.666500004827977,
            mx: 0,
            pw: 28.2464542388916,
            d: "m 0,0 c -2,-6.01,5,-8.64,8,-3.98,2,4.09,-7,8.57,-7,11.85"
          }, {
            w: 1.103759765625,
            h: 1.549820899963379,
            my: 8.881500004827977,
            mx: 1,
            pw: 4.466640472412109,
            d: "m 0,0 a 0.7592,0.7357,0,0,1,0,0.735,0.7592,0.7357,0,0,1,-1,-0.735,0.7592,0.7357,0,0,1,1,-0.738,0.7592,0.7357,0,0,1,0,0.738 z"
          }],
          w: 8.643798828125
        } : this.characters[63], this.space = {
          paths: [{
            d: "M0,0 l" + this.contents.p.space + " 0",
            mx: 0,
            my: 0,
            w: this.contents.p.space,
            h: 0
          }],
          w: this.contents.p.space
        };

        for (var t = this.analyseWidth(), e = 0; e < this.texts.length; e++) {
          for (var s = [], i = ("string" == typeof this.texts[e] ? {
            text: this.texts[e]
          } : this.texts[e]).text, r = 0; r < i.length; r++) {
            var n = i[r];
            if (t.breakPoints[e][r].length > 0) for (var a, h = t.breakPoints[e][r].length, o = 0; o <= h; o++) {
              var l = t.breakPoints[e][r][o];
              t.breakPoints[e][r][h - 1] != n.length && t.breakPoints[e][r].push(n.length);
              var c = null == t.breakPoints[e][r][o - 1] ? 0 : t.breakPoints[e][r][o - 1];
              a = n.slice(c, l).replace(/^\s+/g, ""), s.push(a);
            } else s.push(i[r]);
          }

          this.texts[e].text = s;
        }
      }, Vara.prototype.createText = function () {
        var t,
            e = this,
            s = this.svg,
            i = 0,
            r = 0,
            n = null == this.properties.lineHeight ? this.contents.p.lh : this.properties.lineHeight;
        this.properties.autoAnimation = null == this.properties.autoAnimation || this.properties.autoAnimation;

        for (var a = 0, h = !0, o = 0; o < this.texts.length; o++) {
          var l = [],
              c = 0;
          t = this.texts[o].fontSize;
          var p = this.texts[o].strokeWidth,
              u = null == this.texts[o].color ? null == this.properties.color ? "black" : this.properties.color : this.texts[o].color,
              d = null == this.texts[o].duration ? null == this.properties.duration ? 2e3 : this.properties.duration : this.texts[o].duration;
          this.texts[o].duration = d;
          var x = null == this.texts[o].id ? o : this.texts[o].id;
          this.texts[o].delay = null == this.texts[o].delay ? 0 : this.texts[o].delay, this.prevDuration += this.texts[o].delay, null == this.texts[o].fromCurrentPosition && (this.texts[o].fromCurrentPosition = {
            x: !0,
            y: !0
          }), h = null == this.texts[o].y || !(null != this.texts[o].fromCurrentPosition.y && !this.texts[o].fromCurrentPosition.y);
          var f = u,
              g = null == this.texts[o].textAlign ? this.properties.textAlign : this.texts[o].textAlign;
          n = null == this.texts[o].lineHeight ? n : this.texts[o].lineHeight / t;
          var y = this.createNode("g", {
            "class": "outer",
            transform: "translate(0,0)",
            "data-text": this.texts[o].text
          });
          s.appendChild(y), r = a;

          for (var m = 0, v = 0; v < this.texts[o].text.length; v++) {
            var w = 0,
                C = this.createNode("g");
            y.appendChild(C);

            for (var S = 0, k = 0, B = 0; B < this.texts[o].text[v].length; B++) {
              var b = this.texts[o].text[v][B],
                  A = this.createNode("g");
              C.appendChild(A);
              i = 0;
              var P = null != this.characters[b.charCodeAt(0)] || " " == b ? " " == b ? this.space.paths : this.characters[b.charCodeAt(0)].paths : this.questionMark.paths;
              u = " " == b ? "transparent" : f, P.forEach(function (t, s) {
                var i = e.createNode("path", {
                  d: t.d,
                  "stroke-width": p,
                  stroke: u,
                  fill: "none",
                  "stroke-linecap": e.contents.p.slc,
                  "stroke-linejoin": e.contents.p.slj
                });
                A.appendChild(i), i.setAttribute("transform", "translate(" + t.mx + "," + -t.my + ")"), S = S > t.my - i.getBBox().y ? S : t.my - i.getBBox().y, 0 == s && (k = S), i.style.opacity = 0, i.style.strokeDasharray = i.getTotalLength() + " " + (i.getTotalLength() + 2), i.style.strokeDashoffset = i.getTotalLength() + 1;
              }), l.push(A);
              i = A.getBBox().x * t;
              A.getBBox().width < this.texts[o].minWidth && (i -= (this.texts[o].minWidth - A.getBBox().width) / 2), A.setAttribute("transform", "translate(" + (w - i + this.texts[o].letterSpacing) + ",0)  scale(" + t + ")"), w += A.getBBox().width * t + this.texts[o].letterSpacing, A.getBBox().width < this.texts[o].minWidth && (w += this.texts[o].minWidth - A.getBBox().width);
            }

            var V = C.getBBox();
            C.setAttribute("transform", "translate(" + p * t + "," + (-V.y + p * t) + ")");
            var W = 0;
            "center" == g ? W = (this.svg.getBoundingClientRect().width - V.width) / 2 : "right" == g && (W = this.svg.getBoundingClientRect().width - V.width), this.setPosition(C, {
              x: W,
              y: c + this.contents.p.tf * t - S
            }), c += n * t, m += this.contents.p.tf * t + (this.contents.p.tf * t - k);
          }

          null != this.texts[o].y && 1 != this.texts[o].fromCurrentPosition.y || this.setPosition(y, {
            y: r
          }), null != this.texts[o].fromCurrentPosition && this.texts[o].fromCurrentPosition.y && (a += null == this.texts[o].y ? 0 : this.texts[o].y), this.setPosition(y, {
            x: this.texts[o].x,
            y: this.texts[o].y
          }, this.texts[o].fromCurrentPosition), h && (a += m), null != this.drawnCharacters[x] && (x = o), this.drawnCharacters[x] = {
            characters: l,
            queued: this.texts[o].queued,
            container: y,
            index: o
          }, (null == this.texts[o].autoAnimation || this.texts[o].autoAnimation) && this.properties.autoAnimation && (e.draw(x, d), (null == this.texts[o].queued || this.texts[o].queued) && (e.prevDuration += d));
        }

        this.completed = !0, this.svg.setAttribute("height", this.svg.getBBox().height + this.svg.getBBox().y + 10), this.readyF && this.readyF();
      }, Vara.prototype.playAll = function () {
        this.prevDuration = 0;

        for (var t = 0; t < this.texts.length; t++) {
          var e = this.texts[t].duration,
              s = null == this.texts[t].id ? t : this.texts[t].id;
          this.prevDuration += this.texts[t].delay, this.draw(s, e), (null == this.texts[t].queued || this.texts[t].queued) && (this.prevDuration += e);
        }
      }, Vara.prototype.draw = function (t, e) {
        var s = this;
        if (null == this.drawnCharacters[t]) return console.warn("ID:`" + t + "` not found. Animation skipped"), void console.trace();
        var i = void 0 === e ? this.texts[this.drawnCharacters[t].index].duration : e,
            r = this.getSectionPathLength(t),
            n = 0,
            a = null == this.drawnCharacters[t].queued || this.drawnCharacters[t].queued ? this.prevDuration : 1;
        setTimeout(function () {
          s.drawnCharacters[t].characters.forEach(function (t) {
            t.querySelectorAll("path").forEach(function (t) {
              var e = parseFloat(t.style.strokeDashoffset) / r * i;
              t.style.opacity = 1, s.animate(t, e, n, 0), n += e;
            });
          }), setTimeout(function () {
            s.animationEndF && s.animationEndF(t, s.drawnCharacters[t]);
          }, n);
        }, a);
      }, Vara.prototype.get = function (t) {
        return null == this.drawnCharacters[t] ? (console.warn("ID:`" + t + "` not found."), console.trace(), !1) : this.drawnCharacters[t];
      }, Vara.prototype.animate = function (t, e, s, i) {
        var r = this;
        i = Number(i) || 0, setTimeout(function () {
          var s = new Date().getTime(),
              n = parseFloat(t.style.strokeDashoffset),
              a = setInterval(function () {
            var r = Math.min(1, (new Date().getTime() - s) / e);
            t.style.strokeDashoffset = n + r * (i - n), 1 == r && clearInterval(a);
          }, r.frameRate);
        }, s);
      }, Vara.prototype.getSectionPathLength = function (t) {
        var e = this;
        return this.totalPathLength = 0, this.drawnCharacters[t].characters.forEach(function (t) {
          t.querySelectorAll("path").forEach(function (t) {
            e.totalPathLength += t.getTotalLength();
          });
        }), this.totalPathLength;
      }, Vara.prototype.analyseWidth = function () {
        var t = 0,
            e = this.svg.getBoundingClientRect().width,
            s = [],
            i = null == this.characters[97] ? Object.keys(this.characters)[Math.round(Math.random() * this.characters.length)] : "97",
            r = document.createElement("span");
        this.element.appendChild(r), r.style.opacity = 0, r.style.position = "absolute", r.innerHTML = String.fromCharCode(i);
        var n = document.createElement("span");
        this.element.appendChild(n), n.style.opacity = 0, n.style.position = "absolute", n.innerHTML = " . ";

        for (var a = 0; a < this.texts.length; a++) {
          var h,
              o = this.texts[a];
          h = "string" == typeof o.text ? [o.text] : o.text, this.texts[a].text = h, this.texts[a].letterSpacing = null == this.texts[a].letterSpacing ? null == this.properties.letterSpacing ? 0 : this.properties.letterSpacing : this.texts[a].letterSpacing, this.texts[a].strokeWidth = null == this.texts[a].strokeWidth ? null == this.properties.strokeWidth ? this.contents.p.bsw : this.properties.strokeWidth : this.texts[a].strokeWidth;
          var l = null == this.texts[a].breakWord ? null != this.properties.breakWord && this.properties.breakWord : this.texts[a].breakWord,
              c = null == o.fontSize ? null == this.properties.fontSize ? this.fontSize : this.properties.fontSize : o.fontSize;
          r.style.fontSize = c + "px", n.style.fontSize = c + "px";
          var p = r.getBoundingClientRect().width / this.characters[i].w;
          this.texts[a].minWidth = n.getBoundingClientRect().width;
          var u,
              d = null == this.texts[a].width ? e : this.texts[a].width,
              x = [],
              f = null == this.texts[a].x ? 0 : this.texts[a].x;
          this.trueFontSize = c, this.texts[a].fontSize = p;

          for (var g = 0; g < h.length; g++) {
            for (var y = f * p, m = [], v = h[g], w = 0, C = 0; C < v.length; C++) {
              if (null != this.characters[v[C].charCodeAt(0)] ? ((u = this.characters[v[C].charCodeAt(0)].w * p) < this.texts[a].minWidth && (u += p * (this.texts[a].minWidth - this.characters[v[C].charCodeAt(0)].w) / 2), u += this.texts[a].letterSpacing) : " " == v[C] ? (u = this.space.w * p, w = y) : u = this.questionMark.w * p + this.texts[a].letterSpacing, y + (u += this.texts[a].strokeWidth * p) >= d) {
                0 == w && (l = !0);
                var S = C;
                " " == v[C] || l || (S = v.slice(0, S + 1).search(/\S+$/)), m.push(S), y = f * p + y - w;
              } else t += u, y += u;
            }

            x.push(m);
          }

          s.push(x);
        }

        return r.parentNode.removeChild(r), n.parentNode.removeChild(n), {
          width: t,
          breakPoints: s
        };
      }, Vara.prototype.setPosition = function (t, e, s) {
        (s = null == s ? {
          x: !1,
          y: !1
        } : s).x = null != s.x && s.x, s.y = null != s.y && s.y;
        var i = t.transform.baseVal.consolidate().matrix,
            r = i.e,
            n = i.f;
        null != e.x && (s.x ? r += e.x : r = e.x), null != e.y && (s.y ? n += e.y : n = e.y - t.getBBox().y);
        var a = this.svg.createSVGTransform();
        a.setTranslate(r, n), t.transform.baseVal.replaceItem(a, 0);
      }, true ? module.exports = Vara : undefined;
      /***/
    },

    /***/
    "./src/app/Shared/Directives/EmailStringValidator/email-string-validator.directive.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/Shared/Directives/EmailStringValidator/email-string-validator.directive.ts ***!
      \********************************************************************************************/

    /*! exports provided: EmailStringValidatorDirective */

    /***/
    function srcAppSharedDirectivesEmailStringValidatorEmailStringValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailStringValidatorDirective", function () {
        return EmailStringValidatorDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Services/Toast/toast.service */
      "./src/app/Shared/Services/Toast/toast.service.ts");

      var EmailStringValidatorDirective = /*#__PURE__*/function () {
        function EmailStringValidatorDirective(toast) {
          _classCallCheck(this, EmailStringValidatorDirective);

          this.toast = toast;
          this.string = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        }

        _createClass(EmailStringValidatorDirective, [{
          key: "emailValidation",
          value: function emailValidation(event) {
            if (!this.string.test(event.target['value'])) {
              if (this.control) {
                this.control.setErrors({
                  'invalid': true
                });
              }

              this.toast.simpletoast('Kindly Provide A Valid Email ID');
            } else {
              if (this.control) this.control.setErrors(null);
            }
          }
        }]);

        return EmailStringValidatorDirective;
      }();

      EmailStringValidatorDirective.ctorParameters = function () {
        return [{
          type: _Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
        }];
      };

      EmailStringValidatorDirective.propDecorators = {
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['formControl']
        }],
        emailValidation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['change', ["$event"]]
        }]
      };
      EmailStringValidatorDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appEmailStringValidator]'
      })], EmailStringValidatorDirective);
      /***/
    },

    /***/
    "./src/app/Shared/Services/Loader/loading.service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/Shared/Services/Loader/loading.service.ts ***!
      \***********************************************************/

    /*! exports provided: LoadingService */

    /***/
    function srcAppSharedServicesLoaderLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
        }

        _createClass(LoadingService, [{
          key: "create",
          value: function create() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        spinner: 'crescent',
                        duration: 2000
                      });

                    case 2:
                      this.loader = _context.sent;
                      return _context.abrupt("return", this.loader.present());

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loader.dismiss();

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoadingService);
      /***/
    },

    /***/
    "./src/app/pages/login/components/input/input.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/login/components/input/input.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginComponentsInputInputComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-input {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/login/components/input/input.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/login/components/input/input.component.ts ***!
      \*****************************************************************/

    /*! exports provided: InputComponent */

    /***/
    function srcAppPagesLoginComponentsInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
        return InputComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var InputComponent = /*#__PURE__*/function () {
        function InputComponent() {
          _classCallCheck(this, InputComponent);
        }

        _createClass(InputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.value) this.control.setValue(this.value);
          }
        }]);

        return InputComponent;
      }();

      InputComponent.ctorParameters = function () {
        return [];
      };

      InputComponent.propDecorators = {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['placeholder']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['value']
        }],
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['control']
        }]
      };
      InputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./input.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/components/input/input.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./input.component.scss */
        "./src/app/pages/login/components/input/input.component.scss"))["default"]]
      })], InputComponent);
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/input/input.component */
      "./src/app/pages/login/components/input/input.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_app_Shared_Directives_EmailStringValidator_email_string_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/Shared/Directives/EmailStringValidator/email-string-validator.directive */
      "./src/app/Shared/Directives/EmailStringValidator/email-string-validator.directive.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_1__["InputComponent"], src_app_Shared_Directives_EmailStringValidator_email_string_validator_directive__WEBPACK_IMPORTED_MODULE_9__["EmailStringValidatorDirective"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loginPage {\n  --background: url('background5.png') 0 0/100% 100% no-repeat;\n}\n.loginPage .section_one {\n  height: 60%;\n  position: relative;\n}\n.loginPage .section_one .parent_text_box {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n}\n.loginPage .section_one .parent_text_box .text {\n  font-size: 5.5em;\n  font-family: \"amstagram\";\n  color: #ffc409;\n  padding-left: 30%;\n  width: 86%;\n  height: 100px;\n}\n.loginPage .login-form {\n  height: 40%;\n  width: 50%;\n  display: block;\n  margin-left: 25%;\n}\n.loginPage .resend-otp {\n  margin-top: 42%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNERBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdaO0FBS1k7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFIaEI7QUFRSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTlI7QUFRSTtFQUNJLGVBQUE7QUFOUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpblBhZ2V7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZF9pbWFnZXMvYmFja2dyb3VuZDUucG5nXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgIC5zZWN0aW9uX29uZXtcbiAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnBhcmVudF90ZXh0X2JveHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIC50ZXh0e1xuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogNS41ZW07XG4gICAgICAgICAgICAvLyAgICAgZm9udC1mYW1pbHk6ICdhbXN0YWdyYW0nO1xuICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjZmZjNDA5O1xuICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUuNWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnYW1zdGFncmFtJztcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmYzQwOTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogODYlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmxvZ2luLWZvcm17XG4gICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICB9XG4gICAgLnJlc2VuZC1vdHB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQyJTtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Shared_Services_Authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../Shared/Services/Authentication/auth.service */
      "./src/app/Shared/Services/Authentication/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_Shared_Services_Loader_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Shared/Services/Loader/loading.service */
      "./src/app/Shared/Services/Loader/loading.service.ts");
      /* harmony import */


      var src_app_Shared_Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/Shared/Services/Toast/toast.service */
      "./src/app/Shared/Services/Toast/toast.service.ts");
      /* harmony import */


      var vara__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! vara */
      "./node_modules/vara/src/vara.min.js");
      /* harmony import */


      var vara__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vara__WEBPACK_IMPORTED_MODULE_7__);

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(auth, router, loader, toast) {
          _classCallCheck(this, LoginPage);

          this.auth = auth;
          this.router = router;
          this.loader = loader;
          this.toast = toast; // ViewChild(textBox): any;

          this.loginStage = 1;
          this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
          this.otp = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('login');
            var vara = new vara__WEBPACK_IMPORTED_MODULE_7__("#text_box", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json", [{
              text: "Penpal Letters",
              fontSize: 40,
              strokeWidth: 2.5,
              color: "#fff700",
              id: "",
              duration: 2000,
              textAlign: "left",
              x: 10,
              y: 10,
              fromCurrentPosition: {
                x: true,
                y: true
              },
              autoAnimation: true,
              queued: true,
              delay: 0,
              letterSpacing: 0
            }], {
              // The options given below will be applicable to every text created,
              // however they will not override the options set above.
              // They will work as secondary options.
              fontSize: 15,
              strokeWidth: .5,
              color: "black",
              duration: 2000,
              textAlign: "left",
              autoAnimation: true,
              queued: true,
              letterSpacing: 0
            });
          }
        }, {
          key: "login",
          value: function login() {
            //   if (this.loginStage == 1) {
            //     this.randomOtp = Math.round(Math.random() * 1000);
            //     console.log(this.randomOtp);
            //     // should only send OTP
            //     if(this.email.valid){
            //       this.authenticate()
            //     }else{
            //       this.toast.simpletoast('Kindly Provide A Valid Email ID')
            //     }
            //   } else {
            //     if (this.otp.value == this.randomOtp) {
            //       this.auth.authenticate();
            //     } else {
            //       this.toast.simpletoast('Invalid OTP')
            //     }
            //   }
            //   return
            this.router.navigateByUrl('profile-management');
          }
        }, {
          key: "authenticate",
          value: function authenticate() {
            var _this = this;

            this.loader.create();
            this.auth.login(this.email.value, this.randomOtp).then(function (user) {
              _this.loader.dismiss();

              _this.user = user;
              _this.loginStage = 2;
            });
          }
        }, {
          key: "resendOtp",
          value: function resendOtp() {
            this.randomOtp = Math.round(Math.random() * 1000);
            this.authenticate();
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _Shared_Services_Authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_Shared_Services_Loader_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: src_app_Shared_Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map
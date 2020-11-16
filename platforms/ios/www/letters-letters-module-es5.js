(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["letters-letters-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letters/letters.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letters/letters.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLettersLettersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" *ngIf=\"router.url == '/friends/letters'\">\n  <ion-toolbar (click)=\"viewProfile()\">\n    <ion-title>\n      Letter's By: Arvey\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"letter-outlet\">\n      <div class=\"letter_view\" [innerHtml]=\"letters[0].message | safeHtml\"></div>\n      <ion-fab class=\"view\" (click)=\"viewLetter(letters[0])\">\n        <ion-fab-button>\n          <ion-icon name=\"eye\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </div>\n  <div class=\"letters_list slide-over\">\n    <ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled=\"false\">\n      <ion-reorder *ngFor=\"let letter of letters; let i = index\" [ngClass]=\"i == 0 ? 'top_card': ''\">\n        <div [ngClass]=\"i == 0 ? '' : i%2 == 0 ? 'transform1' : i%3 == 0 ? 'transform2' : 'transform3'\">\n          <ion-card class=\"letter_card\">\n            <ion-item>\n              <ion-label>\n                <ion-row><ion-col class=\"ion-text-start sentBy\">Sent By: {{ letter.from.name }}</ion-col>\n                    <ion-col class=\"ion-text-end\">{{ letter.read ? 'Read' : 'Unread' }}</ion-col></ion-row>\n                <div [innerHtml]=\"letter.message | safeHtml\">\n                  </div>\n              </ion-label>\n            </ion-item>\n          </ion-card>\n        </div>\n      </ion-reorder>\n    \n    </ion-reorder-group>\n  </div>\n  <ion-fab class=\"write-letter\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"writeLetter()\">\n    <ion-fab-button>\n      <ion-icon name=\"pencil-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Shared/Pipes/SafeHtmlPipe/safe-html-pipe.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/Shared/Pipes/SafeHtmlPipe/safe-html-pipe.module.ts ***!
      \********************************************************************/

    /*! exports provided: SafeHtmlPipeModule */

    /***/
    function srcAppSharedPipesSafeHtmlPipeSafeHtmlPipeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeHtmlPipeModule", function () {
        return SafeHtmlPipeModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./safe-html.pipe */
      "./src/app/Shared/Pipes/SafeHtmlPipe/safe-html.pipe.ts");

      var SafeHtmlPipeModule = function SafeHtmlPipeModule() {
        _classCallCheck(this, SafeHtmlPipeModule);
      };

      SafeHtmlPipeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeHtmlPipe"]],
        exports: [_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeHtmlPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], SafeHtmlPipeModule);
      /***/
    },

    /***/
    "./src/app/Shared/Pipes/SafeHtmlPipe/safe-html.pipe.ts":
    /*!*************************************************************!*\
      !*** ./src/app/Shared/Pipes/SafeHtmlPipe/safe-html.pipe.ts ***!
      \*************************************************************/

    /*! exports provided: SafeHtmlPipe */

    /***/
    function srcAppSharedPipesSafeHtmlPipeSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
        return SafeHtmlPipe;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var SafeHtmlPipe = /*#__PURE__*/function () {
        function SafeHtmlPipe(sanitizer) {
          _classCallCheck(this, SafeHtmlPipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafeHtmlPipe, [{
          key: "transform",
          value: function transform(value) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
          }
        }]);

        return SafeHtmlPipe;
      }();

      SafeHtmlPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafeHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeHtml'
      })], SafeHtmlPipe);
      /***/
    },

    /***/
    "./src/app/pages/letters/letters-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/letters/letters-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: LettersPageRoutingModule */

    /***/
    function srcAppPagesLettersLettersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LettersPageRoutingModule", function () {
        return LettersPageRoutingModule;
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


      var _letters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./letters.page */
      "./src/app/pages/letters/letters.page.ts");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _letters_page__WEBPACK_IMPORTED_MODULE_3__["LettersPage"]
        }, {
          path: 'view',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | view-letter-view-letter-module */
            "view-letter-view-letter-module").then(__webpack_require__.bind(null,
            /*! ./view-letter/view-letter.module */
            "./src/app/pages/letters/view-letter/view-letter.module.ts")).then(function (m) {
              return m.ViewLetterPageModule;
            });
          }
        }, {
          path: 'write',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | write-letter-write-letter-module */
            "write-letter-write-letter-module").then(__webpack_require__.bind(null,
            /*! ./write-letter/write-letter.module */
            "./src/app/pages/letters/write-letter/write-letter.module.ts")).then(function (m) {
              return m.WriteLetterPageModule;
            });
          }
        }]
      }];

      var LettersPageRoutingModule = function LettersPageRoutingModule() {
        _classCallCheck(this, LettersPageRoutingModule);
      };

      LettersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LettersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/letters/letters.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/letters/letters.module.ts ***!
      \*************************************************/

    /*! exports provided: LettersPageModule */

    /***/
    function srcAppPagesLettersLettersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LettersPageModule", function () {
        return LettersPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _letters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./letters-routing.module */
      "./src/app/pages/letters/letters-routing.module.ts");
      /* harmony import */


      var _letters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./letters.page */
      "./src/app/pages/letters/letters.page.ts");
      /* harmony import */


      var src_app_Shared_Pipes_SafeHtmlPipe_safe_html_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/Shared/Pipes/SafeHtmlPipe/safe-html-pipe.module */
      "./src/app/Shared/Pipes/SafeHtmlPipe/safe-html-pipe.module.ts");

      var LettersPageModule = function LettersPageModule() {
        _classCallCheck(this, LettersPageModule);
      };

      LettersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _letters_routing_module__WEBPACK_IMPORTED_MODULE_5__["LettersPageRoutingModule"], src_app_Shared_Pipes_SafeHtmlPipe_safe_html_pipe_module__WEBPACK_IMPORTED_MODULE_7__["SafeHtmlPipeModule"]],
        declarations: [_letters_page__WEBPACK_IMPORTED_MODULE_6__["LettersPage"]]
      })], LettersPageModule);
      /***/
    },

    /***/
    "./src/app/pages/letters/letters.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/letters/letters.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLettersLettersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".letter-outlet {\n  padding: 35px;\n  color: #000;\n  background: #fff;\n  background: url('letter_bg.jpg') 0 0/100% 100% no-repeat;\n}\n.letter-outlet .letter_view {\n  max-height: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.letter-outlet .view {\n  font-size: 4em;\n  position: absolute;\n  right: 30px;\n  top: 150px;\n}\n.letter-outlet .view ion-fab-button {\n  --background: var(--ion-color-dark) !important;\n}\n.letters_list {\n  height: 100%;\n  padding: 10px;\n  position: relative;\n  top: -10px;\n  background: var(--ion-color-dark);\n}\n.letters_list .top_card {\n  margin-bottom: 150px;\n}\n.letters_list ion-reorder {\n  height: 50px;\n}\n.letters_list ion-reorder ion-card {\n  box-shadow: 0px 0px 8px 0px #404040;\n  border-radius: 5px;\n}\n.letters_list ion-reorder ion-card ion-item {\n  --background: url('letter_bg.jpg') 0 0/100% 100% no-repeat;\n  --color: #000;\n}\n.letters_list ion-reorder ion-card ion-item ion-label {\n  height: 140px;\n  white-space: break-spaces;\n}\n.letters_list ion-reorder ion-card ion-item ion-label .sentBy {\n  font-weight: 600;\n}\n.letters_list ion-reorder .transform1 {\n  transform: rotate(-2deg);\n}\n.letters_list ion-reorder .transform2 {\n  transform: rotate(2deg);\n}\n.letters_list ion-reorder .transform3 {\n  transform: rotate(5deg);\n}\n.write-letter ion-fab-button {\n  --background: var(--ion-color-dark) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGV0dGVycy9sZXR0ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3REFBQTtBQUNKO0FBQUk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQUFJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFUjtBQURRO0VBQ0ksOENBQUE7QUFHWjtBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtBQUVKO0FBREk7RUFDSSxvQkFBQTtBQUdSO0FBREk7RUFDSSxZQUFBO0FBR1I7QUFGUTtFQUNJLG1DQUFBO0VBQ0Esa0JBQUE7QUFJWjtBQUhZO0VBRUksMERBQUE7RUFDQSxhQUFBO0FBSWhCO0FBSGdCO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBS3BCO0FBSm9CO0VBQ0ksZ0JBQUE7QUFNeEI7QUFEUTtFQUNJLHdCQUFBO0FBR1o7QUFEUTtFQUNJLHVCQUFBO0FBR1o7QUFEUTtFQUNJLHVCQUFBO0FBR1o7QUFFSTtFQUNJLDhDQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sZXR0ZXJzL2xldHRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldHRlci1vdXRsZXR7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kX2ltYWdlcy9sZXR0ZXJfYmcuanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgIC5sZXR0ZXJfdmlld3tcbiAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbiAgICAudmlld3tcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgIHRvcDogMTUwcHg7XG4gICAgICAgIGlvbi1mYWItYnV0dG9ue1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5sZXR0ZXJzX2xpc3R7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC50b3BfY2FyZHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gICAgfVxuICAgIGlvbi1yZW9yZGVye1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGlvbi1jYXJke1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4ICM0MDQwNDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICAgICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZF9pbWFnZXMvbGV0dGVyX2JnLmpwZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAtLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgICAgICAgICAgICAgICAgICAgLnNlbnRCeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRyYW5zZm9ybTF7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYW5zZm9ybTJ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAudHJhbnNmb3JtM3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAgICAgICB9XG4gICAgfVxufVxuLndyaXRlLWxldHRlcntcbiAgICBpb24tZmFiLWJ1dHRvbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/letters/letters.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/letters/letters.page.ts ***!
      \***********************************************/

    /*! exports provided: LettersPage */

    /***/
    function srcAppPagesLettersLettersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LettersPage", function () {
        return LettersPage;
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

      var LettersPage = /*#__PURE__*/function () {
        function LettersPage(router) {
          _classCallCheck(this, LettersPage);

          this.router = router;
          this.items = [1, 2, 3, 4, 5];
          this.letters = [{
            "read": true,
            "message": "<div style='color: red'>1 Hey bro!<br>How are you man! Been a while since I wrote to you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co </div>",
            "from": {
              "id": "2346576879809d7f87e0g1",
              "handle": "Me",
              "name": "Someone",
              "mobile": "9902807002",
              "privacy": {
                "show_name": true,
                "display_pic": true,
                "show_interests": true,
                "show_description": true
              }
            }
          }, {
            "read": false,
            "message": "<div>2 Hey bro!<br>How are you man! Been a while since I wrote to you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</div>",
            "from": {
              "id": "2346576879809d7f87e0g2",
              "handle": "Me",
              "name": "Beedu",
              "mobile": "9902807002",
              "privacy": {
                "show_name": true,
                "display_pic": true,
                "show_interests": true,
                "show_description": true
              }
            }
          }, {
            "read": true,
            "message": "<div>3 Hey bro!<br>How are you man! Been a while since I wrote to you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</div>",
            "from": {
              "id": "2346576879809d7f87e0g3",
              "handle": "Me",
              "name": "This Guy",
              "mobile": "9902807002",
              "privacy": {
                "show_name": true,
                "display_pic": true,
                "show_interests": true,
                "show_description": true
              }
            }
          }];
          console.log(this.letters);
        }

        _createClass(LettersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.router.url);
          }
        }, {
          key: "doReorder",
          value: function doReorder(ev) {
            // Before complete is called with the items they will remain in the
            // order before the drag
            console.log('Before complete', this.letters); // Finish the reorder and position the item in the DOM based on
            // where the gesture ended. Update the items variable to the
            // new order of items

            this.letters = ev.detail.complete(this.letters); // After complete is called the items will be in the new order

            console.log('After complete', this.letters);
          }
        }, {
          key: "viewLetter",
          value: function viewLetter(letter) {
            this.router.navigateByUrl('/home/letters/view?id=' + letter);
          }
        }, {
          key: "writeLetter",
          value: function writeLetter() {
            this.router.navigateByUrl('/home/letters/write');
          }
        }, {
          key: "viewProfile",
          value: function viewProfile() {
            this.router.navigateByUrl('view-profile');
          }
        }]);

        return LettersPage;
      }();

      LettersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LettersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-letters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./letters.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letters/letters.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./letters.page.scss */
        "./src/app/pages/letters/letters.page.scss"))["default"]]
      })], LettersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=letters-letters-module-es5.js.map
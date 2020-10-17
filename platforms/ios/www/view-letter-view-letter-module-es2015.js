(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-letter-view-letter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letters/view-letter/view-letter.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letters/view-letter/view-letter.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Sent By: </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"letter\">\n    <div [innerHTML]=\"message | safeHtml\"></div>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/letters/view-letter/view-letter-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/letters/view-letter/view-letter-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ViewLetterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLetterPageRoutingModule", function() { return ViewLetterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_letter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-letter.page */ "./src/app/pages/letters/view-letter/view-letter.page.ts");




const routes = [
    {
        path: '',
        component: _view_letter_page__WEBPACK_IMPORTED_MODULE_3__["ViewLetterPage"]
    }
];
let ViewLetterPageRoutingModule = class ViewLetterPageRoutingModule {
};
ViewLetterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewLetterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/letters/view-letter/view-letter.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/letters/view-letter/view-letter.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewLetterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLetterPageModule", function() { return ViewLetterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_letter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-letter-routing.module */ "./src/app/pages/letters/view-letter/view-letter-routing.module.ts");
/* harmony import */ var _view_letter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-letter.page */ "./src/app/pages/letters/view-letter/view-letter.page.ts");
/* harmony import */ var src_app_Shared_Pipes_SafeHtmlPipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Shared/Pipes/SafeHtmlPipe/safe-html.pipe */ "./src/app/Shared/Pipes/SafeHtmlPipe/safe-html.pipe.ts");








let ViewLetterPageModule = class ViewLetterPageModule {
};
ViewLetterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_letter_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewLetterPageRoutingModule"]
        ],
        declarations: [
            _view_letter_page__WEBPACK_IMPORTED_MODULE_6__["ViewLetterPage"],
            src_app_Shared_Pipes_SafeHtmlPipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeHtmlPipe"]
        ]
    })
], ViewLetterPageModule);



/***/ }),

/***/ "./src/app/pages/letters/view-letter/view-letter.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/letters/view-letter/view-letter.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".letter {\n  padding: 20px;\n  margin: 30px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px 0px #c3c3c3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGV0dGVycy92aWV3LWxldHRlci92aWV3LWxldHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xldHRlcnMvdmlldy1sZXR0ZXIvdmlldy1sZXR0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldHRlcntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCAjYzNjM2MzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/letters/view-letter/view-letter.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/letters/view-letter/view-letter.page.ts ***!
  \***************************************************************/
/*! exports provided: ViewLetterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLetterPage", function() { return ViewLetterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ViewLetterPage = class ViewLetterPage {
    constructor() {
        this.sentBy = 'Arvey';
        this.message = "<div style='color: red'>1 Hey bro!<br>How are you man! Been a while since I wrote to you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co </div>";
    }
    ngOnInit() {
    }
};
ViewLetterPage.ctorParameters = () => [];
ViewLetterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-letter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-letter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letters/view-letter/view-letter.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-letter.page.scss */ "./src/app/pages/letters/view-letter/view-letter.page.scss")).default]
    })
], ViewLetterPage);



/***/ })

}]);
//# sourceMappingURL=view-letter-view-letter-module-es2015.js.map
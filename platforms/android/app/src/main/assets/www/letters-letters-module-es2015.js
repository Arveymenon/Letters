(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["letters-letters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letters/letters.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letters/letters.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"letter-outlet\">\n      <div class=\"letter_view\" [innerHtml]=\"letters[0].message\"></div>\n      <ion-fab class=\"view\" (click)=\"viewLetter(letters[0])\">\n        <ion-fab-button>\n          <ion-icon name=\"eye\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </div>\n  <div class=\"letters_list slide-over\">\n    <ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled=\"false\">\n      <ion-reorder *ngFor=\"let letter of letters; let i = index\" [ngClass]=\"i == 0 ? 'top_card': ''\">\n        <div [ngClass]=\"i == 0 ? '' : i%2 == 0 ? 'transform1' : i%3 == 0 ? 'transform2' : 'transform3'\">\n          <ion-card class=\"letter_card\">\n            <ion-item>\n              <ion-label [innerHtml]=\"letter.message\"></ion-label>\n            </ion-item>\n          </ion-card>\n        </div>\n      </ion-reorder>\n    \n    </ion-reorder-group>\n  </div>\n  <ion-button (click)=\"logout()\">Logout</ion-button>\n  <ion-fab class=\"write-letter\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"writeLetter()\">\n    <ion-fab-button>\n      <ion-icon name=\"pencil-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/letters/letters-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/letters/letters-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LettersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersPageRoutingModule", function() { return LettersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _letters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./letters.page */ "./src/app/pages/letters/letters.page.ts");




const routes = [
    {
        path: '',
        children: [
            { path: '', component: _letters_page__WEBPACK_IMPORTED_MODULE_3__["LettersPage"] },
            { path: 'view',
                loadChildren: () => __webpack_require__.e(/*! import() | view-letter-view-letter-module */ "view-letter-view-letter-module").then(__webpack_require__.bind(null, /*! ./view-letter/view-letter.module */ "./src/app/pages/letters/view-letter/view-letter.module.ts")).then(m => m.ViewLetterPageModule)
            },
            { path: 'write',
                loadChildren: () => __webpack_require__.e(/*! import() | write-letter-write-letter-module */ "write-letter-write-letter-module").then(__webpack_require__.bind(null, /*! ./write-letter/write-letter.module */ "./src/app/pages/letters/write-letter/write-letter.module.ts")).then(m => m.WriteLetterPageModule)
            }
        ]
    }
];
let LettersPageRoutingModule = class LettersPageRoutingModule {
};
LettersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LettersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/letters/letters.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/letters/letters.module.ts ***!
  \*************************************************/
/*! exports provided: LettersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersPageModule", function() { return LettersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _letters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./letters-routing.module */ "./src/app/pages/letters/letters-routing.module.ts");
/* harmony import */ var _letters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./letters.page */ "./src/app/pages/letters/letters.page.ts");







let LettersPageModule = class LettersPageModule {
};
LettersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _letters_routing_module__WEBPACK_IMPORTED_MODULE_5__["LettersPageRoutingModule"]
        ],
        declarations: [_letters_page__WEBPACK_IMPORTED_MODULE_6__["LettersPage"]]
    })
], LettersPageModule);



/***/ }),

/***/ "./src/app/pages/letters/letters.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/letters/letters.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".letter-outlet {\n  padding: 35px;\n}\n.letter-outlet .letter_view {\n  max-height: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.letter-outlet .view {\n  font-size: 4em;\n  position: absolute;\n  right: 30px;\n  top: 150px;\n}\n.letter-outlet .view ion-fab-button {\n  --background: var(--ion-color-warning) !important;\n}\n.letters_list {\n  height: 100%;\n  padding: 10px;\n}\n.letters_list .top_card {\n  margin-bottom: 150px;\n}\n.letters_list ion-reorder {\n  height: 50px;\n}\n.letters_list ion-reorder ion-card {\n  border: 3px solid #5d5d5d8c !important;\n}\n.letters_list ion-reorder ion-card ion-label {\n  height: 140px;\n  white-space: break-spaces;\n}\n.letters_list ion-reorder .letter_card {\n  border: 3px solid #fff;\n}\n.letters_list ion-reorder .transform1 {\n  transform: rotate(-2deg);\n}\n.letters_list ion-reorder .transform2 {\n  transform: rotate(2deg);\n}\n.letters_list ion-reorder .transform3 {\n  transform: rotate(5deg);\n}\n.write-letter ion-fab-button {\n  --background: var(--ion-color-warning) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGV0dGVycy9sZXR0ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRVI7QUFBSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRVI7QUFEUTtFQUNJLGlEQUFBO0FBR1o7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRUo7QUFESTtFQUNJLG9CQUFBO0FBR1I7QUFESTtFQUNJLFlBQUE7QUFHUjtBQUZRO0VBQ0ksc0NBQUE7QUFJWjtBQUhZO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBS2hCO0FBRlE7RUFDSSxzQkFBQTtBQUlaO0FBRlE7RUFDSSx3QkFBQTtBQUlaO0FBRlE7RUFDSSx1QkFBQTtBQUlaO0FBRlE7RUFDSSx1QkFBQTtBQUlaO0FBQ0k7RUFDSSxpREFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGV0dGVycy9sZXR0ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXR0ZXItb3V0bGV0e1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgLmxldHRlcl92aWV3e1xuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICAgIC52aWV3e1xuICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgdG9wOiAxNTBweDtcbiAgICAgICAgaW9uLWZhYi1idXR0b257XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuLmxldHRlcnNfbGlzdHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAudG9wX2NhcmR7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xuICAgIH1cbiAgICBpb24tcmVvcmRlcntcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM1ZDVkNWQ4YyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGV0dGVyX2NhcmR7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC50cmFuc2Zvcm0xe1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICAgICAgICB9XG4gICAgICAgIC50cmFuc2Zvcm0ye1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYW5zZm9ybTN7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi53cml0ZS1sZXR0ZXJ7XG4gICAgaW9uLWZhYi1idXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/letters/letters.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/letters/letters.page.ts ***!
  \***********************************************/
/*! exports provided: LettersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersPage", function() { return LettersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Shared_Services_Authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Services/Authentication/auth.service */ "./src/app/Shared/Services/Authentication/auth.service.ts");




let LettersPage = class LettersPage {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.items = [1, 2, 3, 4, 5];
        this.letters = [
            {
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
            },
            {
                "message": "<div>2 Hey bro!<br>How are you man! Been a while since I wrote to you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</div>",
                "from": {
                    "id": "2346576879809d7f87e0g2",
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
            },
            {
                "message": "<div>3 Hey bro!<br>How are you man! Been a while since I wrote to you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</div>",
                "from": {
                    "id": "2346576879809d7f87e0g3",
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
            }
        ];
        console.log(this.letters);
    }
    ngOnInit() { }
    doReorder(ev) {
        // Before complete is called with the items they will remain in the
        // order before the drag
        console.log('Before complete', this.letters);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. Update the items variable to the
        // new order of items
        this.letters = ev.detail.complete(this.letters);
        // After complete is called the items will be in the new order
        console.log('After complete', this.letters);
    }
    viewLetter(letter) {
        this.router.navigateByUrl('/home/letters/view?id=' + letter);
    }
    writeLetter() {
        this.router.navigateByUrl('/home/letters/write');
    }
    logout() {
        this.auth.logout();
    }
};
LettersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_Shared_Services_Authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LettersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-letters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./letters.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letters/letters.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./letters.page.scss */ "./src/app/pages/letters/letters.page.scss")).default]
    })
], LettersPage);



/***/ })

}]);
//# sourceMappingURL=letters-letters-module-es2015.js.map
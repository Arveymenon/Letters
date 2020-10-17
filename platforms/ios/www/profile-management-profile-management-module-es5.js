(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-management-profile-management-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/date-picker/date-picker.component.html":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/date-picker/date-picker.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileManagementComponentsInputComponentsDatePickerDatePickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid>\n  <ion-row>\n    <ion-col size=\"1\" class=\"padding-none\">\n      <ion-icon class=\"input_icon\" [name]=\"icon\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"11\" class=\"padding-none\">\n        <ion-datetime [placeholder]=\"placeholder\" display-timezone=\"utc\" [formControl]=\"control\"></ion-datetime>\n      </ion-col>\n    </ion-row>\n</ion-grid>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/description/description.component.html":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/description/description.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileManagementComponentsInputComponentsDescriptionDescriptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <ion-textarea rows=\"5\" [placeholder]=\"placeholder\" [formControl]=\"control\"></ion-textarea>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/image-input/image-input.component.html":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/image-input/image-input.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileManagementComponentsInputComponentsImageInputImageInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"image-box\">\n\n  <!-- Attachment Icon -->\n  <ion-icon class=\"attach_icon\" name=\"attach-outline\"></ion-icon>\n\n  <!-- Existing Image -->\n  <div class=\"image\" *ngIf=\"image\" (click)='uploadImageOption()'>\n      <img [src]=\"image\">\n    </div>\n    <!-- Input Image -->\n  <div class=\"image\" *ngIf=\"!image\" (click)='uploadImageOption()'>\n      <input type='file' class=\"hidden\">\n      <ion-icon name='camera' class=\"camera-icon\"></ion-icon>\n      <div class=\"add-icon-parent\">\n          <!-- <ion-icon name=\"add-sharp\" class=\"add-icon\"></ion-icon> -->\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/input/input.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/input/input.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileManagementComponentsInputComponentsInputInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid>\n  <ion-row>\n    <ion-col size=\"1\" class=\"padding-none\">\n        <ion-icon class=\"input_icon\" [name]=\"icon\"></ion-icon>\n      </ion-col>\n    <ion-col size=\"11\" class=\"padding-none\">\n        <ion-input [placeholder]=\"placeholder\" [formControl]=\"control\"></ion-input>\n      </ion-col>\n    </ion-row>\n</ion-grid>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/select/select.component.html":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/select/select.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileManagementComponentsInputComponentsSelectSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-select [multiple]='multiple' (ionChange)=\"change($event)\" [placeholder]=\"placeholder\" [formControl]=\"control\">\n  <ion-select-option *ngFor=\"let option of options\" [value]=\"option[key]\">{{ option[value] }}</ion-select-option>\n</ion-select>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/toggle/toggle.component.html":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/toggle/toggle.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileManagementComponentsInputComponentsToggleToggleComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item lines=\"none\">\n  <ion-label>{{ label }}</ion-label>\n  <ion-toggle color=\"warning\" [formControl]=\"control\"></ion-toggle>\n</ion-item>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/profile-details/profile-details.component.html":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/profile-details/profile-details.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileManagementComponentsProfileDetailsProfileDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-description placeholder=\"I Am Awesome\" [control]=\"description\"></app-description>\n<app-select placeholder=\"Interest\" multiple=\"true\"\n [control]=\"selectControl\" [options]=\"interests\" [key]=\"key\" [value]=\"value\">\n</app-select>\n\n  <div>\n   <p class=\"bold\">Privacy Settings</p>\n  <app-toggle [control]=\"displayPicture\" label=\"Display Picture\"></app-toggle>\n  <app-toggle [control]=\"show_description\" label=\"Description\"></app-toggle>\n  <app-toggle [control]=\"dob\" label=\"Age\"></app-toggle>\n  <app-toggle [control]=\"showInterests\" label=\"Interest\"></app-toggle>\n  </div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/user-details/user-details.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/user-details/user-details.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileManagementComponentsUserDetailsUserDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-content> -->\n  <app-input (change)=\"checkIfExists(2)\" icon=\"at-outline\" placeholder=\"Handle\" [control]='handle'></app-input>\n  <app-input icon=\"person-outline\" placeholder=\"Name\" [control]='name'></app-input>\n  <app-input (change)=\"checkIfExists(1)\" icon=\"phone-portrait-outline\" placeholder=\"Mobile\" [control]='mobile'></app-input>\n  <app-date-picker icon=\"calendar-outline\" placeholder=\"Date Of Birth\" [control]='dob'></app-date-picker>\n\n  <!-- <app-input placeholder=\"Desciption\" [control]='description'></app-input> -->\n<!-- </ion-content> -->\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/profile-management.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/profile-management.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileManagementProfileManagementPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-title>\n      Profile Manage\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-row>        \n        <!-- user details -->\n        <ion-col size=6>\n          <app-user-details [value]='UserDetails' (setUserDetails)=\"setUserDetails($event)\"></app-user-details>\n        </ion-col>\n        <!-- Privacy -->\n        <ion-col size=\"2\" class=\"padding-none\">\n        </ion-col>\n        <!-- User Image -->\n        <ion-col size=\"4\" class=\"padding-none\">\n          <app-image-input class=\"component-image\"></app-image-input>\n        </ion-col>\n      </ion-row>\n\n      <!-- About User -->\n      <ion-row class=\"lg-padding\">\n        <p><b>Subject:</b> Hey {{UserDetails.handle}}! Tell Us Something about yourself</p>\n          <app-profile-details (setProfileDetails)=\"setProfileDetails($event)\"></app-profile-details>\n      </ion-row>\n        \n</ion-content>\n\n<ion-footer>\n    <p class=\"ion-text-center privacy\">Kindly Check Details You Want To Show Your New Penpals</p>\n    <ion-button color=\"primary\" expand=\"block\" (click)=\"updateProfile()\">Send</ion-button>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/Shared/Services/MediaUpload/media-upload.service.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/Shared/Services/MediaUpload/media-upload.service.ts ***!
      \*********************************************************************/

    /*! exports provided: MediaUploadService */

    /***/
    function srcAppSharedServicesMediaUploadMediaUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaUploadService", function () {
        return MediaUploadService;
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/base64/ngx */
      "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");

      var MediaUploadService = /*#__PURE__*/function () {
        function MediaUploadService(imagePicker, camera, base64) {
          _classCallCheck(this, MediaUploadService);

          this.imagePicker = imagePicker;
          this.camera = camera;
          this.base64 = base64;
        }

        _createClass(MediaUploadService, [{
          key: "uploadImage",
          value: function uploadImage(image, name) {}
        }, {
          key: "selectFromGallery",
          value: function selectFromGallery() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              console.log('started');
              var options = {
                maximumImagesCount: 1
              }; // var imagePicker: ImagePicker

              _this.imagePicker.getPictures(options).then(function (result) {
                console.log(result); // base64 Image

                var imageURIs = result[0];
                resolve(imageURIs);
              }, function (err) {
                console.log(err);
                console.log('Error Occured');
              });

              resolve('imagePath');
            });
          } // selectFromCamera = new Promise((resolve,reject)=>{
          //     resolve('imagePath')
          //   })

        }, {
          key: "selectFromCamera",
          value: function selectFromCamera() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              var options = {
                quality: 100,
                destinationType: _this2.camera.DestinationType.FILE_URI,
                encodingType: _this2.camera.EncodingType.JPEG,
                mediaType: _this2.camera.MediaType.PICTURE
              };

              _this2.camera.getPicture(options).then(function (imageData) {
                console.log(imageData);
                var imageURIs = imageData;

                var base64 = _this2.pathToBase64(imageURIs),
                    filename = new Date(),
                    blob = _this2.dataURLtoBlob(base64, filename);

                console.log(filename, imageURIs);
                console.log(blob);
                resolve({
                  blob: blob,
                  base64: base64,
                  filename: filename
                });
              }, function (err) {
                console.log(err);
              });
            });
          }
        }, {
          key: "pathToBase64",
          value: function pathToBase64(filePath) {
            this.base64.encodeFile(filePath).then(function (base64File) {
              console.log('pathToBase64');
              console.log(base64File);
              return base64File;
            }, function (err) {
              console.log(err);
            });
          } // base64 to File

        }, {
          key: "dataURLtoBlob",
          value: function dataURLtoBlob(base64, filename) {
            var arr = base64.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);

            while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
            }

            return new Blob([u8arr], filename);
          }
        }, {
          key: "getLocalPath",
          value: function getLocalPath(imageData) {
            return new Promise(function (resolve, reject) {// this.file.resolveLocalFilesystemUrl(imageData).then(fileEntry => {
              //     console.log(fileEntry)
              //     this.printURIs = this.webview.convertFileSrc(fileEntry.nativeURL);
              //     console.log(this.printURIs);
              //   })
              //   .catch(err => console.log(err));
              // resolve('path')
            });
          }
        }]);

        return MediaUploadService;
      }();

      MediaUploadService.ctorParameters = function () {
        return [{
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
        }, {
          type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_4__["Base64"]
        }];
      };

      MediaUploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MediaUploadService);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/date-picker/date-picker.component.scss":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/date-picker/date-picker.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsDatePickerDatePickerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input_icon {\n  margin-top: 10px;\n  opacity: 0.7;\n}\n\nion-datetime {\n  --padding-top: 10px;\n  --padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L2NvbXBvbmVudHMvaW5wdXQtY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L2NvbXBvbmVudHMvaW5wdXQtY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dF9pY29ue1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgb3BhY2l0eTogMC43O1xufVxuaW9uLWRhdGV0aW1le1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAvLyBpbnB1dHtcbiAgICAvLyB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/date-picker/date-picker.component.ts":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/date-picker/date-picker.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: DatePickerComponent */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsDatePickerDatePickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function () {
        return DatePickerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DatePickerComponent = /*#__PURE__*/function () {
        function DatePickerComponent() {
          _classCallCheck(this, DatePickerComponent);
        }

        _createClass(DatePickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DatePickerComponent;
      }();

      DatePickerComponent.ctorParameters = function () {
        return [];
      };

      DatePickerComponent.propDecorators = {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['placeholder']
        }],
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['control']
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['icon']
        }]
      };
      DatePickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date-picker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./date-picker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/date-picker/date-picker.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./date-picker.component.scss */
        "./src/app/pages/profile-management/components/input-components/date-picker/date-picker.component.scss"))["default"]]
      })], DatePickerComponent);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/description/description.component.scss":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/description/description.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsDescriptionDescriptionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-textarea {\n  border: #a2a2a2 solid 1px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 2px 0px #969696;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L2NvbXBvbmVudHMvaW5wdXQtY29tcG9uZW50cy9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L2NvbXBvbmVudHMvaW5wdXQtY29tcG9uZW50cy9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0YXJlYXtcbiAgICBib3JkZXI6ICNhMmEyYTIgc29saWQgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4ICM5Njk2OTY7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/description/description.component.ts":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/description/description.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: DescriptionComponent */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsDescriptionDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function () {
        return DescriptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DescriptionComponent = /*#__PURE__*/function () {
        function DescriptionComponent() {
          _classCallCheck(this, DescriptionComponent);
        }

        _createClass(DescriptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DescriptionComponent;
      }();

      DescriptionComponent.ctorParameters = function () {
        return [];
      };

      DescriptionComponent.propDecorators = {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['placeholder']
        }],
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['control']
        }]
      };
      DescriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-description',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./description.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/description/description.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./description.component.scss */
        "./src/app/pages/profile-management/components/input-components/description/description.component.scss"))["default"]]
      })], DescriptionComponent);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/image-input/image-input.component.scss":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/image-input/image-input.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsImageInputImageInputComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".image-box {\n  margin: 0 auto;\n  height: 150px;\n  width: 150px;\n}\n.image-box .attach_icon {\n  font-size: 8em;\n  position: absolute;\n  z-index: 99;\n  bottom: 42%;\n  left: 55%;\n  color: #a5a5a5;\n}\n.image-box .image {\n  height: 100%;\n  background-color: var(--ion-color-warning);\n  border-radius: 10px;\n}\n.image-box .image img {\n  border-radius: 10px;\n}\n.image-box .image .camera-icon {\n  font-size: 8em;\n  color: #fff;\n  position: absolute;\n  margin: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L2NvbXBvbmVudHMvaW5wdXQtY29tcG9uZW50cy9pbWFnZS1pbnB1dC9pbWFnZS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBRVI7QUFBSTtFQUNJLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FBRVI7QUFBUTtFQUNJLG1CQUFBO0FBRVo7QUFDUTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9pbnB1dC1jb21wb25lbnRzL2ltYWdlLWlucHV0L2ltYWdlLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWJveHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICAuYXR0YWNoX2ljb257XG4gICAgICAgIGZvbnQtc2l6ZTogOGVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBib3R0b206IDQyJTtcbiAgICAgICAgbGVmdDogNTUlO1xuICAgICAgICBjb2xvcjogI2E1YTVhNVxuICAgIH1cbiAgICAuaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAvLyBXaGVuIEltYWdlIGlzIEF2YWlsYWJsZVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gSW1hZ2UgaXMgbm90IEF2YWlsYWJsZVxuICAgICAgICAuY2FtZXJhLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDhlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWFyZ2luOiA5cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/image-input/image-input.component.ts":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/image-input/image-input.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ImageInputComponent */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsImageInputImageInputComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageInputComponent", function () {
        return ImageInputComponent;
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
      /* harmony import */


      var src_app_Shared_Services_MediaUpload_media_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Shared/Services/MediaUpload/media-upload.service */
      "./src/app/Shared/Services/MediaUpload/media-upload.service.ts");
      /* harmony import */


      var src_app_Shared_Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Shared/Services/Toast/toast.service */
      "./src/app/Shared/Services/Toast/toast.service.ts");

      var ImageInputComponent = /*#__PURE__*/function () {
        function ImageInputComponent(actionSheetCtrl, toast, mediaUpload) {
          _classCallCheck(this, ImageInputComponent);

          this.actionSheetCtrl = actionSheetCtrl;
          this.toast = toast;
          this.mediaUpload = mediaUpload;
        }

        _createClass(ImageInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "uploadImageOption",
          value: function uploadImageOption() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetCtrl.create({
                        header: 'Choose Attachment Source',
                        buttons: [{
                          text: 'Camera',
                          icon: 'camera',
                          handler: function handler() {
                            console.log('select from camera');

                            _this3.mediaUpload.selectFromCamera().then(function (image) {
                              console.log(image);
                            });
                          }
                        }, {
                          text: 'Gallery',
                          icon: 'images',
                          handler: function handler() {
                            console.log('select from gallery');

                            _this3.mediaUpload.selectFromGallery().then(function (image) {
                              // A base 64 image
                              console.log(image);
                            }); // this.selectFromGallery();

                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel',
                          icon: 'close',
                          handler: function handler() {
                            _this3.toast.simpletoast('No Image Added');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ImageInputComponent;
      }();

      ImageInputComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: src_app_Shared_Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: src_app_Shared_Services_MediaUpload_media_upload_service__WEBPACK_IMPORTED_MODULE_3__["MediaUploadService"]
        }];
      };

      ImageInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-input',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./image-input.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/image-input/image-input.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./image-input.component.scss */
        "./src/app/pages/profile-management/components/input-components/image-input/image-input.component.scss"))["default"]]
      })], ImageInputComponent);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/input/input.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/input/input.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsInputInputComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input_icon {\n  margin-top: 10px;\n  opacity: 0.7;\n}\n\nion-input {\n  --padding-top: 10px;\n  --padding-bottom: 0;\n  --padding-start: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L2NvbXBvbmVudHMvaW5wdXQtY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9pbnB1dC1jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0X2ljb257XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5pb24taW5wdXR7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTdweDtcbiAgICAvLyBpbnB1dHtcbiAgICAvLyB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/input/input.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/input/input.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: InputComponent */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
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
          value: function ngOnInit() {}
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
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['control']
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['icon']
        }]
      };
      InputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./input.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/input/input.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./input.component.scss */
        "./src/app/pages/profile-management/components/input-components/input/input.component.scss"))["default"]]
      })], InputComponent);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/select/select.component.scss":
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/select/select.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsSelectSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtbWFuYWdlbWVudC9jb21wb25lbnRzL2lucHV0LWNvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/select/select.component.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/select/select.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: SelectComponent */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
        return SelectComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SelectComponent = /*#__PURE__*/function () {
        function SelectComponent() {
          _classCallCheck(this, SelectComponent);

          this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(SelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "change",
          value: function change(ev) {
            console.log(ev);
            this.changed.emit(ev.value);
          }
        }]);

        return SelectComponent;
      }();

      SelectComponent.ctorParameters = function () {
        return [];
      };

      SelectComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['options']
        }],
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['key']
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['multiple']
        }],
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
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['change']
        }]
      };
      SelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./select.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/select/select.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./select.component.scss */
        "./src/app/pages/profile-management/components/input-components/select/select.component.scss"))["default"]]
      })], SelectComponent);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/toggle/toggle.component.scss":
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/toggle/toggle.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsToggleToggleComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtbWFuYWdlbWVudC9jb21wb25lbnRzL2lucHV0LWNvbXBvbmVudHMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/input-components/toggle/toggle.component.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/input-components/toggle/toggle.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ToggleComponent */

    /***/
    function srcAppPagesProfileManagementComponentsInputComponentsToggleToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleComponent", function () {
        return ToggleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ToggleComponent = /*#__PURE__*/function () {
        function ToggleComponent() {
          _classCallCheck(this, ToggleComponent);
        }

        _createClass(ToggleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ToggleComponent;
      }();

      ToggleComponent.ctorParameters = function () {
        return [];
      };

      ToggleComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['label']
        }],
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['control']
        }]
      };
      ToggleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toggle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./toggle.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/toggle/toggle.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./toggle.component.scss */
        "./src/app/pages/profile-management/components/input-components/toggle/toggle.component.scss"))["default"]]
      })], ToggleComponent);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/profile-details/profile-details.component.scss":
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/profile-details/profile-details.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileManagementComponentsProfileDetailsProfileDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtbWFuYWdlbWVudC9jb21wb25lbnRzL3Byb2ZpbGUtZGV0YWlscy9wcm9maWxlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/profile-details/profile-details.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/profile-details/profile-details.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ProfileDetailsComponent */

    /***/
    function srcAppPagesProfileManagementComponentsProfileDetailsProfileDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function () {
        return ProfileDetailsComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var ProfileDetailsComponent = /*#__PURE__*/function () {
        function ProfileDetailsComponent() {
          _classCallCheck(this, ProfileDetailsComponent);

          this.setProfileDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.interests = [{
            id: '5f72f14d6e321073dea34abd',
            interest: "Skipping"
          }, {
            id: '5f72f16b6e321073dea34abe',
            interest: "Jogging"
          }, {
            id: '5f72f17e6e321073dea34abf',
            interest: "Sleeping"
          }];
          this.key = 'id';
          this.value = 'interest';
          this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
          this.selectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required); // Toggle Form Controls

          this.displayPicture = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
          this.show_description = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true);
          this.dob = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
          this.showInterests = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true);
        }

        _createClass(ProfileDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.values = {
              interests: this.selectControl.value,
              description: this.description.value,
              showInterests: this.showInterests.value,
              showDescription: this.show_description.value,
              displayPicture: this.displayPicture.value,
              dob: this.dob.value
            };
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.values.interests = this.selectControl.value;
            this.values.description = this.description.value;
            this.values.showInterests = this.showInterests.value;
            this.values.showDescription = this.show_description.value;
            this.values.displayPicture = this.displayPicture.value;
            this.values.dob = this.dob.value;
            this.updateValues();
          }
        }, {
          key: "updateValues",
          value: function updateValues() {
            this.setProfileDetails.emit(this.values);
          }
        }]);

        return ProfileDetailsComponent;
      }();

      ProfileDetailsComponent.ctorParameters = function () {
        return [];
      };

      ProfileDetailsComponent.propDecorators = {
        values: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['value']
        }],
        setProfileDetails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['setProfileDetails']
        }]
      };
      ProfileDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile-details",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile-details.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/profile-details/profile-details.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile-details.component.scss */
        "./src/app/pages/profile-management/components/profile-details/profile-details.component.scss"))["default"]]
      })], ProfileDetailsComponent);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/user-details/user-details.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/user-details/user-details.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileManagementComponentsUserDetailsUserDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtbWFuYWdlbWVudC9jb21wb25lbnRzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/profile-management/components/user-details/user-details.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/profile-management/components/user-details/user-details.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: UserDetailsComponent */

    /***/
    function srcAppPagesProfileManagementComponentsUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
        return UserDetailsComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_Shared_Services_HttpService_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Shared/Services/HttpService/http.service */
      "./src/app/Shared/Services/HttpService/http.service.ts");
      /* harmony import */


      var src_app_Shared_Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Shared/Services/Toast/toast.service */
      "./src/app/Shared/Services/Toast/toast.service.ts");

      var UserDetailsComponent = /*#__PURE__*/function () {
        function UserDetailsComponent(http, toast) {
          _classCallCheck(this, UserDetailsComponent);

          this.http = http;
          this.toast = toast;
          this.setUserDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.handle = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.dob = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        }

        _createClass(UserDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.values = {
              handle: this.handle.value,
              name: this.handle.value,
              mobile: this.mobile.value,
              dob: this.dob.value,
              valid: false
            };
            console.log(this.values);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.values.handle = this.handle.value;
            this.values.name = this.name.value;
            this.values.mobile = this.mobile.value;
            this.values.dob = this.dob.value;
            this.updateValues();
          }
        }, {
          key: "checkIfExists",
          value: function checkIfExists(id) {
            var _this4 = this;

            var reqBody = {
              findBy: id,
              findText: id == 1 ? this.mobile.value : this.handle.value
            };
            this.http.post('customer/check', reqBody).subscribe(function (res) {
              if (!res.error) {
                if (id == 1) _this4.valid_mobile = true;else _this4.valid_handle = true;
              } else {
                if (id == 1) _this4.valid_mobile = false;else _this4.valid_handle = false;

                _this4.toast.simpletoast(res.message);
              }

              _this4.values.valid = _this4.valid_mobile && _this4.valid_handle;
            });
          }
        }, {
          key: "updateValues",
          value: function updateValues() {
            this.setUserDetails.emit(this.values);
          }
        }]);

        return UserDetailsComponent;
      }();

      UserDetailsComponent.ctorParameters = function () {
        return [{
          type: src_app_Shared_Services_HttpService_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }, {
          type: src_app_Shared_Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }];
      };

      UserDetailsComponent.propDecorators = {
        values: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['value']
        }],
        setUserDetails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['setUserDetails']
        }]
      };
      UserDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-details.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/user-details/user-details.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-details.component.scss */
        "./src/app/pages/profile-management/components/user-details/user-details.component.scss"))["default"]]
      })], UserDetailsComponent);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/profile-management-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/profile-management/profile-management-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ProfileManagementPageRoutingModule */

    /***/
    function srcAppPagesProfileManagementProfileManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileManagementPageRoutingModule", function () {
        return ProfileManagementPageRoutingModule;
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


      var _profile_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile-management.page */
      "./src/app/pages/profile-management/profile-management.page.ts");

      var routes = [{
        path: '',
        component: _profile_management_page__WEBPACK_IMPORTED_MODULE_3__["ProfileManagementPage"]
      }];

      var ProfileManagementPageRoutingModule = function ProfileManagementPageRoutingModule() {
        _classCallCheck(this, ProfileManagementPageRoutingModule);
      };

      ProfileManagementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfileManagementPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/profile-management.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/profile-management/profile-management.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ProfileManagementPageModule */

    /***/
    function srcAppPagesProfileManagementProfileManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileManagementPageModule", function () {
        return ProfileManagementPageModule;
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


      var _profile_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-management-routing.module */
      "./src/app/pages/profile-management/profile-management-routing.module.ts");
      /* harmony import */


      var _profile_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile-management.page */
      "./src/app/pages/profile-management/profile-management.page.ts");
      /* harmony import */


      var _components_input_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/input-components/input/input.component */
      "./src/app/pages/profile-management/components/input-components/input/input.component.ts");
      /* harmony import */


      var _components_input_components_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/input-components/image-input/image-input.component */
      "./src/app/pages/profile-management/components/input-components/image-input/image-input.component.ts");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/user-details/user-details.component */
      "./src/app/pages/profile-management/components/user-details/user-details.component.ts");
      /* harmony import */


      var _components_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/profile-details/profile-details.component */
      "./src/app/pages/profile-management/components/profile-details/profile-details.component.ts");
      /* harmony import */


      var _components_input_components_select_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/input-components/select/select.component */
      "./src/app/pages/profile-management/components/input-components/select/select.component.ts");
      /* harmony import */


      var _components_input_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/input-components/toggle/toggle.component */
      "./src/app/pages/profile-management/components/input-components/toggle/toggle.component.ts");
      /* harmony import */


      var _components_input_components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/input-components/date-picker/date-picker.component */
      "./src/app/pages/profile-management/components/input-components/date-picker/date-picker.component.ts");
      /* harmony import */


      var _components_input_components_description_description_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/input-components/description/description.component */
      "./src/app/pages/profile-management/components/input-components/description/description.component.ts");

      var ProfileManagementPageModule = function ProfileManagementPageModule() {
        _classCallCheck(this, ProfileManagementPageModule);
      };

      ProfileManagementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileManagementPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        providers: [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] // WebView
        ],
        declarations: [_profile_management_page__WEBPACK_IMPORTED_MODULE_6__["ProfileManagementPage"], _components_input_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"], _components_input_components_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_8__["ImageInputComponent"], _components_input_components_select_select_component__WEBPACK_IMPORTED_MODULE_13__["SelectComponent"], _components_input_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_14__["ToggleComponent"], _components_input_components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__["DatePickerComponent"], _components_input_components_description_description_component__WEBPACK_IMPORTED_MODULE_16__["DescriptionComponent"], _components_profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_12__["ProfileDetailsComponent"], _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsComponent"]]
      })], ProfileManagementPageModule);
      /***/
    },

    /***/
    "./src/app/pages/profile-management/profile-management.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/profile-management/profile-management.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProfileManagementProfileManagementPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-profile-details {\n  width: 100%;\n}\n\n.profile_text h1 {\n  font-size: 2.2em;\n  color: #da9f00;\n  font-weight: 600;\n}\n\n.privacy {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L3Byb2ZpbGUtbWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtbWFuYWdlbWVudC9wcm9maWxlLW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXByb2ZpbGUtZGV0YWlsc3tcbiAgICB3aWR0aDogMTAwJVxufVxuLnByb2ZpbGVfdGV4dHtcbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICAgICAgY29sb3I6ICNkYTlmMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuLnByaXZhY3l7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/profile-management/profile-management.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/profile-management/profile-management.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ProfileManagementPage */

    /***/
    function srcAppPagesProfileManagementProfileManagementPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileManagementPage", function () {
        return ProfileManagementPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_Shared_Services_Authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Shared/Services/Authentication/auth.service */
      "./src/app/Shared/Services/Authentication/auth.service.ts");
      /* harmony import */


      var src_app_Shared_Services_HttpService_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Shared/Services/HttpService/http.service */
      "./src/app/Shared/Services/HttpService/http.service.ts");
      /* harmony import */


      var src_app_Shared_Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/Shared/Services/Toast/toast.service */
      "./src/app/Shared/Services/Toast/toast.service.ts");

      var ProfileManagementPage = /*#__PURE__*/function () {
        function ProfileManagementPage(platform, route, router, httpService, authService, toast) {
          _classCallCheck(this, ProfileManagementPage);

          this.platform = platform;
          this.route = route;
          this.router = router;
          this.httpService = httpService;
          this.authService = authService;
          this.toast = toast;
          this.platform.backButton.subscribe(function (res) {
            console.log(res);
          });
          this.platform.backButton.isStopped = true;
        }

        _createClass(ProfileManagementPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.route.queryParams.subscribe(function (values) {
              console.log(values.id);

              if (values.id) {
                _this5.userId = values.id; // values.id -> ID passed in params who details shall be shown on the front end
                // this.authService.getUser -> Current User

                if (values.id == _this5.authService.getUser._id) {
                  _this5.httpService.get('customer/get/' + values.id).subscribe(function (res) {
                    if (res.error == false) {
                      _this5.setValues(res.response);
                    }
                  });
                } else {
                  _this5.setValues(_this5.authService.getUser);
                }
              } else _this5.authService.authenticate();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('Destroyed');
          }
        }, {
          key: "setValues",
          value: function setValues(user) {
            console.log(user);
            this.UserDetails.name = user.name;
          }
        }, {
          key: "setUserDetails",
          value: function setUserDetails(details) {
            this.UserDetails = details;
          }
        }, {
          key: "setProfileDetails",
          value: function setProfileDetails(details) {
            this.ProfileDetails = details;
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this6 = this;

            if (!this.UserDetails.handle) {
              this.toast.simpletoast('Kindly Provide A User Handle');
              return;
            }

            if (!this.UserDetails.mobile) {
              this.toast.simpletoast('Kindly Provide A Mobile Number');
              return;
            }

            if (this.ProfileDetails.interests.length == 0) {
              this.toast.simpletoast('Kindly Select Atleast One Interest');
              return;
            }

            if (!this.UserDetails.valid) {
              this.toast.simpletoast('Kindly Provide Valid Mobile Number And Handle');
              return;
            }

            console.log(this.UserDetails);
            console.log(this.ProfileDetails);
            var reqBody = {
              id: this.userId,
              mobile: this.UserDetails.mobile,
              email: null,
              name: this.UserDetails.name,
              handle: this.UserDetails.handle,
              description: this.ProfileDetails.description,
              dob: this.ProfileDetails.dob,
              interests: this.ProfileDetails.interests,
              show_display_picture: this.ProfileDetails.displayPicture,
              show_description: this.ProfileDetails.showDescription,
              show_age: this.ProfileDetails.dob,
              show_interests: this.ProfileDetails.showInterests
            };
            console.log(reqBody);
            this.httpService.post("customer/update", reqBody).subscribe(function (res) {
              if (res.error == false) {
                _this6.authService.setUser(res.response);

                _this6.router.navigateByUrl('home');
              }
            });
          }
        }]);

        return ProfileManagementPage;
      }();

      ProfileManagementPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_Shared_Services_HttpService_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }, {
          type: src_app_Shared_Services_Authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_Shared_Services_Toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }];
      };

      ProfileManagementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile-management",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile-management.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/profile-management.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile-management.page.scss */
        "./src/app/pages/profile-management/profile-management.page.scss"))["default"]]
      })], ProfileManagementPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-management-profile-management-module-es5.js.map
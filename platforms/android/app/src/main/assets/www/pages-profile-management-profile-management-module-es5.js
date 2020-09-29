(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-management-profile-management-module"], {
    /***/
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js ***!
      \*********************************************************************/

    /*! exports provided: Base64 */

    /***/
    function node_modulesIonicNativeBase64__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Base64", function () {
        return Base64;
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


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var Base64 =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Base64, _super);

        function Base64() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Base64.prototype.encodeFile = function (filePath) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "encodeFile", {}, arguments);
        };

        Base64.pluginName = "Base64";
        Base64.plugin = "com-badrit-base64";
        Base64.pluginRef = "plugins.Base64";
        Base64.repo = "https://github.com/hazemhagrass/phonegap-base64";
        Base64.platforms = ["Android", "iOS"];

        Base64.ɵfac = function Base64_Factory(t) {
          return ɵBase64_BaseFactory(t || Base64);
        };

        Base64.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: Base64,
          factory: function factory(t) {
            return Base64.ɵfac(t);
          }
        });

        var ɵBase64_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Base64);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Base64, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return Base64;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYmFzZTY0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUtFLElBMkIwQiwwQkFBaUI7QUFBQztBQUU5QjtBQUMyQjtBQUMzQyxJQUdFLDJCQUFVLGFBQUMsUUFBZ0I7QUFJVjtBQUFrQztBQUF5QztBQUF5QztBQUFxRTtJQVgvTCxNQUFNLHdCQURsQixVQUFVLEVBQUUsUUFDQSxNQUFNOzs7OzswQkFBRTtBQUFDLGlCQWxDdEI7QUFBRSxFQWtDMEIsaUJBQWlCO0FBQzVDLFNBRFksTUFBTTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIEJhc2U2NFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIFBsdWdpbiBpcyB1c2VkIHRvIGVuY29kZSBiYXNlNjQgb2YgYW55IGZpbGUsIGl0IHVzZXMganMgY29kZSBmb3IgaU9TLCBidXQgaW4gY2FzZSBvZiBhbmRyb2lkIGl0IHVzZXMgbmF0aXZlIGNvZGUgdG8gaGFuZGxlIGFuZHJvaWQgdmVyc2lvbnMgbG93ZXIgdGhhbiB2LjNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhc2U2NCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFzZTY0L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlNjQ6IEJhc2U2NCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGZpbGVQYXRoOiBzdHJpbmcgPSAnZmlsZTovLy8uLi4nO1xuICogdGhpcy5iYXNlNjQuZW5jb2RlRmlsZShmaWxlUGF0aCkudGhlbigoYmFzZTY0RmlsZTogc3RyaW5nKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGJhc2U2NEZpbGUpO1xuICogfSwgKGVycikgPT4ge1xuICogICBjb25zb2xlLmxvZyhlcnIpO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFzZTY0JyxcbiAgcGx1Z2luOiAnY29tLWJhZHJpdC1iYXNlNjQnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkJhc2U2NCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGF6ZW1oYWdyYXNzL3Bob25lZ2FwLWJhc2U2NCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXNlNjQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGVuY29kZXMgYmFzZTY0IG9mIGFueSBmaWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aCBBYnNvbHV0ZSBmaWxlIHBhdGhcbiAgICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGZpbGUgaXMgc3VjY2Vzc2Z1bGx5IGVuY29kZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZW5jb2RlRmlsZShmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

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


      __webpack_exports__["default"] = "<ion-content class=\"content\">\n  <div class=\"image-box\">\n    <!-- Existing Image -->\n    <div class=\"image\" *ngIf=\"image\" (click)='uploadImageOption()'>\n        <img [src]=\"image\">\n      </div>\n      <!-- Input Image -->\n    <div class=\"image\" *ngIf=\"!image\" (click)='uploadImageOption()'>\n        <input type='file' class=\"hidden\">\n        <ion-icon name='camera' class=\"camera-icon\"></ion-icon>\n        <div class=\"add-icon-parent\">\n            <ion-icon name=\"add-sharp\" class=\"add-icon\"></ion-icon>\n            <!-- <ion-icon name='add'></ion-icon> -->\n          </div>\n      </div>\n  </div>\n</ion-content>";
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


      __webpack_exports__["default"] = "<ion-content class=\"content\">\n  <ion-item>\n    <ion-input [placeholder]=\"placeholder\" [formControl]=\"control\"></ion-input>\n  </ion-item>\n</ion-content>";
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


      __webpack_exports__["default"] = "<ion-content>\n  <app-image-input class=\"component-image\"></app-image-input>\n  <app-input placeholder=\"Handle\" [control]='handle'></app-input>\n  <app-input placeholder=\"Name\" [control]='name'></app-input>\n  <app-input placeholder=\"Mobile\" [control]='mobile'></app-input>\n  <app-input placeholder=\"Age\" [control]='age'></app-input>\n</ion-content>\n";
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


      __webpack_exports__["default"] = "<ion-content class=\"displayContents\">\n  <app-user-details></app-user-details>\n</ion-content>";
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


      __webpack_exports__["default"] = "ion-content {\n  max-height: 200px;\n}\nion-content .image-box {\n  margin: 0 auto;\n  height: 150px;\n  width: 150px;\n}\nion-content .image-box .image {\n  height: 100%;\n  background-color: blue;\n  border-radius: 100%;\n}\nion-content .image-box .image img {\n  border-radius: 100%;\n}\nion-content .image-box .image .camera-icon {\n  font-size: 8em;\n  color: #fff;\n  position: absolute;\n  margin: 9px;\n}\nion-content .image-box .image .add-icon-parent {\n  height: 100%;\n}\nion-content .image-box .image .add-icon-parent .add-icon {\n  font-size: 3em;\n  color: #fff;\n  background-color: #224afb;\n  position: relative;\n  margin: 9px;\n  bottom: 0px;\n  left: 89px;\n  top: 90px;\n  border-radius: 100%;\n  box-shadow: 1px 1px 1px 1px #00000082;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L2NvbXBvbmVudHMvaW5wdXQtY29tcG9uZW50cy9pbWFnZS1pbnB1dC9pbWFnZS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUdaO0FBRFk7RUFDSSxtQkFBQTtBQUdoQjtBQUFZO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFaEI7QUFBWTtFQUNJLFlBQUE7QUFFaEI7QUFEZ0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQUdwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtbWFuYWdlbWVudC9jb21wb25lbnRzL2lucHV0LWNvbXBvbmVudHMvaW1hZ2UtaW5wdXQvaW1hZ2UtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAuaW1hZ2UtYm94e1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIC8vIFdoZW4gSW1hZ2UgaXMgQXZhaWxhYmxlXG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdoZW4gSW1hZ2UgaXMgbm90IEF2YWlsYWJsZVxuICAgICAgICAgICAgLmNhbWVyYS1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOGVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGQtaWNvbi1wYXJlbnR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIC5hZGQtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI0YWZiO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOXB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogODlweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggIzAwMDAwMDgyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
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


      __webpack_exports__["default"] = ".content {\n  max-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L2NvbXBvbmVudHMvaW5wdXQtY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLW1hbmFnZW1lbnQvY29tcG9uZW50cy9pbnB1dC1jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG59Il19 */";
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
          value: function ngOnInit() {
            if (this.value) this.control.setValue(this.value);
            if (this.validators) this.control.setValidators(this.validators);
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
        validators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['validators']
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
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-management/components/input-components/input/input.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./input.component.scss */
        "./src/app/pages/profile-management/components/input-components/input/input.component.scss"))["default"]]
      })], InputComponent);
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

      var UserDetailsComponent = /*#__PURE__*/function () {
        function UserDetailsComponent() {
          _classCallCheck(this, UserDetailsComponent);

          this.handle = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.mobile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.age = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        }

        _createClass(UserDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserDetailsComponent;
      }();

      UserDetailsComponent.ctorParameters = function () {
        return [];
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

      var ProfileManagementPageModule = function ProfileManagementPageModule() {
        _classCallCheck(this, ProfileManagementPageModule);
      };

      ProfileManagementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileManagementPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        providers: [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] // WebView
        ],
        declarations: [_profile_management_page__WEBPACK_IMPORTED_MODULE_6__["ProfileManagementPage"], _components_input_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"], _components_input_components_image_input_image_input_component__WEBPACK_IMPORTED_MODULE_8__["ImageInputComponent"], _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsComponent"]]
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


      __webpack_exports__["default"] = ".component-image {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1tYW5hZ2VtZW50L3Byb2ZpbGUtbWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUtbWFuYWdlbWVudC9wcm9maWxlLW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBvbmVudC1pbWFnZXtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59Il19 */";
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ProfileManagementPage = /*#__PURE__*/function () {
        function ProfileManagementPage(platform) {
          _classCallCheck(this, ProfileManagementPage);

          this.platform = platform;
          this.platform.backButton.subscribe(function (res) {
            console.log(res);
          });
          this.platform.backButton.isStopped = true;
        }

        _createClass(ProfileManagementPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileManagementPage;
      }();

      ProfileManagementPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      ProfileManagementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-management',
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
//# sourceMappingURL=pages-profile-management-profile-management-module-es5.js.map
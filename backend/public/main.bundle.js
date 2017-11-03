webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet> </router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_books_books_component__ = __webpack_require__("../../../../../src/app/components/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_saved_books_saved_books_component__ = __webpack_require__("../../../../../src/app/components/saved-books/saved-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_borrowed_books_borrowed_books_component__ = __webpack_require__("../../../../../src/app/components/borrowed-books/borrowed-books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_book_book_component__ = __webpack_require__("../../../../../src/app/components/book/book.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_books_books_component__["a" /* BooksComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_saved_books_saved_books_component__["a" /* SavedBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_borrowed_books_borrowed_books_component__["a" /* BorrowedBooksComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_book_book_component__["a" /* BookComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'user/createAccount',
                    component: __WEBPACK_IMPORTED_MODULE_10__components_signup_signup_component__["a" /* SignupComponent */]
                },
                {
                    path: 'user/authenticate',
                    component: __WEBPACK_IMPORTED_MODULE_11__components_signin_signin_component__["a" /* SigninComponent */]
                },
                {
                    path: 'books',
                    component: __WEBPACK_IMPORTED_MODULE_12__components_books_books_component__["a" /* BooksComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'dashboard/:username',
                    component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'savedBooks/:username',
                    component: __WEBPACK_IMPORTED_MODULE_14__components_saved_books_saved_books_component__["a" /* SavedBooksComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'borrowedBooks/:username',
                    component: __WEBPACK_IMPORTED_MODULE_15__components_borrowed_books_borrowed_books_component__["a" /* BorrowedBooksComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'book/:title',
                    component: __WEBPACK_IMPORTED_MODULE_16__components_book_book_component__["a" /* BookComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/book/book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.brand-logo {\n  margin-left: 2%;\n  margin-top: 3px;\n}\n\n.content {\n  margin-top: 2%;\n}\n\n.title {\n  margin-top: 3%;\n}\n\na {\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n  .side-panel{\n    font-size: 6px;\n  }\n  .side-panel li {\n    margin-left: 0px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <div class=\"navbar-fixed\">\n      <nav class=\"cyan darken-3\">\n          <div class=\"nav-wrapper\">\n              <a routerLink='' class=\"brand-logo\"><img src=\"http://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png\" alt=\"brand-img\" style=\"height: 50px; width: 50px;\" class=\"square responsive-img\"></a>\n              <ul class=\"right hide-on-med-and-down\">\n                   <li><a routerLink=\"\">Home</a></li>\n                   <li><a routerLink='/books'>Books</a></li>\n              </ul>\n          </div>\n      </nav>\n  </div>\n</header>\n\n<body>\n  <main>\n    <div class=\"row\">\n      <div class=\"col l2 m3 s4 side-panel\">\n        <div class=\"card-panel grey lighten-5 z-depth-1\">\n          <h5>Book Trading Club</h5>\n          <div class=\"divider\"></div>\n              <ul class=\"collection\">\n                <a routerLink='' class=\"collection-item\">Home</a>\n                <a routerLink='/dashboard/{{this.username}}' class=\"collection-item\">Dashboard</a>\n                <a routerLink='/books' class=\"collection-item\">All Books</a>\n                <a routerLink='/borrowedBooks/{{this.username}}' class=\"collection-item\">Borrowed Books</a>\n                <a routerLink=\"/savedBooks/{{this.username}}\" class=\"collection-item\">Saved Books</a>\n              </ul>\n        </div>\n      </div>\n      <div class=\"col l10 m9 s8\">\n        <div *ngIf=\"this.book\" class=\"container\">\n          <h5 class=\"title\">{{book.title}}</h5><hr>\n          <!-- <div class=\"divider\"></div> -->\n          <div class=\"content\">\n            <div class=\"row\">\n              <div class=\"col l4\">\n                <div class=\"card-panel grey lighten-5 z-depth-1 hoverable\">\n                  <div class=\"row valign-wrapper\">\n                    <div class=\"col s12\">\n                      <img class=\"square responsive-img\" src=\"{{book.coverUrl}}\" alt=\"{{book.title}}\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col l8\">\n                <div class=\"bookDetails\">\n                  <p>\n                    <b>Author: </b>{{book.author}}<br>\n                    <b>Description: </b>{{book.description}}<br>\n                    <b>Owner: </b>{{book.owner}}<br>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <!--footer-->\n  <footer class=\"page-footer cyan darken-3\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col l6 s12\">\n                  <h5 class=\"white-text\">BookTradingClub</h5>\n                  <p class=\"grey-text text-lighten-4\">You can contact us at uuid@uuid.com!</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                  <h5 class=\"white-text\">Contact</h5>\n                  <ul>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Twitter</a></li>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">GitHub</a></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n      <div class=\"footer-copyright cyan darken-4\">\n          <div class=\"container\">\n              © 2017 Copyright BookTradingClub\n          </div>\n      </div>\n  </footer>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = (function () {
    function BookComponent(route, userService, booksService) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.booksService = booksService;
        this.username = this.userService.getUserData().username;
        this.route.params.subscribe(function (params) {
            _this.bookTitle = params['title'];
            _this.booksService.getBookByTitle(_this.bookTitle, function (response) {
                // console.log(response);
                _this.book = response.data.res;
            });
        });
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent.prototype.getABook = function () {
    };
    return BookComponent;
}());
BookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book',
        template: __webpack_require__("../../../../../src/app/components/book/book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/book/book.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_book_service__["a" /* BookService */]) === "function" && _c || Object])
], BookComponent);

var _a, _b, _c;
//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/books/books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.brand-logo {\n  margin-left: 2%;\n  margin-top: 3px;\n}\n\n.content {\n  margin-top: 5%;\n}\n\n.container {\n  width: 80%;\n}\n\n.books-list {\n  margin-top: 3%;\n}\n\n@media only screen and (max-width: 600px) {\n  .side-panel{\n    font-size: 6px;\n  }\n  .side-panel li {\n    margin-left: 0px;\n  }\n}\n\n/* Change above this line only */\n\nbody img {\n  width: 300px;\n  height: 400px;\n}\n\n@media only screen and (max-width: 1520px){\n  body img {\n    width: 200px;\n    height: 300px;\n  }\n}\n\n@media only screen and (max-width: 980px){\n  body img {\n    width: 300px;\n    height: 400px;\n  }\n}\n\n@media only screen and (max-width: 780px){\n  body img {\n    width: 200px;\n    height: 300px;\n  }\n}\n\n@media only screen and (max-width: 620px){\n  body img {\n    width: 300px;\n    height: 400px;\n  }\n}\n\n.content .card-panel {\n  width: 350px;\n  height: 500px;\n}\n\n@media only screen and (max-width: 1520px) {\n  .content .card-panel {\n    width: 250px;\n    height: 400px;\n  }\n}\n\n@media only screen and (max-width: 980px) {\n  .content .card-panel {\n    width: 350px;\n    height: 500px;\n  }\n}\n\n@media only screen and (max-width: 780px) {\n  .content .card-panel {\n    width: 250px;\n    height: 400px;\n  }\n}\n\n@media only screen and (max-width: 620px) {\n  .content .card-panel {\n    width: 350px;\n    height: 500px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"navbar-fixed\">\n      <nav class=\"cyan darken-3\">\n          <div class=\"nav-wrapper\">\n              <a routerLink='' class=\"brand-logo\"><img src=\"http://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png\" alt=\"brand-img\" style=\"height: 50px; width: 50px;\" class=\"square responsive-img\"></a>\n              <a data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"mdi-navigation-menu\"></i></a>\n              <ul class=\"right hide-on-med-and-down\">\n                <li><a routerLink=\"\">Home</a></li>\n                <li><a routerLink=\"/dashboard/{{this.username}}\">Dashboard</a></li>\n              </ul>\n          </div>\n      </nav>\n  </div>\n</header>\n\n<body>\n  <main>\n      <div class=\"row\">\n        <div class=\"col l2 m3 s4 side-panel\">\n          <div class=\"card-panel grey lighten-5 z-depth-1\">\n            <h5>Book Trading Club</h5>\n            <div class=\"divider\"></div>\n                <ul class=\"collection\">\n                  <a routerLink='' class=\"collection-item\">Home</a>\n                  <a routerLink='/dashboard/{{this.username}}' class=\"collection-item\">Dashboard</a>\n                  <a class=\"collection-item active\">All Books</a>\n                  <a routerLink='/borrowedBooks/{{this.username}}' class=\"collection-item\">Borrowed Books</a>\n                  <a routerLink=\"/savedBooks/{{this.username}}\" class=\"collection-item\">Saved Books</a>\n                </ul>\n          </div>\n        </div>\n        <div class=\"col l10 m9 s8 animated fadeIn\">\n          <div class=\"container\">\n            <div class=\"content\">\n              <p>Books from all over the world!</p>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"row books-list\">\n              <div *ngFor=\"let book of this.allBooks\" class=\"col l4 m6 s12 center\">\n                <div class=\"card-panel grey lighten-5 z-depth-1 hoverable\">\n                  <div class=\"row valign-wrapper\">\n                    <div class=\"col s12\">\n                      <img routerLink=\"/book/{{book.title}}\" class=\"square responsive-img\" src=\"{{book.coverUrl}}\" alt=\"{{book.title}}\">\n                    </div>\n                  </div>\n                    <div class=\"row buttons\">\n                      <div class=\"col l6 m6 s6 left-align\">\n                          <button (click)=\"saveRequestedBook($event)\" id=\"{{book.title}}\" class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Request</button>\n                      </div>\n                      <div class=\"col l6 m6 s6 right-align\">\n                          <button (click)=\"saveBook($event)\" id=\"{{book._id}}\" class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Save</button>\n                      </div>\n                    </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </main>\n\n  <!--footer-->\n  <footer class=\"page-footer cyan darken-3\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col l6 s12\">\n                  <h5 class=\"white-text\">BookTradingClub</h5>\n                  <p class=\"grey-text text-lighten-4\">You can contact us at uuid@uuid.com!</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                  <h5 class=\"white-text\">Contact</h5>\n                  <ul>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Twitter</a></li>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">GitHub</a></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n      <div class=\"footer-copyright cyan darken-4\">\n          <div class=\"container\">\n              © 2017 Copyright BookTradingClub\n          </div>\n      </div>\n  </footer>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksComponent = (function () {
    function BooksComponent(userService, bookService) {
        this.userService = userService;
        this.bookService = bookService;
        this.username = userService.getUserData().username;
        this.getAllBooks();
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent.prototype.getAllBooks = function () {
        var _this = this;
        this.bookService.getAllBooks(function (response) {
            _this.allBooks = response.data.books;
            // console.log(this.allBooks);
        });
    };
    BooksComponent.prototype.saveBook = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var id = idAttr.nodeValue;
        this.userService.saveBook(id, this.username, function (response) {
            // console.log(response);
            if (response.data.success) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */])("Saved!", 3000, 'green');
            }
        });
    };
    BooksComponent.prototype.saveRequestedBook = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var bookTitle = idAttr.nodeValue;
        this.userService.saveRequestedBook(this.username, bookTitle, function (response) {
            // console.log(response);
            if (!response.data.success && response.data.err === "Owner can not make request") {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */])("Hello " + _this.username.toUpperCase() + " you are owner of this book!", 5000, 'blue');
            }
            else {
                if (response.data.success) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */])("Your request will be reviewed by book owner!", 5000, 'blue');
                }
                else if (response.data.err === "You have already requested") {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */])("You have already requested for this book!", 5000, 'blue');
                }
            }
        });
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-books',
        template: __webpack_require__("../../../../../src/app/components/books/books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/books/books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */]) === "function" && _b || Object])
], BooksComponent);

var _a, _b;
//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/borrowed-books/borrowed-books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.brand-logo {\n  margin-left: 2%;\n  margin-top: 3px;\n}\n\n.content {\n  margin-top: 5%;\n}\n\na {\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n  .side-panel{\n    font-size: 6px;\n  }\n  .side-panel li {\n    margin-left: 0px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/borrowed-books/borrowed-books.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"navbar-fixed\">\n      <nav class=\"cyan darken-3\">\n          <div class=\"nav-wrapper\">\n              <a routerLink='' class=\"brand-logo\"><img src=\"http://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png\" alt=\"brand-img\" style=\"height: 50px; width: 50px;\" class=\"square responsive-img\"></a>\n              <ul class=\"right hide-on-med-and-down\">\n                   <li><a routerLink=\"\">Home</a></li>\n                   <li><a routerLink='/books'>Books</a></li>\n              </ul>\n          </div>\n      </nav>\n  </div>\n</header>\n\n<body>\n  <main>\n    <div class=\"row\">\n      <div class=\"col l2 m3 s4 side-panel\">\n        <div class=\"card-panel grey lighten-5 z-depth-1\">\n          <h5>Book Trading Club</h5>\n          <div class=\"divider\"></div>\n              <ul class=\"collection\">\n                <a routerLink='' class=\"collection-item\">Home</a>\n                <a routerLink='/dashboard/{{this.username}}' class=\"collection-item\">Dashboard</a>\n                <a routerLink='/books' class=\"collection-item\">All Books</a>\n                <a class=\"collection-item active\">Borrowed Books</a>\n                <a routerLink=\"/savedBooks/{{this.username}}\" class=\"collection-item\">Saved Books</a>\n              </ul>\n        </div>\n      </div>\n      <div class=\"col l10 m9 s8\">\n        <div class=\"container\">\n          <div class=\"content\">\n            <div class=\"row animated fadeIn\">\n              <div class=\"col s12\">\n                <h4>Borrowed Books</h4>\n                <div class=\"divider\"></div>\n                <div *ngIf=\"!this.borrowedBooks\">\n                  <!-- <div *ngIf=\"this.savedBooks.length === 0\"> -->\n                    <p>You don't have any Book borrowed.</p>\n                  <!-- </div> -->\n                </div>\n                <div *ngIf=\"this.borrowedBooks\">\n                  <ul *ngFor=\"let book of this.borrowedBooks\" class=\"collection\">\n                    <li class=\"collection-item avatar\">\n                      <img src=\"{{book.borrowedBookCoverUrl}}\" alt=\"{{book.borrowedBook}}\" class=\"circle\">\n                      <span class=\"title\"><b>Title:</b> {{book.borrowedBook}}</span>\n                      <p>\n                         <b>Description</b> {{book.borrowedBookDescription}}<br>\n                         <b>Borrowed From: </b> {{book.borrowedFrom}}<br>\n                         <b>Borrowed On: </b>{{book.borrowedOn}}<br>\n                         <b>Check Details: </b> <a routerLink=\"/book/{{book.borrowedBook}}\">here</a>\n                      </p>\n                      <a class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n                    </li>\n                  </ul>\n                </div>\n                <button type=\"button\" routerLink=\"/books\" class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Explore more Book</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <!--footer-->\n  <footer class=\"page-footer cyan darken-3\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col l6 s12\">\n                  <h5 class=\"white-text\">BookTradingClub</h5>\n                  <p class=\"grey-text text-lighten-4\">You can contact us at uuid@uuid.com!</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                  <h5 class=\"white-text\">Contact</h5>\n                  <ul>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Twitter</a></li>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">GitHub</a></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n      <div class=\"footer-copyright cyan darken-4\">\n          <div class=\"container\">\n              © 2017 Copyright BookTradingClub\n          </div>\n      </div>\n  </footer>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/borrowed-books/borrowed-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowedBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BorrowedBooksComponent = (function () {
    function BorrowedBooksComponent(userService) {
        this.userService = userService;
        this.username = this.userService.getUserData().username;
        this.getBorrowedBooks();
    }
    BorrowedBooksComponent.prototype.ngOnInit = function () {
    };
    BorrowedBooksComponent.prototype.getBorrowedBooks = function () {
        var _this = this;
        this.userService.getBorrowedBooks(this.username, function (response) {
            // console.log(response);
            if (response.data.res === "No books borrowed") {
            }
            else if (response.data.res.length === 0) {
                _this.borrowedBooks = undefined;
            }
            else {
                var res = [];
                for (var i = 0; i < response.data.res.length; i++) {
                    var tempCoverUrl = "";
                    var tempDescription = "";
                    var tempAuthor = "";
                    for (var j = 0; j < response.data.docs.length; j++) {
                        if (response.data.res[i].requestedBook === response.data.docs[j].value.title) {
                            tempCoverUrl = response.data.docs[j].value.coverUrl;
                            tempDescription = response.data.docs[j].value.description;
                            tempAuthor = response.data.docs[j].value.author;
                        }
                        if (j >= response.data.docs.length - 1) {
                            var tempData = {
                                borrowedBook: response.data.res[i].requestedBook,
                                borrowedBookCoverUrl: tempCoverUrl,
                                borrowedBookDescription: tempDescription,
                                borrowedBookAuthor: tempAuthor,
                                borrowedFrom: response.data.res[i].requestedTo,
                                borrowedOn: new Date(response.data.res[i].updatedAt).toString()
                            };
                            res.push(tempData);
                            if (i >= response.data.res.length - 1) {
                                _this.borrowedBooks = res;
                            }
                        }
                    }
                }
            }
            ;
        });
    };
    return BorrowedBooksComponent;
}());
BorrowedBooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-borrowed-books',
        template: __webpack_require__("../../../../../src/app/components/borrowed-books/borrowed-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/borrowed-books/borrowed-books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], BorrowedBooksComponent);

var _a;
//# sourceMappingURL=borrowed-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.brand-logo {\n  margin-left: 2%;\n  margin-top: 3px;\n}\n\n.content {\n  margin-top: 5%;\n}\n\na {\n  cursor: pointer;\n}\n\n.addBook {\n  margin-top: 5%;\n  display: none;\n}\n\n.btn-small {\n    height: 24px;\n    line-height: 24px;\n    padding: 0 0.5rem;\n    font-size: 12px;\n}\n\n.removing {\n    -webkit-animation: fadeOut 1000ms;\n    animation: fadeOut 1000ms;\n}\n\n@media only screen and (max-width: 600px) {\n  .side-panel{\n    font-size: 6px;\n  }\n  .side-panel li {\n    margin-left: 0px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"navbar-fixed\">\n      <nav class=\"cyan darken-3\">\n          <div class=\"nav-wrapper\">\n              <a routerLink='' class=\"brand-logo\"><img src=\"http://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png\" alt=\"brand-img\" style=\"height: 50px; width: 50px;\" class=\"square responsive-img\"></a>\n              <ul class=\"right hide-on-med-and-down\">\n                   <li><a routerLink=\"\">Home</a></li>\n                   <li><a routerLink='/books'>Books</a></li>\n              </ul>\n          </div>\n      </nav>\n  </div>\n</header>\n\n<body>\n  <main>\n    <div class=\"row\">\n      <div class=\"col l2 m3 s4 side-panel\">\n        <div class=\"card-panel grey lighten-5 z-depth-1\">\n          <h5>Book Trading Club</h5>\n          <div class=\"divider\"></div>\n              <ul class=\"collection\">\n                <a routerLink='' class=\"collection-item\">Home</a>\n                <a class=\"collection-item active\">Dashboard</a>\n                <a routerLink='/books' class=\"collection-item\">All Books</a>\n                <a routerLink=\"/borrowedBooks/{{this.username}}\" class=\"collection-item\">Borrowed Books</a>\n                <a routerLink=\"/savedBooks/{{this.username}}\" class=\"collection-item\">Saved Books</a>\n              </ul>\n        </div>\n      </div>\n      <div class=\"col l10 m9 s8\">\n        <div class=\"container\">\n          <div class=\"content\">\n            <ul materialize=\"collapsible\" class=\"collapsible hoverable\" data-collapsible=\"accordion\">\n              <li>\n                <div class=\"collapsible-header\">\n                  <i class=\"material-icons\">notifications_active</i>\n                  Books Trade offers\n                  <span *ngIf=\"this.bookOffers\" class=\"new badge right-align\">{{this.bookOffers.length}}</span>\n                  <span class=\"new badge right-align\" *ngIf=\"!this.bookOffers\">0</span>\n                </div>\n                <div *ngIf=\"this.bookOffers\" class=\"collapsible-body\">\n                  <ul *ngFor=\"let data of this.bookOffers\" class=\"collection\">\n                    <li class=\"collection-item animated avatar\">\n                      <img src=\"{{data.offerBookCoverUrl}}\" alt=\"{{data.offerBook}}\" class=\"circle\">\n                      <span class=\"title\"><b>Title: </b>{{data.offerBook}}</span>\n                      <p><b>Offered By: </b>{{data.offerBy}}<br>\n                        <b>Offered On: </b>{{data.offerTime}}\n                      </p>\n                      <button type=\"button\"  (click)=\"acceptOffer($event)\" class=\"btn btn-small btn-flat cyan darken-4 waves-effect waves-light white-text\">Accept</button>\n                      <button type=\"button\" (click)=\"rejectOffer($event)\" class=\"btn btn-small btn-flat red darken-4 waves-effect waves-light white-text\">Decline</button>\n                    </li>\n                  </ul>\n                </div>\n              </li>\n              <!-- <div> -->\n                <li *ngIf=\"this.requestedBooksByUser\">\n                  <div class=\"collapsible-header\"><i class=\"material-icons\">file_upload</i>Your Requests <span class=\"badge\">{{this.requestedBooksByUser.length}}</span></div>\n                  <div class=\"collapsible-body\">\n\n                      <ul *ngFor=\"let book of this.requestedBooksByUser\" class=\"collection\">\n                        <li class=\"collection-item avatar\">\n                          <img src=\"{{book.coverUrl}}\" alt=\"{{book.title}}\" class=\"circle\">\n                          <span class=\"title\"><b>Book: </b>{{book.title}}</span>\n                          <p><b>Request Status: </b> {{book.requestStatus}} <a routerLink=\"/borrowedBooks/{{this.username}}\" *ngIf=\"book.requestStatus === 'Accepted'\">Check borrowed Books</a><br>\n                            <b>Requested On: </b>{{book.requestTime}}\n                          </p>\n                          <a id=\"{{book}}\" (click)=\"deleteRequest(book)\" class=\"secondary-content\"><i class=\"material-icons\">delete_forever</i></a>\n                        </li>\n                      </ul>\n\n                  </div>\n                </li>\n              <!-- </div> -->\n            </ul>\n\n            <div *ngIf=\"this.booksByUser\" class=\"row animated fadeIn\">\n              <div class=\"col s12\">\n                <h4>Your Books</h4>\n                <div class=\"divider\"></div>\n                <div>\n                  <div *ngIf=\"this.booksByUser.length === 0\" class=\"\">\n                    <p>You do not have any Book.</p>\n                  </div>\n                </div>\n                <ul *ngFor=\"let book of this.booksByUser\" class=\"collection\">\n                  <li class=\"collection-item avatar\">\n                    <img src=\"{{book.coverUrl}}\" alt=\"\" class=\"circle\">\n                    <span class=\"title\"><b>Title:</b> {{book.title}}</span>\n                    <p>\n                      <b>Author: </b> {{book.author}} <br>\n                       <b>Description</b> {{book.description}}<br>\n                       <b>Check Details: </b><a routerLink=\"/book/{{book.title}}\">here</a>\n                    </p>\n                    <a (click)=\"deleteBook(book)\" class=\"secondary-content\"><i class=\"material-icons\">delete_forever</i></a>\n                  </li>\n                </ul>\n                <button type=\"button\" (click)=\"addNewBookUI()\" class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Add new Book</button>\n\n                <div id=\"addBook\" class=\"addBook animated\">\n                  <h4>Add Book</h4>\n                  <div class=\"divider\"></div>\n                  <div class=\"row addBook-form\">\n                    <form class=\"col s12\" #addBookForm=\"ngForm\" (ngSubmit)=\"addBook(addBookForm)\">\n                      <div class=\"row\">\n                        <div class=\"input-field col m6 s12\">\n                          <input type=\"text\" name=\"bookTitle\" class=\"validate\" ngModel>\n                          <label for=\"bookTitle\">Book Title</label>\n                        </div>\n                        <div class=\"input-field col m6 s12\">\n                          <input name=\"author\" type=\"text\" class=\"validate\" ngModel>\n                          <label for=\"author\">Author</label>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"input-field col m6 s12\">\n                          <input type=\"text\" name=\"coverURL\" class=\"validate\" ngModel>\n                          <label for=\"coverURL\">Book Cover URL</label>\n                        </div>\n                        <div class=\"input-field col s12\">\n                          <textarea id=\"description\" name=\"description\" class=\"materialize-textarea\" ngModel></textarea>\n                          <label for=\"description\">Description</label>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                          <button type=\"submit\" class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Add</button>\n                          <button type=\"button\" (click)=\"hideNewBookUI()\" class=\"btn btn-flat red darken-4 waves-effect waves-light white-text\">Cancel</button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"col l6 m6 s12\">\n                <h4>Borrowed Books</h4>\n                <div class=\"divider\"></div>\n                <ul class=\"collection\">\n                  <li class=\"collection-item avatar\">\n                    <img src=\"images/yuna.jpg\" alt=\"\" class=\"circle\">\n                    <span class=\"title\">Title</span>\n                    <p>First Line <br>\n                       Second Line\n                    </p>\n                    <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n                  </li>\n                </ul>\n                <button type=\"submit\" class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Request a Book</button>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <!--footer-->\n  <footer class=\"page-footer cyan darken-3\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col l6 s12\">\n                  <h5 class=\"white-text\">BookTradingClub</h5>\n                  <p class=\"grey-text text-lighten-4\">You can contact us at uuid@uuid.com!</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                  <h5 class=\"white-text\">Contact</h5>\n                  <ul>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Twitter</a></li>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">GitHub</a></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n      <div class=\"footer-copyright cyan darken-4\">\n          <div class=\"container\">\n              © 2017 Copyright BookTradingClub\n          </div>\n      </div>\n  </footer>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(userService, bookService, router) {
        this.userService = userService;
        this.bookService = bookService;
        this.router = router;
        this.username = this.userService.getUserData().username;
        this.getBooksByUser();
        this.getUserRequestedBooks();
        this.getUserOffers();
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.addNewBookUI = function () {
        document.getElementById('addBook').style.display = "block";
        document.getElementById('addBook').classList.add('fadeIn');
        document.getElementById('addBook').classList.remove('fadeOut');
    };
    DashboardComponent.prototype.hideNewBookUI = function () {
        document.getElementById('addBook').classList.remove('fadeIn');
        document.getElementById('addBook').classList.add('fadeOut');
        setTimeout(function () {
            document.getElementById('addBook').style.display = "none";
        }, 500);
    };
    DashboardComponent.prototype.addBook = function (form) {
        var _this = this;
        this.bookService.validateBook(form.value, function (response) {
            if (response === "URL Invalid!") {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["b" /* toast */])("Please provide valid URL for Book Cover Image!", 5000, 'red');
            }
            if (response === "Missing Data") {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["b" /* toast */])("Please provide book Title and cover image URL", 5000, 'red');
            }
            if (response === "Valid") {
                var book_1 = {
                    title: form.value.bookTitle,
                    author: form.value.author,
                    coverUrl: form.value.coverURL,
                    description: form.value.description,
                    owner: _this.username
                };
                _this.bookService.addBook(book_1, function (response) {
                    if (response.data.msg === "Book Successfully added!") {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["b" /* toast */])(book_1.title + "successfully added", 5000, 'green');
                        _this.hideNewBookUI();
                    }
                });
            }
        });
    };
    DashboardComponent.prototype.getBooksByUser = function () {
        var _this = this;
        this.bookService.getBooksByUser(this.username, function (response) {
            // console.log(response);
            _this.booksByUser = response.data.books;
        });
    };
    DashboardComponent.prototype.getUserRequestedBooks = function () {
        var _this = this;
        this.userService.getUserRequestedBooks(this.username, function (response) {
            // console.log(response);
            // this.requestedBooksByUser = response.data.response;
            var res = [];
            for (var i = 0; i < response.data.docs.length; i++) {
                var tempData = {
                    title: response.data.docs[i].value.title,
                    coverUrl: response.data.docs[i].value.coverUrl,
                    requestTime: new Date(response.data.response[i].createdAt).toString(),
                    requestStatus: response.data.response[i].requestStatus,
                    requestId: response.data.response[i]._id
                };
                res.push(tempData);
                if (i >= response.data.docs.length - 1) {
                    _this.requestedBooksByUser = res;
                    // console.log(this.requestedBooksByUser);
                }
            }
        });
    };
    DashboardComponent.prototype.getUserOffers = function () {
        var _this = this;
        this.userService.getUserOffers(this.username, function (response) {
            // console.log(response);
            if (response.data.res === "No Offers!") {
            }
            else if (response.data.res.length === 0) {
                _this.bookOffers = undefined;
            }
            else {
                var res = [];
                for (var i = 0; i < response.data.res.length; i++) {
                    var tempCoverUrl = "";
                    for (var j = 0; j < response.data.docs.length; j++) {
                        if (response.data.res[i].requestedBook === response.data.docs[j].value.title) {
                            tempCoverUrl = response.data.docs[j].value.coverUrl;
                        }
                        if (j >= response.data.docs.length - 1) {
                            var tempData = {
                                offerBook: response.data.res[i].requestedBook,
                                offerBookCoverUrl: tempCoverUrl,
                                offerBy: response.data.res[i].requestBy,
                                offerTime: new Date(response.data.res[i].createdAt).toString()
                            };
                            res.push(tempData);
                            if (i >= response.data.res.length - 1) {
                                _this.bookOffers = res;
                            }
                        }
                    }
                }
            }
            ;
        });
    };
    DashboardComponent.prototype.acceptOffer = function (event) {
        var offer = {
            Title: null,
            status: "Accepted",
            offerBy: null,
            username: this.username
        };
        var self = this;
        var text = event.srcElement.parentNode.innerText;
        var a = text.split(/\r?\n/);
        // console.log(a);
        for (var i = 0; i < a.length; i++) {
            var temp = a[i].split(":");
            if (temp[0] === "Title") {
                offer.Title = temp[1].trim();
            }
            if (temp[0] === "Offered By") {
                offer.offerBy = temp[1].trim();
            }
            if (i >= a.length - 1) {
                // console.log(offer);
                this.userService.updateRequestStatus(offer, function (response) {
                    // console.log(response);
                    if (response.data.success) {
                        event.srcElement.parentNode.classList.add("removing");
                        setTimeout(function () {
                            event.srcElement.parentNode.parentNode.innerHTML = "";
                            self.getUserOffers();
                        }, 1000);
                    }
                });
            }
            ;
        }
    };
    DashboardComponent.prototype.rejectOffer = function (event) {
        var self = this;
        var offer = {
            Title: null,
            status: "Rejected",
            offerBy: null,
            username: this.username
        };
        var text = event.srcElement.parentNode.innerText;
        var a = text.split(/\r?\n/);
        for (var i = 0; i < a.length; i++) {
            var temp = a[i].split(":");
            if (temp[0] === "Title") {
                offer.Title = temp[1].trim();
            }
            if (temp[0] === "Offered By") {
                offer.offerBy = temp[1].trim();
            }
            if (i >= a.length - 1) {
                this.userService.updateRequestStatus(offer, function (response) {
                    // console.log(response);
                    if (response.data.success) {
                        event.srcElement.parentNode.classList.add("removing");
                        setTimeout(function () {
                            event.srcElement.parentNode.parentNode.innerHTML = "";
                            self.getUserOffers();
                        }, 1000);
                    }
                });
            }
            ;
        }
    };
    DashboardComponent.prototype.deleteBook = function (data) {
        var _this = this;
        var book = {
            title: data.title,
            owner: data.owner
        };
        var sure = confirm("Are you sure to delete this book!");
        if (sure) {
            this.bookService.deleteBook(book, function (response) {
                if (response.data.success) {
                    alert("You successfully deleted" + book.title);
                    _this.getBooksByUser();
                }
                ;
                if (response.data.res === "You can not delete this book") {
                    alert("You have given this book to some other User");
                }
                ;
            });
        }
    };
    DashboardComponent.prototype.deleteRequest = function (book) {
        var _this = this;
        var requestId = book.requestId;
        var sure = confirm("Are you sure to delete this request!");
        if (sure) {
            this.userService.deleteRequest(requestId, function (response) {
                if (response.data.success) {
                    _this.getUserRequestedBooks();
                }
            });
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.brand-logo{\n  margin-left: 2%;\n  margin-top: 3px;\n}\n\n.brand-img{\n  margin-top: 5%;\n}\n\n.brand-name{\n  font-family: 'Lobster', cursive;\n}\n\n\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"navbar-fixed\">\n      <nav class=\"cyan darken-3\">\n          <div class=\"nav-wrapper\">\n              <a routerLink='' class=\"brand-logo\"><img src=\"http://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png\" alt=\"brand-img\" style=\"height: 50px; width: 50px;\" class=\"square responsive-img\"></a>\n              <a data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"mdi-navigation-menu\"></i></a>\n              <ul class=\"right hide-on-med-and-down\">\n                   <li *ngIf=\"!this.userService.loggedIn()\"><a routerLink=\"user/authenticate\">Login</a></li>\n                   <li *ngIf=\"this.userService.loggedIn()\"><a (click)=\"logout()\">Logout</a></li>\n                   <li *ngIf=\"this.userService.loggedIn()\"><a routerLink='books'>Books</a></li>\n                   <li *ngIf=\"this.userService.loggedIn()\"><a routerLink=\"dashboard/{{this.username}}\">Dashboard</a></li>\n              </ul>\n          </div>\n      </nav>\n  </div>\n</header>\n\n<body>\n  <main>\n    <div class=\"container\">\n      <div class=\"brand-name center\">\n        <h1>BookTradingClub</h1>\n      </div>\n      <div class=\"col s12 brand-img center\">\n        <div class=\"card-panel grey lighten-5 z-depth-1\">\n          <div class=\"row valign-wrapper\">\n            <div class=\"col s12\">\n              <img src=\"{{this.home_image}}\" class=\"square responsive-img\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col s6\">\n                <button class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\" routerLink='user/createAccount'>Create Account</button>\n            </div>\n            <div class=\"col s6\">\n                <button class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Login With Twitter</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <!--footer-->\n  <footer class=\"page-footer cyan darken-3\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col l6 s12\">\n                  <h5 class=\"white-text\">BookTradingClub</h5>\n                  <p class=\"grey-text text-lighten-4\">You can contact us at uuid@uuid.com!</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                  <h5 class=\"white-text\">Contact</h5>\n                  <ul>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Twitter</a></li>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">GitHub</a></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n      <div class=\"footer-copyright cyan darken-4\">\n          <div class=\"container\">\n              © 2017 Copyright BookTradingClub\n          </div>\n      </div>\n  </footer>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.home_image = "/assets/home_image.jpg";
        this.username = this.userService.getUserData().username;
    }
    HomeComponent.prototype.logout = function () {
        this.userService.logOut();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/saved-books/saved-books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.brand-logo {\n  margin-left: 2%;\n  margin-top: 3px;\n}\n\n.content {\n  margin-top: 5%;\n}\n\na {\n  cursor: pointer;\n}\n\n.addBook {\n  margin-top: 5%;\n  display: none;\n}\n\n@media only screen and (max-width: 600px) {\n  .side-panel{\n    font-size: 6px;\n  }\n  .side-panel li {\n    margin-left: 0px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/saved-books/saved-books.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"navbar-fixed\">\n      <nav class=\"cyan darken-3\">\n          <div class=\"nav-wrapper\">\n              <a routerLink='' class=\"brand-logo\"><img src=\"http://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png\" alt=\"brand-img\" style=\"height: 50px; width: 50px;\" class=\"square responsive-img\"></a>\n              <ul class=\"right hide-on-med-and-down\">\n                   <li><a routerLink=\"\">Home</a></li>\n                   <li><a routerLink='/books'>Books</a></li>\n              </ul>\n          </div>\n      </nav>\n  </div>\n</header>\n\n<body>\n  <main>\n    <div class=\"row\">\n      <div class=\"col l2 m3 s4 side-panel\">\n        <div class=\"card-panel grey lighten-5 z-depth-1\">\n          <h5>Book Trading Club</h5>\n          <div class=\"divider\"></div>\n              <ul class=\"collection\">\n                <a routerLink='' class=\"collection-item\">Home</a>\n                <a routerLink='/dashboard/{{this.username}}' class=\"collection-item\">Dashboard</a>\n                <a routerLink='/books' class=\"collection-item\">All Books</a>\n                <a routerLink='/borrowedBooks/{{this.username}}' class=\"collection-item\">Borrowed Books</a>\n                <a class=\"collection-item active\">Saved Books</a>\n              </ul>\n        </div>\n      </div>\n      <div class=\"col l10 m9 s8\">\n        <div class=\"container\">\n          <div class=\"content\">\n            <div class=\"row animated fadeIn\">\n              <div class=\"col s12\">\n                <h4>Saved Books</h4>\n                <div class=\"divider\"></div>\n                <div *ngIf=\"!this.savedBooks\">\n                    <p>You don't have any Book Saved.</p>\n                </div>\n                <div *ngIf=\"this.savedBooks\">\n                  <div *ngIf=\"this.savedBooks.length === 0\">\n                      <p>You don't have any Book Saved.</p>\n                  </div>\n                  <ul *ngFor=\"let book of this.savedBooks\" class=\"collection\">\n                    <li class=\"collection-item avatar\">\n                      <img src=\"{{book.coverUrl}}\" alt=\"\" class=\"circle\">\n                      <span class=\"title\"><b>Title:</b> {{book.title}}</span>\n                      <p><b>Author: </b> {{book.author}} <br>\n                         <b>Description</b> {{book.description}}<br>\n                         <b>Check Details: </b><a routerLink=\"/book/{{book.title}}\">here</a>\n                      </p>\n                      <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n                    </li>\n                  </ul>\n                </div>\n                <button type=\"button\" routerLink=\"/books\" class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Explore more Books</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <!--footer-->\n  <footer class=\"page-footer cyan darken-3\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col l6 s12\">\n                  <h5 class=\"white-text\">BookTradingClub</h5>\n                  <p class=\"grey-text text-lighten-4\">You can contact us at uuid@uuid.com!</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                  <h5 class=\"white-text\">Contact</h5>\n                  <ul>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Twitter</a></li>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">GitHub</a></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n      <div class=\"footer-copyright cyan darken-4\">\n          <div class=\"container\">\n              © 2017 Copyright BookTradingClub\n          </div>\n      </div>\n  </footer>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/saved-books/saved-books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedBooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavedBooksComponent = (function () {
    function SavedBooksComponent(userService) {
        this.userService = userService;
        this.username = userService.getUserData().username;
        this.getUserSavedBooks();
    }
    SavedBooksComponent.prototype.ngOnInit = function () {
    };
    SavedBooksComponent.prototype.getUserSavedBooks = function () {
        var _this = this;
        this.userService.getUserSavedBooks(this.username, function (response) {
            _this.savedBooks = response.data.savedBooks;
        });
    };
    return SavedBooksComponent;
}());
SavedBooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-saved-books',
        template: __webpack_require__("../../../../../src/app/components/saved-books/saved-books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/saved-books/saved-books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], SavedBooksComponent);

var _a;
//# sourceMappingURL=saved-books.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.brand-logo {\n  margin-left: 2%;\n  margin-top: 3px;\n}\n\n.signin-form  {\n  margin-top: 5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <div class=\"navbar-fixed\">\n      <nav class=\"cyan darken-3\">\n          <div class=\"nav-wrapper\">\n              <a routerLink='' class=\"brand-logo\"><img src=\"http://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png\" alt=\"brand-img\" style=\"height: 50px; width: 50px;\" class=\"square responsive-img\"></a>\n              <a data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"mdi-navigation-menu\"></i></a>\n              <ul class=\"right hide-on-med-and-down\">\n                   <li><a routerLink=\"\">Home</a></li>\n                   <li><a routerLink='/user/createAccount'>Create Account</a></li>\n              </ul>\n          </div>\n      </nav>\n  </div>\n</header>\n<body>\n  <main>\n    <div class=\"container\">\n\n      <!-- SignIn Form -->\n\n      <div class=\"row signin-form\">\n        <form class=\"col s12\" #authenticateUser=\"ngForm\" (ngSubmit)=\"authUser(authenticateUser)\">\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"username\" class=\"validate\" ngModel>\n              <label for=\"username\">Username</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input name=\"password\" type=\"password\" class=\"validate\" ngModel>\n              <label for=\"password\">Password</label>\n            </div>\n          </div>\n          <div>\n            <button type=\"submit\" class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Login</button>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </main>\n\n  <!--footer-->\n  <footer class=\"page-footer cyan darken-3\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col l6 s12\">\n                  <h5 class=\"white-text\">BookTradingClub</h5>\n                  <p class=\"grey-text text-lighten-4\">You can contact us at uuid@uuid.com!</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                  <h5 class=\"white-text\">Contact</h5>\n                  <ul>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Twitter</a></li>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">GitHub</a></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n      <div class=\"footer-copyright cyan darken-4\">\n          <div class=\"container\">\n              © 2017 Copyright BookTradingClub\n          </div>\n      </div>\n  </footer>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = (function () {
    function SigninComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.authUser = function (form) {
        var _this = this;
        this.userService.authenticateUser(form.value, function (res) {
            if (res.data.msg === "username is inncorrect") {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */])("username is inncorrect", 5000, 'red');
            }
            else if (res.data.msg === "password is incorrect") {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */])("password is incorrect", 5000, 'red');
            }
            else if (res.data.success) {
                _this.router.navigate(['/dashboard/' + form.value.username]);
            }
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/components/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/signin/signin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SigninComponent);

var _a, _b;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.brand-logo {\n  margin-left: 2%;\n  margin-top: 3px;\n}\n\n.signup-form  {\n  margin-top: 5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <div class=\"navbar-fixed\">\n      <nav class=\"cyan darken-3\">\n          <div class=\"nav-wrapper\">\n              <a routerLink='' class=\"brand-logo\"><img src=\"http://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png\" alt=\"brand-img\" style=\"height: 50px; width: 50px;\" class=\"square responsive-img\"></a>\n              <a data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"mdi-navigation-menu\"></i></a>\n              <ul class=\"right hide-on-med-and-down\">\n                   <li><a routerLink=\"\">Home</a></li>\n              </ul>\n          </div>\n      </nav>\n  </div>\n</header>\n<body>\n  <main>\n    <div class=\"container\">\n\n      <!-- SignUp Form -->\n\n      <div class=\"row signup-form\">\n        <form class=\"col s12\" #createUserForm=\"ngForm\" (ngSubmit)=\"createUser(createUserForm)\">\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <input type=\"text\" name=\"firstName\" class=\"validate\" ngModel>\n              <label for=\"firstName\">First Name</label>\n            </div>\n            <div class=\"input-field col s6\">\n              <input type=\"text\" name=\"lastName\" class=\"validate\" ngModel>\n              <label for=\"lastName\">Last Name</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input type=\"text\" name=\"username\" class=\"validate\" ngModel>\n              <label for=\"username\">Username</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input name=\"email\" type=\"email\" class=\"validate\" ngModel>\n              <label for=\"email\">Email</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input name=\"password\" type=\"password\" class=\"validate\" ngModel>\n              <label for=\"password\">Password</label>\n            </div>\n          </div>\n          <div>\n            <button type=\"submit\" class=\"btn btn-flat cyan darken-4 waves-effect waves-light white-text\">Create Account</button>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </main>\n\n  <!--footer-->\n  <footer class=\"page-footer cyan darken-3\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col l6 s12\">\n                  <h5 class=\"white-text\">BookTradingClub</h5>\n                  <p class=\"grey-text text-lighten-4\">You can contact us at uuid@uuid.com!</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                  <h5 class=\"white-text\">Contact</h5>\n                  <ul>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Twitter</a></li>\n                      <li><a class=\"grey-text text-lighten-3\" href=\"#!\">GitHub</a></li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n      <div class=\"footer-copyright cyan darken-4\">\n          <div class=\"container\">\n              © 2017 Copyright BookTradingClub\n          </div>\n      </div>\n  </footer>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignupComponent.prototype.createUser = function (form) {
        var _this = this;
        this.userService.validateUserData(form.value, function (validationRes) {
            if (validationRes === "IncompleteData") {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */])("Please fill in all fields except last name!", 5000, 'red');
            }
            if (validationRes === "InvalidEmail") {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */])("Provide correct email address!", 5000, 'red');
            }
            if (validationRes === "Valid") {
                _this.userService.createAccount(form.value, function (response) {
                    // console.log(response);
                    if (response.data.success) {
                        _this.router.navigate(['/user/authenticate']);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["b" /* toast */])("You are successfully registered!", 5000, 'green');
                    }
                });
            }
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['user/authenticate']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_url__ = __webpack_require__("../../../../is-url/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_is_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("../../../../axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = (function () {
    function BookService() {
    }
    BookService.prototype.validateBook = function (book, callback) {
        if (book.bookTitle && book.coverURL) {
            if (this.isURLValid(book.coverURL)) {
                callback("Valid");
            }
            else {
                callback("URL Invalid!");
            }
        }
        else {
            callback("Missing Data");
        }
    };
    BookService.prototype.isURLValid = function (str) {
        if (__WEBPACK_IMPORTED_MODULE_1_is_url___default()(str)) {
            return true;
        }
        else {
            return false;
        }
    };
    BookService.prototype.addBook = function (book, callback) {
        var config = {
            headers: {
                'Content-Type': "application/json",
                'Authorization': this.getAuthToken()
            }
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('book/addBook', book, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    BookService.prototype.deleteBook = function (book, callback) {
        var config = {
            headers: {
                'Content-Type': "application/json",
                'Authorization': this.getAuthToken()
            }
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('book/deleteBook', book, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    BookService.prototype.getBookByTitle = function (title, callback) {
        var config = {
            headers: {
                'Authorization': this.getAuthToken()
            }
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('book/getBookByTitle/' + title, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    BookService.prototype.getAllBooks = function (callback) {
        var config = {
            headers: {
                'Content-Type': "application/json",
                'Authorization': this.getAuthToken()
            }
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('book/getAllBooks', config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    BookService.prototype.getBooksByUser = function (user, callback) {
        var config = {
            headers: {
                'Authorization': this.getAuthToken()
            }
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('book/getBooksByUser/' + user, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    BookService.prototype.getAuthToken = function () {
        return localStorage.getItem('token');
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BookService);

//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("../../../../axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.validateUserData = function (user, callback) {
        if (user.firstName && user.username && user.email && user.password) {
            if (this.validateEmail(user.email)) {
                callback("Valid");
            }
            else {
                callback("InvalidEmail");
            }
        }
        else {
            callback("IncompleteData");
        }
    };
    UserService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    UserService.prototype.saveBook = function (bookId, username, callback) {
        var data = {
            username: username,
            bookId: bookId
        };
        var config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('user/saveBook', data, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.saveRequestedBook = function (username, bookTitle, callback) {
        var data = {
            username: username,
            bookTitle: bookTitle
        };
        var config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('user/saveRequestForABook', data, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.getUserSavedBooks = function (username, callback) {
        var config = {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('user/getUserSavedBooks/' + username, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.getUserRequestedBooks = function (username, callback) {
        var config = {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('user/getUserRequestedBooks/' + username, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.getBorrowedBooks = function (username, callback) {
        var config = {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('user/getBorrowedBooks/' + username, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.getUserOffers = function (username, callback) {
        var config = {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('user/getUserOffers/' + username, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.updateRequestStatus = function (offer, callback) {
        var config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('user/updateRequestStatus', offer, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.deleteRequest = function (requestId, callback) {
        var config = {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        };
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('user/deleteRequest/' + requestId, config)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.createAccount = function (user, callback) {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('user/createAccount', user)
            .then(function (response) {
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.authenticateUser = function (user, callback) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('user/authenticate', user)
            .then(function (response) {
            _this.setUserdata(response.data.token, response.data.user);
            callback(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserService.prototype.setUserdata = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    };
    UserService.prototype.getUserData = function () {
        if (this.loggedIn()) {
            return JSON.parse(localStorage.getItem('user'));
        }
        else {
            return { name: "", username: "", email: "" };
        }
    };
    UserService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('token');
    };
    UserService.prototype.logOut = function () {
        this.token = null;
        this.user = null;
        localStorage.clear();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
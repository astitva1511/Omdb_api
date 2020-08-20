(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/omdb.service.ts":
/*!*************************************!*\
  !*** ./src/app/api/omdb.service.ts ***!
  \*************************************/
/*! exports provided: OmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmdbService", function() { return OmdbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class OmdbService {
    constructor(http) {
        this.http = http;
    }
    searchMovies() {
        if (this.movieTitle === undefined || this.movieTitle === null) {
            this.movieTitle = '';
        }
        const url = 'https://primeprojects.club:3003/omdb/search?title=' + this.movieTitle;
        return this.http.get(url);
    }
    searchMoviesByid() {
        if (this.imdbID === undefined || this.imdbID === null) {
            this.imdbID = '';
        }
        const url = 'https://primeprojects.club:3003/omdb/imdb/' + this.imdbID;
        return this.http.get(url);
    }
}
OmdbService.ɵfac = function OmdbService_Factory(t) { return new (t || OmdbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OmdbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OmdbService, factory: OmdbService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OmdbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");







const routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'movie/:imdbId', component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'app-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _api_omdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/omdb.service */ "./src/app/api/omdb.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _api_omdb_service__WEBPACK_IMPORTED_MODULE_4__["OmdbService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
        _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                    _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
                ],
                providers: [
                    _api_omdb_service__WEBPACK_IMPORTED_MODULE_4__["OmdbService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_omdb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/omdb.service */ "./src/app/api/omdb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class HomeComponent {
    constructor(omdbService, router) {
        this.omdbService = omdbService;
        this.router = router;
    }
    ngOnInit() {
    }
    onSearch() {
        this.omdbService.movieTitle = this.movieTitle;
        this.router.navigate(['/search']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_omdb_service__WEBPACK_IMPORTED_MODULE_1__["OmdbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 1, consts: [[1, "header"], [1, "zoom"], [1, "background"], [1, "search", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "search-btn", 3, "click"], [1, "fixed-footer"], [1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search for a Movie , TV series , Cartoons...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_4_listener($event) { return ctx.movieTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Copyright \u00A9 2020 ---------- primeprojects.club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movieTitle);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".background[_ngcontent-%COMP%] {\n  background-image: url(\"https://image.shutterstock.com/z/stock-photo-film-movie-background-clapperboard-and-film-reels-in-theater-644371840.jpg\");\n  display: flex;\n  background-color: #ae96ce;\n  background-repeat: no-repeat;\n  justify-content: center;\n  margin-left: 8px;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n}\n\n.search[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 350px;\n  margin-top: -250px;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-image: url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBe59K3sp774__j564xh_HPp1a0R6oIcgMQA&usqp=CAU\");\n  font-size: 150px;\n  font-style: Bold;\n  border-style: outset;\n  border-color: black;\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  text-shadow: 2px 2px 5px white;\n  height: 100px;\n}\n\n.zoom[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  \n}\n\n.search-btn[_ngcontent-%COMP%] {\n  margin-top: -250px;\n}\n\n.fixed-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  background: #333;\n  padding: 10px 0;\n  color: #fff;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcV2ViX1Byb2plY3RcXGRlbXV4LXByb2plY3RcXGFwcC11aS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsZ0pBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0E7RUFDRSw4SEFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQXVCLHFGQUFBO0FDQ3pCOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAvL2JhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xyXG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoOSw5LDEyMSwxKSA2JSwgcmdiYSgwLDIxMiwyNTUsMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZS5zaHV0dGVyc3RvY2suY29tL3ovc3RvY2stcGhvdG8tZmlsbS1tb3ZpZS1iYWNrZ3JvdW5kLWNsYXBwZXJib2FyZC1hbmQtZmlsbS1yZWVscy1pbi10aGVhdGVyLTY0NDM3MTg0MC5qcGdcIik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxNTAsIDIwNik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBtYXJnaW4tdG9wOiAtMjUwcHg7XHJcbn1cclxuLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibiUzQUFOZDlHY1NCZTU5SzNzcDc3NF9fajU2NHhoX0hQcDFhMFI2b0ljZ01RQSZ1c3FwPUNBVVwiKTtcclxuICBmb250LXNpemU6IDE1MHB4O1xyXG4gIGZvbnQtc3R5bGU6IEJvbGQ7XHJcbiAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uem9vbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xyXG59XHJcbi5zZWFyY2gtYnRuIHtcclxuICBtYXJnaW4tdG9wOiAtMjUwcHg7XHJcbn1cclxuXHJcbi5maXhlZC1mb290ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkOyAgICAgICAgXHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2Uuc2h1dHRlcnN0b2NrLmNvbS96L3N0b2NrLXBob3RvLWZpbG0tbW92aWUtYmFja2dyb3VuZC1jbGFwcGVyYm9hcmQtYW5kLWZpbG0tcmVlbHMtaW4tdGhlYXRlci02NDQzNzE4NDAuanBnXCIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWU5NmNlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5zZWFyY2gge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLXRvcDogLTI1MHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym4lM0FBTmQ5R2NTQmU1OUszc3A3NzRfX2o1NjR4aF9IUHAxYTBSNm9JY2dNUUEmdXNxcD1DQVVcIik7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG4gIGZvbnQtc3R5bGU6IEJvbGQ7XG4gIGJvcmRlci1zdHlsZTogb3V0c2V0O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnpvb206aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgbWFyZ2luLXRvcDogLTI1MHB4O1xufVxuXG4uZml4ZWQtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgcGFkZGluZzogMTBweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm90dG9tOiAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _api_omdb_service__WEBPACK_IMPORTED_MODULE_1__["OmdbService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_omdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/omdb.service */ "./src/app/api/omdb.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MovieComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rated_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rated_r4.Source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rated_r4.Value);
} }
function MovieComponent_a_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](actor_r5);
} }
function MovieComponent_a_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const director_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](director_r6);
} }
function MovieComponent_a_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](language_r7);
} }
class MovieComponent {
    constructor(router, omdbService) {
        this.router = router;
        this.omdbService = omdbService;
    }
    ngOnInit() {
        this.imdbID = this.omdbService.imdbID;
        this.searchMoviesByid();
    }
    ngOnDestroy() {
        this.searchMovieByidSub.unsubscribe();
    }
    searchMoviesByid() {
        this.searchMovieByidSub = this.omdbService.searchMoviesByid().subscribe(res => this.searchSuccess(res), err => this.searchError(err));
    }
    searchSuccess(res) {
        this.details = res;
        console.log(this.details.Title);
    }
    searchError(err) {
        console.log(err);
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_omdb_service__WEBPACK_IMPORTED_MODULE_2__["OmdbService"])); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 60, vars: 16, consts: [["lang", "en"], ["charset", "utf-8"], [1, "body"], [1, "container", "header"], [1, "row"], [1, "col-sm-10", "movi"], [1, "moviTitle"], [1, "moviRate"], [1, "col-sm-2"], [1, "tableFor"], [4, "ngFor", "ngForOf"], [1, "imdbFor"], [1, "col-sm-9"], [1, "production"], [1, "plot"], [1, "plot-heading"], [1, "para"], [1, "col-sm-3"], [1, "image", 3, "src"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], [1, "fixed-footer"], [1, "container"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MovieComponent_tr_17_Template, 5, 2, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "IMDB Votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Actors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MovieComponent_a_40_Template, 2, 1, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MovieComponent_a_45_Template, 2, 1, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, MovieComponent_a_56_Template, 2, 1, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Copyright \u00A9 2020 ---------- primeprojects.club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.details.Title, " (", ctx.details.Year, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("", ctx.details.Rated, " ------ ", ctx.details.Released, " ------- ", ctx.details.Genre, "------", ctx.details.Runtime, " (", ctx.details.Type, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details.Ratings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.imdbVotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Production);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Plot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.details.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details.Actors.split(","));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details.Director.split(","));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Awards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details.Language.split(","));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 10px;\n  border-radius: 20px;\n  border-color: midnightblue;\n  margin-left: 0px;\n  max-width: 2140px;\n}\n\n.production[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 40px;\n  text-align: center;\n  font-style: oblique;\n  color: blue;\n  text-shadow: 1px 1px 2px goldenrod, 0 0 25px greenyellow, 0 0 5px red;\n}\n\n.moviTitle[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: lightcoral;\n  font-size: 40px;\n  text-align: center;\n  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;\n}\n\n.moviRate[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0px;\n  text-align: center;\n}\n\n.body[_ngcontent-%COMP%] {\n  background-color: lightgoldenrodyellow;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: verdana;\n  font-size: 20px;\n}\n\n.tableFor[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.imdbFor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.image[_ngcontent-%COMP%] {\n  border-style: solid;\n  margin-top: 10px;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  top: 0px;\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  border-radius: 3px;\n  margin-left: 2px;\n  cursor: pointer;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline;\n  top: -200px;\n  left: 40px;\n}\n\n.plot[_ngcontent-%COMP%] {\n  display: inline;\n  position: relative;\n}\n\n.plot-heading[_ngcontent-%COMP%] {\n  color: brown;\n  margin-left: 30px;\n  border-top-style: solid;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #f335aa;\n  text-indent: 60px;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #3e8e41;\n}\n\n.fixed-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  background: #333;\n  padding: 10px 0;\n  color: #fff;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvRDpcXFdlYl9Qcm9qZWN0XFxkZW11eC1wcm9qZWN0XFxhcHAtdWkvc3JjXFxhcHBcXG1vdmllXFxtb3ZpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxRUFBQTtBQ0FOOztBRElDO0VBQ0csZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7QUNESjs7QURJQztFQUNHLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHRTtFQUNFLHNDQUFBO0FDQUo7O0FES0U7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURJRTtFQUNJLGVBQUE7QUNETjs7QURJRTtFQUNJLFVBQUE7QUNETjs7QURHRTtFQUNJLG1CQUFBO0VBRUEsZ0JBQUE7QUNETjs7QURLRTtFQUNFLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRE1FLGtFQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNISjs7QURLRTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0ZOOztBREtFO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNGTjs7QURJRTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0ROOztBREdFLHlDQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdFLDhCQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0UsNENBQUE7O0FBQ0E7RUFBMkIseUJBQUE7QUNDN0I7O0FEQ0Usb0NBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDRUo7O0FEQ0UsMEZBQUE7O0FBQ0E7RUFDRSx5QkFBQTtBQ0VKOztBRENFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBtaWRuaWdodGJsdWU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMTQwcHg7XHJcblxyXG4gIH1cclxuICAucHJvZHVjdGlvbntcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggZ29sZGVucm9kLCAwIDAgMjVweCBncmVlbnllbGxvdywgMCAwIDVweCByZWQ7XHJcblxyXG4gICAgICBcclxuICB9XHJcbiAubW92aVRpdGxle1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2ssIDAgMCAyNXB4IGJsdWUsIDAgMCA1cHggZGFya2JsdWU7XHJcbiB9XHJcblxyXG4gLm1vdmlSYXRle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gIC5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQocmdiKDY2LCA0NywgMjQwKSwgcmdiKDE1NCwgMjE1LCAyNDMpKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC50YWJsZUZvcntcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmltZGJGb3J7XHJcbiAgICAgIGNvbG9yOiByZWQ7O1xyXG4gIH1cclxuICAuaW1hZ2V7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIFxyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuZHJvcGJ0biB7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHRvcDogLTIwMHB4O1xyXG4gICAgbGVmdDogNDBweDtcclxuICB9XHJcbiAgLnBsb3R7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBcclxuICB9XHJcbiAgLnBsb3QtaGVhZGluZ3tcclxuICAgICAgY29sb3I6IGJyb3duO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgfVxyXG4gIC5wYXJhe1xyXG4gICAgICBjb2xvcjpyZ2IoMjQzLCA1MywgMTcwKTsgXHJcbiAgICAgIHRleHQtaW5kZW50OiA2MHB4O1xyXG4gIH1cclxuICAvKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxfVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICB9XHJcblxyXG4gIC5maXhlZC1mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgICAgICAgIFxyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn0iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1jb2xvcjogbWlkbmlnaHRibHVlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXgtd2lkdGg6IDIxNDBweDtcbn1cblxuLnByb2R1Y3Rpb24ge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgY29sb3I6IGJsdWU7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBnb2xkZW5yb2QsIDAgMCAyNXB4IGdyZWVueWVsbG93LCAwIDAgNXB4IHJlZDtcbn1cblxuLm1vdmlUaXRsZSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IGxpZ2h0Y29yYWw7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2ssIDAgMCAyNXB4IGJsdWUsIDAgMCA1cHggZGFya2JsdWU7XG59XG5cbi5tb3ZpUmF0ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogdmVyZGFuYTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGFibGVGb3Ige1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5pbWRiRm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmltYWdlIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRyb3BidG4ge1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0b3A6IC0yMDBweDtcbiAgbGVmdDogNDBweDtcbn1cblxuLnBsb3Qge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBsb3QtaGVhZGluZyB7XG4gIGNvbG9yOiBicm93bjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xufVxuXG4ucGFyYSB7XG4gIGNvbG9yOiAjZjMzNWFhO1xuICB0ZXh0LWluZGVudDogNjBweDtcbn1cblxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG59XG5cbi5maXhlZC1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3R0b206IDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie',
                templateUrl: './movie.component.html',
                styleUrls: ['./movie.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _api_omdb_service__WEBPACK_IMPORTED_MODULE_2__["OmdbService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_omdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/omdb.service */ "./src/app/api/omdb.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SearchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_7_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const movie_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.movieDetails("" + movie_r1.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", movie_r1.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Year : ", movie_r1.Year, " , Type: ", movie_r1.Type, " ");
} }
class SearchComponent {
    constructor(router, omdbService) {
        this.router = router;
        this.omdbService = omdbService;
        this.movies = [];
    }
    ngOnInit() {
        // Angular Lifecycle Stages Hooks
        // OnInit, OnChanges ( Input Changes ), OnDestoy
        this.movieTitle = this.omdbService.movieTitle;
        this.searchMovies();
    }
    ngOnDestroy() {
        this.searchMovieSub.unsubscribe();
    }
    searchMovies() {
        this.searchMovieSub = this.omdbService.searchMovies().subscribe(res => this.searchSuccess(res), err => this.searchError(err));
    }
    searchSuccess(res) {
        this.movies = res.Search;
        console.log(this.movies);
    }
    searchError(err) {
        console.log(err);
    }
    onSearch() {
        this.omdbService.movieTitle = this.movieTitle;
        this.searchMovies();
    }
    movieDetails(imdbID) {
        this.omdbService.imdbID = imdbID;
        this.router.navigate(['/movie/:' + imdbID]);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_omdb_service__WEBPACK_IMPORTED_MODULE_2__["OmdbService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 8, vars: 2, consts: [[1, "background"], [1, "search", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "search-btn", 3, "click"], [1, "container"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", 2, "width", "18rem"], [1, "bd-placeholder-img", "card-img-top", 2, "width", "18rem", "height", "18rem", "overflow", "hidden"], [2, "width", "18rem", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["type", "button", 1, "btn", "btn-danger", "view-btn", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.movieTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_div_7_Template, 12, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.movieTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".background[_ngcontent-%COMP%] {\n  background: #020024;\n  background: linear-gradient(120deg, #020024 0%, #090979 6%, #00d4ff 100%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 20vh;\n  padding: 10px;\n}\n\n.search[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 350px;\n  margin-top: -16px;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  margin-top: -16px;\n}\n\n.view-btn[_ngcontent-%COMP%] {\n  border-color: black;\n  border: black;\n  border-width: thick;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0Q6XFxXZWJfUHJvamVjdFxcZGVtdXgtcHJvamVjdFxcYXBwLXVpL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EseUVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDksOSwxMjEsMSkgNiUsIHJnYmEoMCwyMTIsMjU1LDEpIDEwMCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwdmg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTZweDtcclxufVxyXG5cclxuLnNlYXJjaC1idG4ge1xyXG4gIG1hcmdpbi10b3A6IC0xNnB4O1xyXG59XHJcblxyXG4udmlldy1idG57XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogdGhpY2s7XHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICMwMjAwMjQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMwMjAwMjQgMCUsICMwOTA5NzkgNiUsICMwMGQ0ZmYgMTAwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xufVxuXG4uc2VhcmNoLWJ0biB7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xufVxuXG4udmlldy1idG4ge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IHRoaWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _api_omdb_service__WEBPACK_IMPORTED_MODULE_2__["OmdbService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web_Project\demux-project\app-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
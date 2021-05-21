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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_recherche_avancee_recherche_avancee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/recherche-avancee/recherche-avancee.component */ "./src/app/components/recherche-avancee/recherche-avancee.component.ts");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/components/statistics/statistics.component.ts");







const routes = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'advanced-search',
        component: _components_recherche_avancee_recherche_avancee_component__WEBPACK_IMPORTED_MODULE_3__["RechercheAvanceeComponent"]
    },
    {
        path: 'statistics',
        component: _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AppComponent {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon("logo-c", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Logo-c.svg"));
        this.matIconRegistry.addSvgIcon("logo-full", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Logo-full.svg"));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_pipe_get_revue_name_by_id_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/pipe/get-revue-name-by-id.pipe */ "./src/app/services/pipe/get-revue-name-by-id.pipe.ts");
/* harmony import */ var _services_pipe_get_widget_sjr_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/pipe/get-widget-sjr.pipe */ "./src/app/services/pipe/get-widget-sjr.pipe.ts");
/* harmony import */ var _components_home_modal_info_journal_modal_info_journal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/modal-info-journal/modal-info-journal.component */ "./src/app/components/home/modal-info-journal/modal-info-journal.component.ts");
/* harmony import */ var _components_recherche_avancee_recherche_avancee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/recherche-avancee/recherche-avancee.component */ "./src/app/components/recherche-avancee/recherche-avancee.component.ts");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/components/statistics/statistics.component.ts");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/__ivy_ngcc__/fesm2015/ngx-masonry.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__["NgxChartsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_masonry__WEBPACK_IMPORTED_MODULE_16__["NgxMasonryModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
        _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__["StatisticsComponent"],
        _components_home_modal_info_journal_modal_info_journal_component__WEBPACK_IMPORTED_MODULE_13__["ModalInfoJournalComponent"],
        _components_recherche_avancee_recherche_avancee_component__WEBPACK_IMPORTED_MODULE_14__["RechercheAvanceeComponent"],
        _services_pipe_get_revue_name_by_id_pipe__WEBPACK_IMPORTED_MODULE_11__["GetRevueNameByIdPipe"],
        _services_pipe_get_widget_sjr_pipe__WEBPACK_IMPORTED_MODULE_12__["GetWidgetSjrPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__["NgxChartsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ngx_masonry__WEBPACK_IMPORTED_MODULE_16__["NgxMasonryModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                    _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__["StatisticsComponent"],
                    _components_home_modal_info_journal_modal_info_journal_component__WEBPACK_IMPORTED_MODULE_13__["ModalInfoJournalComponent"],
                    _components_recherche_avancee_recherche_avancee_component__WEBPACK_IMPORTED_MODULE_14__["RechercheAvanceeComponent"],
                    _services_pipe_get_revue_name_by_id_pipe__WEBPACK_IMPORTED_MODULE_11__["GetRevueNameByIdPipe"],
                    _services_pipe_get_widget_sjr_pipe__WEBPACK_IMPORTED_MODULE_12__["GetWidgetSjrPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__["NgxChartsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    ngx_masonry__WEBPACK_IMPORTED_MODULE_16__["NgxMasonryModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_call_for_paper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/call-for-paper.service */ "./src/app/services/call-for-paper.service.ts");
/* harmony import */ var src_app_services_revue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/revue.service */ "./src/app/services/revue.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modal_info_journal_modal_info_journal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-info-journal/modal-info-journal.component */ "./src/app/components/home/modal-info-journal/modal-info-journal.component.ts");
/* harmony import */ var src_app_services_editeur_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/editeur.service */ "./src/app/services/editeur.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _services_pipe_get_revue_name_by_id_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/pipe/get-revue-name-by-id.pipe */ "./src/app/services/pipe/get-revue-name-by-id.pipe.ts");
/* harmony import */ var _services_pipe_get_widget_sjr_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/pipe/get-widget-sjr.pipe */ "./src/app/services/pipe/get-widget-sjr.pipe.ts");


























function HomeComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const editeur_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", editeur_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](editeur_r15.name);
} }
function HomeComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " View details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r16.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Journal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_td_45_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.openDialog(item_r17.fk_revue); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "getRevueNameById");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r17.fk_revue)));
} }
function HomeComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.desc);
} }
function HomeComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deadline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_51_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r21.deadline, "yyyy-MM-dd"));
} }
function HomeComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_td_51_span_1_Template, 3, 4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.deadline !== null)("ngIfElse", _r9);
} }
function HomeComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SJR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "getWidgetSjr");
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, item_r24.fk_revue)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function HomeComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 43);
} }
function HomeComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class HomeComponent {
    // Création du formulaire
    constructor(callService, revueService, editeurService, dialog, formBuilder) {
        this.callService = callService;
        this.revueService = revueService;
        this.editeurService = editeurService;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        // Nom des colonnes du tableau
        this.displayedColumns = ['title', 'journal', 'description', 'deadline', 'SJR'];
        // Tableau de données lié au tableau, ici les Calls for Paper, déclaré à un tableau vide
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]([]);
        this.checkoutForm = this.formBuilder.group({
            rank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            editeur: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
    }
    // Récupération des données via les appels API du service de Revue et CallsForPaper
    ngOnInit() {
        this.callService.getCalls().subscribe((res) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
        this.revueService.getRevues().subscribe((res => {
            this.revueList = res;
        }));
        this.editeurService.getEditeurs().subscribe((res) => {
            this.editeurList = res;
        });
        this.checkoutForm.value.rank = "none";
        this.dataSource.filterPredicate = (data, filter) => data.journal.name.trim().toLowerCase().indexOf(filter) !== -1 ||
            data.title.trim().toLowerCase().indexOf(filter) !== -1 ||
            data.description.trim().toLowerCase().indexOf(filter) !== -1;
    }
    // Filtre les calls en fonction de leur rank et/ou de leur editeur
    onSubmitQuickSearch() {
        this.callService.getCallsByRank(this.checkoutForm.value.rank).subscribe((calls) => {
            if (this.checkoutForm.value.editeur !== "all") {
                // On filtre le resultat avec les calls appartenant à l'éditeur selectionné
                calls = calls.filter((call) => {
                    let revueDuCall = this.getRevueById(call.fk_revue);
                    return revueDuCall.fk_editeur === this.checkoutForm.value.editeur;
                });
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](calls);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    // Méthode d'ouverture du Dialog
    openDialog(id) {
        let revue = this.getRevueById(id);
        if (revue.isOpenAccess)
            this.openAccess = "Yes";
        else
            this.openAccess = "No";
        this.dialog.open(_modal_info_journal_modal_info_journal_component__WEBPACK_IMPORTED_MODULE_9__["ModalInfoJournalComponent"], {
            data: { revue: revue, openAccess: this.openAccess }
        });
    }
    // Retourne une revue en fonction de son id, utile car dans l'objet CallForPaper nous stockons une clé étrangère vers une révue qui correspond à l'id d'une revue
    getRevueById(id) {
        for (var i = 0; i < this.revueList.length; i++) {
            var temp = this.revueList[i];
            if (temp.id == id) {
                return temp;
            }
        }
    }
    // Métode d'Angular Material pour le filtre sur les données via le champ prévu à cet effet
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    // Get le nom d'une revue par son ID
    getRevueNameById(id) {
        return this.revueService.getRevueById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => value[0].name));
    }
    // Get le widget de la revue en fonction de son id
    getRevueWidgetById(id) {
        return this.revueService.getRevueById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => value[0].sjr));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_call_for_paper_service__WEBPACK_IMPORTED_MODULE_1__["CallForPaperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_revue_service__WEBPACK_IMPORTED_MODULE_2__["RevueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_editeur_service__WEBPACK_IMPORTED_MODULE_10__["EditeurService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 60, vars: 10, consts: [[1, "docs-primary-header", "mat-elevation-z6"], [1, "content"], ["matInput", "", "placeholder", "Ex. management", 3, "keyup"], [1, "quickSearchForm", 3, "formGroup", "ngSubmit"], [1, "radioGroupRank"], [2, "margin-right", "10px"], ["id", "none", "type", "radio", "value", "None", "formControlName", "rank"], ["for", "none"], ["id", "cnrs", "type", "radio", "value", "CNRS", "formControlName", "rank"], ["for", "cnrs"], ["id", "fnege", "type", "radio", "value", "FNEGE", "formControlName", "rank"], ["for", "fnege"], ["id", "hceres", "type", "radio", "value", "HCERES", "formControlName", "rank"], ["for", "hceres"], ["name", "editeurs", "formControlName", "editeur", 3, "ngModel"], ["value", "all", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn"], [1, "material-icons", "icon"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "journal"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "description"], ["mat-cell", "", "style", "text-align: justify;", 4, "matCellDef"], ["matColumnDef", "deadline", 1, "deadline_cell"], ["empty_deadline", ""], ["matColumnDef", "SJR"], ["mat-cell", "", "id", "sjr", 3, "innerHTML", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-button", "", "target", "_blank", 1, "btn-details", 3, "href"], ["mat-header-cell", ""], ["mat-button", "", 1, "mat-button-size", 3, "click"], ["mat-cell", "", 2, "text-align", "justify"], [4, "ngIf", "ngIfElse"], ["mat-cell", "", "id", "sjr", 3, "innerHTML"], ["mat-header-row", ""], ["mat-row", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Grouping of all Calls For Papers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Filter by title/journal/description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_Template_input_keyup_7_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmitQuickSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rank :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "CNRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "FNEGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "HCERES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Publisher :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_option_34_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HomeComponent_th_41_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HomeComponent_td_42_Template, 7, 2, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HomeComponent_th_44_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HomeComponent_td_45_Template, 5, 5, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HomeComponent_th_47_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, HomeComponent_td_48_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HomeComponent_th_50_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, HomeComponent_td_51_Template, 2, 2, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, HomeComponent_ng_template_52_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HomeComponent_th_55_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HomeComponent_td_56_Template, 3, 5, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, HomeComponent_tr_57_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, HomeComponent_tr_58_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-paginator", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.editeurList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _services_pipe_get_revue_name_by_id_pipe__WEBPACK_IMPORTED_MODULE_15__["GetRevueNameByIdPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _services_pipe_get_widget_sjr_pipe__WEBPACK_IMPORTED_MODULE_16__["GetWidgetSjrPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  \n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\ntd[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.mat-row[_ngcontent-%COMP%] {\n  height: 90px;\n}\n.mat-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #E8E7E7;\n}\n.mat-column-deadline[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 7% !important;\n  width: 7% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.mat-column-title[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.mat-column-journal[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.mat-column-description[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 50% !important;\n  width: 50% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.mat-column-SJR[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 7% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n.mat-cell[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.mat-button-size[_ngcontent-%COMP%] {\n  width: 220px!important;\n  min-width: unset!important;\n  white-space: pre-wrap !important;\n  line-height: normal;\n  text-decoration: underline;\n}\n.mat-button-size[_ngcontent-%COMP%]:hover {\n  color: orange;\n}\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #f4511e;\n  border: none;\n  color: white;\n  padding: 8px 15px;\n  text-align: center;\n  opacity: 0.6;\n  transition: 0.3s;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 20px;\n  margin-left: 15px;\n}\n.btn-details[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  border: none;\n  color: white;\n  padding: 5px 16px;\n  text-align: center;\n  transition: 0.3s;\n  opacity: 0.8;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 20px;\n  font-size: 13px;\n  margin-top: 8px;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  opacity: 1\n}\n.btn-details[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1); \n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 6px;\n}\n#sjr[_ngcontent-%COMP%] {\n  transition: transform .2s;\n}\n#sjr[_ngcontent-%COMP%]:hover {\n  position: relative;\n  transform: scale(1.5);\n  border: none;\n  z-index: 200;\n}\n.quickSearchForm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 45%;\n  margin-bottom: 15px;\n}\nselect[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  border: 1px solid #999;\n  background-color: #eee;\n  border-radius: 5px;\n  box-shadow: 2px 2px #ccc;\n}\n.radioGroupRank[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: space-between;\n  width: 42%;\n}\ninput[type=\"radio\"][_ngcontent-%COMP%] {\n  display: none;\n}\ninput[type=\"radio\"][_ngcontent-%COMP%]    + *[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  vertical-align: bottom;\n  width: 0.9rem;\n  height: 0.9rem;\n  margin-right: 0.3rem;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-color: gray;\n}\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked    + *[_ngcontent-%COMP%] {\n  color: #673ab7;\n  border: none;\n}\ninput[type=\"radio\"][_ngcontent-%COMP%]:checked    + *[_ngcontent-%COMP%]::before {\n  background: radial-gradient(#673ab7 0%, #673ab7 40%, transparent 50%, transparent);\n  border-color: #673ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7QUFDRjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRSxrRkFBa0Y7RUFDbEYscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0cnVjdHVyZSAqL1xudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgLyogdGFibGUtbGF5b3V0OiBmaXhlZDsgKi9cbn1cbiAgXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYXQtcm93IHtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFN0U3O1xufVxuXG4ubWF0LWNvbHVtbi1kZWFkbGluZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDclICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXRpdGxlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1qb3VybmFsIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDUwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tU0pSIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY2VsbCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tYXQtYnV0dG9uLXNpemUge1xuICB3aWR0aDogMjIwcHghaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHVuc2V0IWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubWF0LWJ1dHRvbi1zaXplOmhvdmVyIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjY7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmJ0bi1kZXRhaWxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDAuODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMVxufVxuXG4uYnRuLWRldGFpbHM6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IFxufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuI3NqciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG59XG5cbiNzanI6aG92ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgYm9yZGVyOiBub25lO1xuICB6LWluZGV4OiAyMDA7XG59XG5cbi5xdWlja1NlYXJjaEZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuc2VsZWN0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjY2NjO1xufVxuXG4ucmFkaW9Hcm91cFJhbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDQyJTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgKjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICB3aWR0aDogMC45cmVtO1xuICBoZWlnaHQ6IDAuOXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XG4gIGJvcmRlci1jb2xvcjogZ3JheTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAqIHtcbiAgY29sb3I6ICM2NzNhYjc7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAqOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzY3M2FiNyAwJSwgIzY3M2FiNyA0MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItY29sb3I6ICM2NzNhYjc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_call_for_paper_service__WEBPACK_IMPORTED_MODULE_1__["CallForPaperService"] }, { type: src_app_services_revue_service__WEBPACK_IMPORTED_MODULE_2__["RevueService"] }, { type: src_app_services_editeur_service__WEBPACK_IMPORTED_MODULE_10__["EditeurService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/home/modal-info-journal/modal-info-journal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/home/modal-info-journal/modal-info-journal.component.ts ***!
  \************************************************************************************/
/*! exports provided: ModalInfoJournalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoJournalComponent", function() { return ModalInfoJournalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function ModalInfoJournalComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.revue.rankFNEGE, " ");
} }
function ModalInfoJournalComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data.revue.rankHCERES, " ");
} }
function ModalInfoJournalComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.data.revue.rankCNRS, " ");
} }
function ModalInfoJournalComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ModalInfoJournalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    // Méthode qui ferme le dialog
    onNoClick() {
        this.dialogRef.close();
    }
}
ModalInfoJournalComponent.ɵfac = function ModalInfoJournalComponent_Factory(t) { return new (t || ModalInfoJournalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ModalInfoJournalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalInfoJournalComponent, selectors: [["app-modal-info-journal"]], decls: 28, vars: 8, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf", "ngIfElse"], ["empty_rank", ""], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], [1, "material-icons", "icon"]], template: function ModalInfoJournalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Journal informations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rank FNEGE :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalInfoJournalComponent_span_10_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rank HCERES :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModalInfoJournalComponent_span_14_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Rank CNRS :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ModalInfoJournalComponent_span_18_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Is Open Source :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ModalInfoJournalComponent_ng_template_23_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalInfoJournalComponent_Template_button_click_26_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.revue.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.revue.rankFNEGE)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.revue.rankHCERES && ctx.data.revue.rankHCERES !== " ")("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.revue.rankCNRS)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.openAccess, "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["label[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 8px;\n}\n\nb[_ngcontent-%COMP%] {\n    margin-inline: 4px;\n}\n\n.icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL21vZGFsLWluZm8tam91cm5hbC9tb2RhbC1pbmZvLWpvdXJuYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL21vZGFsLWluZm8tam91cm5hbC9tb2RhbC1pbmZvLWpvdXJuYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuYiB7XG4gICAgbWFyZ2luLWlubGluZTogNHB4O1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalInfoJournalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-info-journal',
                templateUrl: './modal-info-journal.component.html',
                styleUrls: ['./modal-info-journal.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");









class MenuComponent {
    constructor() {
        this.title = "Hube Call";
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 24, vars: 0, consts: [["color", "primary"], ["fxShow", "true", "fxHide.gt-sm", "true"], ["mat-icon-button", "", 3, "click"], ["mat-button", "", "id", "logo", "routerLink", "/home"], ["src", "../../assets/images/logo.png", "alt", "Yo", "width", "165", "height", "66"], [1, "menu-spacer"], ["fxShow", "true", "fxHide.lt-md", "true"], ["mat-button", "", "routerLink", "/home"], ["mat-button", "", "routerLink", "/advanced-search"], ["mat-button", "", "routerLink", "/statistics"], ["fxFlexFill", ""], ["color", "primary", "fxLayout", "column", "mode", "over", "opened", "false", "fxHide.gt-sm", "true"], ["sidenav", ""], ["fxLayout", "column"], ["mat-button", "", "routerLink", "/about-us"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "All Calls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Advanced search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-sidenav-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Calls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexFillDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"]], styles: ["#logo[_ngcontent-%COMP%] {\n    padding: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n    margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28ge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmltZyB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/recherche-avancee/recherche-avancee.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/recherche-avancee/recherche-avancee.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RechercheAvanceeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechercheAvanceeComponent", function() { return RechercheAvanceeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");






function RechercheAvanceeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Abstract required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "field-has-error": a0 }; };
class RechercheAvanceeComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.error = {};
    }
    ngOnInit() {
        this.rechercheAvanceeFormGroup = this.formBuilder.group({
            abstract: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5000)]]
        });
    }
    onSubmit() {
        if (this.rechercheAvanceeFormGroup.valid) {
            this.error = {}; // il n'y a plus d'erreur sur les champs du formulaire
            // SUITE
        }
        else {
            this.affichageErreur();
        }
    }
    // Remplie le champs 'error' en fonction de l'état du formulaire pour afficher les erreurs
    affichageErreur() {
        this.error.abstract = !this.isFieldValid('abstract');
    }
    // Retourne true si le champs 'fied' n'est pas valide
    isFieldValid(field) {
        return this.rechercheAvanceeFormGroup.get(field).valid;
    }
}
RechercheAvanceeComponent.ɵfac = function RechercheAvanceeComponent_Factory(t) { return new (t || RechercheAvanceeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RechercheAvanceeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RechercheAvanceeComponent, selectors: [["app-recherche-avancee"]], decls: 19, vars: 5, consts: [[1, "docs-primary-header", "mat-elevation-z6"], [1, "content"], [3, "formGroup", "submit"], [1, "explication"], [2, "width", "30%"], [1, "abstract-info"], ["for", "abstract"], ["class", "error", 4, "ngIf"], [1, "material-icons", "icon"], ["formControlName", "abstract", "maxlength", "5000", "placeholder", "Enter your paper abstract here", 1, "abstract-field", 3, "ngClass", "keyup"], ["type", "submit", 1, "btn"], [1, "error"]], template: function RechercheAvanceeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Find Calls For Papers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RechercheAvanceeComponent_Template_form_submit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enter abstract of your paper to easily find appropriate calls for paper by using text-mining technology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Paper abstract *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RechercheAvanceeComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maximum 5,000 characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RechercheAvanceeComponent_Template_textarea_keyup_16_listener() { return ctx.affichageErreur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rechercheAvanceeFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error.abstract);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.error.abstract));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"]], styles: ["form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column wrap;\n    align-items: center;\n    margin-inline: 20%;\n}\n\n\n.error[_ngcontent-%COMP%] {\n    color: red;\n}\n\n\n.field-has-error[_ngcontent-%COMP%] {\n    border-color: red;\n}\n\n\n.abstract-info[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-flex;\n    justify-content: space-between;\n    margin-top: 30px;\n}\n\n\n.abstract-info[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\n\n.abstract-info[_ngcontent-%COMP%]    > em[_ngcontent-%COMP%] {\n    display: inline-flex;\n    font-size: 12px;\n}\n\n\n.abstract-field[_ngcontent-%COMP%] {\n    height: 350px;\n    width: 100%;\n    margin-block: 5px 10px;\n}\n\n\n.btn[_ngcontent-%COMP%] {\n    background-color: #f4511e;\n    border: none;\n    color: white;\n    padding: 16px 32px;\n    text-align: center;\n    font-size: 16px;\n    opacity: 0.6;\n    transition: 0.3s;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n.btn[_ngcontent-%COMP%]:hover {\n    opacity: 1\n}\n\n\n.icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-left: 5px;\n}\n\n\n.explication[_ngcontent-%COMP%] {\n    font-size: 19px;\n    font-style: italic;\n    margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNoZXJjaGUtYXZhbmNlZS9yZWNoZXJjaGUtYXZhbmNlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUlBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSTtBQUNKOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2hlcmNoZS1hdmFuY2VlL3JlY2hlcmNoZS1hdmFuY2VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4taW5saW5lOiAyMCU7XG59XG5cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uZmllbGQtaGFzLWVycm9yIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuXG5cbi5hYnN0cmFjdC1pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmFic3RyYWN0LWluZm8gPiBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYWJzdHJhY3QtaW5mbyA+IGVtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hYnN0cmFjdC1maWVsZCB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYmxvY2s6IDVweCAxMHB4O1xufVxuXG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bjpob3ZlciB7XG4gICAgb3BhY2l0eTogMVxufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5leHBsaWNhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RechercheAvanceeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recherche-avancee',
                templateUrl: './recherche-avancee.component.html',
                styleUrls: ['./recherche-avancee.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/statistics/statistics.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/statistics/statistics.component.ts ***!
  \***************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/__ivy_ngcc__/fesm2015/ngx-masonry.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var src_app_services_revue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/revue.service */ "./src/app/services/revue.service.ts");
/* harmony import */ var src_app_services_editeur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/editeur.service */ "./src/app/services/editeur.service.ts");
/* harmony import */ var src_app_services_call_for_paper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/call-for-paper.service */ "./src/app/services/call-for-paper.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var src_app_components_home_modal_info_journal_modal_info_journal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/home/modal-info-journal/modal-info-journal.component */ "./src/app/components/home/modal-info-journal/modal-info-journal.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_pipe_get_revue_name_by_id_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/pipe/get-revue-name-by-id.pipe */ "./src/app/services/pipe/get-revue-name-by-id.pipe.ts");





















function StatisticsComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Journal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatisticsComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatisticsComponent_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openDialog(item_r6.revue.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "getRevueNameById");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r6.revue.id)), " ");
} }
function StatisticsComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number of calls ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatisticsComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.nbCall, " ");
} }
function StatisticsComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function StatisticsComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
class StatisticsComponent {
    constructor(revueService, editeurService, callService, dialog) {
        this.revueService = revueService;
        this.editeurService = editeurService;
        this.callService = callService;
        this.dialog = dialog;
        this.masonryOptions = {
            gutter: 20,
        };
        // Nombre de call par editeur
        this.callByEditeur = [];
        // Nombre call par mois
        this.callByMonth = [];
        // Couleurs des élements des graphiques de la page statistiques
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // Variable de construction des tuiles de la page stats
        this.masonryStats = [];
        this.limit = 15;
        // Nom des colonnes du tableau
        this.displayedColumns = ['revue', 'nbCall'];
        // Tableau de données lié au tableau, ici les Calls for Paper, déclaré à un tableau vide
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        // Liste du nombre call 
        this.nbCallList = [];
        // Option du graph du nombre de call par mois 
        this.xAxisLabelCallByMonth = 'Month';
        this.yAxisLabelCallByMonth = 'Number of call';
    }
    // Récupération des données via les appels API des services
    ngOnInit() {
        // Récupération des revue selon le services
        this.revueService.getRevues().subscribe((revueList => {
            this.revueList = revueList;
            this.revueList.forEach(element => {
                this.callService.getNbCallByRevue(element.id).subscribe((number => {
                    let model = { 'revue': element, 'nbCall': number };
                    const data = this.dataSource.data;
                    data.push(model);
                    this.dataSource.data = data;
                }));
            });
        }));
        // Récupéraion des infos concernant le nombre de calls par Editeurs
        this.editeurService.getNbCallByEditeur().subscribe((models => {
            models.forEach(element => {
                let model = { 'name': element.name, 'value': Number(element.value) };
                const data = this.callByEditeur;
                data.push(model);
                this.callByEditeur = [...data];
            });
        }));
        // Récupération du nombre de call par mois 
        this.callService.getNbCallByMonth().subscribe((models => {
            models.forEach(element => {
                let model = { 'name': element.month, 'value': Number(element.number) };
                const data = this.callByMonth;
                data.push(model);
                this.callByMonth = [...data];
            });
        }));
        this.dataSource.filterPredicate = (data, filter) => data.revue.name.trim().toLowerCase().indexOf(filter) !== -1;
    }
    // Méthode d'ouverture du Dialog
    openDialog(id) {
        let revue = this.getRevueById(id);
        if (revue.isOpenAccess)
            this.openAccess = "Yes";
        else
            this.openAccess = "No";
        this.dialog.open(src_app_components_home_modal_info_journal_modal_info_journal_component__WEBPACK_IMPORTED_MODULE_8__["ModalInfoJournalComponent"], {
            data: { revue: revue, openAccess: this.openAccess }
        });
    }
    // Retourne une revue en fonction de son id, utile car dans l'objet CallForPaper nous stockons une clé étrangère vers une révue qui correspond à l'id d'une revue
    getRevueById(id) {
        for (var i = 0; i < this.revueList.length; i++) {
            var temp = this.revueList[i];
            if (temp.id == id) {
                return temp;
            }
        }
    }
    // Métode d'Angular Material pour le filtre sur les données via le champ prévu à cet effet
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_revue_service__WEBPACK_IMPORTED_MODULE_3__["RevueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_editeur_service__WEBPACK_IMPORTED_MODULE_4__["EditeurService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_call_for_paper_service__WEBPACK_IMPORTED_MODULE_5__["CallForPaperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-stats"]], viewQuery: function StatisticsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.masonry = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 34, vars: 19, consts: [[1, "docs-primary-header", "mat-elevation-z6"], [1, "masonry-with-columns-2"], [1, "stats_revue"], [1, "table_stats_revue"], ["matInput", "", "placeholder", "Ex. management", 3, "keyup"], ["mat-table", "", 1, "mat-elevation-z2", 3, "dataSource"], ["matColumnDef", "revue"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nbCall"], ["mat-header-row", "", "class", "mat_row", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "mat_row", 4, "matRowDef", "matRowDefColumns"], [1, "stats_editeurs"], [1, "pie_editeur"], [3, "legend", "scheme", "legendTitle", "labels", "results"], [1, "stats_mensuel"], [1, "chart_mois"], [3, "results", "scheme", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", 1, "mat-button-size", 3, "click"], ["mat-header-row", "", 1, "mat_row"], ["mat-row", "", 1, "mat_row"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Call's satistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Number of calls by journal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Filter by Journal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function StatisticsComponent_Template_input_keyup_14_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StatisticsComponent_th_17_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, StatisticsComponent_td_18_Template, 5, 5, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, StatisticsComponent_th_20_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StatisticsComponent_td_21_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, StatisticsComponent_tr_22_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, StatisticsComponent_tr_23_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Number of calls by publisher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ngx-charts-pie-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Number of calls by month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ngx-charts-bar-vertical", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("legend", true)("scheme", ctx.colorScheme)("legendTitle", "Editors")("labels", true)("results", ctx.callByEditeur);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("results", ctx.callByMonth)("scheme", ctx.colorScheme)("gradient", false)("xAxis", true)("yAxis", true)("legend", true)("showXAxisLabel", true)("showYAxisLabel", true)("xAxisLabel", ctx.xAxisLabelCallByMonth)("yAxisLabel", ctx.yAxisLabelCallByMonth);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["PieChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["BarVerticalComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _services_pipe_get_revue_name_by_id_pipe__WEBPACK_IMPORTED_MODULE_14__["GetRevueNameByIdPipe"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n}\n\n.masonry-with-columns-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;  \n  margin-top: 2%;\n  margin-left: 2%;\n  \n}\n\n.masonry-with-columns-2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n margin-right: 2%; max-height: 600px;\n  padding: 20px;\n  box-shadow: 5px 5px #ccc;\n  color: #f8f8f8;\n  margin: 0 1rem 1rem 0;\n  font-weight: 900;\n  font-size: 2rem;\n  flex: 1 0 auto;\n}\n\n\n\n\n\n.stats_revue[_ngcontent-%COMP%] {\n  background-color: #73439b;\n  width: 38%;\n  border-radius: 25px;\n}\n\n\n\n.mat-form-field[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 14px;\n  height: 10%;\n  width: 100%;\n}\n\n\n\ntable[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 405px;\n  display: block;\n}\n\n.mat-button-size[_ngcontent-%COMP%]:hover {\n  color: orange;\n}\n\n.mat_row[_ngcontent-%COMP%] {\n  max-height: 10px;\n}\n\n.mat-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #E8E7E7;\n}\n\n\n\n.table_stats_revue[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  border-radius: 25px;\n  margin-right: 2%;\n  height: 450px;\n}\n\n\n\n.stats_editeurs[_ngcontent-%COMP%] {\n  width: 55%;\n  border-radius: 25px;\n  background-color: #73439b;\n}\n\n.pie_editeur[_ngcontent-%COMP%]{\n  border-radius: 25px;\n  height: 80%;\n  background-color: #f7f7f7;\n}\n\n\n\n.stats_mensuel[_ngcontent-%COMP%] {\n  width: 80%;\n  border-radius: 25px;\n  background-color: #73439b;\n}\n\n.chart_mois[_ngcontent-%COMP%]{\n  border-radius: 25px;\n  height: 80%;\n  background-color: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7O0FBRXBEO0VBQ0UsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUlFLGFBQWE7RUFHYixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7O0FBRWpCOztBQUVBO0NBQ0MsZ0JBQWdCLEVBQUUsaUJBQWlCO0VBQ2xDLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUlmLGNBQWM7QUFDaEI7O0FBRUEsOEVBQThFOztBQUU5RSxrQkFBa0I7O0FBQ2xCO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQSx3QkFBd0I7O0FBQ3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUEsc0VBQXNFOztBQUV0RTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUEscUVBQXFFOztBQUVyRTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIyMjIyMjIyMjIyMjIyMjIFNUWUxFIENPTU1VTiAjIyMjIyMjIyMjIyMjIyMjIyMgKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm1hc29ucnktd2l0aC1jb2x1bW5zLTIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDsgIFxuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBcbn1cblxuLm1hc29ucnktd2l0aC1jb2x1bW5zLTIgZGl2IHtcbiBtYXJnaW4tcmlnaHQ6IDIlOyBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAjY2NjO1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgbWFyZ2luOiAwIDFyZW0gMXJlbSAwO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMSAwIGF1dG87XG4gIC1tcy1mbGV4OiAxIDAgYXV0bztcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi8qICMjIyMjIyMjIyMjIyMjIyBTVFlMRSA6IFNUQVRTIERVIE5CIERFIENBTExTIFBBUiBSRVZVRSAjIyMjIyMjIyMjIyMjIyMjIyMgKi9cblxuLyogRGl2IHByaW5jaXBhbCAqL1xuLnN0YXRzX3JldnVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNDM5YjtcbiAgd2lkdGg6IDM4JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLyogWm9uZSBkZSByZWNoZXJjaGUgKi8gXG4ubWF0LWZvcm0tZmllbGQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBTdHJ1Y3R1cmUgLSBUYWJsZWF1ICovXG50YWJsZSB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA0MDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYXQtYnV0dG9uLXNpemU6aG92ZXIge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ubWF0X3JvdyB7XG4gIG1heC1oZWlnaHQ6IDEwcHg7XG59XG5cbi5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU3RTc7XG59XG5cbi8qIERpdiBjb25jZXJuYW50IGxlIHRhYmxlYXUgKi9cbi50YWJsZV9zdGF0c19yZXZ1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIGhlaWdodDogNDUwcHg7XG59IFxuXG4vKiAjIyMjIyMjIyMjIyMjIyMgU1RBVFMgRFUgTkIgREUgQ0FMTFMgUEFSIFJFVlVFICMjIyMjIyMjIyMjIyMjIyMjIyAqL1xuXG4uc3RhdHNfZWRpdGV1cnMge1xuICB3aWR0aDogNTUlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM0MzliO1xufVxuXG4ucGllX2VkaXRldXJ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4vKiAjIyMjIyMjIyMjIyMjIyMgU1RBVFMgRFUgTkIgREUgQ0FMTFMgUEFSIE1PSVMgIyMjIyMjIyMjIyMjIyMjIyMjICovXG5cbi5zdGF0c19tZW5zdWVsIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNDM5Yjtcbn1cblxuLmNoYXJ0X21vaXN7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats',
                templateUrl: './statistics.component.html',
                styleUrls: ['./statistics.component.css']
            }]
    }], function () { return [{ type: src_app_services_revue_service__WEBPACK_IMPORTED_MODULE_3__["RevueService"] }, { type: src_app_services_editeur_service__WEBPACK_IMPORTED_MODULE_4__["EditeurService"] }, { type: src_app_services_call_for_paper_service__WEBPACK_IMPORTED_MODULE_5__["CallForPaperService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { masonry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_masonry__WEBPACK_IMPORTED_MODULE_1__["NgxMasonryComponent"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/models/callByMonth.ts":
/*!***************************************!*\
  !*** ./src/app/models/callByMonth.ts ***!
  \***************************************/
/*! exports provided: CallByMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallByMonth", function() { return CallByMonth; });
class CallByMonth {
}


/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");


































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]
        ],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/call-for-paper.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/call-for-paper.service.ts ***!
  \****************************************************/
/*! exports provided: CallForPaperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallForPaperService", function() { return CallForPaperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_callByMonth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/callByMonth */ "./src/app/models/callByMonth.ts");






_models_callByMonth__WEBPACK_IMPORTED_MODULE_3__["CallByMonth"];
// Service permettant la récupration des Calls via des appels API, ne pas oublié de changer l'url en fonction de l'environnement d'execution
class CallForPaperService {
    constructor(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
    }
    getCalls() {
        const url = `${this.apiURL}/getCall`;
        console.log('getCalls |  url = ' + url);
        return this.http.get(url);
    }
    getCallById(id) {
        const url = `${this.apiURL}/getCall/${id}`;
        console.log('getCallById |  url = ' + url);
        return this.http.get(url);
    }
    createCall(call) {
        const url = `${this.apiURL}/createCall`;
        console.log('createCall |  url = ' + url);
        return this.http.post(url, call);
    }
    getCallsByRank(rank) {
        let url;
        if (rank === "CNRS") {
            url = `${this.apiURL}/getCallFilterCNRS`;
        }
        else if (rank === "HCERES") {
            url = `${this.apiURL}/getCallFilterHCERES`;
        }
        else if (rank === "FNEGE") {
            url = `${this.apiURL}/getCallFilterFNEGE`;
        }
        else {
            url = `${this.apiURL}/getCall`;
        }
        console.log('getCallsByRank |  url = ' + url);
        return this.http.get(url);
    }
    getNbCallByRevue(id) {
        const number = `${this.apiURL}/getNbCallByRevue/${id}`;
        console.log('getNbCallByRevue |  nombre = ' + number);
        return this.http.get(number);
    }
    getNbCallByMonth() {
        return this.http.get(`${this.apiURL}/getNbCallByMonth`);
    }
}
CallForPaperService.ɵfac = function CallForPaperService_Factory(t) { return new (t || CallForPaperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CallForPaperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CallForPaperService, factory: CallForPaperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallForPaperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/editeur.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/editeur.service.ts ***!
  \*********************************************/
/*! exports provided: EditeurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditeurService", function() { return EditeurService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





class EditeurService {
    constructor(http) {
        this.http = http;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
    }
    getEditeurs() {
        return this.http.get(`${this.apiURL}/getEditeur`);
    }
    getNbCallByEditeur() {
        return this.http.get(`${this.apiURL}/getNbCallByEditeur`);
    }
}
EditeurService.ɵfac = function EditeurService_Factory(t) { return new (t || EditeurService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
EditeurService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EditeurService, factory: EditeurService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditeurService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pipe/get-revue-name-by-id.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/services/pipe/get-revue-name-by-id.pipe.ts ***!
  \************************************************************/
/*! exports provided: GetRevueNameByIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRevueNameByIdPipe", function() { return GetRevueNameByIdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _revue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../revue.service */ "./src/app/services/revue.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class GetRevueNameByIdPipe {
    constructor(revueService) {
        this.revueService = revueService;
    }
    transform(value, ...args) {
        return this.getRevueNameById(value);
    }
    getRevueNameById(id) {
        return this.revueService.getRevueById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => value[0].name));
    }
}
GetRevueNameByIdPipe.ɵfac = function GetRevueNameByIdPipe_Factory(t) { return new (t || GetRevueNameByIdPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_revue_service__WEBPACK_IMPORTED_MODULE_1__["RevueService"])); };
GetRevueNameByIdPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getRevueNameById", type: GetRevueNameByIdPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetRevueNameByIdPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'getRevueNameById'
            }]
    }], function () { return [{ type: _revue_service__WEBPACK_IMPORTED_MODULE_1__["RevueService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pipe/get-widget-sjr.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/services/pipe/get-widget-sjr.pipe.ts ***!
  \******************************************************/
/*! exports provided: GetWidgetSjrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWidgetSjrPipe", function() { return GetWidgetSjrPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _revue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../revue.service */ "./src/app/services/revue.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class GetWidgetSjrPipe {
    constructor(revueService) {
        this.revueService = revueService;
    }
    transform(value, ...args) {
        return this.getRevueWidgetById(value);
    }
    getRevueWidgetById(id) {
        return this.revueService.getRevueById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => value[0].sjr));
    }
}
GetWidgetSjrPipe.ɵfac = function GetWidgetSjrPipe_Factory(t) { return new (t || GetWidgetSjrPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_revue_service__WEBPACK_IMPORTED_MODULE_1__["RevueService"])); };
GetWidgetSjrPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getWidgetSjr", type: GetWidgetSjrPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetWidgetSjrPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'getWidgetSjr'
            }]
    }], function () { return [{ type: _revue_service__WEBPACK_IMPORTED_MODULE_1__["RevueService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/revue.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/revue.service.ts ***!
  \*******************************************/
/*! exports provided: RevueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevueService", function() { return RevueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





// Service permettant la récupration des Revues via des appels API, ne pas oublié de changer l'url en fonction de l'environnement d'execution
class RevueService {
    constructor(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
    }
    getRevues() {
        const url = `${this.apiURL}/getRevue`;
        console.log('getRevues |  url = ' + url);
        return this.http.get(url);
    }
    getRevueById(id) {
        const url = `${this.apiURL}/getRevue/${id}`;
        console.log('getRevueById |  url = ' + url);
        return this.http.get(url);
    }
    getRevueIdbyName(id) {
        const url = `${this.apiURL}/getRevueIdbyName/${id}`;
        console.log('getRevueIdbyName |  url = ' + url);
        return this.http.get(url);
    }
    createRevue(revue) {
        const url = `${this.apiURL}/createRevue`;
        console.log('createRevue |  url = ' + url);
        return this.http.post(url, revue);
    }
}
RevueService.ɵfac = function RevueService_Factory(t) { return new (t || RevueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RevueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RevueService, factory: RevueService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RevueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
    production: false,
    apiURL: 'http://localhost:8080/api'
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

module.exports = __webpack_require__(/*! /home/etudiant/Bureau/M2/M2_semestre2/ProjetHubeCall/hube-call/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
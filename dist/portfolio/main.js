(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/flyinout.ts":
/*!****************************************!*\
  !*** ./src/app/animations/flyinout.ts ***!
  \****************************************/
/*! exports provided: FLY_IN_OUT_ANIMATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLY_IN_OUT_ANIMATION", function() { return FLY_IN_OUT_ANIMATION; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var FLY_IN_OUT_ANIMATION = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOutTrigger', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(0)',
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 0.1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(1)',
        })),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(0)'
        })),
    ])
]);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-experience/work-experience.component */ "./src/app/work-experience/work-experience.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");









var routes = [
    { path: '', pathMatch: 'full', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: 'work-experience', component: _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_4__["WorkExperienceComponent"] },
    { path: 'education', component: _education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'interests', component: _interests_interests_component__WEBPACK_IMPORTED_MODULE_5__["InterestsComponent"] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\n    margin-top: 3rem;\n    text-align: center;\n    display: block;\n}\na{\n    text-decoration: underline;\n    margin-right: 2rem\n}\napp-footer{\n    position:absolute; \n    bottom:0; \n    width:100%; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsVUFBVTtBQUNkIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtXG59XG5cbmFwcC1mb290ZXJ7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7IFxuICAgIGJvdHRvbTowOyBcbiAgICB3aWR0aDoxMDAlOyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n        <a routerLink=\"/\">me</a>\n        <a routerLink=\"/work-experience\">work-experience</a>\n        <a routerLink=\"/education\">education</a>\n        <a routerLink=\"/skills\">skills</a>\n        <a routerLink=\"/projects\">projects</a>\n        <a routerLink=\"/interests\">interests</a>\n</nav>\n<div id='main-component'>\n                <router-outlet ></router-outlet>\n</div>\n<app-footer></app-footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work-experience/work-experience.component */ "./src/app/work-experience/work-experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _profile_pic_profile_pic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile-pic/profile-pic.component */ "./src/app/profile-pic/profile-pic.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                _work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_8__["WorkExperienceComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
                _interests_interests_component__WEBPACK_IMPORTED_MODULE_11__["InterestsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
                _profile_pic_profile_pic_component__WEBPACK_IMPORTED_MODULE_13__["ProfilePicComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".experience h3{\n    font-size: 2.rem;\n    color: #444\n  }\n  .experience-main{\n      display: grid;\n      grid-gap: 20px;\n      grid-template-columns: repeat(2, 1fr);\n  }\n  .experience {\n      background-color:#ddd;/* rgb(121, 119, 119);*/\n      border-radius: 0 3rem 0 3rem;\n      /* Add shadows to create the \"card\" effect */\n      box-shadow: 0rem;\n      transition: 0.3s;\n  }\n  .experience .lead , .experience .text-light{\n      color: #444\n  }\n  /* On mouse-over, add a deeper shadow */\n  .experience:hover {\n    box-shadow: 0 10px 20px 0 rgba(209, 206, 206, 0.2);\n    background-color: rgb(247, 245, 245);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEI7RUFDRjtFQUNBO01BQ0ksYUFBYTtNQUNiLGNBQWM7TUFDZCxxQ0FBcUM7RUFDekM7RUFDQTtNQUNJLHFCQUFxQixDQUFDLHVCQUF1QjtNQUM3Qyw0QkFBNEI7TUFDNUIsNENBQTRDO01BQzVDLGdCQUFnQjtNQUNoQixnQkFBZ0I7RUFDcEI7RUFDQTtNQUNJO0VBQ0o7RUFDQSx1Q0FBdUM7RUFDekM7SUFDSSxrREFBa0Q7SUFDbEQsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6ImFwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZXJpZW5jZSBoM3tcbiAgICBmb250LXNpemU6IDIucmVtO1xuICAgIGNvbG9yOiAjNDQ0XG4gIH1cbiAgLmV4cGVyaWVuY2UtbWFpbntcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbiAgLmV4cGVyaWVuY2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZGRkOy8qIHJnYigxMjEsIDExOSwgMTE5KTsqL1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAzcmVtIDAgM3JlbTtcbiAgICAgIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXG4gICAgICBib3gtc2hhZG93OiAwcmVtO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICAuZXhwZXJpZW5jZSAubGVhZCAsIC5leHBlcmllbmNlIC50ZXh0LWxpZ2h0e1xuICAgICAgY29sb3I6ICM0NDRcbiAgfVxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXG4uZXhwZXJpZW5jZTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDIwOSwgMjA2LCAyMDYsIDAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ1LCAyNDUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"education\" class=\"experience-main\" [@flyInOutTrigger]>\n  <div *ngFor=\"let education of educations\" class=\"experience\">\n    <div class=\"exp-container\">\n      <h3>{{education.title}}</h3>\n      <h3>{{education.school}}</h3>\n      <p class=\"lead\">{{education.timeline}}</p>\n      <p class=\"text-light\">{{education.summary}}</p>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/flyinout */ "./src/app/animations/flyinout.ts");



var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.educations = [
            { title: 'IT Project Management', school: 'Stratford University, Virginia USA', timeline: '2016 - 2016', summary: 'alige methodologies like SCRUM & KANBAN; software developement models like WATERFALL, SPIRAL, V-model' },
            { title: 'Computer Science & Engineering', school: 'Punjab Technical University, Punjab IN', timeline: '2010 - 2014', summary: 'four year Bachelors Degree in Computer Science; Computer Graphics, Networks, Programming, Scripting, RDBMS, etc' },
        ];
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            animations: [
                _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__["FLY_IN_OUT_ANIMATION"]
            ],
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer{\n    background-color: #ddd;\n    color: #2a2c35;\n\n}\n#footer .footer-bottom{\n    padding: 0.5rem;\n    font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYzs7QUFFbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6ImFwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6ICMyYTJjMzU7XG5cbn1cbiNmb290ZXIgLmZvb3Rlci1ib3R0b217XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <div class=\"footer-bottom text-center\">\n    Copyright &copy; <script>document.write(new Date().getFullYear());</script> pranavkapoorr\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/interests/interests.component.css":
/*!***************************************************!*\
  !*** ./src/app/interests/interests.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/interests/interests.component.html":
/*!****************************************************!*\
  !*** ./src/app/interests/interests.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"interests\" [@flyInOutTrigger]>\n  interests works!\n</div>\n"

/***/ }),

/***/ "./src/app/interests/interests.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interests/interests.component.ts ***!
  \**************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/flyinout */ "./src/app/animations/flyinout.ts");



var InterestsComponent = /** @class */ (function () {
    function InterestsComponent() {
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interests',
            template: __webpack_require__(/*! ./interests.component.html */ "./src/app/interests/interests.component.html"),
            animations: [
                _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__["FLY_IN_OUT_ANIMATION"]
            ],
            styles: [__webpack_require__(/*! ./interests.component.css */ "./src/app/interests/interests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh1{\n    font-size: 3.5rem;\n    margin: 0;\n    margin-bottom: 1rem;\n}\n\n.dp-logo {\n    font-size: 2rem;\n    -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n            animation: 1s ease-in-out 0.2s both fadeIn;\n  }\n\n@-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0;\n      -webkit-transform: scale(0);\n              transform: scale(0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n      -webkit-transform: scale(0);\n              transform: scale(0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0RBQTBDO1lBQTFDLDBDQUEwQztFQUM1Qzs7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLDJCQUFtQjtjQUFuQixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLFVBQVU7TUFDViwyQkFBbUI7Y0FBbkIsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0FBVEE7SUFDRTtNQUNFLFVBQVU7TUFDViwyQkFBbUI7Y0FBbkIsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsMkJBQW1CO2NBQW5CLG1CQUFtQjtJQUNyQjtFQUNGIiwiZmlsZSI6ImFwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgxe1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZHAtbG9nbyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"landing-page\" [@flyInOutTrigger]>\n  <div class=\"container\">\n    <app-profile-pic class=\"dp-logo\"></app-profile-pic>\n    <h4 class=\"short-bio\">Developer | Learner | Humanist</h4>\n\n    <q class=\"quote\">I'm Nothing..doing Everything..to be Something..</q>\n    <div class=\"name\">\n      <p>\n        PRANAV KAPOOR\n      </p>\n      <div class=\"strip\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/flyinout */ "./src/app/animations/flyinout.ts");



var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.isOpen = true;
    }
    LandingPageComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            animations: [
                _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__["FLY_IN_OUT_ANIMATION"]
            ],
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        })
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/profile-pic/profile-pic.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profile-pic/profile-pic.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-logo {\n    height: 14rem;\n    width: 14rem;\n    margin-top: 2rem;\n    display: inline-block;\n    position: relative;\n    z-index: 5;\n    border-radius: 50%;\n    -webkit-perspective: 1500px;\n            perspective: 1500px;\n    transition: all 0.2s ease-in-out;\n    -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n            animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}  \nimg {\n    position: relative;\n    border: 0.8rem solid ;\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: all 0.5s ease-in-out;\n    -webkit-perspective: 1500px;\n            perspective: 1500px;\n  }  \n.profile-logo::after {\n    content: 'Pranav Kapoor';\n    display: flex;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    color: #fff;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    background-color: #e74c3c;\n    border: 0.8rem solid #db381b;\n    top: 0px;\n    left: 0px;\n    z-index: 10;\n    font-size: 0.8em;\n    transition: all 0.5s ease-in-out;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1500px;\n            perspective: 1500px;\n  }  \n.profile-logo:hover {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n  }  \nimg:hover::after{\n        -webkit-transform: rotateY(0deg);\n                transform: rotateY(0deg);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlLXBpYy9wcm9maWxlLXBpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLDJEQUFtRDtZQUFuRCxtREFBbUQ7QUFDdkQ7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixnQ0FBZ0M7SUFDaEMsMkJBQW1CO1lBQW5CLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0FBRUE7UUFDTSxnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtFQUM5QiIsImZpbGUiOiJhcHAvcHJvZmlsZS1waWMvcHJvZmlsZS1waWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWxvZ28ge1xuICAgIGhlaWdodDogMTRyZW07XG4gICAgd2lkdGg6IDE0cmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcbn0gIFxuaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAwLjhyZW0gc29saWQgO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG4gIH1cblxuICAucHJvZmlsZS1sb2dvOjphZnRlciB7XG4gICAgY29udGVudDogJ1ByYW5hdiBLYXBvb3InO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICAgIGJvcmRlcjogMC44cmVtIHNvbGlkICNkYjM4MWI7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG4gIH1cbiAgLnByb2ZpbGUtbG9nbzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIH1cblxuICBpbWc6aG92ZXI6OmFmdGVye1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/profile-pic/profile-pic.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile-pic/profile-pic.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-logo\" [ngStyle]=\"logoStyles\">\n  <img [ngStyle]=\"imgStyle\" src=\"assets/img/pranav_kapoor.jpg\" alt=\"my pic\">\n</div>"

/***/ }),

/***/ "./src/app/profile-pic/profile-pic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile-pic/profile-pic.component.ts ***!
  \******************************************************/
/*! exports provided: ProfilePicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicComponent", function() { return ProfilePicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilePicComponent = /** @class */ (function () {
    function ProfilePicComponent() {
    }
    ProfilePicComponent.prototype.ngOnInit = function () {
        this.logoStyles = {
            height: this.height,
            width: this.width
        };
        this.imgStyle = {
            borderWidth: this.borderWidth
        };
        // console.log(this.height);
        // console.log(this.width);
        // console.log(this.borderWidth);
    };
    ProfilePicComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfilePicComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('width'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfilePicComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('borderWidth'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfilePicComponent.prototype, "borderWidth", void 0);
    ProfilePicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-pic',
            template: __webpack_require__(/*! ./profile-pic.component.html */ "./src/app/profile-pic/profile-pic.component.html"),
            styles: [__webpack_require__(/*! ./profile-pic.component.css */ "./src/app/profile-pic/profile-pic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilePicComponent);
    return ProfilePicComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"projects\" [@flyInOutTrigger]>\n  projects works!\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/flyinout */ "./src/app/animations/flyinout.ts");
/* harmony import */ var _services_project_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/project-service.service */ "./src/app/services/project-service.service.ts");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        console.log(this.projectService.getProjects());
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            animations: [
                _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__["FLY_IN_OUT_ANIMATION"]
            ],
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_project_service_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/services/project-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/project-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectsUrl = 'https://github.com/pranavkapoorr/repositories'; // URL to web api
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectsUrl).subscribe();
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skill-icons{\n    overflow: auto;\n    color: #eee;\n}\n#skills h3{\n    text-align: start;\n}\n.skill-icon-list-item{\n    font-size: 4rem;\n    display: inline;\n    padding-left: 0.3rem;\n    padding-right: 0.3rem;\n}\n.workflow-points{\n    text-align: start;\n    list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJhcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxsLWljb25ze1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGNvbG9yOiAjZWVlO1xufVxuI3NraWxscyBoM3tcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbi5za2lsbC1pY29uLWxpc3QtaXRlbXtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctbGVmdDogMC4zcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuM3JlbTtcbn1cblxuLndvcmtmbG93LXBvaW50c3tcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"skills\" [@flyInOutTrigger]>\n  <div class=\"skill-icons\">\n    <h3>Programming Languages & Tools</h3>\n    <div class=\"skill-icon-list\">\n        <i class=\"skill-icon-list-item devicon-java-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-python-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-nodejs-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-html5-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-css3-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-javascript-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-jquery-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-angularjs-plain\"></i>\n        <i class=\"skill-icon-list-item devicon-bootstrap-plain\"></i>\n        <i class=\"skill-icon-list-item devicon-mysql-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-git-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-bitbucket-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-github-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-tomcat-line-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-ubuntu-plain-wordmark\"></i>\n        <i class=\"skill-icon-list-item devicon-visualstudio-plain\"></i>\n    </div>\n  </div>\n  <div class=\"skill-workflow\">\n      <h3>Workflow</h3>\n      <ul class=\"workflow-points\">\n        <li><i class=\"fa fa-check\"></i> Client Satisfaction First</li>\n        <li><i class=\"fa fa-check\"></i> Mobile first developement</li>\n        <li><i class=\"fa fa-check\"></i> Less code but more productivity</li>\n        <li><i class=\"fa fa-check\"></i> Flexible & adaptive developement</li>\n        <li><i class=\"fa fa-check\"></i> Test-driven developement</li>\n        <li><i class=\"fa fa-check\"></i> Learn from errors</li>\n        <li><i class=\"fa fa-check\"></i> Securing data by all means</li>\n      </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/flyinout */ "./src/app/animations/flyinout.ts");



var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            animations: [
                _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__["FLY_IN_OUT_ANIMATION"]
            ],
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/work-experience/work-experience.component.css":
/*!***************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".experience h3{\n    font-size: 2.rem;\n    color: #444\n  }\n  .experience-main{\n      display: grid;\n      grid-gap: 20px;\n      grid-template-columns: repeat(2, 1fr);\n  }\n  .experience {\n      background-color:#ddd;/* rgb(121, 119, 119);*/\n      border-radius: 0 3rem 0 3rem;\n      /* Add shadows to create the \"card\" effect */\n      box-shadow: 0rem;\n      transition: 0.3s;\n  }\n  .experience .lead , .experience .text-light{\n      color: #444\n  }\n  /* On mouse-over, add a deeper shadow */\n  .experience:hover {\n    box-shadow: 0 10px 20px 0 rgba(209, 206, 206, 0.2);\n    background-color: rgb(247, 245, 245);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEI7RUFDRjtFQUNBO01BQ0ksYUFBYTtNQUNiLGNBQWM7TUFDZCxxQ0FBcUM7RUFDekM7RUFDQTtNQUNJLHFCQUFxQixDQUFDLHVCQUF1QjtNQUM3Qyw0QkFBNEI7TUFDNUIsNENBQTRDO01BQzVDLGdCQUFnQjtNQUNoQixnQkFBZ0I7RUFDcEI7RUFDQTtNQUNJO0VBQ0o7RUFDQSx1Q0FBdUM7RUFDekM7SUFDSSxrREFBa0Q7SUFDbEQsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6ImFwcC93b3JrLWV4cGVyaWVuY2Uvd29yay1leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZXJpZW5jZSBoM3tcbiAgICBmb250LXNpemU6IDIucmVtO1xuICAgIGNvbG9yOiAjNDQ0XG4gIH1cbiAgLmV4cGVyaWVuY2UtbWFpbntcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLWdhcDogMjBweDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbiAgLmV4cGVyaWVuY2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZGRkOy8qIHJnYigxMjEsIDExOSwgMTE5KTsqL1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAzcmVtIDAgM3JlbTtcbiAgICAgIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXG4gICAgICBib3gtc2hhZG93OiAwcmVtO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICAuZXhwZXJpZW5jZSAubGVhZCAsIC5leHBlcmllbmNlIC50ZXh0LWxpZ2h0e1xuICAgICAgY29sb3I6ICM0NDRcbiAgfVxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXG4uZXhwZXJpZW5jZTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDIwOSwgMjA2LCAyMDYsIDAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ1LCAyNDUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/work-experience/work-experience.component.html":
/*!****************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"work-experience\" class=\"experience-main\" [@flyInOutTrigger]>\n  <div *ngFor=\"let experience of experiences\" class=\"experience\">\n    <div class=\"exp-container\">\n      <h3>{{experience.title}}</h3>\n      <h3>{{experience.company}}</h3>\n      <p class=\"lead\">{{experience.timeline}}</p>\n      <p class=\"text-light\">{{experience.techstack}}</p>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/work-experience/work-experience.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/work-experience/work-experience.component.ts ***!
  \**************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/flyinout */ "./src/app/animations/flyinout.ts");



var WorkExperienceComponent = /** @class */ (function () {
    function WorkExperienceComponent() {
        this.experiences = [
            { title: 'Sr Software Engineer', company: 'Valitor, London GB.', timeline: 'May 2017 - present', techstack: 'Java 8, Python, NodeJS, Dart, Android, Flutter, SpringBoot, MVC, AKKA, Express, Socketio, CSS(Bootstrap), Javascript(JQuery,Angular,Bootstrap), GIT(Github, Bitbucket)' },
            { title: 'Java Developer', company: 'travelfusion, London GB.', timeline: 'Mar 2017 - May 2017', techstack: 'Java 8, SVN, Kubuntu-bash' },
            { title: 'IT Consultant', company: 'Navin Associates, Bengaluru IN.', timeline: 'Jan 2016 - Nov 2016', techstack: 'Java 7, HTML, C++,CSS(Bootstrap), Javascript(JQuery,Bootstrap)' },
            { title: 'Sr Executive (MIS)', company: 'Aver Exim, Punjab IN.', timeline: 'Dec 2014 - Oct 2015', techstack: 'Java 7, C, C++, Swing, Neworking and T-shooting' }
        ];
    }
    WorkExperienceComponent.prototype.ngOnInit = function () {
    };
    WorkExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-experience',
            template: __webpack_require__(/*! ./work-experience.component.html */ "./src/app/work-experience/work-experience.component.html"),
            animations: [
                _animations_flyinout__WEBPACK_IMPORTED_MODULE_2__["FLY_IN_OUT_ANIMATION"]
            ],
            styles: [__webpack_require__(/*! ./work-experience.component.css */ "./src/app/work-experience/work-experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkExperienceComponent);
    return WorkExperienceComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pranav/Documents/Angular-2 Apps/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp([1,4],{

/***/ 284:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 284;


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(296);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(379),
        styles: [__webpack_require__(351)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_sheet_svg_sheet_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_config_layout_config_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__option_data_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__svg_drawer_service__ = __webpack_require__(89);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__svg_sheet_svg_sheet_component__["a" /* SvgSheetComponent */],
            __WEBPACK_IMPORTED_MODULE_6__layout_config_layout_config_component__["a" /* LayoutConfigComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_ng2_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__option_data_service__["a" /* OptionsDataService */], __WEBPACK_IMPORTED_MODULE_9__svg_drawer_service__["a" /* SvgDrawerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option_data_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutConfigComponent = (function () {
    function LayoutConfigComponent(optionData) {
        this.optionData = optionData;
    }
    LayoutConfigComponent.prototype.ngOnInit = function () {
        this.options = this.optionData.options$.getValue();
    };
    LayoutConfigComponent.prototype.optionsChange = function () {
        this.optionData.updateOptions(this.options);
    };
    LayoutConfigComponent.prototype.onPrint = function () {
        window.print();
    };
    return LayoutConfigComponent;
}());
LayoutConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-layout-config',
        template: __webpack_require__(380),
        styles: [__webpack_require__(352)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__option_data_service__["a" /* OptionsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__option_data_service__["a" /* OptionsDataService */]) === "function" && _a || Object])
], LayoutConfigComponent);

var _a;
//# sourceMappingURL=layout-config.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option_data_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_drawer_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgSheetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {Snap} from 'snapsvg';
//import {SVG} from "svg.js";
//import {SVG} from "exports-loader?SVG!svg.js/src/svg.js";
//import {Snap} from "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js";
//import {Snap} from "imports-loader?this=>window,fix=>module.exports=0!snapsvg";
var SvgSheetComponent = (function () {
    function SvgSheetComponent(optionData, svgDrawer) {
        this.optionData = optionData;
        this.svgDrawer = svgDrawer;
        this.drawStuffDebounced = _.debounce(svgDrawer.drawStuff, 300);
    }
    SvgSheetComponent.prototype.ngOnInit = function () {
    };
    SvgSheetComponent.prototype.drawSheet = function (options) {
        if (this.svgElement) {
            var svgPaper = this.svgElement.first;
            if (options.isValid()) {
                this.drawStuffDebounced(svgPaper, options);
            }
        }
    };
    SvgSheetComponent.prototype.ngAfterViewInit = function () {
        //this.drawSheet(this.optionData.options$.getValue());
        var self = this;
        this.optionData.options$.subscribe(function (options) {
            self.drawSheet(options);
        });
    };
    return SvgSheetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])('svg'),
    __metadata("design:type", Object)
], SvgSheetComponent.prototype, "svgElement", void 0);
SvgSheetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-svg-sheet',
        template: __webpack_require__(381),
        styles: [__webpack_require__(353)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__option_data_service__["a" /* OptionsDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__option_data_service__["a" /* OptionsDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__svg_drawer_service__["a" /* SvgDrawerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__svg_drawer_service__["a" /* SvgDrawerService */]) === "function" && _b || Object])
], SvgSheetComponent);

//TODO create service
function delme_drawStuff(element, options) {
    console.log('drawStuff');
    var NIB = options.nibSize;
    var SLANT = options.slant;
    var W = 297;
    var H = 210;
    //To avoid blank page in chrome
    H = H - 1;
    //$("body").append('<svg id="svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + 'mm" height="' + H + 'mm"></svg>')
    element.nativeElement.setAttribute("viewBox", '0 0 ' + W + ' ' + H);
    var s = SVG(element.nativeElement);
    //s.clear();
    s.rect(W, H).fill('#fff');
    var MARGIN = 5;
    var STROKE = 0.1;
    //let ruler = [3, 5, 3]; // first line at 0, second at 2.5, third at (2.5 + 4.5) and so on
    //[2,4,2] gothic
    var ruler = __WEBPACK_IMPORTED_MODULE_1__option_data_service__["b" /* Options */].parseRowHeights(options.rowHieghts);
    if (!ruler) {
        ruler = [1];
    }
    //let lineWidth = [0.3, 0.3, 3];
    var lineWidth = Array(ruler.length).fill(1);
    var styleMixin = [undefined, undefined, undefined];
    //Sum of height (in nibs)
    var rulerSize = _.reduce(ruler, reduceAdder);
    //Number of complete lines
    var max = Math.floor((H - MARGIN * 2) / (NIB * rulerSize));
    var availableVerticalMargin = H - rulerSize * max * NIB;
    var topMargin = 0.5 * availableVerticalMargin;
    function xCoord(xNib) {
        return MARGIN + xNib * NIB;
    }
    function yCoord(yNib) {
        return topMargin + yNib * NIB;
    }
    function xFromNibs(nibs) {
        //TODO dirty fix to have more space on top
        return topMargin + nibs * NIB;
    }
    function addHorizontaLine(y, width, styleMixin) {
        (!width) && (width = 1);
        var line = s.line(MARGIN, y, W - MARGIN, y);
        line.stroke({
            color: "#000",
            width: STROKE * width
        });
        styleMixin && line.attr(styleMixin);
    }
    function addLine(x, y, x1, y1, width) {
        (!width) && (width = 1);
        var line = s.line(x, y, x1, y1);
        line.stroke({
            color: "#000",
            width: STROKE * width
        });
        return line;
    }
    function slantVector(degrees) {
        return [-Math.sin(degrees / 360.0 * 2 * Math.PI), Math.cos(degrees / 360.0 * 2 * Math.PI)];
    }
    var slantLines = [];
    var i = 10;
    if (SLANT !== undefined && SLANT !== null && SLANT !== "") {
        var maskRect = s.rect(W - MARGIN * 2, H - availableVerticalMargin).move(MARGIN, topMargin);
        maskRect.attr({
            stroke: '#fff',
            'strokeWidth': 0,
            fill: '#fff'
        });
        //maskRect.fill('#f00');
        var mask = s.mask().add(maskRect);
        for (var i_1 = 1.2; i_1 * NIB < W + H; i_1 += 3 * NIB) {
            var line = addLine(xCoord(i_1), yCoord(0), xCoord(i_1 + 500 * slantVector(SLANT)[0]), yCoord(500 * slantVector(SLANT)[1]));
            line.maskWith(mask);
        }
        //Not working. Pending issue https://github.com/svgdotjs/svg.js/issues/689
        // for (let i =7.1; i * NIB < W + H; i += 3 * NIB) {
        //   let line = addLine(xCoord(i), 0, xCoord(i), H);
        //   //line.skew(-SLANT,0);
        //   line.maskWith(mask);
        // }
    }
    for (var i_2 = 0; i_2 < max; i_2++) {
        var start = i_2 * rulerSize;
        addHorizontaLine(xFromNibs(start), lineWidth[0], styleMixin[0]);
        for (var j = 0; j < ruler.length - 1; j++) {
            var offset = _.reduce(ruler.slice(0, j + 1), reduceAdder);
            addHorizontaLine(xFromNibs(start + offset), lineWidth[j + 1], styleMixin[j + 1]);
        }
    }
    addHorizontaLine(xFromNibs(rulerSize * max), lineWidth[0], styleMixin[0]);
    function reduceAdder(memo, item) {
        return memo + item;
    }
}
var _a, _b;
//# sourceMappingURL=svg-sheet.component.js.map

/***/ }),

/***/ 296:
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsDataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Options; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OptionsDataService = (function () {
    function OptionsDataService() {
        this._options = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new Options());
        this.options$ = this._options;
    }
    OptionsDataService.prototype.updateOptions = function (options) {
        console.log(options.nibSize);
        this._options.next(options);
    };
    return OptionsDataService;
}());
OptionsDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], OptionsDataService);

var Options = (function () {
    function Options() {
        // In millimeters
        this.nibSize = 3.5;
        // in degrees
        this.slant = 7;
        this.text = 'Made with Thoth';
        this.rowHieghts = '2, 3';
    }
    Options.parseRowHeights = function (text) {
        return text.split(/[, ]+/).map(function (x) { return parseFloat(x); });
    };
    Options.prototype.isValid = function () {
        return this.nibSize > 0;
    };
    return Options;
}());

//# sourceMappingURL=option-data.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "/****\n * Vars\n */\n* {\n  line-height: 1.15;\n}\n.wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #eeeeee;\n}\napp-layout-config {\n  float: left;\n  height: 100%;\n  width: 300px;\n  overflow-y: scroll ;\n}\n.svg-container {\n  padding: 7px;\n  height: calc(100% - 14px);\n  margin-left: 300px;\n}\n@media print {\n  @page {\n    size: landscape;\n  }\n  .svg-container {\n    margin: 0px;\n    padding: 0px;\n    height: 100%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".wrapper {\r\n  margin-left: 7px;\r\n  margin-right: 7px;\r\n  position: relative;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nlabel, button{\r\n  margin-top:1em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "\r\n.container{\r\n  height: 100%;\r\n  width: 100%;\r\n  background: #ff0000;\r\n}\r\n\r\nsvg {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 102,
	"./af.js": 102,
	"./ar": 109,
	"./ar-dz": 103,
	"./ar-dz.js": 103,
	"./ar-kw": 104,
	"./ar-kw.js": 104,
	"./ar-ly": 105,
	"./ar-ly.js": 105,
	"./ar-ma": 106,
	"./ar-ma.js": 106,
	"./ar-sa": 107,
	"./ar-sa.js": 107,
	"./ar-tn": 108,
	"./ar-tn.js": 108,
	"./ar.js": 109,
	"./az": 110,
	"./az.js": 110,
	"./be": 111,
	"./be.js": 111,
	"./bg": 112,
	"./bg.js": 112,
	"./bn": 113,
	"./bn.js": 113,
	"./bo": 114,
	"./bo.js": 114,
	"./br": 115,
	"./br.js": 115,
	"./bs": 116,
	"./bs.js": 116,
	"./ca": 117,
	"./ca.js": 117,
	"./cs": 118,
	"./cs.js": 118,
	"./cv": 119,
	"./cv.js": 119,
	"./cy": 120,
	"./cy.js": 120,
	"./da": 121,
	"./da.js": 121,
	"./de": 124,
	"./de-at": 122,
	"./de-at.js": 122,
	"./de-ch": 123,
	"./de-ch.js": 123,
	"./de.js": 124,
	"./dv": 125,
	"./dv.js": 125,
	"./el": 126,
	"./el.js": 126,
	"./en-au": 127,
	"./en-au.js": 127,
	"./en-ca": 128,
	"./en-ca.js": 128,
	"./en-gb": 129,
	"./en-gb.js": 129,
	"./en-ie": 130,
	"./en-ie.js": 130,
	"./en-nz": 131,
	"./en-nz.js": 131,
	"./eo": 132,
	"./eo.js": 132,
	"./es": 134,
	"./es-do": 133,
	"./es-do.js": 133,
	"./es.js": 134,
	"./et": 135,
	"./et.js": 135,
	"./eu": 136,
	"./eu.js": 136,
	"./fa": 137,
	"./fa.js": 137,
	"./fi": 138,
	"./fi.js": 138,
	"./fo": 139,
	"./fo.js": 139,
	"./fr": 142,
	"./fr-ca": 140,
	"./fr-ca.js": 140,
	"./fr-ch": 141,
	"./fr-ch.js": 141,
	"./fr.js": 142,
	"./fy": 143,
	"./fy.js": 143,
	"./gd": 144,
	"./gd.js": 144,
	"./gl": 145,
	"./gl.js": 145,
	"./gom-latn": 146,
	"./gom-latn.js": 146,
	"./he": 147,
	"./he.js": 147,
	"./hi": 148,
	"./hi.js": 148,
	"./hr": 149,
	"./hr.js": 149,
	"./hu": 150,
	"./hu.js": 150,
	"./hy-am": 151,
	"./hy-am.js": 151,
	"./id": 152,
	"./id.js": 152,
	"./is": 153,
	"./is.js": 153,
	"./it": 154,
	"./it.js": 154,
	"./ja": 155,
	"./ja.js": 155,
	"./jv": 156,
	"./jv.js": 156,
	"./ka": 157,
	"./ka.js": 157,
	"./kk": 158,
	"./kk.js": 158,
	"./km": 159,
	"./km.js": 159,
	"./kn": 160,
	"./kn.js": 160,
	"./ko": 161,
	"./ko.js": 161,
	"./ky": 162,
	"./ky.js": 162,
	"./lb": 163,
	"./lb.js": 163,
	"./lo": 164,
	"./lo.js": 164,
	"./lt": 165,
	"./lt.js": 165,
	"./lv": 166,
	"./lv.js": 166,
	"./me": 167,
	"./me.js": 167,
	"./mi": 168,
	"./mi.js": 168,
	"./mk": 169,
	"./mk.js": 169,
	"./ml": 170,
	"./ml.js": 170,
	"./mr": 171,
	"./mr.js": 171,
	"./ms": 173,
	"./ms-my": 172,
	"./ms-my.js": 172,
	"./ms.js": 173,
	"./my": 174,
	"./my.js": 174,
	"./nb": 175,
	"./nb.js": 175,
	"./ne": 176,
	"./ne.js": 176,
	"./nl": 178,
	"./nl-be": 177,
	"./nl-be.js": 177,
	"./nl.js": 178,
	"./nn": 179,
	"./nn.js": 179,
	"./pa-in": 180,
	"./pa-in.js": 180,
	"./pl": 181,
	"./pl.js": 181,
	"./pt": 183,
	"./pt-br": 182,
	"./pt-br.js": 182,
	"./pt.js": 183,
	"./ro": 184,
	"./ro.js": 184,
	"./ru": 185,
	"./ru.js": 185,
	"./sd": 186,
	"./sd.js": 186,
	"./se": 187,
	"./se.js": 187,
	"./si": 188,
	"./si.js": 188,
	"./sk": 189,
	"./sk.js": 189,
	"./sl": 190,
	"./sl.js": 190,
	"./sq": 191,
	"./sq.js": 191,
	"./sr": 193,
	"./sr-cyrl": 192,
	"./sr-cyrl.js": 192,
	"./sr.js": 193,
	"./ss": 194,
	"./ss.js": 194,
	"./sv": 195,
	"./sv.js": 195,
	"./sw": 196,
	"./sw.js": 196,
	"./ta": 197,
	"./ta.js": 197,
	"./te": 198,
	"./te.js": 198,
	"./tet": 199,
	"./tet.js": 199,
	"./th": 200,
	"./th.js": 200,
	"./tl-ph": 201,
	"./tl-ph.js": 201,
	"./tlh": 202,
	"./tlh.js": 202,
	"./tr": 203,
	"./tr.js": 203,
	"./tzl": 204,
	"./tzl.js": 204,
	"./tzm": 206,
	"./tzm-latn": 205,
	"./tzm-latn.js": 205,
	"./tzm.js": 206,
	"./uk": 207,
	"./uk.js": 207,
	"./ur": 208,
	"./ur.js": 208,
	"./uz": 210,
	"./uz-latn": 209,
	"./uz-latn.js": 209,
	"./uz.js": 210,
	"./vi": 211,
	"./vi.js": 211,
	"./x-pseudo": 212,
	"./x-pseudo.js": 212,
	"./yo": 213,
	"./yo.js": 213,
	"./zh-cn": 214,
	"./zh-cn.js": 214,
	"./zh-hk": 215,
	"./zh-hk.js": 215,
	"./zh-tw": 216,
	"./zh-tw.js": 216
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 355;


/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" >\n\n\n  <app-layout-config class=\"no-print\"></app-layout-config>\n\n    <div class=\"svg-container\">\n      <app-svg-sheet></app-svg-sheet>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper container-fluid\">\n  <h1>Options</h1>\n\n  <div class=\"row\">\n    <label class=\"col-sm-12\">Nib size (mm):</label>\n    <input class=\"col-sm-12\" type=\"text\" [(ngModel)]=\"options.nibSize\" (ngModelChange)=\"optionsChange()\">\n  </div>\n\n  <div class=\"row\">\n    <label class=\"col-sm-12\">Slant (°). 0 for no slant lines</label>\n    <input class=\"col-sm-12\" type=\"text\" [(ngModel)]=\"options.slant\" (ngModelChange)=\"optionsChange()\">\n  </div>\n\n  <div class=\"row\">\n    <label class=\"col-sm-12\">Row heights</label>\n    <input class=\"col-sm-12\" type=\"text\" [(ngModel)]=\"options.rowHieghts\" (ngModelChange)=\"optionsChange()\">\n  </div>\n\n  <div class=\"row\">\n    <label class=\"col-sm-12\">Caption</label>\n    <input class=\"col-sm-12\" type=\"text\" [(ngModel)]=\"options.text\" (ngModelChange)=\"optionsChange()\">\n  </div>\n\n  <div class=\"row\">\n    <button class=\"col-sm-12\" (click)=\"onPrint()\">Print</button>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<section id=\"svg-section\">\n\n</section>\n\n<svg #svg>\n\n</svg>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(285);


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option_data_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgDrawerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SvgDrawerService = (function () {
    function SvgDrawerService() {
    }
    SvgDrawerService.prototype.drawStuff = function (element, options) {
        console.log('drawStuff');
        var NIB = options.nibSize;
        var SLANT = options.slant;
        var W = 297;
        var H = 210;
        //To avoid blank page in chrome
        H = H - 1;
        //$("body").append('<svg id="svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + 'mm" height="' + H + 'mm"></svg>')
        element.nativeElement.setAttribute("viewBox", '0 0 ' + W + ' ' + H);
        var s = SVG(element.nativeElement);
        //s.clear();
        s.rect(W, H).fill('#fff');
        var MARGIN = 7;
        var STROKE = 0.1;
        //let ruler = [3, 5, 3]; // first line at 0, second at 2.5, third at (2.5 + 4.5) and so on
        //[2,4,2] gothic
        var ruler = __WEBPACK_IMPORTED_MODULE_1__option_data_service__["b" /* Options */].parseRowHeights(options.rowHieghts);
        if (!ruler) {
            ruler = [1];
        }
        //let lineWidth = [0.3, 0.3, 3];
        var lineWidth = Array(ruler.length).fill(1);
        var styleMixin = [undefined, undefined, undefined];
        //Sum of height (in nibs)
        var rulerSize = _.reduce(ruler, reduceAdder);
        //Number of complete lines
        var max = Math.floor((H - MARGIN * 2) / (NIB * rulerSize));
        var availableVerticalMargin = H - rulerSize * max * NIB;
        var topMargin = 0.5 * availableVerticalMargin;
        function xCoord(xNib) {
            return MARGIN + xNib * NIB;
        }
        function yCoord(yNib) {
            return topMargin + yNib * NIB;
        }
        function xFromNibs(nibs) {
            //TODO dirty fix to have more space on top
            return topMargin + nibs * NIB;
        }
        function addHorizontaLine(y, width, styleMixin) {
            (!width) && (width = 1);
            var line = s.line(MARGIN, y, W - MARGIN, y);
            line.stroke({
                color: "#000",
                width: STROKE * width
            });
            styleMixin && line.attr(styleMixin);
        }
        function addLine(x, y, x1, y1, width) {
            (!width) && (width = 1);
            var line = s.line(x, y, x1, y1);
            line.stroke({
                color: "#000",
                width: STROKE * width
            });
            return line;
        }
        function slantVector(degrees) {
            return [-Math.sin(degrees / 360.0 * 2 * Math.PI), Math.cos(degrees / 360.0 * 2 * Math.PI)];
        }
        var slantLines = [];
        var i = 10;
        if (SLANT !== undefined && SLANT !== null && SLANT !== "") {
            var maskRect = s.rect(W - MARGIN * 2, H - availableVerticalMargin).move(MARGIN, topMargin);
            maskRect.attr({
                stroke: '#fff',
                'strokeWidth': 0,
                fill: '#fff'
            });
            //maskRect.fill('#f00');
            var mask = s.mask().add(maskRect);
            for (var i_1 = 1.2; i_1 * NIB < W + H; i_1 += 3 * NIB) {
                var line = addLine(xCoord(i_1), yCoord(0), xCoord(i_1 + 500 * slantVector(SLANT)[0]), yCoord(500 * slantVector(SLANT)[1]));
                line.maskWith(mask);
            }
            //Not working. Pending issue https://github.com/svgdotjs/svg.js/issues/689
            // for (let i =7.1; i * NIB < W + H; i += 3 * NIB) {
            //   let line = addLine(xCoord(i), 0, xCoord(i), H);
            //   //line.skew(-SLANT,0);
            //   line.maskWith(mask);
            // }
        }
        for (var i_2 = 0; i_2 < max; i_2++) {
            var start = i_2 * rulerSize;
            addHorizontaLine(xFromNibs(start), lineWidth[0], styleMixin[0]);
            for (var j = 0; j < ruler.length - 1; j++) {
                var offset = _.reduce(ruler.slice(0, j + 1), reduceAdder);
                addHorizontaLine(xFromNibs(start + offset), lineWidth[j + 1], styleMixin[j + 1]);
            }
        }
        addHorizontaLine(xFromNibs(rulerSize * max), lineWidth[0], styleMixin[0]);
        // Add text
        if (options.text) {
            var textElement = s.plain(options.text);
            textElement.attr("class", "svg-text");
            textElement.attr("font-family", "");
            textElement.attr("font-size", "4.5px");
            debugger;
            var bBox = textElement.bbox();
            var scale = (MARGIN - 3) / bBox.h;
            //textElement.scale(scale, scale);
            bBox = textElement.bbox();
            console.log(bBox);
            // textElement.y(H-MARGIN+1.5);
            var availableBottomSpace = availableVerticalMargin / 2;
            textElement.y(H - availableBottomSpace + 2);
            textElement.x(W - MARGIN - bBox.w);
        }
        function reduceAdder(memo, item) {
            return memo + item;
        }
    };
    return SvgDrawerService;
}());
SvgDrawerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SvgDrawerService);

//# sourceMappingURL=svg-drawer.service.js.map

/***/ })

},[423]);
//# sourceMappingURL=main.bundle.js.map
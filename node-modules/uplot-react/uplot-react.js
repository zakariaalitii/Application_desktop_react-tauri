(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("uplot"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "uplot"], factory);
	else if(typeof exports === 'object')
		exports["UplotReact"] = factory(require("react"), require("uplot"));
	else
		root["UplotReact"] = factory(root["React"], root["uPlot"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_uplot__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./react/uplot-react.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: optionsUpdateState, dataMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsUpdateState", function() { return optionsUpdateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataMatch", function() { return dataMatch; });
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is


if (!Object.is) {
  // eslint-disable-next-line
  Object.defineProperty(Object, "is", {
    value: function value(x, y) {
      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
    }
  });
}

var optionsUpdateState = function optionsUpdateState(_lhs, _rhs) {
  var lhsWidth = _lhs.width,
      lhsHeight = _lhs.height,
      lhs = __rest(_lhs, ["width", "height"]);

  var rhsWidth = _rhs.width,
      rhsHeight = _rhs.height,
      rhs = __rest(_rhs, ["width", "height"]);

  var state = 'keep';

  if (lhsHeight !== rhsHeight || lhsWidth !== rhsWidth) {
    state = 'update';
  }

  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return 'create';
  }

  for (var _i = 0, _Object$keys = Object.keys(lhs); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];

    if (!Object.is(lhs[k], rhs[k])) {
      state = 'create';
      break;
    }
  }

  return state;
};
var dataMatch = function dataMatch(lhs, rhs) {
  if (lhs.length !== rhs.length) {
    return false;
  }

  return lhs.every(function (lhsOneSeries, seriesIdx) {
    var rhsOneSeries = rhs[seriesIdx];

    if (lhsOneSeries.length !== rhsOneSeries.length) {
      return false;
    }

    return lhsOneSeries.every(function (value, valueIdx) {
      return value === rhsOneSeries[valueIdx];
    });
  });
};

/***/ }),

/***/ "./react/uplot-react.tsx":
/*!*******************************!*\
  !*** ./react/uplot-react.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UplotReact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uplot */ "uplot");
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uplot__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uplot_wrappers_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uplot-wrappers-common */ "./common/index.ts");



function UplotReact(_ref) {
  var options = _ref.options,
      data = _ref.data,
      target = _ref.target,
      _ref$onDelete = _ref.onDelete,
      onDelete = _ref$onDelete === void 0 ? function () {} : _ref$onDelete,
      _ref$onCreate = _ref.onCreate,
      onCreate = _ref$onCreate === void 0 ? function () {} : _ref$onCreate;
  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var targetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function destroy(chart) {
    if (chart) {
      onDelete(chart);
      chart.destroy();
      chartRef.current = null;
    }
  }

  function create() {
    var newChart = new uplot__WEBPACK_IMPORTED_MODULE_1___default.a(options, data, target || targetRef.current);
    chartRef.current = newChart;
    onCreate(newChart);
  } // componentDidMount + componentWillUnmount


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    create();
    return function () {
      destroy(chartRef.current);
    };
  }, []); // componentDidUpdate

  var prevProps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    options: options,
    data: data,
    target: target
  }).current;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var chart = chartRef.current;

    if (prevProps.options !== options) {
      var optionsState = Object(uplot_wrappers_common__WEBPACK_IMPORTED_MODULE_2__["optionsUpdateState"])(prevProps.options, options);

      if (!chart || optionsState === 'create') {
        destroy(chart);
        create();
      } else if (optionsState === 'update') {
        chart.setSize({
          width: options.width,
          height: options.height
        });
      }
    }

    if (prevProps.data !== data) {
      if (!chart) {
        create();
      } else if (!Object(uplot_wrappers_common__WEBPACK_IMPORTED_MODULE_2__["dataMatch"])(prevProps.data, data)) {
        chart.setData(data);
      }
    }

    if (prevProps.target !== target) {
      destroy(chart);
      create();
    }

    return function () {
      prevProps.options = options;
      prevProps.data = data;
      prevProps.target = target;
    };
  }, [options, data, target]);
  return target ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: targetRef
  });
}

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"amd":"react","commonjs":"react","commonjs2":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "uplot":
/*!**************************************************************************************!*\
  !*** external {"amd":"uplot","commonjs":"uplot","commonjs2":"uplot","root":"uPlot"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_uplot__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=uplot-react.js.map
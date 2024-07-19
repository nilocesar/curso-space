/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: FlamboyantIndicadores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlamboyantIndicadores\", function() { return FlamboyantIndicadores; });\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ \"./src/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _indicator_IndicatorManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicator/IndicatorManager */ \"./src/indicator/IndicatorManager.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n/**\r\n * \r\n * @param {*} bridge Model\r\n * @param {*} colecao_de_indicadores \r\n * @param {*} scorm \r\n * @param {*} options {scorm_key, add_event_name, init_event_name}\r\n * @return {*} bridge \r\n */\n\nfunction FlamboyantIndicadores(bridge, colecao_de_indicadores, scorm, options) {\n  var _options = _extends({\n    scorm_key: \"indicadores\",\n    add_event_name: \"indicador\",\n    init_event_name: \"indicador_start\",\n    reset_event_name: \"indicador_reset\"\n  }, options);\n\n  bridge.EVENTS = bridge.EVENTS || {};\n  bridge.EVENTS.INDICADOR_ADD = _options.add_event_name;\n  bridge.EVENTS.INDICADOR_INIT = _options.init_event_name;\n  bridge.EVENTS.INDICADOR_RESET = _options.reset_event_name;\n  bridge.indicadores = _indicator_IndicatorManager__WEBPACK_IMPORTED_MODULE_1__[\"IndicatorManager\"].CreateFromCollection(colecao_de_indicadores);\n\n  bridge.resetIndicadores = function () {\n    this.indicadores.reset();\n    scorm.saveObject(_options.scorm_key, this.indicadores.serialize());\n    this.emit(this.EVENTS.INDICADOR_RESET, {});\n  };\n\n  bridge.addIndicador = function (name, uid, value) {\n    this.indicadores.addValueToIndicador(name, uid, value);\n    this.emit(this.EVENTS.INDICADOR_ADD, {\n      name: name,\n      value: value,\n      total: this.indicadores.getIndicadorTotal(name),\n      percentage: this.indicadores.getIndicadorPercentage(name)\n    });\n    scorm.saveObject(_options.scorm_key, this.indicadores.serialize());\n  };\n\n  bridge.getIndicadorTotal = function (indicator_name) {\n    return this.indicadores.getIndicadorTotal(indicator_name);\n  };\n\n  bridge.getIndicadorPercentage = function (indicator_name) {\n    return this.indicadores.getIndicadorPercentage(indicator_name);\n  };\n\n  bridge.StartIndicadores = function () {\n    var loadedIndicatorsData = scorm.loadObject(_options.scorm_key);\n\n    if (loadedIndicatorsData != undefined && loadedIndicatorsData != null) {\n      this.indicadores.deserialize(loadedIndicatorsData);\n    }\n\n    this.emit(this.EVENTS.INDICADOR_INIT, {});\n  };\n\n  return bridge;\n}\n\nwindow.FlamboyantIndicadores = FlamboyantIndicadores;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.less?");

/***/ }),

/***/ "./src/indicator/Drop.js":
/*!*******************************!*\
  !*** ./src/indicator/Drop.js ***!
  \*******************************/
/*! exports provided: Drop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Drop\", function() { return Drop; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Drop =\n/*#__PURE__*/\nfunction () {\n  _createClass(Drop, null, [{\n    key: \"make\",\n    value: function make(uid, value) {\n      return new Drop(uid, value);\n    }\n  }, {\n    key: \"FromModel\",\n    value: function FromModel(model) {\n      return new Drop(model.uid, model.value);\n    }\n  }]);\n\n  function Drop(uid, value) {\n    _classCallCheck(this, Drop);\n\n    this.uid = uid;\n    this.value = value;\n  }\n\n  return Drop;\n}();\n\nwindow.Drop = Drop;\n\n\n//# sourceURL=webpack:///./src/indicator/Drop.js?");

/***/ }),

/***/ "./src/indicator/Indicator.js":
/*!************************************!*\
  !*** ./src/indicator/Indicator.js ***!
  \************************************/
/*! exports provided: Indicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Indicator\", function() { return Indicator; });\n/* harmony import */ var _Drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drop */ \"./src/indicator/Drop.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Indicator =\n/*#__PURE__*/\nfunction () {\n  _createClass(Indicator, null, [{\n    key: \"CreateFromModel\",\n    value: function CreateFromModel(object) {\n      return new Indicator(object.name, object.max, object.min, object.startValue);\n    }\n  }]);\n\n  function Indicator(name, max_limit, min_limit, start_value) {\n    _classCallCheck(this, Indicator);\n\n    this.pool = [];\n    this.name = name;\n    this.max = 100;\n    this.min = 0;\n    this.start_value = 0;\n    if (!isNaN(max_limit) && max_limit !== null) this.max = max_limit;\n    if (!isNaN(min_limit) && min_limit !== null) this.min = min_limit;\n    if (!isNaN(start_value) && start_value !== null) this.start_value = start_value;\n    if (typeof name !== 'string') console.error('Parameter {name} is required');\n    this.addStartValue();\n  }\n\n  _createClass(Indicator, [{\n    key: \"addStartValue\",\n    value: function addStartValue() {\n      this.add('*', this.start_value);\n    }\n    /**\r\n     * add(drop:Drop)\r\n     * add(uid:String, value:Float)\r\n     * @returns instance\r\n     * @memberof Indicator\r\n     */\n\n  }, {\n    key: \"add\",\n    value: function add() {\n      var drop = arguments.length > 1 ? _Drop__WEBPACK_IMPORTED_MODULE_0__[\"Drop\"].make.apply(null, arguments) : arguments[0];\n\n      if (!this.hasDrop(drop)) {\n        this.pool.push(drop);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"addMany\",\n    value: function addMany(collection) {\n      var _this = this;\n\n      collection.forEach(function (element) {\n        _this.add(element.uid, element.value);\n      });\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      while (this.pool.length > 0) {\n        this.pool.pop();\n      }\n\n      this.addStartValue();\n    }\n    /**\r\n     * Verifica se já foi lancado algum Drop com a uid\r\n     * @returns boolean\r\n     * @memberof Indicator\r\n     */\n\n  }, {\n    key: \"has\",\n    value: function has(uid) {\n      return this.pool.reduce(function (total, drop) {\n        return drop.uid == uid ? ++total : total;\n      }, 0) > 0;\n    }\n    /**\r\n     * Verifica se já foi adicionada a Drop\r\n     * @returns boolean\r\n     * @memberof Indicator\r\n     */\n\n  }, {\n    key: \"hasDrop\",\n    value: function hasDrop(drop) {\n      return this.has(drop.uid);\n    }\n    /**\r\n     * Calcula a somatória de todos lançamentos do indicador\r\n     * @returns float\r\n     * @memberof Indicator\r\n     */\n\n  }, {\n    key: \"total\",\n    value: function total() {\n      return this.pool.reduce(function (total, drop) {\n        return total + drop.value;\n      }, 0);\n    }\n    /**\r\n     * Calcula a porcentagem do total em relação aos limites máximo e mínimo.\r\n     * @returns float\r\n     * @memberof Indicator\r\n     */\n\n  }, {\n    key: \"percentage\",\n    value: function percentage() {\n      return this.clampPercentage(this.total() / (this.max - this.min) * 100);\n    }\n  }, {\n    key: \"clampPercentage\",\n    value: function clampPercentage(value) {\n      return Math.min(Math.max(0, value), 100);\n    }\n  }]);\n\n  return Indicator;\n}();\n\nwindow.Indicator = Indicator;\n\n\n//# sourceURL=webpack:///./src/indicator/Indicator.js?");

/***/ }),

/***/ "./src/indicator/IndicatorManager.js":
/*!*******************************************!*\
  !*** ./src/indicator/IndicatorManager.js ***!
  \*******************************************/
/*! exports provided: IndicatorManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IndicatorManager\", function() { return IndicatorManager; });\n/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Indicator */ \"./src/indicator/Indicator.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar IndicatorManager =\n/*#__PURE__*/\nfunction () {\n  _createClass(IndicatorManager, null, [{\n    key: \"CreateFromCollection\",\n\n    /**\r\n     * \r\n     * @param {IndicadorModel [{String name:required, Float min:optional, Float max:optional, Float startValue:optional }] } collection \r\n     */\n    value: function CreateFromCollection(collection) {\n      return new IndicatorManager(collection.map(function (model) {\n        return _Indicator__WEBPACK_IMPORTED_MODULE_0__[\"Indicator\"].CreateFromModel(model);\n      }));\n    }\n  }, {\n    key: \"CreateFromNames\",\n    value: function CreateFromNames(names) {\n      return new IndicatorManager(names.map(function (name) {\n        return new _Indicator__WEBPACK_IMPORTED_MODULE_0__[\"Indicator\"](name);\n      }));\n    }\n  }]);\n\n  function IndicatorManager(_indicadores) {\n    var _this = this;\n\n    _classCallCheck(this, IndicatorManager);\n\n    this.indicadores = {};\n\n    _indicadores.forEach(function (indicador) {\n      _this.indicadores[indicador.name] = indicador;\n    });\n  }\n\n  _createClass(IndicatorManager, [{\n    key: \"reset\",\n    value: function reset() {\n      for (var nome in this.indicadores) {\n        if (this.indicadores.hasOwnProperty(nome)) {\n          var indicador = this.indicadores[nome];\n          indicador.reset();\n        }\n      }\n    }\n  }, {\n    key: \"addValueToIndicador\",\n    value: function addValueToIndicador(indicador_name, uid, value) {\n      var indicador = this.indicadores[indicador_name];\n      indicador.add(uid, value);\n      return this;\n    }\n  }, {\n    key: \"addManyValuesToIndicador\",\n    value: function addManyValuesToIndicador(indicador_name, list) {\n      var _this2 = this;\n\n      list.forEach(function (drop) {\n        _this2.addValueToIndicador(indicador_name, drop.uid, drop.value);\n      });\n      return this;\n    }\n  }, {\n    key: \"getIndicadorPercentage\",\n    value: function getIndicadorPercentage(indicador) {\n      return this.indicadores[indicador].percentage();\n    }\n  }, {\n    key: \"getIndicadorTotal\",\n    value: function getIndicadorTotal(indicador) {\n      return this.indicadores[indicador].total();\n    }\n  }, {\n    key: \"getIndicadorsTotals\",\n    value: function getIndicadorsTotals() {\n      var indicators_totals = {};\n\n      for (var indicador in this.indicadores) {\n        indicators_totals[indicador] = this.getIndicadorTotal(indicador);\n      }\n\n      return indicators_totals;\n    }\n  }, {\n    key: \"getBiggestIndicator\",\n    value: function getBiggestIndicator(fallback_indicator) {\n      var name = fallback_indicator;\n      var value = 0;\n\n      for (var indicador in this.indicadores) {\n        var current_valor = this.getIndicadorTotal(indicador);\n\n        if (current_valor > value) {\n          value = current_valor;\n          name = indicador;\n        }\n      }\n\n      return {\n        name: name,\n        valor: value\n      };\n    }\n  }, {\n    key: \"deserialize\",\n    value: function deserialize(indicator_drop_list) {\n      for (var indicator in indicator_drop_list) {\n        if (indicator_drop_list.hasOwnProperty(indicator)) {\n          this.addManyValuesToIndicador(indicator, indicator_drop_list[indicator]);\n        }\n      }\n\n      return this;\n    }\n  }, {\n    key: \"serialize\",\n    value: function serialize() {\n      var indicadores = {};\n\n      for (var indicador_nome in this.indicadores) {\n        if (this.indicadores.hasOwnProperty(indicador_nome)) {\n          var indicador_instancia = this.indicadores[indicador_nome];\n          indicadores[indicador_nome] = indicador_instancia.pool;\n        }\n      }\n\n      return indicadores;\n    }\n  }]);\n\n  return IndicatorManager;\n}();\n\nwindow.IndicatorManager = IndicatorManager;\n\n\n//# sourceURL=webpack:///./src/indicator/IndicatorManager.js?");

/***/ })

/******/ });
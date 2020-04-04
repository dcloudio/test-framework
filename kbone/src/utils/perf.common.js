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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERF_MAX", function() { return PERF_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERF_LIKE_MAX", function() { return PERF_LIKE_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERF_AUTO", function() { return PERF_AUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERF_USING_COMPONENTS", function() { return PERF_USING_COMPONENTS; });
const PERF_MAX = 5
const PERF_LIKE_MAX = 20
const PERF_AUTO = true
const PERF_USING_COMPONENTS = true


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfPage", function() { return PerfPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfComponent", function() { return PerfComponent; });
/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
const performance = __webpack_require__(2)
const {
  PERF_MAX,
  PERF_LIKE_MAX,
  PERF_AUTO,
} = __webpack_require__(0)
// PERF_USING_COMPONENTS
const {
  shouldMeasurePage,
  shouldMeasureComponent,
  getComponentTriggerFn,
  showToast,
  hideToast,
  showModal
} = __webpack_require__(3)

let pages = null

function isFn(fn) {
  return typeof fn === 'function'
}


/**
 * 去掉数组中一个最大值和一个最小值
 * @param {} arry
 */
function spliceMaxMin(arry) {
  const result = arry.splice(0)
  const max = Math.max(...result)
  const min = Math.min(...result)
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === max) {
      result.splice(i, 1)
    }
    if (result[i] === min) {
      result.splice(i, 1)
    }
  }
  return result
}
/**
 * 数组求和
 * @param {} arr
 */
function avg(arr) {
  const newarr = spliceMaxMin(arr)
  return (newarr.reduce((acc, val) => acc + val, 0) / newarr.length).toFixed(2)
}


class Perf {
  constructor(name, max = 10, auto = false) {
    this.max = max
    this.auto = auto
    this.name = name
    this.count = 0
  }
  mark(name, page, self) {
    this.self = self
    this.page = page
    // if (vm) {
    //   this.$vm = vm
    //   this.autoArgs = autoArgs
    // }
    if (this.ended) {
      return
    }
    if (this.auto) {
      showToast({
        title: '自动测试中,请稍候...',
        duration: 999999,
        icon: 'none',
        mask: true
      })
    }
    this.count += 1
    performance.mark(this.name)
  }
  measure(endName) {
    if (this.ended) {
      return
    }
    const endMarkName = `${this.name}.${endName}`
    performance.mark(endMarkName)
    performance.measure(
      endMarkName,
      this.name,
      endMarkName
    )
  }
  getEntriesByName(name, type) {
    return performance.getEntriesByName(name, type)
  }
  clearMarks() {
    return performance.clearMarks()
  }
  clearMeasures() {
    return performance.clearMeasures()
  }
  isEnd() {
    return this.count >= this.max
  }
  reset() {
    this.count = 0
    this.ended = false
    this.$vm = null
    this.autoArgs = null
    this.clearMarks()
    this.clearMeasures()
  }
}

function getStat(perf, type) {
  const before = perf.getEntriesByName(`${type}.setData.before`, 'measure').map(entry => entry.duration)
  const end = perf.getEntriesByName(`${type}.setData.end`, 'measure').map(entry => entry.duration)
  const len = before.length
  console.group('测试详情:')
  for (let i = 0; i < len; i += 1) {
    console.log(`第${i + 1}次,赋值耗时:${before[i]},渲染耗时:${end[i]}`)
  }
  console.groupEnd()
  perf.clearMarks()
  perf.clearMeasures()
  return {
    before: avg(before),
    end: avg(end)
  }
}

function wrapperSetData(namespace, shouldMeasureFn, contentFn, getAutoFn, oldSetData) {
  oldSetData = oldSetData || this.setData
  this.setData = function setData(data, callback) {
    // console.log('....before', data)
    if (Object.keys(data).length === 0) return // 忽略空数据
    if (!shouldMeasureFn.call(this, data, pages.$perf) || pages.$perf.ended) {
      return oldSetData.call(this, data, callback)
    }
    // console.log('....after', data)
    pages.$perf.measure('setData.before')
    oldSetData.call(this, data, function () {
      pages.$perf.measure('setData.end')
      if (pages.$perf.isEnd()) {
        pages.$perf.ended = true
        const stat = getStat(pages.$perf, namespace)
        const content = contentFn(stat)
        hideToast()
        showModal({
          title: '提示',
          content,
          showCancel: false,
          success() { }
        })
        console.log(content)
        if (namespace === 'page') {
          initComponentPerf.call(this, oldSetData)
        }
        return
      }
      if (pages.$perf.auto) {
        const autoFn = getAutoFn.call(this, pages.$perf)
        clearTimeout(pages.$perf.timer)
        pages.$perf.timer = setTimeout(() => {
          autoFn.call(this, pages.$perf.autoArgs)
        }, 1000)
      }
      callback && callback()
    })
  }
}

function initPagePerf() {
  const $perf = pages.$perf = new Perf('page', PERF_MAX, PERF_AUTO)
  wrapperSetData.call(this, 'page', shouldMeasurePage, (stat) => {
    if ($perf.autoArgs) {
      return `共点击${PERF_LIKE_MAX}次,赋值平均耗时:${stat.before},渲染平均耗时:${stat.end}`
    }
    return `共${PERF_MAX}页,${20 * PERF_MAX}条数据,赋值平均耗时:${stat.before},渲染平均耗时:${stat.end},点击任意点赞按钮,开始按钮点击测试!`
  }, () => function () {
    console.log(`当前第${pages.$perf.count + 1}页,共${pages.$perf.max}页`)

    // return this.onReachBottom()
    return pages.onReachBottom()
  })
}

function initComponentPerf(oldSetData) {
  pages.$perf = new Perf('component', PERF_LIKE_MAX, PERF_AUTO)
  wrapperSetData.call(this, 'component', shouldMeasureComponent, stat => `共点击${PERF_LIKE_MAX}次,赋值平均耗时:${stat.before},渲染平均耗时:${stat.end}`, getComponentTriggerFn, oldSetData)
}


const oldPage = Page
Page = function (options) {
  const oldOnLoad = options.onLoad
  options.onLoad = function (args) {
    pages = getCurrentPages()
    pages = pages[pages.length - 1]
    initPagePerf.call(this)
    isFn(oldOnLoad) && oldOnLoad.call(this, args)
  }
  return oldPage(options)
}

const oldComponent = Component
Component = function (options) {
  const oldCreated = options.created
  options.created = function (args) {
    // if (this.is === 'miniprogram_npm/miniprogram-element/index') {
    initPagePerf.call(this)
    // } else {
    //   initComponentPerf.call(this)
    // }
    isFn(oldCreated) && oldCreated.call(this, args)
  }
  return oldComponent(options)
}

const PerfPage = Page
const PerfComponent = Component



/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* eslint-disable no-void */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/**
 * User Timing polyfill (http://www.w3.org/TR/user-timing/)
 * @author RubaXa <trash@rubaxa.org>
 */

const startOffset = Date.now ? Date.now() : +(new Date())
const performance = {}

const _entries = []
const _marksIndex = {}

function _filterEntries(key, value, filterEntries) {
  filterEntries = filterEntries || _entries
  let i = 0
  const n = filterEntries.length
  const result = []
  for (; i < n; i += 1) {
    if (filterEntries[i][key] === value) {
      result.push(filterEntries[i])
    }
  }
  return result
}

function _clearEntries(type, name) {
  let i = _entries.length
  let entry
  while (i--) {
    entry = _entries[i]
    if (entry.entryType === type && (name === void 0 || entry.name === name)) {
      _entries.splice(i, 1)
    }
  }
}

performance.now = function () {
  return (Date.now ? Date.now() : +(new Date())) - startOffset
}

performance.mark = function (name) {
  const mark = {
    name,
    entryType: 'mark',
    startTime: performance.now(),
    duration: 0
  }
  _entries.push(mark)
  _marksIndex[name] = mark
}

performance.measure = function (name, startMark, endMark) {
  let startTime
  let endTime

  if (endMark !== undefined && _marksIndex[endMark] === undefined) {
    throw new SyntaxError(`Failed to execute 'measure' on 'Performance': The mark '${endMark
    }' does not exist.`)
  }

  if (startMark !== undefined && _marksIndex[startMark] === undefined) {
    throw new SyntaxError(`Failed to execute 'measure' on 'Performance': The mark '${startMark
    }' does not exist.`)
  }

  if (_marksIndex[startMark]) {
    startTime = _marksIndex[startMark].startTime
  } else {
    startTime = 0
  }

  if (_marksIndex[endMark]) {
    endTime = _marksIndex[endMark].startTime
  } else {
    endTime = performance.now()
  }

  _entries.push({
    name,
    entryType: 'measure',
    startTime,
    duration: endTime - startTime
  })
}

performance.getEntriesByType = function (type) {
  return _filterEntries('entryType', type)
}

performance.getEntriesByName = function (name, type) {
  if (type) {
    return _filterEntries('entryType', type, _filterEntries('name', name))
  }
  return _filterEntries('name', name)
}

performance.clearMarks = function (name) {
  _clearEntries('mark', name)
}

performance.clearMeasures = function (name) {
  _clearEntries('measure', name)
}

// export default performance

module.exports = performance


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldMeasurePage", function() { return shouldMeasurePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldMeasureComponent", function() { return shouldMeasureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentTriggerFn", function() { return getComponentTriggerFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return showToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return hideToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* eslint-disable max-len */
/* eslint-disable no-undef */
const {
  PERF_LIKE_MAX,
} = __webpack_require__(0)

/**
 * 是否开始测算页面性能
 */
// export function shouldMeasurePage() {
//   return true
// }

function shouldMeasurePage(data) {
  const isPage = data.childNodes && data.childNodes[0] && data.childNodes[0].childNodes[0].childNodes[0].childNodes
  if ((Object.keys(data).length === 1 && data.pageId) || !(isPage && isPage.length > 0)) {
    return false
  }
  return true
}

/**
 * 是否开始测试组件性能
 */
function shouldMeasureComponent(data, perf) {
  return perf.count > 0
}
function getComponentTriggerFn(perf) {
  console.log(`当前点击第${perf.count}次,共${PERF_LIKE_MAX}次`)
  return function componentTrigger() {
    return perf.self.trigger()
  }
}
/**
 * 显示 toast
 */
function showToast(args) {
  return wx.showToast(args)
}
/**
 * 隐藏 toast
 */
function hideToast() {
  return wx.hideToast()
}
/**
 * 显示 modal
 */
function showModal(args) {
  return wx.showModal(args)
}


/***/ })
/******/ ]);
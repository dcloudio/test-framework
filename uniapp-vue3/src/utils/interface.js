// const {
//   PERF_LIKE_MAX,
// } = require('./config')
import {PERF_LIKE_MAX} from './config'

/**
 * 是否开始测算页面性能
 */
export function shouldMeasurePage (data) {
  return true
}
/**
 * 是否开始测试组件性能
 */
export function shouldMeasureComponent (data,perf) {
  return this.$perf.count > 0
}
export function getComponentTriggerFn () {
  console.log(`当前点击第${this.$perf.count}次,共${PERF_LIKE_MAX}次`)
  return function componentTrigger () {
    return this.$vm.trigger()
  }
}
/**
 * 显示 toast
 */
export function showToast (args) {
  return uni.showToast(args)
}
/**
 * 隐藏 toast
 */
export function hideToast () {
  return uni.hideToast()
}
/**
 * 显示 modal
 */
export function showModal (args) {
  return uni.showModal(args)
}

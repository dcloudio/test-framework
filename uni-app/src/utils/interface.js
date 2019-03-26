/**
 * 是否开始测算页面性能
 */
export function shouldMeasurePage (data) {
  return true
}
/**
 * 是否开始测试组件性能
 */
export function shouldMeasureComponent (data) {
  return this.$perf.count > 0
}
export function getComponentTriggerFn () {
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

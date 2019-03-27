/**
 * 是否开始测算页面性能
 */
export function shouldMeasurePage (data, autoArgs) {
  return !!data['$root.0.listData'] || Object.keys(data).length >= 20 
}
/**
 * 是否开始测试组件性能
 */
export function shouldMeasureComponent (data) {
  return this.$perf.count > 0 && Object.keys(data).length > 1
}
/**
 * 获取组件 trigger 方法
 */
export function getComponentTriggerFn () {
  return function componentTrigger (args) {
    return this.$perf.$vm.trigger(args)
  }
}
/**
 * 显示 toast
 */
export function showToast (args) {
  return mpvue.showToast(args)
}
/**
 * 隐藏 toast
 */
export function hideToast () {
  return mpvue.hideToast()
}
/**
 * 显示 modal
 */
export function showModal (args) {
  return mpvue.showModal(args)
}

/**
 * 是否开始测算页面性能
 */
export function shouldMeasurePage (data, autoArgs) {
  return data.listData && data.listData.length >= 20
}
/**
 * 是否开始测试组件性能
 */
export function shouldMeasureComponent (data) {
  return this.$perf.count > 0
}
/**
 * 获取组件 trigger 方法
 */
export function getComponentTriggerFn () {
  return function componentTrigger (args) {
    return this.$perf.$vm.methods.trigger.call(this.$perf.$vm, args)
  }
}
/**
 * 显示 toast
 */
export function showToast (args) {
  return wx.showToast(args)
}
/**
 * 隐藏 toast
 */
export function hideToast () {
  return wx.hideToast()
}
/**
 * 显示 modal
 */
export function showModal (args) {
  return wx.showModal(args)
}

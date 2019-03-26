
/**
 * 是否开始测算页面性能
 */
export function shouldMeasurePage (data) {
  return data.listData && data.listData.length > 0
}
/**
 * 是否开始测试组件性能
 */
export function shouldMeasureComponent (data) {
  return this.$perf.count > 0
}
export function getComponentTriggerFn () {
  return function componentTrigger () {
    return this.trigger()
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

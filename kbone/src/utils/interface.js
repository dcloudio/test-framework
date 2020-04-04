/* eslint-disable max-len */
/* eslint-disable no-undef */
const {
  PERF_LIKE_MAX,
} = require('./config')

/**
 * 是否开始测算页面性能
 */
// export function shouldMeasurePage() {
//   return true
// }

export function shouldMeasurePage(data) {
  const isPage = data.childNodes && data.childNodes[0] && data.childNodes[0].childNodes[0].childNodes[0].childNodes
  if ((Object.keys(data).length === 1 && data.pageId) || !(isPage && isPage.length > 0)) {
    return false
  }
  return true
}

/**
 * 是否开始测试组件性能
 */
export function shouldMeasureComponent(data, perf) {
  return perf.count > 0
}
export function getComponentTriggerFn(perf) {
  console.log(`当前点击第${perf.count}次,共${PERF_LIKE_MAX}次`)
  return function componentTrigger() {
    return perf.self.trigger()
  }
}
/**
 * 显示 toast
 */
export function showToast(args) {
  return wx.showToast(args)
}
/**
 * 隐藏 toast
 */
export function hideToast() {
  return wx.hideToast()
}
/**
 * 显示 modal
 */
export function showModal(args) {
  return wx.showModal(args)
}

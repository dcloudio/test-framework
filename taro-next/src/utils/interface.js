import Taro from '@tarojs/taro'

const {
    PERF_LIKE_MAX,
} = require('./config')
/**
 * 是否开始测算页面性能
 */
export function shouldMeasurePage(data) {
    return Object.keys(data).length > 1
}
/**
 * 是否开始测试组件性能
 */
export function shouldMeasureComponent(data) {
    return this.$perf.count > 0 && Object.keys(data).length > 0
}
/**
 * 获取组件 trigger 方法
 */
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
    return Taro.showToast(args)
}
/**
 * 隐藏 toast
 */
export function hideToast() {
    return Taro.hideToast()
}
/**
 * 显示 modal
 */
export function showModal(args) {
    return Taro.showModal(args)
}

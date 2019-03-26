import Taro from '@tarojs/taro'
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
    return this.$perf.count > 0 && Object.keys(data).length > 1
}
/**
 * 获取组件 trigger 方法
 */
export function getComponentTriggerFn() {
    return function componentTrigger() {
        return this.$component.trigger()
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

// import performance from './performance.polyfill.js'
const performance = require('./performance.polyfill.js')
const {
    PERF_MAX,
    PERF_LIKE_MAX,
    PERF_AUTO,
    PERF_USING_COMPONENTS
} = require('./config')

const {
    shouldMeasurePage,
    shouldMeasureComponent,
    getComponentTriggerFn,
    showToast,
    hideToast,
    showModal
} = require('./interface')

function isFn(fn) {
    return typeof fn === 'function'
}

function avg(arr) {
    return (arr.reduce((acc, val) => acc + val, 0) / arr.length).toFixed(2)
}

class Perf {
    constructor(name, max = 10, auto = false) {
        this.max = max
        this.auto = auto
        this.name = name
        this.count = 0
    }
    mark(name, vm, autoArgs) {
        if (vm) {
            this.$vm = vm
            this.autoArgs = autoArgs
        }
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
        this.count++
        performance.mark(this.name)
    }
    measure(endName) {
        if (this.ended) {
            return
        }
        const endMarkName = this.name + '.' + endName
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
    const before = perf.getEntriesByName(type + '.setData.before', 'measure').map(entry => entry.duration)
    const end = perf.getEntriesByName(type + '.setData.end', 'measure').map(entry => entry.duration)

    const len = before.length
    console.group('测试详情:')
    for (let i = 0; i < len; i++) {
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
        if (!shouldMeasureFn.call(this, data, this.$perf.autoArgs) || this.$perf.ended) {
            return oldSetData.call(this, data, callback)
        }
        // console.log('....after', data)
        this.$perf.measure('setData.before')
        oldSetData.call(this, data, function () {
            this.$perf.measure('setData.end')
            if (this.$perf.isEnd()) {
                this.$perf.ended = true
                const stat = getStat(this.$perf, namespace)
                const content = contentFn(stat)
                hideToast()
                showModal({
                    title: '提示',
                    content,
                    showCancel: false,
                    success(res) {}
                })
                console.log(content)
                if (PERF_USING_COMPONENTS === false && namespace === 'page') {
                    initComponentPerf.call(this, oldSetData)
                }
                return
            }
            if (this.$perf.auto) {
                const autoFn = getAutoFn.call(this)
                clearTimeout(this.$perf.timer)
                this.$perf.timer = setTimeout(() => {
                    autoFn.call(this, this.$perf.autoArgs)
                }, 1000)
            }
            callback && callback()
        })
    }
}

function initPagePerf() {
    const $perf = this.$perf = new Perf('page', PERF_MAX, PERF_AUTO)
    wrapperSetData.call(this, 'page', shouldMeasurePage, function (stat) {
        if ($perf.autoArgs) {
            return `共点击${PERF_LIKE_MAX}次,赋值平均耗时:${stat.before},渲染平均耗时:${stat.end}`
        }
        return `共${PERF_MAX}页,${20 * PERF_MAX}条数据,赋值平均耗时:${stat.before},渲染平均耗时:${stat.end},点击任意点赞按钮,开始按钮点击测试!`
    }, function () {
        return function (args) {
            console.log('当前第' + (this.$perf.count + 1) + '页,共' + this.$perf.max + '页')
            return this.onReachBottom()
        }
    })
}

function initComponentPerf(oldSetData) {
    this.$perf = new Perf('component', PERF_LIKE_MAX, PERF_AUTO)
    wrapperSetData.call(this, 'component', shouldMeasureComponent, function (stat) {
        return `共点击${PERF_LIKE_MAX}次,赋值平均耗时:${stat.before},渲染平均耗时:${stat.end}`
    }, getComponentTriggerFn, oldSetData)
}


const oldPage = Page
Page = function (options) {
    const oldOnLoad = options.onLoad
    options.onLoad = function (args) {
        initPagePerf.call(this)
        isFn(oldOnLoad) && oldOnLoad.call(this, args)
    }
    return oldPage(options)
}

const oldComponent = Component
Component = function (options) {
    const oldCreated = options.created
    options.created = function (args) {
        if (this.is === 'pages/index/index') {
            initPagePerf.call(this)
        } else {
            initComponentPerf.call(this)
        }
        isFn(oldCreated) && oldCreated.call(this, args)
    }
    return oldComponent(options)
}

export const PerfPage = Page
export const PerfComponent = Component
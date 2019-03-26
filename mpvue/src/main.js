import Vue from 'vue'
import App from './App'

import {
    PerfPage,
    PerfComponent
} from './utils/perf'

global.Page = PerfPage
global.Component = PerfComponent

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

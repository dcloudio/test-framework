import { createApp } from 'vue'
import App from './App.vue'
//#ifdef MP-WEIXIN || MP-ALIPAY
require('utils/perf.js')
//#endif
App.mpType = 'app'
createApp(App).mount('#app')

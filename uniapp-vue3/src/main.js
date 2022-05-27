import {
	createSSRApp
} from "vue";
import App from "./App.vue";
//#ifdef MP-WEIXIN || MP-ALIPAY
// require('@/utils/perf.js')
import '@/utils/perf.js' 
//#endif
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}

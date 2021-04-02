import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
// axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/279933'
// 发送数据需要axios
import axios from 'axios'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

// 全局导入Echarts
import echarts from 'echarts'

// 全局导入Echars-liquidfill
import 'echarts-liquidfill'
Vue.config.productionTip = false
// 挂载Echars
Vue.prototype.$echarts = echarts
// 挂载请求地址
// Vue.prototype.$http = axios
Vue.prototype.$axios=axios

Vue.prototype.$video = Video

new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app') 

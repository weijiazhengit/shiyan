import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/279933'
// 发送数据需要axios
import axios from 'axios'
Vue.config.productionTip = false

// 挂载请求地址
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App'

// https://youzan.github.io/vant/#/zh-CN/icon
import Vant from 'vant'
import 'vant/lib/index.css'

import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

Vue.use(Vant)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

import Vue from 'vue'
import App from './App'

// https://youzan.github.io/vant/#/zh-CN/icon
// import Vant from 'vant'
// import 'vant/lib/index.css'

import Vant from './common/vant/vant.min'
import './common/vant/vant.css'
Vue.use(Vant)

// 引入foot组件
import Head from './components/head.vue'
Vue.component('app-head', Head)

import Foot from './components/foot.vue'
Vue.component('app-foot', Foot)


// 使用 vuex
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

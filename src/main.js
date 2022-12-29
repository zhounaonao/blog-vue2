import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/global.less'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import '@/assets/iconfont/iconfont.css' // 引入font-class图标
import '@/assets/iconfont/iconfont.js' // 引入symbol图标
import '@/assets/css/iconfont.less' // 给symbol加效果


Vue.use(ElementUI);
Vue.use(mavonEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

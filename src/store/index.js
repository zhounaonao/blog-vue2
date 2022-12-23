import Vue from 'vue'
import Vuex from 'vuex'
// 插件，保持刷新恢复数据
import VuexAlong from 'vuex-along'

Vue.use(Vuex)

export const state = {
  loading: false,
  logined: false,
  baseURL: 'http://127.0.0.1:9110/'

}

export default new Vuex.Store({
  state,
  mutations: {
    setLogined(state, boolean) {
      state.logined = boolean
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [VuexAlong()]
})

import Vue from 'vue'
import Vuex from 'vuex'
// 插件，保持刷新恢复数据
import VuexAlong from 'vuex-along'
import defaultAvatarJpg from '@/assets/images/defaultAvatar.jpg'

Vue.use(Vuex)

export const state = {
  loading: false,
  logined: false,
  baseURL: 'http://192.168.3.56:9110/',
  defaultAvatar: defaultAvatarJpg

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

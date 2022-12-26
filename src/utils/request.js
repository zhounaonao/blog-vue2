import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { Loading } from 'element-ui'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: store.state.baseURL,
  // 超时
  timeout: 100000
})

// 声明请求拦截
let loadingInstance = null
request.interceptors.request.use(config => {
  // 展示loading效果
  // loadingInstance = Loading.service({ fullscreen: true })
  const isToken = config.headers.isToken
  // console.log(getToken());
  if (getToken() && isToken) {
    config.headers['token'] = getToken()
  }
  return config
})

// 声明响应拦截器
request.interceptors.response.use(response => {
  // 隐藏loading效果
  // loadingInstance.close()
  // console.log(response);
  return response.data
})

export default request
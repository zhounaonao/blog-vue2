import request from '@/utils/request.js'

export function getUserInfo() {
  return request({
    url: '/user/userInfo',
    method: 'get',
    headers: {
      isToken: true
    }
  })
}

export function saveUserInfo(userInfo) {
  return request({
    url: '/user/userInfo',
    method: 'put',
    headers: {
      isToken: true
    },
    data: userInfo
  })
}
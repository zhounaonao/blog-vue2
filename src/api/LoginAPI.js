import request from '@/utils/request.js'

export function login(userName, password) {
  return request({
    url: '/security/login',
    method: 'post',
    headers: {
      isToken: false
    },
    data: {
      "userName": userName,
      "password": password
    }
  })
}


export function logout() {
  return request({
    url: '/security/logout',
    method: 'post',
    headers: {
      isToken: true
    }
  })
}
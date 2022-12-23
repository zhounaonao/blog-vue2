import request from '@/utils/request.js'

export function articleList(userName, password) {
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
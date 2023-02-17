import request from '@/utils/request.js'

export function login(form) {
  return request({
    url: '/security/login',
    method: 'post',
    headers: {
      isToken: false
    },
    data: form
  })
}

export function register(form) {
  return request({
    url: '/user/register',
    method: 'post',
    headers: {
      isToken: false
    },
    data: form
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
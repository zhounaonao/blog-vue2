import request from '@/utils/request.js'

export function getCategoryList() {
  return request({
    url: '/category/getCategoryList',
    method: 'get',
    headers: {
      isToken: false
    }
  })
}

export function getAllCategoryList() {
  return request({
    url: '/category/getAllCategoryList',
    method: 'get',
    headers: {
      isToken: false
    }
  })
}
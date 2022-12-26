import request from '@/utils/request.js'

export function articleList(pageNum, pageSize, categoryId) {
  return request({
    url: '/article/articleList',
    method: 'get',
    headers: {
      isToken: false
    },
    params: {
      "pageNum": pageNum,
      "pageSize": pageSize,
      "categoryId": categoryId
    }
  })
}

export function getArticleDetail(articleId) {
  return request({
    url: '/article/' + articleId,
    method: 'get',
    headers: {
      isToken: false
    }
  })
}
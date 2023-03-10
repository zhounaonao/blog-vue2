import request from '@/utils/request.js'

export function articleList(pageNum, pageSize, categoryId, userId) {
  return request({
    url: '/article/articleList',
    method: 'get',
    headers: {
      isToken: false
    },
    params: {
      "pageNum": pageNum,
      "pageSize": pageSize,
      "categoryId": categoryId,
      "userId": userId
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

export function writeArticle(article) {
  return request({
    url: '/article/write',
    method: 'post',
    headers: {
      isToken: true
    },
    data: article
  })
}

export function updateViewCount(articleId) {
  return request({
    url: '/article/updateViewCount/' + articleId,
    method: 'put',
    headers: {
      isToken: false
    }
  })
}

export function updateCount(articleId, countString) {
  return request({
    url: '/article/updateCount/' + articleId,
    method: 'put',
    headers: {
      isToken: true
    },
    params: {
      countString 
    }
  })
}


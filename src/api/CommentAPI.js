import request from '@/utils/request.js'

export function addComment(comment) {
  return request({
    url: '/comment/addComment',
    method: 'post',
    headers: {
      isToken: true
    },
    data: comment
  })
}

export function getCommentList(pageNum, pageSize, articleId) {
  return request({
    url: '/comment/commentList',
    method: 'get',
    headers: {
      isToken: false
    },
    params: {
      "pageNum": pageNum,
      "pageSize": pageSize,
      "articleId": articleId
    }
  })
}

export function updateCommentCount(id, countString) {
  return request({
    url: '/comment/updateCount/' + id,
    method: 'put',
    headers: {
      isToken: true
    },
    params: {
      countString 
    }
  })
}
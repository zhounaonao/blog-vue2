export function addComment(comment) {
  return request({
    url: '/comment/addComment',
    method: 'post',
    headers: {
      isToken: false
    },
    data: comment
  })
}
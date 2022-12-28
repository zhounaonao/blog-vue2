import request from '@/utils/request.js'

export function uploadFile(file) {
  return request({
    url: '/upload/file',
    method: 'post',
    headers: {
      isToken: true,
      'Content-Type': 'multipart/form-data'
    },
    data: {
      file
    }
  })
}
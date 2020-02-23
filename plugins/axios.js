export default function (app) {
  let axios = app.$axios; 
 // 基本配置
  axios.defaults.baseURL = 'https://zycao.com/wp-json/wp/v2/'

  // 请求回调
  axios.onRequest(config => {})

  // 返回回调
  axios.onResponse(res => {})

  // 错误回调
  axios.onError(error => {})
}
import axios from 'axios';

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
// axios.defaults.timeout = 5000
// // http请求拦截器
// axios.interceptors.request.use(config => {

// }, error => {
  
// })
// // http响应拦截器
// axios.interceptors.response.use(data => {// 响应成功关闭loading
// }, error => {
// })
export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,params)
    .then(response => {
      resolve(response);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {},headers={}){
    // var dev='http://112.13.170.197:8443';
    // if(location.href.indexOf('lxgo')>-1){
    //    dev='http://lxh5.cmread.com:8443'
    // }
    // if(url.indexOf('rttpage')>-1){
    //     url=dev+url
    // }
   return new Promise((resolve,reject) => {
     axios.post(url,data,headers)
          .then(response => {
            resolve(response);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}
export const fetchData={
    post:post
}
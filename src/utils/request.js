import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'
import {getToken,setToken} from '@/utils/auth'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const $axios = axios.create({
    baseURL:"http://192.168.101.229:8932", // api 的 base_urlhttp://192.168.101.96:8933  http://192.168.101.229:8932
    timeout: 5000 ,// request timeout http://114.55.38.89:8932
  })


  $axios.interceptors.request.use(
    config => {
      // Do something before request is sent
      if (getToken()) {
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
        config.headers['token'] = getToken()
      }
      return config
    },
    error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    }
  )

  $axios.interceptors.response.use(
      res=>{
        if(res.headers.token){
          setToken(res.headers.token)
        store.commit('SET_TOKEN',res.headers.token)
        }
       return res
      },err=>{
        return Promise.reject(err);
      } 
  
  
    // error => {
    //   console.log('err' + error) // for debug
    //   Message({
    //     message: error.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    //   return Promise.reject(error)
    // }
  )
  
  export default $axios

   /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    // response => {
    //   const res = response.data
    //   if (res.code !== 20000) {
    //     Message({
    //       message: res.message,
    //       type: 'error',
    //       duration: 5 * 1000
    //     })
    //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //       // 请自行在引入 MessageBox
    //       // import { Message, MessageBox } from 'element-ui'
    //       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //       }).then(() => {
    //         store.dispatch('FedLogOut').then(() => {
    //           location.reload() // 为了重新实例化vue-router对象 避免bug
    //         })
    //       })
    //     }
    //     return Promise.reject('error')
    //   } else {
    //     return response.data
    //   }
    // },
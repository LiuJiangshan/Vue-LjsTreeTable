import Vue from 'vue'
import router from './docs/router'
import App from './docs/App'
import axios from 'axios'
import Message from 'iview/src/components/message'
import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'
import './docs/style/common.scss'
import ljsTreeTable from './lib.js'
// import ljsTreeTable from '../dist/lib/index.js'
import './style/index.scss'
import iview from 'iview'
import elementUi from 'element-ui'
import 'element-ui/packages/theme-chalk/src/index.scss'

Vue.use(ljsTreeTable)
Vue.use(iview)
Vue.use(elementUi)
Message.config({top: 200})
Vue.use(ljsTreeTable)

Vue.prototype.axios = axios
axios.defaults.headers['Client-Type'] = 'web'
// static api
window.contentPath = './plm'
// window.contentPath = '/plm'
window.apiUrl = window.contentPath + '/api'
axios.interceptors.response.use(response => {
  if (response.data.ok) Message.success(response.data.msg)
  else Message.error(response.data.msg)
  return response
}, error => {
  let status = error.response.status
  if (error && error.response.data.msg) Message.info(status + ':' + error.response.data.msg)
  switch (status) {
    default:
      Message.error('与服务器通信失败:' + error.message)
      return Promise.reject(error)
  }
})

window.app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

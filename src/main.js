import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

// 导入全局样式表
import './assets/css/blobal.css'
//导入字体图标
import './assets/fonts/iconfont.css'

Vue.use(ElementUI);
//将axios挂载到原型上,这样每个组件都能调用
Vue.prototype.$http = axios
//配置请求根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

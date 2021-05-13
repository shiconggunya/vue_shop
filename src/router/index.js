import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Login = ()=>import('../components/Login.vue')
const Home = ()=>import('../views/home/Home.vue')
const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component: Login,
  },
  {
    path:'/home',
    component:Home,
  }
]

const router = new VueRouter({
  routes,
})

//挂载路由导航守卫
router.beforeEach((to,from,next) =>{
  //判断是不是访问登录页面
  if( to.path === '/login'){
    return next();   //登录页面不需要权限所以直接放行
  }else{
    //不是登录页面的话,判断有没有携带token

    //获取token
    const tokenStr = window.sessionStorage.getItem('token');
    //如果没有token,强制跳转到Login
    if(!tokenStr) return next('/login')  
    //如果携带token,放行
    next();
  }
})



export default router

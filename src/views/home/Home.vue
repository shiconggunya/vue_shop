<template>
  <div>
    <h2>主页</h2>
    <el-button type="info" @click="loginout">退出</el-button>
  </div>
</template>

<script>

export default {
   name: 'Home',
   methods:{
    //退出登录
     loginout(){
       //清除token
       window.sessionStorage.removeItem('token')
       //跳转到登录页面
       this.$router.push('/login')
     }
   }
}
</script>

<style scoped>
   
</style>
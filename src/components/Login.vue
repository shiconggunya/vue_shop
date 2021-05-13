<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>

      <!-- 登录表单区域 -->
      <el-form
        label-width="0px"
        class="login_form"
        :model="loginForm"
        :rules="loginRules"
        ref="loginFormRef"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="iconfont icon-3702mima"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>

        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // 登录表单的数据
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      //表单验证
      loginRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    // 表单重置
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    //登录时,,校验
    login() {
      this.$refs.loginFormRef.validate(async (vaid) => {
        if (!vaid) return //如果不正确,返回return
        //结构赋值重命名
        const { data: res } = await this.$http.post('login', this.loginForm)
        //判断状态码
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        //登录成功
        this.$message({
          message: '登录成功',
          type: 'success',
        })

        //1.将登录成功之后的token, 保存到客户端的sessionStorage 中
        //1.1项目中出了登录之外的其他API接口，必须在登录之后才能访问
        //1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage 中
        window.sessionStorage.setItem('token', res.data.token)

        //2.通过编程式导航跳转到后台主页，路由地址是/home
        this.$router.push('home')
      })
    },
  },
}
</script>

<style scoped lang='less'>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.login_form {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
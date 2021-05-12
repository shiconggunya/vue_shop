# 1.项目初始化

> 1.安装 Vue脚手架
>
> 2.通过 Vue 脚手架创建项目
>
> 3.配置 Vue 路由
>
> 4.配置Element-UI 组件库
>
> 5.配置 axios
>
> 6.初始化 git 远程仓库
>
> 7.将本地项目托管到Github或码云中
>
> > git credential-manager uninstall  //清空之前用户



# 2.登入/退出功能

## 1.登录

### 1.1 登录概述

> 1.登录业务流程
>
> ①在登录页面输入用户名和密码
> ②调用后台接口进行验证
> ③通过验证之后，根据后台的响应状态跳转到项目主页
>
> 2.登录业务的相关技术点
>
> ● http是无状态的
> ● 通过cookie在客户端记录状态
> ●通过session在服务器端记录状态
> ● 通过token方式维持状态
>
> ![image-20210512213819155](C:/Users/shiconggun/AppData/Roaming/Typora/typora-user-images/image-20210512213819155.png)




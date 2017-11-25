<template>
  <div id="login">
    <div class="sign">
      <div class="header">宾馆住宿管理系统</div>
      <div class="main">
        <el-input placeholder="username" v-model="account"></el-input>
        <el-input type="password" placeholder="password" v-model="password"></el-input>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        account: '',
        password: '',

      }
    },
    methods: {
      login: function () {
        this.$message.error({
            message:'hello',
            showClose:true,
            center:true
        })
      }
    }
  }

</script>
<style>
  #login {
    height: 100%;
    background-color: #324057;
    display: flex;
  }

  #login .sign {
    margin: auto;
    width: 30rem;
    height: 30rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  #login .sign .header {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2rem;
  }

  #login .sign .main {
    background-color: #fff;
    width: 20rem;
    padding: 2rem;
    border-radius: 4px;
  }

  #login .sign .main .el-input {
    margin-bottom: 1.5rem;
  }

  #login .sign .main .el-button {
    width: 100%;
  }

</style>

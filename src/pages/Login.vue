<template>
  <div id="login">
    <div class="shadow">
      <div class="sign">
        <div class="header">宾馆住宿管理系统</div>
        <div class="main">
          <el-input placeholder="用户名" v-model="uid"></el-input>
          <el-input type="password" placeholder="密码" v-model="pwd"></el-input>
          <el-button type="primary" @click="login" :loading="loadingng">登录</el-button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        uid: '',
        pwd: '',
        loadingng: false
      }
    },
    methods: {
      login() {
        if (!this.uid || !this.pwd) {
          this.$message({
            message: '用户名和密码不能为空',
            type: 'warning'
          })
          return
        }
        this.loadingng = true
        this.$store.dispatch('login', {
          uid: this.uid,
          pwd: this.pwd
        }).then(() => {
          this.loadingng = false
          this.$router.push('/home')
        }).catch((err) => {
          this.loadingng = false
          this.$message({
            message: '登录失败',
            type: 'error'
          })
        })
      }
    }
  }

</script>
<style>
  #login {
    height: 100%;
    background-image: url("../assets/background.jpg");
    background-size: cover;
  }

  #login .shadow {
    background-color: rgba(0, 0, 0, .7);
    height: 100%;
    width: 100%;
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

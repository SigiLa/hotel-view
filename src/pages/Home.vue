<template>
  <div id="home">
    <el-container>
      <el-header style="height:60px;padding:0">
        <my-head></my-head>
      </el-header>
      <el-container>
        <el-aside width="240px" style="background-color: rgb(238, 241, 246)">
          <nav-bar></nav-bar>
        </el-aside>

        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>



  </div>
</template>
<script>
  import NavBar from '@/components/NavBar'
  import MyHead from '@/components/Head'

  export default {
    components: {
      'nav-bar': NavBar,
      'my-head': MyHead,
    }
  }

</script>
<style scoped>
  #home {
    height: 100%;
    width: 100%;
  }

  #home .el-container {
    height: 100%;
    width: 100%;
  }

  .main {
    padding: 0;
    height: 100%;
  }

</style>

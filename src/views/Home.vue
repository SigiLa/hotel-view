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
          <!-- <add-guest></add-guest> -->
        </el-main>
      </el-container>

    </el-container>



  </div>
</template>
<script>
  import NavBar from '@/components/NavBar'
  import MyHead from '@/components/Head'
  import AddGuest from '@/components/AddGuest'
  export default {
    components: {
      'nav-bar':NavBar,
      'my-head':MyHead,
      'add-guest':AddGuest
    }
  }

</script>
<style>
  #home {
    height: 100%;
    width: 100%;
  }

  #home .el-container {
    height: 100%;
    width: 100%;
  }
  .main{
    padding: 0;
  }

</style>

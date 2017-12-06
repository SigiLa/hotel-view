<template>
  <div id="head">
    <div class="title">宾馆住宿管理系统</div>
    <div class="head-right">
      <div id="userInfo">欢迎您，{{getUserId}}</div>
      <a href="javascript:"  id="signOut" @click="signOut">退出</a>
    </div>

  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'MyHead',
    methods: {
      signOut() {
        this.$router.push('/')
      }
    },
    computed: {
      ...mapGetters({
        getUserId: 'getUserId'
      })
    }

  }

</script>
<style>
  #head {
    height: 100%;
    background-color: #262626;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 0 30px;
    font-size: 14px;
    color: #fff;
  }

  .title {
    font-size: 20px;
    line-height: 60px;
    height: 60px;
  }

  #userInfo {
    height: 60px;
    line-height: 60px;
  }

  #signOut {
    height: 60px;
    line-height: 60px;
    margin-left: 20px;
    color: #fff;
  }

  .head-right {
    display: flex;
  }

</style>

<template>
  <div id="navbar">
    <el-menu default-active="1" v-bind="styleConf" @select="onSelect">
      <el-menu-item index="1">
        <i class="fa fa-user-o fa-fw" aria-hidden="true"> 客户信息管理</i>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="fa fa-hotel fa-fw" aria-hidden="true"> 客房管理</i>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="fa fa-history fa-fw" aria-hidden="true"> 历史记录</i>
      </el-menu-item>
    </el-menu>

  </div>

</template>
<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        styleConf: {
          activeTextColor: '#ffd04b',
          backgroundColor: '#545c64',
          textColor: '#fff'
        }
      }
    },
    methods: {
      onSelect: function (index) {
        switch (index) {
          case '1':
            this.$router.push('/home/guest')
            return
          case '2':
            this.$router.push('/home/room')
            return
          case '3':
            this.$router.push('/home/history')
            return
        }
      }
    },
  }

</script>
<style>


</style>

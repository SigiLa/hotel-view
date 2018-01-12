<template>
  <div id="navbar">
    <el-menu default-active="1" v-bind="styleConf" @select="onSelect">
      <el-menu-item index="1">客户信息管理</el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          房间信息管理
        </template>
        <el-menu-item index="2-1">添加</el-menu-item>
        <el-menu-item index="2-2">删除</el-menu-item>
        <el-menu-item index="2-3">修改</el-menu-item>
        <el-menu-item index="2-4">查询</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          统计结算
        </template>
        <el-menu-item index="3-1">退房</el-menu-item>
      </el-submenu>
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
            this.$router.push('/home')
            return
        }
      }
    },
    computed: {
      // classObject() {
      //   return {
      //     activeTextColor: '#ffd04b',
      //     uniqueOpened: true,
      //     backgroundColor: '#545c64',
      //     textColor: '#fff'
      //   }

      // }
    }
  }

</script>
<style>


</style>

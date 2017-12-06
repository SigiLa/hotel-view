<template>
  <div id="navbar">
    <el-menu default-active="1-4" @select="onSelect" unique-opened="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          客户信息管理
        </template>
        <el-menu-item index="1-1">添加</el-menu-item>
        <el-menu-item index="1-2">删除</el-menu-item>
        <el-menu-item index="1-3">修改</el-menu-item>
        <el-menu-item index="1-4">查询</el-menu-item>
      </el-submenu>
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

      }
    },
    methods: {
      onSelect: function (index) {
        switch (index) {
          case '1-1':
            this.$router.push('/home/addGuest')
          case '1-4':
            this.$router.push('/home/queryGuest')
        }
      }
    }
  }

</script>
<style>


</style>

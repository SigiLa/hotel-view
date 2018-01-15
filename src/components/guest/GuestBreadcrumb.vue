<template>
  <div id="breadcrumb">
    <el-menu default-active="1" v-bind="styleConf" @select="onSelect">
      <el-menu-item index="1">
        <i class="fa fa-address-book" aria-hidden="true">&nbsp;全部客户资料</i>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="fa fa-search fa-1x" aria-hidden="true">&nbsp;查询</i>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="fa fa-user-plus" aria-hidden="true">&nbsp;添加</i>
      </el-menu-item>
    </el-menu>

  </div>


</template>

<script>
  export default {
    data() {
      return {
        styleConf: {
          mode: 'horizontal',
          activeTextColor: '#FF3366'
        }
      }
    },
    methods: {
      onSelect: function (index) {
        switch (index) {
          case '1':
            this.$router.push('/home/guest/queryGuest')
            return
          case '2':
            this.$router.push('/home/guest/accurateQueryGuest')
            return
          case '3':
            this.$router.push('/home/guest/addGuest')
            return
        }
      }
    }
  }

</script>

<style scoped>
  #breadcrumb {
    padding: 20px 150px 10px;
  }

</style>

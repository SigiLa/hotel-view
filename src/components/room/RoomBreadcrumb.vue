<template>
  <div id="breadcrumb">
    <el-menu default-active="1" v-bind="styleConf" @select="onSelect">
      <el-menu-item index="1">
        <i class="fa fa-address-book" aria-hidden="true">&nbsp;空闲客房</i>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="fa fa-search fa-1x" aria-hidden="true">&nbsp;入住信息</i>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="fa fa-search fa-1x" aria-hidden="true">&nbsp;退房</i>
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
          activeTextColor: '#00CCCC'
        }
      }
    },
    methods: {
      onSelect: function (index) {
        switch (index) {
          case '1':
            this.$router.push('/home/room')
            return
          case '2':
            this.$router.push('/home/room')
            return
          case '3':
            this.$router.push('/home/room')
            return
        }
      }
    }
  }

</script>

<style>
  #breadcrumb {
    padding: 20px 150px 10px;
  }

</style>

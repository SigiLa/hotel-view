<template>
  <div id="breadcrumb">
    <el-menu default-active="1" v-bind="styleConf" @select="onSelect">
      <el-menu-item index="1">
        <i class="fa fa-address-book" aria-hidden="true"> 历史记录</i>
      </el-menu-item>

      <el-menu-item index="2">
        <i class="fa fa-search fa-1x" aria-hidden="true"> 查询</i>
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
          activeTextColor: '#3399FF'
        }
      }
    },
    methods: {
      onSelect: function (index) {
        switch (index) {
          case '1':
            this.$router.push('/home/history/queryAll')
            return
          case '2':
            this.$router.push('/home/history/accurateQuery')
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

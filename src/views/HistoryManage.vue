<template>
  <div id="history-manage">
    <history-breadcrumb/>
    <router-view></router-view>
  </div>
</template>

<script>
  import HistoryBreadcrumb from '@/components/history/HistoryBreadcrumb'
  export default {
    components: {
      'history-breadcrumb': HistoryBreadcrumb
    }
  }

</script>

<style>
  #history-manage {
    height: 100%;
    overflow: hidden;
  }

</style>

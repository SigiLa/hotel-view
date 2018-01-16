<template>
  <div id="guest-manage">
    <guest-breadcrumb></guest-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
  import GuestBreadcrumb from '@/components/guest/GuestBreadcrumb'
  export default {
    components: {
      'guest-breadcrumb': GuestBreadcrumb
    }
  }

</script>

<style scoped>
  #guest-manage {
    height: 100%;
    overflow: hidden;
  }

</style>

<template>
  <div id="room-manage">
    <room-breadcrumb/>
    <router-view></router-view>
  </div>
</template>

<script>
  import RoomBreadcrumb from '@/components/room/RoomBreadcrumb'
  export default {
    components: {
      'room-breadcrumb': RoomBreadcrumb
    }
  }

</script>

<style>
  #room-manage {
    height: 100%;
    overflow: hidden;
  }

</style>

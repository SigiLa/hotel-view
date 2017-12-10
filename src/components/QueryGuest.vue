<template>
  <div id="query-guest">
    <el-table :data="realGuestList" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="idNumber" label="身份证号" width="180">
      </el-table-column>
      <el-table-column prop="phone" label="手机号">
      </el-table-column>
      <el-table-column prop="gender" label="性别">
      </el-table-column>
    </el-table>

  </div>



</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    created() {
      this.$store.dispatch('queryGuest')
    },
    computed: {
      ...mapGetters(['guestList']),
      realGuestList() {
        return this.guestList.filter((el) => {
          if(el.gender===1){
            el.gender='男'
          }else{
            el.gender='女'
          }
          return el
        })
      }
    },
    filters: {
      filter(val) {
        if (val === 1) {
          return '男'

        } else {
          return '女'

        }
      }
    }

  }

</script>

<style>
  #query-guest {
    padding: 30px;
  }

</style>

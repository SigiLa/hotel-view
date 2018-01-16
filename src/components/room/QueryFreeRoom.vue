<template>
  <div id="query-free-room">
    <el-table :data="roomList" v-bind="tableConf" style="width: 80%">
      <el-table-column type="index" width="150"></el-table-column>
      <el-table-column prop="roomId" label="房号">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <i style="color:#67C23A" class="fa fa-circle" aria-hidden="true"> 空闲</i>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="editGuest(scope)" type="primary" size="mini">开房</el-button>
        </template>
      </el-table-column>
      <el-table-column label="床型" :filters="[{ text: '标准间', value: 0 }, { text: '大床房', value: 1 }]" :filter-method="filterType">
        <template slot-scope="scope">
          <el-tag :type="scope.row.type === 1 ? 'primary' : 'success'">
            {{scope.row.type?'大床房':'标准间'}}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
    <edit-guest-dialog :index="currentIndex" @close="handleClose" :dialogVisiable="editDialogVisiable"></edit-guest-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import EditGuestDialog from '@/components/guest/EditGuest'
  import {
    mapGetters
  } from 'vuex'
  axios.defaults.baseURL = 'http://127.0.0.1:8080/'
  axios.defaults.withCredentials = true
  export default {
    components: {
      'EditGuestDialog': EditGuestDialog
    },
    data() {
      return {
        editDialogVisiable: false,
        currentIndex: -1,
        tableConf: {
          height: 469.4,
          stripe: true
        }
      }
    },
    created() {
      this.$store.dispatch('queryFreeRoom')
    },
    computed: {
      ...mapGetters(['roomList']),

    },
    methods: {

      editGuest(scope) {
        this.currentIndex = scope.$index
        this.editDialogVisiable = true

      },
      filterType(value, row) {
        return row.type === value
      },
      handleClose() {
        this.editDialogVisiable = false
      },
    },

  }

</script>

<style scoped>
  #query-free-room {
    padding: 30px;
    display: flex;
    justify-content: center;
  }

  .el-table {
    flex: 0 0 auto;
  }

</style>

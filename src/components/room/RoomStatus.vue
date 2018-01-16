<template>
  <div id="room-status">
    <el-table :data="roomList" v-bind="tableConf" style="width: 80%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="roomId" label="房间号">
      </el-table-column>
      <el-table-column label="床型" prop="type" :filters="[{ text: '标准间', value: 0 }, { text: '大床房', value: 1 }]" :filter-method="filterType">
        <template slot-scope="scope">
          <el-tag :disable-transitions="true" :type="scope.row.type === 1 ? 'primary' : 'success'">
            {{scope.row.type?'大床房':'标准间'}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state" :filters="[{text:'即将到期',value:1},{text:'正常',value:0}]" :filter-method="filterState">
        <template slot-scope="scope">
          <i :style="{color:scope.row.state?'#E6A23C':'#67C23A'}" class="fa fa-circle" aria-hidden="true">
            {{scope.row.state?'即将到期':'正常'}}
          </i>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="vacateRoom(scope)" type="danger" size="mini">退房</el-button>
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
  import axios from 'axios'
  import {
    mapGetters
  } from 'vuex'
  axios.defaults.baseURL = 'http://127.0.0.1:8080/'
  axios.defaults.withCredentials = true
  export default {
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

    },
    computed: {
      ...mapGetters(['roomList']),

    },
    methods: {

      editGuest(scope) {
        this.currentIndex = scope.$index
        this.editDialogVisiable = true
      },
      vacateRoom(scope) {

      },
      filterType(value, row) {
        return row.type === value
      },
      filterState(value, row) {
        return row.status === value
      },
    },

  }

</script>

<style scoped>
  #room-status {
    padding: 30px;
    display: flex;
    justify-content: center;
  }

  .el-table {
    flex: 0 0 auto;
  }

</style>

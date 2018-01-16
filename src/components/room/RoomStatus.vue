<template>
  <div id="room-status">
    <el-table :data="recordList" v-bind="tableConf" style="width: 80%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <!-- <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="客人 1 ID">
              <span>{{ props.row.guests[1].name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
          </el-form> -->
        </template>
      </el-table-column>
      <el-table-column prop="rawRecord.roomId" label="房间号">
      </el-table-column>
      <el-table-column label="床型" prop="rawRecord.type" :filters="[{ text: '标准间', value: 0 }, { text: '大床房', value: 1 }]" :filter-method="filterType">
        <template slot-scope="scope">
          <el-tag :disable-transitions="true" :type="scope.row.rawRecord.type === 1 ? 'primary' : 'success'">
            {{scope.row.rawRecord.type?'大床房':'标准间'}}
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
      this.$store.dispatch('queryRoomStatus').catch((err) => {
        this.$message({
          message: '发生未知错误',
          type: 'error'
        })
      })

    },
    computed: {
      ...mapGetters(['recordList']),
    },
    methods: {
      vacateRoom(scope) {
        axios.get('/room/vacate', {
          params: {
            roomId: scope.row.rawRecord.roomId
          }
        }).then(({
          data
        }) => {
          if (data.status) {
            this.$message({
              message: '退房成功',
              type: 'success'
            })
            this.$store.dispatch('queryRoomStatus').catch((err) => {
              this.$message({
                message: '发生未知错误',
                type: 'error'
              })
            })
          } else {
            this.$message({
              message: '退房失败',
              type: 'error'
            })
          }
        })
      },
      filterType(value, row) {
        return row.rawRecord.type === value
      },
      filterState(value, row) {
        return row.state === value
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

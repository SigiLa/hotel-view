<template>
  <div id="room-status">
    <el-table :data="recordList" v-bind="tableConf" style="width: 80%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="金额">
              <span>{{ props.row.rawRecord.money }}</span>
            </el-form-item>
            <el-form-item label="天数">
              <span>{{ props.row.rawRecord.day }}</span>
            </el-form-item>
            <el-form-item label="开房时间">
              <span>{{ new Date(props.row.rawRecord.getRoomDate).Format() }}</span>
            </el-form-item>

            <el-form-item label="到期时间">
              <span>{{ new Date(props.row.rawRecord.expireDate).Format() }}</span>
            </el-form-item>

            <div v-for="guest in props.row.guests">
              <el-form-item label="客人姓名">
                <span>{{ guest.name }}</span>
              </el-form-item>
              <el-form-item label="身份证">
                <span>{{ guest.idNumber }}</span>
              </el-form-item>
            </div>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="rawRecord.roomId" label="房间号">
      </el-table-column>
      <el-table-column label="床型" prop="rawRecord.type">
        <template slot-scope="scope">
          <el-tag :disable-transitions="true" :type="scope.row.rawRecord.type === 1 ? 'primary' : 'success'">
            {{scope.row.rawRecord.type?'大床房':'标准间'}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="state">
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
        tableConf: {
          height: 469.4,
          stripe: true
        }
      }
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

  .demo-table-expand {
    font-size: 0;
  }

  .el-table .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .el-table .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>

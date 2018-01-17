<template>
  <div id="room-status">
    <el-table :data="historyRecordList" v-bind="tableConf" style="width: 80%">
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
      <el-table-column label="床型" prop="rawRecord.type" :filters="[{ text: '标准间', value: 0 }, { text: '大床房', value: 1 }]" :filter-method="filterType">
        <template slot-scope="scope">
          <el-tag :disable-transitions="true" :type="scope.row.rawRecord.type === 1 ? 'primary' : 'success'">
            {{scope.row.rawRecord.type?'大床房':'标准间'}}
          </el-tag>
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
    created() {
      this.$store.dispatch('queryAllHistory').catch((err) => {
        this.$message({
          message: '发生未知错误',
          type: 'error'
        })
      })

    },
    computed: {
      ...mapGetters(['historyRecordList']),
    },
    methods: {

      filterType(value, row) {
        return row.rawRecord.type === value
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

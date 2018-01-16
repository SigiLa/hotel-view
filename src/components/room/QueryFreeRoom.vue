<template>
  <div>
    <div id="query-free-room">
      <el-table :data="roomList" v-bind="tableConf" style="width: 80%">
        <el-table-column type="index" width="150"></el-table-column>
        <el-table-column prop="roomId" label="房间号"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <i style="color:#67C23A" class="fa fa-circle" aria-hidden="true"> 空闲</i>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleGetRoom(scope)" type="primary" size="mini">开房</el-button>
          </template>
        </el-table-column>
        <el-table-column label="床型" prop="type" :filters="[{ text: '标准间', value: 0 }, { text: '大床房', value: 1 }]" :filter-method="filterType">
          <template slot-scope="scope">
            <el-tag :disable-transitions="true" :type="scope.row.type === 1 ? 'primary' : 'success'">
              {{scope.row.type?'大床房':'标准间'}}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :before-close="handleDialogClose" :model="form" v-bind="dialogConf" :visible.sync="getRoomDialogVisiable">
      <div class="dialog-title" slot="title">
        <i class="fa fa-pencil-square-o"> 开房</i>
      </div>
      <div class="dialog-body">
        <el-form :model="form" label-width="80px" style="width:70%">
          <el-form-item label="房间号">
            <el-input :placeholder="form.roomId" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="床型">
            <el-tag :disable-transitions="true" :type="form.type === 1 ? 'primary' : 'success'">
              {{form.type?'大床房':'标准间'}}
            </el-tag>
          </el-form-item>
          <el-form-item label="开房日期">
            <el-date-picker value-format="yyyy-MM-dd" v-model="form.getRoomDate" type="date" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="天数">
            <el-input-number size="small" v-model="form.day" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="金额">
            <el-input v-model="form.money"></el-input>
          </el-form-item>
          <el-form-item label="客人 1">
            <el-input v-model="form.guest1"></el-input>
          </el-form-item>
          <el-form-item label="客人 2">
            <el-input v-model="form.guest2" :disabled="form.type?false:true"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="danger" @click="handleDialogCancel">取 消</el-button>
        <el-button size="small" type="primary" @click="handleDialogSubmit">提 交</el-button>
      </span>
    </el-dialog>
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
        getRoomDialogVisiable: false,
        tableConf: {
          height: 469.4,
          stripe: true
        },
        dialogConf: {
          center: true,
          width: '40%'
        },
        form: {
          roomId: '',
          type: 0,
          guest1: '',
          guest2: '',
          getRoomDate: '',
          day: 0,
          money: 0
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
      init() {
        this.form.roomId = '',
          this.form.type = 0,
          this.form.guest1 = '',
          this.form.guest2 = '',
          this.form.getRoomDate = '',
          this.form.day = 0,
          this.form.money = 0
      },
      handleGetRoom(scope) {
        this.form.roomId = scope.row.roomId
        this.form.type = scope.row.type
        this.getRoomDialogVisiable = true
      },
      handleDialogClose() {
        this.init()
        this.getRoomDialogVisiable = false
      },
      handleDialogCancel() {
        this.init()
        this.getRoomDialogVisiable = false
      },
      handleDialogSubmit() {
        axios.post('/room/getRoom', this.form).then(({
          data
        }) => {
          if (data.status) {
            this.$message({
              message: '开房成功',
              type: 'success'
            })
            this.init()
            this.getRoomDialogVisiable = false
            this.$store.dispatch('queryFreeRoom')
          } else {
            this.$message({
              message: '开房失败',
              type: 'error'
            })
          }
        })
      },

      filterType(value, row) {
        return row.type === value
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

  .dialog-title {
    font-size: 20px;
    font-weight: 450;
  }

  .dialog-body {
    display: flex;
    justify-content: center;
  }

</style>

<template>
  <div id="accurate-query-room">
    <div class="main">
      <el-form :model="form" label-width="80px" style="width:58%;">
        <el-form-item label="房间号">
          <el-input v-model="form.roomId">
          </el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.idNumber">
          </el-input>
        </el-form-item>
        <el-form-item label="床型">
          <el-radio-group v-model="form.type" style="margin-left:12px">
            <el-radio label="0">标准间</el-radio>
            <el-radio label="1">大床房</el-radio>

          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onQuery">查询</el-button>
          <el-button @click="onReset" style="margin-left:100px;">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          roomId: '',
          idNumber: '',
          type: '',
        }
      }
    },
    methods: {
      onQuery() {
        this.$store.dispatch('accurateQueryRoom', this.form).then(() => {
          this.$router.push('/home/room/queryResult')
        }).catch((err) => {
          this.$message({
            message: '发生未知错误',
            type: 'error'
          })
        })
      },

      onReset() {
        this.form.roomId = ''
        this.form.idNumber = ''
        this.form.type = ''
      },

    }
  }

</script>

<style scoped>
  #accurate-query-room {
    padding: 0px 150px;
    height: 100%;
  }

  .main {
    background-color: #edf4f5;
    display: flex;
    justify-content: center;
    height: 100%;
    padding-top: 50px;
  }

</style>

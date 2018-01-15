// 添加客人
<template>
  <div id="add-guest">
    <div class="main">
      <el-form :model="form" label-width="80px" style="width:58%;">
        <el-form-item label="姓名">
          <el-input v-model="form.name">
          </el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.idNumber">
          </el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone">
          </el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.gender" style="margin-left:12px">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSave">保存</el-button>
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
          name: '',
          idNumber: '',
          phone: '',
          gender: ''
        }
      }
    },
    methods: {
      onReset() {
        this.form.name = ''
        this.form.idNumber = ''
        this.form.phone = ''
        this.form.gender = ''
      },
      onSave() {
        this.$store.dispatch('addGuest', this.form).then(() => {
          this.$message({
            message: '保存成功!',
            type: 'success'
          })
        }).catch((err) => {
          this.$message({
            message: err.message,
            type: 'error'
          })
        })
      }
    },

  }

</script>
<style scoped>
  #add-guest {
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

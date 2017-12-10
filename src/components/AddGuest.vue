<template>
  <div id="add-guest">
    <el-form :model="form" label-width="80px" style="width:70%">
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
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
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
          gender: '1'
        }
      }
    },
    methods: {
      onCancel() {
        // this.form.name = ''
        // this.form.idNumber = ''
        // this.form.phone = ''
        // this.form.gender = 1
        this.$router.push('/home/addGuest')
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
    watch: {
      '$router' (to, form) {
        // this.form.name = ''
        // this.form.idNumber = ''
        // this.form.phone = ''
        // this.form.gender = 1
      }
    }
  }

</script>
<style>
  #add-guest {
    background: #edf4f5;
    height: 100%;
    padding: 20px 20px;
    display: flex;
    justify-content: center;
  }

</style>

 /*直接键入scaffold生成模板 */
<template>
  <el-dialog center width="40%" :visible.sync="dialogVisiable" :before-close="handleClose">
    <div class="edit-title" slot="title">
      <i class="fa fa-pencil-square-o">&nbsp;&nbsp;修改用户资料</i>
    </div>
    <div class="edit-body">
      <el-form :model="form" label-width="80px" style="width:70%">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.idNumber"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.gender" style="margin-left:12px">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

    </div>

    <span slot="footer" class="dialog-footer">
      <el-button size="small" type="danger" @click="handleClose">取 消</el-button>
      <el-button size="small" type="primary" @click="handleSave">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'EditGuestDialog',
    props: ['dialogVisiable',
      'index'
    ],
    data() {
      return {
        form: {
          name: '',
          idNumber: '',
          phone: '',
          gender: -1
        }
      }
    },
    created() {
      //   this.form = { ...this.guestList[this.index]
      //   }
    },
    computed: {
      ...mapGetters(['guestList'])
    },
    methods: {
      handleSave() {
        this.$store.dispatch('alterGuest', {
          index: this.index,
          form: this.form
        }).then(() => {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        }).catch((err) => {
          this.$message({
            message: err,
            type: 'error'
          })
        })
        this.$emit('close')
      },
      handleClose() {
        this.$emit('close')
      },

    },
    watch: {
      dialogVisiable() {
        this.form = { ...this.guestList[this.index]
        }

      }
    }
  }

</script>
<style scoped>
  /* 这里好像无效 */

  .el-dialog {
    background-color: #FFFFCC;
  }

  .edit-title {
    font-size: 20px;
    font-weight: 450;
  }

  .edit-body {
    display: flex;
    justify-content: center;
  }

</style>

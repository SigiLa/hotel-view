<template>
  <div id="query-guest">
    <el-table :data="guestList" stripe style="width: 80%">
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="idNumber" label="身份证号" width="250">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="180">
      </el-table-column>
      <el-table-column label="性别" min-width="50">
        <template slot-scope="scope">
          {{guestList[scope.$index].gender?'男':'女'}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="editGuest(scope)" size="mini">编辑</el-button>
          <el-button @click="deleteGuest(scope)" size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <edit-guest-dialog :index="currentIndex" @close="handleClose" :dialogVisiable="editDialogVisiable"></edit-guest-dialog>
  </div>



</template>

<script>
  import EditGuestDialog from '@/components/EditGuest'
  import {
    mapGetters
  } from 'vuex'
  export default {
    components: {
      'EditGuestDialog': EditGuestDialog
    },
    data() {
      return {
        editDialogVisiable: false,
        currentIndex: -1
      }
    },
    created() {
      this.$store.dispatch('queryGuest')
    },
    computed: {
      ...mapGetters(['guestList']),
      // realGuestList() {
      //   return this.guestList.map((el) => {
      //     const tmp = { ...el
      //     }
      //     if (tmp.gender) {
      //       tmp.gender = '男'
      //     } else {
      //       tmp.gender = '女'
      //     }
      //     return tmp
      //   })
      // }
    },
    methods: {
      deleteGuest(scope) {
        this.$confirm('将删除客人信息，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          this.$store.dispatch('deleteOneGuest', scope).then(() => {
            this.$message('删除成功')
          }).catch((err) => {
            this.$message({
              message: err,
              type: 'error'
            })
          })
        }).catch(() => {
          return
        })
      },
      editGuest(scope) {
        this.currentIndex = scope.$index
        this.editDialogVisiable = true

      },
      handleClose() {
        this.editDialogVisiable = false
      }
    },

  }

</script>
// scoped 指定该样式仅对当前组件有效
<style scoped>
  #query-guest {
    padding: 30px;
    display: flex;
    justify-content: center;
  }

  .el-table {
    flex: 0 0 auto;
  }

</style>

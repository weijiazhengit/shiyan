<template>
  <div>

    <el-card class="box-card card">

      <div slot="header"
           class="clearfix ">
        <div>
          <span>卡片名称</span>
          <span>已选中：{{multipleSelection}}</span>
          <el-button style="float: right; padding: 3px 0"
                     type="text">操作按钮</el-button>
        </div>
        <template>
          <div class="input_box">
            <el-input v-model="add"
                      placeholder="进行添加"
                      clearable></el-input>

            <el-button type="primary"
                       class="btn">add</el-button>
          </div>
        </template>

      </div>
      <div lass="text item">
        <el-table ref="multipleTable"
                  :data="$store.state.list"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column label="日期"
                           width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="100">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址">
          </el-table-column>
        </el-table>
      </div>

    </el-card>

  </div>
</template>

<script> 
export default {
  data () {
    return {
      add: "",
      multipleSelection: "0"
    }
  },
  mounted () {

  },
  methods: {

    handleSelectionChange (val) {
      console.log(val.length);
      this.multipleSelection = val.length;


    }
  },
  created () {
    this.$store.dispatch('getlist')
  },

}
</script>

<style lang="less" scoped>
.card {
  width: 30%;
}
.input_box {
  display: flex;
  box-sizing: border-box;
  margin: 10px 0;
  .btn {
    margin-left: 20px;
  }
}
</style>
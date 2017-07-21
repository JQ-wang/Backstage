<template>
    <div class="basetable">
        <div class="date">
            <span class="demonstration">选择日期范围</span>
            <el-date-picker
                    v-model="value6"
                    type="daterange"
                    placeholder="选择日期范围">
            </el-date-picker>
        </div>
        <div class="tableMain">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column prop="region" label="性别">
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button size="small" v-on:click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" v-on:click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!--分页显示-->
        <div class="page">
            <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
        <!--分页显示-->
        <!--编辑客户信息对话框-->
        <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-date-picker
                            v-model="valueDate"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="性别">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <!--编辑客户信息对话框-->
    </div>
</template>

<script type="text/ecmascript-6">
  import {TableData} from '../config/tableData.js'
  export default{
    data () {
      return {
        tableData: TableData,
        dialogFormVisible: false,
        form: {},
        formLabelWidth: '50px',
        valueDate: ''
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
        console.log(this.tableData[index])
        this.form = this.tableData[index]
        this.dialogFormVisible = true
      },
      handleDelete (index, row) {
        console.log(index, row)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }

</script>

<style>
    .basetable {
        width: 96%;
        border: solid 1px #dfe6ec;
        height: 500px;
        margin: 0 auto;
    }

    .date {
        margin: 5px 20px;
    }

    .tableMain + .page {
        margin-top: 10px;
    }

    .page {
        display: inline-block;
        float: right;
    }

</style>

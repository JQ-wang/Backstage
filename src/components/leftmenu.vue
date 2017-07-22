<template>
    <div class="leftMenu">
        <el-menu :default-active="onRoutes" theme="dark" class="el-menu-demo" mode="horizontal" @open="handleOpen"
                 @close="handleClose" router>
            <el-menu-item index="/home/"><span class="el-icon-edit"></span>关于我</el-menu-item>
            <el-menu-item index="/home/basetable"><span class="el-icon-date"></span>基础表格</el-menu-item>
            <el-menu-item index="/home/charts"><span class="el-icon-information"></span>图表</el-menu-item>
            <el-menu-item index="/home/register"><span class="el-icon-edit"></span>注册</el-menu-item>
            <!--<el-menu-item index="/home/mainActive"><span class="el-icon-menu"></span>主页</el-menu-item>-->
        </el-menu>
    </div>
</template>

<script>
  export default{
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    computed: {
      onRoutes () {
        return this.$route.path.replace('/', '')
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .leftMenu {
        display: block;
        position: fixed;
        bottom: 0;
        top: 60px;
        width: 190px;
        left: 0;
        z-index: 999;
    }

    ul {
        height: 100%;
        border-radius: 0;
    }

    ul li {
        display: block;
        width: 100%;
    }
</style>

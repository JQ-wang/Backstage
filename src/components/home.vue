<template>
    <div class="home">
        <div class="main">
            <div class="head">
                <v-header></v-header>
            </div>
            <div class="left">
                <left-menu></left-menu>
            </div>
            <div class="content">
                <transition name="el-zoom-in-top">
                    <router-view v-show="show"></router-view>
                </transition>
            </div>
        </div>
    </div>

</template>

<script>
  import Header from './header.vue'
  import LeftMenu from './leftmenu.vue'
  export default {
    data () {
      return {
        show: true
      }
    },
    components: {
      'v-header': Header,
      'left-menu': LeftMenu
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home .content {
        position: absolute;
        left: 200px;
        top: 70px;
        width: 85%;
    }
    .head{
        position: fixed;
        width: 100%;
        height: 60px;
        z-index: 99;
    }
</style>

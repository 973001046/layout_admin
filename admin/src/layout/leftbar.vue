<template>
  <div class="left">
    <el-menu  :router='true' :default-active='currentUri' :unique-opened='true' class="el-menu-vertical-demo"  background-color="#3d8bce" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu v-for="(route,index) in routerArr" :key="index" :index='route.path'>
        <template slot="title">
          <template v-if='route.children'>
            <i class="el-icon-tickets"></i>
            <span>{{route.title}}</span>
          </template>

          <template v-else>
            <router-link :to="route.path" class="title-a">
              <i class="el-icon-tickets"></i>
              <span>{{route.title}}</span>
            </router-link>
          </template>
        </template>
        <el-menu-item-group v-if='route.children'>
          <el-menu-item v-for="(child,ind) in route.children" :key="ind" :index='child.path'>{{child.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'leftBar',
  computed: {
    routerArr () {
      return this.$router.options.routes
    },
    currentUri () {
      return this.$route.path
    }
  },
  mounted () {
    console.log(this.$router)
    console.log(this.$route)
    console.log(this.$router.options.routes)
    console.log(this.currentUri)
  }
}
</script>

<style lang='less'>
.el-submenu__title i{
  color: #fff;
}
.title-a {
  display: block;
  color: #fff;
}
</style>

<template>
  <div id="app">
    <cv_header></cv_header>
    <router-view></router-view>
    <cv_footer></cv_footer>
  </div>
</template>

<script>
  import cv_header from "@/components/header/header"
  import cv_footer from "@/components/footer/footer"
export default {
  name: 'app',
  components: {
    cv_header,
    cv_footer
  }
}
</script>
<!-- #cce8cf -->
<style lang="stylus" rel="stylesheet/stylus">
  #app 
    background-color #f1f1ec
</style>

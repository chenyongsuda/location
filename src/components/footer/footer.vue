<template>
  <div class="footer tab">
    <div class="tab-item">
      <router-link :to="{ path: '/users' }">users</router-link>
    </div>
    <div class="tab-item">
      <router-link :to="{ path: '/location' }">location</router-link>
    </div>
    <div class="tab-item">
      <router-link :to="{ path: '/setting' }">setting</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'footer',
      data() {
        return {
          selected: '外卖'
        };
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    .tab-item
      flex 1
      text-align center
      font-size 14px
      &.a
        display block

</style>

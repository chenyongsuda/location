<template>
  <div class="footer tab">
      <router-link :to="{ path: '/users' }" tag="div" class="tab-item">
        <div class="icon icon-users"></div>
        <div class="item-label">
        users
        </div>
      </router-link>

    <router-link :to="{ path: '/location' }" class="tab-item" tag="div">
      <div class="icon icon-loc">
      </div>
      <div class="item-label">
      location
      </div>
    </router-link>

    <router-link :to="{ path: '/setting' }" class="tab-item" tag="div">
      <div class="icon icon-setting
        "></div>
      <div class="item-label">
       setting 
      </div>
    </router-link>
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
    position fixed
    left 0
    right 0
    bottom 0
    z-index 100
    display flex
    width 100%
    height 60px
    line-height 60px
    background-color #fff
    .tab-item
      flex 1
      text-align center
      font-size 14px
      padding 7px 0px
      .icon
        height 28px
        background-repeat no-repeat
        background-size 28px 28px
        background-position center
      .icon-users
        background-image url('account.png')
      .icon-loc
        background-image url('loc.png')
      .icon-setting
        background-image url('set.png')
    .router-link-active
      background-color #eaeaea
      color #26a2ff
    .tab-item .item-label
      height 13px
      line-height 13px
      margin-top 5px

</style>

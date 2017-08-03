<template>
  <div class="header">
    <span class="header-title">{{title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'header',
      data() {
        return {
          title: 'Users'
        };
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.header
	  height 55px 
	  background-color #d4237a
	  position fixed
	  left 0
	  right 0
	  top 0
	  .header-title
	    height 55px
	    line-height 55px
	    font-size 23px
	    color #fff
	    display inline-block
	    width 100%
	    text-align center
</style>

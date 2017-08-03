<template>
  <div class="setting-wapper">
    <div class="user-info">
    	<div class="user-thumb"></div>
    	<div class="info-wapper">
	    	<div class="nick">昵称： 大胡子圣诞老人</div>
	    	<div class="account">账号：acdefg</div>
	    	<div class="des">个性签名：这个应用不错哦</div>
    	</div>
    </div>
    <div class="user-info2">
    	<div class="sex">性别：男</div>
    	<div class="age">年龄： 32</div>
    	<div class="phone">电话： 13888888888</div>
    </div>
    <div class="user-setting">
    	<div class="allow-loc">
    		<span class="allow-locdesc">是否允许获取我的地点:</span>
    		<span class="allow-locicon"></span>
    	</div>
    	<div class="allow-phone">
    		<span class="allow-phonedesc">是否允许通过我手机拨打电话:</span>
    		<span class="allow-phoneicon"></span>
    	</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'setting'
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.setting-wapper
	  display flex
	  flex-direction column
	  position absolute
	  left 0
	  right 0
	  top 55px
	  bottom 80px
	  width 100%
	  .user-info
	    width 100%
	    height 100px
	    border-bottom:1px dashed #d4237a
	    border-top:1px dashed #d4237a
	    flex 0 0 100px
	    display flex
	    .user-thumb
	      flex 0 0 100px
	      width 100px
	      height 100px
	      background-image url('user-thum.png')
	      background-repeat no-repeat
	      background-size 80px 80px
	      background-position center
	    .info-wapper
	      flex 1
	      .nick
	      .account
	      .des
	        height 33px
	        line-height 33px
	  .user-info2
	    width 100%
	    height 100px
	    border-bottom:1px dashed #d4237a
	    border-top:1px dashed #d4237a
	    margin-top 30px
	    flex 0 0 100px
	    padding-left 50px
	    .sex
	    .age
	    .phone
	      height 33px
	      line-height 33px
	  .user-setting
	    border-bottom:1px dashed #d4237a
	    border-top:1px dashed #d4237a
	    width 100%
	    height 100px
	    margin-top 30px
	    flex 1
	    padding-left 50px
	    .allow-loc
	    .allow-phone
	      height 33px
	      line-height 33px
</style>

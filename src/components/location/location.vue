<template>
  <div class="loc-wapper">
  	<div class="loc-top">
	    <div class="user-wapper">
	    	<img class="user-avater" width="64px" height="64px" src="">
	    </div>
	    <div class="info-wapper">
	    	<div class="info">
	    		<div class="user-name">
	    			<span class="name-flag">user:</span>
	    			<span class="name">hello abc</span>
	    		</div>
	    		<div class="user-lonlat">
	    			<span class="loc-flag">loc:</span>
	    			<span class="loc">hello abc</span>
	    		</div>
	    		<div class="user-time">
	    			<span class="time-flag">time:</span>
	    			<span class="time">2017-08-01 08:08:00</span>
	    		</div>
	    	</div>
	    	<div class="mark">
	    		<div class="share" ></div>
	    	</div>
	    </div>
    </div>
    <div class="loc-map">
    	
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'location'
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.loc-wapper
	  position absolute
	  display flex
	  flex-direction column
	  left 0
	  right 0
	  top 55px
	  bottom 80px
	  width 100%
	  .loc-top
	    width 100%
	    flex 0 0 100px
	    height 100px
	    position relative
	    border-bottom:1px dashed #d4237a
	    .user-wapper
	      display inline-block
	      vertical-align top
	      .user-avater
	        margin 12px 12px
	    .info-wapper
	      display inline-block
	      .info
	        margin 12px 10px
	        .user-name
	          height 21px
	          .name-flag
	            font-size 20px
	            display inline-block
	            width 60px
	        .user-lonlat
	          height 21px
	          .loc-flag
	            font-size 20px
	            display inline-block
	            width 60px
	        .user-time
	          height 21px
	          .time-flag
	            font-size 20px
	            display inline-block
	            width 60px
	      .mark
	        position absolute
	        right 15px
	        top 12px
	        .share
	          height 40px
	          width 40px
	          background-image url('skip.png')
	      	  background-repeat no-repeat
	  .share
	  	background-size 43px 43px
	  .loc-map
	  	margin-top 50px
	  	width 100%
	  	flex 1
	  	height 100%
	  	background-image url('map.png')
</style>

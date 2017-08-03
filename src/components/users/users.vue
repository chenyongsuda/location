<template>
  <div class="users">
    <ul class="user-list">
    	<li class="user-item" v-for="i in 20">
	    	<div class="item-wapper">
	    		<div class="item-left">
	    			
	    		</div>
	    		<div class="item-content">
	    			<div class="content-name">
	    				小明
	    			</div>
	    			<div class="content-sidedis">
	    				12344234214
	    			</div>
	    		</div>
	    		<div class="item-right"></div>
	    	</div>
    	</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'users'
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.users
	  width 100%
	  margin-top 55 px
	  padding-top 5px
	  padding-bottom 60px
	.user-item
	  height 54px
	  margin 3px auto
	  padding 0px 8px
	  .item-wapper
	  	padding 5px 5px
	  	border-bottom 1px solid #d9d9d9 
	  	display flex
	  	background-color #fff
	  	border-radius 8px
	  	.item-left
	      width 43px
	      height 43px
	      background-image url('person.png')
	      background-repeat no-repeat
	      background-size 43px 43px
	    .item-content
	      flex 1
	      padding 0px 10px
	      .content-name
	        font-size 18px
	        height 26px
	        line-height 26px
	      .content-sidedis
	        color #808069
	    .item-right
	      width 43px
	      height 43px
	      background-image url('map.png')
	      background-repeat no-repeat
	      background-size 43px 43px
</style>

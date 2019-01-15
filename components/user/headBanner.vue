<template>
	<view class="head-banner">

		<view class="user-bg-top uni-header-logo">
			<image 
				src="../../static/60x60.png" 
				mode="scaleToFill"
				lazy-load="true"
				class="head-logo"
			></image>
			<view class="username " v-text="title"></view>
		</view>
		
		<!-- tool -->
		<view class="uni-flex uni-row user-bg-top-tool">
			<view class="flex-item">
				<text>充值</text>
			</view>
			<view class="flex-item">
				<text>提现</text>
			</view>
		</view>	

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '用户名123'
			}
		}
	}
</script>

<style>
	.head-banner .user-bg-top{
		margin: 0;
		padding: 20upx 0;
		height: 250upx;
		background: url('http://www.hengtonghui.cn/template/mobile/default/static/images/bjm.jpg') repeat fixed center;
		background-size: cover;
	}
	.head-banner .head-logo{
		width:130upx;
		height:130upx;
		border:6upx solid #EEEEEE;
	}
	.head-banner .username{
		color: #FFFFFF;
		font-weight: bold;
		line-height: 30upx;
	}
	
	/*  */
	.head-banner .flex-item {
		width: 50%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
	}
	.head-banner .user-bg-top-tool{
		position: relative;
		top: -86upx;
	}
	.head-banner .flex-item text{
		color: #FFFFFF;
		font-size: 32upx;
		padding: 5upx 30upx;
		border:1px solid #ccc;
	}
</style>

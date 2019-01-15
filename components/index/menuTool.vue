<template>
	<view class="menu-tool">
		
		<!-- menu-tool -->
		<view class="uni-flex uni-row">
			<view class="flex-item">
				<text>资料</text>
			</view>
			<view class="flex-item">
				<text>行情</text>
			</view>
			<view class="flex-item">
				<text>交易</text>
			</view>
			<view class="flex-item">
				<text>帮助</text>
			</view>
		</view>	
		
	</view>
	
</template>
<script>
export default {
	data() {
		return {
			indicatorDots: true,
		}
	}
}
</script>

<style>
	/* view */
	.menu-tool{
		background: #FFFFFF;
		margin-bottom: 5upx;
	}
	.menu-tool .flex-item {
		width: 33.3%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
	}

	.menu-tool .flex-item-V {
		width: 100%;
		height: 150upx;
		text-align: center;
		line-height: 150upx;
	}
</style>

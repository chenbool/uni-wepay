<template>
	<view class="hot">
		
		<view class="uni-flex uni-row">
			<view class="flex-item">
				<view class="title">黄金</view>
				<view class="price up">200.01</view>
				<view class="diff">
					<text>-0.14</text>
					<text>-0.1%</text>
				</view>
			</view>
			<view class="flex-item">
				<view class="title">白银</view>
				<view class="price down">200.01</view>
				<view class="diff">
					<text>-0.14</text>
					<text>-0.1%</text>
				</view>
			</view>
			<view class="flex-item">
				<view class="title">青铜</view>
				<view class="price up">200.01</view>
				<view class="diff">
					<text>-0.14</text>
					<text>-0.1%</text>
				</view>
			</view>			
		</view>	
		
		<view class="uni-flex uni-row">
			<view class="flex-item">
				<view class="title">黄金</view>
				<view class="price up">200.01</view>
				<view class="diff">
					<text>-0.14</text>
					<text>-0.1%</text>
				</view>
			</view>
			<view class="flex-item">
				<view class="title">白银</view>
				<view class="price down">200.01</view>
				<view class="diff">
					<text>-0.14</text>
					<text>-0.1%</text>
				</view>
			</view>
			<view class="flex-item icon-item">
				<view class="uni-icon uni-icon-plus" style="font-size:60upx;color:#B2B2B2;"></view>
			</view>			
		</view>			
		
	</view>
	
</template>
<script>
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		}
	}
}
</script>

<style>
	/* view */
	.hot{
		background: #FFFFFF;
	}
	.hot .flex-item {
		width: 33.3%;
		height: 150upx;
		text-align: center;
		line-height: 150upx;
		border-top: 2px solid #F1F1F3;
		padding: 5upx;
	}
	.hot .flex-item:nth-of-type(even){
		border-left: 2px solid #F1F1F3;
		border-right: 2px solid #F1F1F3;
	}
	.hot .title{
		font-weight: bold;
		font-size: 30upx;
	}
	.hot .price{
		font-weight: bold;
	}
	.hot .up{
		color: #FBC800;
	}
	.hot .down{
		color: red;
	}
	.hot .diff{
		font-size: 26upx;
		color: #B2B2B2;
	}
	.hot .diff text{
		padding: 0 10upx;
	}
</style>

<template>
	<view class="app-swiper">
		
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item, index) in img" :key="index">
							<image 
								class="swiper-item" 
								style="width: 100%; height: 300upx; background-color:#eeeeee;"
								:src="item.url" 
								lazy-load="true"
								mode="scaleToFill"></image>
						</swiper-item>
						
<!--
 						<swiper-item>
							<image class="swiper-item" src="https://img.yzcdn.cn/2.jpg" mode="scaleToFill"></image>
							<view class="swiper-item uni-bg-green">B</view>
						</swiper-item> 
-->
					</swiper>
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
			interval: 5000,
			duration: 500,
			img:[
				{
					url:"https://img.yzcdn.cn/2.jpg"
				},
				{
					url:"https://img.yzcdn.cn/2.jpg"
				},
				{
					url:"https://img.yzcdn.cn/2.jpg"
				}
			]
		}
	}
}
</script>

<style>
	.app-swiper{
		margin: 0;
		padding: 0;
	}
	/* swiper */
	.app-swiper .swiper {
		width: 100%;
	}
	.app-swiper .swiper-item {
		text-align: center;
	}
</style>

<template>
	<view class="notice-bar" v-show="show_notice">
			<view class="uni-swiper-msg">
				<view class="uni-swiper-msg-icon">
					<view class="uni-icon uni-icon-mic-filled" style="font-size:36upx;color:#B2B2B2;"></view>
				</view>
				<swiper autoplay="true" circular="true" interval="8000">
					<swiper-item v-for="(item, index) in msg" :key="index">
						<navigator>{{item}}</navigator>
					</swiper-item>
				</swiper>
				<view class="uni-swiper-msg-icon">
					<view class="uni-icon uni-icon-close" style="font-size:40upx;color:#B2B2B2;" @click="hideNotice"></view>
				</view>
			</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			msg : [
				'uni-app行业峰会频频亮相，开发者反响热烈',
				'DCloud完成B2轮融资，uni-app震撼发布'
			],
			show_notice:true
		}
	},
	methods:{
		hideNotice:function(){
			this.show_notice = !this.show_notice
		}
	}
}
</script>
<style>
	.notice-bar{
/* 		position: fixed;
		left:0;
		top:var(--status-bar-height); */
		/* top:var(--window-top); */
	}
	.notice-bar navigator{
		font-size: 12px;
	}
	.notice-bar .uni-swiper-msg{
		background: #FFFAE8;
		height: 25px;
		line-height: 25px;
	}
</style>

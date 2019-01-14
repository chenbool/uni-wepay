<template>
	<view class="content">

		<swipe></swipe>
		<view>
            <text class="title">{{title}}</text>
        </view>
		<van-nav-bar title="首页"/>
		<!-- <app-head></app-head> -->
		<app-foot></app-foot>

	</view>
</template>

<script>
	import Swipe from '@/components/swipe'
	export default {
		data() {
			return {
				title: 'Hello',
				
			}
		},
		onLoad() {

		},
		methods: {

		},
		created() {	
			// console.log(this.$store.state.now_page_index);
		},
		components : {
			'swipe':Swipe
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 600upx;
		background: #F4F5F6;
	}
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>

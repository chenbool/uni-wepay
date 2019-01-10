<template>
	<view class="content">
        <!-- <image class="logo" src="../../static/logo.png"></image> -->
		<swipe></swipe>
		<view>
            <text class="title">{{title}}</text>
        </view>

		<foot></foot>

	</view>
</template>

<script>
	import Foot from '@/components/foot'
	import Swipe from '@/components/swipe'
	export default {
		data() {
			return {
				title: 'Hello',
				active: 0
			}
		},
		onLoad() {

		},
		methods: {

		},
		created() {	

		},
		components : {
			"foot":Foot,
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

<template>
	<view class="content">
		<van-nav-bar title="用户"/>
		<view>
            <text class="title">{{title}}</text>
        </view>

		<app-foot></app-foot>

	</view>
</template>

<script>

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

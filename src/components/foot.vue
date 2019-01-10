<template>
	<view class="head">
<!--
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o">标签</van-tabbar-item>
			<van-tabbar-item icon="search" dot>标签</van-tabbar-item>
			<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
			<van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
		</van-tabbar>
-->

		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item icon="search">行情</van-tabbar-item>
			<van-tabbar-item icon="friends-o">交易</van-tabbar-item>
			<van-tabbar-item icon="user-o" to="/pages/user/index" dot>用户</van-tabbar-item>
		</van-tabbar>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0
			}
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style>
	.van-hairline--top-bottom{
		border-top: 1px solid rgba(143,143,148, 0.2);
	}
</style>

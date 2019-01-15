<template>
	<view class="user">
		
		<!-- head -->
		<head-banner></head-banner>
		
		<!-- card -->
		<app-list></app-list>
		
	</view>
</template>

<script>
	import List from '@/components/user/list'
	import HeadBanner from '@/components/user/headBanner'
	export default {
		data() {
			return {
				title: '用户名123'
			}
		},
		onLoad() {

		},
		methods: {
		},
		components : {
			'app-list': List,
			'head-banner': HeadBanner
		}
	}
</script>

<style>
	.user {
		text-align: center;
		height: 400upx;
	}

</style>

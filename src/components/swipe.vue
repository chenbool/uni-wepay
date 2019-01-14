<template>
	<view class="swipe">

        <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img lazy="image" :src="image" width="100%" height="150px"/>
        </van-swipe-item>
        </van-swipe>

	</view>
</template>

<script>
	export default {
		data() {
			return {
                images: [
                    'https://img.yzcdn.cn/2.jpg',
                    'https://img.yzcdn.cn/2.jpg',
                    'https://img.yzcdn.cn/2.jpg'
                ]
			}
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style>
	.swipe{
	}
</style>

<template>
	<view class="index">
		<!-- 公告 -->
		<notice-bar></notice-bar>
		
		<!-- 轮播 -->
		<app-swiper></app-swiper>
		
		<!-- 菜单 -->
		<menu-tool></menu-tool>
		
		<!-- 热门 -->
		<app-hot></app-hot>
		
	</view>
</template>

<script>
	import Swiper from '@/components/index/swiper'
	import NoticeBar from '@/components/index/noticeBar'
	import MenuTool from '@/components/index/menuTool'
	import Hot from '@/components/index/hot'
   // import '@/static/css/animate.css';
   
	export default {
		data() {
			return {
				title: '首页'
			}
		},
		onLoad() {
			// uni.setNavigationBarTitle({title: '首页'});
		},
		methods: {
		},
		components : {
			'notice-bar': NoticeBar,
			'app-swiper': Swiper,
			'menu-tool': MenuTool,
			'app-hot': Hot,
		}
		
	}
</script>

<style>
	.index {
		text-align: center;
		height: 500px;
		background: #F1F1F3;
	}
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}


</style>

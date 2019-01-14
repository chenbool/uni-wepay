<template>
	<view class="foot">

		<van-tabbar v-model="active" @change="changeItem">
			<van-tabbar-item icon="home-o" to="/pages/index/index">首页</van-tabbar-item>
			<van-tabbar-item icon="search" to="/pages/index/index">行情</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/pages/index/index">交易</van-tabbar-item>
			<van-tabbar-item icon="user-o" to="/pages/user/user" dot>用户</van-tabbar-item>
		</van-tabbar>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: this.$store.state.now_page_index
			}
		},
		onLoad() {
		},
		created() {	
			console.log(this.$store.state.now_page_index)
		},
		methods: {
			// 改变 vuex 里面的 index
			changeItem:function(index){
				// console.log(index)
				this.$store.commit('change_page',index)
			}
		}
	}
</script>

<style>
	.van-hairline--top-bottom{
		border-top: 1px solid rgba(143,143,148, 0.2);
	}
</style>

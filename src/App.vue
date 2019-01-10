<script>
	import Foot from '@/components/foot'
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		},
	}
</script>

<style>
	/*每个页面公共css */
	.uni-page-head{
		border-bottom: 1px solid rgba(143,143,148, 0.2);
	}
</style>

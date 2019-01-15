<template>
	<view class="list">
		<!-- 1 -->
		<view class="uni-list">
			<!-- <view class="uni-list-cell-divider">右侧带箭头</view> -->
			<view class="uni-list-cell" hover-class="uni-list-cell-hover">
				<view class="uni-list-cell-navigate uni-navigate-right">
					个人资料
				</view>
			</view>
			<view class="uni-list-cell uni-list-cell-last">
				<view class="uni-list-cell-navigate uni-navigate-right">
					实名认证
				</view>
			</view>
		</view>
		
		<!-- 2 -->
		<view class="uni-list" style="margin-top: 12upx;">
			
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate uni-navigate-right">
					资金流水
				</view>
			</view>	
			<view class="uni-list-cell uni-list-cell-last">
				<view class="uni-list-cell-navigate uni-navigate-right">
					密码安全
				</view>
			</view>
		</view>
		
		
		<!-- 3 -->
		<view class="uni-list" style="margin-top: 12upx;">

			<view class="uni-list-cell" style="border: none;">
				<view class="uni-list-cell-navigate uni-navigate-right">
					帮助中心
				</view>
			</view>

			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate uni-navigate-right">
					系统设置
				</view>
			</view>	
			
			<view class="uni-list-cell uni-list-cell-last">
				<view class="uni-list-cell-navigate uni-navigate-right">
					关于我们
				</view>
			</view>	
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.list .uni-list{
		position: relative;
		top: -100upx;
	}
</style>

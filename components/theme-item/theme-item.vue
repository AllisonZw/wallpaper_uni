<template>
	<view class="themeItem">
		<navigator url="" class="box">
			<image class="pic" src="../../common/images/preview1.jpg" mode=" aspectFill"></image>
			<view class="mask">
				明星美女
			</view>
			<view class="tab">
				今日更新
			</view>
		</navigator>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">
.themeItem {
	.box {
		height: 340rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;
		.pic {
			width: 100%;
			height: 100%;
		}
		.mask {
			width: 100%;
			height: 70rpx;
			position: absolute;
			bottom: 0;
			left: 0;
			background: rgba(0,0,0,0.2);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			backdrop-filter: blur(20rpx);
			font-weight: 600;
			font-size: 30rpx
		}
		.tab {
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba(250,129,90,0.7);
			backdrop-filter: blur(20rpx);
			color: #fff;
			font-size: 22rpx;
			padding: 6rpx 14rpx;
			border-radius: 0 0 20rpx 0;
			transform: scale(0.8);
			transform-origin: left top;
		}
	}
}
</style>
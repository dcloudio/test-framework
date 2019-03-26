<template>
  <view class="banner">
    <image
      class="banner-img"
      :src="banner.cover"
    ></image>
    <view class="banner-title">{{banner.title}}</view>
  </view>
</template>

<script>
export default {
  props: {
    banner: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style>
.banner {
  height: 360rpx;
  overflow: hidden;
  position: relative;
  background-color: #ccc;
}
.banner-img {
  width: 100%;
}
.banner-title {
  max-height: 84rpx;
  overflow: hidden;
  position: absolute;
  left: 30rpx;
  bottom: 30rpx;
  width: 90%;
  font-size: 32rpx;
  font-weight: 400;
  line-height: 42rpx;
  color: white;
  z-index: 11;
}
</style>

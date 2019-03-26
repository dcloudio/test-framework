<template>

  <view class="uni-media-list">
      {{key}}

    <view class="uni-media_header-box">
      <view class="uni-media_header">
        <image
          :src="item.cover"
          mode="aspectFill"
        />
      </view>
      <view class="uni-media_header-info">
        <view class="uni-media_info-name">{{item.author_name}}</view>
        <view>{{item.published_at}} {{item.form}}</view>
      </view>
      <view class="uni-media_header-right">
        <!-- 这里是关闭之类的操作 -->
      </view>
    </view>
    <view class="uni-media_content-box">
      <view class="uni-media_content-text">{{item.content}}</view>
      <view class="uni-media_content-iamges">
        <view
          class="uni-media_content-img"
          :class="{'img_1':item.imgs.length === 1}"
          v-for="(imgs,index) in item.imgs"
          :key="index"
        >
          <view class="uni-media_content-img-item">
            <image
              :src="imgs"
              mode="aspectFill"
            />
          </view>

        </view>
      </view>
    </view>
    <view class="uni-media_groups">
      <view class="uni-media_groups-item"><text class="iconfont icon-fenxiang-copy"></text><text>{{item.share}}万</text></view>
      <view class="uni-media_groups-item"><text class="iconfont icon-pinglun"></text><text>{{item.comment}}万</text></view>
      <view
        class="uni-media_groups-item"
        @click="trigger"
      ><text
          class="iconfont icon-dianzan1"
          :class="{'active':item.active}"
        ></text><text>{{item.thumbs}}万</text></view>
    </view>
  </view>
</template>

<script>
// 性能日志
// import Perf from "@/utils/perf.js";
// const perf = new Perf("card.setData");
// 点击次数
const max = 10;
let numIndex = 0;

export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    trigger() {
      this.$emit('trigger');
    }
  }
};
</script>

<style>

.uni-media-list {
  /* border-bottom: 1px #f5f5f5 solid; */
  background: #fff;
  margin-bottom: 20rpx;
}
.uni-media_header-box {
  display: flex;
  padding: 15rpx 20rpx;
}
.uni-media_header {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
  border: 1px #f5f5f5 solid;
  overflow: hidden;
}
.uni-media_header image {
  width: 100%;
  height: 100%;
}
.uni-media_header-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rpx 0;
  padding-left: 20rpx;
  font-size: 26rpx;
  color: #999;
}
.uni-media_info-name {
  font-size: 36rpx;
  color: #ff5a5f;
}
.uni-media_content-box {
  /* padding: 20rpx 0; */
}
.uni-media_content-text {
  font-size: 28rpx;
  color: #333;
  padding: 0 20rpx;
}
.uni-media_content-iamges {
  display: flex;
  flex-wrap: wrap;
  padding: 10rpx;
}
.uni-media_content-img {
  position: relative;
  width: 33.33%;
  height: 0;
  padding-top: 33.33%;
  box-sizing: border-box;
}
.img_1 {
  width: 70%;
  padding-top: 50%;
}

.uni-media_content-img-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10rpx;
  box-sizing: border-box;
}
.uni-media_content-img-item image {
  width: 100%;
  height: 100%;
}

.uni-media_groups {
  display: flex;
  height: 80rpx;
  border-top: 1px#f5f5f5 solid;
  margin: 0 20rpx;
}
.uni-media_groups-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  color: #666;
  flex: 1;
}

.uni-media_groups-item .iconfont {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 28rpx;
  margin-right: 10rpx;
}

.uni-media_groups-item .active {
  color: #ff5a5f;
}

@font-face {font-family: "iconfont";
  src: url('https://at.alicdn.com/t/font_1105050_zol10etauus.ttf?t=1553398395662') format('truetype'); /* IE9 */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-pinglun:before {
  content: "\e61b";
}

.icon-dianzan1:before {
  content: "\e600";
}

.icon-fenxiang-copy:before {
  content: "\e603";
}

</style>

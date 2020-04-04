<template>
  <div class="uni-media-list">
    <div class="uni-media_header-box">
      <div class="uni-media_header">
        <!-- <img :src="item.cover" mode="aspectFill" /> -->
      </div>
      <div class="uni-media_header-info">
        <div class="uni-media_info-name">{{item.author_name}}</div>
        <div>{{item.published_at}} {{item.form}}</div>
      </div>
    </div>
    <div class="uni-media_content-box">
      <div class="uni-media_content-text">{{item.content}}</div>
      <div class="uni-media_content-iamges">
        <div
          class="uni-media_content-img"
          :class="{'img_1':item.imgs.length === 1}"
          v-for="(imgs,index) in item.imgs"
          :key="index"
        >
          <div class="uni-media_content-img-item">
            <!-- <img :src="imgs" mode="aspectFill" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="uni-media_groups">
      <div class="uni-media_groups-item">
        <text class="iconfont icon-fenxiang-copy"></text>
        <text>{{item.share}}万</text>
      </div>
      <div class="uni-media_groups-item">
        <text class="iconfont icon-pinglun"></text>
        <text>{{item.comment}}万</text>
      </div>
      <div class="uni-media_groups-item" @click="trigger">
        <text class="iconfont icon-dianzan1" :class="{'active':isActive}"></text>
        <text>{{item.thumbs}}万</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isActive: this.item.active
    }
  },
  methods: {
    trigger() {
      this.isActive = !this.isActive
      let pages = getCurrentPages()
      pages = pages[pages.length - 1]
      if (pages.$perf) {
        pages.$perf.mark('setData', 'components', this)
      }
    }
  }
}
</script>

<style lang="less">
.uni-media-list {
  background: #fff;
  margin-bottom: 10px;
}

.uni-media_header-box {
  display: flex;
  padding: 7px 10px;
  img {
    width: 100%;
  }
}

.uni-media_header {
  width: 45px;
  height: 45px;
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
  padding: 2px 0;
  padding-left: 10px;
  font-size: 14px;
  color: #999;
}

.uni-media_info-name {
  font-size: 18px;
  color: #ff5a5f;
}

.uni-media_content-box {
  /* padding: 20px 0; */
}

.uni-media_content-text {
  font-size: 14px;
  color: #333;
  padding: 0 10px;
}

.uni-media_content-iamges {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
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
  padding: 5px;
  box-sizing: border-box;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}

.uni-media_content-img-item image {
  width: 100%;
  height: 100%;
}

.uni-media_groups {
  display: flex;
  height: 40px;
  border-top: 1px#f5f5f5 solid;
  margin: 0 10px;
}

.uni-media_groups-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666;
  flex: 1;
}

.uni-media_groups-item .iconfont {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
  margin-right: 5px;
}

.uni-media_groups-item .active {
  color: #ff5a5f;
}

@font-face {
  font-family: "iconfont";
  src: url("https://at.alicdn.com/t/font_1105050_zol10etauus.ttf?t=1553398395662")
    format("truetype");
  /* IE9 */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 12px;
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

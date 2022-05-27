<template>
  <view>
    <view class="uni-list">
      <view class="uni-list-cell" v-for="(value,key) in listData" :key="key">
        <view style="flex:1">
          <card :item="value" @trigger="trigger($event,value)"></card>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import card from "components/card";
import Api from "utils/api.js";
import {PERF_MAX_COUNT} from '@/utils/config.js'
export default {
  data() {
    return {
      listData: []
    };
  },
  components: {
    card
  },
  onLoad() {
    setTimeout(() => {
      this.$mp.page.$perf && this.$mp.page.$perf.mark("setData");
      console.log('PERF_MAX_COUNT',PERF_MAX_COUNT);
      for(let i=0;i<PERF_MAX_COUNT;i++){
         this.listData.push(...Api.getNews());
      }
      // this.listData = Api.getNews();
    }, 1000);
  },
  onPullDownRefresh() {
    this.listData = Api.getNews();
    setTimeout(() => {
      uni.showToast({
        title:"刷新成功"
      })
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom() {
    this.$mp.page.$perf && this.$mp.page.$perf.mark("setData");
    this.listData.push(...Api.getNews());
  },
  methods: {
    trigger(e,val){
      val.active = e
    }
  }
};
</script>

<style>
/* 列表 */
.uni-list {
  background-color: #eee;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>

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
    // import {
    //     reactive,
    //     onLoad,
    //     onPullDownRefresh,
    //     onReachBottom
    // } from 'vue'

    import card from "@/components/card.vue";
    import Api from "@/utils/api.js";
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
        onLoad(){
            const pages = getCurrentPages()
            this.page = pages[pages.length-1]
            setTimeout(() => {
                this.page.$perf && this.page.$perf.mark("setData"); 
                // this.listData.push(...Api.getNews());
                for(let i=0;i<PERF_MAX_COUNT;i++){
                  this.listData.push(...Api.getNews());
                }
            }, 1000);
        },
        onPullDownRefresh(){
            this.listData.length=0;
            this.listData.push(...Api.getNews());
            setTimeout(() => {
                uni.showToast({
                    title: "刷新成功"
                })
                uni.stopPullDownRefresh();
            }, 1000);
        },
        onReachBottom(){
             this.page.$perf && this.page.$perf.mark("setData");
             this.listData.push(...Api.getNews());
        },
        methods: {
          trigger(e,val){
            val.active = e
          }
        },
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

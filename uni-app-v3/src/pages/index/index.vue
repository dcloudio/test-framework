<template>
    <view>
        <view class="uni-list">
            <view class="uni-list-cell" v-for="(value,key) in listData" :key="key">
                <view style="flex:1">
                    <card :item="value"></card>
                </view>
            </view>
        </view>
    </view>
</template>

<script>

    import card from "components/card";
    import Api from "utils/api.js";

    export default {
        data() {
            return {
                listData: []
            };
        },
        components: {
            card
        },
        setup(props, ctx) {
            let listData = reactive([])
            const pages = getCurrentPages()
            const page = pages[pages.length-1]
            setTimeout(() => {
                page.$perf && page.$perf.mark("setData");
                listData.push(...Api.getNews());
            }, 1000);
            onPullDownRefresh(function() {
                listData.length=0;
                listData.push(...Api.getNews());
                setTimeout(() => {
                    uni.showToast({
                        title: "刷新成功"
                    })
                    uni.stopPullDownRefresh();
                }, 1000);
            })
            onReachBottom(function() {
                page.$perf && page.$perf.mark("setData");
                listData.push(...Api.getNews());
            })
            return {
                listData
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

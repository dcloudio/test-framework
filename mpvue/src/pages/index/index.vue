<template>
    <view>
        <view class="uni-list">
            <view class="uni-list-cell" v-for="(value,index) in listData" :key="index">
                <view style="flex:1">
                    <card :item="value" :key="index" @trigger="trigger(index)"></card>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import card from '@/components/card'
    import Api from '@/utils/api.js'

    export default {
        data() {
            return {
                listData: []
            }
        },
        components: {
            card
        },
        onLoad() {
            this.$mp.page.$perf && this.$mp.page.$perf.mark('setData')
            this.listData = Api.getNews()
        },
        methods: {
            trigger(key) {
                this.$mp.page.$perf && this.$mp.page.$perf.mark('setData', this, [key])
                //mpvue 未使用小程序自定义组件机制，统一交由 page.setData
                this.listData[key].active = !this.listData[key].active
            }
        },
        onPullDownRefresh() {
            this.listData = Api.getNews()
            setTimeout(() => {
                wx.stopPullDownRefresh()
            }, 1000)
        },
        onReachBottom() {
            this.$mp.page.$perf && this.$mp.page.$perf.mark('setData')
            this.listData.push(...Api.getNews())
        }
    }
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

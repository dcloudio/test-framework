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
    import card from 'components/card'
    import Api from 'utils/api.js'

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
        onPullDownRefresh() {
            this.listData = Api.getNews()
            setTimeout(() => {
                uni.stopPullDownRefresh()
            }, 1000)
        },
        onReachBottom() {
            this.$mp.page.$perf && this.$mp.page.$perf.mark('setData')
            this.listData.push(
                ...Api.getNews()
            )
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

<template>

    <view class="uni-media-list">
        <view class="uni-media_header-box">
            <view class="uni-media_header">
                <image :src="item.cover" mode="aspectFill" />
            </view>
            <view class="uni-media_header-info">
                <view class="uni-media_info-name">{{item.author_name}}</view>
                <view>{{item.published_at}} {{item.form}}</view>
            </view>
        </view>
        <view class="uni-media_content-box">
            <view class="uni-media_content-text">{{item.content}}</view>
            <view class="uni-media_content-iamges">
                <view class="uni-media_content-img" :class="{'img_1':item.imgs.length === 1}" v-for="(imgs,index) in item.imgs"
                    :key="index">
                    <view class="uni-media_content-img-item">
                        <image :src="imgs" mode="aspectFill" />
                    </view>

                </view>
            </view>
        </view>
        <view class="uni-media_groups">
            <view class="uni-media_groups-item"><text class="iconfont icon-fenxiang-copy"></text><text>{{item.share}}万</text></view>
            <view class="uni-media_groups-item"><text class="iconfont icon-pinglun"></text><text>{{item.comment}}万</text></view>
            <view class="uni-media_groups-item" @click="trigger"><text class="iconfont icon-dianzan1" :class="{'active':isActive}"></text><text>{{item.thumbs}}万</text></view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: function() {
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
                this.$mp &&  this.$mp.component && this.$mp.component.$perf && this.$mp.component.$perf.mark('setData')
                this.isActive = !this.isActive
            }
        }
    }
</script>

<style>
    .uni-media-list {
        background: #fff;
        margin-bottom: 20upx;
    }

    .uni-media_header-box {
        display: flex;
        padding: 15upx 20upx;
    }

    .uni-media_header {
        width: 90upx;
        height: 90upx;
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
        padding: 4upx 0;
        padding-left: 20upx;
        font-size: 26upx;
        color: #999;
    }

    .uni-media_info-name {
        font-size: 36upx;
        color: #ff5a5f;
    }

    .uni-media_content-box {
        /* padding: 20upx 0; */
    }

    .uni-media_content-text {
        font-size: 28upx;
        color: #333;
        padding: 0 20upx;
    }

    .uni-media_content-iamges {
        display: flex;
        flex-wrap: wrap;
        padding: 10upx;
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
        padding: 10upx;
        box-sizing: border-box;
    }

    .uni-media_content-img-item image {
        width: 100%;
        height: 100%;
    }

    .uni-media_groups {
        display: flex;
        height: 80upx;
        border-top: 1px#f5f5f5 solid;
        margin: 0 20upx;
    }

    .uni-media_groups-item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24upx;
        color: #666;
        flex: 1;
    }

    .uni-media_groups-item .iconfont {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666;
        font-size: 28upx;
        margin-right: 10upx;
    }

    .uni-media_groups-item .active {
        color: #ff5a5f;
    }

    @font-face {
        font-family: "iconfont";
        src: url("https://at.alicdn.com/t/font_1105050_zol10etauus.ttf?t=1553398395662") format("truetype");
        /* IE9 */
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

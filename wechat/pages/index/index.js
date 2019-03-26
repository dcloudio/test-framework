import Api from "../../utils/api.js";
Page({
    data: {
        listData: []
    },
    onLoad() {
        this.$perf && this.$perf.mark('setData');
        this.setData({
            listData: Api.getNews()
        })
       
    },
    onPullDownRefresh() {
        this.listData = Api.getNews();
        setTimeout(() => {
            wx.stopPullDownRefresh();
        }, 1000);
    },
    onReachBottom() {
        this.$perf && this.$perf.mark('setData');
        let listData = this.data.listData;
        listData.push(...Api.getNews());
        this.setData({
            listData
        })
    }
})
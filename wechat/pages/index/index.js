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
        // 数据全量更新
        this.$perf && this.$perf.mark('setData');
        let listData = this.data.listData;
        listData.push(...Api.getNews());
        this.setData({
            listData
        })

        // 数据差量更新
        // this.$perf && this.$perf.mark('setData');
        // // 通过长度获取下一次渲染的索引
        // let count = this.data.listData.length;
        // let data = {};
        // Api.getNews().forEach((item) => {
        //     data['listData[' + (count++) + ']'] = item
        // })
        // this.setData(data)
    }
})
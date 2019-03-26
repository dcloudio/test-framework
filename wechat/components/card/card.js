Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Object,
            value: {},
        }
    },
    data: {
        isActive: false
    },

    methods: {
        trigger() {
            this.$perf && this.$perf.mark('setData');
            this.setData({
                isActive: !this.data.isActive
            })
        }
    }
})
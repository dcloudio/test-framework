/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-expressions */
<template>
  <div>
    <div class="uni-list">
      <div class="uni-list-cell" v-for="(value,key) in listData" :key="key">
        <div style="flex:1" :class="'c_'+key">
          <Card :item="value"></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Card from '../common/card.vue'
import Api from '../utils/api'

export default Vue.extend({
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      listData: []
    }
  },
  created() {
    let pages = getCurrentPages()
    pages = pages[pages.length - 1]
    window.addEventListener('wxload', (query) => {
      this.$self = query.self
      if (pages.$perf) {
        pages.$perf.mark('setData', 'page')
      }
      this.listData = Api.getNews()
    })
    window.addEventListener('wxshow', () => console.log('page1 wxshow'))
    window.addEventListener('wxready', () => {
    })
    window.addEventListener('wxhide', () => console.log('page1 wxhide'))
    window.addEventListener('wxunload', () => {

    })
    window.addEventListener('reachbottom', () => {
      if (pages.$perf) {
        pages.$perf.mark('setData', 'page')
      }
      this.listData.push(...Api.getNews())
    })
  },
  methods: {
    onClickJump() {
      window.location.href = '/test/list/123'
    },

    onClickOpen() {
      window.open('/test/detail/123')
    }
  }
})
</script>

<style lang="less">
/* 列表 */
.uni-list {
  background-color: #eee;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>

import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Card from '../../components/card/card'
import Api from '../../utils/api'

import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '仿微博 - taro版',
    // enablePullDownRefresh: false,
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'
  }

  constructor(props) {
    super(props)
    this.state = {
      listData: []
    }
  }
  componentWillMount() {
    if (process.env.TARO_ENV === 'weapp') {
      this.$scope && this.$scope.$perf && this.$scope.$perf.mark('setData')
    }

    this.setState({
      listData: Api.getNews()
    })
  }

  onPullDownRefresh() {
    this.setState({
      listData: Api.getNews()
    })
    setTimeout(() => {
      Taro.stopPullDownRefresh()
      Taro.showToast({
        title: '刷新成功',
        duration: 1000
      })
    }, 1000)
  }

  onReachBottom() {
    this.$scope && this.$scope.$perf && this.$scope.$perf.mark('setData')
    let listData = this.state.listData
    listData.push(...Api.getNews())
    this.setState({
      listData
    })
  }

  render() {
    const list = this.state.listData.map((item, index) => {
      return (
        <View className="uni-list-cell" key={item.id}>
          <View className="uni-list-cell-warp">
            <Card item={item} />
          </View>
        </View>
      )
    })

    return (
      <View className="index">
        <View class="uni-list">{list}</View>
      </View>
    )
  }
}

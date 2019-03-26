import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Card from '../../components/card/card'
import Api from '../../utils/api'

import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '仿微博 - taro版',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.$scope.$perf && this.$scope.$perf.mark('setData')
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
    }, 1000)
  }
  
  onReachBottom() {
    this.$scope.$perf && this.$scope.$perf.mark('setData')
    const listData = this.state.listData
    listData.push(...Api.getNews())
    this.setState({
      listData
    })
  }
 
  render() {
    const list = this.state.listData.map((item, index) => {
      return (
        <View className="uni-list-cell" key={index}>
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

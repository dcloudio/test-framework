import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Card from '../../components/card/card'
import Api from '../../utils/api'

import './index.css'


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: []
    }
  }
  componentWillMount= () => {
    let pages = getCurrentPages()
    pages = pages[pages.length -1]
    if (process.env.TARO_ENV === 'weapp') {
      pages.$perf && pages.$perf.mark('setData')
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
    let pages = getCurrentPages()
    pages = pages[pages.length -1]
    pages.$perf && pages.$perf.mark('setData')
    let listData = this.state.listData
    listData.push(...Api.getNews())
    this.setState({
      listData
    })
  }

  render() {
    const list = this.state.listData.map((item,index) => {
      return (
        <View className='uni-list-cell' key={index}>
          <View className='uni-list-cell-warp'>
            <Card item={item} />
          </View>
        </View>
      )
    })

    return (
      <View className='index'>
        <View class='uni-list'>{list}</View>
      </View>
    )
  }
}

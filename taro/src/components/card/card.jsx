import PropTypes from 'prop-types'
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './card.css'

export default class Card extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      isActive:  props.item.active || false
    }
  }

  trigger = () => {
    if (process.env.TARO_ENV === 'weapp' || process.env.TARO_ENV === 'alipay') {
      this.$scope && this.$scope.$perf && this.$scope.$perf.mark('setData')
    }
    this.setState({
      isActive:!this.state.isActive
    })
  }
 
  render() {
    let { item } = this.props
    let isActive = this.state.isActive
    let imgs = item.imgs.map((img,index)=>{
        return (
            <View
              className='uni-media_content-img'
              key={index}
            >
              <View className='uni-media_content-img-item'>
                <Image  className='uni-media_content-img-item-img'
                  src={img}
                  mode='aspectFill'
                />
              </View>
            </View>
        )
    })

    return (

      <View className='uni-media-list'>
        <View className='uni-media_header-box'>
          <View className='uni-media_header'>
            <Image
              className='uni-media_image'
              src={item.cover}
              mode='aspectFill'
            />
          </View>
          <View className='uni-media_header-info'>
            <View className='uni-media_info-name'><Text>{item.author_name}</Text></View>
            <View className='uni-media_info-from'><Text className='from-text'>{item.published_at}</Text> <Text className='from-text'>{item.form}</Text></View>
          </View>
        </View>
        <View className='uni-media_content-box'>
          <View className='uni-media_content-text'><Text>{item.content}</Text></View>
          <View className='uni-media_content-iamges'>
            {imgs}
          </View>
        </View>
        <View className='uni-media_groups'>
          <View className='uni-media_groups-item'>
            <Text className='uni-media_groups-item-iconfont iconfont icon-fenxiang-copy'></Text>
            <Text className='from-text'>{item.share}</Text>
            <Text className='from-text'>万</Text>
          </View>
          <View className='uni-media_groups-item'>
            <Text className='uni-media_groups-item-iconfont iconfont icon-pinglun'></Text>
            <Text className='from-text'>{item.comment}</Text>
            <Text className='from-text'>万</Text>
          </View>
          <View className='uni-media_groups-item'  onClick={this.trigger}>
          <Text className={`uni-media_groups-item-iconfont iconfont icon-dianzan1 ${isActive?'uni-media_groups-item-active':''}`} ></Text>
          <Text className='from-text'>{item.thumbs}</Text>
          <Text className='from-text'>万</Text>
          </View>
        </View>
      </View>
    )
  }
}

Card.propTypes = {
  item: PropTypes.object
}
Card.defaultProps = {
  item: {}
}

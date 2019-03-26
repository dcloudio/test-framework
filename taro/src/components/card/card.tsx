import PropTypes from 'prop-types'
import  { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { View, Text, Image } from '@tarojs/components'
import './card.scss'

export default class Card extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      isActive:  props.item.active || false
    }
  }

  trigger() {
    this.$scope.$perf && this.$scope.$perf.mark('setData')
    this.setState({
      isActive:!this.state.isActive
    })
  }
 
  render() {
    let { item } = this.props
    let imgs = item.imgs.map((img,index)=>{
        return (
            <View
              className="uni-media_content-img {item.imgs.length === 1?'active':''}"
              key={index}
            >
              <View className="uni-media_content-img-item">
                <Image
                  src={img}
                  mode="aspectFill"
                />
              </View>

            </View>
        )
    })

    return (

      <View>
         <View className="uni-media-list">
          <View className="uni-media_header-box">
            <View className="uni-media_header">
              <Image
                src={item.cover}
                mode="aspectFill"
              />
            </View>
            <View className="uni-media_header-info">
              <View className="uni-media_info-name">{item.author_name}</View>
              <View>{item.published_at} {item.form}</View>
            </View>
            <View className="uni-media_header-right">
            </View>
          </View>
          <View className="uni-media_content-box">
            <View className="uni-media_content-text">{item.content}</View>
            <View className="uni-media_content-iamges">
              {imgs}
            </View>
          </View>
          <View className="uni-media_groups">
            <View className="uni-media_groups-item"><Text className="iconfont icon-fenxiang-copy"></Text><Text>{item.share}万</Text></View>
            <View className="uni-media_groups-item"><Text className="iconfont icon-pinglun"></Text><Text>{item.comment}万</Text></View>
            <View className="uni-media_groups-item" onClick={this.trigger}><Text className="iconfont icon-dianzan1 {{isActive?'active':''}}" ></Text><Text>{item.thumbs}万</Text></View>
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

import Taro, { Component, Config } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { View , Image} from '@tarojs/components'
import './banner.scss'

export default class Banner extends Component {
 
  constructor (props) {
    super(props)
  }

  render() {
    let {banner} = this.props
    
    return (
      <View>
        
        <View className="banner">
        <Image
          className="banner-img"
          src= {banner.cover}
        />
        <View className="banner-title">{banner.title}</View>
      </View>
      </View>
    )
  }
}

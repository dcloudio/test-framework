import React, { Component } from 'react'
import './app.css'

// if (process.env.TARO_ENV === 'weapp') {
//   require('./utils/perf')
// }
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App

这是为《小程序跨端框架全面测评》准备的仓库。

- 开发内容：开发一个仿微博小程序首页的复杂长列表，支持下拉刷新、上拉翻页、点赞。

- 界面如下：
![](http://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/test-frame-uni.jpg)

- 开发版本：一共开发了6个版本，包括微信原生版、wepy版、mpvue版、taro版、uni-app版、chalemeon版（以发布时间排序），选择各个待评框架在npm的最新版

- 测试代码开源（[Github仓库地址：https://github.com/dcloudio/test-framework](https://github.com/dcloudio/test-framework)），
*Tips:若测试代码写法欠妥，欢迎各位提交 PR 或 [Issus](https://github.com/dcloudio/test-framework/issues)*

- 测试机型：红米 Redmi 6 Pro、MIUI 10.2.2.0 稳定版（最新版）、微信版本 7.0.3（最新版）

- 测试环境：每个框架开始测试前，杀掉各App进程、清空内存，保证测试机环境基本一致；每次从本地读取静态数据，屏蔽网络差异。

主要功能是：仿微博小程序首页的复杂长列表，支持下拉刷新、上拉翻页、点赞。


### 测试配置
启动测试请修改 `utils` --> `config.js` 下各项配置：
- `PERF_MAX` 总翻页次数
- `PERF_LIKE_MAX` 总点赞次数
- `PERF_AUTO` 是否开启自动测试
- `PERF_USING_COMPONENTS` 是否为原生组件，`mpvue`、`wepy` 为 `false`, 其他均为 `true`，请勿手动修改

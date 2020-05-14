module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {},
  mini: {
    prerender: {
      match: 'pages/card/**', // 所有以 `pages/shop/` 开头的页面都参与 prerender
      include: ['pages/card/card'], // `pages/any/way/index` 也会参与 prerender
    }
  }
}

const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        // js 入口
        'perf.common': path.resolve(__dirname, '../src/utils/perf.js'),
    },
    output: {
        path: path.resolve(__dirname, '../src/utils'),
        filename: '[name].js', // 必需字段，不能修改
    },
    optimization: {
        minimizer: []
    },
    module: {
        rules: [
            // js
        ]
    }
}

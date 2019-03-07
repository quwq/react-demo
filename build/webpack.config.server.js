const path = require('path')

module.exports = {
    target: 'node',
    // 应用路口
    entry: {
        app: path.join(__dirname, '../src/assets/js/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        path: path.join(__dirname,'../dist'),
        publicPath: '',
        libraryTarget: 'commonjs2'// 打包出来js模块所使用的方案（umd、amd、cmd、commonJS）这里我们使用commonjs2，适用于node端
    },
    module: {
        rules: [
            {
                test: /.(jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /.(js)$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules') // 由于node_modules都是编译过的文件，这里我们不让babel去处理其下面的js文件
                ]
            }
        ]
    }
}
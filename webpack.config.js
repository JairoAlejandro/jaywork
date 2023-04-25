const path = require('path')
const htmlWebpackPlugin  = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports ={
    entry: './src/main.js',
    output: {
        path: path.resolve( __dirname,'public'),
        filename: 'app.js'
    },
    stats: {
        loggingDebug: ["sass-loader"],
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module:{
        rules: [
            {test: /\.(js|jsx)$/,use:'babel-loader'},

            {
                test: /\.scss$/i , 
                use: [
                    'style-loader',
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },

    devServer:{
        port: 3000,
        historyApiFallback: true,
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new htmlWebpackPlugin({
            scriptLoading: 'blocking',
            inject: false,
            template: './src/template.html',
        }),
    ],
}
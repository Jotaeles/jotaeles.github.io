const common =  require('./webpack.common.js');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass =  new ExtractTextPlugin({
    filename: 'css/[name].[hash].css'
})

module.exports = merge(common,{
    devtool: 'source-map',
    mode:'production',
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use:[
                        {loader:'css-loader', options: { minimize: true }},
                        {loader: 'resolve-url-loader'},
                        {loader:'postcss-loader?sourceMap'},
                        {loader: 'sass-loader?sourceMap'}
                    ]
                })
            },
            {
                test:/\.html$/,
                use:[
                    {loader: 'html-loader', options: { minimize:true, attrs:false }}
                ]
            }
        ]
    },
    plugins: [extractSass]
});
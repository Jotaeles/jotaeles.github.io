const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TSLintWebpackPlugin = require('tslint-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
    template: './app/pugs/views/home/home.pug',
    filename: 'index.html'
});

module.exports = {
    entry: './app/scripts/views/home/home.main.ts',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        htmlWebpack,
        new TSLintWebpackPlugin({
            files: ['./app/**/*.ts']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['env']
                        }
                    },
                    {
                        loader:'ts-loader'
                    },
                    {
                        loader: 'tslint-loader'
                    }
                ]
            },
            {
                test: /\.pug$/,
                use:['html-loader','pug-html-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|)(\?.*)?$/,
                use: 'file-loader?name=fonts/[name][hash].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: 'url-loader?name=images/[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
}
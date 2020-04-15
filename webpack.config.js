const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'prepare.html'
        }),
        new MiniCssExtractPlugin({
            filename: '/css/[name].css',
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',

                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {

                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/dist/img',

                        }
                    }

                ]
            }

        ]
    }
}
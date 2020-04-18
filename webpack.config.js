const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'js/[name].js',
        publicPath: './'
    },

    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '/css/[name].css',
        }),
        // just copying files 
        new CopyPlugin([{
            from: path.resolve(__dirname + '/src/img'),
            to: path.resolve(__dirname + '/dist/img')
        }])
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
                            name: '../img/[name].[ext]',

                        }
                    }

                ]
            }

        ]
    }
}
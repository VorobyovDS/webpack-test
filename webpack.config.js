const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const PATHS = {
    source: path.join(__dirname, './src'),
    build: path.join(__dirname, './dist')
};


module.exports = {
    entry: PATHS.source +'/app.js',
    //entry: ['webpack-dev-server/client?localhost:3000', './src/app.js'],
    devServer: {
        contentBase: PATHS.build,
        // compress: true,
        open: true,
        watchContentBase: true
    },
    output: {
        path: PATHS.build,
        //path: path.resolve(__dirname, "dist"),
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', options: { /*importLoaders: 1,*//* minimize:true*/}
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [autoprefixer('last 2 versions', 'ie 10')]
                                }
                            }
                        },

                        {
                            loader: 'sass-loader'
                        }
                    ]
                })

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [{loader:'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "./img/",
                        //useRelativePath: true
                }},
            {
                loader: 'image-webpack-loader'
                // options: {
                //     bypassOnDebug: true
                //     // Более точная настройка
                //     // mozjpeg: {
                //     //     progressive: true,
                //     //     quality: 65
                //     // },
                //     // // optipng.enabled: false will disable optipng
                //     // optipng: {
                //     //     enabled: false,
                //     // },
                //     // pngquant: {
                //     //     quality: '65-90',
                //     //     speed: 4
                //     // },
                //     // gifsicle: {
                //     //     interlaced: false,
                //     // },
                //     // // the webp option will enable WEBP
                //     // webp: {
                //     //     quality: 75
                //     // }
                // }
           }]},





            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                       // attrs: [':data-src']
                       //  minimize: true

                    }
                }

            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: [
                    /component\.jsx$/, // select component by RegExp
                    /\.async\.jsx$/, // select component by extension
                    "/abs/path/to/component.jsx" // absolute path to component
                ],
                loader: "react-proxy-loader"
            }
            // {
            //
            //     test:
            //
            //
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin('common.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: PATHS.source+'/index.html'
        })
],

};
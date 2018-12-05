const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    context: ROOT,
    entry: {
        main: './main.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },
    module: {
        rules: [
            /****************
             * PRE-LOADERS
             *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },

            /** LESS LOADER **/
            {
                enforce: 'pre',
                test: /\.(less|css)$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                },
                    {
                        loader: 'less-loader' // compiles Less to CSS
                    }
                ]
            },

            /** SASS LOADER **/
            {
                test: /\.s[c|a]ss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
                /** Basic useage **/
                // use: [
                //     'style-loader', // creates style nodes from JS strings
                //     'css-loader', // translates CSS into CommonJS
                //     'sass-loader' // compiles Sass to CSS, using Node Sass by default
                // ]
                /** Loader with options **/
                // use: [{
                //     loader: "style-loader"
                // }, {
                //     loader: "css-loader"
                // }, {
                //     loader: "sass-loader",
                //     options: {
                //         includePaths: ["absolute/path/a", "absolute/path/b"]
                //     }
                // }]
                /**
                 * Use with mini css extract plugin
                 * Make sure the plugin is used in the plugin section
                 **/
                // use: [
                //     {
                //         // fallback to style-loader in development
                //         loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
                //     },
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             sourceMap: true
                //         }
                //     },
                //     {
                //         loader: 'sass-loader',
                //         options: {
                //             sourceMap: true
                //         }
                //     }
                // ]
            },

            /** HTML LOADER **/
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            },

            /** TYPESCRIPT LOADERS **/
            // {
            //     test: /\.ts$/,
            //     exclude: [/node_modules/],
            //     use: 'awesome-typescript-loader'
            // }
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
                }
            },

            /** IMAGE LOADER **/
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            },

            /** FONT LOADER **/
            {
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin("dist", {}),
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./app/greeter/greeter.html"
            // filename: "./greeter.html",
            // chunks: []
        }),


        new ForkTsCheckerWebpackPlugin({
            tsconfig: './'
        }),
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devtool: 'inline-source-map',
    devServer: {}
};


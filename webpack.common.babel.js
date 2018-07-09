import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WriteFileWebpackPlugin from 'write-file-webpack-plugin';
import pkgInfo from 'pkginfo';

pkgInfo(module);

const config = {
    target: 'web',
    node: {
        fs: 'empty'
    },
    entry: {
       index: `./src/scripts/${module.exports.name}/js/index.js`
    },
    performance: {
        hints: false
    },
    externals: {
        jquery: 'jQuery'
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                index: {
                    test: /static\/js/
                },
                vendors: {
                    test: /([\\/]node_modules[\\/])/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(ttf|eot|woff|woff2)/,
                loader: 'file-loader',
                options: {
                    name: `images/${module.exports.name}/fonts/[name].[ext]`,
                }
            },
            {
                test: /\.(png|svg|gif)$/,
                loader: 'file-loader',
                exclude: [
                    '/images/img/guardian.png'
                ],
                options: {
                    name: `images/${module.exports.name}/[name].[ext]`,
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                        ],
                        plugins: [
                            '@babel/plugin-transform-modules-amd',
                            '@babel/plugin-transform-regenerator',
                            '@babel/plugin-transform-runtime'
                        ] 
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            createDayLabel: "jquery",
            createWeekdayLabel: "jquery"
        }),

        // Page fragment definitions go here
        new HtmlWebpackPlugin({
            template: `src/{{ps_category}}/{{ps_location}}/{{page}}.{{app_name}}.content.footer.txt`,
            PS_URL: 'https://ps.irondistrict.org',
            filename: `{{ps_category}}/{{ps_location}}/{{page}}.{{app_name}}.content.footer.txt`,
            chunks: ['vendor', 'index'],
            inject: true
        }),
        
        new WriteFileWebpackPlugin({
            test: /(admin|teachers|guardian|public|wildcards)/
        })
    ],
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.mjs']
    }
};

export default config;

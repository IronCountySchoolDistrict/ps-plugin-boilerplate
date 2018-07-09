import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import pkgInfo from 'pkginfo';

import common from './webpack.common.babel';

pkgInfo(module);

export default merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        filename: `scripts/${module.exports.name}/js/[name].js`,
        path: path.resolve(__dirname, 'dist/web_root'),
        publicPath: 'http://localhost:8081',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            includePaths: [
                                path.resolve(__dirname, 'node_modules/')
                            ]
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'scripts/student-profile/css/[name].css'
        }),
        new webpack.NamedModulesPlugin()
    ],
    serve: {
        dev: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        },
        host: '0.0.0.0',
        port: '8081',
        clipboard: false,
        hot: {
            port: '8500',
            host: {
                client: 'localhost',
                server: '0.0.0.0'
            }
        }
    }
});
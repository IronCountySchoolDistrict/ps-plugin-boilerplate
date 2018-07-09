import path from 'path';
import merge from 'webpack-merge';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import pkgInfo from 'pkginfo';

import common from './webpack.common.babel';

pkgInfo(module);

export default merge(common, {
    mode: 'production',
    output: {
        filename: `scripts/${module.exports.name}/js/[name].[hash].js`,
        path: path.resolve(__dirname, 'dist/web_root'),
        publicPath: 'https://ps.irondistrict.org/'
    },
    module: {
        rules: [{
            test: /\.(css|scss|sass)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }],
    },
    plugins: [
        // new CleanWebpackPlugin(['./dist/*']),
        new MiniCssExtractPlugin({
            filename: `scripts/${module.exports.name}/css/[name].[hash].css`
        }),
        new webpack.NamedModulesPlugin()
    ]
})
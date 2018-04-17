import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import pkgInfo from 'pkginfo'

pkgInfo(module)

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  performance: {
    hints: false
  },
  node: {
    fs: 'empty'
  },
  entry: {
    index: `./src/scripts/${module.exports.name}/js/index.js`
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `web_root/scripts/${module.exports.name}/css/[name].bundle.css`
    })
  ],
  output: {
    filename: `web_root/scripts/${module.exports.name}/js/[name].bundle.js`,
    library: '[name]'
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: [
            'transform-es2015-modules-amd',
            'transform-regenerator',
            'transform-runtime'
          ]
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
          collapseWhitespace: true
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'node_modules/')
              ]
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.mjs']
  }
}

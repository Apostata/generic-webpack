const path = require('path')
const rules = require('./config/rules')
const plugins = require('./config/plugins')
const devServer = require('./config/devServer')
const publicPath = 'http://localhost:3000/'
const {NODE_ENV} = process.env
const filename =  NODE_ENV === 'development'? '[name].js' :'[name].[contenthash].js'


const webpackConfig = {
  entry:{
    index: './src/index.js',
    outro: './src/outro.js'
  },
  mode: NODE_ENV === 'production' ? 'development' : 'development',
  output: {
    filename,
    path: path.resolve(__dirname, 'build'),
    publicPath
  },
  module: {
    rules
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js'],
},
  plugins
};

if(NODE_ENV === 'development'){
    webpackConfig.devServer = devServer
    webpackConfig.devtool= 'source-map'
}

module.exports = webpackConfig;


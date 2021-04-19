const path = require('path')
const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {ModuleFederationPlugin} = require('webpack').container
const environments = require('../dynamic_env_vars')

const {NODE_ENV} = process.env
// const dependencies = require("../package.json").dependencies;


const plugins=[
    // para passar as variaveis de ambiente para o projeto
    new webpack.DefinePlugin({
        "process.env":JSON.stringify(environments)
    }),
    //para injetar o js no html direto a variavel title e os javascripts e css
    new HtmlWebpackPlugin({ 
        inject:'body',
        title:'Aplicação qualquer',
        filename: 'index.html',
        template:'./src/index.html',
    }),
    // * para usar micro-frontend *
    // new ModuleFederationPlugin({
    //     name: "container",
    //     filename: "remoteEntry.js",
    //     remotes: {
    //         Fonts: "Fonts@http://localhost:3001/remoteEntry.js",
    //         Colors: "Colors@http://localhost:3002/remoteEntry.js",
    //     },
    //     shared: {
    //         ...dependencies,
    //         "react-router-dom": {
    //             requiredVersion: dependencies['react-router-dom'],
    //             singleton: true,
    //         },
    //         "react-dom": {
    //             requiredVersion: dependencies['react-dom'],
    //             singleton: true,
    //         },
    //         react: {
    //             requiredVersion: dependencies['react'],
    //             singleton: true,
    //         },
    //     }
        
    // })
]


if(NODE_ENV === 'production'){
    plugins.push(
        // para separar os arquivos de css do js no build
        // new MiniCssExtractPlugin({
        //     filename: '[name].[contenthash].css'
        // })
    // para limpar a pasta build toda vez que gerar um novo build
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                '**/*', //all files in dist/ folder
                path.join(process.cwd(), 'build/**/*') //clean build/ folder as well
            ]
        })
    )
}

module.exports = plugins
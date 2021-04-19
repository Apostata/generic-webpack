// * os comentados é para usar o sass *
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const {NODE_ENV} = process.env
// const styleLoader = NODE_ENV==='production'? MiniCssExtractPlugin.loader: 'style-loader'

module.exports =[ //in moment of import to read, before compile
    // {
    //     test:/\.scss$/,
    //     use:[styleLoader, 'css-loader', 'sass-loader']
    // },
    {
        test: /\.(jpg|png)$/,
        use:['file-loader']
    },
    {
        test: /\.js$/,
        use: [
            {
            loader: 'babel-loader',
            },
        ],
        exclude: /node_modules/,
    }
]
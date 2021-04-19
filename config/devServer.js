module.exports ={
    //  para forçar o devServer a pegar da pasta build por padrão pega da memoria pois roda em dev
    // contentBase: path.join(__dirname, "../build"),
    index:'index.html',
    port:3000,
    hot:true,
    overlay: true,
    historyApiFallback:true
    // writeToDisk: true 
}
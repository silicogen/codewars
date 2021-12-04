module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        liveReload: true,
        port: 3000,
    }
}
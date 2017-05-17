module.exports = {
    entry: ['./app/app.js'],
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: './build',
        inline: true,
        stats: 'errors-only',
        open: true
    }
}

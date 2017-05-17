const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                    publicPath: '/build'
                })
            },
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Project',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true
        })
    ]
}

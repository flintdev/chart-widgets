const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        index: "./example/index.tsx",
        plugin: "./src/library.ts",
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve('./assets/'),
        filename: "[name].js",
        libraryTarget: 'umd',
        library: 'chart-widgets'
    },
    // important! move react and react-dom as external dependencies to avoid invalid hook calls error
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".yaml"],
        alias: {
            src: path.resolve('./src'),
            example: path.resolve('./example'),
            dist: path.resolve('./dist'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(txt|yaml)$/,
                use: 'raw-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./example/index.html",
            filename: "./index.html"
        })
    ]
};
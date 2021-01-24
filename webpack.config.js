module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.js', '.tsx', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        https: true,
        disableHostCheck: true,
        writeToDisk: true
    },
};
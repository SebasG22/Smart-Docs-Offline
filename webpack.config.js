const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/libs/js/initApplication',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                    ]
            },
            /*
            {
                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets: ['es2015']
                    }
                }
            }*/
        ]
    }
    ,
    plugins: [
        /*
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        })
        ,
        */
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
    
};
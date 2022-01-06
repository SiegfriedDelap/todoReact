const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: "development",
    
    module: {
        rules: [
            //JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            //Images
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath : 'images',
                            name : '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
            //Fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath : 'fonts',
                            name : '[name].[ext]'
                        }
                    }
                ]
            },
            //CSS loaders working from bottom to up
            {
                test: /\.(css)$/,
                use:[
                    {
                        loader:  MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            //SASS/SCSS
            {
                test: /\.(s[ca]ss)$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello World',
            buildTime: new Date().toString(),
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
        })
    ]
}
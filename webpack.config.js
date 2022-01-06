const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = (env, argv) => {
    let isMode = '';

    switch(argv.mode){
        case 'development':
            isMode = 'development';
            break;
        case 'production':
            isMode = 'production';
            break;
        default:
            isMode = 'development';
    }

    const getStyleLoaders = () => {
        if (isMode === 'production') {
            return [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        } else {
            return [
                'style-loader',
                'css-loader'
            ]
        }
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: 'Hello World',
                buildTime: new Date().toString(),
                template: 'public/index.html'
            })
        ];
        if(isMode === 'production') {
            plugins.push( new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            }))
        }

        return plugins;
    }

    const getJSHash = () => {
        if(isMode === 'production'){
            return 'main-[hash:8].js'
        }else{
            return 'main.js'
        }
    }

    return {
        mode: isMode ? 'production' : 'development',
        output: {
            filename: getJSHash()
        },
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
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
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
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },
                //CSS loaders working from bottom to up
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                },
                //SASS/SCSS
                {
                    test: /\.(s[ca]ss)$/,
                    use: [...getStyleLoaders(), 'sass-loader']
                },

            ]
        },
        plugins: getPlugins(),
        devServer: {
            open: true
        }
    }
}
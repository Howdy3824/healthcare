//entry -> output
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'});
} else if (process.env.NODE_ENV === 'development')   {
    require('dotenv').config({ path: '.env.development'});
}

module.exports = (env) => {
    // the env argument for this fn is set in package.json scripts
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        // webpack stuffs
        entry: ['babel-polyfill','./src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),// cos absolute path is needed
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
             // { // css rules
            //     test: /\.css$/, 
            //     use: [  // use helps in creating array of loader
            //         'style-loader',
            //         'css-loader'
            //     ]
            // }, 
            { // scss rules
                test: /\.s?css$/,
                // yhis regular exp looks for css and scss files
//before production config use setup 
                // use: [  // use helps in creating array of loader
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader'
                // ]
                use: CSSExtract.extract({
                    use: [ // use helps in creating array of loader
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
            })
        ],
        // sourcemap stuffs
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        // dev-server which is similar to live-server stuff
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, // it helps in serving the index.html file on all servers
            publicPath: '/dist/'
        },
        node: {
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
          }
    };
};


import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
    mode: 'development',
    entry: src + '/index.jsx',
    output: {
        path: dist,
        filename: 'bundle.js'
    },

    module: {
    rules: [
        {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
			test:/\.css$/,
			use:[
				"style-loader",
				"css-loader"
			]
        },
        {
			test: /\.(png|jpg|gif|svg)$/,
			use: [
				{
					loader: 'url-loader',
					options: { limit: 8192 }
				}
			]
		}
    ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: src + '/index.html',
            filename: 'index.html',
            favicon: src + '/img/favicon.ico'
        })
    ]
}
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
				exclude: /(node_modules|bower_components)/,
			},

			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(tsx|ts)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				use: ['file-loader'],
			},
		],
	},
	resolve: {
		extensions: [__dirname, '*', '.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@app': path.resolve(__dirname, 'src/app'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@entities': path.resolve(__dirname, 'src/entities'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}

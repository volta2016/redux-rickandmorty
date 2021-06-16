const path = require("path");

module.exports = {
	mode: "production",
	etry: "./src/index.js",
	output: {
		path: path.join(__dirname, "public"),
		__fillname: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"],
			},
			{
				test: /\.(gif|png|jpg?g)$/i,
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "sccs-loader", "sass-loader"],
			},
		],
		resolve: {
			extension: [".js", ".jsx"],
		},
		performance: {
			hints: process.env.NODE_ENV === "production" ? "error" : false,
			maxEntrypointSize: 580000,
			maxAssetSize: 580000,
		},

		// devtool: "eval-cheap-module-source-map",
		devtool: "source-map",

		devServer: {
			contentBase: path(__dirname, "public"),
		},
	},
};

const path = require("path");
const common = require("./webapck.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'source-map',
    devServer:{
        static: path.join(__dirname, "./dist"),
        port: 5001,
        open: true,
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
        ]
    }
});
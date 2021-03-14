const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const dev = process.env.NODE_ENV == "dev";

const config = {
    mode: dev ? "development" : "production",
    entry: "./src/main.js",
    output: {
        path: path.resolve("./public/dist"),
        filename: "bundle.js",
    },
    devtool: dev ? "eval-cheap-module-source-map" : false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
        extensions: [".ts", ".js"],
    },
};

module.exports = config;

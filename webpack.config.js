const path = require('path');

const basePath = __dirname;
const distPath = path.join(basePath, "dist");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: distPath,
    },

    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",

    devServer: {
        contentBase: basePath,
        compress: true,
        port: 8080,
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|woff)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            publicPath: "dist/",
                        }
                    }
                ]
            },
        ],

        // rules: [
        // ],

        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    },

    node: {
        fs: 'empty'
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

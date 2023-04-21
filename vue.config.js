const { defineConfig } = require("@vue/cli-service")
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = defineConfig({
  publicPath: "/",
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      fallback: {
        https: require.resolve("https-browserify"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        fs: false,
        os: false,
        path: false
      }
    },
    plugins: [new NodePolyfillPlugin()]
  }
})

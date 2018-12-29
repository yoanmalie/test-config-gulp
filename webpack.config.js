import { options } from "./.gulpconfig"

const path = require("path")

const config = {
  mode: options.isProduction ? "production" : "development",
  entry: "./themes/mon-theme/assets/js/main.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "web/assets/js"),
  },
}

if (options.isDevelopment) {
  config.devtool = "source-map"
}

module.exports = config

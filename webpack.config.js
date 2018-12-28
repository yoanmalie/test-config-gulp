const path = require("path")

module.exports = {
  entry: "./themes/mon-theme/assets/js/main.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "web/assets/js"),
  },
}

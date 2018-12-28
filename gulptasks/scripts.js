import gulp from "gulp"

import webpack from "webpack"
import webpackStream from "webpack-stream"
import webpackConfig from "../webpack.config.js"

import { js } from "../.gulpconfig"

gulp.task("scripts:build", () => {
  gulp
    .src(js.src + js.entry + "." + js.extensions)
    .pipe(
      webpackStream(webpackConfig),
      webpack,
    )
    .pipe(gulp.dest(js.dest))
})

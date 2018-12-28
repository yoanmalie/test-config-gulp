import gulp from "gulp"
import pump from "pump"
import rename from "gulp-rename"
import sourcemaps from "gulp-sourcemaps"

import babel from "gulp-babel"

import { js } from "../.gulpconfig"

gulp.task("scripts:build", () => {
  pump([
    gulp.src(js.src + js.entry + "." + js.extensions),
    sourcemaps.init(),
    babel({
      presets: [["@babel/preset-env"]],
    }),
    rename({
      basename: js.name,
      suffix: js.suffix,
    }),
    sourcemaps.write("."),
    gulp.dest(js.dest),
  ])
})

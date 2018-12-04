import gulp from "gulp"
import pump from "pump"
import rename from "gulp-rename"
import sourcemaps from "gulp-sourcemaps"

import sass from "gulp-sass"
import autoprefixer from "gulp-autoprefixer"
import cssnano from "gulp-cssnano"
import stylelint from "gulp-stylelint"

import { css } from "../.gulpconfig"

sass.compiler = require("node-sass")

// SCSS to CSS Task
gulp.task("styles:build", () => {
  const pipeline = (src, dest, name) => {
    pump([
      gulp.src(src),
      sourcemaps.init(),
      sass(),
      autoprefixer(),
      cssnano(),
      rename({
        basename: name,
        suffix: css.suffix,
      }),
      sourcemaps.write("."),
      gulp.dest(dest),
    ])
  }

  // Front main stylesheet
  pipeline(css.src + css.entry + "." + css.extensions, css.dest, css.name)
})

// SCSS Lint Task
gulp.task("styles:lint", () => {
  gulp.src(css.src + "/**/*" + "." + css.extensions).pipe(
    stylelint({
      failAfterError: false,
      reporters: [{ formatter: "string", console: true }],
    }),
  )
})

// Styles Alias Task̦̦̦
gulp.task("styles", ["styles:build", "styles:lint"])

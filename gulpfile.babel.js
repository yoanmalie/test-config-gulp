"use strict"

import gulp from "gulp"
import requireDir from "require-dir"

// Require all tasks files
requireDir("./gulptasks", { recurse: true })

// Group of tasks
gulp.task("build", ["styles:build", "scripts:build"])
gulp.task("serve", ["build"])
gulp.task("default", ["serve"])

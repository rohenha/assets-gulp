const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const cache = require('gulp-cached');
const postcss = require('gulp-postcss');

/* ─────────────────────────────────────────────────────── */
const config = require('../../config')
let tasks = {}
const files = [
  `${config.src}/styles/site.scss`,
]

const postcssPlugins = [
  require("postcss-inline-svg"),
  // assets(
  //   {
  //     basePath: config.src,
  //     loadPaths: [
  //       'assets/',
  //       'images/'
  //     ]
  //   }
  // ),
  // normalize()
]
/* ─────────────────────────────────────────────────────── */

tasks.builder = () => gulp
  .src(files)
  .pipe(cache('linting'))
  .pipe(sass({
    outputStyle: 'compressed',
    includePaths: [
      './node_modules'
    ]
  }))
  .pipe(postcss(postcssPlugins))
  .pipe(gulp.dest(config.dist))


tasks.watcher = () => gulp
  .watch(
    `${config.src}/scripts/*.js`,
    tasks.builder
  )

tasks.builder.displayName = 'styles-builder'
tasks.watcher.displayName  = 'styles-watcher'

module.exports = tasks

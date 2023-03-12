const gulp = require('gulp')
const esbuild = require('gulp-esbuild')
var cache = require('gulp-cached');

/* ─────────────────────────────────────────────────────── */
const config = require('../../config')
let tasks = {}
const files = [
  `${config.src}/scripts/site.js`,
]
/* ─────────────────────────────────────────────────────── */

tasks.builder = () => gulp
  .src(files)
  .pipe(cache('linting'))
  .pipe(esbuild({
    target: 'es2015',
    bundle: true,
    minify: config.env.isProd,
  }))
  .pipe(gulp.dest(config.dist))


tasks.watcher = () => gulp
  .watch(
    `${config.src}/scripts/*.js`,
    tasks.builder
  )

tasks.builder.displayName = 'scripts-builder'
tasks.watcher.displayName  = 'scripts-watcher'

module.exports = tasks

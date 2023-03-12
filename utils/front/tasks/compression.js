const gulp = require('gulp')
var gzip = require('gulp-gzip');
var sizereport = require('gulp-sizereport');

/* ─────────────────────────────────────────────────────── */
const config = require('../../config')
/* ─────────────────────────────────────────────────────── */

let tasks = {}

tasks.gzip = () => gulp
  .src(`${config.dist}/**/*`)
  .pipe(gzip({ deleteMode: 'public/asssets' }))
  .pipe(gulp.dest(config.dist))

tasks.size = () => gulp
  .src(`${config.dist}/**/*`)
  .pipe(sizereport({
    gzip: true
  }))

tasks.gzip.displayName = 'gzip'
tasks.size.displayName = 'size'

module.exports = tasks

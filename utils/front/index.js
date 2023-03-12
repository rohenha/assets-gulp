const gulp = require('gulp')

const cleaner = require('./tasks/cleaner')
const scripts = require('./tasks/scripts')
const styles = require('./tasks/styles')
const compression = require('./tasks/compression')


let config = {}

config.builder = gulp.series(
  cleaner.clean,
  scripts.builder,
  styles.builder,
  compression.size,
  compression.gzip,
)

config.watcher = gulp.series(
  cleaner.clean,
  scripts.builder,
  styles.builder,
  gulp.parallel(
    scripts.watcher,
    styles.watcher,
  )
)

module.exports = config

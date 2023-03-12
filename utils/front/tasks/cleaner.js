const del = require('del');
/* ─────────────────────────────────────────────────────── */
const config = require('../../config')
/* ─────────────────────────────────────────────────────── */

let tasks = {}

tasks.clean = () => del(
    [
      config.dist + '/**/*',
      // config.sprite.dist + '/' + config.sprite.name,
      '!.keep'
    ]
  );

tasks.clean.displayName = 'clean'

module.exports = tasks

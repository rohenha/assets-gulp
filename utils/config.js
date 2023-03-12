/* ────────────────────────────────────────────────────────── */
const argv = require('yargs').argv
/* ─────────────────────────────────────────────────────── */
const package = require('../package.json')
/* ─────────────────────────────────────────────────────── */

module.exports = {
  name: package.name,
  version: package.version,
  env: {
    isDev: argv.env === 'dev',
    isProd: argv.env === 'prod',
    isDebug: argv.debug === 'true',
  },
  src: './sources',
  dist: './assets',
  server: {
    url: 'starter.vm',
    port: 3000
  },
}
/*jshint node:true*/
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {

  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['app'],
      extension: 'scss'
    },
    fingerprint: {
      exclude: ['.png']
    },
    SRI: {
      enabled: false
    }
  })

  app.import('bower_components/clientjs/src/client.min.js')
  app.import('vendor/shims/client.js')

  app.import('bower_components/fingerprintjs2/dist/fingerprint2.min.js')
  app.import('vendor/shims/fingerprintjs2.js')

  return app.toTree()
}

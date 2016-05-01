/* eslint-env node */
/* eslint no-var: 0, no-empty: 0 , quotes: "off" */

module.exports = function (environment) {
  var ENV = {

    modulePrefix: 'myapp',

    environment: environment,

    baseURL: '/',

    locationType: 'auto',

    EmberENV: {
      LOG_VERSION: false,
      FEATURES: {
      }
    },

    APP: {
      host: 'http://0.0.0.0:3000'
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': ["'self'", "https://cdn.mxpnl.com"],
      'font-src': ["'self'", "http://fonts.gstatic.com"],
      'connect-src': ["'self'", "http://0.0.0.0:3000"],
      'img-src': "'self'",
      'style-src': ["'self'", "'unsafe-inline'", "http://fonts.googleapis.com"],
      'media-src': null
    }
  }

  if (environment === 'development') {

  }

  if (environment === 'test') {
    ENV.baseURL = '/'
    ENV.locationType = 'none'
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false
    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {
    ENV.baseURL = '/quiz-ember'
    ENV.locationType = 'hash'

  }

  return ENV
}

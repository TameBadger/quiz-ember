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
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      host: 'http://0.0.0.0:3000'
      // Here you can pass flags/options to your application instance
      // when it is created
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
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {

  }

  return ENV
}

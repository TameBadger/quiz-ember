(function() {
  function vendorModule() {
    'use strict';
    return { 'default': self['Fingerprint2'] };
  }

  define('fingerprintjs2', [], vendorModule);
})();

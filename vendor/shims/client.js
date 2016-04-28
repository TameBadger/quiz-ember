(function() {
  function vendorModule() {
    'use strict';
    return { 'default': self['ClientJS'] };
  }

  define('clientjs', [], vendorModule);
})();

(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['fabric'],
      __esModule: true,
    };
  }

  define('fabric', [], vendorModule);
})();

/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-fabricjs-shim',

  included(app) {
    this._super.included.apply(this, arguments);

    const vendor = this.treePaths.vendor;

    app.import(vendor + '/fabric.require.js', { prepend: true });
    app.import(vendor + '/shims/fabric.js');
  },

  treeForVendor(vendorTree) {
    var fabricTree = new Funnel(path.join(this.project.root, 'node_modules', 'fabric', 'dist'), {
      files: ['fabric.require.js']
    });

    return new MergeTrees([vendorTree, fabricTree]);
  },
};

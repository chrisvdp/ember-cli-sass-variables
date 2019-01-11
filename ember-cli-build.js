'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    appDir: './tests/dummy/app',
    sassVariables: './tests/dummy/app/styles/_variables.scss'
  });
  return app.toTree();
};

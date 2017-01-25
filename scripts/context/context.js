'use strict';

var rootPath = './';

var that = {};

that.initContext = function(config) {
  rootPath = config.rootPath;
}

that.getRootPath = function() {
  return rootPath;
}

module.exports = that;

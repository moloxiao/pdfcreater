'use strict';

var etaManager = require('./eta/eta_manager');

var that = {};

that.getEtaManager = function() {
  return etaManager;
}

module.exports = that;

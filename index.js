'use strict';

var modelManager = require('./scripts/model/model_manager');

var that = {};

that.getModelManager = function() {
  return modelManager;
}


module.exports = that;

function test() {
    that.getModelManager().getEtaManager().createOrderModel({}, './temp', function(err, result){

    });
}

test();

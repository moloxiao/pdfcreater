'use strict';

var modelManager = require('./scripts/model/model_manager');
var context = require('./scripts/context/context');

var that = {};

that.init = function(config) {
    context.initContext(config);
}

that.getModelManager = function() {
    return modelManager;
}


module.exports = that;

// function writeToTemp() {
//     that.getModelManager().getEtaManager().createOrderModel({}, 'temp/', function(err, result) {
//
//     });
// };
// that.init({
//   rootPath : './'
// });
// writeToTemp();

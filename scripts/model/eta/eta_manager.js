'use strict';

var orderModel = require('./order/order_model');

var that = {};

that.createOrderModel = function(dataObj, filePath, cb) {
  orderModel.create(dataObj, filePath, cb);
}

module.exports = that;

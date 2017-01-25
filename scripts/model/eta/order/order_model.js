'use strict';

var context = require('../../../context/context');

var that = {};

that.create = function(dataObj, filePath, cb) {
    var PDFDocument = require('pdfkit');
    var doc = new PDFDocument();
    var fs = require('fs');
    doc.pipe(fs.createWriteStream(context.getRootPath() + filePath + 'file_eta_order_demo.pdf', 'utf-8'));
    doc.font('fonts/hwfs.ttf');

    doc.fontSize(24)
        .text('检测认证合同', 200, 80);

    doc.fontSize(12)
        .text('检测认证需求方：漳州立达信光电子科技有限公司', 40, 130)
        .text('联系人：张春修')
        .text('尊敬的客户您好：')
        .text('感谢您的咨询和选择，针对您所需要的以下产品和服务，现我司提供报价：');

    doc.moveTo(40, 210)
        .lineTo(533, 210)
        .stroke();

    doc.fontSize(12)
        .text('产品名称[Type Of Product]：LED面板灯', 40, 220)
        .text('型号[Type Designation]：DL-JA2C07AS1-30W0EL，DL-JA2C07AS1-40W0EL，DL-JA2C07ER1-30W0EL，DL-JA2C07ER1-40W0EL，DL-JA2C18CS1-40W0EL，DL-JA2C18HR1-30W0EL，DL-JA2C18CS1-30W0EL，DL-JA2C18HR1-40W0EL')
        .text('额定参数[Ratings]：100~240V')
        .text('认证需求[Requirement]：ERP')
        .text('周期[TAT]：8month')
        .text('样品需求[Samples Needs]：15pcs')
        .text('价格构成[Price]：56,000.00RMB（含6%税点）');

    doc.moveTo(40, 370)
        .lineTo(533, 370)
        .stroke();

    // 新起一页构建合同模板
    doc.addPage()
        .fontSize(12)
        .text('新的一页测试', 100, 100);


    doc.end();
}

module.exports = that;

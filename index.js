'use strict';

// https://cnodejs.org/topic/535f3569c0733ff512016a52
// http://pdfkit.org/docs/getting_started.html
// https://github.com/devongovett/pdfkit

// var iconv = require('iconv-lite');
// var arr = iconv.encode('ETA报价单', 'utf-8');

var PDFDocument = require('pdfkit');
var doc = new PDFDocument();

var that = {};


that.test = function() {
    var fs = require('fs');
    doc.pipe(fs.createWriteStream('file_eta_order_demo.pdf', 'utf-8'));
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

    // Add another page
    doc.addPage()
        .fontSize(12)
        .text('新的一页测试', 100, 100);

    // Draw a triangle
    // doc.save()
    //     .moveTo(100, 150)
    //     .lineTo(100, 250)
    //     .lineTo(200, 250)
    //     .fill("#FF3300");

    doc.end();
}




module.exports = that;

that.test();

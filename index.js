'use strict';

// https://cnodejs.org/topic/535f3569c0733ff512016a52
// http://pdfkit.org/docs/getting_started.html
// https://github.com/devongovett/pdfkit

var PDFDocument = require('pdfkit');
var doc = new PDFDocument();

var that = {};


that.test = function() {
    var fs = require('fs');
    doc.pipe(fs.createWriteStream('output.pdf'));
    // Add another page
    doc.addPage()
        .fontSize(25)
        .text('Here is some vector graphics...', 100, 100);

    // Draw a triangle
    doc.save()
        .moveTo(100, 150)
        .lineTo(100, 250)
        .lineTo(200, 250)
        .fill("#FF3300");

    doc.end();
}




module.exports = that;

that.test();

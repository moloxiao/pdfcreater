'use strict';

var context = require('../../../context/context');

var that = {};

that.create = function(dataObj, filePath, cb) {

    var PDFDocument = require('pdfkit');
    var doc = new PDFDocument();
    var fs = require('fs');
    doc.pipe(fs.createWriteStream(context.getRootPath() + filePath + 'file_eta_order_demo.pdf', 'utf-8'));
    doc.font(context.getRootPath() + 'fonts/hwfs.ttf');

    doc.fontSize(24)
        .text('检测认证合同', 200, 80);

    doc.fontSize(12)
        .text('检测认证需求方：' + + dataObj.customerName, 40, 130)
        .text('联系人：' + dataObj.contactName)
        .text('尊敬的客户您好：')
        .text('感谢您的咨询和选择，针对您所需要的以下产品和服务，现我司提供报价：');

    doc.moveTo(40, 210)
        .lineTo(533, 210)
        .stroke();

    doc.fontSize(12)
        .text('报价单号[Order Id]：' + dataObj.etaOrderId, 40, 220)
        .text('产品名称[Type Of Product]：' + dataObj.customerProductName)
        .text('型号[Type Designation]：' + dataObj.customerProductModel)
        .text('额定参数[Ratings]：' + dataObj.ratings)
        .text('认证需求[Requirement]' + dataObj.requirement)
        .text('周期[TAT]：' + dataObj.TAT)
        .text('样品需求[Samples Needs]：' + dataObj.samplesNeeds)
        .text('价格构成[Price]：' + dataObj.orderPrice);

    doc.moveTo(40, 380)
        .lineTo(533, 380)
        .stroke();

    doc.fontSize(16)
        .text('杭州亿塔检测技术有限公司付款信息');

    doc.fontSize(12)
        .text('RMB')
        .text('户名：杭州亿塔检测技术有限公司')
        .text('开户行：工商银行杭州西园支行')
        .text('账号：1202083409900099941')
        .text('USD')
        .text('Name：ETA TESTING TECHNOLOGY LIMITED')
        .text('BANK : CHINA   MERCHANTS  BANK  H.O., SHENZHEN OFF-SHORE  BANKING  DEPT. BANK ADDRESS: NO. 7088 SHENNAN RD., SHENZHEN  CHINA')
        .text('SWIFT CODE: CMBCCNBS008')

    // 新起一页构建合同模板
    doc.addPage()
        .fontSize(12)
        .text('合同条款:')
        .fontSize(10)
        .text('1，合同的开始、完成、修改及终止')
        .text('1.1本合同在签署后生效， 杭州亿塔检测技术有限公司在收到委托方的付款后启动项目，最终目标是使得委托方获得所需证书，最终证书的签发机构事先商定：')
        .text('1.2合同在签署后，除非双方签署有书面修正意见，否则不能单方面对合同进行任何的变动和修改。')
        .text('2，杭州亿塔检测技术有限公司的责任和义务')
        .text('2.1杭州亿塔检测技术有限公司需按照相关的标准和要求建立适合委托方的体系和相关的文件记录，以确保委托方通过审核，由于检测标准存在一定的理解误区，认证过程中的邮件往来确认可以作为本合同的有效补充。')
        .text('2.2杭州亿塔检测技术有限公司应每周向委托方负责人汇报项目的进展情况，提出存在的问题应提交进度报告。')
        .text('2.3杭州亿塔检测技术有限公司应提供资深的、经验丰富的符合进行此项目咨询服务的顾问师并参与项目跟踪；')
        .text('2.4杭州亿塔检测技术有限公司应对委托方的文件和数据保密，未经委托方许可，不得将文件和数据透漏给第三方。')
        .text('3.委托方的责任和义务')
        .text('3.1委托方应指定项目负责人， 由其安排相关人员进行具体的整改工作')
        .text('3.2委托方应严格按照双方协商认同的方案和计划进行整改，未经许可，不得更改和延误；')
        .text('3.3委托方应将此项目存在的所有问题如实告知杭州亿塔检测技术有限公司，不可有所隐瞒，以免发生意外；')
        .text('3.4委托方应将收到测试结果在柒个工作日内及时确认信息，并及时支付所有的咨询费用，以便进行最终证书签发')
        .text('3.5委托方应对杭州亿塔检测技术有限公司的文件和价格体系进行保密，未经杭州亿塔检测技术有限公司许可，不得将文件和价格透漏给第三方。')
        .text('4.如果发生重测及未认证零部件的随机测试，所涉及的费用将另行收取，重测费费用以书面合同形式或邮件确认形式进行补充。')
        .text('5.本报价承诺的“测试/认证服务周期”建立于委托方的有效配合，并在满足下列条款的基础上，否则杭州亿塔检测技术有限公司不受该“测试认证服务周期”的约束。')
        .text('5.1.委托方支付50%的费用作为预付款,项目完成支付尾款')
        .text('5.2.委托方提交清晰和内容完整的申请表；')
        .text('5.3.委托方根据合同的要求送样；')
        .text('5.4.委托方及时提供其他的相关技术资料。')
        .text('6.本报价是基于委托方提供的信息作出的。 在收到全部样品及相关文件后若发现与委托方最初提供的信息有差别, 本公司保留调整报价的权力。')
        .text('7.由于委托人的原因致使项目延迟或终止，本公司有权要求委托人支付已发生的款项。')
        .text('8. 我们保留将部分测试转包给其他分包试验室的权利.')
        .text('争议解决:合同执行过程中如有争议，委托方和杭州亿塔检测技术有限公司应友好协商解决，不能通过协商解决则按杭州亿塔检测技术有限公司当地的司法程序解决。')
        .text(' ')
        .text(' ');


    doc.fontSize(14)
        .text('委托方名称：_______________')
        .text('委托方代表签名/盖章：_______________')
        .text('日期：_______________')
        .text(' ')
        .text('受托方：杭州亿塔检测技术有限公司')
        .text('受托方代表签名/盖章：_______________')
        .text('日期：_______________');

    doc.fontSize(10)
        .text('  ')
        .text('双方当事人在上述日期签署本合同，特此为证。');
    doc.end();

    var filePath = '/temp/file_eta_order_demo.pdf';
    cb(null, filePath);
}

module.exports = that;

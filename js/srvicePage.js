define(function (require) {
    var tpl = require('tpl/service.html');
    return {
        title: '售后服务',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
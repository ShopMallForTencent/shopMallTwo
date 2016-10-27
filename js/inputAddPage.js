define(function (require) {
    var tpl = require('tpl/inputAdd.html');
    return {
        title: '新增收货地址',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
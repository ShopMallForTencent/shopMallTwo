define(function (require) {
    var tpl = require('tpl/my_address.html');
    return {
        title: '收货地址',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
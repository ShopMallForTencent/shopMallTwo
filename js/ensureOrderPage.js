define(function (require) {
    var tpl = require('tpl/ensure_order.html');
    return {
        title: '支付',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
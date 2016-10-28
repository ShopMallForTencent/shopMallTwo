define(function (require) {
    var tpl = require('tpl/ensure_order.html');
    return {
        title: '订单确认',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
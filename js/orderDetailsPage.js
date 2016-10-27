define(function (require) {
    var tpl = require('tpl/order_details.html');
    return {
        title: '订单详情',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
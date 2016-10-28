define(function (require) {
    var tpl = require('tpl/chatting.html');
    return {
        title: '客服列表',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
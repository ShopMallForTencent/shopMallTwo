define(function (require) {
    var tpl = require('tpl/chat_system.html');
    return {
        title: '联系客服',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
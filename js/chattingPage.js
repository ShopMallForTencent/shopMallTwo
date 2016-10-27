define(function (require) {
    var tpl = require('tpl/chatting.html');
    return {
        title: '消息中心',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
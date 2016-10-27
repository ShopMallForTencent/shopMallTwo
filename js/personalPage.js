define(function (require) {
    var tpl = require('tpl/personal.html');
    return {
        title: '个人中心',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
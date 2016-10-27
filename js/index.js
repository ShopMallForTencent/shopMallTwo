define(function (require) {
    var tpl = require('tpl/index.html');
    return {
        title: '商场首页',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
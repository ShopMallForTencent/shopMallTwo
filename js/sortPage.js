define(function (require) {
    var tpl = require('tpl/sort.html');
    return {
        title: '分类页',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
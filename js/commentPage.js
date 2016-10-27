define(function (require) {
    var tpl = require('tpl/comment.html');
    return {
        title: '商品评价',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
define(function (require) {
    var tpl = require('tpl/problem.html');
    return {
        title: '常见问题',
        body: tpl,
        init: function () {
            console.log('done');
        }
    }
});
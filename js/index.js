define(function (require) {
    var tpl = require('tpl/index.html');
    var slide = require('js/slide.v2.0.min');
    return {
        title: '首页',
        body: tpl,
        init: function () {
           Zepto(function($){
			    imgSlide = new mo.Slide({
			        target: $('#banner-box li'),
			        direction: 'x'
			    });
			});
        }
    }
});
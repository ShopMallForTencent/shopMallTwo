define(function (require) {
    var tpl = require('tpl/index.html');
    var slide = require('js/slide.v2.0.min');
    return {
        title: '首页',
        body: tpl,
        init: function () {
            // banner轮播效果
            Zepto(function($){
			    imgSlide = new mo.Slide({
			        target: $('#banner-box li'),
			        direction: 'x',
                    controller: true
			    });
			});

            // 显示隐藏返回顶部按钮
            $('.index-wrap .border-box').on('scroll',function(){
                var scrollTop = $(this).scrollTop(),
                    $backtotop = $(this).parent().find('.backtotop');
                if (scrollTop > _h) {
                    $backtotop.show();
                } else{
                    $backtotop.hide();
                }
            });
        }
    }
});
define(function (require) {
    var tpl = require('tpl/index.html');
    var slide = require('js/slide.v2.0.min');
    return {
        title: '首页',
        body: tpl,
        init: function () {
<<<<<<< HEAD
            Zepto(function($){
			    imgSlide = new mo.Slide({
			        target: $('#banner-box li'),
			        direction: 'x',
                    controller: true
			    });
			});
            $('.index-wrap .border-box').on('scroll',function(){
                var scrollTop = $(this).scrollTop();
                if (scrollTop > _h) {
                    $(this).parent().find('.backtotop').show();
                };
            });
=======
           Zepto(function($){
			    imgSlide = new mo.Slide({
			        target: $('#banner-box li'),
			        direction: 'x'
			    });
			});
>>>>>>> be8975b4bbb4e331c69294b16914238bd7938acc
        }
    }
});
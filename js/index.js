define(function (require) {
    var tpl = require('tpl/home.html');
    var indexAjax = require('js/ajax/indexAjax');
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
            $backtotop = $('.index-wrap .backtotop');
            $('.index-wrap .border-box').on('scroll',function(){
                var scrollTop = $(this).scrollTop();
                if (scrollTop > _h) {
                    $backtotop.show();
                } else{
                    $backtotop.hide();
                }
            });
            $backtotop.on('click',function(){
                $(this).parent().find('.border-box').scrollTop(0,0);
            });
        },
        beforeopen : function(){
            // 重置滚动条到顶部
            $('.index-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').show();
            $('.nav-box li').removeClass('on').eq(0).addClass('on');
            // 加载轮播图
            indexBanner();
        }
    }
});
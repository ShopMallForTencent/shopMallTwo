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
<<<<<<< HEAD
            $backtotop = $('.index-wrap .backtotop');
            $('.index-wrap .border-box').on('scroll',function(){
                var scrollTop = $(this).scrollTop();
=======
<<<<<<< HEAD
            $backtotop = $('.index-wrap .backtotop');
            $('.index-wrap .border-box').on('scroll',function(){
                var scrollTop = $(this).scrollTop();
=======
            $('.index-wrap .border-box').on('scroll',function(){
                var scrollTop = $(this).scrollTop(),
                    $backtotop = $(this).parent().find('.backtotop');
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
                if (scrollTop > _h) {
                    $backtotop.show();
                } else{
                    $backtotop.hide();
                }
            });
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
        }
    }
});
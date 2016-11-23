define(function (require) {
    var tpl = require('tpl/information.html');
    return {
        title: '客服',
        body: tpl,
        init: function () {
        	// 显示隐藏返回顶部按钮
        	$backtotop = $('.information-wrap .backtotop');
        	$('.information-wrap .border-box').on('scroll',function(){
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
        	$('.information-wrap .border-box').scrollTop(0,0);
        	// 控制底部导航栏状态
        	$('.nav-box').hide();
        }
    }
});
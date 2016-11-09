define(function (require) {
    var tpl = require('tpl/order_detail.html');
    return {
        title: '订单详情',
        body: tpl,
        init: function () {
            console.log('done');
            // 显示隐藏返回顶部按钮
            $backtotop = $('.order-details-wrap .backtotop');
            $('.order-details-wrap .border-box').on('scroll',function(){
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
        	$('.order-details-wrap .border-box').scrollTop(0,0);
        	// 控制底部导航栏状态
        	$('.nav-box').show();
        	$('.nav-box li').removeClass('on').eq(3).addClass('on');
        }
    }
});
define(function (require) {
    var tpl = require('tpl/refund.html');
    return {
        title: '退款',
        body: tpl,
        init: function () {
            // 显示隐藏返回顶部按钮
            $backtotop = $('.refund-wrap .backtotop');
            $('.refund-wrap .border-box').on('scroll',function(){
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
            $('.refund-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').hide();
        }
    }
});
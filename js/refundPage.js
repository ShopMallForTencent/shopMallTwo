define(function (require) {
    var tpl = require('tpl/refund.html');
    return {
        title: '退款',
        body: tpl,
        init: function () {
            // 显示隐藏返回顶部按钮
            $('.refund-wrap .border-box').on('scroll',function(){
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
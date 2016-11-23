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

            // 全选和计算价格
            function refundCountAll(){
                var priceNum = 0;
                $('.refund-wrap .shopItem').each(function(){
                    if ($(this).attr('del') == 1) {
                        priceNum += Number($(this).find('.fee span').eq(1).text());
                    }
                });
                $('.refund-wrap .refund-money span').text(priceNum.toFixed(2));
            }
            refundCountAll();

            function refundCheck(){
                var n = 0;
                $('.refund-wrap .shopItem').each(function(){
                    if ($(this).attr('del') == 1) {
                        n++;
                    }
                });
                if (n == $('.refund-wrap .shopItem').length) {
                    $('.refund-wrap .countAll .choose').addClass('choose-sure').attr('has',1);
                } else{
                    $('.refund-wrap .countAll .choose').removeClass('choose-sure').attr('has',0);
                }
            }

            $('.refund-wrap .shopItem .choose').on('click',function(){
                if ($(this).attr('has') == 0) {
                    $(this).addClass('choose-sure').attr('has',1).parents('.shopItem').attr('del',1);
                    refundCountAll();
                    refundCheck();
                } else{
                    $(this).removeClass('choose-sure').attr('has',0).parents('.shopItem').attr('del',0);
                    refundCountAll();
                    refundCheck();
                }
            });

            $('.refund-wrap .countAll .choose').on('click',function(){
                if ($(this).attr('has') == 0) {
                    $(this).addClass('choose-sure').attr('has',1);
                    $('.refund-wrap .shopItem .choose').addClass('choose-sure').attr('has',1);
                    $('.refund-wrap .shopItem').attr('del',1);
                    refundCountAll();
                } else{
                    $(this).removeClass('choose-sure').attr('has',0);
                    $('.refund-wrap .shopItem .choose').removeClass('choose-sure').attr('has',0);
                    $('.refund-wrap .shopItem').attr('del',0);
                    refundCountAll();
                }
            });
        }
    }
});
define(function (require) {
    var tpl = require('tpl/order_list.html');
    var orderPageAjax = require('js/ajax/orderPageAjax');
    return {
        title: '订单列表',
        body: tpl,
        init: function () {
<<<<<<< HEAD
            // 订单页内导航
=======
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
        	var $pageNavUl = $('.order-page-nav ul'),
        	    $pageNavLi = $pageNavUl.find('li'),
        	    $pageNavA = $pageNavUl.find('a'),
        	    $pageNavI = $('.sort-page-nav i');
        	if ($pageNavLi.length > 4) {
        	    $pageNavI.css('display','block');
        	};
        	if (_w < _h) {
        	   $pageNavUl.css('width',$pageNavLi.length*7.5+'rem'); 
        	} else{
        	    $pageNavUl.css('width',$pageNavLi.length*12.16+'rem'); 
        	}
        	$(window).resize(function(){
        	    if (_w < _h) {
        	       $pageNavUl.css('width',$pageNavLi.length*7.5+'rem'); 
        	    } else{
        	        $pageNavUl.css('width',$pageNavLi.length*12.16+'rem');
        	    }
        	});
<<<<<<< HEAD
        	$pageNavA.on('click',function(){
        	    var index = $pageNavA.index($(this));
        	    $pageNavA.removeClass('on').eq(index).addClass('on');
        	});

            // 显示隐藏返回顶部按钮
            $backtotop = $('.order-lists-wrap .backtotop');
            $('.order-lists-wrap .border-box').on('scroll',function(){
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
            $('.order-lists-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').show();
            $('.nav-box li').removeClass('on').eq(3).addClass('on');

            orderPageInfo(2,10,1);
            // orderPageReturnAll(10,1)
=======
        	$pageNavA.on('touchend',function(){
        	    var index = $pageNavA.index($(this));
        	    $pageNavA.removeClass('on').eq(index).addClass('on');
        	});
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
        }
    }
});
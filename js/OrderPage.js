define(function (require) {
    var tpl = require('tpl/order_list.html');
    var orderPageAjax = require('js/ajax/orderPageAjax');
    return {
        title: '订单列表',
        body: tpl,
        init: function () {
            // 订单页内导航
        	var $pageNavUl = $('#order-lists-wrap .order-page-nav ul'),
        	    $pageNavLi = $pageNavUl.find('li'),
        	    $pageNavA = $pageNavUl.find('a'),
        	    $pageNavI = $('#order-lists-wrap .order-page-nav .p-none');
        	if ($pageNavLi.length > 5) {
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
            // 选择订单状态查询
        	$pageNavA.on('click',function(){
                if ($(this).hasClass('on')) return;
        	    var thisState = $(this).attr('data-state');
                orderListsState(thisState);
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
            $('.nav-box').hide();

            orderPageInfo(2,10,1);
            // orderPageReturnAll(10,1)
        },
        afteropen : function(){
            // 订单状态
            orderListsState(orderState);
        }
    }
});
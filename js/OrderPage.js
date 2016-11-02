define(function (require) {
    var tpl = require('tpl/order_page.html');
    return {
        title: '订单列表',
        body: tpl,
        init: function () {
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
        	$pageNavA.on('touchend',function(){
        	    var index = $pageNavA.index($(this));
        	    $pageNavA.removeClass('on').eq(index).addClass('on');
        	});
        }
    }
});
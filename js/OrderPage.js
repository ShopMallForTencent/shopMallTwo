define(function (require) {
    var tpl = require('tpl/order_page.html');
    return {
        title: '订单列表',
        body: tpl,
        init: function () {

		    if (_w < _h) {
		       $('.page-nav ul').css('width',$('.page-nav ul').find('li').length*7.5+'rem'); 
		    } else{
		        $('.page-nav ul').css('width',$('.page-nav ul').find('li').length*12+'rem'); 
		    }
		    $(window).resize(function(){
		        if (_w < _h) {
		           $('.page-nav ul').css('width',$('.page-nav ul').find('li').length*7.5+'rem'); 
		        } else{
		            $('.page-nav ul').css('width',$('.page-nav ul').find('li').length*12+'rem'); 
		        }
		    });
        }
    }
});
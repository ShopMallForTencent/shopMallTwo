define(function (require) {
    var tpl = require('tpl/sort.html');
    return {
        title: '分类页',
        body: tpl,
        init: function () {
          $(document).ready(function(){
			    var $pageNavUl = $('.sort-page-nav ul'),
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
			    $pageNavA.on('touchend',function(){
=======

			    $pageNavA.on('tap',function(){
>>>>>>> be8975b4bbb4e331c69294b16914238bd7938acc
			        var index = $pageNavA.index($(this));
			        $pageNavA.removeClass('on').eq(index).addClass('on');
			    });

<<<<<<< HEAD
			    $('.page-sort a').on('touchend',function(){
=======
			    $('.page-sort a').on('tap',function(){
>>>>>>> be8975b4bbb4e331c69294b16914238bd7938acc
			        var index = $('.page-sort a').index($(this));
			        $('.page-sort a').removeClass('on').eq(index).addClass('on');
			    });
			});
        }
    }
});
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
			    $pageNavA.on('touchend',function(){
			        var index = $pageNavA.index($(this));
			        $pageNavA.removeClass('on').eq(index).addClass('on');
			    });

			    $('.page-sort a').on('touchend',function(){
			        var index = $('.page-sort a').index($(this));
			        $('.page-sort a').removeClass('on').eq(index).addClass('on');
			    });
			});
        }
    }
});
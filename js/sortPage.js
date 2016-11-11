define(function (require) {
    var tpl = require('tpl/category.html');
    return {
        title: '分类页',
        body: tpl,
        init: function () {
        	// 显示隐藏返回顶部按钮
        	$backtotop = $('.sort-wrap .backtotop');
        	$('.sort-wrap .border-box').on('scroll',function(){
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

	        $(document).ready(function(){
			    var $pageNavUl = $('.sort-page-nav ul'),
			        $pageNavLi = $pageNavUl.find('li'),
			        $pageNavA = $pageNavUl.find('a'),
			        $pageNavI = $('.sort-page-nav i');
			    if ($pageNavLi.length > 5) {
			        $pageNavI.css('display','block');
			    };
			    // 改变顶部导航的宽度
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
		            FnSortState(thisState);
		    	});

			    // 商品排行选中效果
			    $('.page-sort a').on('touchend',function(){
			        var index = $('.page-sort a').index($(this));
			        $('.page-sort a').removeClass('on').eq(index).addClass('on');
			    });

			    // 显示隐藏返回顶部按钮
			    $('.sort-wrap .border-box').on('scroll',function(){
	                var scrollTop = $(this).scrollTop(),
	                    $backtotop = $(this).parent().find('.backtotop');
	                if (scrollTop > _h) {
	                    $backtotop.show();
	                } else{
	                    $backtotop.hide();
	                }
	            });
			});
        },
        beforeopen : function(){
        	// 重置滚动条到顶部
        	$('.sort-wrap .border-box').scrollTop(0,0);
        	// 控制底部导航栏状态
        	$('.nav-box').show();
        	$('.nav-box li').removeClass('on').eq(1).addClass('on');
        },
        afteropen : function(){
            // 订单状态
            FnSortState(sortState);
        }
    }
});
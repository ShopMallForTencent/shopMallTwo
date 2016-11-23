define(function (require) {
    var tpl = require('tpl/home.html');
    var indexAjax = require('js/ajax/indexAjax');
    return {
        title: '首页',
        body: tpl,
        init: function () {
<<<<<<< HEAD
=======
            // banner轮播效果
            Zepto(function($){
			    imgSlide = new mo.Slide({
			        target: $('#banner-box .img-slide li'),
			        direction: 'x',
                    controller: true,
                    event:{
                        change:function(){
                            var index = this.curPage;
                            var leftNum,rightNum;
                            var $smallLi = $('#banner-box .small-img li');
                            $smallLi.removeClass('none left right');
                            if (index == 0) {
                                leftNum = 2;
                            } else{
                                leftNum = index - 1;
                            }
                            if (index == 2) {
                                rightNum = 0;
                            } else{
                                rightNum = index + 1;
                            }
                            $smallLi.eq(leftNum).addClass('left');
                            $smallLi.eq(index).addClass('none');
                            $smallLi.eq(rightNum).addClass('right');
                        }
                    }
			    });
			});

>>>>>>> 688ca31043e2e7f77d5499df2160c69b2cb495f3
            // 显示隐藏返回顶部按钮
            $backtotop = $('.index-wrap .backtotop');
            $('.index-wrap .border-box').on('scroll',function(){
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
            $('.index-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').show();
            $('.nav-box li').removeClass('on').eq(0).addClass('on');

            // 加载轮播图
            isIndex = true;
            loadBanner();
            // indexBannerAjax(function(){
            //     indexBannerSwiper();
            // });
        },
        afterclose: function(){
            isIndex = false;
        }
    }
});

function loadBanner(){
    removejscssfile('js/swiper.min.js','js');
    loadjs('js/swiper.min.js',function(){
        if (indexSwiper1 != null) {
            indexSwiper1.destroy(true);
            indexSwiper2.destroy(true);
        };
        indexSwiper1 = indexSwiper2 = null;
        indexSwiper1 = new Swiper('#ver-banner',{
            pagination: '#ver-banner .index-pagination',
            loop:true,
            grabCursor: true,
            paginationClickable: true,
            observer:true,
            observeParents:true
        });
        indexSwiper2 = new Swiper('#lev-banner',{
            loop: true,
            effect: 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
            },
            observer:true,
            observeParents:true
        });
    });  
}
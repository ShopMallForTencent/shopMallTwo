define(function (require) {
    var tpl = require('tpl/ware.html');
    var tab = require('js/ware/tab');
    var swiper = require('js/ware/idangerous.swiper.min');
    return {
        title: 'ware',
        body: tpl,
        init: function () {
            var ware_nav_body = $('#ware_nav_body');
            var ware_nav = $('#ware_nav_body .ware_nav');

            //商品介绍、规格参数、买家评论脚本
            $(function(){

                 new lcf_tab().init({  
                        'parent' : 'ware_nav',  
                        'action' : 'a',   
                        'bnt1' : 'select,noselect,spxq',  
                        'bnt2' : 'select,noselect,ggcs',  
                        'bnt3' : 'select,noselect,user_pj',  
                        'event' : 'touchend'  
                  });

                  window.onscroll = function(){

                        var y = document.documentElement.scrollTop || document.body.scrollTop;

                        if (ware_nav_body.get(0).getBoundingClientRect().top <= 0) {
                            ware_nav.css({
                                'position':'fixed',
                                'top' : 0,
                                'right' : 0
                            });
                        }
                        else
                        {
                            ware_nav.css({
                                'position':'static'
                            });
                        }
                   }  
            });

            //关闭弹窗函数
            function closeDialog(id)
            {
                document.getElementById(id).style.display = 'none';
            }

            //显示弹窗函数
            function showDialog(id)
            {
                document.getElementById(id).style.display = 'block';
            }

            //弹窗按钮选中脚本
            function gwcTcBntLogic(bnt)
            {
                var old = 0;

                $(bnt).on('touchend', function(){

                    if (this.className.indexOf('no') != -1 || old == $(this).index()) {return;}

                    $(this).addClass('select');

                    $(bnt).eq(old).removeClass('select');

                    old = $(this).index();

                });
            }
            gwcTcBntLogic('#ljgm .sp_color_bnt a');
            gwcTcBntLogic('#jrgwc .sp_color_bnt a');

            //弹窗中的 + 和 - 脚本
            function textBox(id,add,min)
            {
                var t = $(id);  
                $(add).click(function(){      
                    t.html(parseInt(t.html())+1)  
                })  
                $(min).click(function(){  
                    if (parseInt(t.html()) <=0) {return;}
                    t.html(parseInt(t.html())-1);    
                })   
            }
            textBox('#ljgm .text_box','#ljgm .add', '#ljgm .min');
            textBox('#jrgwc .text_box','#jrgwc .add', '#jrgwc .min');

            //头图轮播脚本 
             $(function(){

                var swiper_container = $('#swiper-container');
                var length = $('#swiper-container .swiper-slide').length;
                var sp_idx =  $('#swiper-container .sp_idx');
                sp_idx.html('1/' + length);

                var mySwiper = new Swiper('.swiper-container',{
                    onSlideChangeEnd:function(swiper){ 
                        sp_idx.html(swiper.activeIndex+1 + '/' + length);
                    }
                })

             });
        }
    }
});
define(function (require) {
    var tpl = require('tpl/detail.html');
    var tab = require('js/ware/tab');
    var swiper = require('js/ware/idangerous.swiper.min');
    var wareAjax = require('js/ajax/wareAjax');
    var ewSocket = require('js/ajax/socket/ensureOrderWare');
    return {
        title: '商品详情',
        body: tpl,
        init: function () {

            // 显示隐藏返回顶部按钮和吸顶
            var ware_nav_body = $('#ware_nav_body');
            var ware_nav = $('#ware_nav_body .ware_nav');
            var $backtotop = $('.ware-wrap .backtotop');
            $('.ware-wrap .border-box').on('scroll',function(){
                var scrollTop = $(this).scrollTop();
                if (scrollTop > _h) {
                    $backtotop.show();
                } else{
                    $backtotop.hide();
                }

                if (ware_nav_body.get(0).getBoundingClientRect().top <= 0) {
                    ware_nav.css({
                        'position':'fixed',
                        'top' : 0,
                        'right' : 0,
                        'z-index':999
                    });
                }
                else
                {
                    ware_nav.css({
                        'position':'static'
                    });
                }
            });
            $backtotop.on('click',function(){
                $(this).parent().find('.border-box').scrollTop(0,0);
            });

            wareList(function(){

                textBox('#ljgm');
                textBox('#jrgwc');

            });

             //商品介绍、规格参数、买家评论脚本
             new lcf_tab().init({  
                    'parent' : 'ware_nav',  
                    'action' : 'a',   
                    'bnt1' : 'select,noselect,spxq',  
                    'bnt2' : 'select,noselect,ggcs',  
                    'bnt3' : 'select,noselect,user_pj',  
                    'event' : 'touchend'  
              });

            function textBox(id)
            {
                var t = $(id + ' .text_box');

                if (parseInt(t.html()) <=1) {
                    $(id + ' .min').css('color','#adadad')
                }



                $(id + ' .add').click(function(){
                    t.html(parseInt(t.html())+1);
                    if ( parseInt(t.html())+1 >= $(id).find('.kc').html() ) 
                    {   
                        t.html($(id).find('.kc').html())
                        $(this).css('color','adadad')
                        return
                    }else{
                        $(id + ' .min').css('color','#333')
                        
                    }
                })  
                $(id + ' .min').click(function(){
                    t.html(parseInt(t.html())-1);   
                console.log("数量"+parseInt(t.html()))  
                    if (parseInt(t.html()) <=1) {
                        t.html(1)
                        $(id + ' .min').css('color','#adadad')
                        return;
                    }else{
                         $(id + ' .min').css('color','#333')
                        
                    }
                     
                })   
            }
        },
        beforeopen : function(){
            // 重置滚动条到顶部
            $('.ware-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').hide();
        },
        afterclose:function(){
            closeDialog('ljgm');
            closeDialog('jrgwc')
        }
    }
});


//关闭弹窗函数
function closeDialog(id)
{   
   $('#' + id).find('.select').removeClass('select');
   $('#' + id).find('.no').removeClass('no');
   selArr = [];

    $('#'+id).removeClass('gmtc_show');
    $('#'+id).addClass('gmtc_hide');
    setTimeout(function(){
        $('#'+id).removeClass('gmtc_hide');
        $('#'+id).addClass('gmtc_show');
        $('#'+id).hide();
    },300);
}

//显示弹窗函数
function showDialog(id)
{
    document.getElementById(id).style.display = 'block';
}

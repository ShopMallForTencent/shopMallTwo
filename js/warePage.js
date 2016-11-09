define(function (require) {
<<<<<<< HEAD
    var tpl = require('tpl/detail.html');
=======
    var tpl = require('tpl/ware.html');
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
    var tab = require('js/ware/tab');
    var swiper = require('js/ware/idangerous.swiper.min');
    var wareAjax = require('js/ajax/wareAjax');
    var ewSocket = require('js/ajax/socket/ensureOrderWare');
    return {
        title: '商品详情',
        body: tpl,
        init: function () {

<<<<<<< HEAD
            // 显示隐藏返回顶部按钮
            $backtotop = $('.ware-wrap .backtotop');
            $('.ware-wrap .border-box').on('scroll',function(){
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

            wareList(function(){

                textBox('#ljgm');
                textBox('#jrgwc');

            });
=======
            //加载ajax脚本
            loadjs('js/ajax/wareAjax.js',function(){

               





                

            }); 
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98

            var ware_nav_body = $('#ware_nav_body');
            var ware_nav = $('#ware_nav_body .ware_nav');

             //商品介绍、规格参数、买家评论脚本
             new lcf_tab().init({  
                    'parent' : 'ware_nav',  
                    'action' : 'a',   
                    'bnt1' : 'select,noselect,spxq',  
                    'bnt2' : 'select,noselect,ggcs',  
                    'bnt3' : 'select,noselect,user_pj',  
                    'event' : 'touchend'  
              });

<<<<<<< HEAD
              document.getElementById('page-container-wrap').onscroll = function(){
=======
            document.getElementById('page-container-wrap').onscroll = function(){
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98

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
<<<<<<< HEAD

            function textBox(id)
            {
                var t = $(id + ' .text_box');

                if (parseInt(t.html()) <=1) {
                    $(id + ' .min').css('color','#adadad')
                }


=======
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98

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
<<<<<<< HEAD
        },
        beforeopen : function(){
            // 控制底部导航栏状态
            $('.nav-box').hide();
=======
            textBox('#ljgm .text_box','#ljgm .add', '#ljgm .min');
            textBox('#jrgwc .text_box','#jrgwc .add', '#jrgwc .min');
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
        }
    }
});


//关闭弹窗函数
function closeDialog(id)
{   
<<<<<<< HEAD
   $('#' + id).find('.select').removeClass('select');
   $('#' + id).find('.no').removeClass('no');
   selArr = [];

=======
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
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

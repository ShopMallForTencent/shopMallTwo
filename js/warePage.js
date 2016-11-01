define(function (require) {
    var tpl = require('tpl/ware.html');
    var tab = require('js/ware/tab');
    var swiper = require('js/ware/idangerous.swiper.min');
    return {
        title: '商品详情',
        body: tpl,
        init: function () {

            //加载ajax脚本
            loadjs('js/ajax/ware_ajax.js',function(){

               





                

            }); 

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

            document.getElementById('page-container-wrap').onscroll = function(){

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
        }
    }
});


//关闭弹窗函数
function closeDialog(id)
{   
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

//动态加载js， 公共
function loadjs(src,func)  
{     
    //判断这个js文件存在直接执行回调  
    var scripts = document.getElementsByTagName('script') ;  
    for(i in scripts)  
        if(scripts[i].src == src)  
            return func() ;  
    if(typeof func != 'function')  
    {  
        console.log('param 2 is not a function!!') ;  
        return false ;  
    }  
    var script = document.createElement('script') ;  
    script.type ='text/javascript' ;  
    script.src = src ;  
    var head = document.getElementsByTagName('head').item(0);  
    head.appendChild(script);  

    script.onload = function(){  
        func();  
    }  
}  
define(function (require) {
    var tpl = require('tpl/my_address.html');
    var aIn = require('js/ajax/socket/addressInputAddress');
    return {
        title: '地址管理',
        body: tpl,
        init: function () {

            $(function(){
              //选择默认地址
               $(".setThisAdd").on("touchend",function(){
                      var oClass=$(this).find("i");
                      $(".setThisAdd").find("i").removeClass("icon-right").addClass("icon-setDefault");
                      $(".setThisAdd").attr('def',0)
                      $(".setThisAdd").find("span").text("设为默认");
                      oClass.removeClass("icon-setDefault").addClass("icon-right");
                      oClass.parent().find("span").text("默认地址");
                      $(this).attr('def',1)
                      var oDiv=$(this).parents(".myAdd");
                      console.log(oDiv)
                      addDdfault ($(this).attr('rId'))
                      setTimeout(function(){
                        $(oDiv).insertBefore($(".myAdd").eq(0));
                      },1000)
                });
               //编辑地址
                $(".edit").on("touchend",function(){
                   addEdit($(this).attr('rId'))
                   window.location.href="#tpl/inputAdd";
                })
                //删除地址
                $(".delete").on("touchend",function(){
                    $(this).parents(".myAdd").remove();
                   addDel($(this).attr('rId'))
                });

            })
   
        },

        beforeopen : function()
        {
            loadjs('js/ajax/addressAjax.js',function(){
            });  
        }
    }
});
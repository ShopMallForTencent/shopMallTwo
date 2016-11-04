define(function (require) {
    var tpl = require('tpl/my_address.html');
    var aIn = require('js/ajax/socket/addressInputAddress');
    var addressAjax = require('js/ajax/addressAjax');
    return {
        title: '地址管理',
        body: tpl,
        init: function () {
        },

        beforeopen : function()
        {
            addressList(function(){

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
                   // window.location.href="#tpl/inputAdd";
                })

                //删除地址提示弹窗
                $(".delete").on("touchend",function(){
                    var self = this;
                    showPop('delete_address');
                    //删除地址
                    $('#delete_address .btn-box a').eq(0).on('touchend', function(){
                         $(self).parents(".myAdd").remove();
                         addDel($(self).attr('rId'));
                    });
                });

                //初始化默认地址
                var $setDefault = $(".setThisAdd");
                for(var i=0; i<$setDefault.length; i++){
                    if($setDefault.eq(i).attr('def')==1){
                      $setDefault.eq(i).find("i").removeClass("icon-setDefault").addClass("icon-right");
                      $setDefault.eq(i).find("i").parent().find("span").text("默认地址");
                      $setDefault.eq(i).parents(".myAdd").insertBefore($(".myAdd").eq(0))
                    }
                }

                //修改收货地址
                $('#myAdd .addevent').on('touchend', function(){
                   
                    var name = $(this).find('.uName').html();
                    var phone = $(this).find('.uTel').html();
                    var address = $(this).find('.addDetail').text();

                    var user_address = $(document.body).find('#user_address');
                    user_address.find('.buyer').html(name);
                    user_address.find('.buyerNum').html(phone);
                    user_address.find('.buyerAdd').html(address);

                    window.location.href = '#tpl/ensureOrder';

                  });
            });
        }
    }
});
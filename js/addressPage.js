define(function (require) {
    var tpl = require('tpl/address.html');
    var aIn = require('js/ajax/socket/addressInputAddress');
    var addressAjax = require('js/ajax/addressAjax');
    return {
        title: '地址管理',
        body: tpl,
        init: function () {
        },

        beforeopen : function()
        {
            // 重置滚动条到顶部
            $('.my-address-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').hide();
            $(document.body).find('#saveAdd').off('touchend');

            addressList(function(){
              //当只有一个地址的时候设为默认地址
              console.log("myAddlen:"+$(".myAdd").length)
              if($(".myAdd").length==1){
                var defaultId = $(".myAdd .setThisAdd").attr('rId');
                console.log(defaultId);
                 var oClass=$('.setThisAdd').find("i")
                  oClass.removeClass("icon-setDefault").addClass("icon-right");
                  oClass.parent().find("span").text("默认地址");
                   $(this).attr('def',1)
                   addDdfault (defaultId)
                //addDdfault (defaultId)
              }

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
                   // window.location.href="#tpl/addressEdit";
                })
                var addLen = 0;
                //删除地址提示弹窗
                $(".delete").on("touchend",function(){
                    var self = $(this);
                    // console.log($(self).parents('#myAdd').find('.myAdd').length)
                    showPop('delete_address');
                    //删除地址
                    $('#delete_address .btn-box a').eq(0).on('touchend', function(){
                      
                         addLen = $(self).parents('#myAdd').find('.myAdd').length;
                         addDel($(self).attr('rId'));
                         $(self).parents(".myAdd").remove();
                         addLen--;
                         if(addLen==0){
                          var user_address = $(document.body).find('#myAdd');
                          user_address.html('<div class="tips txc"><img src="images/myAddress/adress-icon.png" alt="没有收货地址"><p>当前还没有地址，赶紧添加地址吧！</p></div>')
                         }
                    });

                    // console.log($(self).parents('#myAdd').find('.myAdd').length)
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
                $('#myAdd .addevent').on('click', function(){
                 
                  var name = $(this).find('.uName').html();
                  var phone = $(this).find('.uTel').html();
                  var address = $(this).find('.addDetail').text();
                  var rid = $(this).attr('rid')

                  var user_address = $(document.body).find('#user_address');
                  user_address.html("<a href='#tpl/address' class='addBox'><p><span class='buyer'></span><span class='buyerNum'></span></p><p class='buyerAdd'></p><i class='icon-locate addsp'></i></a>")
                  user_address.find('.buyer').html(name);
                  user_address.find('.buyerNum').html(phone);
                  user_address.find('.buyerAdd').html(address);
                  user_address.find('.addBox').attr('rid',rid)

                  window.location.href = '#tpl/orderConfirm';

                });

                  //清空inputAdd页面表单的数据
                  if ($('#border-box .name').length > 0) 
                  {
                      addMsg.msg = null;
                      $('#border-box .name').get(0).value = '';
                      $('#border-box .phone').get(0).value = '';
                      $('#border-box .postcodes').get(0).value = '';
                      $('#cmbXxdz').get(0).value = '';
                      document.getElementById('cmbProvince').innerHTML = '';
                      document.getElementById('cmbCity').innerHTML = '';
                      document.getElementById('cmbArea').innerHTML = '';
                      document.getElementById('cmbCity').style.display = 'none';
                      document.getElementById('cmbArea').style.display = 'none';
                  }


                    //判断有多少个地址
                    $('#new_address').on('touchend',function(){
                        if($(".myAdd").length>=10){
                          showTips({
                            'type':false,
                            'text':'最多可添加10个收货地址',
                            'time':2000
                          });
                          return
                        }else{
                          window.location.href = '#tpl/addressEdit'
                        }
                    })



            });
        }
    }
});
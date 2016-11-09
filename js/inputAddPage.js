define(function (require) {
<<<<<<< HEAD
    var tpl = require('tpl/address_edit.html');
=======
    var tpl = require('tpl/inputAdd.html');
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
    var aIn = require('js/ajax/socket/addressInputAddress');
    return {
        title: '新增收货地址',
        body: tpl,
        init: function () {
  
        },

        beforeopen : function(){
<<<<<<< HEAD
            // 重置滚动条到顶部
            $('.input-add-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').hide();
=======

>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
            loadjs('js/ajax/inputAddressAjax.js',function(){

            }); 

        }
    }
});
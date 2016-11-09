define(function (require) {
    var tpl = require('tpl/address_edit.html');
    var aIn = require('js/ajax/socket/addressInputAddress');
    return {
        title: '新增收货地址',
        body: tpl,
        init: function () {
  
        },

        beforeopen : function(){
            // 重置滚动条到顶部
            $('.input-add-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').hide();
            loadjs('js/ajax/inputAddressAjax.js',function(){

            }); 

        }
    }
});
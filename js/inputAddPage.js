define(function (require) {
    var tpl = require('tpl/inputAdd.html');
    var aIn = require('js/ajax/socket/addressInputAddress');
    return {
        title: '新增收货地址',
        body: tpl,
        init: function () {
  
        },

        beforeopen : function(){

            loadjs('js/ajax/inputAddressAjax.js',function(){

            }); 

        }
    }
});
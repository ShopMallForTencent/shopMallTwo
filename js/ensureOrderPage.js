define(function (require) {
    var tpl = require('tpl/ensure_order.html');
    // window.h5sdk = require('http://midas.gtimg.cn/h5sdk/js/api/h5sdk.js');
    var ecSocket = require('js/ajax/socket/ensureOrder_Cart');
    return {
        title: '订单确认',
        body: tpl,
        init: function () {
            // console.log(h5sdk)
        	//加载ajax脚本

            loadjs('js/ajax/ensureOrderAjax.js',function(){


            }); 


            console.log('done');
        }
    }
});
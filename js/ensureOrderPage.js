define(function (require) {
    var tpl = require('tpl/ensure_order.html');
    return {
        title: '订单确认',
        body: tpl,
        init: function () {

        	//加载ajax脚本
            loadjs('js/ajax/ensureOrderAjax.js',function(){

               





                

            }); 


            console.log('done');
        }
    }
});
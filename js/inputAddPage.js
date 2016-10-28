define(function (require) {
    var tpl = require('tpl/inputAdd.html');
    var addJs = require('js/inputAdd/inputAdd');
    return {
        title: '新增收货地址',
        body: tpl,
        init: function () {
            
        	addressInit('cmbProvince', 'cmbCity', 'cmbArea');

        }
    }
});
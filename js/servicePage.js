define(function (require) {
    var tpl = require('tpl/service.html');
    return {
        title: '售后服务',
        body: tpl,
        init: function () {
            console.log('done');
        },
        beforeopen : function(){
        	// 重置滚动条到顶部
        	$('.service-wrap .border-box').scrollTop(0,0);
        	// 控制底部导航栏状态
        	$('.nav-box').show();
        	$('.nav-box li').removeClass('on').eq(3).addClass('on');
        }
    }
});
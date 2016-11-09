define(function (require) {
    var tpl = require('tpl/help.html');
    return {
        title: '常见问题',
        body: tpl,
        init: function () {
            console.log('done');
        },
        beforeopen : function(){
        	// 重置滚动条到顶部
        	$('.problem-wrap .border-box').scrollTop(0,0);
        	// 控制底部导航栏状态
        	$('.nav-box').show();
        	$('.nav-box li').removeClass('on').eq(3).addClass('on');
        }
    }
});
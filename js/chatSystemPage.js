define(function (require) {
    var tpl = require('tpl/chat_system.html');
    return {
        title: '客服对话',
        body: tpl,
        init: function () {
        	
        },
        beforeopen: function(){
        	// 重置滚动条到顶部
        	$('.chat-system-wrap .border-box').scrollTop($('.chat-system-wrap .border-box').height());
        	// 控制底部导航栏状态
        	$('.nav-box').hide();
        },
        afteropen: function(){
            $('.chat-system-wrap .border-box').scrollTop($('.chat-system-wrap .border-box').height());
        }
    }
});
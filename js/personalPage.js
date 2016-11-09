define(function (require) {
    var tpl = require('tpl/me.html');
    var personalAjax = require('js/ajax/personalAjax')
    return {
        title: '个人中心',
        body: tpl,
        init: function () {
            // console.log('done');
        },
        beforeopen : function(){
            // 重置滚动条到顶部
            $('.personal-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').show();
            $('.nav-box li').removeClass('on').eq(3).addClass('on');
            // 加载个人信息
        	personalInfo();
        }
    }
});
define(function (require) {
    var tpl = require('tpl/my_address.html');
    return {
        title: '地址管理',
        body: tpl,
        init: function () {
           $(".setThisAdd").on("touchend",function(){
                  var oClass=$(this).find("i");
                  $(".setThisAdd").find("i").removeClass("icon-right").addClass("icon-setDefault");
                  $(".setThisAdd").find("span").text("设为默认");
                  oClass.removeClass("icon-setDefault").addClass("icon-right");
                  oClass.parent().find("span").text("默认地址");
                  var oDiv=$(this).parents(".myAdd");
                  console.log(oDiv)
                  $(oDiv).insertBefore($(".myAdd").eq(0));
            });
            //删除
            $(".delete").on("touchend",function(){
                    $(this).parents(".myAdd").remove();
            });
        }
    }
});
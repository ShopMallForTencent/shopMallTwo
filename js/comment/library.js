// 上传图片
(function($) {       
    $.imageFileVisible = function(options) {     
        // 默认选项
        var defaults = {    
            //包裹图片的元素
            wrapSelector: null,
            //包裹input的元素
            wrapInput: null,
            //<input type=file />元素
            fileSelector: null,
            //关闭按钮
            closeBtn: null,
            width : '100%',
            height: 'auto',
            errorMessage: "not picture",
            change: function(){}
        };    
        // Extend our default options with those provided.    
        var opts = $.extend(defaults, options);     
        $(opts.fileSelector).on("change",function(){
            var file = this.files[0];
            var imageType = /image.*/;
            if (file.type.match(imageType)) {
                var reader = new FileReader();
                reader.onload = function(){
                    var img = new Image();
                    img.src = reader.result;
                    $(img).width(opts.width);
                    $(img).height(opts.height);
                    $(opts.wrapSelector).append(img);
                };
                reader.readAsDataURL(file);
                opts.wrapInput.hide();
                opts.closeBtn.show();
                opts.change();
            } else{
                alert(opts.errorMessage);
                return false;
            }
        });
    }
})(Zepto);

function showTips(obj){
    showDialog.show({
        id:'pop-tips',      //需要弹出的id，如果是弹出页面上的div，则该选项为必选
        bgcolor:"#000",//弹出“遮罩”的颜色，格式为"#FF6600"，可选，默认为"#fff"
        opacity:50 //弹出“遮罩”的透明度，格式为｛10-100｝，可选
    });
    if (obj.type == true) {
        $('#pop-tips-icon').attr('class','icon-1');
    } else{
        $('#pop-tips-icon').attr('class','icon-2');
    }
    $('#pop-tips-text').html(obj.text);
    var timer = null;
    $('#_overlay_').on('touchend',function(){
        showDialog.hide();
        clearTimeout(timer);
    });
    timer = setTimeout(function(){
        showDialog.hide();
    },2000);
}
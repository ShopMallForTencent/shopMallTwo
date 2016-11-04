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

// 显示/隐藏弹窗
function showPop(e) {
    document.getElementById(e).style.display = 'block';
}
function hidePop(e) {
    document.getElementById(e).style.display = 'none';
}

// 显示提示框
function showTips(obj){
    showPop('pop-tips');
    var time = obj.time || 2000;
    if (obj.type == true) {  
        document.getElementById('pop-tips-icon').className = 'icon-1';
    } else{
        document.getElementById('pop-tips-icon').className = 'icon-2';
    }
    document.getElementById('pop-tips-text').innerHTML = obj.text;
    var timer = null;
    document.getElementById('pop-tips').addEventListener('touchend',function(){
        hidePop('pop-tips');
        clearTimeout(timer);
        return false;
    },false);
    timer = setTimeout(function(){
        hidePop('pop-tips');
    },time);
}

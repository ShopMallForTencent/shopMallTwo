var lcf_tab = function()    
{       
    //保存用户输入的配置    
    this.config = null;    
    
    //上一个按钮    
    this.oldBnt = null;    
    
    //初始化    
    this.init = function(obj)    
    {    
        this.config = {};    
         for(var i in obj)     
         {         
            this.config[i] = obj[i];      
         }     
    
         this.bind();    
    }    
    
    //添加事件    
    this.bind = function()    
    {    
        var self = this;    
    
        //获取按钮列表    
        var bntArr = document.getElementById(this.config.parent).getElementsByTagName(this.config.action);    
    
        //给按钮加上号码    
        for(var i=0; i<bntArr.length; i++)    
        {    
            bntArr[i].setAttribute('lcf_number', (i+1));    
        }    
    
        //记录上一个按钮    
        this.oldBnt = bntArr[0];    
    
        //添加事件    
        for(var i=0; i<bntArr.length; i++)    
        {    
            var bnt = bntArr[i];    
    
            if (this.config.event == 'touchend' || this.config.event == 'touchstart')     
            {    
                bnt.addEventListener( this.config.event, function(){    
    
                    self.dealEvebt(self, this);    
    
                }, false );    
            }    
            else    
            {    
                bnt[this.config.event] = function()    
                {       
                    self.dealEvebt(self, this);    
                }    
            }    
        }    
    },    
    
    //处理事件    
    this.dealEvebt = function(self, tag)    
    {    
        //处理点中的按钮    
        var idx = self.getIdx(tag);    
        var msgArr = self.config['bnt'+idx].split(',');    
        self.removeClass(tag, msgArr[1]);   
        self.addClass(tag, msgArr[0]);   
        if (msgArr[2] != 'null')   
        {  
            self.getById(msgArr[2]).style.display = 'block';   
        }   
    
        //处理上一个按钮    
        var oldIdx = self.getIdx(self.oldBnt);    
    
        //点击的是同一个按钮则return    
        if (idx == oldIdx) {return;}    
    
        var oldMsgArr = self.config['bnt'+oldIdx].split(',');    
        self.removeClass(self.oldBnt, oldMsgArr[0]);    
        self.addClass(self.oldBnt, oldMsgArr[1]);    
  
  
        if (oldMsgArr[2] != 'null')   
        {  
            self.getById(oldMsgArr[2]).style.display = 'none';    
        }  
  
  
        self.oldBnt = tag;    
    },    
    
    //添加类名    
    this.addClass = function(obj, className)    
    {    
        var p = new RegExp(className);    
    
        //已经加过这个类名的则return    
        if ( p.test(obj.className) ) {return;}    
    
        obj.className = obj.className + ' ' + className;    
    },    
    
    //移除类名    
    this.removeClass = function(obj, className)    
    {    
        var length = className.length;   
  
  
        //要匹配的正则    
        var p = new RegExp(className);    
    
        //    
        var objClassName = obj.className;    
    
        //匹配到的话代表有这个字符    
        if (p.test(objClassName) )     
        {    
            //截取匹配到的字符    
            var str = className.substr( className.search(p), length+1 );    
    
            var px2 = new RegExp(str);    
  
  
            obj.className = obj.className.replace(px2,'');    
        }  
  
  
        //判断类名最后是否有一个空格存在  
        var lastP = /\s$/;  
        if( lastP.test(obj.className) )  
        {  
            obj.className = obj.className.substr(0, obj.className.length - 1);  
        }     
    },    
    
    //获取点中的按钮的位置是第几个    
    this.getIdx = function(obj)    
    {    
        return obj.getAttribute('lcf_number')    
    },    
    
    //id找节点    
    this.getById = function(id)        
    {        
        return document.getElementById(id);    
    }      
    
};

//关闭弹窗函数
function closeDialog(id)
{
    document.getElementById(id).style.display = 'none';
}

//显示弹窗函数
function showDialog(id)
{
    document.getElementById(id).style.display = 'block';
}

define(function () {
    return lcf_tab;
});
var lcf_tab = function()    
{       
    //�����û����������    
    this.config = null;    
    
    //��һ����ť    
    this.oldBnt = null;    
    
    //��ʼ��    
    this.init = function(obj)    
    {    
        this.config = {};    
         for(var i in obj)     
         {         
            this.config[i] = obj[i];      
         }     
    
         this.bind();    
    }    
    
    //����¼�    
    this.bind = function()    
    {    
        var self = this;    
    
        //��ȡ��ť�б�    
        var bntArr = document.getElementById(this.config.parent).getElementsByTagName(this.config.action);    
    
        //����ť���Ϻ���    
        for(var i=0; i<bntArr.length; i++)    
        {    
            bntArr[i].setAttribute('lcf_number', (i+1));    
        }    
    
        //��¼��һ����ť    
        this.oldBnt = bntArr[0];    
    
        //����¼�    
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
    
    //�����¼�    
    this.dealEvebt = function(self, tag)    
    {    
        //������еİ�ť    
        var idx = self.getIdx(tag);    
        var msgArr = self.config['bnt'+idx].split(',');    
        self.removeClass(tag, msgArr[1]);   
        self.addClass(tag, msgArr[0]);   
        if (msgArr[2] != 'null')   
        {  
            self.getById(msgArr[2]).style.display = 'block';   
        }   
    
        //������һ����ť    
        var oldIdx = self.getIdx(self.oldBnt);    
    
        //�������ͬһ����ť��return    
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
    
    //�������    
    this.addClass = function(obj, className)    
    {    
        var p = new RegExp(className);    
    
        //�Ѿ��ӹ������������return    
        if ( p.test(obj.className) ) {return;}    
    
        obj.className = obj.className + ' ' + className;    
    },    
    
    //�Ƴ�����    
    this.removeClass = function(obj, className)    
    {    
        var length = className.length;   
  
  
        //Ҫƥ�������    
        var p = new RegExp(className);    
    
        //    
        var objClassName = obj.className;    
    
        //ƥ�䵽�Ļ�����������ַ�    
        if (p.test(objClassName) )     
        {    
            //��ȡƥ�䵽���ַ�    
            var str = className.substr( className.search(p), length+1 );    
    
            var px2 = new RegExp(str);    
  
  
            obj.className = obj.className.replace(px2,'');    
        }  
  
  
        //�ж���������Ƿ���һ���ո����  
        var lastP = /\s$/;  
        if( lastP.test(obj.className) )  
        {  
            obj.className = obj.className.substr(0, obj.className.length - 1);  
        }     
    },    
    
    //��ȡ���еİ�ť��λ���ǵڼ���    
    this.getIdx = function(obj)    
    {    
        return obj.getAttribute('lcf_number')    
    },    
    
    //id�ҽڵ�    
    this.getById = function(id)        
    {        
        return document.getElementById(id);    
    }      
    
};

//�رյ�������
function closeDialog(id)
{
    document.getElementById(id).style.display = 'none';
}

//��ʾ��������
function showDialog(id)
{
    document.getElementById(id).style.display = 'block';
}

define(function () {
    return lcf_tab;
});
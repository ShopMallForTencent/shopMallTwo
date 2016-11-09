define(function (require) {
    var tpl = require('tpl/order_confirm.html');
    var ecSocket = require('js/ajax/socket/ensureOrderCart');
    var eaAjax = require('js/ajax/ensureOrderAjax');
    var ewSocket = require('js/ajax/socket/ensureOrderWare');
    return {
        title: '订单确认',
        body: tpl,
        init: function () {
            console.log('done');

            /*支付接口*/
            $('.goPay').on('touchend',function(){
                console.log( Ec_Socket.dir )
                var luj ;
                if(Ec_Socket.dir==='购物车')
                {
                    luj="c"
                }
                else
                {
                    luj="p"
                }
                var proArr = [];
                bid=$('.shopList').attr('bid');
                rid=$('.addBox').attr('rid');
                
                $('.itemList').each(function(i){
                    proArr[i] = {};
                    proArr[i]['p_id'] = $(this).attr('pid');
                    proArr[i]['quantity'] = $(this).attr('qty');
                })
                var pro = JSON.stringify(proArr)
                // console.log(JSON.stringify(proArr))
                console.log("来自于"+luj+","+"rid:"+rid+","+"bid:"+bid+","+"products:"+pro)
                
                $.ajax({
                    url: ajaxPath + '/order/toPay',
                    type : 'POST',
                    dataType: 'json',
                    xhrFields: {withCredentials: true},
                    crossDomain: true,
                    data : 
                    {
                        "r_id":rid,
                         "b_id":bid,
                         "products":pro,
                         "from":luj
                    },
                    success: function(data){
                        console.log(data.result + '?????????????');
                        console.log("appid:"+data.result.appid);
                        console.log("url_params:"+data.result.url_params);
                        console.log("openid:"+data.result.openid);
                        var appid = data.result.appid;
                        var url = data.result.url_params;
                        var openid = data.result.openid;
                        if(data.ret==0)
                        {
                            midasPay(appid,openid,url);
                        }
                        //没有地址，提示弹窗
                        else
                        {
                            showTips({
                                'type':false,
                                'text':'没有默认的收货地址！',
                                'time':2000
                            });
                        }    
                    },
                    error : function(err){
                      alert(err);
                    }
                }); 
            })

            //支付
            function midasPay(appid,openid,goodstokenurl) {
                     var params = {};
                     params['pf'] = 'midas_group_pay-1000-html5-1000';
                     params['appid'] = appid;
                     params['type'] = 'goods';
                     params['openid'] = openid;
                     params['usewxappid'] = '1';
                     params['goodstokenurl'] = goodstokenurl;
                     seajs.use(['http://midas.gtimg.cn/h5sdk/js/api/h5sdk.js'], function (h5sdk) {
                        h5sdk.pay({
                         hide_ui:1,
                         sandbox: false,//是否调用米大师的沙箱环境
                         https: false,
                         methods: {
                                 onready: function () {
                                 //一定要在在onReady事件触发后才可以传入参数
                                 h5sdk.remote.setBuyInfo(params);}, onPayEnd: function (code, msg) {
                                   switch (code) {
                                   case 2:
                                    //alert('等待系统处理，请稍候查询');
                                    showTips({
                                        'type':false,
                                        'text':'等待系统处理，请稍候查询',
                                        'time':2000
                                    });
                                   break;
                                   case 0:
                                       //alert('已取消支付');
                                       showTips({
                                            'type':false,
                                            'text':'已取消支付',
                                            'time':2000
                                        });
                                      break;
                                   case 1:
                                       //alert('支付成功');
                                       showTips({
                                            'type':false,
                                            'text':'支付成功',
                                            'time':2000
                                        });
                                       window.location.href = "#tpl/me"
                                   break;
                                   default:
                                       // alert('系统正忙请稍候再试！'+code);
                                       showTips({
                                            'type':false,
                                            'text':'系统正忙请稍候再试！'+code,
                                            'time':2000
                                        });
                                       window.location.href = "#tpl/category"
                                   break;
                                 }
                             }
                         }
                     },{direct_pay_channel:'wechat'});
                     })
                     
                 };
        },
        beforeopen : function(){
            // 重置滚动条到顶部
            $('.ensure-order-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').hide();
            ensureOList();
        }
    }
});
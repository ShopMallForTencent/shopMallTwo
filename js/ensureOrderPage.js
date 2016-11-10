define(function (require) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
    var tpl = require('tpl/order_confirm.html');
    var ecSocket = require('js/ajax/socket/ensureOrderCart');
    var eaAjax = require('js/ajax/ensureOrderAjax');
    var ewSocket = require('js/ajax/socket/ensureOrderWare');
<<<<<<< HEAD
=======
=======
    var tpl = require('tpl/ensure_order.html');
    // window.h5sdk = require('http://midas.gtimg.cn/h5sdk/js/api/h5sdk.js');
    var ecSocket = require('js/ajax/socket/ensureOrder_Cart');
    var eaAjax = require('js/ajax/ensureOrderAjax');
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
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
<<<<<<< HEAD
                var proArr = [];
                bid=$('.shopList').attr('bid');
                rid=$('.addBox').attr('rid');
                
=======
<<<<<<< HEAD
                var proArr = [];
                bid=$('.shopList').attr('bid');
                rid=$('.addBox').attr('rid');
                
=======
                console.log(luj)
                var proArr = [];
                bid=$('.shopList').attr('bid');
                rid=$('.addBox').attr('rid');
                console.log(rid)
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
                $('.itemList').each(function(i){
                    proArr[i] = {};
                    proArr[i]['p_id'] = $(this).attr('pid');
                    proArr[i]['quantity'] = $(this).attr('qty');
                })
                var pro = JSON.stringify(proArr)
<<<<<<< HEAD
                // console.log(JSON.stringify(proArr))
                console.log("来自于"+luj+","+"rid:"+rid+","+"bid:"+bid+","+"products:"+pro)
                
=======
<<<<<<< HEAD
                // console.log(JSON.stringify(proArr))
                console.log("来自于"+luj+","+"rid:"+rid+","+"bid:"+bid+","+"products:"+pro)
                
=======
                console.log(JSON.stringify(proArr))
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
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
<<<<<<< HEAD
                        console.log(data.result + '?????????????');
=======
<<<<<<< HEAD
                        console.log(data.result + '?????????????');
=======
                        console.log(data);
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
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
                                'text':'没有收货地址！',
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
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
<<<<<<< HEAD
=======
=======
                                    alert('等待系统处理，请稍候查询');
                                   break;
                                   case 0:
                                       alert('已取消支付');
                                      break;
                                   case 1:
                                       alert('支付成功');
                                       window.location.href = "#tpl/personal"
                                   break;
                                   default:
                                       alert('系统正忙请稍候再试！'+code);
                                       window.location.href = "#tpl/sort"
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
                                   break;
                                 }
                             }
                         }
                     },{direct_pay_channel:'wechat'});
                     })
                     
                 };
        },
        beforeopen : function(){
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
            // 重置滚动条到顶部
            $('.ensure-order-wrap .border-box').scrollTop(0,0);
            // 控制底部导航栏状态
            $('.nav-box').hide();
<<<<<<< HEAD
=======
=======

>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
            ensureOList();
        }
    }
});
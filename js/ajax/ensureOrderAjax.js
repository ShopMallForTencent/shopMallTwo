$.ajax({
	url: Ec_Socket.dir == 'null'? ajaxPath + '/product/confirmation' : ajaxPath + '/cart/confirmation',
	type : 'GET',
	dataType: 'jsonp',
	data : Ec_Socket.dir == 'null'? {"p_id" : 234, "g_id" : 999, "b_id" : 1} : {"p_ids" : Ec_Socket.data[0],"b_id" : Ec_Socket.data[1]},
	success: function(data){

// console.log(data.result)

		//填充内容到html
		var eorder_data = {
	        isAdmin: true,
	      	msg : data.result
	    }

	    var elist = template('address_art', eorder_data);
	    document.getElementById('user_address').innerHTML = elist;

	    var wlist = template('warelist_art', eorder_data);
	    document.getElementById('shopList').innerHTML = wlist;

	    var plist = template('countFee_art', eorder_data);
	    document.getElementById('countFee').innerHTML = plist;

	},
	error : function(){
	   console.log('fail');
	}
}); 

/***template部分*****/

/*计算价格*/
template.helper('getPrice', function (obj, yf) {

	var price = [];

	for(var i=0; i<obj.length; i++)
	{
		price.push(parseInt(obj[i].price) * parseInt(obj[i].quantity));
	}

	var result = 0;

	for(var i=0; i<price.length; i++){
		result+=price[i];
	}

	if (typeof yf != 'undefined') {
		result+=parseInt(yf);
	};

    return result; 
});

/*获取总价格，包括邮费*/
template.helper('altogetherGetPrice', function (obj) {
    return parseInt((obj[0] * obj[1])) + parseInt(obj[2]); 
});

/*支付接口*/
$('.goPay').on('touchend',function(){

	console.log( Ec_Socket.dir )

	var luj ;
	if(Ec_Socket.dir==='购物车'){
		luj="c"
	}else{
		luj="p"
	}
	console.log(luj)
	var proArr = [];
	bid=$('.shopList').attr('bid');
	rid=$('.addBox').attr('rid');
	console.log(rid)
	$('.itemList').each(function(i){
		proArr[i] = {};
		proArr[i]['p_id'] = $(this).attr('pid');
		proArr[i]['quantity'] = $(this).attr('qty');
	})
	var pro = JSON.stringify(proArr)
	 console.log(JSON.stringify(proArr))
	$.ajax({
		url: ajaxPath + '/order/toPay',
		type : 'POST',
		dataType: 'json',
		xhrFields: {withCredentials: true},
	    crossDomain: true,
		data : {"r_id":rid,
				"b_id":bid,
				"products":pro,
				"from":luj
			},
		success: function(data){
			console.log(data)
			console.log("appid:"+data.result.appid)
			console.log("url_params:"+data.result.url_params)
			console.log("openid:"+data.result.openid)
			var appid = data.result.appid;
			var url = data.result.url_params;
			var openid = data.result.openid;
			if(data.ret==0){
				midasPay(appid,openid,url)
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
                        alert('等待系统处理，请稍候查询');
                       break;
                       case 0:
                           alert('已取消支付');
                           window.location.href = "#tpl/ensureOrder"
                          break;
                       case 1:
                    	   alert('支付成功');
                    	   window.location.href = "#tpl/personal"
                       break;
                       default:
                    	   alert('系统正忙请稍候再试！'+code);
                    	   window.location.href = "#tpl/sort"
                       break;
                     }
                 }
             }
         },{direct_pay_channel:'wechat'});
		 })
		 
	 };
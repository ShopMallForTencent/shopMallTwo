//ajax请求
function wareList(func){

	$.ajax({
		url: ajaxPath + '/goods/getById&g_id=999',
		type : 'POST',
		dataType: 'json',
		xhrFields: {withCredentials: true},
		crossDomain: true,
		success: function(data){
			console.log(data.result)

		   //填充内容到html
		    var banner_data = {
		      isAdmin: true,
		      public_list : data.result,
		      bannerImg_list: data.result.banner,
		      introduction : data.result.introduction,
		      name : data.result.name,
		      price : data.result.price,
		      market_price : data.result.market_price,
		      sales : data.result.sales,
		      t_stock : data.result.t_stock,
		      g_specification : data.result.g_specification,
		      p_specification : data.result.p_specification,
		      review : data.result.review,
		      countent : data.result.countent,
		      parameter : data.result.parameter
		    };

		    var bannerImg = template('banner', banner_data);
		    document.getElementById('swiper-wrapper').innerHTML = bannerImg;

		    var introduction = template('ware_msg_art', banner_data);
		    document.getElementById('ware_msg').innerHTML = introduction;

		    var ware_price_art = template('ware_price_art', banner_data);
		    document.getElementById('ware_price').innerHTML = ware_price_art;

		    var ljgm_art = template('ljgm_art', banner_data);
		    document.getElementById('sp_color_gm').innerHTML = ljgm_art;
		    document.getElementById('sp_color_jrgwc').innerHTML = ljgm_art;

		    var review_art = template('user_art', banner_data);
		    document.getElementById('user_comment').innerHTML = review_art;

		    var countent_art = template('spxq_art', banner_data);
		    document.getElementById('spxq').innerHTML = countent_art;

		    var parameter_art = template('ggcs_art', banner_data);
		    document.getElementById('ggcs').innerHTML = parameter_art;

		    var user_pj_art = template('user_pj_art', banner_data);
		    document.getElementById('discuss_pj').innerHTML = user_pj_art;

		    var sp_val_ljgm_art = template('sp_val_ljgm_art', banner_data.public_list);
		    document.getElementById('sp_val_ljgm').innerHTML = sp_val_ljgm_art;
		    document.getElementById('sp_val_jrgwc').innerHTML = sp_val_ljgm_art;

		    var sp_price_ljgm_art = template('sp_price_ljgm_art', banner_data.public_list);
		    document.getElementById('sp_price_ljgm').innerHTML = sp_price_ljgm_art;
		    document.getElementById('sp_price_jrgwc').innerHTML = sp_price_ljgm_art;

		    ajax_Success(data.result.p_specification);
		    jrgwc(data);
		    ljgm(data);

		    func();
		},
		error : function(){

		  console.log('fail')
		}
	});

}
 



//定义全局变量
var that=null;
var selArr=[];
var selCancel = false;
//ajax请求成功后调用
function ajax_Success(arr)
{ 
	//头图轮播脚本
	var swiper_container = $('#swiper-container');
	var length = $('#swiper-container .swiper-slide').length;
	var sp_idx =  $('#swiper-container .sp_idx');
	sp_idx.html('1/' + length);

	var mySwiper = new Swiper('.swiper-container',{
	    onSlideChangeEnd:function(swiper){ 
	        sp_idx.html(swiper.activeIndex+1 + '/' + length);
	    }
	});

	//弹窗按钮选中脚本
	sel('#sp_color_gm') //立即购买
	sel('#sp_color_jrgwc')//加入购物车
	
	function sel(Did){
		$(Did + ' a').on('touchend', function(){
			if(this.className.indexOf('select') != -1) { //取消   
			  	selCancel = true
			  	$(this).removeClass('select');
			  	var selectBnt = getSelectBnt($(Did + ' a'));
			  	selg($(this).attr("zdy"),arr,$(Did + ' a'))
			} else if (this.className.indexOf('no') == -1) { //选中
				selCancel = false
			  	selg($(this).attr("zdy"),arr,$(Did + ' a'))
			  	$(this).addClass('select');  	
			}	
			//插入图片和价格到弹窗上
		  	for(var i=0; i<arr.length; i++){
			 	var p_s = arr[i].p_s;
			 	if (isContained(p_s, selArr)) {
			 	 	//console.log($(Did).get(0))
			 	 	var img = arr[i].image;
			 	 	var price = arr[i].price;
			 	 	var kc = arr[i].stock;
					//购物车弹窗
			 	 	if (Did == '#sp_color_jrgwc') {
			 	 		$('#jrgwc .imgbox em img').get(0).src = img;
			 	 	 	$('#jrgwc .sp_price_text .p2 span').html(price/100);
			 	 	 	$('#jrgwc .kc').html(kc);
			 	 	} else {
			 	 	 	$('#ljgm .imgbox em img').get(0).src = img;
			 	 	 	$('#ljgm .sp_price_text .p2 span').html(price/100);
			 	 	 	$('#ljgm .kc').html(kc);
			 	 	}
			 	 	break;
			 	 }
			}
		});
	}
}


function selg(zdy,arr,Did){
	if(Did.selector!=that){
			selArr=[]
		}
	that = Did.selector
	
	if(selCancel){
		for(var i=0; i<selArr.length; i++){
			if(zdy==selArr[i]){
				selArr.splice(i,1)
			}
		}
	}else{
		selArr.push(zdy)
	}
	if(selArr.length>=1){
		pds( selArr, arr,Did );
	}else{
		Did.removeClass('no');
		return;
	}
}

function pds(bntArr, arr,Did)
{	
	//拿到所有选中的按钮
	var selectBnt = bntArr;

	//判断arr数组中，是否包含按钮的zdy
	var result = [];
	for(var i=0; i<arr.length; i++)
	{
		var ps = arr[i].p_s;
    	if(isContained(ps,selectBnt)){
    		result.push(ps)
    	}	
	}

	for(var k=0; k<Did.length; k++)
	{
		var bnt = Did.eq(k);	
		//result中不包含bnt的zdy，则变灰
		if(!isHaveValue(parseInt(bnt.attr('zdy')), result))
		{
			bnt.addClass('no');
		}
		else
		{
			bnt.removeClass('no');
		}
	}
}


function getSelectBnt(bntArr)
{
	var selectBnt = [];
	for(var i=0; i<bntArr.length; i++)
	{
		var bnt = bntArr.eq(i);
		if (bnt.hasClass('select')) 
		{
			selectBnt.push(bnt);
		}
	}

	return selectBnt;
}

function isHaveValue(bntZdy, result) // bnt = 1, result[0] = 2
{
	var flag = false;
	
	for(var i=0; i<result.length; i++)
	{
		for(var j=0; j<result[i].length; j++)
		{
			var val = result[i][j];
			
			if( val == bntZdy){
				return true;
			}
		}
	}
	
	return false;
}

// 判断一个数组是否包含另一个数组
function isContained(a, b){
    if(!(a instanceof Array) || !(b instanceof Array)) return false;
    if(a.length < b.length) return false;
    var aStr = a.toString();
    for(var i = 0, len = b.length; i < len; i++){
       if(aStr.indexOf(b[i]) == -1) return false;
    }
    return true;
}

//弹窗里的加入购物车请求
function jrgwc(data)
{	
	$('#jrgwc .jrgwcbnt').on('touchend', function(){

		//判断用户是否选择所有规格参数
		if ( parseInt($('#jrgwc .select').length) < parseInt(data.result.g_specification.length) ) 
		{
			showTips({
	            'type':false,
	            'text':'你尚未选中商品',
	            'time':2000
	         });
			return;
		}
		//确定p_id
		var p_id = null;
		var img = null;
		var price = null;
		for(var i=0; i<data.result.p_specification.length; i++)
		{
			var p_s = data.result.p_specification[i].p_s;
			if (isContained(p_s, selArr)) 
			{
				p_id = data.result.p_specification[i].p_id;
				img = data.result.p_specification[i].image;
				price = data.result.p_specification[i].price;////////////////////////////////////////////////////////////////////////////////

				break;
			}
		}

		if (p_id != null) 
		{
			$.ajax({
				url: ajaxPath + '/cart/add',
				type : 'POST',
				dataType: 'json',
				xhrFields: {withCredentials: true},
			    crossDomain: true,
				data : {
					"quantity" : parseInt($('#jrgwc .text_box').html()),
					 "p_id" : p_id, 
					 "g_id" : data.result.g_id
				},
				success: function(data){

					//显示加入购物车成功
					var jrgwc = $('#jrgwc');
					jrgwc.addClass('gmtc_show');
					jrgwc.find('.shop_car_success').show();
					setTimeout(function(){
						jrgwc.find('.shop_car_success').hide();
						setTimeout(function(){
							closeDialog('jrgwc');
						},250);
					},2000);
				},
				error : function(){
				   alert('加入购物车失败！');
				}
			});
		}
		else
		{
			alert('p_id为空！')
		}
	 
	});
}

//弹窗里的立即购买请求
function ljgm(data)
{	
	$('#ljgm .ljgmbnt').on('touchend', function(){

		//判断用户是否选择所有规格参数
		if ( parseInt($('#ljgm .select').length) < parseInt(data.result.g_specification.length) ) 
		{
			showTips({
	            'type':false,
	            'text':'你选择商品的所有规格 ！',
	            'time':2000
	         });
			return;
		}
		//确定p_id
		var p_id = null;
		var img = null;
		var price = null;
		for(var i=0; i<data.result.p_specification.length; i++)
		{
			var p_s = data.result.p_specification[i].p_s;
			if (isContained(p_s, selArr)) 
			{
				p_id = data.result.p_specification[i].p_id;
				img = data.result.p_specification[i].image;
				price = data.result.p_specification[i].price;////////////////////////////////////////////////////////////////////////////////

				break;
			}
		}

		if (p_id != null) 
		 {   //console.log(0)
			$.ajax({
				url: ajaxPath + '/member/confirmationToPay',
				type : 'get',
				dataType: 'json',
				data : {
					"quantity" : parseInt($('#ljgm .text_box').html()),
					 "p_id" : p_id, 
					 "g_id" : data.result.g_id,
					 "b_id" : data.result.b_id,
					 "from" : "p"
				},
				success: function(dt){
					console.log(dt.result[0].receiver)
					Ec_Socket.dir = 'p';
					Ew_Socket.data = {
						"quantity" : parseInt($('#ljgm .text_box').html()),
						 "p_id" : p_id, 
						 "g_id" : data.result.g_id,
						 "b_id" : data.result.b_id
					};

					window.location = '#tpl/orderConfirm';
				},
				error : function(){
				   alert('购买失败！');
				}
			});
		}
		else
		{
			alert('p_id为空！')
		}
	 
	});
}

/********template部分********/

//评价的star
template.helper('dateFormat', function (score) {
	var scoreArr = [];
	scoreArr.push(String(score).split("."))	
	var result = "";
	for(var i=0; i<parseInt(scoreArr[0][0]); i++){
		result+="<em class='star dil lsp red'></em>";
	}
	if(scoreArr[0].length>1){
		result +="<em style='width:"+parseInt(scoreArr[0][1])/10*1.35+"rem'"+"class='star dil lsp red'></em>"
	}
    return result; 
});

//评价的图片
template.helper('getUserImage', function (imagelist) {
	var result = '';
	imagelist = eval("("+imagelist+")"); 
	for(var i=0; i<imagelist.length; i++)
	{
		var imgPath = imagelist[i];
		result+="<li class='fl dil'><img src="+imgPath+"></li>";
	}
    return result; 
});

//规格参数
template.helper('wareSpecifications', function (obj) {
	var result ='';
	 for(var i=0; i<obj.length; i++){
	 	result +='<tr><th colspan="2"><strong>'+obj[i].p_name+'</strong></th></tr>';
	 	for(var j=0; j<obj[i].p_value.length; j++){
	 		result += '<tr><td class="tdo">'+obj[i].p_value[j].pg_name+'</td><td>'+obj[i].p_value[j].pg_value+'</td></tr>'
	 	}
	 }
    return result; 
});

 














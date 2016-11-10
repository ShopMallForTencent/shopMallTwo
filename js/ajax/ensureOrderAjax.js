function ensureOList(){
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
	
	/*
		cart/confirmation 	 : 购物车页去结算
		product/confirmation : 商品详情页立即购买
	*/

	//商品详情页立即购买
	if (Ew_Socket.data != null) 
	{
		$.ajax({
			url: ajaxPath + '/product/confirmation' ,
			type : 'GET',
			dataType: 'jsonp',
			data : {
				"p_id" : Ew_Socket.data['p_id'], 
				"g_id" : Ew_Socket.data['g_id'], 
				"b_id" : Ew_Socket.data['b_id'], 
				"quantity" : Ew_Socket.data['quantity']
			}, 
			success: function(data){

				//填充内容到html
				var eorder_data = {
			      	msg : data.result,
			    }
			    console.log(isFirst)
			   if(isFirst){

			   	var elist = template('address_art', eorder_data);
			    document.getElementById('user_address').innerHTML = elist;
			    isFirst=false
			   }
			    

			    var wlist = template('warelist_art', eorder_data);
			    document.getElementById('shopList').innerHTML = wlist;

			    var plist = template('countFee_art', eorder_data);
			    document.getElementById('countFee').innerHTML = plist;

			},
			error : function(){
			   console.log('fail');
			}
		});
	}

	//购物车页去结算
	else
	{
		if (Ec_Socket.data.length <= 0) 
		{	
			window.location.href = '#tpl/cart';
			return;
		}

		var eorder_data = {
	      	msg : Ec_Socket.data.result
	    }
	    if(isFirst){
		 var elist = template('address_art', eorder_data);
		 document.getElementById('user_address').innerHTML = elist;
		 isFirst=false
	    }
	     

		var wlist = template('warelist_art', eorder_data);
		document.getElementById('shopList').innerHTML = wlist;

		var plist = template('countFee_art', eorder_data);
		document.getElementById('countFee').innerHTML = plist;

	}
<<<<<<< HEAD
=======
=======

	$.ajax({
		url: Ec_Socket.dir == 'null'? ajaxPath + '/product/confirmation' : ajaxPath + '/cart/confirmation',
		type : 'GET',
		dataType: 'jsonp',
		data : Ec_Socket.dir == 'null'? {"p_id" : 234, "g_id" : 999, "b_id" : 1} : {"p_ids" : Ec_Socket.data[0],"b_id" : Ec_Socket.data[1]},
		success: function(data){

			//填充内容到html
			var eorder_data = {
		      	msg : data.result,
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
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a

}





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

<<<<<<< HEAD
    return result / 100; 
=======
<<<<<<< HEAD
    return result / 100; 
=======
    return result; 
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
});

/*获取总价格，包括邮费*/
template.helper('altogetherGetPrice', function (obj) {
    return parseInt((obj[0] * obj[1])) + parseInt(obj[2]); 
});





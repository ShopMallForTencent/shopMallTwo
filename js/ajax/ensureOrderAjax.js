$.ajax({
	url: ajaxPath + '/product/confirmation',
	// url: ajaxPath + '/cart/confirmation&b_id=1&p_ids=123,234',
	type : 'GET',
	dataType: 'jsonp',
	data : {"p_id" : 234, "g_id" : 999, "b_id" : 1},
	// data : {"p_ids" : '123,234', "b_id" : 1},
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
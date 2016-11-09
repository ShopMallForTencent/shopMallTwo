//购物车列表
function cartList(func){
		$.ajax({
		url:ajaxPath + '/cart/list',
		type:'GET',
		dataType:'jsonp',
		success:function (data) {
			console.log(data)
<<<<<<< HEAD
=======
			console.log(data.result[0].product[0].p_id)
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
			var cartData = {
				isAdmin: true,
				bName:data.result
			};
			var cartHtml = template('carttemplate', cartData);
			document.getElementById('cartSort').innerHTML = cartHtml;
			func();
		},
		error:function () {
			console.log('fail');
		}
	})
}



// 删除购物车
function delPro (productID) {
	console.log("productID:"+productID)
	$.ajax({
		url:ajaxPath + '/cart/del',
<<<<<<< HEAD
		type : 'POST',
		dataType: 'json',
		xhrFields: {withCredentials: true},
	    crossDomain: true,
		data : {"p_ids" : productID},
		success:function (data) {
			console.log(data.msg)
=======
		type:'GET',
		dataType:'jsonp',
		data : {"p_ids" : productID},
		success:function (data) {
		console.log(data.msg)
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98


		},
		error:function () {
		console.log('fail')
		}
	})
}

// 改变购物车商品数量

function addProNum (productID,ProNum) {
<<<<<<< HEAD

=======
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
	console.log("productID:"+productID+","+"ProNum:"+ProNum)
	$.ajax({
		url:ajaxPath + '/cart/change',
		type : 'POST',
		dataType: 'json',
		xhrFields: {withCredentials: true},
	    crossDomain: true,
		data : {"p_id" : productID,"quantity" : ProNum},
		success:function (data) {
		console.log(data.msg)
<<<<<<< HEAD
		console.log("改变购物车商品数量")
=======

>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98

		},
		error:function () {
		console.log('fail')
		}
	})
}

//去结算
function buyPro (productID,Bid) {
<<<<<<< HEAD

=======
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
	console.log("productID:"+productID+","+"b_id:"+Bid)
	$.ajax({
		url:ajaxPath + '/cart/confirmation',
		type:'GET',
		dataType:'jsonp',
		data : {"p_ids" : productID,"b_id" : Bid},
		success:function (data) {
<<<<<<< HEAD
			
			//有货
			if (data.ret != 4009) 
			{
				Ec_Socket.dir = '购物车';
				Ec_Socket.data = data;
				window.location.href = '#tpl/orderConfirm';
			}
			else
			{
				showTips({
		            'type':false,
		            'text':'库存不足',
		            'time':2000
		         });
			}
			
=======
		console.log(data.msg)
			Ec_Socket.dir = '购物车';
			Ec_Socket.data.push(productID);
			Ec_Socket.data.push(Bid);
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
		},
		error:function () {
		console.log('fail')
		}
	})
}


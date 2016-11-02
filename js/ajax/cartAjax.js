$.ajax({
	url:ajaxPath + '/cart/list',
	type:'GET',
	dataType:'jsonp',
	success:function (data) {
		console.log(data)
		console.log(data.result[0].product[0].p_id)
		var cartData = {
			isAdmin: true,
			bName:data.result
		};
		var cartHtml = template('carttemplate', cartData);
		document.getElementById('cartSort').innerHTML = cartHtml;
		
	},
	error:function () {
		console.log('fail')
	}
})



// 删除购物车
function delPro (productID) {
	console.log("productID:"+productID)
	$.ajax({
		url:ajaxPath + '/cart/del',
		type:'GET',
		dataType:'jsonp',
		data : {"p_ids" : productID},
		success:function (data) {
		console.log(data.msg)


		},
		error:function () {
		console.log('fail')
		}
	})
}

// 改变购物车商品数量

function addProNum (productID,ProNum) {
	console.log("productID:"+productID+","+"ProNum:"+ProNum)
	$.ajax({
		url:ajaxPath + '/cart/change',
		type:'GET',
		dataType:'jsonp',
		data : {"p_id" : productID,"quantity" : ProNum},
		success:function (data) {
		console.log(data.msg)


		},
		error:function () {
		console.log('fail')
		}
	})
}
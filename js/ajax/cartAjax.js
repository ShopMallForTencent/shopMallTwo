$.ajax({
	url:ajaxPath + '/cart/list',
	type:'GET',
	dataType:'jsonp',
	success:function (data) {
		console.log(data)
		console.log(data.result[0].product[0].specification)
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

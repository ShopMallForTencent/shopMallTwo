// 订单页面数据请求-根据状态请求
function orderPageInfo (status,page_size,cur_page,callback) {
	$.ajax({
		url:ajaxPath + '/order/listByStatus',
		type:'GET',
		dataType:'jsonp',
		data:{"status":status,"page_size":page_size,"cur_page":cur_page},
		success:function (data) {
			console.log(data)
			var orderPageData = {
				isAdmin: true,
				bName:data.result
			};
			var orderPageHtml = template('orderPagetemplate', orderPageData);
			document.getElementById('order-page-lists').innerHTML = orderPageHtml;
			if (callback) {callback();};
		},
		error:function () {
			console.log('fail');
		}
	});
}
// 订单页面数据请求-全部退货订单查询
function orderPageReturnAll (page_size,cur_page,callback) {
	$.ajax({
		url:ajaxPath + '/order/listAll',
		type:'GET',
		dataType:'jsonp',
		data:{"page_size":10,"cur_page":1},
		success:function (data) {
			console.log(data)
			var orderPageData = {
				isAdmin: true,
				bName:data.result
			};
			var orderPageHtml = template('orderPagetemplate', orderPageData);
			document.getElementById('order-page-lists').innerHTML = orderPageHtml;
			if (callback) {callback();};
		},
		error:function () {
			console.log('fail');
		}
	});
}
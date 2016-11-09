// 首页数据请求
function indexBanner (callback) {
	$.ajax({
		url:ajaxPath + '/ad/listByPositionId',
		type:'GET',
		dataType:'jsonp',
		data:{'a_p_id':22},
		success:function (data) {
			console.log(data)
			var indexBannerData = {
				isAdmin: true,
				bName:data.result
			};
			var indexBannerHtml = template('indexbannertemplate', indexBannerData);
			document.getElementById('banner-box').innerHTML = indexBannerHtml;
			if (callback) {callback();};
		},
		error:function () {
			console.log('fail');
		}
	});
}
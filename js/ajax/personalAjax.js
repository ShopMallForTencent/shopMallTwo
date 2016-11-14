//个人中心展示
function personalInfo (callback) {
	$.ajax({
		url:ajaxPath + '/member/center',
		type:'GET',
		dataType:'jsonp',
		success:function (data) {
			console.log(data)
			var personalData = {
				isAdmin: true,
				meInfo:data.result,
				total:data.result.order.dfh+data.result.order.dfk+data.result.order.dpj+data.result.order.dsh+data.result.order.sh
			};
			console.log(data.result.order.dfh)
			var personalHtml = template('personaltemplate', personalData);
			document.getElementById('personalSort').innerHTML = personalHtml;
			if (callback) {callback();};
		},
		error:function () {
			console.log('fail');
		}
	});
}
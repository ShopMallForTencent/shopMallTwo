//地址ajax请求
function addressList(func)
{
	$.ajax({
		url: ajaxPath + '/receiver/list',
		type : 'GET',
		dataType: 'jsonp',
		success: function(data){
		   //填充内容到html
		    var addData = {
		      isAdmin: true,
		      addResult: data.result
		    };

		     var resulthtml = template('addtemplate', addData);
		     document.getElementById('myAdd').innerHTML = resulthtml;

		     func();
		},
		error : function(){

		  console.log('fail')
		}
	});
}


//设置默认地址
function addDdfault (productID) {
	$.ajax({
		url:ajaxPath + 'receiver/default',
		type : 'POST',
		dataType: 'json',
		xhrFields: {withCredentials: true},
	    crossDomain: true,
		data : {"r_id" : productID},
		success:function (data) {
			showTips({
				'text':'设置默认地址成功',
				'type':true,
				'time':1000
			});
		},
		error:function () {
		console.log('fail')
		}
	})
}

//编辑地址
function addEdit(productID){
	console.log("r_id:"+productID)
	$.ajax({
		url:ajaxPath + 'receiver/edit',
		type : 'GET',
		dataType: 'jsonp',
		data : {"r_id" : productID},
		success:function (data) {
			addMsg.msg = data;
			window.location.href = '#tpl/addressEdit';
		},
		error:function () {
			console.log('fail')
		}
	})
}

//删除地址
function addDel(productID){
	console.log("r_id:"+productID)
	$.ajax({
		url:ajaxPath + 'receiver/del',
		type : 'POST',
		dataType: 'json',
		xhrFields: {withCredentials: true},
	    crossDomain: true,
		data : {"r_id" : productID},
		success:function (data) {
		console.log(data.msg)


		},
		error:function () {
		console.log('fail')
		}
	})
}





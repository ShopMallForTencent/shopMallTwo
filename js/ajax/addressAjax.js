//地址ajax请求
$.ajax({
	url: ajaxPath + '/receiver/list',
	type : 'GET',
	dataType: 'jsonp',
	success: function(data){
	
	console.log(data.result)

	   //填充内容到html
	    var addData = {
	      isAdmin: true,
	      addResult: data.result
	    };

	     var resulthtml = template('addtemplate', addData);
	     document.getElementById('myAdd').innerHTML = resulthtml;
	     addsuccess();
	     addEvetnForAddress();
	},
	error : function(){

	  console.log('fail')
	}
});

//设置默认地址
function addDdfault (productID) {
	console.log("r_id:"+productID)
	$.ajax({
		url:ajaxPath + 'receiver/default',
		type : 'POST',
		dataType: 'json',
		xhrFields: {withCredentials: true},
	    crossDomain: true,
		data : {"r_id" : productID},
		success:function (data) {
			console.log(data.msg);
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
			console.log(data)
			addMsg.msg = data;
			console.log(data)
		},
		error:function () {
			console.log('fail')
		}
	})

	window.location.href = '#tpl/inputAdd';
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


//初始化默认地址
function addsuccess(){
	// console.log(0)
	 var $setDefault = $(".setThisAdd");

	 for(var i=0; i<$setDefault.length; i++){
	    if($setDefault.eq(i).attr('def')==1){
	      $setDefault.eq(i).find("i").removeClass("icon-setDefault").addClass("icon-right");
	      $setDefault.eq(i).find("i").parent().find("span").text("默认地址");
	      $setDefault.eq(i).parents(".myAdd").insertBefore($(".myAdd").eq(0))
	    }
	 }
}


function addEvetnForAddress()
{
	//修改收货地址
	$('#myAdd .addevent').on('touchend', function(){

		var name = $(this).find('.uName').html();
		var phone = $(this).find('.uTel').html();
		var address = $(this).find('.addDetail').text();

		var user_address = $(document.body).find('#user_address');
		user_address.find('.buyer').html(name);
		user_address.find('.buyerNum').html(phone);
		user_address.find('.buyerAdd').html(address);

		window.location.href = '#tpl/ensureOrder';

	});
}

$('#new_address').on('touchend', function(){
	$('#border-box .name').get(0).value = '';
	$('#border-box .phone').get(0).value = '';
	$('#border-box .postcodes').get(0).value = '';
	$('#cmbXxdz').get(0).value = '';
	document.getElementById('cmbProvince').innerHTML = '';
	document.getElementById('cmbCity').innerHTML = '';
	document.getElementById('cmbArea').innerHTML = '';
});




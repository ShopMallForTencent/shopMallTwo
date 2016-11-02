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
	     addsuccess()
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
		type:'GET',
		dataType:'jsonp',
		data : {"r_id" : productID},
		success:function (data) {
		console.log(data.msg)


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
		type:'GET',
		dataType:'jsonp',
		data : {"r_id" : productID},
		success:function (data) {
		console.log(data.msg)


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
		type:'GET',
		dataType:'jsonp',
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
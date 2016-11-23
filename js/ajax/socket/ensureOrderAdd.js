//支付页面 到 地址页面 之间的判断传送
var addBtnKey = false;
var addRid = 0;
function btnKey(){
	// var addBtnKey = true;
	
	/*地址选择按钮*/
	$('.addBox').on('touchend',function(){
	addBtnKey = true;
	addRid = $(this).attr('rid')
	console.log(addRid)
	//alert(2)
	})
	console.log($('.addBox').get(0));
}


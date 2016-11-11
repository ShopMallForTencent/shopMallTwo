//支付页面 到 地址页面 之间的判断传送
var addBtnKey = false;
function btnKey(){
	// var addBtnKey = true;
	
	/*地址选择按钮*/
	$('.addBox').on('touchend',function(){
	addBtnKey = true;
	//alert(2)
	})
	console.log($('.addBox').get(0));
}


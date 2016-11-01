//ajax请求
$.ajax({
	url: ajaxPath + '/goods/getById&g_id=999',
	type : 'POST',
	dataType: 'jsonp',
	success: function(data){
	
console.log(data.result.review)

	   //填充内容到html
	    var banner_data = {
	      isAdmin: true,
	      bannerImg_list: data.result.banner,
	      introduction : data.result.introduction,
	      name : data.result.name,
	      price : data.result.price,
	      market_price : data.result.market_price,
	      sales : data.result.sales,
	      t_stock : data.result.t_stock,
	      g_specification : data.result.g_specification,
	      p_specification : data.result.p_specification,
	      review : data.result.review
	    };

	    var bannerImg = template('banner', banner_data);
	    document.getElementById('swiper-wrapper').innerHTML = bannerImg;

	    var introduction = template('ware_msg_art', banner_data);
	    document.getElementById('ware_msg').innerHTML = introduction;

	    var ware_price_art = template('ware_price_art', banner_data);
	    document.getElementById('ware_price').innerHTML = ware_price_art;

	    var ljgm_art = template('ljgm_art', banner_data);
	    document.getElementById('sp_color_gm').innerHTML = ljgm_art;
	    document.getElementById('sp_color_jrgwc').innerHTML = ljgm_art;

	    var review_art = template('user_art', banner_data);
	    document.getElementById('user_comment').innerHTML = review_art;


	    ajax_Success(data.result.p_specification);
	},
	error : function(){

	  console.log('fail')
	}
}); 


//ajax请求成功后调用
function ajax_Success(arr)
{ 
	//头图轮播脚本
	var swiper_container = $('#swiper-container');
	var length = $('#swiper-container .swiper-slide').length;
	var sp_idx =  $('#swiper-container .sp_idx');
	sp_idx.html('1/' + length);

	var mySwiper = new Swiper('.swiper-container',{
	    onSlideChangeEnd:function(swiper){ 
	        sp_idx.html(swiper.activeIndex+1 + '/' + length);
	    }
	});

	//弹窗按钮选中脚本
	//gwcTcBntLogic('#ljgm .sp_color_bnt a');
	//gwcTcBntLogic('#jrgwc .sp_color_bnt a');


	$('#sp_color_gm a').on('touchend', function(){
			
		  //取消
		  if(this.className.indexOf('select') != -1)
		  {
		  	  $(this).removeClass('select');
		  	  var selectBnt = getSelectBnt($('#sp_color_gm a'));
		  	  pds( selectBnt.length > 1? $(this) : $('#sp_color_gm a'), arr );
		  	  console.log('取消');
		  }
		  //选中
		  else if(this.className.indexOf('no') == -1)
		  {
		  	  $(this).addClass('select');
		  	  pds( $(this), arr );
		  	  console.log('选中')
		  }	
	});

}




function pds(bntArr, arr)
{	
	//拿到所有选中的按钮
	var selectBnt = getSelectBnt(bntArr);
	if (selectBnt.length <= 0) {
		bntArr.removeClass('no');
		return;
	}

	//判断arr数组中，是否包含按钮的zdy
	var result = [];
	for(var i=0; i<arr.length; i++)
	{
		var ps = arr[i].p_s;
		for(var j=0; j<ps.length; j++)
		{
			var val = parseInt(ps[j]);
			for(var k=0; k<selectBnt.length; k++)
			{
				var  sbnt = selectBnt[k];
				if (val == parseInt(sbnt.attr('zdy'))) 
				{
					result.push(ps);
				}
			}
		}
	}

	console.log(result)

	for(var k=0; k<$('#sp_color_gm a').length; k++)
	{
		var bnt = $('#sp_color_gm a').eq(k);	
		//result中不包含bnt的zdy，则变灰
		if(!isHaveValue(parseInt(bnt.attr('zdy')), result))
		{
			bnt.addClass('no');
		}
		else
		{
			bnt.removeClass('no');
		}
	}

}


function getSelectBnt(bntArr)
{
	var selectBnt = [];
	for(var i=0; i<bntArr.length; i++)
	{
		var bnt = bntArr.eq(i);
		if (bnt.hasClass('select')) 
		{
			selectBnt.push(bnt);
		}
	}

	return selectBnt;
}



//判断数组是否包含value
function pd(array, value)
{
	var tempArr = [];
	
	for(var i=0; i<array.length; i++)
	{
		var ps = array[i].p_s;
		
		for(var j=0; j<ps.length; j++)
		{
			var val = ps[j];
			
			if(val == value){
				tempArr.push(ps);
				break;
			}
		}
	}

	return tempArr;
}

function isHaveValue(bntZdy, result) // bnt = 1, result[0] = 2
{
	var flag = false;
	
	for(var i=0; i<result.length; i++)
	{
		for(var j=0; j<result[i].length; j++)
		{
			var val = result[i][j];
			
			if( val == bntZdy){
				return true;
			}
		}
	}
	
	return false;
}




//弹窗按钮选中脚本
function gwcTcBntLogic(bnt)
{
    var old = 0;

    $(bnt).on('touchend', function(){

        if (this.className.indexOf('no') != -1 || old == $(this).index()) {return;}

        $(this).addClass('select');

        $(bnt).eq(old).removeClass('select');

        old = $(this).index();

    });
}










//加入购物车请求
$('#jrgwc .jrgwcbnt').on('touchend', function(){
	$.ajax({
		url: ajaxPath + '/cart/add',
		type : 'POST',
		dataType: 'jsonp',
		data : {"quantity" : 22, "p_id" : 1, "g_id" : 1},
		success: function(data){
			var jrgwc = $('#jrgwc');
			jrgwc.addClass('gmtc_show');
			jrgwc.find('.shop_car_success').show();
			setTimeout(function(){
				jrgwc.find('.shop_car_success').hide();
				setTimeout(function(){
					closeDialog('jrgwc');
				},250);
			},2000);
		},
		error : function(){
		  alert('加入购物车失败！');
		}
	}); 
});



template.helper('dateFormat', function (score) {
	var result = "";
	for(var i=0; i<score; i++){
		result+="<em class='star dil lsp red'></em>";
	}
    return result; 
});

template.helper('getUserImage', function (imagelist) {
	var result = '';
	imagelist = eval("("+imagelist+")"); 
	for(var i=0; i<imagelist.length; i++)
	{
		var imgPath = imagelist[i];
		
		result+="<li class='fl dil'><img src="+imgPath+"></li>";
	}
    return result; 
});

 

















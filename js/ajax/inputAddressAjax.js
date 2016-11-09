var cmbProvince = document.getElementById('cmbProvince');
var municipal = document.getElementById('cmbCity');
var cmbArea = document.getElementById('cmbArea');
var cityArr = [cmbProvince, municipal,cmbArea ];


//为真，则代表从编辑进入本页面
<<<<<<< HEAD
if (addMsg.msg != null) 
=======
if (addMsg.msg.result) 
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
{
	//填充内容到表单
	$('#border-box .name').get(0).value = addMsg.msg.result['consignee'];
	$('#border-box .phone').get(0).value = addMsg.msg.result['phone'];
	$('#border-box .postcodes').get(0).value = addMsg.msg.result['z_code'];
	$('#cmbXxdz').get(0).value = addMsg.msg.result['address'];
	//获取地址ID
	var treePath = addMsg.msg.result.t_path.split(',');
	treePath.push(addMsg.msg.result.a_id);
	for(var i=0; i<addMsg.msg.result.area.length; i++)
	{
		for(var j=0; j<addMsg.msg.result.area[i].length; j++)
		{
			var city = addMsg.msg.result.area[i][j];
			var option = document.createElement('option');
			option.text = city['name'];
			option.setAttribute("name", city['name']);
			option.value = city['id'];
			for(var z=0; z<treePath.length; z++)
			{
				if(option.value == treePath[z])
				{
					option.selected = true;
				}
			}
			cityArr[i].appendChild( option );
			cityArr[i].style.display = 'block';
		}
	}
}
else
{
	//加载省份
	$.ajax({
		url: ajaxPath + '/area/tops',
		type : 'GET',
		dataType: 'jsonp',
		success: function(data){
			cmbProvince.options.add(new Option('请选择', '请选择'));

			for(var i=0; i<data.result.length; i++)
			{
				var provinces = data.result[i];
				var option = document.createElement('option');
				option.text = provinces['name'];
				option.setAttribute("name", provinces['name']);
				option.value = provinces['id'];
				cmbProvince.appendChild( option );
			}
		},
		error : function(){
		   console.log('fail');
		}

	});
}


//省份改变时获取县
function getMunicipal(self, id){

	var parentId = (typeof id == 'undefined' ? $(self).get(0).value : id);

	$.ajax({
		url: ajaxPath + '/area/listByParent',
		type : 'GET',
		dataType: 'jsonp',
		data : {'parent' : parentId},
		success: function(data){

			// console.log(data)
			municipal.style.display = 'block';
			municipal.innerHTML = '';
			cmbArea.innerHTML = '';
			municipal.options.add(new Option('请选择', '请选择'));

			for(var i=0; i<data.result.length; i++)
			{
				var mcl = data.result[i];
				var option = document.createElement('option');
				option.text = mcl['name'];
				option.setAttribute("name", mcl['name']);
				option.value = mcl['id'];
				municipal.appendChild( option );
			}

			getCmbArea($('#cmbCity option').eq(0).get(0));
		},
		error : function(){
		   console.log('fail');
		}
	});
}

//县改变时获取市
function getCmbArea(self, id){

	var parentId = (typeof id == 'undefined' ? $(self).get(0).value : id);

<<<<<<< HEAD
=======
	console.log(parentId)

>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
	$.ajax({
		url: ajaxPath + '/area/listByParent',
		type : 'GET',
		dataType: 'jsonp',
		data : {'parent' : parentId},
		success: function(data){

			//没有市
			if (data.result.length <= 0) 
			{
				$(cmbArea).hide();
			}
			else
			{
				cmbArea.style.display = 'block';

				cmbArea.innerHTML = '';
				cmbArea.options.add(new Option('请选择', '请选择'));
				for(var i=0; i<data.result.length; i++)
				{
					var ccl = data.result[i];
					var option = document.createElement('option');
					option.text = ccl['name'];
					option.setAttribute("name", ccl['name']);
					option.value = ccl['id'];
					cmbArea.appendChild( option );
				}
			}
		},
		error : function(){
		   console.log('fail');
		}
	});
}

$('#cmbProvince').on('change', function(){
	getMunicipal(this);
});
$('#cmbCity').on('change', function(){
	getCmbArea(this);
});

//保存收货地址
$('#saveAdd').on('touchend', function(){

	 var name = $('#border-box .name').get(0).value;
	 var phone = $('#border-box .phone').get(0).value;
	 var postcodes = $('#border-box .postcodes').get(0).value;

	 var shen = cmbProvince.options[cmbProvince.selectedIndex].text;
	 	 xian = typeof municipal.options[municipal.selectedIndex] == 'undefined' ? '' : municipal.options[municipal.selectedIndex].text;
	 	 shi = typeof cmbArea.options[cmbArea.selectedIndex] == 'undefined' ? '' : cmbArea.options[cmbArea.selectedIndex].text;
	 	 xxdz = document.getElementById('cmbXxdz').value;

	 if (name.length <=0) {
	 	showTips({
            'type':false,
            'text':'收货人姓名不能为空',
            'time':2000
        });
	 	return;
	 }

	 //手机号码校验
	 if (phone.length <= 0) 
	 {
	 	 showTips({
            'type':false,
            'text':'手机号码不能为空',
            'time':2000
        });
	 	 return;
	 }
	 if( !/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(phone) )
	 { 
		 showTips({
            'type':false,
            'text':'手机号码格式有误！请重新填写！',
            'time':2000
         });
		 return; 
	 } 

	 //邮编校验
	 if (postcodes.length <= 0) 
	 {
	 	showTips({
            'type':false,
            'text':'邮编不能为空',
            'time':2000
         });
	 	return;
	 }
	 if ( !/^[1-9][0-9]{5}$/.test(postcodes)) 
	 {
	 	showTips({
            'type':false,
            'text':'邮编格式错误',
            'time':2000
         });
	 	return;
	 }

	 if (shen == '请选择') 
	 {
	 	showTips({
            'type':false,
            'text':'请选择省',
            'time':2000
         });
	 	return;
	 }

	 if (xian == '请选择') 
	 {
	 	showTips({
            'type':false,
            'text':'请选择县',
            'time':2000
         });
	 	return;
	 }

	 if (shi == '请选择') 
	 {
	 	showTips({
            'type':false,
            'text':'请选市',
            'time':2000
         });
	 	return;
	 }
	 
	 if (xxdz.length <= 0) {
	 	showTips({
            'type':false,
            'text':'请填写详细地址',
            'time':2000
         });
	 	return;
	 }

// console.log( typeof addMsg.msg + '???????????????????')

	 //提交
	 $.ajax({
<<<<<<< HEAD
		url: ajaxPath + (addMsg.msg != null? '/receiver/update' : '/receiver/add'),
=======
		url: ajaxPath + (addMsg.msg.result? '/receiver/update':'/receiver/add'),
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
		type : 'POST',
		dataType: 'json',
		xhrFields: {withCredentials: true},
	    crossDomain: true,
	    data : {
<<<<<<< HEAD
	    	'r_id' : addMsg.msg != null? addMsg.msg.result.r_id : '',
=======
	    	'r_id' : addMsg.msg.result? addMsg.msg.result.r_id : '',
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
	    	'a_id' :  cmbArea.style.display == 'none' ? municipal.options[municipal.selectedIndex].value : cmbArea.options[cmbArea.selectedIndex].value, 
	    	'consignee' :name, 
	    	'phone' : phone, 
	    	'z_code' : postcodes,  
	    	'address' : xxdz, 
<<<<<<< HEAD
	    	'is_def' : addMsg.msg == null?  0 : addMsg.msg.result.is_default
=======
	    	'is_def' : typeof addMsg.msg == 'string'? 0 : addMsg.msg.result.is_default
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
	    },
		success: function(data){
			console.log(data);
			window.location.href = '#tpl/address';	
<<<<<<< HEAD
=======

//清空表单内容，不然下次进来会有上一次的内容?????????????????????????????????????????????????????????????????????????????????
addMsg.msg = '';
$('#border-box .name').get(0).value = '';
$('#border-box .phone').get(0).value = '';
$('#border-box .postcodes').get(0).value = '';
$('#cmbXxdz').get(0).value = '';
document.getElementById('cmbProvince').innerHTML = '';
document.getElementById('cmbCity').innerHTML = '';
document.getElementById('cmbArea').innerHTML = '';

>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
		},
		error : function(err){
		   console.log(err);
		}
	}); 

});

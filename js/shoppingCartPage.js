define(function (require) {
<<<<<<< HEAD
    var tpl = require('tpl/cart.html');
    var cartAjax = require('js/ajax/cartAjax');
    var ecSocket = require('js/ajax/socket/ensureOrderCart');
=======
<<<<<<< HEAD
    var tpl = require('tpl/cart.html');
    var cartAjax = require('js/ajax/cartAjax');
    var ecSocket = require('js/ajax/socket/ensureOrderCart');
=======
    var tpl = require('tpl/shoppingCart.html');
    var cartAjax = require('js/ajax/cartAjax');
    var ecSocket = require('js/ajax/socket/ensureOrder_Cart');
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
    return {
        title: '购物车',
        body: tpl,
        init: function () {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a

        },
        beforeopen:function(){
        	// 重置滚动条到顶部
        	$('.shopping-cart-wrap .border-box').scrollTop(0,0);
        	// 控制底部导航栏状态
        	$('.nav-box').show();
        	$('.nav-box li').removeClass('on').eq(2).addClass('on');

        	cartList(function(){
			//	计算每个店铺中商品总价
        	$(".reduce").each(function(){
//				countAllMoney($(this));
<<<<<<< HEAD
=======
=======
        	
            //	计算每个店铺中商品总价
			
			

			// if(proId==null){
			// 				alert("请选择你要删除的商品")
			// 			}else{
			// 				delPro(proId)
			// 			}
	
	//console.log($('.actNum .itemNum').length)

        },
        beforeopen:function(){
        	cartList(function(){

        	$(".reduce").each(function(){
				countAllMoney($(this));
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				var oItemNum=$(this).parent().find(".itemNum").text();

				if(oItemNum==1){

					$(this).css("color","#adadad");
				}
				
			});
			
			$(".reduce").on("touchend",function(){
				var oItemNum=$(this).parent().find(".itemNum").text();
				oItemNum--;
				if(oItemNum<=1){
					oItemNum=1;
					$(this).css("color","#adadad");
				}
				$(this).parent().find(".itemNum").text(oItemNum--);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				console.log($(this).parents(".shopItem").find(".choose").attr("has"));
				if($(this).parents(".shopItem").find(".choose").attr("has")==1){
					countAllMoney($(this));
				}
				
<<<<<<< HEAD
=======
=======
				countAllMoney($(this));
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				addProNum($(this).attr('proId'),-1)
				
			});
			$(".plus").on("touchend",function(){
				var oItemNum=$(this).parent().find(".itemNum").text();
				$(this).prev().prev().css({"color":"#212b3e"});
				oItemNum++;
				if(oItemNum>=$(this).attr('stock')){
					oItemNum=$(this).attr('stock')
					$(this).css("color","#adadad");
				}else{
					console.log(99)
					$(this).css("color","#212b3e");
				}
				$(this).parent().find(".itemNum").text(oItemNum);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				console.log($(this).parents(".shopItem").find(".choose").attr("has"));
				if($(this).parents(".shopItem").find(".choose").attr("has")==1){
					countAllMoney($(this));
				}
				
<<<<<<< HEAD
=======
=======
				countAllMoney($(this));
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				addProNum($(this).attr('proId'),1)
			});
			//库存为1加减按钮解绑事件
			$(".shopItem").each(function(index){
				
				var oRemain=$(this).find(".remain").find("span").text();
				if(oRemain==1){
					$(this).parents(".cartSort").find(".plus").css({"color":"#adadad"}).off();
					$(this).parents(".cartSort").find(".reduce").css({"color":"#adadad"}).off();
				}
			});
			function countAllMoney(arrow){
				var where=arrow.parents(".cartSort");
				var oPriceAll=where.find(".price");
				var oItemNum=where.find(".itemNum");
				//console.log(oPriceAll)
		//		console.log(where.find(".price"));
		//		console.log(where.find(".itemNum"));
				var allMoney=null,noMoney=null;
				var single=[],nochoose=[];
				oPriceAll.each(function(i){
					var money=$(this).text();
					oItemNum.each(function(j){
						single.push($(this).text());
					});
					allMoney+=single[i]*$(this).text();
				});
				if(where.find(".shopItem").hasClass("fail")){
					var failMoney=where.find(".fail").find(".price").text()*where.find(".fail").find(".itemNum").text();
					allMoney=allMoney-failMoney;
				}
		
				where.find(".shopItem").each(function(aIndex){
					if($(this).find(".choose").attr("has")==0){
						nochoose.push($(this).find(".price").text()*$(this).find(".itemNum").text());
					}
				});
				$(nochoose).each(function(bIndex){
						noMoney+=nochoose[bIndex];
				})
				allMoney=allMoney-noMoney;
			
				where.find(".lastAll").text(allMoney.toFixed(2));
				
			
			}
			//点击编辑  删除
			var alreadyEdit=0;
<<<<<<< HEAD
			var cartChoiceObj = {};
=======
			var proId=null;
			var proIdArr=[];
<<<<<<< HEAD
			var cartChoiceObj = {};
=======
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
			$(".shopName").find("a").on("touchend",function(){
				if($(this).attr("edit")=="1"){
					$(this).text("完成");
					$(this).parent().parent().find(".operate").attr("class","operate operate-delete").text("删除");
					$(this).attr("edit","0");
					$(this).parent().parent().find(".operate-delete").on("touchend",function(){
						var thisBid = $(this).attr('bid');
						var thisCartSort = $(this).parents('#cartSort');
						if(cartChoiceObj[thisBid] == undefined || cartChoiceObj[thisBid]['choose'] == undefined || cartChoiceObj[thisBid]['choose'].length <= 0){
							showTips({
		                        'type':false,
		                        'text':'请选择你要删除的商品',
		                        'time':2000
		                    });
							return;
						} else{
							$(this).parents(".cartSort").find(".shopItem").each(function(){
								if($(this).attr("del")==1){
									$(this).remove();
								}
							});
							if($(this).parents(".cartSort").find(".shopItem").length==0){
								$(this).parents(".cartSort").remove();
							}
							if($(this).parents(".cartSort").attr("delAll")==1){
								$(this).parents(".cartSort").remove();
							}
							countAllMoney($(this));
							if (thisCartSort.find('.cartSort').length <= 0) {
								thisCartSort.html('<div class="not-product"><img src="images/cart-icon.png" alt="空空如也"><p>购物车空无一物，赶紧去选购商品吧！</p></div>');
							};
							delPro(cartChoiceObj[thisBid]['choose'].toString());
						}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
		//				countAllMoney($(this));

>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
					});
					$(this).parents(".cartSort").find(".actNum").hide();
					$(this).parents(".cartSort").find(".total").hide();
					alreadyEdit=1;
					// console.log($(this).parent())
					$(".shopItem").find(".choose").on("touchend",function(){
						if(alreadyEdit==1)
							checked($(this));
					});
				}
				else{
					$(this).text("编辑");
					$(this).parent().parent().find(".operate").attr("class","operate operate-goPay").text("去结算");
					$(this).attr("edit","1");
					$(this).parent().parent().find(".operate").off(); 
					$(this).parents(".cartSort").find(".actNum").show();
					$(this).parents(".cartSort").find(".total").show();
					$(".cartSort").find(".fail").children("a").off().removeClass("choose-sure").attr("has","0");
					alreadyEdit=0;
				}
				$(this).parents(".cartSort").find(".countAll").find(".choose").removeClass("choose-sure");
				// console.log(alreadyEdit)
			});
			//选中
			var cntChooseLen=0;
			var cntChooseSure=0;
			$(".shopItem").find(".choose").on("touchend",function(){
				if(alreadyEdit==0)
					checked($(this));
			});
			function checked(checked){
				var thisBid = checked.parents('.cartSort').find('.operate').attr('bid');
				if(checked.attr("has")==0){
					checked.addClass("choose-sure");
					checked.attr("has","1");
					checked.parents(".shopItem").attr("del","1");
<<<<<<< HEAD
=======
<<<<<<< HEAD
					if(proId != null){
						proId += ","+checked.attr('proId')
					}else{
						proId = checked.attr('proId')
					}
					proIdArr.push(checked.attr('proId'));
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
					if (cartChoiceObj[thisBid]) {
						var newArr = cartChoiceObj[thisBid]['choose'];
					} else{
						var newArr = [];
					}
					newArr.push(checked.attr('proId'));
					cartChoiceObj[thisBid] = {};
					cartChoiceObj[thisBid]['choose'] = newArr;
<<<<<<< HEAD
=======
=======
						console.log(checked.attr('proId'));
						
						if(proId != null){
							proId += ","+checked.attr('proId')
						}else{
							proId = checked.attr('proId')
						}
						proIdArr.push(checked.attr('proId'));
						console.log(proIdArr)
						
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				}
				else{
					checked.removeClass("choose-sure");
					checked.attr("has","0");
					checked.parents(".shopItem").attr("del","0");
<<<<<<< HEAD
=======
					proId=null;
					for(var i in proIdArr){
						if(checked.attr('proId')==proIdArr[i]){
							proIdArr.splice(i,1)
						}
						
					}
<<<<<<< HEAD
=======
				
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
					for(var j=0; j<proIdArr.length; j++){
						if(proId != null){
							proId += ","+proIdArr[j]
						}else{
							proId = proIdArr[j]
						}
					}
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
					cartChoiceObj[thisBid]['choose'].splice($.inArray(checked.attr('proId'),cartChoiceObj[thisBid]['choose']),1);
				}
				var single=[];var allMoney=0;
				checked.parents(".cartSort").find(".shopItem").each(function(a){
					if($(this).find(".choose").attr("has")==0){
						single.push(0);
						allMoney+=single[a]*$(this).find(".itemNum").text();
					}
					if($(this).find(".choose").attr("has")==1){
						single.push($(this).find(".price").text());
						allMoney+=single[a]*$(this).find(".itemNum").text();
					}
				});
				checked.parents(".cartSort").find(".lastAll").text(allMoney.toFixed(2));
				
<<<<<<< HEAD
=======
=======
					console.log(proIdArr)
					
					
				}
				console.log(proId)
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				//全部订购
				cntChooseLen=checked.parents(".cartSort").find(".choose").length-1;
				cntChooseSure=checked.parents(".cartSort").find(".choose-sure").length;
				if(checked.parents(".cartSort").find(".countAll").find(".choose").attr("has")=="1"){
					cntChooseSure=cntChooseSure-1;
					
				}
				if(checked.parents(".cartSort").find(".shopName").find("a").attr("edit")==1){
					var oFailItem=checked.parents(".cartSort").find(".fail").length;
					cntChooseLen=cntChooseLen-oFailItem;
				}
				if(cntChooseSure==cntChooseLen){
					checked.parents(".cartSort").find(".countAll").find(".choose").addClass("choose-sure");
					checked.parents(".cartSort").attr("delAll","1");
					checked.parents(".cartSort").find(".countAll").find(".choose").attr("has","1");
				}else{
					checked.parents(".cartSort").find(".countAll").find(".choose").removeClass("choose-sure");
					checked.parents(".cartSort").attr("delAll","0");
					checked.parents(".cartSort").find(".countAll").find(".choose").attr("has","0");
				}
			}
			$(".cartSort").find(".fail").children("a").off();
			//全选
			$(".countAll").find(".choose").on("touchend",function(){
				var thisBid = $(this).parents('.cartSort').find('.operate').attr('bid');
				if($(this).attr("has")==0){
					$(this).addClass("choose-sure");
					$(this).attr("has","1");
					$(this).parent().parent().find(".choose").addClass("choose-sure").attr("has","1");
					$(this).parents(".cartSort").attr("delAll","1");
					$(this).parents(".cartSort").find(".shopItem").attr("del","1");
<<<<<<< HEAD
=======
<<<<<<< HEAD
					proId = null;
					var cose = $(this).parent().parent().find(".choose")
					for(var i=0; i<cose.length; i++){
=======
					//console.log()
					proId = null;
					var cose = $(this).parent().parent().find(".choose")
					for(var i=0; i<cose.length; i++){
						console.log(cose.eq(i).attr('proId'))
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
						proIdArr.push(cose.eq(i).attr('proId'));
						proIdArr.splice(cose.length-1,1);
						
					}
<<<<<<< HEAD
					for(var j=0; j<proIdArr.length; j++){
						if(proId != null){
							proId += ","+proIdArr[j]
=======
					console.log(proIdArr)
					for(var j=0; j<proIdArr.length; j++){
						if(proId != null){
							proId += ","+proIdArr[j]
							console.log(proIdArr)
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
						}else{
							proId = proIdArr[j]
						}
					}
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
					countAllMoney($(this));

					var newArr = [];
					$(this).parents('.cartSort').find('.shopItem .choose').each(function(){
						newArr.push($(this).attr('proId'));
					});
					cartChoiceObj[thisBid] = {};
					cartChoiceObj[thisBid]['choose'] = newArr;
<<<<<<< HEAD
=======
=======
					console.log(proId)
					
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				}
				else{
					$(this).parent(".countAll").find(".lastAll").text(0.00);
					$(this).removeClass("choose-sure");
					$(this).attr("has","0");
					$(this).parent().parent().find(".choose").removeClass("choose-sure").attr("has","0");
					$(this).parents(".cartSort").attr("delAll","0");
					$(this).parents(".cartSort").find(".shopItem").attr("del","0");
<<<<<<< HEAD
					cartChoiceObj[thisBid]['choose'] = [];
=======
					proId = null
<<<<<<< HEAD
					cartChoiceObj[thisBid]['choose'] = [];
=======
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				}
				if(alreadyEdit==0){
					$(this).parents(".cartSort").find(".fail").children("a").attr("has","0").removeClass("choose-sure");
					$(this).parents(".cartSort").attr("delAll","0");
				}
			});

			$('.operate').on('touchend',function() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				var thisBid = $(this).attr('bId');
				if (alreadyEdit == 0) {
					if(cartChoiceObj[thisBid] == undefined || cartChoiceObj[thisBid]['choose'] == undefined || cartChoiceObj[thisBid]['choose'].length <= 0){
						showTips({
	                        'type':false,
	                        'text':'请选择你要购买的商品',
	                        'time':2000
	                    });
						return;
					} else{
						buyPro(cartChoiceObj[thisBid]['choose'].toString(),thisBid);
					}
				} else if (alreadyEdit == 1) {
					
<<<<<<< HEAD
=======
=======

				if(proId==null&&alreadyEdit==0){
					alert("请选择你要购买的商品")
					return;
				}
				if(proId!=null&&alreadyEdit==0){
					console.log(proId,$(this).attr('bId'))
					buyPro(proId,$(this).attr('bId'));
					window.location.href = '#tpl/ensureOrder';
					// delPro(proId)
					 //#tpl/ensureOrder
				}
				if(proId==null&&alreadyEdit==1){
					alert("请选择你要删除的商品")
					return;
				}
				if(proId!=null&&alreadyEdit==1){
					delPro(proId)
					// #tpl/ensureOrder
>>>>>>> f9aba7e0b65262449af2f09a105bf06a9c9dbe98
>>>>>>> abf3471762f674642de5a6a09c8cd93b9bfd403a
				}
			})

        	});
        }
    }
});







// var arr = [0,1,2]
// arr.splice(2,1);
// console.log(arr)
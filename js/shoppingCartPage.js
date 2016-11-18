define(function (require) {
    var tpl = require('tpl/cart.html');
    var cartAjax = require('js/ajax/cartAjax');
    var ecSocket = require('js/ajax/socket/ensureOrderCart');
    return {
        title: '购物车',
        body: tpl,
        init: function () {

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
				var oItemNum=$(this).parent().find(".itemNum").text();

				if(oItemNum==1){

					$(this).css({'color':'#adadad','-webkit-tap-highlight-color':'rgba(0,0,0,0)'});
				}
				
			});
			
			$(".reduce").on("touchend",function(){
				var oItemNum=$(this).parent().find(".itemNum").text();
				oItemNum--;
				if(oItemNum<=1){
					oItemNum=1;
					$(this).css({'color':'#adadad','-webkit-tap-highlight-color':'rgba(0,0,0,0)'});
				}
				$(this).parent().find(".itemNum").text(oItemNum--);
				console.log($(this).parents(".shopItem").find(".choose").attr("has"));
				if($(this).parents(".shopItem").find(".choose").attr("has")==1){
					countAllMoney($(this));
				}
				
				addProNum($(this).attr('proId'),-1)
				
			});
			$(".plus").on("touchend",function(){
				var oItemNum=$(this).parent().find(".itemNum").text();
				$(this).prev().prev().css({"color":"#212b3e"});
				oItemNum++;
				if(oItemNum>=$(this).attr('stock')){
					oItemNum=$(this).attr('stock')
					$(this).css({'color':'#adadad','-webkit-tap-highlight-color':'rgba(0,0,0,0)'});
				}else{
					console.log(99)
					$(this).css({'color':'#1a1a1a','-webkit-tap-highlight-color':'rgba(0,0,0,0.1)'});
				}
				$(this).parent().find(".itemNum").text(oItemNum);
				console.log($(this).parents(".shopItem").find(".choose").attr("has"));
				if($(this).parents(".shopItem").find(".choose").attr("has")==1){
					countAllMoney($(this));
				}
				
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
			var cartChoiceObj = {};
			$(".shopName").find("a").on("touchend",function(){
				cartChoiceObj = {};
				$(this).parents('.cartSort').find('.choose-sure').removeClass('choose-sure').attr("has","0");
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
					$(this).parent().parent().find(".operate").off().on('touchend',function(){
						if (alreadyEdit == 0) {
							var thisBid = $(this).attr('bId');
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
						}
					}); 
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
					if (cartChoiceObj[thisBid]) {
						var newArr = cartChoiceObj[thisBid]['choose'];
					} else{
						var newArr = [];
					}
					newArr.push(checked.attr('proId'));
					cartChoiceObj[thisBid] = {};
					cartChoiceObj[thisBid]['choose'] = newArr;
				}
				else{
					checked.removeClass("choose-sure");
					checked.attr("has","0");
					checked.parents(".shopItem").attr("del","0");
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
					countAllMoney($(this));

					var newArr = [];
					$(this).parents('.cartSort').find('.shopItem .choose').each(function(){
						newArr.push($(this).attr('proId'));
					});
					cartChoiceObj[thisBid] = {};
					cartChoiceObj[thisBid]['choose'] = newArr;
				}
				else{
					$(this).parent(".countAll").find(".lastAll").text(0.00);
					$(this).removeClass("choose-sure");
					$(this).attr("has","0");
					$(this).parent().parent().find(".choose").removeClass("choose-sure").attr("has","0");
					$(this).parents(".cartSort").attr("delAll","0");
					$(this).parents(".cartSort").find(".shopItem").attr("del","0");
					cartChoiceObj[thisBid]['choose'] = [];
				}
				if(alreadyEdit==0){
					$(this).parents(".cartSort").find(".fail").children("a").attr("has","0").removeClass("choose-sure");
					$(this).parents(".cartSort").attr("delAll","0");
				}
			});

			$('.operate').on('touchend',function() {
				if (alreadyEdit == 0) {
					var thisBid = $(this).attr('bId');
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
					
				}
			})

        	});
        }
    }
});







// var arr = [0,1,2]
// arr.splice(2,1);
// console.log(arr)
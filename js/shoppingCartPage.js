define(function (require) {
    var tpl = require('tpl/shoppingCart.html');
    var cartAjax = require('js/ajax/cartAjax');
    var ecSocket = require('js/ajax/socket/ensureOrder_Cart');
    return {
        title: '购物车',
        body: tpl,
        init: function () {
        	
            //	计算每个店铺中商品总价
			$(".reduce").each(function(){
				countAllMoney($(this));
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
				countAllMoney($(this));
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
				countAllMoney($(this));
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
				var allMoney=null;
				var single=[];
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
				where.find(".lastAll").text(allMoney);
			}
			//点击编辑  删除
			var alreadyEdit=0;
			var proId=null;
			var proIdArr=[];
			$(".shopName").find("a").on("touchend",function(){
				
				if($(this).attr("edit")=="1"){
					$(this).text("完成");
					$(this).parent().parent().find(".operate").attr("class","operate operate-delete").text("删除");
					$(this).attr("edit","0");
					$(this).parent().parent().find(".operate-delete").on("touchend",function(){
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
		//				countAllMoney($(this));

					});
					$(this).parents(".cartSort").find(".actNum").hide();
					$(this).parents(".cartSort").find(".total").hide();
					alreadyEdit=1;
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
				console.log(alreadyEdit)
			});
			//选中
			var cntChooseLen=0;
			var cntChooseSure=0;
			$(".shopItem").find(".choose").on("touchend",function(){
				if(alreadyEdit==0)
					checked($(this));
			});
			function checked(checked){
				if(checked.attr("has")==0){
					checked.addClass("choose-sure");
					checked.attr("has","1");
					checked.parents(".shopItem").attr("del","1");
						console.log(checked.attr('proId'));
						
						if(proId != null){
							proId += ","+checked.attr('proId')
						}else{
							proId = checked.attr('proId')
						}
						proIdArr.push(checked.attr('proId'));
						console.log(proIdArr)
						
				}
				else{
					checked.removeClass("choose-sure");
					checked.attr("has","0");
					checked.parents(".shopItem").attr("del","0");
					proId=null;
					for(var i in proIdArr){
						if(checked.attr('proId')==proIdArr[i]){
							proIdArr.splice(i,1)
						}
						
					}
				
					for(var j=0; j<proIdArr.length; j++){
						if(proId != null){
							proId += ","+proIdArr[j]
						}else{
							proId = proIdArr[j]
						}
					}
					console.log(proIdArr)
					
					
				}
				console.log(proId)
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
				if($(this).attr("has")==0){
					$(this).addClass("choose-sure");
					$(this).attr("has","1");
					$(this).parent().parent().find(".choose").addClass("choose-sure").attr("has","1");
					$(this).parents(".cartSort").attr("delAll","1");
					$(this).parents(".cartSort").find(".shopItem").attr("del","1");
					//console.log()
					proId = null;
					var cose = $(this).parent().parent().find(".choose")
					for(var i=0; i<cose.length; i++){
						console.log(cose.eq(i).attr('proId'))
						proIdArr.push(cose.eq(i).attr('proId'));
						proIdArr.splice(cose.length-1,1);
						
					}
					console.log(proIdArr)
					for(var j=0; j<proIdArr.length; j++){
						if(proId != null){
							proId += ","+proIdArr[j]
							console.log(proIdArr)
						}else{
							proId = proIdArr[j]
						}
					}
					console.log(proId)
					
				}
				else{
					$(this).removeClass("choose-sure");
					$(this).attr("has","0");
					$(this).parent().parent().find(".choose").removeClass("choose-sure").attr("has","0");
					$(this).parents(".cartSort").attr("delAll","0");
					$(this).parents(".cartSort").find(".shopItem").attr("del","0");
					proId = null
				}
				if(alreadyEdit==0){
					$(this).parents(".cartSort").find(".fail").children("a").attr("has","0").removeClass("choose-sure");
					$(this).parents(".cartSort").attr("delAll","0");
				}

			});

			$('.operate').on('touchend',function() {

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
				}
			})
			

			// if(proId==null){
			// 				alert("请选择你要删除的商品")
			// 			}else{
			// 				delPro(proId)
			// 			}
	
	//console.log($('.actNum .itemNum').length)

        }
    }
});




// var arr = [0,1,2]
// arr.splice(2,1);
// console.log(arr)
define(function (require) {
    var tpl = require('tpl/comment.html');
    return {
        title: '订单评价',
        body: tpl,
        init: function () {
            
      		$(document).ready(function(){
				var $picBox = $('.pic-box'),
					total = {};
					for (var i = 0; i < $picBox.length; i++) {
						total[i] = {
							'num':i,
							'n':0
						};
					};
					picHTML1 = '<div class="pic pr fl"><div class="upload-btn pa"><input accept="image/*" name="pic';
					picHTML2 = '" type="file"><i class="bg pa db sp"></i></div><div class="picture ovh"></div><a href="javascript:;" class="close pa db sp"></a></div>';
				$.extend($.fn,{
					addPicDiv: function(i){
						var _this = $(this),
							_praent = _this.parent();
						$.imageFileVisible({
							wrapSelector: _this.find('.picture'),
							wrapInput: _this.find('.upload-btn'),
						    fileSelector: _this.find('input')[0],
						    closeBtn: _this.find('.close'),
						    change: function(){
						    	_this.addClass('success');
						    	_this.find('.close').on('touchend',function(){
						    		_this.remove();
						    		if (_praent.find('.success').length >= 2) {
						    			total[i].n++;
						    			_praent.append(picHTML1+total[i].num+'_'+total[i].n+picHTML2);
						    			_praent.find('.pic').each(function(){
						    				$(this).addPicDiv(total[i].num);
						    			});
						    		}
						    		return false;
						    	});
						    	if (_praent.find('.pic').length < 3) {
						    		total[i].n++;
						    		_praent.append(picHTML1+total[i].num+'_'+total[i].n+picHTML2);
						    		_praent.find('.pic').each(function(){
						    			$(this).addPicDiv(total[i].num);
						    		});
						    	}
						    }
						});
					}
				});
				
				$picBox.each(function(i){
					var n = i;
					$(this).html(picHTML1+total[i].num+'_'+total[i].n+picHTML2);
					$(this).find('.pic').each(function(){
						$(this).addPicDiv(n);
					});
				});

				// 选择评价星星
				var $star = $('#comment-star a'),
					starNum = 5;  // 星级
				$star.on('touchend',function(){
					starNum = $star.index($(this)) + 1;
					$star.removeClass('on');
					for (var i = 0; i < starNum; i++) {
						$star.eq(i).addClass('on');
					};
				});

				// 匿名选择
				var $anonymousBtn = $('.anonymous a');
				$anonymousBtn.on('click',function(){
					if ($(this).hasClass('on')) {
						$(this).removeClass('on');
					} else{
						$(this).addClass('on');
					}
				});
			});
        },
        beforeopen : function(){
        	// 重置滚动条到顶部
        	$('.comment-wrap .border-box').scrollTop(0,0);
        	// 控制底部导航栏状态
        	$('.nav-box').hide();
        }
    }
});
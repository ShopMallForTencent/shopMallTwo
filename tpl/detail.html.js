define(function () {return '<div class=\'page-container-wrap\' id=\'page-container-wrap\'><link rel="stylesheet" href="./css/ware.css"><div class="wrap ware-wrap pr" id="wrap"><a class=\'backtotop lsp\' href="javascript:;" title=\'返回顶部\'>返回顶部</a><div class="border-box"><div class=\'ware withebg\'><div class=\'ware_img\'><div class="swiper-container" id=\'swiper-container\'><span class=\'sp_idx\'>1/5</span><div class="swiper-wrapper" id=\'swiper-wrapper\'><script id="banner" type="text/html">{{if isAdmin}}{{each bannerImg_list as value index}}<div class=\'swiper-slide\'><img src={{value}}></div>{{/each}}{{/if}}</'+'script></div></div></div><div class=\'ware_msg\' id=\'ware_msg\'><script id="ware_msg_art" type="text/html">{{if isAdmin}}<h2 class=\'ware_name\'>{{name}}</h2><p class=\'about_ware gray\'>{{introduction}}</p>{{/if}}</'+'script></div><div class=\'ware_price\' id=\'ware_price\'><script id="ware_price_art" type="text/html">{{if isAdmin}}<ul><li class=\'fl dil lx1\'>&yen;{{public_list.p_specification[0].price/100}}</li><li class=\'fl dil lx2 gray\'><del>&yen;{{public_list.p_specification[0].m_price/100}}</del></li><li class=\'fl dil lx4 gray\'>近期销量：<span>{{public_list.sales}}</span></li><li class=\'fl dil lx3 gray\'>总库存：<span>{{public_list.t_stock}}</span></li></ul>{{/if}}</'+'script></div></div><!--ware E--><!--ware_nav S--><div class=\'ware_nav_body\' id=\'ware_nav_body\'><div class=\'ware_nav clearfix\' id=\'ware_nav\'><a class=\'db fl border-line-bot select\' href="javascript:" title=\'商品介绍\'>商品介绍</a><a class=\'db fl border-line-bot\' href="javascript:" title=\'规格参数\'>规格参数</a><a class=\'db fl border-line-bot\' href="javascript:" title=\'买家评论\'>买家评论</a></div></div><!--ware_nav E--><!--商品介绍 S--><div id=\'spxq\' class=\'spxq\'><script id="spxq_art" type="text/html">{{if isAdmin}}{{if countent}}<ul>{{each countent as value index}}<li>{{value}}</li>{{/each}}</ul>{{else}}<p class="not-explain txc">没有商品介绍</p>{{/if}}{{/if}}</'+'script></div><!--商品介绍 E--><!--规格参数 S --><div id=\'ggcs\' class=\'ggcs\' style=\'display:none;\'><script id="ggcs_art" type="text/html">{{if isAdmin}}<div class="table-box"><table border=\'1\'>{{ #parameter | wareSpecifications }}</table></div>{{else}}<p class="not">没有规格参数！</p>{{/if}}</'+'script></div><!--规格参数 E --><!--买家评论 S --><div id=\'user_pj\' class=\'user_pj\' style=\'display:none;\'><div id=\'discuss_pj\' class=\'discuss_pj\'><script id="user_pj_art" type="text/html">{{if isAdmin}}<dl><dt class=\'gray\'><strong>评价 </strong><span>({{review.length}}条)</span></dt><dd><span>综合评价</span><p class=\'starlilst fr\'>{{ #public_list.ave_score | dateFormat}}</p></dd></dl>{{/if}}</'+'script></div><div id=\'user_comment\'><script id="user_art" type="text/html">{{if isAdmin}}{{if review.length == 0}}<div class="tips txc">没有客户评论，赶紧来评论吧！</div>{{else if review.length > 0 && review.length <= 3}}{{each review as value index}}<div class=\'user\'><ul class=\'user_buy_data\'><li class=\'dil lx1 fl\'><span><img src={{review[index].portrait}}></span></li><li class=\'dil lx2 fl\'>{{review[index].name}}</li><li class=\'dil lx3 fr\'>{{review[index].c_time}}</li></ul><div class=\'user_main border-line-top\'><p class=\'starlilst\'>{{ #review[index].score | dateFormat}}</p><p class=\'pj gray\'>{{review[index].content}}</p><ol>{{ #review[index].image | getUserImage }}</ol><p class=\'buydata gray\'><span class=\'fl\'>类别：<em>{{review[index].specifications}}</em></span><span class=\'fr\'>购买日期：<em>{{review[index].p_time}}</em></span></p></div></div>{{/each}}{{else if review.length > 3}}{{each review as value index}}<div class=\'user\'><ul class=\'user_buy_data\'><li class=\'dil lx1 fl\'><span><img src={{review[index].portrait}}></span></li><li class=\'dil lx2 fl\'>{{review[index].name}}</li><li class=\'dil lx3 fr\'>{{review[index].c_time}}</li></ul><div class=\'user_main\'><p class=\'starlilst\'>{{ #review[index].score | dateFormat}}</p><p class=\'pj gray\'>{{review[index].content}}</p><ol>{{ #review[index].image | getUserImage }}</ol><p class=\'buydata gray\'><span class=\'fl\'>类别：<em>{{review[index].specifications}}</em></span><span class=\'fr\'>购买日期：<em>{{review[index].p_time}}</em></span></p></div></div>{{/each}}<div class="tips txc">下拉加载更多...</div>{{/if}}{{/if}}</'+'script></div></div><!--买家评论 E --></div><!--buy_nav S --><div class=\'buy_nav\' id=\'buy_nav\'><ul class=\'yh\'><li class=\'fl lx1\'><a href="#tpl/chatSystem" title=\'客服\'><strong>客服</strong><i></i></a></li><li class=\'fl lx2\'><span>5</span><a href="#tpl/cart" title=\'购物车\'><strong>购物车</strong><i></i></a></li><li class=\'fl lx3\'><a href="javascript:showDialog(\'jrgwc\')" title=\'加入购物车\'>加入购物车</a></li><li class=\'fl lx4\'><a href="javascript:showDialog(\'ljgm\')" title=\'立即购买\'>立即购买</a></li><li class=\'fl lx5\'><a href="javascript:" title=\'已售完\'>已售完</a></li><li class=\'fl lx6\'><a href="javascript:" title=\'已下架\'>已下架</a></li></ul></div><!--buy_nav E --><!--立即购买弹窗 S--><div class=\'ljgm gmtc gmtc_show\' id=\'ljgm\' style=\'display:none;\'><div class=\'gmtc_main\'><a class=\'close\' href="javascript:closeDialog(\'ljgm\')" title=\'关闭\'>×</a><div class=\'sp_price border-line-bot\' id=\'sp_price_ljgm\'><script id="sp_price_ljgm_art" type="text/html"><span class=\'imgbox dil\'><em><img src={{p_specification[0].image}}></em></span><div class=\'sp_price_text\'><p class=\'p1\'>{{name}}</p><p class=\'p2\'>&yen;<span>{{p_specification[0].price / 100}}</span></p></div></'+'script></div><div class=\'sp_color border-line-bot\' id=\'sp_color_gm\'><script id="ljgm_art" type="text/html">{{if isAdmin}}{{each g_specification as value index}}<div class=\'ware_sp_list\'><h2>{{g_specification[index].name}}</h2><div class=\'sp_color_bnt clearfix\' id=sp_color_bnt_{{index}}>{{each g_specification[index].value as value count}}<a zdy={{g_specification[index].value[count].id}} class=\'have small\' href="javascript:">{{g_specification[index].value[count].name }}</a>{{/each}}</div></div>{{/each}}{{/if}}</'+'script></div><div class=\'sp_val clearfix\' id=\'sp_val_ljgm\'><script id="sp_val_ljgm_art" type="text/html"><p class=\'dil\'>数量　</p><div class=\'jzq dil clearfix\'><strong>(库存: <em class=\'kc\'>{{p_specification[0].stock}}</em>)</strong><div class="fl"><span class=\'min\'>-</span><span class=\'text_box\'>1</span><span class=\'add\'>+</span></div></div></'+'script></div><a class=\'ljgmbnt\' href="javascript:" title=\'立即购买\'>立即购买</a></div></div><!--立即购买弹窗 E--><!--加入购物车弹窗 S--><div class=\'jrgwc gmtc gmtc_show\' id=\'jrgwc\' style=\'display:none;\'><div class=\'gmtc_main\'><span class=\'shop_car_success\'><img src="../images/ware/shop_car_success.png"></span><a class=\'close\' href="javascript:closeDialog(\'jrgwc\')" title=\'关闭\'>×</a><div class=\'sp_price border-line-bot\' id=\'sp_price_jrgwc\'></div><div class=\'sp_color border-line-bot\' id="sp_color_jrgwc"></div><div class=\'sp_val\' id=\'sp_val_jrgwc\'></div><a id=\'jrgwcbnt\' class=\'ljgmbnt jrgwcbnt\' href="javascript:" title=\'加入购物车\'>加入购物车</a></div></div><!--加入购物车弹窗 E--></div></div><!--<li class=\'fl dil lx1\'>&yen;{{price}}</li><li class=\'fl dil lx2 gray\'><del>&yen;{{market_price}}</del></li><li class=\'fl dil lx4 gray\'>近期销量：<span>{{sales}}</span></li><li class=\'fl dil lx3 gray\'>总库存：<span>{{t_stock}}</span></li>-->';});
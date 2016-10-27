var $doc = $(document);

// 首页
var pageHome = {
    route: '',
    classname: 'index',
    animate: 'fadeIn',
    view: function() {
        var $page = this;
        seajs.use(['js/index'], function(viewData) {
            $doc.trigger('spa:initpage', [$page, viewData]);
        });
    }
};

// 分类页
var sortPage = {
  route: 'tpl/sort',
  classname: 'sort',
  animate: 'fadeIn',
  view: function() {
    var $page = this;
    seajs.use(['js/sortPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
};


// 购物车
var shoppingCartPage = {
  route: 'tpl/shoppingCart',
  classname: 'shoppingCart',
  animate: 'fadeIn',
  view: function() {
    var $page = this;
    seajs.use(['js/shoppingCartPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
};


// 个人中心
var personalPage = {
  route: 'tpl/personal',
  classname: 'personal',
  animate: 'fadeIn',
  view: function() {
    var $page = this;
    seajs.use(['js/personalPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
};

// 商品详情页
var warePage = {
  route: 'tpl/ware',
  classname: 'ware',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/warePage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// 支付页
var ensureOrderPage = {
  route: 'tpl/ensureOrder',
  classname: 'ensureOrderPage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/ensureOrderPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// 订单详情
var OrderPage = {
  route: 'tpl/OrderPage',
  classname: 'OrderPage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/OrderPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// 联系客服
var chatSystemPage = {
  route: 'tpl/chatSystem',
  classname: 'chatSystemPage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/chatSystemPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// order_detials
var orderDetailsPage = {
  route: 'tpl/orderDetails',
  classname: 'orderDetailsPage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/orderDetailsPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// 售后服务
var ServicePage = {
  route: 'tpl/Service',
  classname: 'ServicePage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/ServicePage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// 常见问题
var ProblemPage = {
  route: 'tpl/Problem',
  classname: 'ProblemPage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/ProblemPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// 消息中心
var chattingPage = {
  route: 'tpl/chatting',
  classname: 'chattingPage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/chattingPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// 收货地址
var addressPage = {
  route: 'tpl/address',
  classname: 'addressPage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/addressPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// 新增收货地址
var inputAddPage = {
  route: 'tpl/inputAdd',
  classname: 'inputAddPage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/inputAddPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// 评价
var commentPage = {
  route: 'tpl/comment',
  classname: 'commentPage',
  animate: 'default',
  view: function() {
    var $page = this
    seajs.use(['js/commentPage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}


$doc.trigger('spa:route', [pageHome,sortPage,shoppingCartPage,personalPage,warePage,ensureOrderPage,OrderPage,chatSystemPage,orderDetailsPage,ServicePage,ProblemPage,chattingPage,addressPage,inputAddPage,commentPage])

// demo:侧边栏菜单
var demoPanelSidemenu = {
  id: 'demoPanelSidemenu',
  classname: 'demo-panel-sidemenu',
  animate: 'revealInRight',
  view: function() {
    var $panel = this
    requirejs(['demo.panelsidemenu'], function(viewData) {
      $doc.trigger('spa:initpanel', [$panel, viewData])
    })
  }
}

// demo:提示对话框
var demoPanelAlert = {
  id: 'demoPanelAlert',
  classname: 'demo-panel-alert',
  animate: 'zoomIn',
  view: function() {
    var $panel = this
    requirejs(['demo.panelalert'], function(viewData) {
      $doc.trigger('spa:initpanel', [$panel, viewData])

      var $dialog = $('.panel', $panel)

      //高度居中
      $dialog.css({marginTop: ($panel.height() - $dialog.prop('offsetHeight')) / 2})

      $panel.on('click touchstart', 'button', function(event) {
        $panel.trigger('spa:closepanel')
        event.stopPropagation()
        event.preventDefault()
      })
    })
  }
}

// demo:确认对话框
var demoPanelConfirm = {
  id: 'demoPanelConfirm',
  classname: 'demo-panel-confirm',
  animate: 'overlayInUp',
  view: function() {
    var $panel = this
    requirejs(['demo.panelconfirm'], function(viewData) {
      $doc.trigger('spa:initpanel', [$panel, viewData])
    })
  }
}

// demo:面板视图转换动画
var demoPanelTransit = {
  id: 'demoPanelTransit',
  classname: 'demo-panel-transit',
  animate: 'overlayInLeft',
  view: function() {
    var $panel = this
    requirejs(['demo.paneltransit'], function(viewData) {
      $doc.trigger('spa:initpanel', [$panel, viewData])
    })
  }
}

$doc.trigger('spa:panel', [demoPanelSidemenu, demoPanelAlert, demoPanelConfirm, demoPanelTransit])


$(function() {
  $doc.trigger('spa:boot')
})

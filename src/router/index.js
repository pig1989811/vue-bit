import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index';
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/online/index',
      name: 'Online',
      component: require('../pages/online/index'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/online/vip',
      name: 'VIP',
      component: require('../pages/online/vip'),
      meta: {
        keepAlive: true
      }
    },{
      path: '/online/products',
      name: 'Products',
      component: require('../pages/online/products'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/online/product',
      name: 'Product',
      component: require('../pages/online/product'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/online/comment',
      name: 'Comment',
      component: require('../pages/online/comment'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/online/settle',
      name: 'SettleBalance',
      component: require('../pages/online/settle'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/online/shoppingcart',
      name: 'ShoppingCart',
      component: require('../pages/online/cart'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/online/allcolumn',
      name: 'AllColumn',
      component: require('../pages/online/allcolumn'),
      meta: {
        keepAlive: true
      }
    },{
      path: '/address/index',
      name: 'AddressManage',
      component: require('../pages/address/index'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/address/edit',
      name: 'AddressEdit',
      component: require('../pages/address/edit'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/address/new',
      name: 'AddressNew',
      component: require('../pages/address/new'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/me/index',
      name: 'Me',
      component: require('../pages/me/index'),
      meta: {
        requireAuth: true,
        keepAlive: true
      }
    }, 
    {
      path: '/me/recommendhistory',
      name: 'RecommendHistory',
      component: require('../pages/me/recommendhistory'),
      meta: {
        keepAlive: false
      }
    },{
      path: '/order/index',
      name: 'MyOrder',
      component: require('../pages/order/index'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/order/detail',
      name: 'OrderDetail',
      component: require('../pages/order/orderdetail'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/order/addcomment',
      name: 'AddComment',
      component: require('../pages/order/addcomment'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/me/mywallet',
      name: 'MyWallet',
      component: require('../pages/me/mywallet'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/me/qrcode',
      name: 'Qrcode',
      component: require('../pages/me/qrcode'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/me/recommend',
      name: 'Recommend',
      component: require('../pages/me/recommend'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/me/updateApp',
      name: 'UpdateApp',
      component: require('../pages/me/updateApp'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/me/login',
      name: 'Login',
      component: require('../pages/me/login'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/me/regpro',
      name: 'RegPro',
      component: require('../pages/me/regpro'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/me/forgetpwd',
      name: 'Forgetpwd',
      component: require('../pages/me/forgetpwd'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/me/pwdmanage',
      name: 'PwdManage',
      component: require('../pages/me/pwdmanage'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/me/update',
      name: 'Update',
      component: require('../pages/me/update'),
      meta: {
        keepAlive: true
      }
    },{
      path: '/trade/bankcard',
      name: 'BankCard',
      component: require('../pages/trade/bankcard'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/trade/newbank',
      name: 'NewBank',
      component: require('../pages/trade/newbank'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/trade/cashhistory',
      name: 'CashHistory',
      component: require('../pages/trade/cashhistory'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/treasure/index',
      name: 'TreasureIndex',
      component: require('../pages/treasure/index'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/treasure/in',
      name: 'TreasureIn',
      component: require('../pages/treasure/in'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/treasure/out',
      name: 'TreasureOut',
      component: require('../pages/treasure/out'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/treasure/list',
      name: 'TreasureList',
      component: require('../pages/treasure/list'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '/treasure/cash',
      name: 'TreasureCash',
      component: require('../pages/treasure/cash'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/news/index',
      name: 'News',
      component: require('../pages/news/index'),
      meta: {
        keepAlive: true
      }
    }, {
      path: '/news/detail',
      name: 'NewsDetail',
      component: require('../pages/news/detail'),
      meta: {
        keepAlive: false
      }
    }, {
      path: '*',
      redirect: '/online/index'
    }
  ]
})
router.afterEach((to, from) => {
  let s = document.querySelector("main") && document.querySelector("main").scrollTop
  store.commit('SAVE_POSITION', {
    name: from.path,
    position: s
  });
})
export default router;

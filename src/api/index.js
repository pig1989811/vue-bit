let baseUrl = "http://www.tiantiandui.shop/gjfeng-web-client"; //比特域名
const VERSION = 'v1_0';
let index = `${baseUrl}/app/index/${VERSION}`,
  pd = `${baseUrl}/app/product/${VERSION}`,
  cart = `${baseUrl}/app/cart/${VERSION}`,
  address = `${baseUrl}/app/address/${VERSION}`,
  rule = `${baseUrl}/app/rule/${VERSION}`,
  member = `${baseUrl}/app/member/${VERSION}`,
  order = `${baseUrl}/app/order/${VERSION}`,
  trade = `${baseUrl}/app/trade/${VERSION}`;

let onlineInH5 = `${index}/onlineInH5` //网上商城首页
let ygOnlineShopIndex = `${index}/ygOnlineShopIndex` //网上商城商品
let findNewsList = `${index}/findNewsList` //资讯列表
let findNewsById = `${index}/findNewsById` //资讯详情

let onlineProductsByAllColumn = `${pd}/online/onlineProductsByAllColumn` //网上商城栏目下的商品
let onlineProductsDetailInfoInH5 = `${pd}/online/onlineProductsDetailInfoInH5` //网上商城商品详情
let stockAndPrice = `${pd}/online/product/stockAndPrice` //商品价格和库存
let allColumn = `${pd}/online/allColumn` //商城所有分类

let imageUploadBStore = `${baseUrl}/wx/store/imageUploadBStore` //上传图片
let appMyQr = `${baseUrl}/wx/member/appMyQr` //二维码

let myCart = `${cart}/myCart` //我的购物车
let updateCartNum = `${cart}/updateCartNum` //修改购物车数量
let delCart = `${cart}/delCart/` //移除购物车
let addCart = `${cart}/addCart` //添加购物车

let getCityName = `${address}/getCityName` //根据经纬度获取城市
let getMyAddress = `${address}/getMyAddress` //我的收货地址
let getAddressDetail = `${address}/getAddressDetail` //我的收货地址详细信息
let updateAddressInIos = `${address}/updateAddressInIos` //修改收货地址
let defaultAddress = `${address}/default` //设置默认地址
let delAdress = `${address}/delAdress` //删除收货地址
let newsAddressInIos = `${address}/newsAddressInIos` //新增收货地址
let newsAddress = `${address}/newsAddress` //新增收货地址
let getAreaByType = `${address}/getAreaByType` //获取省市区信息

let register = baseUrl + `/app/${VERSION}/register` //注册
let login = baseUrl + `/app/${VERSION}/login` //登录
let forgetPassWord = baseUrl + `/app/${VERSION}/forgetPassWord` //忘记密码
let updataLoginPassword = baseUrl + `/app/${VERSION}/updataLoginPassword` //忘记密码

let memService = `${rule}/memService` //服务协议
let newNotice = `${rule}/memberCooperationRule` //最新通知

let sendcode = baseUrl + `/sms/send` //获取验证码

let my = `${member}/my` //我的信息
let realNameByAly = `${member}/realNameByAly` //用户实名认证
let update = `${member}/update` //编辑个人信息
let myQr = `${member}/myQr` //我的二维码
let countMemberInfo = `${member}/countMemberInfo` //我的钱包
let myWallet = `${member}/myWallet` //我的钱包2
let setPay = `${member}/setPay` //设置支付密码
let getMemberLowerLevel = `${member}/getMemberLowerLevel` //获取用户下级
let findMemberByMoblie = `${member}/findMemberByMoblie` //根据手机号获取用户信息

let getOrder = `${order}/getOrder` //我的订单
let orderDetail = `${order}/detail` //订单详情
let updateOrderStatus = `${order}/updateOrderStatus` //确认收货
let findO2oOrderByPage = `${order}/findO2oOrderByPage` //店铺订单
let addOrder = `${order}/addOrder` //下单
let toAdd = `${order}/toAdd` //立即购买下单
let actCartInH5 = `${order}/actCartInH5` //结算购物车
let payOrderSign = `${order}/payOrderSign` //订单付款
let findOrderPos = `${order}/findOrderPos` //邮费

let newProCommet = baseUrl + `/app/comment/${VERSION}/newProCommet` //添加评论
let getAllProCommetByPage = baseUrl + `/app/comment/${VERSION}/getAllProCommetByPage` //获取评论

let myBanks = `${trade}/myBanks` //银行卡列表
let bindBank = `${trade}/bindBank` //添加银行卡
let getAllBank = `${trade}/getAllBank` //所有银行卡信息
let deleteMemBank = `${trade}/deleteMemBank` //删除银行卡
let getDrawHistory = `${trade}/getDrawHistory` //提取历史
let addDrawCash = `${trade}/addDrawCash` //添加提现
let toFhTreasurePage = `${trade}/toFhTreasurePage` //跳转到钱包页面
let toBalanceTransferPage = `${trade}/toBalanceTransferPage` //跳转到转移余额到钱包页面
let transderBalanceToTreasure = `${trade}/transderBalanceToTreasure` //把余额转移到钱包
let transderMerchantDirectMoneyToTreasure = `${trade}/transderMerchantDirectMoneyToTreasure` //把奖励金转移到钱包
let transferFhTreasurePage = `${trade}/transferFhTreasurePage` //转移钱包金额给用户
let toFhTreasureDrawCash = `${trade}/toFhTreasureDrawCash` //跳转到钱包提现页面
let addFhTreasureDrawCash = `${trade}/addFhTreasureDrawCash` //钱包提现
let toFhTreasureTradeHistory = `${trade}/toFhTreasureTradeHistory` //钱包交易记录
let findMemberDirectMemberMoney = `${trade}/findMemberDirectMemberMoney` //获取推荐奖励

let findAppUpgredeByType = `${baseUrl}/app/upgrede/${VERSION}/findAppUpgredeByType` //APP版本信息
export {
  onlineInH5,
  ygOnlineShopIndex,
  findNewsList,
  findNewsById,

  products,
  product,

  onlineProductsByAllColumn,
  onlineProductsDetailInfoInH5,
  stockAndPrice,
  allColumn,

  imageUploadBStore,
  appMyQr,
  memberCooperationRule,

  myCart,
  updateCartNum,
  delCart,
  addCart,

  getCityName,
  getMyAddress,
  getAddressDetail,
  updateAddressInIos,
  defaultAddress,
  delAdress,
  newsAddressInIos,
  newsAddress,
  getAreaByType,

  register,
  login,
  forgetPassWord,
  updataLoginPassword,

  memService,
  newNotice,

  sendcode,

  my,
  realNameByAly,
  update,
  myQr,
  countMemberInfo,
  myWallet,
  setPay,
  getMemberLowerLevel,
  findMemberByMoblie,

  getOrder,
  orderDetail,
  updateOrderStatus,
  findO2oOrderByPage,
  addOrder,
  toAdd,
  actCartInH5,
  payOrderSign,
  findOrderPos,

  newProCommet,
  getAllProCommetByPage,

  myBanks,
  bindBank,
  getAllBank,
  deleteMemBank,
  getDrawHistory,
  addDrawCash,
  toFhTreasurePage,
  toBalanceTransferPage,
  transderBalanceToTreasure,
  transderMerchantDirectMoneyToTreasure,
  transferFhTreasurePage,
  toFhTreasureDrawCash,
  addFhTreasureDrawCash,
  toFhTreasureTradeHistory,

  findMemberDirectMemberMoney,

  findAppUpgredeByType,
}

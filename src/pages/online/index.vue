<template>
  <div>
    <header class="head-top flex align-center">
      <div class="left-icon">
        <img :src="getLocalImg('logo.png')">
      </div>
      <div class="search-container2 flex-1" @click="navigate('Products',{id:1333,type:1})">
        <span class="iconfont self-search"></span>
        <input type="text" disabled placeholder="搜索商品...">
      </div>
      <div class="right-icon text-center">
        <router-link to="/news/index?update=true">
          <span class="iconfont-large self-message"></span>
        </router-link>
      </div>
    </header>
    <ul class="nav-list" ref="swipeList">
      <li class="nav-item nav-item__title danger-color">
        <span>分类</span><span class="iconfont self-category"></span>
      </li>
      <li v-for="(item,index) in column" :key="index" @click="navigate2('Products',{id:item.id,type:1},index)" class="nav-item" :class="{'nav-active':curIndex == index}">
        <span>{{item.names}}</span>
      </li>
    </ul>
    <main class='scroll-content-1' style="top: 1.7rem;">
      <section>
        <yd-slider :loop="false" :autoplay="2000">
          <yd-slider-item v-for="(item,index) in info.indexAds" :key="item.id">
            <router-link :to="{name:'Product',query:{id:item.address.substring(item.address.lastIndexOf('/')+1),tips:0}}" v-if="index==0">
              <img :src="item.photo" :alt="item.names">
            </router-link>
          </yd-slider-item>
          <!-- <yd-slider-item @click.native="goMerchant">
            <img :src="getLocalImg('tt_1.jpg')" alt="会员专享">
          </yd-slider-item> -->
        </yd-slider>
      </section>
      <!-- 四大平台 -->
      <section class="platform-container">
        <div class="login-btn" @click="login" v-if="!member">登录/注册</div>
        <div class=" flex just-around">
          <div class="platform-item flex-1" @click="navigate('Products',{id:1333,type:1})">
          <img :src="getLocalImg('1.jpg')">
          <p>优佳兑商城</p>
        </div>
        <div class="platform-item flex-1" @click="navigate('Products',{id:1342,type:1})">
          <img :src="getLocalImg('2.jpg')">
          <p>福宝兑换</p>
        </div>
        <div class="platform-item flex-1" @click="navigate('Products',{id:1336,type:1})">
          <img :src="getLocalImg('3.jpg')">
          <p>福宝+现金兑换</p>
        </div>
        <div class="platform-item flex-1">
          <a href="http://bfcc.btfbfcc.com/view/index.html">
            <img :src="getLocalImg('4.jpg')">
            <p>比特金福</p>
          </a>
        </div>
        <div class="platform-item flex-1" @click="navigate('')">
          <img :src="getLocalImg('5.jpg')">
          <p>充值中心</p>
        </div>
        </div>
      </section>
      <section class="fresh-container">
        <ul class="flex just-between" @click="navigate('')">
          <li class="fresh-item">
            <img :src="getLocalImg('6.png')" alt="">
          </li>
          <li class="fresh-item">
            <img :src="getLocalImg('7.png')" alt="">
          </li>
          <li class="fresh-item">
            <img :src="getLocalImg('8.png')" alt="">
          </li>
          <li class="fresh-item">
            <img :src="getLocalImg('9.png')" alt="">
          </li>
        </ul>
      </section>
      <section class="ads-container">
        <a href="http://bfcc.btfbfcc.com/view/index.html">
          <img src="http://api.btfbfcc.com/resources/upload/20180601/940107d3f6ce41768c48374bc6c5cea9.jpg" alt="">
        </a>
      </section>
      <!-- 商品展示 -->
        <section class="pd-list clearfix">
            <router-link :class="['pd-item pd-item__middle fl']" v-for="(item,index) in productList" :key="index" :to="{path:'/online/product',query:{id:item.id}}">
              <div class="img-cover">
                <img :src="item.imgUrl">
              </div>
              <div class="pd-info">
                <div class="pd-name">{{item.name}}</div>
              <!-- <div class="pd-attr">{{item.name}}</div> -->
              <div class="pd-price"><span class="danger-color">￥{{item.price}}</span></div>
              </div>
            </router-link>
        </section>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import { mapState } from "vuex";
import HeaderTop from "components/header/index";
import FooterBar from "components/footer/index";
import { mixin, getStore, setStore, localImg } from "components/common/mixin";
import {
  ygOnlineShopIndex,
  findAppUpgredeByType,
  onlineProductsByAllColumn,
  allColumn
} from "../../api/index";
export default {
  name: "Online",
  data() {
    return {
      oldBack: mui.back,
      info: {},
      productList: [],
      loginAccount: false,
      column: [],
      curIndex: 0,
      scrollLeft: 0, //记录tab滚动值
      type: "", //APP环境
      curVersion: "" //app版本
    };
  },
  components: { HeaderTop, FooterBar },
  computed: { ...mapState(["account", "member"]) },
  mixins: [mixin, localImg],
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.plusReady();
    });
  },
  beforeRouteLeave(to, from, next) {
    mui.back = this.oldBack;
    next();
  },
  created() {
    this.init();
    this.getInfo();
    this.getColumn();
    this.getProducts();
  },
  mounted() {
    document.addEventListener("plusready", this.getVersion, false);
  },
  activated() {
    if (getStore("account") && getStore("account").length > 0) {
      this.loginAccount = true;
      this.$store.commit("SET_ACCOUNT", getStore("account"));
      if (!this.member) {
        this.$store.dispatch("getInfo");
      }
    } else {
      this.loginAccount = false;
    }
    if (this.$store.state.positions[this.$route.path]) {
      document.querySelector("main").scrollTop = this.$store.state.positions[
        this.$route.path
      ];
    }
  },
  methods: {
    init() {
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1; //android终端
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      this.type = isiOS ? "1" : "0";
    },
    getInfo() {
      let vm = this;
      this.$dialog.loading.open();
      mui.ajax({
        url: ygOnlineShopIndex,
        type: "post",
        headers: { "app-version": "v1.0" },
        data: {
          token: md5(`gjfengygOnlineShopIndex`)
        },
        success(res) {
          vm.$dialog.loading.close();
          vm.info = res.result;
        },
        error(e) {
          vm.$dialog.loading.close();
          vm.$dialog.toast({
            mes: "网络异常，请稍后重试！"
          });
        }
      });
    },
    getColumn() {
      let vm = this;
      mui.ajax({
        url: allColumn,
        type: "post",
        headers: { "app-version": "v1.0" },
        data: {
          token: md5(`gjfengallColumn`)
        },
        success(res) {
          let _result = res.result;
          let menu = [];
          Object.entries(_result).forEach((value, index) => {
            var item = {};
            var parent = value[0],
              children = value[1];
            if (children.length > 0) {
              menu.push(...children);
            }
          });
          vm.column = menu;
        }
      });
    },
    getProducts() {
      let vm = this;
      mui.ajax({
        url: `${onlineProductsByAllColumn}/1/1333`,
        type: "post",
        headers: { "app-version": "v1.0" },
        data: {
          pageNo: 1,
          pageSize: 10,
          longitude: "",
          latitude: "",
          likeValue: "",
          token: md5(`gjfengonlineProductsByAllColumn`)
        },
        success(res) {
          let _list = res.result;
          vm.productList = [...vm.productList, ..._list];
        }
      });
    },
    goMerchant() {
      this.$router.push({ name: "VIP" });
    },
    login() {
      if (!this.member) {
        this.$router.push({ name: "Login" });
        return;
      }
      this.$router.push({ name: "Me" });
    },
    navigate(link, p) {
      //商品列表
      if (p && p.id) {
        this.$router.push({
          name: "Products",
          params: { update: true },
          query: p
        });
      } else {
        //其他平台
        if (!link) {
          this.$dialog.toast({
            mes: "功能开发中，敬请期待！"
          });
          return;
        }
        this.$router.push({ name: link });
      }
    },
    navigate2(link, p, i) {
      this.curIndex = i;
      setTimeout(() => {
        this.navigate(link, p);
      }, 500);
    },
    getVersion() {
      let vm = this;
      plus.runtime.getProperty(plus.runtime.appid, function(inf) {
        vm.curVersion = inf.version;
        if (vm.type == "0") {
          vm.findUpgrade();
        }
      });
    },
    findUpgrade() {
      let vm = this;
      mui.ajax({
        url: findAppUpgredeByType,
        type: "post",
        headers: { "app-version": "v1.0" },
        data: {
          type: this.type,
          token: md5("gjfengfindAppUpgredeByType")
        },
        success(res) {
          let _result = res.result;
          if (_result.version && vm.curVersion < +_result.version) {
            vm.$store.commit("RECORD_UPDATE", true);
            vm.$dialog.confirm({
              title: `检测到新版本：${_result.version}，是否升级？`,
              mes: `${_result.describe}`,
              opts: () => {
                let wgtUrl = _result.jumpUrl;
                vm.downloadWgt(wgtUrl);
              }
            });
          }
        }
      });
    },
    downloadWgt(url) {
      let vm = this;
      this.$dialog.loading.open("下载更新...");
      plus.downloader
        .createDownload(url, { filename: "_doc/update/" }, function(d, status) {
          if (status == 200) {
            vm.installWgt(d.filename); // 安装更新包
          } else {
            vm.$dialog.alert({
              mes: "下载更新失败！"
            });
          }
          vm.$dialog.loading.close();
        })
        .start();
    },
    installWgt(path) {
      let vm = this;
      this.$dialog.loading.open("安装更新...");
      plus.runtime.install(
        path,
        {},
        function() {
          vm.$dialog.loading.close();
          vm.$dialog.alert({
            mes: "应用资源更新完成！",
            callback: () => {
              plus.runtime.restart();
            }
          });
        },
        function(e) {
          vm.$dialog.loading.close();
          vm.$dialog.alert({
            mes: "安装更新失败[" + e.code + "]：" + e.message
          });
        }
      );
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../style/mixin.less";
.head-top {
  height: 1rem;
  background-color: @white;
  padding: 0.1rem 0.15rem;
  .left-icon img {
    .wh(0.6rem,0.6rem);
    border-radius: 50%;
  }
  .search-container2 {
    background: rgba(232, 232, 232, 0.8);
    padding: 0.15rem 0.1rem 0.15rem 0.1rem;
    border-radius: 0.4rem;
    .mg-h;
    input {
      width: 86%;
      border: none;
      padding-left: 0.1rem;
      font-size: 0.3rem;
    }
  }
  .self-search {
    display: inline-block;
    color: rgb(102, 102, 102);
    width: 0.5rem;
    border-right: 1px solid #ccc;
  }
}
.yd-slider-item img {
  height: 4rem;
}

.nav-container,
.fresh-container,
.activity-container {
  background-color: #fff;
}
.nav-list {
  padding: 0 2%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  background-color: @white;
  .nav-item {
    display: inline-block;
    width: 20%;
    height: 0.6rem;
    text-align: center;
    transition: all 0.2s;
    font-size: 0.3rem;
    &.nav-item__title {
      width: 14%;
      line-height: 0.6rem;
    }
    span {
      border-bottom: 2px solid transparent;
    }
    &.nav-active {
      span {
        color: @red;
        border-color: currentColor;
        padding: 0 0 0.1rem 0;
      }
    }
  }
}
.platform-container {
  background-color: @white;
  padding: 0 0 0.1rem;
  overflow: hidden;
  .login-btn {
    margin: 0 auto @pd;
    background: #fe6637;
    color: #fff;
    font-size: 0.32rem;
    width: 3rem;
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0 0 5px 5px;
  }
  .platform-item {
    .mg-v;
    text-align: center;
    img {
      .wh(1rem,1rem);
      border-radius: 50%;
    }
    p {
      font-size: 0.22rem;
    }
  }
}
.fresh-container {
  padding: 5px;
  .fresh-item {
    width: 49%;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
}
.ads-container {
  padding: 10px 10px 0 10px;
  img {
    width: 100%;
    border-radius: 3px;
  }
}
.pd-list {
  .pd-item {
    background-color: @white;
    margin-bottom: 0.1rem;
  }
  .pd-item__middle {
    width: 49%;
    padding: 0.1rem;
    .img-cover {
      width: 100%;
      position: relative;
      padding: 50% 0;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .pd-info {
      margin-top: 0.1rem;
      .pd-name {
        height: 40px;
        line-height: 20px;
        font-size: 0.28rem;
        .multi-ellipsis(2);
      }
      .pd-attr {
        color: @lightgray;
        font-size: 0.24rem;
        height: 40px;
        line-height: 20px;
        .multi-ellipsis(2);
      }
      .pd-price {
        font-size: 0.42rem;
      }
    }
    &:nth-of-type(2n) {
      margin-left: 1%;
    }
    &:nth-of-type(2n + 1) {
      margin-right: 1%;
    }
  }
}
</style>
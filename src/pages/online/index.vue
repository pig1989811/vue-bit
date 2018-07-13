<template>
  <div>
    <header class="head-top flex align-center">
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
    <main class='scroll-content'>
      <section>
        <yd-slider :loop="false" :autoplay="2000">
          <!-- <yd-slider-item v-for="(item,index) in info.indexAds" :key="item.id">
            <router-link :to="{name:'Product',query:{id:item.address.substring(item.address.lastIndexOf('/')+1),tips:0}}" v-if="index==0">
              <img :src="item.photo" :alt="item.names">
            </router-link>
          </yd-slider-item> -->
          <yd-slider-item @click.native="goMerchant">
            <img :src="getLocalImg('tt_1.jpg')" alt="会员专享">
          </yd-slider-item>
        </yd-slider>
      </section>
      <!-- 四大平台 -->
      <section class="nav-container clearfix">
        <div v-for="(item,index) in platform" :key="index" :class="['nav-item',index==2?'large':'']" @click="navigate(item.link,{id:item.id,type:item.type})">
          <img :src="getLocalImg(item.img)">
          <p>{{item.text}}</p>
        </div>
      </section>
      <section class="fresh-container">
        <div class="activity-header" :style="{'background-image':formatBg('20.png')}">
            <span class="jianbian-text1">新人见面礼</span>
        </div>
        <ul class="clearfix">
          <li class="fresh-item fl">
            <img :src="getLocalImg('6.png')" alt="">
          </li>
          <li class="fresh-item fl">
            <img :src="getLocalImg('7.png')" alt="">
          </li>
          <li class="fresh-item fl">
            <img :src="getLocalImg('8.png')" alt="">
          </li>
          <li class="fresh-item fl">
            <img :src="getLocalImg('9.png')" alt="">
          </li>
        </ul>
      </section>
      <section class="activity-container clearfix">
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name jianbian-text2">超级福利</h3>
            <p>短袖连衣裙￥89</p>
            <span class="activity-desc jianbian-bg1">每日10点上新</span>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('10.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name jianbian-text3">限量爆款</h3>
            <p>每日2场抢好货</p>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('11.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">9块9包邮</h3>
            <p>每日白菜价</p>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('12.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">理财福利</h3>
            <p>福利限时提升</p>
            <span class="activity-desc jianbian-bg1">月标120元+1%</span>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('13.png')" alt="">
          </div>
        </div>
      </section>
      <section class="activity-container clearfix">
        <h2 class="activity-title jianbian-text3">每·日·优·选</h2>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">全网秒杀</h3>
            <p>3斤车厘子￥55抢</p>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('14.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">好店福利</h3>
            <p>精品持续上新</p>
            <span class="activity-desc jianbian-bg2">最高返30%</span>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('15.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">全球惠选</h3>
            <p>FX券后84元3件</p>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('16.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">值·爆料</h3>
            <p>巴拉巴拉超品日</p>
            <span class="activity-desc jianbian-bg2">1件5折！</span>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('17.png')" alt="">
          </div>
        </div>
      </section>
      <section class="activity-container clearfix">
        <h2 class="activity-title jianbian-text4">特·色·频·道</h2>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">旅行福利</h3>
            <p>好房限时6折起</p>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('18.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">团购福利</h3>
            <p>好吃的在这里</p>
            <span class="activity-desc jianbian-bg3">专享1.4%</span>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('19.png')" alt="">
          </div>
        </div>
      </section>
      <section class="ads-container">
        <a href="http://bfcc.btfbfcc.com/view/index.html">
          <img src="http://api.btfbfcc.com/resources/upload/20180601/940107d3f6ce41768c48374bc6c5cea9.jpg" alt="">
        </a>
      </section>
      <section class="activity-container clearfix">
        <h2 class="activity-title jianbian-text5">有·好·券</h2>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">外卖券</h3>
            <p>饿了么满20减1</p>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('21.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">网购券</h3>
            <p>京东苏宁考拉购</p>
            <span class="activity-desc jianbian-bg4">苏宁手机880减110</span>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('22.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">快餐券</h3>
            <p>任意消费送鸡翅</p>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('23.png')" alt="">
          </div>
        </div>
        <div class="activity-item fl">
          <div class="activity-text fl">
            <h3 class="activity-name">出行券</h3>
            <p>滴滴ofo哈罗单车</p>
            <span class="activity-desc jianbian-bg4">ofo免费汽车券</span>
          </div>
          <div class="activity-thumb fr">
            <img :src="getLocalImg('24.png')" alt="">
          </div>
        </div>
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
  newNotice
} from "../../api/index";
export default {
  name: "Online",
  data() {
    return {
      oldBack: mui.back,
      info: {},
      loginAccount: false,
      platform: [
        { img: "1.png", link: "Products", text: "优佳兑商城",id:1333,type:1 },
        { img: "2.png", link: "Products", text: "福宝兑换",id:1342,type:1 },
        { img: "3.png", link: "Products", text: "福宝+现金兑换",id:1336,type:1 },
        { img: "4.png", link: "", text: "福宝抽奖" },
        { img: "5.png", link: "", text: "充值中心" }
      ],
      type: "", //APP环境
      curVersion: "", //app版本
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
    navigate(link,p) {
      //商品列表
      if(p.id){
        this.$router.push({
        name: "Products",
        params:{update:true},
        query: p
      });
      }
        //其他平台
      else{
      if (!link) {
        this.$dialog.toast({
          mes: "数据对接中，敬请期待！"
        });
        return;
      }
      this.$router.push({ name: link});
      }
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
  .left-icon,
  .right-icon {
    .wh(1rem,1rem);
    line-height: 1rem;
  }
  .search-container2 {
    background: rgb(232, 232, 232);
    padding: 0.15rem 0.1rem 0.15rem 0.1rem;
    border-radius: 0.4rem;
    input {
      width: 86%;
      border: none;
      padding-left: 0.1rem;
      font-size: 0.3rem;
    }
  }
  span {
    color: rgb(102, 102, 102);
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
.nav-container .nav-item {
  float: left;
  width: 19%;
  margin: 10px 0;
  text-align: center;
  &.large {
    width: 22%;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  p {
    font-size: 12px;
    color: #9a9595;
  }
}
.fresh-container {
  text-align: center;
  h2 {
    margin: 10px 0;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 5px;
  }
  .fresh-item {
    width: 47%;
    margin-left: 2%;
    margin-bottom: 2%;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
}
.activity-header {
    .pd-v;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 5px;
    text-align: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
.activity-container {
  margin-top: 10px;
  .activity-title {
    float: left;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding: 12px;
    letter-spacing: 2px;
    border-bottom: 1px solid #eee;
  }
  .activity-item {
    width: 50%;
    min-height: 100px;
    padding: 10px 0;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .activity-text {
      width: 60%;
      padding-left: 8px;
      line-height: 22px;
      p {
        font-size: 12px;
        color: rgb(153, 153, 153);
      }
      .activity-desc {
        color: #fff;
        font-size: 8px;
        padding: 2px 3px;
        border-radius: 3px;
      }
    }
    .activity-thumb {
      width: 40%;
      img {
        width: 100%;
        padding-right: 8px;
      }
    }
    .activity-name {
      font-size: 16px;
    }
    &:nth-of-type(2n) {
      border-right: none;
    }
  }
}

/*文字渐变*/
.jianbian-text1 {
  display: inline-block;
  background: -webkit-linear-gradient(
    left,
    rgb(255, 203, 127),
    rgb(254, 104, 51)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.jianbian-text2 {
  display: inline-block;
  background: -webkit-linear-gradient(
    left,
    rgb(254, 111, 126),
    rgb(243, 4, 185)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.jianbian-text3 {
  display: inline-block;
  background: -webkit-linear-gradient(left, rgb(254, 104, 27), rgb(243, 25, 6));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.jianbian-text4 {
  display: inline-block;
  background: -webkit-linear-gradient(
    left,
    rgb(87, 131, 236),
    rgb(178, 63, 229)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.jianbian-text5 {
  display: inline-block;
  background: -webkit-linear-gradient(
    left,
    rgb(255, 109, 137),
    rgb(255, 82, 48)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/*背景渐变*/
.jianbian-bg1 {
  background: -webkit-linear-gradient(
    left,
    rgb(254, 87, 94),
    rgb(255, 63, 136)
  );
}
.jianbian-bg2 {
  background: -webkit-linear-gradient(left, rgb(254, 152, 3), rgb(255, 103, 4));
}
.jianbian-bg3 {
  background: -webkit-linear-gradient(
    left,
    rgb(87, 131, 236),
    rgb(178, 63, 229)
  );
}
.jianbian-bg4 {
  background: -webkit-linear-gradient(
    left,
    rgb(255, 109, 137),
    rgb(255, 82, 48)
  );
}
.ads-container {
  padding: 10px 10px 0 10px;
  img {
    width: 100%;
    border-radius: 3px;
  }
}
</style>
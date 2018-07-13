<template>
  <div>
    <header-top title="会员专享"></header-top>
    <main class='scroll-content-2'>
      <div class="img-box">
        <img :src="getLocalImg('vip_1.jpg')" alt="">
      </div>
      <div v-for="(item,index) in imgs" :key="index" class="img-box" @click="navigate(item.id)">
        <img :src="getLocalImg(item.src)" alt="">
      </div>
    </main>
  </div>
</template>
<script>
import HeaderTop from "components/header/index";
import { localImg } from "components/common/mixin";
export default {
  name: "VIP",
  data() {
    return {
      imgs: [
        { src: "vip_2.jpg",id:141059 },
         { src: "vip_3.jpg",id:141262 }, 
         { src: "vip_4.jpg",id:140827 }]
    };
  },
  components: { HeaderTop },
  mixins: [localImg],
  computed: {},
  created() {},
  activated() {},
  methods: {
    navigate(id) {
        this.$router.push({name:"Product",query:{id}});
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../style/mixin.less";
.img-box {
  img {
    width: 100%;
  }
}
</style>
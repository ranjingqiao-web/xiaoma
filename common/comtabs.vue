<template >
  <div class="seach">
    <div class="bannervipcss">
      <div
        class="bannervipcss0"
        v-for="(item,index) in lists"
        @click="changeindex(index)"
        :key="index"
      >
        {{item.name}}
        <div :class="count==index ?'isactive':''"></div>
      </div>
    </div>
    <div class="bannervipcssboy">
      <div
        v-for="(item,index) in listsboy"
        @click="changeindexboy(index)"
        :key="index"
        :class="countboy==index ?'isactiveboy':''"
      >{{item.name}}</div>
    </div>
    <div>
      <comscrollx />
    </div>
  </div>
</template>
 
<script>
import comscrollx from "../../common/comscrollx";
export default {
  name: "comshaixuan",
  components: {},
  props: [],
  data() {
    return {
      count: 0,
      lists: [
        { name: "美发", id: 0 },
        { name: "美妆", id: 1 },
        { name: "美甲", id: 2 },
        { name: "穿搭", id: 3 },
        { name: "美容", id: 4 }
      ],

      countboy: 0,
      listsboy: [
        { name: "男生", id: 0 },
        { name: "女生", id: 1 },
        { name: "儿童", id: 2 }
      ]
    };
  },
  methods: {
    shaixuanclick(v) {
      this.coutns = v;
      this.$emit("getshaixuannum", v);
    }
  },
  mounted() {},
  created() {}
};
</script>
 
<style   scoped>
.bannervipcss {
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 30rpx;
}
.bannervipcss0 {
  padding: 20rpx 0;
  flex: 1;
}
.isactive {
  width: 40rpx;
  height: 4rpx;
  margin-left: 10rpx;
  margin-top: 10rpx;
  background-color: #22ddb8;
  font-weight: bold;
}
.bannervipcssboy {
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 26rpx;
}
.bannervipcssboy div {
  padding: 20rpx;
  padding-bottom: 30rpx;
  margin-right: 30rpx;
  text-align: left;
}
.isactiveboy {
  color: #22ddb8;
}
.rowcolum {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20rpx;
}
</style> 
<template> 
  <div class="scrolls">
    <scroll-view scroll-x class="scrollse" >
      <div class="rowhen" >
         <div class="rowhen0" v-for="(item,index) in listData" :key="index" @click="getxijianchui(item)">{{item.name}}</div> 
      </div>
    </scroll-view>
  </div>
</template> 
<script>
export default {
  name: "comscrollx",
  props: ["startnum"],
  data() {
    return {
      start: require("../static/img/all/start.png"),
      listData:[
        {name:'洗吹',id:1}, 
        {name:'洗吹',id:1}, 
        {name:'洗吹',id:1}, 
        {name:'洗吹',id:1}, 
        {name:'洗吹',id:1}, 
        {name:'洗吹',id:1}, 
        {name:'洗吹',id:1}, 
        {name:'洗吹',id:1}, 
        {name:'洗吹',id:1}, 
        {name:'洗吹',id:1}, 
      ],
    };
  },
  watch: {},
  created: function() {},
  mounted() {},
  methods: {
    getxijianchui(item){
      this.$emit("getxijianchuidata",item)
    }
  }
};
</script>
<style  scoped>
.scrolls{
  background-color: #ccc;
  
  width: 100%; white-space: nowrap; margin: 0 auto;
  padding: 20rpx 0;
}
 
.rowzuoscoll {  
  width: 100%;
  white-space: nowrap;
}
.marleft {
  margin-right: 10rpx;
}
.margintop {
  margin-top: 10rpx;
}
 
.margintop {
  margin-top: 10rpx;
} 
.rowhen{
  display: flex;
  flex-direction: row;
   align-items: center;
}
 
.rowhen div{
  background-color: #fff;
  margin-left: 20rpx;
  padding: 20rpx 30rpx;
  font-size: 24rpx;
  border-radius: 8rpx; 
}
::-webkit-scrollbar{
width: 0;
height: 0;
color: transparent;
}
::-webkit-scrollbar{

display: none;
}
</style>
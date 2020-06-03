<template> 
  <div class="rowzuo margintop">
     <div class="rowzuo1"> 
       <div class="rowzuo11"
        :class="[index==1?'marleftright':'',count==index?'actives':'']"
        v-for="(item,index) in serverdata"  
        :key="index"
        @click="jinxuanserver(index)"
        >
         <div class="c1">{{item.name}}</div>
         <div  class="c2"  :class="[ count==index?'actives':'']">{{item.title}}</div>
       </div>
       
     </div>
        
 
  </div>  
</template> 
<script>
export default {
  name: "comrowsanclick",  
  props:[],
  data() {
    return {
       count:0,
        serverdata:[
          {name:'精选',title:'猜你喜欢'},
          {name:'设计师',title:'名师大咖'},
          {name:'品牌',title:'优质好店'},
        ],
      start: require("../static/img/all/start.png")
    };
  },
  watch: {},
  created: function() {},
  mounted() {},
  methods: {
    jinxuanserver(index){
      this.count=index  
      this.$emit("getcomrowsanclick",index)
    }
  }
};
</script>
<style  scoped>
 .rowzuo1{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
 }
 .rowzuo1{
   width: 94%;
   margin: 0 auto;
 }
 .marleftright{
   margin:0 10rpx;
 }
 .margintop{
   margin-top: 10rpx;
 }
 .rowzuo11{
   flex: 1;
   height:110rpx;
  position: relative;
  border-radius: 6rpx;
    
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #f6f6f6;
   
 } 
 .c1{
   font-size: 28rpx;
   font-weight: 600;
 }
 .c2{
   font-size: 20rpx; 
   color: #ccc;

 }
 .actives{
   background-color: #00C6C2;
   color: #fff;
 }
</style>
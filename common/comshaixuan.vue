<template > 
<div class="seach"> 
   <div class="seach0"  v-for="(item,index) in datalists" :key="index"
   :class="coutns==index?'actived3':''"
   @click="shaixuanclick(index)"
   ><span  :class="coutns==index?'activecolor':''">{{item.name}}</span>  <div class="d3" :class="coutns==index?'actived3':''"></div> </div>
</div>
  
</template>
 
<script>  
 
  export default {
    name:'comshaixuan',
    components:{},
    props:[],
    data(){
      return { 
        coutns:0,
         datalists:[
           {name:'美发',id:1}, 
           {name:'推荐排序',id:2},
           {name:'位置区域',id:3},
           {name:'筛选',id:4},
         ]
        
      }
    },
    methods:{
     
 shaixuanclick(v){
   this.coutns=v;
   this.$emit("getshaixuannum",v)
 }
 
    },
    mounted(){ 
    },
    created(){ 
    }
  }
</script>
 
<style   scoped>
.d3{
 margin-left: 10rpx; 
 width: 0; 
 height: 0;
 border-width: 8rpx;
 border-style: solid;
 margin-top: 14rpx;
  border-color:#333 transparent transparent transparent;

  
}
.activecolor{
  color: #22ddb8;
}
.actived3{
  border-color:#22ddb8 transparent transparent transparent;
}
  .seach{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30rpx 0; 
  }
  .seach0{ 
    flex: 1;
     display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    font-size: 30rpx;
  }
</style> 
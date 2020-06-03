<template> 
  <div class="rowzuo margintop">
     <div class="rowzuo1">
       <div class="rowzuo11 marleft">1</div>
       <div class="rowzuo11 ">2</div>
     </div>
     <div class="rowzuo1 margintop">
       <div class="rowzuo11">1</div> 
     </div>
     <div class="rowzuo1 margintop">
       <div class="rowzuo11 marleft">1</div>
       <div class="rowzuo11 ">2</div>
     </div>

  </div>
</template> 
<script>
export default {
  name: "comrowsanzuopingji",
  props: [""],
  data() {
    return {
      start: require("../static/img/all/start.png")
    };
  },
  watch: {},
  created: function() {},  
  mounted() {},
  methods: {}
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
 .marleft{
   margin-right: 10rpx;
 }
 .margintop{
   margin-top: 10rpx;
 }
 .rowzuo11{
   flex: 1;
   height:160rpx;
  position: relative;
  border-radius: 6rpx;
   background-color: cadetblue;
 }
</style>
<template>
    <div>
        <div class="monlychanly ">价格选择({{slider3}}元)</div>
        <div class="changeSlider3">
           <slider @change="changeSlider3" min="0" max="1000" step="5" :value="slider3" show-value/>
        </div>
        
        <div class="monlychanly marginbo">设计师星级(元)</div>
        <div class="monlystart">
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
        </div>

         <div class="monlychanly marginbo">商家(钻级)</div>
        <div class="monlystart">
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
        </div>

         <div class="monlystart margintop">
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
                  <div class="monlystart0">111</div>
        </div>
        <div class="monlystart3">
              <div class="monlystart31">重置</div>
              <div class="monlystart32">完成</div>
        </div>
    </div>
</template>

<script  >
  
    export default {
        name: 'comslider',
        props: {
             
        },
        data() {
            return {
                slider3: 0,
            }
        },
        computed: {
            
        },
        mounted () {
             
        },
        methods: {
       changeSlider3(e) {
         this.slider3=e.target.value
         console.log('llll',e.target ) 
        this.$emit("getslidermonly",e.target )       
          },
        },
    };
</script>

<style>
.monlystart3{
    margin-top: 30px;
    width: 94%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
     

}
.monlystart3 div{
    flex: 1;
   font-size: 13px;
   border-radius: 6px;
}
.monlystart31{
    background-color: #f6f6f6;
    padding: 18rpx 0;
    text-align: center;
    margin-right: 5px;
}
.monlystart32{
    color: #fff;
    background-color: #22ddb8;
    text-align: center;
    padding: 18rpx 0;
    margin-left: 5px;



}
.margintop{
    margin-top: 30rpx;
}
.changeSlider3{
    width: 94%;
     margin: 0 auto; 
}
 .monlystart{
     width: 94%;
     margin: 0 auto;
     display: flex;
     flex-direction: row;
     justify-content: flex-start;
     flex-wrap: wrap;
      align-items: center;

 }
 .monlystart0{
     width: 30%;
     margin-left: 10rpx;
      margin-bottom: 20rpx;
      border-radius: 6rpx;
     padding: 16rpx 0;
     font-size: 26rpx;
     text-align: center;
     background-color: #f6f6f6;
 }
 .activemonlystart0{
     color: #fff;
     font-size: 26rpx;

     background-color: #22ddb8;

 }
.monlychanly{
    font-size: 26rpx; 
      margin: 50rpx 0;
      
  padding-left: 30rpx;
}
 
.tui-slider-head,.tui-slider-box{
 height: 60rpx;
 line-height: 60rpx;
 font-size: 35rpx;
 color: #666;
 background-color: #22ddb8;
}
/* ._slider{
position: relative;
height: 20rpx !important;
line-height: 20rpx;
border-radius: 20rpx; 
cursor: pointer;
 background-color: #22ddb8;
 border: none;

-webkit-tap-highlight-color: transparent;
} */
</style>
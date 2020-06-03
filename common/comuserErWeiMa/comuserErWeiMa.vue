<template >
    <view   class="erweimapage"> 
	<view class="erweimapagecenter">
		<view class="erweimapageHeader">
			<img :src="ewmImg" class="baocunerweimatou"></img>
			<view class="">
				<view class="erweimapageHeader1"> 极乐忘记了</view>
				<view class="erweimapageHeader2"> 极乐忘记了</view>
			</view>
		</view>
		
       <view class="erweimapageHeadercent">
       		<img :src="ewmImg" class="baocunerweima"></img>
       </view>
	 
		 <view class="baocunerweimalike">
		 	使用众美扫码，关注TA
		 </view>
	</view>
	<!-- #ifndef MP-WEIXIN -->
	        <view class="purple_btnbtn_box" @click="saveImgToLocal">
	            保存到相册
	        </view>
	        <!-- #endif -->
	        
	        <!-- #ifdef MP-WEIXIN -->
	        <view v-if="openSettingBtnHidden" class="purple_btnbtn_box" @click="saveEwm">
				 
				<img :src="xiazai" class="baocunerweimatou"></img>
				<view class="">
				保存到相册	
				</view>
	             
	        </view>
	        
	        <button v-else class="purple_btnbtn_box" hover-class="none" open-type="openSetting" @opensetting='handleSetting'>保存到相册</button>
	        <!-- #endif -->
		</view>
</template>
<script> 
	    export default{
	        data(){
	            return { 
	                openSettingBtnHidden: true,//是否授权
					xiazai: require("../../static/img/all/mine/xiazai.png"),
	                ewmImg:"http://img0.imgtn.bdimg.com/it/u=3907776734,3838282988&fm=11&gp=0.jpg"//这是要保存的图片
	            }
	        },
	        onLoad(opt) { 
	        },
	        components:{
	        },
	        methods:{
	            //微信小程序保存到相册
	            handleSetting(e){
					let _this=this;
	                if (!e.detail.authSetting['scope.writePhotosAlbum']) {
	                      _this.openSettingBtnHidden = false;
	                } else {
	                     _this.openSettingBtnHidden = true;
	                }
	            },
	            saveEwm:function(e){
					let _this=this;
	                //获取相册授权
	                   uni.getSetting({
	                     success(res) {
	                       if (!res.authSetting['scope.writePhotosAlbum']) {
	                         uni.authorize({
	                           scope: 'scope.writePhotosAlbum',
	                           success() {
	                             //这里是用户同意授权后的回调
	                             _this.saveImgToLocal();
	                           },
	                           fail() {//这里是用户拒绝授权后的回调
	                               _this.openSettingBtnHidden=false
	                           }
	                         })
	                       } else {//用户已经授权过了            
	                         _this.saveImgToLocal();
	                       }
	                     }
	                   })
	            },
	            saveImgToLocal:function(e){
					
					 let _this=this;
	                
	                uni.showModal({
	                    title: '提示',
	                    content: '确定保存到相册吗',
	                    success: function (res) {
	                        if (res.confirm) {
	                           uni.downloadFile({
	                                   url: _this.ewmImg,//图片地址
	                                   success: (res) =>{
	                                       if (res.statusCode === 200){
	                                           uni.saveImageToPhotosAlbum({
	                                               filePath: res.tempFilePath,
	                                               success: function() { 
	                                                   uni.showToast({
	                                                       title: "保存成功",
	                                                       icon: "none"
	                                                   });
	                                               },
	                                               fail: function() { 
	                                                   uni.showToast({
	                                                       title: "保存失败",
	                                                       icon: "none"
	                                                   });
	                                               }
	                                           });
	                                       } 
	                                   }
	                               }) 
	                            
	                            
	                            
	                        } else if (res.cancel) {
	                            
	                        }
	                    }
	                });
	                
	            }
	        }
	    }
</script>
<style scope>
.baocunerweima {
width: 300px;
height: 300px;
}
 
.erweimapage{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; 
	height: calc(100vh);
	background-color:#EFEFEF ;
}
 .erweimapagecenter{
	 width: 73%;
	 margin: 0 auto;
 	display: flex;
 	flex-direction: column;
 	justify-content: center; 
	background-color: #fff;
	padding: 20px 10px;
	border-radius: 6px;
    padding-bottom: 38px;
	margin-bottom: 30px;


 }
 .erweimapageHeadercent{
	 display: flex;
	 flex-direction: column;
	 justify-content: center; 
	 align-items: center;
 }
 .erweimapageHeader{
	 display: flex;
	 flex-direction: row;
	 align-items: center;
	 padding-bottom: 50px;
 }
 .baocunerweimatou{
	 width: 80px;
	 height: 80px;
	 border-radius: 40px;
	 margin-right: 10px;

 }
 .baocunerweimalike{
	 text-align: center;
	 font-size: 24px;
	 color: #8E8E8E;
	 margin-top: 20px;
 }
 .erweimapageHeader1{
	 color: #333;
	 font-size: 28px;
 }
 .erweimapageHeader2{
 	 color: #8E8E8E;
	 font-size: 24px;
 }
 .purple_btnbtn_box{
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 justify-content: center;
	 color: #8E8E8E;
	 font-size: 26px;
 }
</style>
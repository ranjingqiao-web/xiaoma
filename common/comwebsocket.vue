<template >
     
</template>
<script>
	/**
	 * 心跳链接
	 * https://www.jianshu.com/p/09b91b9a778f
	 * **/
export default {
data () {
      return {
        ws: null,//建立的连接
        lockReconnect: false,//是否真正建立连接
        timeout: 28*1000,//30秒一次心跳
        timeoutObj: null,//心跳心跳倒计时
        serverTimeoutObj: null,//心跳倒计时
        timeoutnum: null,//断开 重连倒计时
      }
    },
    created() {
      this.initWebpack();
    }, 
    methods: {
      initWebpack(){
        this.ws = new WebSocket(process.env.SOCKET_OTC);
        this.ws.onopen = this.onopen;
        this.ws.onmessage = this.onmessage;
        this.ws.onclose = this.onclose;
        this.ws.onerror = this.onerror;
      },
      reconnect() {//重新连接
        var that = this;
        if(that.lockReconnect) {
          return;
        };
        that.lockReconnect = true;
        //没连接上会一直重连，设置延迟避免请求过多
        that.timeoutnum && clearTimeout(that.timeoutnum);
        that.timeoutnum = setTimeout(function () {
          //新连接
          that.initWebpack();
          that.lockReconnect = false;
        },5000);
      },
      reset(){//重置心跳
        var that = this;
        //清除时间
        clearTimeout(that.timeoutObj);
        clearTimeout(that.serverTimeoutObj);
        //重启心跳
        that.start();
      },
      start(){//开启心跳
        var self = this;
        self.timeoutObj && clearTimeout(self.timeoutObj);
        self.serverTimeoutObj && clearTimeout(self.serverTimeoutObj);
        self.timeoutObj = setTimeout(function(){
          //这里发送一个心跳，后端收到后，返回一个心跳消息，
          if (self.ws.readyState == 1) {//如果连接正常
            self.ws.send("heartCheck");
          }else{//否则重连
            self.reconnect();
          }
          self.serverTimeoutObj = setTimeout(function() {
            //超时关闭
            self.ws.close();
          }, self.timeout);
 
        }, self.timeout)
      }, 
　　　　onopen() {
        var msg = JSON.stringify({cmd: 'enter_chatting', token:this.COOKIE.getCookie("token")});
        this.ws.send(msg);
        console.log("open");
        this.getNoReadRecords();
        //开启心跳
        this.start();
      },
      onmessage(e) {
        this.mydata = JSON.parse(e.data);
        if(this.mydata.fromID == this.states.customerId){
          this.mydata.chatType = 2;
        }else{
          this.mydata.chatType = 1;
        }
        var content =this.getContentTypes(this.mydata.content,this.mydata.chatType);
        this.records.push(this.mydata);
        //收到服务器信息，心跳重置
        this.reset();
      },
      onclose(e) {
        console.log("连接关闭");
        console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean);
        var msg = JSON.stringify({cmd: 'out_chatting', token:this.COOKIE.getCookie("token")});
        this.ws.send(msg);
        //重连
        this.reconnect();
      },
      onerror(e) {
        console.log("出现错误");
        //重连
        this.reconnect();
      }
}
}
</script>
<style scope> 

 
</style>
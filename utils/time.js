 
	// 倒计时
	function getInfos(times) {
		let timestamp = Date.parse(new Date());
		timestamp = timestamp / 1000;
		let letime = times - timestamp;
		let time = parseInt(letime);
		if (parseInt(letime) > 60) {
		let second = parseInt(letime) % 60;
		let min = parseInt(letime / 60);
		// 直接返回字符串格式：
		// time = min + "分" + second + "秒";  
		// 返回对象格式：
		time = {
			min: min,
			second: second
		};
		if (min > 60) {
			min = parseInt(letime / 60) % 60;
			let hour = parseInt(parseInt(letime / 60) / 60);
			// 直接返回字符串格式：
			// time = hour + "时" + min + "分" + second + "秒";
			// 返回对象格式：
			time = {
				hour: hour,
				min: min,
				second: second
			}
			if (hour >= 24) {
				hour = parseInt(parseInt(letime / 60) / 60) % 24;
				let day = parseInt(parseInt(parseInt(letime / 60) / 60) / 24);
				// 直接返回字符串格式：
				// time = day + "天" + hour + "时" + min + "分" + second + "秒";
				// 返回对象格式：
				time = {
					day: day,
					hour: hour,
					min: min,
					second: second
				}
			}
		}
	}
		// 判断是否小于10，小于10就补零
		if(time.day < 10) {
			time.day = '0' + time.day
		} else if(time.day == undefined) {
			time.day = '00'
		}
		if(time.hour < 10) {
			time.hour = '0' + time.hour
		} else if(time.hour == undefined) {
			time.hour = '00'
		}
		if(time.min < 10) {
			time.min = '0' + time.min
		} else if(time.min == undefined) {
			time.min = '00'
		}
		if(time.second < 10) {
			time.second = '0' + time.second
		}
		
		
		 
		// 输出结果：
		return time;
	}
	 function getInfo(v){
		 var _this=this
		 var T;
		 // 使用定时器
		 setInterval(() => {
		  T=	 getInfos(v)
		 	//定时器调用  直接传入时间戳即可
		       // _this.$time.getInfos(1591977600)
		  return T;	   
		 	 // {day: 01,hour: 01,min:01,second: 01}
		 }, 1000)
		   console.log( T) 			
		 
		 
	 }
	 
	// 1579296897
	export { getInfo }
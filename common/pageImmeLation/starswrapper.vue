<template>
	<div class="evaStar">
		<div class="evaStar0"> {{title}}</div>
		<ul class="star">
			<li v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" @click="stars(index)" track-by="index"></li>
			<!--性能优化 track-by 数据不改变时不会重新渲染-->
		</ul>
	</div>
</template>

<script>
	export default {
		props:['title'],
		data() {
			return {
				score: 4,
			}
		},
		computed: { //计算属性
			itemClasses() {
				let result = []; // 返回的是一个数组,用来遍历输出星星
				let score = Math.floor(this.score * 2) / 2; // 计算所有星星的数量
				let hasDecimal = score % 1 !== 0; // 非整数星星判断
				let integer = Math.floor(score); // 整数星星判断
				for (let i = 0; i < integer; i++) { // 整数星星使用on
					result.push("on"); // 一个整数星星就push一个CLS_ON到数组
				}
				if (hasDecimal) { // 非整数星星使用half
					result.push("half"); // 类似

				}
				while (result.length < 5) { // 余下的用无星星补全,使用off
					result.push("off");
				}
				return result;
			}
		},
		methods: {
			stars: function(index) {
				this.score = index + 1
			}
		}

	}
	/* background-image:url("../../static/img/all/mine/xing1.png") */
	/* background-image:url("../../static/img/all/mine/xing2.png")   */
</script>

<style scoped>
	.evaStar0{
		font-size: 26px;
		color:#333333 ;
	}
	.evaStar { 
		padding: 10px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.star {
		font-size: 0;
	}

	.star-item {
		display: inline-block;
		background-repeat: no-repeat;
		width: 40px;
		height: 40px;
		margin-left: 15px;
		background-size: 100%;
	}

	.star-item.on {
		background-image: url(../../static/img/all/mine/xing2.png);
	}

	 .star-item.half{
	background-image: url(../../static/img/all/mine/xiazai.png);
	} 
	.star-item.off {
		background-image: url(../../static/img/all/mine/xing1.png);
	}
</style>

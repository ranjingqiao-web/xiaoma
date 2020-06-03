<template>
	<div class=" ">
		<rightBtn prams="商户入驻" prams2="权益说明" isprams="false" @dalogsquanyi="dalogsquanyi"></rightBtn>
		  

	</div>
</template>

<script>
	import rightBtn from '../comrigthbtn'
	 
	export default {
		name: "comcontentlist", 
		props: [],
		components: {
			rightBtn
		},
		data() {
			return { 
				 
			};
		},
		created() {

		},
		methods: {

			dalogsquanyi() {
				// 显示隐藏权益说明

			},


		},
		mounted() {}
	};
</script>

<style scoped>
 
	 
</style>

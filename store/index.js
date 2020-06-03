import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters'
Vue.use(Vuex)
/**
 * hasLogin 是否登录
 */
const state = {
   hasLogin:true,
 	 
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
    
})

// 第一步，在index.js里面定义state常量  18600459578
// 第二步，mutation-types.js里面定义一个方法的类
// 第三步，在mutations.js里面引入 mutation-types.js，同时引入对应方法的类
// 第四步，通过mutation-types.js里面定义的大写类在mutations.js里面创建这个类的方法
// 第四步，通过此方法可以改变index.js里面定义的state 数据
// 第五步，在actions.js里面引入mutation-types.js里面定义的大写类DATATEXT_MUTATION;    [DATATEXT_MUTATION](state,res) { // 改变state中的datatext状态值   state.datatext = res }
// 第五步，通过mutation-types.js里面的大写类可以调用 mutations.js里面对应大写类的方法 ；如 context.commit('DATATEXT_MUTATION', value);
// 第六步，actions.js里面创建一个方法提供给页面调用 datatext_mutation:(context,value) => {  context.commit('DATATEXT_MUTATION', value);  },
 
// 第七步1，页面先导入  import {mapGetters,mapActions} from 'vuex' 再 ...mapActions(['datatext_mutation']), 
//第七步2， 再创建此方法 changestatename( ){  var ddd={  res1:"888", res2:"888", }  this.datatext_mutation(ddd) },
// 第七步3，页面@click="changestatename()" ,就可调用此方法了
// 页面渲染  {{ $store.state.datatext}}
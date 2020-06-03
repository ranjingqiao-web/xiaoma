import Vue from 'vue'
import App from './App' 

import WXP from './utils/WXP'
import store from './store'
import request from './utils/request'
import * as navTo from './utils/navTo'  
import * as time from './utils/time'  
Vue.prototype.$navTo = navTo
Vue.prototype.$time = time

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.RESQUESTHTTP= request

App.mpType = 'app'
 // import LyTab from ‘ly-tab’
 // Vue.use(LyTab)
 
Vue.prototype.WXP = WXP

 
const app = new Vue({
    store,
    ...App
})
app.$mount()

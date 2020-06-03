import { DATATEXT_MUTATION, LOGIN_USERINFO, IS_LOGIN, IS_AUTH ,IS_BOL} from './mutation-types'

import Vue from 'vue'
// import utils from '../utils'

export default {
  datatext_mutation: (context, value) => {
    context.commit('DATATEXT_MUTATION', value);
  }, 
  user_islogin: (context, value) => {
    context.commit('IS_LOGIN', value)
  },
  get_isAuthRenZheng: (context, value) => {
    context.commit('IS_AUTH', value)
  },
  // 获取用户信息
  get_User_Info_all(context, value) {
    Vue.prototype.$api.info({
      body: {
        uid: value
      },
      success(response) {
        if (response.code == 1000) {
          localStorage.setItem("LOGIN_USERINFOs", JSON.stringify(response.data) || null)
          context.commit('LOGIN_USERINFO', JSON.parse(  localStorage.getItem('LOGIN_USERINFOs')) ) 
        }
      },
      fail(response) { 
      }
    });


  },
  IS_BOL_bool: (context, value) => {
    context.commit('IS_BOL', value)
  },
}
import { DATATEXT_MUTATION, LOGIN_USERINFO, IS_LOGIN, IS_AUTH,IS_BOL } from './mutation-types';
export default {
    // 定义mutations函数，第一个参数state（状态值）、第二个参数是载荷
    [DATATEXT_MUTATION](state, res) {
        state.datatext = res
    },
    // 登录缓存全局数据 
    [LOGIN_USERINFO](state, res) {

        state.userInfo = res
    },
    [IS_LOGIN](state, data) {
        state.isLogin = data;
    },
    [IS_AUTH](state, data) {
        state.is_auth_ok = data;
    },

    [IS_BOL](state, data) {
        state.bol = data;
    }

    
}


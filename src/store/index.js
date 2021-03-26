import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
 
 
Vue.use(Vuex)

export default new Vuex.Store({
  // vuex 数据存放
  state: {
    token:"aaa",
    username:"",
    password:""
  },
  // 用于state数据的变更
  mutations: { 
    user(state , date){
      state.username = date.username
      state.password = date.password
    },
    tokenchange(state , data ){
      state.token = data
    }
  },
  // 进行异步请求
  actions: {
    // 请求获取username password
      axiosadduser(context , token){
        axios.get('example/user' , {token : token }).then(({data}) =>{ 
          context.commit("user" , data)
        }) 
      }
  },
  // 模块化 暂无
  modules: {

  }
})

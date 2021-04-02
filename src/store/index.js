import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
 
 
Vue.use(Vuex)

export default new Vuex.Store({
  // vuex 数据存放
  state: {
    token:"",
    username:"",
    password:"",
    list:[]
  },
  // 用于state数据的变更
  mutations: { 
    user(state , date){
      state.username = date.username 
    },
    tokenchange(state , data ){
      state.token = data
    },
    inlist(state , list){
      state.list = list
    }
  },
  // 进行异步请求
  actions: {
    getlist(context){
       axios.get('/list.json').then(({data}) => {  
         console.log(data);
         context.commit("inlist" , data)
       })
    },
    // 请求获取username password
      axiosadduser(context , token){
        axios.get('/user.json' , {token : token }).then(({data}) =>{ 
          context.commit("user" , data)
        }) 
      }
  },
  // 模块化 暂无
  modules: {

  }
})

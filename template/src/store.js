import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    userList: [],
    posts:[]
  },
  mutations: {
    getUser(state){
      $http.get(`userinfo`)
        .then((res)=>{
          state.user = res.data
        })
    },
    getUserList(state){
      $http.get('userList')
        .then(res => {
          state.userList = res.data
        })
    },
    getPosts(state){
      $http.get('posts')
        .then(res => {
          state.posts = res.data
        })
    },
  }
})

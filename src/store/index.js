import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import modules from './modules'
Vue.use(Vuex)

const state = {
  uid: ''
}
const getters = {
  getUserId: (state) => state.uid
}
const mutations = {

}
const actions = {

}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

axios.defaults.baseURL = 'http://127.0.0.1:8080/api/'
axios.defaults.withCredentials = true

export default store

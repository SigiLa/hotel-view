import axios from 'axios'

const state = {

}
const mutations = {

}
const getters = {

}
const actions = {
  login({commit}, payload) {
    return axios.post('/login', payload).then(({data}) => {
      if (data.status===0) {
        throw new Error('用户名密码错误!')
      }

    })
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}

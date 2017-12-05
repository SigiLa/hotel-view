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
      if (data.error) {
        throw new Error(data.error)
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

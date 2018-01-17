import axios from 'axios'

const state = {
  uid: ''
}
const mutations = {
  updateUid: (state, payload) => {
    state.uid = payload
  }
}
const getters = {
  uid: (state) => state.uid
}
const actions = {
  login({
    commit
  }, payload) {
    return axios.post('/api/login', payload).then(({
      data
    }) => {
      if (data.status) {
        commit('updateUid', payload.uid)
      } else {
        return Promise.reject()
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

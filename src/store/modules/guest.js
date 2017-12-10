import axios from 'axios'
const state = {
  guestList: []
}
const mutations = {
  updateGuestList(state, payload) {
    state.guestList = payload.guestList
  }
}
const getters = {
  guestList: (state) => state.guestList
}
const actions = {
  addGuest({
    commit
  }, payload) {
    return axios.post('/guest/add', payload).then(({
      data
    }) => {
      if (data.status === 0) {
        throw new Error('添加客户信息失败!')
      }
    })
  },
  queryGuest({
    commit
  }, payload) {
    return axios.get('/guest/query').then(({
      data
    }) => {
      commit('updateGuestList', {
        guestList: data
      })
    })
  }
}
export default {
  state,
  mutations,
  getters,
  actions
}

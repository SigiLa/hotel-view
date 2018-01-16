import axios from 'axios'

const state = {
  roomList: []
}

const getters = {
  roomList: (state) => state.roomList
}

const mutations = {
  updateRoomList(state, payload) {
    state.roomList = payload.roomList
  }
}
const actions = {
  queryFreeRoom({
    commit
  }, payload) {
    return axios.get('/room/queryFreeRoom').then(({
      data
    }) => {
      if (data.status) {
        commit('updateRoomList', data)
      } else {
        return Promise.reject()
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

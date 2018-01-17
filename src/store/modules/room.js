import axios from 'axios'

const state = {
  roomList: [],
  recordList: []
}

const getters = {
  roomList: (state) => state.roomList,
  recordList: (state) => state.recordList
}

const mutations = {
  updateRoomList(state, payload) {
    state.roomList = payload.roomList
  },
  updateRecordList(state, payload) {
    state.recordList = payload.recordList
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
  },
  queryRoomStatus({
    commit
  }, payload) {
    return axios.get('/room/queryStatus').then(({
      data
    }) => {
      if (data.status) {
        commit('updateRecordList', data)
      } else {
        return Promise.reject()
      }
    })
  },
  accurateQueryRoom({
    commit
  }, payload) {
    let params = { ...payload
    }
    for (let i in params) {
      if (params[i] == '') {
        delete params[i]
      }
    }
    return axios.get('/room/accurateQuery', {
      params
    }).then(({
      data
    }) => {
      if (data.status) {
        commit('updateRecordList', data)
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

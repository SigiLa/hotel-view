import axios from 'axios'

const state = {
  roomList: [],
  recordList: [],
  historyRecordList: []
}

const getters = {
  roomList: (state) => state.roomList,
  recordList: (state) => state.recordList,
  historyRecordList: (state) => state.historyRecordList
}

const mutations = {
  updateRoomList(state, payload) {
    state.roomList = payload.roomList
  },
  updateRecordList(state, payload) {
    state.recordList = payload.recordList
  },
  updateHistoryRecordList(state, payload) {
    state.historyRecordList = payload.historyRecordList
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
  },
  queryAllHistory({
    commit
  }, payload) {
    return axios.get('/history/queryAll').then(({
      data
    }) => {
      if (data.status) {
        commit('updateHistoryRecordList', data)
      } else {
        return Promise.reject()
      }
    })
  },
  accurateQueryHistory({
    commit
  }, payload) {
    let params = { ...payload
    }
    for (let i in params) {
      if (params[i] == '') {
        delete params[i]
      }
    }
    return axios.get('/history/accurateQuery', {
      params
    }).then(({
      data
    }) => {
      if (data.status) {
        commit('updateHistoryRecordList', data)
      } else {
        return Promise.reject()
      }
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}

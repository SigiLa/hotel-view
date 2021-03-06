import axios from 'axios'
const state = {
  guestList: []
}

const getters = {
  guestList: (state) => state.guestList
}

const mutations = {
  updateGuestList(state, payload) {
    state.guestList = payload.guestList
  },
  deleteOneGuest(state, payload) {
    state.guestList.splice(payload.index, 1)
  },
  updateGuest(state, payload) {
    state.guestList.splice(payload.index, 1, payload.form)
  }
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
    return axios.get('/guest/queryAll').then(({
      data
    }) => {
      commit('updateGuestList', {
        guestList: data
      })
    })
  },
  deleteOneGuest({
    commit
  }, payload) {
    return axios.get('/guest/delete', {
      params: {
        id: payload.row.id
      }
    }).then(({
      data
    }) => {
      if (data.status) {
        commit('deleteOneGuest', {
          index: payload.$index
        })
      } else {
        throw new Error('删除失败!')
      }
    }).catch((err) => {
      return Promise.reject(err.message)
    })
  },
  alterGuest({
    commit
  }, payload) {
    return axios.post('/guest/update', payload.form).then(({
      data
    }) => {
      if (data.status) {
        commit('updateGuest', payload)
      } else {
        throw new Error('更新用户资料失败!')
      }
    }).catch((err) => {
      return Promise.reject(err.message)
    })

  },
  accurateQueryGuest({
    commit
  }, payload) {
    let params = { ...payload
    }
    for (let i in params) {
      if (params[i] == '') {
        delete params[i]
      }
    }
    return axios.get('/guest/accurateQuery', {
      params
    }).then(({
      data
    }) => {
      if (data.status) {
        commit('updateGuestList', data)
      } else {
        return Promise.reject()
      }
    })
  },
  queryGuestByPage({
    commit
  }, payload) {
    return axios.get('/guest/queryByPage', {
      params: payload
    }).then(({
      data
    }) => {
      if (data.status) {
        commit('updateGuestList', data)
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

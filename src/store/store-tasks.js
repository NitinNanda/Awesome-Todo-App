import Vue from 'vue'
const state = { // data will go here
  tasks: {
    'ID1': {
      name: 'Go to shop',
      completed: false,
      dueDate: '2020/07/31',
      dueTime: '18:30'
    },
    'ID2': {
      name: 'Get Bananas',
      completed: false,
      dueDate: '2020/07/15',
      dueTime: '12:30'
    },
    'ID3': {
      name: 'Go Apples',
      completed: false,
      dueDate: '2020/07/14',
      dueTime: '14:30'
    }
  }
}

const mutations = { // synchronous
  updateTask(state, payload){
    console.log('payload from mutations: ', payload);
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id){
    Vue.delete(state.tasks, id)
  }
}

const actions = { // could be asynchronous
  updateTask({ commit }, payload){
    commit('updateTask', payload)
  },
  deleteTask({commit}, id){
    commit('deleteTask', id)
  }
}

const getters = { // methods and components in the app will access the data in the state through these getters
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
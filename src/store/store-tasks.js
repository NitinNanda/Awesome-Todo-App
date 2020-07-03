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

}

const actions = { // could be asynchronous

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
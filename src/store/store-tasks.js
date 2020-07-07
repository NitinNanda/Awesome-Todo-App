import Vue from 'vue'
import { uid } from 'quasar'

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
  },
  search: ''
}

const mutations = { // synchronous
  updateTask(state, payload){
    console.log('payload from mutations: ', payload);
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id){
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload){
    Vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch(state, value){
    state.search = value
  }
}

const actions = { // could be asynchronous
  updateTask({ commit }, payload){
    commit('updateTask', payload)
  },
  deleteTask({commit}, id){
    commit('deleteTask', id)
  },
  addTask({commit}, task){
    let taskId = uid()
    let payload= {
      id : taskId,
      task : task 
    }
    commit('addTask', payload)
  },
  setSearch({commit}, value) {
    commit('setSearch', value)
  }
}

const getters = { // methods and components in the app will access the data in the state through these getters
  tasksFiltered: (state) => {
    let tasksFiltered = {}
    if(state.search){
      // populate empty object
      Object.keys(state.tasks).forEach(function(key){
        let task = state.tasks[key],
          taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase()
        if(taskNameLowerCase.includes(searchLowerCase)){
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return state.tasks
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function(key){
      let task = tasksFiltered[key]
      if(!task.completed){
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(function(key){
      let task = tasksFiltered[key]
      if(task.completed){
        tasks[key] = task
      }
    })
    return tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
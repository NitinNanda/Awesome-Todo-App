import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = { // data will go here
  loggedIn: false
}

const mutations = { // synchronous
  setLoggedIn(state, value){
    state.loggedIn = value
  }
}

const actions = { // could be asynchronous
 registerUser({}, payload){
   Loading.show()
  firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    showErrorMessage(error.message)
  })
 },
 loginUser({}, payload){
   Loading.show()
   firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
  .then(response => {
    console.log(response);
  }) 
  .catch(error => {
    showErrorMessage(error.message)
  })
 },
 logoutUser(){
  firebaseAuth.signOut()
},
handleAuthStateChange({commit, dispatch}){
   firebaseAuth.onAuthStateChanged((user) => {
     Loading.hide()
     if(user){      
      commit('setLoggedIn', true)
      LocalStorage.set('loggedIn', true)
      this.$router.push('/').catch(err => {})
      dispatch('tasks/fbReadData', null, { root: true })
     }else{
       commit('tasks/setTasksDownloaded', false, {root:true})
      commit('setLoggedIn', false)
      LocalStorage.set('loggedIn', false)
      this.$router.replace('/auth').catch(err => {})
     }
   })
 }
}

const getters = { // methods and components in the app will access the data in the state through these getters
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
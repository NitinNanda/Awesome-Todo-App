import * as firebase from "firebase/app"

import "firebase/auth"

  var firebaseConfig = {
    apiKey: "AIzaSyAZjO3xgBQtCFSrL80_85EOY4ya6QLTp1w",
    authDomain: "awesome-todo-c850e.firebaseapp.com",
    databaseURL: "https://awesome-todo-c850e.firebaseio.com",
    projectId: "awesome-todo-c850e",
    storageBucket: "awesome-todo-c850e.appspot.com",
    messagingSenderId: "670389518697",
    appId: "1:670389518697:web:689a14f84536a96fedbdf8",
    measurementId: "G-N2EH49Z5G1"
  }

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()

export { firebaseAuth }
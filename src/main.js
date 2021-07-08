import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBH5aYkbQ83--97t3RICLo6oZrZObReKXM",
  authDomain: "realtime-chat-app-63b88.firebaseapp.com",
  projectId: "realtime-chat-app-63b88",
  storageBucket: "realtime-chat-app-63b88.appspot.com",
  messagingSenderId: "547962814284",
  appId: "1:547962814284:web:052bb331c0daff85f8d9e9"
};

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(() => new Vue({
  render: h => h(App),
}).$mount('#app'))


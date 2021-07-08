<template>
  <div id="app">
    <Chat v-if="user"></Chat>
    <Login v-else></Login>
  </div>
</template>

<script>
import Chat from './components/Chat'
import Login from './components/Login'
import firebase from 'firebase'

export default {
  name: 'App',
  data() {
    return {
      user: firebase.auth().currentUser
    }
  },
  components: {
    Chat,
    Login
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/

body {
  background-color: #ffffff;
}
</style>

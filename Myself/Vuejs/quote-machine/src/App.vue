<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'


export default {
  name: 'app',
  components: {
    Header,
    Main
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

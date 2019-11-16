<template>
  <div id="app">
    <container msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Container from './components/Container.vue';

export default {
  name: 'app',
  components: {
    Container
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #dadad2;
}
</style>

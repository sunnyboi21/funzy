<template>
  <div id="app">
    <navbar />
    <container />
  </div>
</template>

<script>
import Container from '@components/Container';
import Navbar from '@components/Navbar';
export default {
  name: 'app',
  components: {
    Container,
    Navbar
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
  height: calc(100vh - 60px);
  width: 100vw;
}
body {
  background-color: #dadad2;
}
</style>

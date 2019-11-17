<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen'
}
</script>

<style>
.loader-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000;
  background: rgba(0, 0, 0, 0.5);
}
.loader {
  position: relative;
  left: calc(50% - 60px);
  top: calc(50% - 60px);
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
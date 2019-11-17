<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="success" >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">MRNV</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto text-left">
          <b-nav-item><span>current path:</span><span>/objdate/genbatch/gendevice/</span></b-nav-item>
        </b-navbar-nav>
        <b-badge class="float-left" variant="info" @click="clearFiles">Clear files</b-badge>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import * as CONSTANTS from '@store/constants';

export default {
  name: 'navbar',
  methods: {
    clearFiles() {
      this.$store.dispatch(CONSTANTS.CLEAR_LOADED_FILES);
    }
  }
};

</script>

<style>
.navbar {
  position: fixed;
  height: 60px;
  top: 0;
  width: 100%;
}
</style>
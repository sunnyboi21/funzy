<template>
  <b-button @click="sendFiles()">SEND FILES</b-button>
</template>

<script>
import * as CONSTANTS from '@store/constants';

export default {
  name: 'SendFile',
  methods: {
    sendFiles() {
      this.$store.dispatch(CONSTANTS.REMOVE_STAGING_FILES);
    }
  }
};
</script>

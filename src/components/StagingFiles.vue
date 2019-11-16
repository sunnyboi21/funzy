<template>
  <div>
    <div v-for="file in stagingFiles" :key="file.name">
    {{ file.name }}
    </div>
  </div>
</template>

<script>
import * as CONSTANTS from '@store/constants';

export default {
  name: 'StagingFiles',
  computed: {
    stagingFiles() {
      return this.$store.getters[CONSTANTS.GET_STAGING_FILES]
    }
  },
  methods: {
    sendFiles() {
      this.$store.dispatch(CONSTANTS.SEND_FILES);
    }
  }
};
</script>

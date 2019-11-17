<template>
  <div>
    <b-row class="is-flex">
      <h2>Files In Queue</h2>
      <b-button :disabled="!queuedFiles.length" class="d-flex align-items-center m-2 p-1" @click="checkQueue"><svgicon name="material-design/refresh" width="25" height="25" /></b-button>
    </b-row>
    <b-table class="text-left" :items="queuedFiles" :fields="fields" responsive></b-table>
  </div>
</template>

<script>
import * as CONSTANTS from '@store/constants';
import '@/svg-compiled-icons/material-design/refresh';

export default {
  name: 'ResultTable',
  data: () => ({
    fields: ['#', 'name']
  }),
  computed: {
    queuedFiles() {
      const files = [];
      const queuedFiles = this.$store.getters[CONSTANTS.GET_FILES_IN_QUEUE];
      queuedFiles.forEach((file, index) => {
        files.push({
          '#': index + 1,
          name: file.name
        });
      });
      return files;
    }
  },
  methods: {
    checkQueue() {
      this.$store.dispatch(CONSTANTS.CHECK_QUEUE);
    }
  }
};
</script>

<style>
</style>

<template>
  <div>
    <b-row class="is-flex">
      <h2>Files In Queue</h2>
      <button @click="checkQueue">check queue</button>
    </b-row>
    <b-table class="text-left" :items="queuedFiles" :fields="fields" responsive></b-table>
  </div>
</template>

<script>
import * as CONSTANTS from '@store/constants';

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

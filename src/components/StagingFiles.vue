<template>
  <div>
    <b-row>
      <h1>Staging Files</h1>
    </b-row>
    <b-row>
      <b-table class="text-left" hover :items="stagingFiles" :fields="fields" selectable>
      </b-table>
    </b-row>
  </div>
</template>

<script>
import * as CONSTANTS from '@store/constants';

export default {
  name: 'StagingFiles',
  data: () => ({
    fields: [
      '#',
      'name'
    ]
  }),
  computed: {
    stagingFiles() {
      const files = [];
      const loadedFiles = this.$store.getters[CONSTANTS.GET_STAGING_FILES];
      loadedFiles.forEach((name, index) => {
        files.push({
          '#': index + 1,
          name
        });
      });
      return files;
    }
  },
  methods: {
    sendFiles() {
      this.$store.dispatch(CONSTANTS.SEND_FILES);
    }
  }
};
</script>

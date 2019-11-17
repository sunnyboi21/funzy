<template>
  <div>
    <b-row>
      <h2>Loaded Files</h2>
    </b-row>
    <b-table
      sticky-header
      style="max-height: 500px;"
      class="text-left"
      :items="loadedFiles"
      :fields="fields"
      selectable
      responsive
      @row-selected="onRowSelected"
    ></b-table>
  </div>
</template>

<script>
import * as CONSTANTS from '@store/constants';

export default {
  name: 'LoadedFiles',
  data: () => ({
    fields: ['#', 'name']
  }),
  computed: {
    loadedFiles() {
      const files = [];
      const loadedFiles = this.$store.getters[CONSTANTS.GET_LOADED_FILES];
      const stagingFiles = this.$store.getters[CONSTANTS.GET_STAGING_FILES];
      let count = 1;
      loadedFiles.forEach(file => {
        const { name } = file;
        if (!stagingFiles.includes(name)) {
          files.push({
            '#': count++,
            name
          });
        }
      });
      return files;
    }
  },
  methods: {
    sendFiles() {
      this.$store.dispatch(CONSTANTS.SEND_FILES);
    },
    onRowSelected(rows) {
      this.$emit(
        'loaded-files-selected',
        rows.map(record => record.name)
      );
    }
  }
};
</script>

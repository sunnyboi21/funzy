<template>
  <div>
    <b-row>
      <h2>Loaded Files</h2>
    </b-row>
    <b-row>
      <b-col cols="8">
        <b-table
          class="text-left"
          :items="loadedFiles"
          :fields="fields"
          selectable
          responsive
          @row-selected="onRowSelected"
        ></b-table>
      </b-col>
    </b-row>
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
      loadedFiles.forEach((file, index) => {
        const { name } = file;
        if (!stagingFiles.includes(name)) {
          files.push({
            '#': index + 1,
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

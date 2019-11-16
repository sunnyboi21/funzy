<template>
  <div>
    <b-row>
      <h1>Loaded Files</h1>
    </b-row>
    <b-row>
      <b-col cols="8">
        <b-table class="text-left"
          :items="loadedFiles"
          :fields="fields"
          selectable
          @row-selected="onRowSelected"
        >
          <template v-slot:cell(actions)="row">
            <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
              Info modal
            </b-button>
            <b-button size="sm">
              {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
            </b-button>
          </template>
        </b-table>
      </b-col>
      <b-col class="d-flex flex-column-reverse justify-content-center flex-grow-0 mt-5">
        <b-button size="sm" :disabled="!rowsSelected.length" @click="moveToStaging">></b-button>  
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as CONSTANTS from '@store/constants';

export default {
  name: 'LoadedFiles',
  data: () => ({
    fields: [
      '#',
      'name'
    ],
    rowsSelected: []
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
      console.log(rows);
      this.rowsSelected = rows.map(record => record.name);
    },
    moveToStaging() {
      console.log('moveToStaging')
      if (this.rowsSelected.length) {
        this.$store.dispatch(CONSTANTS.MOVE_FILES_TO_STAGING, this.rowsSelected);
      }
    }
  }
};
</script>

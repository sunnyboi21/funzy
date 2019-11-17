<template>
  <div>
    <b-row>
      <h2>Staging Files</h2>
    </b-row>
    <b-row>
      <b-col cols="8">
        <b-table
          sticky-header
          style="max-height: 500px;"
          class="text-left h-100"
          :items="stagingFiles"
          :fields="fields"
          selectable
          responsive
          @row-selected="onRowSelected"
        ></b-table>
      </b-col>
      <b-col>
        <meta-data />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as CONSTANTS from '@store/constants';
import MetaData from '@components/MetaData';

export default {
  name: 'StagingFiles',
  components: {
    MetaData
  },
  data: () => ({
    fields: ['#', 'name']
  }),
  computed: {
    stagingFiles() {
      const files = [];
      const stagedFiles = this.$store.getters[CONSTANTS.GET_STAGING_FILES];
      let count = 1;
      stagedFiles.forEach(name => {
        files.push({
          '#': count++,
          name
        });
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
        'staged-files-selected',
        rows.map(record => record.name)
      );
    }
  }
};
</script>

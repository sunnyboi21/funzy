<template>
  <b-row>
    <b-col>
      <loaded-files @loaded-files-selected="loadedFilesSelected" />
    </b-col>
    <b-col class="d-flex flex-column-reverse justify-content-center flex-grow-0 mt-5">
      <b-button size="sm" :disabled="!selectedStagedFiles.length" @click="unstageFiles">
        &#60;
      </b-button> 
      <b-button size="sm" :disabled="!selectedLoadedFiles.length" @click="moveToStaging">
        >
      </b-button>
    </b-col>
    <b-col>
      <staging-files  @staged-files-selected="stagedFilesSelected" />
    </b-col>
  </b-row>
</template>

<script>
import * as CONSTANTS from '@store/constants';
import LoadedFiles from '@components/LoadedFiles';
import StagingFiles from '@components/StagingFiles';

export default {
  name: 'QueryTable',
  components: {
    StagingFiles,
    LoadedFiles
  },
  data: () => ({
    selectedLoadedFiles: [],
    selectedStagedFiles: []
  }),
  methods: {
    loadedFilesSelected(fileNames) {
      this.selectedLoadedFiles = fileNames;
    },
    stagedFilesSelected(fileNames) {
      this.selectedStagedFiles = fileNames;
    },
    moveToStaging() {
      console.log('moveToStaging');
      if (this.selectedLoadedFiles.length) {
        this.$store.dispatch(CONSTANTS.MOVE_FILES_TO_STAGING, this.selectedLoadedFiles);
        this.selectedLoadedFiles = [];
      }
    },
    unstageFiles() {
      if (this.selectedStagedFiles.length) {
        this.$store.dispatch(CONSTANTS.REMOVE_FILES_FROM_STAGING, this.selectedStagedFiles);
        this.selectedStagedFiles = [];
      }
    }
  }
};
</script>

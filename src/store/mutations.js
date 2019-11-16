import * as CONSTANTS from './constants';

export default {
  [CONSTANTS.ADD_FILE](state, file) {
    state.loadedFiles.push(file);
  },
  [CONSTANTS.MOVE_FILES_TO_STAGING](state, fileNames) {
    fileNames.forEach(fileName => {
      if (!state.stagingFiles.includes(fileName)) {
        state.stagingFiles.push(fileName);
      }
    });
  },
  [CONSTANTS.CLEAR_STAGING_FILES](state) {
    state.stagingFiles = [];
    state.loadedFiles = [];
  },
  [CONSTANTS.REMOVE_STAGING_FILES](state) {
    state.stagingFiles.forEach(fileName => {
      const fileIndex = state.loadedFiles.findIndex(file => file.name === fileName);
      if (fileIndex > -1) {
        state.loadedFiles.splice(fileIndex, 1);
      }
    });
  }
};

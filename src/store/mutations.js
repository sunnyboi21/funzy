import * as CONSTANTS from './constants';

export default {
  [CONSTANTS.ADD_LOADED_FILE](state, file) {
    const fileName = file.name;
    const fileIndex = state.loadedFiles.findIndex(file => file.name === fileName);
    if (fileIndex > -1) {
      state.loadedFiles.splice(fileIndex, 1, file);
    } else {
      state.loadedFiles.push(file);
    }
  },
  [CONSTANTS.ADD_FILE_TO_QUEUE](state, file) {
    state.filesInQueue.push(file);
  },
  [CONSTANTS.MOVE_FILES_TO_STAGING](state, fileNames) {
    fileNames.forEach(fileName => {
      if (!state.stagingFiles.includes(fileName)) {
        state.stagingFiles.push(fileName);
      }
    });
  },
  [CONSTANTS.MOVE_STAGING_TO_QUEUE](state, metadata) {
    state.stagingFiles.forEach(name => {
      state.filesInQueue.push({
        name,
        ...metadata
      });
    });
  },
  [CONSTANTS.CLEAR_LOADED_FILES](state) {
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
  },
  [CONSTANTS.REMOVE_FILES_FROM_STAGING](state, fileNames) {
    fileNames.forEach(fileName => {
      const fileIndex = state.stagingFiles.findIndex(fName => fName === fileName);
      if (fileIndex > -1) {
        state.stagingFiles.splice(fileIndex, 1);
      }
    });
  },
  [CONSTANTS.CHECK_QUEUE](state, fileList) {
    const filesInQueue = [];
    state.filesInQueue.forEach(file => {
      const fileIndex = fileList.findIndex(fName => fName === file.name);
      if (fileIndex > -1) {
        filesInQueue.push(file);
      }
    });
    state.filesInQueue = filesInQueue;
  },
  [CONSTANTS.SET_LOADING](state, bool) {
    state.loading = bool;
  }
};

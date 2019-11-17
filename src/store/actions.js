import * as CONSTANTS from './constants';
import axios from 'axios';

export default {
  [CONSTANTS.ADD_LOADED_FILE]({ commit }, file) {
    commit(CONSTANTS.ADD_LOADED_FILE, file);
  },
  [CONSTANTS.MOVE_FILES_TO_STAGING]({ commit }, fileNames) {
    commit(CONSTANTS.MOVE_FILES_TO_STAGING, fileNames);
  },
  [CONSTANTS.CLEAR_LOADED_FILES]({ commit }) {
    commit(CONSTANTS.CLEAR_LOADED_FILES);
  },
  [CONSTANTS.REMOVE_FILE]({ commit, fileName }) {
    commit(CONSTANTS.REMOVE_FILE, fileName);
  },
  [CONSTANTS.REMOVE_FILES_FROM_STAGING]({ commit }, fileNames) {
    commit(CONSTANTS.REMOVE_FILES_FROM_STAGING, fileNames);
  },
  [CONSTANTS.SEND_FILES]({ state, commit }, metadata) {
    commit(CONSTANTS.SET_LOADING, true);
    const formData = new FormData();
    for (let i = 0; i < state.stagingFiles.length; i++) {
      const fileIndex = state.loadedFiles.findIndex(file => file.name === state.stagingFiles[i]);
      if (fileIndex > -1) {
        formData.append('file2upload', state.loadedFiles[fileIndex]);
      }
    }
    Object.keys(metadata).forEach(key => {
      formData.append(key, metadata[key]);
    });
    axios({
      method: 'POST',
      url: 'http://localhost:5000/sendfile',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
      .then(result => {
        commit(CONSTANTS.MOVE_STAGING_TO_QUEUE, {
          timestamp: Date.now()
        });
        commit(CONSTANTS.REMOVE_STAGING_FILES);
        console.log(result);
      })
      .finally(() => {
        commit(CONSTANTS.MOVE_STAGING_TO_QUEUE, {
          timestamp: Date.now()
        });
        commit(CONSTANTS.REMOVE_STAGING_FILES);
        commit(CONSTANTS.SET_LOADING, false);
      });
  },
  [CONSTANTS.CHECK_QUEUE]({ commit }) {
    axios({
      method: 'GET',
      url: 'http://localhost:5000/checkqueue'
    }).then(filesInQueue => {
      console.log(filesInQueue);
      commit(CONSTANTS.CHECK_QUEUE, filesInQueue);
    });
  }
};

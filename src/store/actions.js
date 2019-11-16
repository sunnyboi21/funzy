import * as CONSTANTS from './constants';
import axios from 'axios';

export default {
  [CONSTANTS.ADD_FILE]({ commit }, file) {
    commit(CONSTANTS.ADD_FILE, file);
  },
  [CONSTANTS.MOVE_FILES_TO_STAGING]({ commit }, fileNames) {
    commit(CONSTANTS.MOVE_FILES_TO_STAGING, fileNames);
  },
  [CONSTANTS.CLEAR_STAGING_FILES]({ commit }) {
    commit(CONSTANTS.CLEAR_STAGING_FILES);
  },
  [CONSTANTS.REMOVE_FILE]({ commit, fileName }) {
    commit(CONSTANTS.REMOVE_FILE, fileName);
  },
  [CONSTANTS.SEND_FILES]({ state, commit }, metadata) {
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
        'Content-Type': 'application/json'
      },
      data: formData
    }).then(result => {
      commit(CONSTANTS.CLEAR_STAGING_FILES);
      console.log(result);
    });
  }
};

import * as CONSTANTS from './constants';
import axios from 'axios';

export default {
  [CONSTANTS.ADD_FILE]({ commit }, file) {
    commit(CONSTANTS.ADD_FILE, file);
  },
  [CONSTANTS.SEND_FILES]({ state, commit }) {
    const formData = new FormData();
    for (let i = 0; i < state.stagingFiles.length; i++) {
      formData.append('file2upload', state.stagingFiles[i]);
    }
    axios({
      method: 'POST',
      url: 'http://localhost:5000/sendFile',
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

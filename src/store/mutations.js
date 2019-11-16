import * as CONSTANTS from './constants';

export default {
  [CONSTANTS.ADD_FILE](state, file) {
    state.stagingFiles.push(file);
  },
  [CONSTANTS.CLEAR_STAGING_FILES](state) {
    state.stagingFiles = [];
  }
};

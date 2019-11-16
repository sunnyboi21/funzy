import * as CONSTANTS from './constants';

export default {
  [CONSTANTS.GET_STAGING_FILES](state) {
    return state.stagingFiles;
  },
  [CONSTANTS.GET_LOADED_FILES](state) {
    return state.loadedFiles;
  }
};

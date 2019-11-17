import * as CONSTANTS from './constants';

export default {
  [CONSTANTS.GET_STAGING_FILES](state) {
    return state.stagingFiles;
  },
  [CONSTANTS.GET_LOADED_FILES](state) {
    return state.loadedFiles;
  },
  [CONSTANTS.GET_FILES_IN_QUEUE](state) {
    return state.filesInQueue;
  },
  [CONSTANTS.GET_LOADING](state) {
    return state.loading;
  }
};

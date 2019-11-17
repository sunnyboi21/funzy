<template>
  <b-container>
    <loading-screen v-if="loading" />
    <file-upload />
    <query-table />
    <result-table />
  </b-container>
</template>

<script>
import * as CONSTANTS from '@store/constants';
import FileUpload from '@components/FileUpload';
import QueryTable from '@components/QueryTable';
import ResultTable from '@components/ResultTable';
import LoadingScreen from '@components/LoadingScreen';

export default {
  name: 'Container',
  components: {
    FileUpload,
    QueryTable,
    LoadingScreen,
    ResultTable
  },
  computed: {
    loading() {
      return this.$store.getters[CONSTANTS.GET_LOADING];
    }
  }
};
</script>

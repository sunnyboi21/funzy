<template>
  <b-row>
    <b-col>
      <loaded-files />
    </b-col>
    <b-col>
      <staging-files />
    </b-col>
    <b-col>
      <meta-data />
    </b-col>
  </b-row>
</template>

<script>
import LoadedFiles from '@components/LoadedFiles';
import StagingFiles from '@components/StagingFiles';
import MetaData from '@components/MetaData';

export default {
  name: 'QueryTable',
  components: {
    StagingFiles,
    LoadedFiles,
    MetaData
  }
};
</script>
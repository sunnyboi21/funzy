<template>
  <b-container>
    <file-upload />
    <query-table />
  </b-container>
</template>

<script>
import FileUpload from '@components/FileUpload';
import SendFiles from '@components/SendFiles'
import QueryTable from '@components/QueryTable';

export default {
  name: 'Container',
  components: {
    FileUpload,
    SendFiles,
    QueryTable
  }
};
</script>

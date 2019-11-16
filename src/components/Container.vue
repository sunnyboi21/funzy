<template>
  <div class="hello">
    <file-upload />
    <send-files />
    <staging-files />
  </div>
</template>

<script>
import FileUpload from '@components/FileUpload';
import SendFiles from '@components/SendFiles'
import StagingFiles from '@components/StagingFiles';

export default {
  name: 'Container',
  components: {
    FileUpload,
    SendFiles,
    StagingFiles
  }
};
</script>

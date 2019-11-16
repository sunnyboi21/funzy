<template>
  <div class="hello">
    <file-upload />
  </div>
</template>

<script>
import FileUpload from '@components/FileUpload';

export default {
  name: 'Container',
  components: {
    FileUpload
  }
};
</script>

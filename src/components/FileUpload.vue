<template>
  <div
    id="drag-target-box"
    class="row dz-clickable"
    data-max-file-size="1"
    data-max-file-count="20"
    data-token="PMTcbufz5ggLQkXVZKG1lvMw5CNxTGLsKiJ5258Z"
    style="width: 500px;height: 100px;"
  >
    <div
      id="drag-target"
      class="col-lg-8 col-md-8 col-sm-8 col-xs-8"
      @drop.prevent="addFile" @dragover.prevent
    >Drag &amp; drop images anywhere</div>
    <!-- /#drag-target -->
    <div id="click-target" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">or click here</div>
    <!-- /#file-button -->
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  data: () => ({
    files: []
  }),
  methods: {
    addFile(e) {
      console.log(e);
      console.log('ADD FILE');
      let droppedFiles = e.dataTransfer.files;
      if(!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      ([...droppedFiles]).forEach(f => {
        console.log('FILE UPLOADED');
        this.files.push(f);
      });
    }
  }
};
</script>

<style>
@media (max-width: 1200px) {
  #drag-target {
      padding: 0 35px;
  }
}
#drag-target {
    color: #91917d;
    padding: 0 55px;
    border-radius: 6px 0 0 6px;
}
#drag-target-box,
#fallback-form {
  border: 3px dashed #91917d;
  cursor: pointer;
  font-size: 21px;
  font-weight: 700;
  line-height: 76px;
  margin-top: 35px;
  padding: 2px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 6px;
}

#click-target {
    background: #91917d;
    border: none;
    color: #fff;
    padding: 0 32px;
    border-radius: 0 6px 6px 0;
}
</style>

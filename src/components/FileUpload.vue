<template>
  <div class="pt-2 pb-4">
    <b-row
      id="drag-target-box"
      class="row dz-clickable d-flex"
      data-max-file-size="1"
      data-max-file-count="20"
    >
      <input class="hidden-file" type="file" multiple @change="addFiles" />​
      <b-col
        id="drag-target"
        class
        cols="8"
        @drop.prevent="addFile"
        @dragover.prevent
      >Drag &amp; drop HERE</b-col>
      <!-- /#drag-target -->
      <b-col variant="danger">
        <div id="click-target" size="lg">OR CLICK HERE</div>
      </b-col>
      <!-- /#file-button -->
    </b-row>
  </div>
</template>

<script>
import * as CONSTANTS from '@store/constants';

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
      if (!droppedFiles) return;
      // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
      [...droppedFiles].forEach(f => {
        console.log('FILE UPLOADED');
        console.log(f);
        this.files.push(f);
        this.$store.dispatch(CONSTANTS.ADD_LOADED_FILE, f);
      });
    },
    addFiles(e) {
      if (e.target.files) {
        [...e.target.files].forEach(f => {
          this.files.push(f);
          this.$store.dispatch(CONSTANTS.ADD_LOADED_FILE, f);
        });
        e.target.value = '';
      }
    }
  }
};
</script>

<style>
#drag-target.active {
  color: #71715d;
  background-color: #c6c6bd;
}
#click-target:hover,
#drag-target-box:hover #click-target {
  background: #70705c;
}
#drag-area {
  margin-bottom: 40px;
}
#drag-box-title {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  margin: 30px 0 0;
  padding: 0;
  text-align: center;
}
@media (max-width: 1200px) {
  #drag-box-title {
    font-size: 40px;
    line-height: 50px;
  }
}
@media (max-width: 992px) {
  #drag-box-title {
    font-size: 30px;
    line-height: 40px;
  }
}
@media (max-width: 768px) {
  #drag-box-title {
    font-size: 20px;
    line-height: 32px;
    margin-top: 40px;
  }
  #convert-arrow,
  #drag-target-box {
    display: none;
  }
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
#drag-target-box:hover #drag-target {
  background: #d1d1c7;
}
#drag-target-box.active {
  border-color: #626262;
}
#drag-target {
  color: #91917d;
  padding: 0 55px;
  border-radius: 6px 0 0 6px;
}
#click-target {
  background: #91917d;
  border: none;
  color: #fff;
  padding: 0 32px;
  border-radius: 0 6px 6px 0;
}
#convert-arrow {
  margin: 25px 0 8px -80px;
}
@media (max-width: 1200px) {
  #drag-target-box,
  #fallback-form {
    font-size: 19px;
  }
  #drag-target {
    padding: 0 35px;
  }
  #click-target {
    padding: 0 12px;
  }
  #convert-arrow {
    margin-left: -50px;
  }
}
@media (max-width: 992px) {
  #drag-target-box,
  #fallback-form {
    font-size: 16px;
    line-height: 54px;
  }
  #drag-target {
    padding: 0 15px;
  }
  #click-target {
    padding: 0 8px;
  }
  #convert-arrow {
    margin: 15px 0 0 -85px;
    width: 120px;
    height: 54px;
  }
}
#mobile-form {
  display: none;
  text-align: center;
  overflow: hidden;
}
#mobile-form .input-frame {
  display: inline-block;
  position: relative;
  width: 150px;
  height: 35px;
}
#mobile-form .input-replace {
  display: none;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 150px;
  z-index: 10;
}
#mobile-form .input {
  z-index: 2;
  position: relative;
  width: 150px;
  max-width: 200px;
  overflow: hidden;
}
@media (max-width: 768px) {
  #mobile-form {
    display: block;
  }
}
#fallback-form {
  font-size: 18px;
  display: none;
}
#fallback-form #fallback-form-file {
  display: inline-block;
  line-height: 24px;
}
#fallback-form .input-frame {
  display: inline-block;
  position: relative;
  width: 300px;
  height: 45px;
  top: 20px;
}
#fallback-form .input-replace {
  display: none;
  left: 0;
  z-index: 10;
  position: absolute;
  top: 0;
  width: 300px;
  overflow: hidden;
}
#fallback-form .input {
  z-index: 2;
  position: relative;
  width: 250px;
  max-width: 250px;
  overflow: hidden;
}
@media (max-width: 768px) {
  #fallback-form {
    display: none !important;
  }
}
#drag-overlay {
  background-color: #262626;
  display: none;
  left: 0;
  height: 100%;
  opacity: 0.6;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100000;
}
.drag-target-box {
  cursor: pointer;
  position: relative;
}

/* hidden-file */
.hidden-file {
  opacity: 0;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1000;
  cursor: pointer;
}
</style>

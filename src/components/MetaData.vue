<template>
  <b-form class="text-left">
    <b-form-group
      id="input-group-1"
      label="Objective:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="metadata.objective"
        placeholder="Enter Objective"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="metadata.batch"
        placeholder="Enter Batch"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Food:" label-for="input-3">
      <b-form-input
        id="input-3"
        v-model="metadata.device"
        placeholder="Enter Device"
      ></b-form-input>
    </b-form-group>

    <b-button @click="sendFiles" variant="primary">SUBMIT</b-button>
  </b-form>
</template>

<script>
import * as CONSTANTS from '@store/constants';

export default {
  name: 'MetaData',
  data: () => ({
    metadata: {
      objective: '',
      batch: '',
      device: ''
    }
  }),
  methods: {
    sendFiles() {
      this.$store.dispatch(CONSTANTS.SEND_FILES, this.metadata);
    }
  }
};
</script>
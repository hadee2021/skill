<template>
  <div class="modal-wrapper" @click="onClose">
    <div>
      <img 
        :src="`/PIC/${imgData.folder}/${imgData.picture}`"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgData : {
      type: Object
    }
  },
  setup(props, { emit }) {
    const onClose = () => {
      emit('close')
    }
    console.log(props.imgData)

    return {
      onClose,
    }
  }
}
</script>

<style scoped>
  .modal-wrapper {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
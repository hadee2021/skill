<template>
  <div>
    <Content
      :dataArr="vueArr"
      @toggle-modal="openModal"
    />
    <teleport to='#modal'>
      <Modal 
        v-if="showModal"
        @close="closeModal"
        :imgData="imgData"
      />
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
import VueJSON from '@/Json/VuePrinciple.json'
import Content from '@/components/Content.vue'
import Modal from '@/components/Modal.vue'
export default { 
  components: {
    Content,
    Modal
  }, 
  setup() {
    const vueArr = ref(VueJSON)
    const showModal = ref(false)
    const imgData = ref('')

    const openModal = (data) =>  {
      console.log(data)
      showModal.value = true
      imgData.value = data
    }

    const closeModal = () => {
      showModal.value = false
      imgData.value = ''
    }

    return {
      vueArr,
      showModal,
      openModal,
      closeModal,
      imgData,
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
    <Content 
      :jsonArr="TodoArr"
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
import TodoJSON from '@/Json/Todo.json'
import Content from '@/components/Content.vue'
import Modal from '@/components/Modal.vue'
export default {
  components: {
    Content,
    Modal
  },
  setup() {
    const TodoArr = ref(TodoJSON)
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
      TodoArr,
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
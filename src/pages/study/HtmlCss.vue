<template>
  <div>
    <Content 
      :dataArr="htmlArr"
      @toggle-modal="openModal"
    />
    <Content 
      :dataArr="cssArr"
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
import HtmlJSON from '@/Json/Html.json'
import CssJSON from '@/Json/Css.json'
import Content from '@/components/Content.vue'
import Modal from '@/components/Modal.vue'
export default {
  components: {
    Content,
    Modal
  },
  setup() {
    const htmlArr = ref(HtmlJSON)
    const cssArr = ref(CssJSON)
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
      htmlArr,
      cssArr,
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
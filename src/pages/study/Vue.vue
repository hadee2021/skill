<template>
  <div>
    <Content
      :dataArr="vueArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import VueJSON from '@/Json/VuePrinciple.json'
import Content from '@/components/Content.vue'
export default { 
  components: {
    Content
  }, 
  setup() {
    const vueArr = ref(VueJSON)
    console.log(vueArr.value)
    return {
      vueArr
    }
  }
}
</script>

<style>

</style>
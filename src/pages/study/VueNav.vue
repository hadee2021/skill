<template>
  <Navigation
    :jsonArr="VueArr"
  />
</template>

<script>
import { ref } from 'vue'
import VueJSON from '@/Json/VuePrinciple.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const VueArr = ref(VueJSON)
    return {
      VueArr,
    }
  }
}
</script>

<style>

</style>
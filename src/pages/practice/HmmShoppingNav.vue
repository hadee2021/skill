<template>
  <div>
    <Navigation
      :jsonArr="HmmArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import HMMJSON from '@/Json/Hmm.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const HmmArr = ref(HMMJSON)
    return {
      HmmArr
    }
  }
}
</script>

<style>

</style>
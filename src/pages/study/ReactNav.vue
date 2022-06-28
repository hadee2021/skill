<template>
  <div>
    <Navigation
      :jsonArr="ReactArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import REACTJSON from '@/Json/React.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const ReactArr = ref(REACTJSON)
    return {
      ReactArr
    }
  }
}
</script>

<style>

</style>
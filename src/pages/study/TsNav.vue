<template>
  <div>
    <Navigation
      :jsonArr="TsArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import TSJSON from '@/Json/Ts.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const TsArr = ref(TSJSON)
    return {
      TsArr
    }
  }
}
</script>

<style>

</style>
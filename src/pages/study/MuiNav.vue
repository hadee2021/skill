<template>
  <div>
    <Navigation
      :jsonArr="MuiArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import MUIJSON from '@/Json/Mui.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const MuiArr = ref(MUIJSON)
    return {
      MuiArr
    }
  }
}
</script>

<style>

</style>
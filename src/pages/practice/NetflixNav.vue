<template>
  <div>
    <Navigation
      :jsonArr="NetflixArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import NETFLIXJSON from '@/Json/Netflix.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const NetflixArr = ref(NETFLIXJSON)
    return {
      NetflixArr
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
    <Navigation
      :jsonArr="aboutMeArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import AboutMeJSON from '@/Json/AboutMe.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const aboutMeArr = ref(AboutMeJSON)
    return {
      aboutMeArr
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
    <Content 
      :jsonArr="aboutMeArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import AboutMeJSON from '@/Json/AboutMe.json'
import Content from '@/components/Content.vue'
export default {
  components: {
    Content
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
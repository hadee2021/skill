<template>
  <div>
    <Navigation
      :jsonArr="htmlArr"
    />
    <Navigation
      :jsonArr="cssArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import HtmlJSON from '@/Json/Html.json'
import CssJSON from '@/Json/Css.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const htmlArr = ref(HtmlJSON)
    const cssArr = ref(CssJSON)
    return {
      htmlArr,
      cssArr,
    }
  }
}
</script>

<style>
  
</style>
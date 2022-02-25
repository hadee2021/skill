<template>
  <div>
    <Content 
      :dataArr="htmlArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import HtmlCssJSON from '@/Json/HtmlCss.json'
import Content from '@/components/Content.vue'
export default {
  components: {
    Content
  },
  setup() {
    const htmlArr = ref(HtmlCssJSON.html)
    const cssArr = ref(HtmlCssJSON.css)
    return {
      htmlArr,
      cssArr,
    }
  }
}
</script>

<style>

</style>
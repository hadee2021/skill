<template>
  <div>
    <Content 
      :dataArr="htmlArr"
    />
    <Content 
      :dataArr="cssArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import HtmlJSON from '@/Json/Html.json'
import CssJSON from '@/Json/Css.json'
import Content from '@/components/Content.vue'
export default {
  components: {
    Content
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
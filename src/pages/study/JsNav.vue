<template>
  <div>
    <Navigation
      :jsonArr="JsArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import JSJSON from '@/Json/Js.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const JsArr = ref(JSJSON)
    return {
      JsArr
    }
  }
}
</script>

<style>

</style>
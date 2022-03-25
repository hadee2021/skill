<template>
  <div>
    <Navigation
      :jsonArr="TodoArr"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import TodoJSON from '@/Json/Todo.json'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  setup() {
    const TodoArr = ref(TodoJSON)
    return {
      TodoArr
    }
  }
}
</script>

<style>

</style>
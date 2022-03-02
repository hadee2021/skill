<template>
  <div class="nav-area">
    <div class="scrollbar"> </div>
    <nav>
      <p
        v-for="data in VueArr"
        :key="data.id"
      >
        <a :href="data.headHref" v-if="data.headHref">
          {{ data.headName }}
        </a>
      </p>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue'
import VueJSON from '@/Json/VuePrinciple.json'
export default {
  setup() {
    const VueArr = ref(VueJSON)
    return {
      VueArr,
    }
  }
}
</script>

<style scoped>
  a,
  a:visited
  { 
    text-decoration: none;
    color: black;
  }
  .nav-area{
    display: flex;
  }
  .scrollbar{
    width: 8px;
    height: 25px;
    background-color: #42b883;
  }
  p {
    padding-left: 5px;
    color: black;
    font-size: 20px;
  }
  a:hover {
    color: #42b883;
    cursor: pointer;
  }
</style>
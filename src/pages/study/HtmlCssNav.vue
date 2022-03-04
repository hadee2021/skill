<template>
  <div class="nav-area">
    <div class="scrollbar"> </div>
    <nav>
      <p
        v-for="data in htmlArr"
        :key="data.id"
      >
        <a :href="data.headHref" v-if="data.headHref">
          {{ data.headName }}
        </a>
      </p>
      <hr/>
      <p
        v-for="data in cssArr"
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
import HtmlJSON from '@/Json/Html.json'
import CssJSON from '@/Json/Css.json'
export default {
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
    font-size: 17px;
  }
  a:hover {
    color: #42b883;
    cursor: pointer;
  }
</style>
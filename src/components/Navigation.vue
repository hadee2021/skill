<template>
  <div class="nav-area">
    <div 
      :class="{ scrollbarColor : scrollbarVisible }"
      class="scrollbar"
    >
    </div>

    <nav>
      <p
        v-for="data in jsonArr"
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
export default {
  props: {
    jsonArr : {
      type : Array
    },
    scrollbarVisible : {
      type : Boolean,
      default : true
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
  }
  .scrollbarColor {
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
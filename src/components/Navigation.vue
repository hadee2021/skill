<template>
  <div class="nav-area">
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
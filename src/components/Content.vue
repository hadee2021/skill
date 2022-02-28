<template>
  <div>
    <div 
      v-for="data in dataArr"
      :key="data.id"
    >
      <h2 :id="data.headId"> 
        <a :href="data.headHref" v-if="data.headHref">#</a>
        {{ data.headName }}
      </h2>
      <div class="img-position-center">
        <img :src="`/PIC/${data.folder}/${data.picture}`">
      </div>
      <div class="textbox">
        <div 
          v-for="(x, index) in data.contentArr"
          :key="index"
          v-html="x"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataArr : {
      type : Array,
    }
  },
  setup(props) {
    console.log(props.dataArr[0])
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
  h2 {
    text-align: center;
  }
  .img-position-center
  {
    display: flex;
    justify-content: center;
  }
  .textbox {
    padding-left: 160px;
    margin: 15px 0;
  }
  img {
    border: 1px solid black;
    max-width: 60%;
  }
  .highlight-deepskyblue {
    background-color: deepskyblue;
  }
  .textcolor-red {
    color: red;
  }
  .textcolor-blue {
    color: blue;
  }
</style>
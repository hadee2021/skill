<template>
  <div>
    <div 
      v-for="data in dataArr"
      :key="data.id"
    >
      <h2 :id="data.headId"> 
        <a :href="data.headHref">#</a>
        {{ data.headName }}
      </h2>
      <div class="img-position-center">
        <img :src="require(`../assets/PIC/${data.folder}/${data.picture}`)">
      </div>
      <div class="textbox">
        <div>
          <span>{{data.p1}}</span> <br>
          <span>{{data.p2}}</span> <br>
          <span>{{data.p3}}</span> <br>
          <span>{{data.p4}}</span> <br>
          <span>{{data.p5}}</span> <br><br>
          <span>{{data.p6}}</span> <br>
          <span>{{data.p7}}</span> <br>
          <span>{{data.p8}}</span> <br>
          <span>{{data.p9}}</span> <br>
          <span>{{data.p10}}</span> <br><br>
          <span>{{data.p11}}</span> <br>
          <span>{{data.p12}}</span> <br>
          <span>{{data.p13}}</span> <br>
          <span>{{data.p14}}</span> <br>
          <span>{{data.p15}}</span> <br><br>
          <span>{{data.p16}}</span> <br>
          <span>{{data.p17}}</span> <br>
          <span>{{data.p18}}</span> <br>
          <span>{{data.p19}}</span> <br>
          <span>{{data.p20}}</span> <br><br>
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
  .img-position-center,
  .textbox
  {
    display: flex;
    justify-content: center;
  }
  .textbox {
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
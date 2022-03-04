<template>
  <div>
    <div 
      v-for="data in jsonArr"
      :key="data.id"
    >
      <h2 :id="data.headId"> 
        <a :href="data.headHref" v-if="data.headHref">#</a>
        {{ data.headName }}
      </h2>
      <div class="img-position-center">
        <img 
          :src="`/PIC/${data.folder}/${data.picture}`"
          @click.stop="openModal(data)"
        >
      </div>
      <div class="textboxdiv">
        <div class="textbox">
          <div 
            v-for="(content, index) in data.contentArr"
            :key="index"
            v-html="content"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jsonArr : {
      type : Array,
    }
  },
  emits: ['toggle-modal'],
  setup(props, { emit }) {
    const openModal = (data) => {
      emit('toggle-modal', data)
    }
    return {
      openModal
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
  .img-position-center
  {
    display: flex;
    justify-content: center;
  }
  .textboxdiv {
    display: flex;
    justify-content: center;
  }
  .textbox {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 15px 10px;
  }
  .textbox > div {
    align-self: baseline;
  }
  img {
    border: 1px solid black;
    max-width: 60%;
  }
</style>
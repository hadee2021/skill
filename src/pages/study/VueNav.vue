<template>
  <div class="nav-area">
    <div class="scrollbar"> </div>
    <nav>
      <p>Vue 개관</p>
      <p>파일 관계</p>
      <p>컴포넌트</p>
      <p>전역, 로컬</p>
      <p>라이프 사이클</p>
      <p>script 영역</p>
      <p>template 영역</p>
      <p>optional API</p>
      <p>composition API</p>
      <p>반응성</p>
      <p>props와 emits</p>
      <p>resfs</p>
      <p>toRefs</p>
      <p>외부js</p>
      <p>믹스인</p>
      <p>플러그인</p>
      <p>vuex</p>
      <p>axios</p>
      <p>slot</p>
      <p>router</p>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  p:hover {
    color: #42b883;
    cursor: pointer;
  }
</style>
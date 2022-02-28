<template>
  <div class="nav-area">
    <div class="scrollbar"> </div>
    <nav>
      <p>html 개관</p>
      <p>div</p>
      <p>단락</p>
      <p>기능형</p>
      <p>사진,비디오</p>
      <hr/>
      <p>CSS 개관</p>
      <p>요소, 부모 자식</p>
      <p>선택자</p>
      <p>box</p>
      <p>width,height</p>
      <p>변수</p>
      <p>flex</p>
      <p>grid</p>
      <p>containing block</p>
      <p>block formatting context</p>
      <p>position</p>
      <p>overflow</p>
      <p>float</p>
      <p>font</p>
      <p>backgournd</p>
      <p>shadow</p>
      <p>미디어 쿼리</p>
      <p>transform</p>
      <p>animation</p>
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
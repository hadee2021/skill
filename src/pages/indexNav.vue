<template>
  <div class="nav-area">
    <div class="scrollbar"> </div>
    <nav>
      <p>간단한 소개</p>
      <p>기술 스택</p>
      <p>홈페이지</p>
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
    font-size: 17px;
  }
  p:hover {
    color: #42b883;
    cursor: pointer;
  }
</style>
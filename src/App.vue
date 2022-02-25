<template>
  <div class="flex-container">
    <div id="AsidMenu">
      <AsideMenu />
    </div>
    <div id="router-area">
      <router-view />
    </div>
    
    <div class="nav-menu">
      <NavigationMenu />
    </div>
  </div>
</template>

<script>
import AsideMenu from '@/components/AsideMenu.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
export default {
  components: {
    AsideMenu,
    NavigationMenu
  }
}
</script>

<style>
  .flex-container {
    display: flex;
    height: 100%;
  }

  #AsidMenu {
    min-width: 300px;
    height: calc(100vh - 20px);
    border: 2px solid #4472C4;
    background-color: aliceblue;
    margin: 5px 0 0 20px;
    overflow: auto;
    border-radius: 16px;
  }
  #router-area {
    overflow: auto;
    flex: 1;
    padding-top: 25px;
    padding-left: 35px;
    margin-top: 5px;
  }
  .nav-menu {
    /* 
    position: fixed;
    top: 20px;
    left: 90%;
    */
    overflow: auto;

    min-width: 220px;
    border: 2px solid #4472C4;
    background-color: aliceblue;

    padding-right: 10px;
    margin-top: 5px;
    margin-right: 20px;
  }
  .nav-menu::-webkit-scrollbar {
    width: 5px;
    background-color: aliceblue;
  }

  #router-area::-webkit-scrollbar {
    width: 10px;
  }
  #router-area::-webkit-scrollbar-thumb {
    background-color: #14a3e6;
    border-radius: 10px;
  }
  #router-area::-webkit-scrollbar-track {
    /*background-color: rgb(125, 129, 131); */
    border-radius: 10px;
    /*box-shadow: inset 0px 0px 5px white; */
  }
</style>

<template>
  <div class="flex-container">
    <header>
      <div>
        <i class="fa-solid fa-bars menubtn" 
          @click.stop="openMenu()"
          v-if="!showAsideMenu"
        >
        </i>
        <!-- <i 
          class="fa-solid fa-xmark closebtn"
          v-if="showAsideMenu"
        >
        </i> -->
      </div>
      <div>Hadee`s Blog</div>
      <div></div>
    </header>
    <div class="AsidMenu" >
      <AsideMenu />
    </div>
    <div id="router-area">
      <router-view />
    </div>
    <div class="nav-menu">
      <NavigationMenu />
    </div>
    <teleport to='#modal'>
      <AsideMenu 
        v-if="showAsideMenu"
        class="modal-wrapper"
        @close="closeMenu"
        :showAsideMenu="showAsideMenu"
      />
    </teleport>
  </div>
</template>

<script>
import AsideMenu from '@/components/AsideMenu.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
import {  ref } from 'vue'
export default {
  components: {
    AsideMenu,
    NavigationMenu
  },
  setup() {
    const showAsideMenu = ref(false)
    const openMenu = () => {
      showAsideMenu.value = true
    }
    const closeMenu = () => {
      showAsideMenu.value = false
    }
    return {
      openMenu,
      showAsideMenu,
      closeMenu,
    }
  }
}
</script>

<style>
  header {
    display: none;
  }
  .flex-container {
    display: flex;
    height: 100%;
    /* background-color:  rgba(193, 244, 197, 0.5); */
  }

  .AsidMenu {
    position: fixed;
    top: 90px;
    width: 300px;
    /* height: calc(100vh - 20px); */
    border: 2px solid rgb(66, 194, 255);
    background-color: rgba(66, 194, 255, 0.2);
    margin: 5px 0 0 20px;
    overflow: auto;
    border-radius: 16px;
    max-height: 700px;
    overflow: auto;
  }
  
  #router-area {
    overflow: auto;
    flex: 1;
    padding-top: 30px;
    padding-left: 200px;
    margin-top: 5px;
  }
  .nav-menu {
    position: relative;
    top: 100px;
    height: 500px;
    overflow: auto;
    width: 250px;
    border-left: 2px solid #4472C4;

    padding-right: 10px;
    margin-top: 5px;
    margin-right: 20px;
  }
  .AsidMenu::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(240, 248, 255, 0);
  }
  .nav-menu::-webkit-scrollbar {
    width: 5px;
    /* background-color: aliceblue; */
    /* background-color: white; */
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

  @media screen and (max-width: 1300px) {
    .nav-menu {
      display: none;
    }
    .menubtn {
      cursor: pointer;
    }
    #router-area {
      padding-top: 0;
      padding-left: 0px;
      margin-top: 50px;
    }
    .AsidMenu {
      display: none;
    }
    header {
      display: flex;
      justify-content: space-between;
      position: fixed;
      width: 100%;
      /* border: 2px solid rgb(66, 194, 255); */
      background-color: rgb(66, 194, 255);
      color: white;
      font-weight: 1000;
      font-size: 20px;
      padding: 12px;
    }
    .modal-wrapper {
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
</style>

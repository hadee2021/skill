<template>
  <div>
    <div class="menu-container">
      <div class="title">
        <router-link class="link" :to="{ name: 'Home'}">Hadee`s Main </router-link>
      </div>
      <div class="title">
        <router-link class="link" :to="{ name: 'Home'}">About me </router-link>
      </div>
      <div>
        <div class="title-toggle">
          <span class="title">Study</span>
          <i class="fa-solid fa-angle-down" @click="studyToggle" :class="{ toggleRotate :visibleObj.study }"></i>
        </div>
        <ul v-if="visibleObj.study">
          <li>
            <router-link class="link" :to="{ name: 'HtmlCss'}">Html/CSS</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Js'}">Js</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Vue'}">Vue</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Cs'}">CS.e.t.c</router-link>
          </li>
        </ul>
      </div>
      <div>
        <div class="title-toggle">
          <span class="title">Practice</span>
          <i class="fa-solid fa-angle-down" @click="praticesToggle" :class="{ toggleRotate :visibleObj.pratices }"></i>
        </div>
        <ul v-if="visibleObj.pratices">
          <li>
            <router-link class="link" :to="{ name: 'Youtube'}">YouTube</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Todo'}">Todo</router-link>
          </li>
        </ul>
      </div>
      <div>
        <div class="title-toggle">
          <span class="title">Blog</span>
          <i class="fa-solid fa-angle-down" @click="blogToggle" :class="{ toggleRotate :visibleObj.blog }"></i>
        </div>
        <ul v-if="visibleObj.blog">
          <li>
            <router-link class="link" :to="{ name: 'Hadee'}">Hadee`s Blog</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="github-letter">
      <i class="fa-solid fa-envelope"></i>
      <span> hadee2021@github.com </span>
      <i class="fa-brands fa-github"></i>
    </div>
  </div>
</template>

<script>
import {  ref } from 'vue'

export default {
  setup() {
    const visibleObj = ref({
      study : false,
      pratices : false,
      blog : false,
    })

    const studyToggle = () => {
      visibleObj.value.study = !visibleObj.value.study
    }
    const praticesToggle = () => {
      visibleObj.value.pratices = !visibleObj.value.pratices
    }
    const blogToggle = () => {
      visibleObj.value.blog = !visibleObj.value.blog
    }
    return {
      visibleObj,
      studyToggle,
      praticesToggle,
      blogToggle
    }
  }
}
</script>

<style>
i{
  cursor: pointer;
}
  .link {
    color: black;
    text-decoration: none;
  }
  .link:visited {
    color: black;
  }
  .menu-container {
    padding: 20px 35px 0 35px;
    height: 90vh;
  }
  .menu-container > div {
    padding-top: 15px;
  }
  .menu-container > div:first-child {
    font-weight: 1000;
  }
  .title-toggle {
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-size: 20px;
  }
  ul {
    list-style: none;
  }
  li {
    padding-top: 15px;
  }
  .github-letter {
    padding: 0 15px 0 15px;
    font-size: 19px;
  }
  .toggleRotate {
    transform: rotate(180deg);
  }
</style>
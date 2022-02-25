import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import HomeNav from '@/pages/indexNav.vue'
import HtmlCss from '@/pages/study/HtmlCss.vue'
import HtmlCssNav from '@/pages/study/HtmlCssNav.vue'
import Js from '@/pages/study/Js.vue'
import JsNav from '@/pages/study/JsNav.vue'
import Vue from '@/pages/study/Vue.vue'
import VueNav from '@/pages/study/VueNav.vue'
import Cs from '@/pages/study/Cs.vue'
import CsNav from '@/pages/study/CsNav.vue'
import Youtube from '@/pages/practice/Youtube.vue'
import YoutubeNav from '@/pages/practice/YoutubeNav.vue'
import Todo from '@/pages/practice/Todo.vue'
import TodoNav from '@/pages/practice/TodoNav.vue'
import Hadee from '@/pages/blog/Hadee.vue'
import HadeeNav from '@/pages/blog/HadeeNav.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        nav: HomeNav
      }
    },
    {
      path: '/study/html',
      name: 'HtmlCss',
      components: {
        default: HtmlCss,
        nav: HtmlCssNav
      }
    },
    {
      path: '/study/js',
      name: 'Js',
      components: {
        default: Js,
        nav: JsNav
      }
    },
    {
      path: '/study/vue',
      name: 'Vue',
      components: {
        default: Vue,
        nav: VueNav
      }
    },
    {
      path: '/study/cs',
      name: 'Cs',
      components: { 
        default: Cs,
        nav: CsNav
      }
    },
    {
      path: '/practice/youtube',
      name: 'Youtube',
      components: {
        default: Youtube,
        nav: YoutubeNav
      }
    },
    {
      path: '/practice/todo',
      name: 'Todo',
      components: { 
        default: Todo, 
        nav: TodoNav
      }
    },
    {
      path: '/blog/hadee',
      name: 'Hadee',
      components: {default: Hadee,
        nav: HadeeNav
      }
    }
  ]
})

export default router
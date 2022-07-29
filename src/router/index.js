import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import HomeNav from '@/pages/indexNav.vue'
import HtmlCss from '@/pages/study/HtmlCss.vue'
import HtmlCssNav from '@/pages/study/HtmlCssNav.vue'
import Js from '@/pages/study/Js.vue'
import JsNav from '@/pages/study/JsNav.vue'
import Vue from '@/pages/study/Vue.vue'
import VueNav from '@/pages/study/VueNav.vue'
import Ts from '@/pages/study/Ts.vue'
import TsNav from '@/pages/study/TsNav.vue'
import React from '@/pages/study/React.vue'
import ReactNav from '@/pages/study/ReactNav.vue'
import Mui from '@/pages/study/Mui.vue'
import MuiNav from '@/pages/study/MuiNav.vue'
import HmmShopping from '@/pages/practice/HmmShopping.vue'
import HmmShoppingNav from '@/pages/practice/HmmShoppingNav.vue'
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
      path: '/study/ts',
      name: 'Ts',
      components: { 
        default: Ts,
        nav: TsNav
      }
    },
    {
      path: '/study/react',
      name: 'React',
      components: { 
        default: React,
        nav: ReactNav
      }
    },
    {
      path: '/study/mui',
      name: 'Mui',
      components: { 
        default: Mui,
        nav: MuiNav
      }
    },
    {
      path: '/practice/hmmShopping',
      name: 'HmmShopping',
      components: {
        default: HmmShopping,
        nav: HmmShoppingNav
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
/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\Code\\Repository\\hcs-note\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-ae53fb92",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ae53fb92").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-19207c0c",
    path: "/read/css-mastery/8.%E5%93%8D%E5%BA%94%E5%BC%8F.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-19207c0c").then(next)
    },
  },
  {
    path: "/read/css-mastery/8.响应式.html",
    redirect: "/read/css-mastery/8.%E5%93%8D%E5%BA%94%E5%BC%8F.html"
  },
  {
    path: "/read/css-mastery/8.响应式.html",
    redirect: "/read/css-mastery/8.%E5%93%8D%E5%BA%94%E5%BC%8F.html"
  },
  {
    name: "v-5e00962c",
    path: "/read/css-mastery/10.%E5%8F%98%E6%8D%A2%E3%80%81%E8%BF%87%E6%B8%A1%E4%B8%8E%E5%8A%A8%E7%94%BB.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5e00962c").then(next)
    },
  },
  {
    path: "/read/css-mastery/10.变换、过渡与动画.html",
    redirect: "/read/css-mastery/10.%E5%8F%98%E6%8D%A2%E3%80%81%E8%BF%87%E6%B8%A1%E4%B8%8E%E5%8A%A8%E7%94%BB.html"
  },
  {
    path: "/read/css-mastery/10.变换、过渡与动画.html",
    redirect: "/read/css-mastery/10.%E5%8F%98%E6%8D%A2%E3%80%81%E8%BF%87%E6%B8%A1%E4%B8%8E%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-b2d8b9fc",
    path: "/read/css-mastery/11.%E9%AB%98%E7%BA%A7%E7%89%B9%E6%95%88.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b2d8b9fc").then(next)
    },
  },
  {
    path: "/read/css-mastery/11.高级特效.html",
    redirect: "/read/css-mastery/11.%E9%AB%98%E7%BA%A7%E7%89%B9%E6%95%88.html"
  },
  {
    path: "/read/css-mastery/11.高级特效.html",
    redirect: "/read/css-mastery/11.%E9%AB%98%E7%BA%A7%E7%89%B9%E6%95%88.html"
  },
  {
    name: "v-23cb5c22",
    path: "/read/css-mastery/12.%E5%93%81%E6%8E%A7%E4%B8%8E%E6%B5%81%E7%A8%8B.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-23cb5c22").then(next)
    },
  },
  {
    path: "/read/css-mastery/12.品控与流程.html",
    redirect: "/read/css-mastery/12.%E5%93%81%E6%8E%A7%E4%B8%8E%E6%B5%81%E7%A8%8B.html"
  },
  {
    path: "/read/css-mastery/12.品控与流程.html",
    redirect: "/read/css-mastery/12.%E5%93%81%E6%8E%A7%E4%B8%8E%E6%B5%81%E7%A8%8B.html"
  },
  {
    name: "v-3c9b42b3",
    path: "/read/css-mastery/9.%E8%A1%A8%E5%8D%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E8%A1%A8.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3c9b42b3").then(next)
    },
  },
  {
    path: "/read/css-mastery/9.表单与数据表.html",
    redirect: "/read/css-mastery/9.%E8%A1%A8%E5%8D%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E8%A1%A8.html"
  },
  {
    path: "/read/css-mastery/9.表单与数据表.html",
    redirect: "/read/css-mastery/9.%E8%A1%A8%E5%8D%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E8%A1%A8.html"
  },
  {
    name: "v-f0f58de6",
    path: "/read/css-mastery/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f0f58de6").then(next)
    },
  },
  {
    path: "/read/css-mastery/index.html",
    redirect: "/read/css-mastery/"
  },
  {
    name: "v-66a8bdcd",
    path: "/read/professional-javascript/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-66a8bdcd").then(next)
    },
  },
  {
    path: "/read/professional-javascript/index.html",
    redirect: "/read/professional-javascript/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]
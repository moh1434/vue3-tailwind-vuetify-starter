import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes:[
    { path: '/about', component:()=>import(/* webpackChunkName: "about" */ './pages/About.vue') },
  ],
})

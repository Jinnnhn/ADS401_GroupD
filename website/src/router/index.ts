import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 90 }
    return { top: 0 }
  },
})

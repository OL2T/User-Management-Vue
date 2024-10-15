import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateUserView from '@/views/CreateUserView.vue'
import DetailView from '@/views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateUserView,
    },
    {
      path: '/update/:id',
      name: 'updateUser',
      component: CreateUserView,
    },
    {
      path: '/user/:id',
      name: 'userDetail',
      component: DetailView,
    },
  ],
})

export default router

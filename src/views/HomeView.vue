<script setup>
import { useUserStore } from '@/store/UserStore'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()
</script>

<template>
  <main class="main">
    <input
      type="text"
      placeholder="Enter search here"
      @input="e => store.handleChangeInputSearch(e.target.value)"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
    <div class="group-card">
      <div class="card-item" v-for="user in store.filterUsers" :key="user.id">
        <div @click="router.push({ path: `/user/${user.id}` })">
          <h2>{{ user.name }}</h2>
          <div>{{ user.email }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

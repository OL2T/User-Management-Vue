<script setup>
import { useUserStore } from '@/store/UserStore'
import { reactive } from 'vue'

import { useRoute, useRouter } from 'vue-router'

const store = useUserStore()
const route = useRoute()
const router = useRouter()
const inputUser = reactive({
  name: route.params.id ? store.detailUser.name : '',
  username: route.params.id ? store.detailUser.username : '',
  email: route.params.id ? store.detailUser.email : '',
  phone: route.params.id ? store.detailUser.phone : '',
  website: route.params.id ? store.detailUser.website : '',
})

// const resetInputUser = () => {
//   inputUser.name = ''
//   inputUser.username = ''
//   inputUser.email = ''
//   inputUser.phone = ''
//   inputUser.website = ''
// }

const handleCreateUser = () => {
  // resetInputUser()
  const generateId = () => {
    return Math.ceil(Math.random() * 10) + 11
  }
  store.handleCreateUser({
    id: generateId(),
    ...inputUser,
  })
  router.push({ path: '/' })
  // console.log(store.users)
}

const handleUpdateUser = () => {
  store.handleUpdateUser({
    id: Number(route.params.id),
    ...inputUser,
  })
  router.push({ path: '/' })
}
</script>

<template>
  <div class="main">
    <h1 class="text-3xl font-bold">
      {{ route.params.id ? 'Update User' : 'Create User' }}
    </h1>
    <form class="my-4">
      <div class="group flex flex-col gap-y-4 mb-4">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Name:</label
          >
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            v-model="inputUser.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >User Name:</label
          >
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="inputUser.username"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Email:</label
          >
          <input
            id="email"
            type="text"
            placeholder="Enter email"
            v-model="inputUser.email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Phone:</label
          >
          <input
            id="phone"
            type="text"
            placeholder="Enter phone"
            v-model="inputUser.phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            for="website"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Website:
          </label>
          <input
            id="website"
            type="text"
            placeholder="Enter website"
            v-model="inputUser.website"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        @click.prevent="
          route.params.id ? handleUpdateUser() : handleCreateUser()
        "
        class="bg-[#324558] rounded-full text-white font-medium px-5 py-3"
      >
        {{ route.params.id ? 'Update' : 'Create New' }}
      </button>
    </form>
  </div>
</template>

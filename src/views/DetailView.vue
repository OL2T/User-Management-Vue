<script setup>
import { useUserStore } from '@/store/UserStore'
import { useRoute, useRouter } from 'vue-router'

const store = useUserStore()
const userDetail = store.detailUser
const route = useRoute()
const router = useRouter()

const handleDeleteUser = () => {
  console.log(route.params.id)
  store.handleDeleteUser(Number(route.params.id))
  router.push({ path: '/' })
}
</script>

<template>
  <div class="main">
    <div v-if="userDetail" class="information">
      <h2 class="text-2xl mb-2">{{ userDetail.name }}</h2>
      <div class="group flex flex-col gap-y-3 text-sm">
        <div class="flex">
          <div class="font-bold mr-1">User name:</div>
          {{ userDetail.username }}
        </div>
        <div class="flex">
          <div class="font-bold mr-1">Email:</div>
          {{ userDetail.email }}
        </div>
        <div class="flex">
          <div class="font-bold mr-1">Phone:</div>
          {{ userDetail.phone }}
        </div>
        <div class="flex">
          <div class="font-bold mr-1">Website:</div>
          {{ userDetail.website }}
        </div>
      </div>
    </div>
    <div class="group-btn flex gap-x-4">
      <button
        type="button"
        @click="handleDeleteUser"
        class="bg-[#324558] rounded-full text-white font-medium px-5 py-3 mt-4 hover:bg-opacity-90"
      >
        Delete
      </button>
      <button
        type="button"
        @click="router.push({ path: `/update/${userDetail.id}` })"
        class="bg-[#324558] rounded-full text-white font-medium px-5 py-3 mt-4 hover:bg-opacity-90"
      >
        Update
      </button>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 600;
}
.information {
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24);
  background-color: hsla(160, 100%, 37%, 0.1);
}
</style>

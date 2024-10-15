<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const inputUser = reactive({
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
})
const resetInputUser = () => {
  inputUser.name = ''
  inputUser.username = ''
  inputUser.email = ''
  inputUser.phone = ''
  inputUser.website = ''
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <nav class="group">
        <RouterLink to="/">
          <button>Home</button>
        </RouterLink>
        <RouterLink to="/create"
          ><button @click="resetInputUser">Create User</button></RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
  <!-- <router-view></router-view> -->
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24);
  padding: 16px 24px;
  font-size: 1rem;
}

.logo {
  width: 30px;
  height: 30px;
}
button {
  background: unset;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: inherit;
  &:hover {
    cursor: pointer;
    color: hsla(160, 100%, 37%, 0.8);
  }
}
.btn-main {
  background-color: hsla(160, 100%, 37%, 1);
}
.group {
  display: flex;
  column-gap: 16px;
}
</style>

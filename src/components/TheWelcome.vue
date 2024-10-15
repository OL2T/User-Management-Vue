<script setup>
import { ref } from 'vue'

const props = defineProps(['countView'])
const emit = defineEmits('handle-increase')
// const count = ref(0)

const textInput = ref('')
// console.log('Re-render component')
const onIncrease = () => {
  emit('handle-increase', 10)
}
</script>

<template>
  <div>
    <div>Count is: {{ props.countView }}</div>
    <button @click="onIncrease">Increase</button>
    <div>
      <div>Text is: {{ textInput }}</div>
      <input type="text" placeholder="Type here..." v-model="textInput" />
    </div>
  </div>
</template>

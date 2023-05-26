<script setup>
import { ref } from "vue";
const text = ref("我是组件内容");
</script>
<template>
  <button class="button">{{ text }}</button>
</template>

<style scoped>
.button {
  background-color: blue;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
</style>

<script setup>

import { state } from '@/stores/index.js'
</script>

<template>
  <div v-show="state().getIsDialog()" class="shade"></div>
</template>

<style scoped>
.shade {
  width: 100%;
  height: 100%;
  background-color: rgb(36 42 58 / 50%);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
